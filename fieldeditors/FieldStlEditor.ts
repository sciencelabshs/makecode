/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />


import * as io from "@jscad/io"






    // This is based upon 
    // https://github.com/microsoft/pxt/blob/f12637e112e46acda74e76248755f15ee0ff18aa/pxtblocks/fields/field_ledmatrix.ts

    export interface FieldStlEditorOptions extends Blockly.FieldCustomOptions {

    }

    const PREVIEW_WIDTH = 32;
    const PADDING = 5;
    const BG_PADDING = 4;
    const BG_WIDTH = BG_PADDING * 2 + PREVIEW_WIDTH;
    const TOTAL_WIDTH = PADDING * 2 + BG_PADDING * 2 + PREVIEW_WIDTH;

    export class FieldStlEditor extends Blockly.Field implements Blockly.FieldCustom {

        public isFieldCustom_ = true;
        public SERIALIZABLE = true;

        private params: FieldStlEditorOptions;
        private blocksInfo: pxtc.BlocksInfo;
        private state: any;


        //  private undoRedoState: any;
        private mainElement: SVGSVGElement;

        constructor(text: string, params: any, validator?: Function) {
            super(text, validator);

            console.log(io)
            this.params = params
            this.blocksInfo = params.blocksInfo;

            if (!this.state) {
                this.state = null
            }

        }

        initEditor() {
            if (!this.mainElement) {
                this.mainElement = pxsim.svg.parseString(`
                <svg xmlns="http://www.w3.org/2000/svg" width="${this.size_.width}px" height="${this.size_.height}px" viewBox="0 0 ${this.size_.width} ${this.size_.height}" id="stlEditor" >
           
                </svg>`);

                const backgroundRect = pxsim.svg.child(this.mainElement, "rect", {
                    'class': `stlEditorButton`,
                    'cursor': 'pointer',
                    width: this.size_.width,
                    height: this.size_.height,
                    fill: "#CCC",
                    rx: 6
                }) as SVGRectElement;


                const foreignObjectSVGElement = pxsim.svg.child(this.mainElement, "foreignObject", {
                    'class': `stlEditorButtonText`,
                    'cursor': 'pointer',
                    width: this.size_.width,
                    height: this.size_.width,
                    x: 0,
                    y: 0,
                    fill: "#CCC",
                }) as SVGTextElement;

                const buttonText = "Select file"
                const multipleFiles = false
                const accept = "*.stl,application/sla,model/stl"

                foreignObjectSVGElement.innerHTML = `
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <form>
                        <input type="file" class="stlEditorFileInput"  multiple="${multipleFiles}" style="display:none" accept="${accept}"/>
                        <button class="stlEditorButton" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 6px; border-radius: 6px;">${buttonText}</button>
                    </form>
                </div>
                `
                const inputElement = foreignObjectSVGElement.querySelector("input") as HTMLInputElement
                const buttonElement = foreignObjectSVGElement.querySelector("button") as HTMLButtonElement

                buttonElement.addEventListener("click", function (e) {
                    if (inputElement) {
                        inputElement.click();
                    }
                }, false);

                //https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
                inputElement.addEventListener("change", async () => {

                    if (inputElement.files && inputElement.files.length > 0) {
                        const file = inputElement.files[0] as File
                        const fileReader = new FileReader()
                        fileReader.onload = () => {
                            const textResult = fileReader.result as string
                            console.log(io)
                            debugger
                            this.setValue(`"${textResult}"`)
                        }
                        fileReader.readAsDataURL(file)

                    }
                    else {
                        this.setValue("")
                    }
                }, false);
                this.updateValue()
            }
            this.fieldGroup_.replaceChild(this.mainElement, this.fieldGroup_.firstChild);
        }

        addMouseHandlers(backgroundRect: SVGElement) {
            pxsim.pointerEvents.down.forEach(evid => backgroundRect.addEventListener(evid, (ev: MouseEvent) => {
                const svgRoot = (this.sourceBlock_ as Blockly.BlockSvg).getSvgRoot();

                // select and hide chaff
                Blockly.hideChaff();



                ev.stopPropagation();
                ev.preventDefault();
            }, false));
        }

        /**
        * Show the inline free-text editor on top of the text.
        * @private
        */
        showEditor_() {
            // Intentionally left empty
        }

        render_() {
            this.size_.height = 28
            this.size_.width = 150

            if (!this.mainElement) {
                this.initEditor();
            }



        }

        getValue() {
            return this.value_
        }
        // Composes the state into a string an updates the field's state
        private updateValue() {
            let res = ""

            // Blockly stores the state of the field as a string
            this.setValue(res);
        }





    }





