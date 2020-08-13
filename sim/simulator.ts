/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
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

        constructor(code: string) {
            this.children = new Array<Statement>();
            this.code = code;
        }
      
        addChild(child: Statement) {
            this.children.push(child)
            child.parentStatement = this;
        }
        getCode(initScripts: string) {
            let allCode = this.code;
            // for blocks, replace the children
            if (allCode.indexOf("<CHILDREN>") > 0) {
                let childCode = "";
                this.children.forEach((child) => {
                    if (childCode.length > 0) {
                        childCode += ",\n "
                    }
                    childCode += child.getCode("")
                })
                allCode = allCode.replace("<CHILDREN>", childCode);

            }
            return allCode;
        }
    }
    class MainStatement extends Statement {
        constructor() {
            super("")
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
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;

        private mainStatement: Statement;
        private currentStatement: Statement;
        private imports: any;
        private initScripts: any;
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
            const newBlock = new Statement(str)
            this.currentStatement.addChild(newBlock)
            this.currentStatement = newBlock;
            // this.updateJSCad()
        }

        addStatement(str: string, color?: number) {
            let statementCode = str;
            if (color !== undefined) {
                const red =  (color & 0xFF0000) >> 16;
                const green = (color & 0x00FF00) >> 8;
                const blue =  (color & 0x0000FF);
                statementCode = `color([${red/255}, ${green/255}, ${blue/255}], ${statementCode})`
            }
            const newBlock = new Statement(statementCode)
            this.currentStatement.addChild(newBlock)
            this.updateJSCad()
        }

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
                jsCadInterpreter.setJsCad(
                    codeStr
                );
            }
            else {
                jsCadInterpreter.clearViewer()
            }
            console.log("// JSCAD ====\n", codeStr, "\n// =====")
        }
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            //  document.body.innerHTML = ''; // clear children

            this.updateJSCad()

            return Promise.resolve();
        }


    }
}