/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />

namespace pxt.editor {

  
    export interface FieldSTLEditorOptions extends Blockly.FieldCustomOptions {
      
    }

    const PREVIEW_WIDTH = 32;
    const PADDING = 5;
    const BG_PADDING = 4;
    const BG_WIDTH = BG_PADDING * 2 + PREVIEW_WIDTH;
    const TOTAL_WIDTH = PADDING * 2 + BG_PADDING * 2 + PREVIEW_WIDTH;

    export class FieldSTLEditor extends Blockly.Field implements Blockly.FieldCustom {

        public isFieldCustom_ = true;
        public SERIALIZABLE = true;

        private params: FieldSTLEditorOptions;
        private blocksInfo: pxtc.BlocksInfo;
        private state: any;
      //  private undoRedoState: any;
        private mainElement:  SVGSVGElement;
    
        constructor(text: string, params: any, validator?: Function) {
            super(text, validator);

            this.params = params
            this.blocksInfo = params.blocksInfo;

            if (!this.state) {
                this.state = null
            }
        }

        initEditor() {
            if (!this.mainElement) {
                this.mainElement = pxsim.svg.parseString(`<svg xmlns="http://www.w3.org/2000/svg" id="stlEditor" >
                    <text>I am here</text>
                </svg>`);

            }
            this.fieldGroup_.replaceChild(this.mainElement, this.fieldGroup_.firstChild);
        }

        showEditor_() {
           
        }

        render_() {
            if (!this.mainElement) {
                this.initEditor();
            }

        }

        getValue() {
            return this.value_
        }

        doValueUpdate_(newValue: string) {
            if (newValue == null) {
                return;
            }
            this.value_ = newValue;
         
            super.doValueUpdate_(newValue);
        }

       


    }

  
        

   
}