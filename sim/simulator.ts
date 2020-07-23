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
        getCode() {
            let allCode = this.code;

            // for blocks, replace the children
            if (allCode.indexOf("<CHILDREN>") > 0) {
                let childCode = "";
                this.children.forEach((child) => {
                    if (childCode.length > 0) {
                        childCode += ",\n "
                    }
                    childCode += child.getCode()
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
        getCode() {
            let allCode = "";
            if (this.children.length === 0) {
                return ""
            }
    
            this.children.forEach((child, index) => {
                allCode += child.getCode();
                if (index < this.children.length -1) {
                    allCode += ","
                } 
            })
            return `function main () {
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
        constructor() {
            super();
            this.bus = new EventBus(runtime);

            this.mainStatement = new MainStatement();
            this.currentStatement = this.mainStatement;
        }


        addBlock(str: string) {
            const newBlock = new Statement(str)
            this.currentStatement.addChild(newBlock)
            this.currentStatement = newBlock;
            // this.updateJSCad()
        }

        addStatement(str: string) {
            const newBlock = new Statement(str)
            this.currentStatement.addChild(newBlock)
            this.updateJSCad()
        }

        updateJSCad() {

            const jsCadInterpreter = ((window as any).jscad);
            const codeStr = this.mainStatement.getCode()
            if (codeStr.length > 0) {
                jsCadInterpreter.setJsCad(
                    codeStr
                );
            }
            console.log("JSCAD AM HERE", codeStr)
        }
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            //  document.body.innerHTML = ''; // clear children

            this.updateJSCad()

            return Promise.resolve();
        }


    }
}