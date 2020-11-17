/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    /**
     * This is the global store for parameters that allows us to preserve them across sim runs
     */
    const simParameters:any = {}
    /**
     * We set this uniquely every time the render runs. 
     * When a block is evaluated it sets the `renderSeed` prop on it's simParameters entry to match the `currentRenderSeed`.
     * When the UI injection gets run, only entries where `renderSeed === currentRenderSeed` are rendered.
     * This has the effect that when a param block is removed it stops appearing in the form.
     */
    let currentRenderSeed:number = Math.random()    


    /**
     * This is the change handler function for the  global store for parameters
     */
    const parameterHTMLInputChangeHandler = function(event:any){
        const varSafeName = event.target.name
        let fieldValue = event.target.value
        const paramData = simParameters[varSafeName]
        const paramType = paramData.type

        switch(paramType){
            case ParameterTypes.Text:
                if (paramData.characterLimit > 0){
                    fieldValue = fieldValue.slice(0, paramData.characterLimit)
                }
                simParameters[varSafeName].currentValue = fieldValue
                break
            default:
                simParameters[varSafeName].currentValue = fieldValue
                break
        }
    }


    /**
     * This is the UI injection function that adds parameter inputs to the simulator HTML
     */
    const updateParameterForm = function(){
        const parameterDivs = document.getElementsByClassName("parameterDiv")
        const formElements = []

        // Build out our form components
        for (let i=0; i<Object.keys(simParameters).length; i++){
            const varSafeName = Object.keys(simParameters)[i]
            const parameterData = simParameters[varSafeName]

            // If element is not in current render cycle then ignore it
            if (parameterData.renderSeed !== currentRenderSeed) continue

            const parameterName = parameterData.name
            let formElementHTML = ""
            switch(parameterData.type){
                case ParameterTypes.Text:
                    formElementHTML = `
                    <label class="textParameterLabel" for="${varSafeName}">${parameterName}</label>
                    <input 
                        class="textParameterInput" 
                        type="text" 
                        name="${varSafeName}" 
                        value="${parameterData.currentValue}"
                    />
                    `
                    break
                case ParameterTypes.Number:
                    formElementHTML = `
                    <label class="textParameterLabel" for="${varSafeName}">${parameterName}</label>
                    <input 
                        class="textParameterInput" 
                        type="number" 
                        name="${varSafeName}" 
                        value="${parameterData.currentValue}"
                    />
                    `
                    break
                case ParameterTypes.NumberRange:
                    formElementHTML = `
                    <label class="textParameterLabel" for="${varSafeName}">${parameterName}</label>
                    <input 
                        class="textParameterInput" 
                        type="range" 
                        name="${varSafeName}" 
                        value="${parameterData.currentValue}"
                        min=${parameterData.minValue}
                        max=${parameterData.maxValue}
                        step=${parameterData.stepValue}
                    />
                    `
                    break

            }
            formElements.push(formElementHTML)
        }
        
        // Write form to Simulator HTML
        for (let i=0; i<parameterDivs.length; i++){
            parameterDivs[i].innerHTML = formElements.join("")
        }

        // Bind handler for input form elements
        $(function() {
            $(".parameterDiv input").off('change');
            $(".parameterDiv input").change(function(event){
                parameterHTMLInputChangeHandler(event)
                updateParameterForm()
            })
        });
    }


    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board(): Board {
        return runtime.board as Board;
    }

    class Statement {
        protected children: Array<Statement>;
        public parentStatement: Statement;
        protected code: string;
        private requiresChildrenToSerialize: boolean

        

        constructor(code: string, requiresChildrenToSerialize: boolean) {
            this.children = new Array<Statement>();
            this.code = code;
            this.requiresChildrenToSerialize = requiresChildrenToSerialize
        }
      
        addChild(child: Statement) {
            this.children.push(child)
            child.parentStatement = this;
        }

        getCode(initScripts: string) {
            let allCode = this.code;

            // dont serialize empty blocks
            if (this.requiresChildrenToSerialize) {
                if (this.children.length <=0) {
                    return ""
                }
            }

            // for blocks, replace the children
            let hasChildCode = false
            if (allCode.indexOf("<CHILDREN>") > 0) {
                let childCode = "";
                this.children.forEach((child) => {
                    if (childCode.length > 0) {
                        childCode += ",\n "
                    }
                    childCode += child.getCode("")
                })
                allCode = allCode.replace("<CHILDREN>", childCode);
                if (!hasChildCode) {
                    hasChildCode = (childCode.length  >0)
                }
                
            }
            if (!hasChildCode && this.requiresChildrenToSerialize) {
                return ""
            }
            return allCode;
        }
    }
    class MainStatement extends Statement {
        constructor() {
            super("", false)
        }
        getCode(initScripts: string) {
            let allCode = "";
            if (this.children.length === 0) {
                return ""
            }
    
            this.children.forEach((child, index) => {
                allCode += child.getCode("");
                if (index < this.children.length -1) {
                    allCode += ","
                } 
            })
            return `function main () {
                ${initScripts || ""}

                return [${allCode}];
            }`
        }
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     * 
     * BASE definition
     * https://github.com/microsoft/pxt/blob/8c97d80298dd6b99a677b402b84463779fc0c888/pxtsim/runtime.ts
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;

        private mainStatement: Statement;
        private currentStatement: Statement;
        private imports: any;
        private initScripts: any;
        private builders: any;
        private lastExecutingCode: string
        private updateSimulatorTimer: any;

        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.imports = {} 
            this.initScripts = {}
            this.mainStatement = new MainStatement();
            this.currentStatement = this.mainStatement;
        }

        popBlock() {
            if (this.currentStatement && this.currentStatement.parentStatement) {
                this.currentStatement = this.currentStatement.parentStatement
            }
        }

        addBlock(str: string) {
            const newBlock = new Statement(str, true)
            this.currentStatement.addChild(newBlock)
            this.currentStatement = newBlock;
            // this.updateJSCad()
        }

        addStatement(str: string, color?: number) {
            let statementCode = str;
            if (color !== undefined && color !== 0x4ebed7) {
                const red =  (color & 0xFF0000) >> 16;
                const green = (color & 0x00FF00) >> 8;
                const blue =  (color & 0x0000FF);

                statementCode = `color([${red/255}, ${green/255}, ${blue/255}], ${statementCode})`
            }
            const newBlock = new Statement(statementCode, false)
            this.currentStatement.addChild(newBlock)
            this.postUpdateSimulator()
        }

        addParameter(parameter: { 
            type:ParameterTypes; 
            name: string; 
            varSafeName: string;
            defaultValue: any; 
            characterLimit?: number
            minValue?: number;
            maxValue?: number;
            stepValue?: number;
        }){
            // Unpack parameter data
            const { 
                type, name, varSafeName, defaultValue, // All use these
                characterLimit, // For text input
                minValue, maxValue, stepValue // For numberRange input
            } = parameter
            // If the parameter hasn't been defined yet, set the current value to the default
            let currentValue = defaultValue
            if (simParameters[varSafeName] && simParameters[varSafeName].currentValue){
                currentValue = simParameters[varSafeName].currentValue
            }

            // Add parameter to the global store
            simParameters[varSafeName] = {
                type,
                name,
                defaultValue,
                currentValue,
                characterLimit,
                minValue,
                maxValue,
                stepValue,
                renderSeed: currentRenderSeed
            }
            
            // It's not ideal to put this here, obviously we would only want to call it once per run
            // However initAsync doesnt seem to work as the parameters get checked before they are set.
            // I guess because it's async. Anyway, people shouldn't have too many params, so hopefully 
            // It wont hurt performance too badly.
            updateParameterForm()
            console.log(simParameters)
        };

        requireImport(importName:string, code:string) {
             if (!this.imports[importName]) {
                 this.imports[importName] = code
             }
        }
        requireInitScript(initScript:string, code:string) {
            if (!this.initScripts[initScript]) {
                this.initScripts[initScript] = code
            } 
        }

        postUpdateSimulator() {
            if (this.updateSimulatorTimer) return;
            // batch up calls made within 50ms rather than
            // executing every statement.
            this.updateSimulatorTimer = setTimeout(()=>{
                this.updateSimulatorTimer = null;
                this.updateJSCad()
            }, 50)  
        }
        updateJSCad() {

            const jsCadInterpreter = ((window as any).jscad);
            
            // code that should go in main before running
            let allInitScripts = ""
            Object.keys(this.initScripts).forEach((codeImport)=>{
                allInitScripts = this.initScripts[codeImport] + "\n"
              })


            let codeStr = this.mainStatement.getCode(allInitScripts)
            
            Object.keys(this.imports).forEach((codeImport)=>{
              codeStr = this.imports[codeImport] + "\n" + codeStr
            })

            if (codeStr.length > 0) {

                if (this.lastExecutingCode === codeStr) {
                    // dont refresh unless we have new code
                    console.log("Code has not changed, not re-rendering")
                    return   
                }
                this.lastExecutingCode = codeStr;
               
             
                if (jsCadInterpreter.builder && jsCadInterpreter.isRunning) {
                    jsCadInterpreter.builder.cancel()
                }
                jsCadInterpreter.setJsCad(
                    codeStr
                );
                
                /*
                if (!this.builders) {
                    this.builders =[]
                }

               
         
                let runningBuilders = []
                for (let i = 0; i < this.builders.length; i++) {
                    
                    const builder = this.builders[i]
                    // remove the dead builders
                    if (!builder.isRunning()) {
                        runningBuilders.push(builder)
                    }
                }
                this.builders = runningBuilders
                if (this.builders.length > 3) {
                    const firstBuilder = this.builders.shift()
                    if (firstBuilder && firstBuilder.cancel) {
                        console.log("Cancelling first builder in list...", this.builders)
                        firstBuilder.cancel()
                    }
                }*/
               
               // this.builders.push(jsCadInterpreter.builder)

            }
            else {
                this.lastExecutingCode = null
                jsCadInterpreter.clearViewer()
            }
            console.log("// JSCAD: use window.jscad.script for details")
            if (this.lastExecutingCode) {
                const main = this.lastExecutingCode.indexOf("main");
                const mainStr = this.lastExecutingCode.slice(main)
                console.log(mainStr)
            }
        }

    
        /** 
         * Called when running the program
         */
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            console.log("INIT async", msg)
            // Set render seed for this pass. See comment on definition for more info.
            currentRenderSeed = Math.random() 

            this.updateJSCad()
            return Promise.resolve();
        }

        getCanvas(width?: number): Promise<CanvasRenderingContext2D> {
            return new Promise<CanvasRenderingContext2D>((resolve, reject) => {
                try {
                    // determine image dimensions
                    const webGLCanvas = document.querySelector(".viewer canvas") as HTMLCanvasElement
                    const imageWidth = Math.max(400, (width) ? width : webGLCanvas.width)
                    const imageHeight = webGLCanvas.height * (imageWidth / webGLCanvas.width)
                    // grab the context that jscad is drawing into
                    const webGlCanvasContext = (window as any).jscad.viewer.gl as WebGLRenderingContext
                    // make a 2d canvas
                    const canvas2d = document.createElement("canvas")
                    canvas2d.width = imageWidth;
                    canvas2d.height = imageHeight;
                    const context2d = canvas2d.getContext("2d")
    
                    // draw the webgl context into the 2d image context
                    context2d.drawImage(webGlCanvasContext.canvas, 0,0,imageWidth, imageHeight)

                    resolve(context2d)
    
                }
                catch(e) {
                    console.error(e)
                    resolve(undefined);
            
                }
            })
        }

        screenshotAsync(width?: number): Promise<ImageData> {
            return new Promise<ImageData>(async (resolve, reject) => {
            try {
                // make a 2d canvas
                const context2d = await this.getCanvas(width);
                const imageWidth = context2d.canvas.width
                const imageHeight = context2d.canvas.height
                
                // // return the image data from the 2d canvas
                const imageData = context2d.getImageData(0, 0, imageWidth, imageHeight)
                // canvas2d.remove()
                resolve(imageData)
            }
            catch(e) {
                console.error(e)
                resolve(undefined);
            }})
        }

        screenshotBlob(width?: number): Promise<Blob> {
            return new Promise<Blob>(async (resolve, reject) => {
            try {
                // make a 2d canvas
                const context2d = await this.getCanvas(width);context2d.canvas.toBlob(function(blob) {
                    resolve(blob)
                })
            }
            catch(e) {
                console.error(e)
                resolve(undefined);
            }})
        }
    }
}