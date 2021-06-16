/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />

import * as io from "@jscad/io";

// This is based upon
// https://github.com/microsoft/pxt/blob/f12637e112e46acda74e76248755f15ee0ff18aa/pxtblocks/fields/field_ledmatrix.ts

export interface FieldStlEditorOptions extends Blockly.FieldCustomOptions {}

const PREVIEW_WIDTH = 32;
const PADDING = 5;
const BG_PADDING = 4;
const BG_WIDTH = BG_PADDING * 2 + PREVIEW_WIDTH;
const TOTAL_WIDTH = PADDING * 2 + BG_PADDING * 2 + PREVIEW_WIDTH;

export class FieldStlEditor extends Blockly.Field
  implements Blockly.FieldCustom {
  public isFieldCustom_ = true;
  public SERIALIZABLE = true;

  private params: FieldStlEditorOptions;
  private blocksInfo: pxtc.BlocksInfo;
  private buttonElement: HTMLButtonElement;

  //  private undoRedoState: any;
  private mainElement: SVGSVGElement;

  constructor(text: string, params: any, validator?: Function) {
    super(text, validator);

    this.params = params;
    this.blocksInfo = params.blocksInfo;
  }

  initEditor() {
    if (!this.mainElement) {
      this.mainElement = pxsim.svg.parseString(`
                <svg xmlns="http://www.w3.org/2000/svg" width="${this.size_.width}px" height="${this.size_.height}px" viewBox="0 0 ${this.size_.width} ${this.size_.height}" id="stlEditor" >
           
                </svg>`);

      const backgroundRect = pxsim.svg.child(this.mainElement, "rect", {
        class: `stlEditorButton`,
        cursor: "pointer",
        width: this.size_.width,
        height: this.size_.height,
        fill: "#CCC",
        rx: 6
      }) as SVGRectElement;

      const foreignObjectSVGElement = pxsim.svg.child(
        this.mainElement,
        "foreignObject",
        {
          class: `stlEditorButtonText`,
          cursor: "pointer",
          width: this.size_.width,
          height: this.size_.width,
          x: 0,
          y: 0,
          fill: "#CCC"
        }
      ) as SVGTextElement;

      let buttonText = this.getButtonTextFromScript(this.getValue());

      const multipleFiles = false;
      const accept = "*.stl,application/sla,model/stl";

      foreignObjectSVGElement.innerHTML = `
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <form>
                        <input type="file" class="stlEditorFileInput"  multiple="${multipleFiles}" style="display:none" accept="${accept}"/>
                        <button class="stlEditorButton" style="width: 100%; height: 100%; margin: 0px; border: 0px; padding: 6px; border-radius: 6px;">${buttonText}</button>
                    </form>
                </div>
                `;
      const inputElement = foreignObjectSVGElement.querySelector(
        "input"
      ) as HTMLInputElement;
      const buttonElement = foreignObjectSVGElement.querySelector(
        "button"
      ) as HTMLButtonElement;
      this.buttonElement = buttonElement;
      buttonElement.addEventListener(
        "click",
        function(e) {
          if (inputElement) {
            inputElement.click();
          }
        },
        false
      );

      //https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
      inputElement.addEventListener(
        "change",
        async () => {
          if (inputElement.files && inputElement.files.length > 0) {
            const file = inputElement.files[0] as File;
            this.updateButtonText("Loading...", 10);
            if (!(await this.readFileAsText(file))) {
              await this.readFileAsBinary(file);
            }
          }
        },
        false
      );
    }
    this.fieldGroup_.replaceChild(
      this.mainElement,
      this.fieldGroup_.firstChild
    );
  }
  /**
   * read the file as a string
   * @param file - the file from the file picker 
   */
  readFileAsText(file: File) {
    return new Promise(resolve => {
      const textFileReader = new FileReader();
      textFileReader.onload = () => {
        const stl = textFileReader.result as string;

        // it looks like the deserializer will try to determine if it's binary or
        // ascii STL by looking for the vertex definition.  If you can't see that
        // as a string, then it's binary.
        if (!/vertex/gi.test(stl)) {
          // oh, it's binary.
          resolve(false);
        } else {
          this.convertToJSCADFromText(stl, file);
          resolve(true);
        }
      };
      textFileReader.readAsText(file);
    });
  }
  /**
   * Read the File as a binary file
   * @param file - the file from the file picker
   */
  readFileAsBinary(file: File) {
    return new Promise(resolve => {
      const binaryFileReader = new FileReader();
      binaryFileReader.onload = () => {
        const stlArrayBuffer = binaryFileReader.result as ArrayBuffer;
        this.convertToJSCADFromBinary(stlArrayBuffer, file);
        resolve(true);
      };
      binaryFileReader.readAsArrayBuffer(file);
    });
  }
  /**
   * Binary STL file format
   * @param stl
   * @param file
   */
  convertToJSCADFromBinary(stl: ArrayBuffer, file: File) {
    // note this is super gross.  Should look at pulling in the deserializers
    // and allowing it to party without roundtripping to/from string
    // the STL deserializer from JSCad expects a binary string
    const convertToBinaryString = arrayBuffer => {
      var binary = "";
      var bytes = new Uint8Array(arrayBuffer);
      var length = bytes.byteLength;
      for (var i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return binary;
    };
    // https://github.com/jscad/io/blob/V2/packages/stl-deserializer/index.js
    const textResult = io.stlDeSerializer.deserialize(
      convertToBinaryString(stl),
      file.name,
      {
        statusCallback: status => {
          this.updateButtonText("Loading...", status.progress);
        }
      }
    );
    // console.log(textResult)
    this.updateValue(`"data:application/jscad;${window.btoa(textResult)}"`);
  }

  /**
   * ASCII STL file format
   * @param stl
   * @param file
   */
  convertToJSCADFromText(stl: string, file: File) {
    // https://github.com/jscad/io/blob/V2/packages/stl-deserializer/index.js

    const textResult = io.stlDeSerializer.deserialize(stl, file.name, {
      statusCallback: status => {
        this.updateButtonText("Loading...", status.progress);
      }
    });
    console.log(textResult);
    this.updateValue(`"data:application/jscad;${window.btoa(textResult)}"`);
  }

  addMouseHandlers(backgroundRect: SVGElement) {
    pxsim.pointerEvents.down.forEach(evid =>
      backgroundRect.addEventListener(
        evid,
        (ev: MouseEvent) => {
          const svgRoot = (this.sourceBlock_ as Blockly.BlockSvg).getSvgRoot();

          // select and hide chaff
          Blockly.hideChaff();

          ev.stopPropagation();
          ev.preventDefault();
        },
        false
      )
    );
  }

  /**
   * Show the inline free-text editor on top of the text.
   * @private
   */
  showEditor_() {
    // Intentionally left empty
  }

  render_() {
    this.size_.height = 28;
    this.size_.width = 150;

    if (!this.mainElement) {
      this.initEditor();
    }
  }

  getValue() {
    return this.value_;
  }
  getButtonTextFromScript(script: string): string {
    try {
      if (script) {
        let currentScript = script;

        // if it's currently encoded, unencode it
        if (/data:application\/jscad;/.test(script)) {
          currentScript = currentScript
            .replace(/data:application\/jscad;/, "")
            .replace(/\"/g, "");
          currentScript = atob(currentScript);
        }

        // then look for the word "source"
        const results = /source: (.*)/g.exec(currentScript);
        if (results && results.length > 1) {
          return results[1];
        } else {
          console.log("returning 3d object file", script);
          return "(3D Object File)";
        }
      }
    } catch (e) {
      return "(3D Object File)";
    }
    return "Select file...";
  }
  updateButtonText(script: string, progress: number) {
    if (progress > 0 && progress < 100) {
      this.buttonElement.innerHTML = `Loading... ${progress}%`;
    } else {
      this.buttonElement.innerHTML = this.getButtonTextFromScript(script);
    }
  }
  // Composes the state into a string an updates the field's state
  private updateValue(script: string) {
    this.updateButtonText(script, 100);
    // Blockly stores the state of the field as a string
    this.setValue(script);
  }
}
