var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../libs/core/enums.d.ts"/>
/**
 * @external https://makecode.com/playground#basic-default-values
 * use the playground to configure the pickers
 */
var pxsim;
(function (pxsim) {
    var shapes;
    (function (shapes) {
        //% block="cube width $width|depth $depth|height $height"
        //% inlineInputMode=inline
        //% width.defl=10
        //% depth.defl=10
        //% height.defl=10
        function cube(width, depth, height) {
            if (width === void 0) { width = 1; }
            if (depth === void 0) { depth = 1; }
            if (height === void 0) { height = 1; }
            pxsim.board().addStatement("cube({size: [" + width + ", " + depth + ", " + height + "]})");
        }
        shapes.cube = cube;
        //% block="sphere width $width|depth $depth|height $height"
        //% inlineInputMode=inline
        //% width.defl=10
        //% depth.defl=10
        //% height.defl=10
        function sphere(width, depth, height) {
            pxsim.board().addStatement("sphere({size: [" + width + ", " + depth + ", " + height + "]})");
        }
        shapes.sphere = sphere;
        //% block="cylinder radius $radius|height $height"
        //% inlineInputMode=inline
        //% radius.defl=10
        //% height.defl=10
        function cylinder(radius, height) {
            pxsim.board().addStatement("cylinder({r1: " + radius + ", r2: " + radius + ", h: " + height + "})");
        }
        shapes.cylinder = cylinder;
        //% block="donut thickness $thickness|radius $radius"
        //% inlineInputMode=inline
        //% thickess.defl=20
        //% radius.defl=100
        function donut(thickness, radius) {
            pxsim.board().addStatement("torus({ri: " + thickness / 2 + ", ro: " + radius + " })");
        }
        shapes.donut = donut;
        //% block="cone radius $radius|height $height"
        //% inlineInputMode=inline
        //% radius.defl=10
        //% height.defl=10
        function cone(radius, height) {
            pxsim.board().addStatement("cylinder({r2: 0, r1: " + radius + ", h: " + height + "})");
        }
        shapes.cone = cone;
    })(shapes = pxsim.shapes || (pxsim.shapes = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var operators;
    (function (operators) {
        //% blockId=add_shapes block="add shapes" 
        //% topblock=false
        //% handlerStatement=true
        function addShapes(body) {
            pxsim.board().addBlock("union( <CHILDREN> )");
            return pxsim.thread.runInBackground(body);
        }
        operators.addShapes = addShapes;
        //% blockId=subtract_shapes block="subtract shapes" 
        //% topblock=false
        //% handlerStatement=true
        function subtractShapesAsync(body) {
            pxsim.board().addBlock("difference( <CHILDREN> )"); // add a JSCad statement to the interpreter.
            return pxsim.runtime.runFiberAsync(body);
        }
        operators.subtractShapesAsync = subtractShapesAsync;
        //% blockId=intersect_shapes block="intersect shapes" 
        //% topblock=false
        //% handlerStatement=true
        function intersectShapesAsync(body) {
            pxsim.board().addBlock("intersect( <CHILDREN> )");
            return pxsim.runtime.runFiberAsync(body);
        }
        operators.intersectShapesAsync = intersectShapesAsync;
        //% blockId=move_shapes block="move shapes across x: $x| over y: $y | up z: $z" 
        //% topblock=false
        //% handlerStatement=true
        function moveShapesAsync(x, y, z, body) {
            pxsim.board().addBlock("translate([" + x + ", " + y + ", " + z + "], <CHILDREN> )");
            return pxsim.runtime.runFiberAsync(body);
        }
        operators.moveShapesAsync = moveShapesAsync;
        //% blockId=rotate_shapes block="rotate shapes x: $x|  y: $y | z: $z" 
        //% topblock=false
        //% handlerStatement=true
        function rotateShapesAsync(x, y, z, body) {
            pxsim.board().addBlock("rotate([" + x + ", " + y + ", " + z + "], <CHILDREN> )");
            return pxsim.runtime.runFiberAsync(body);
        }
        operators.rotateShapesAsync = rotateShapesAsync;
    })(operators = pxsim.operators || (pxsim.operators = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = function () {
        pxsim.runtime.board = new Board();
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    var Statement = /** @class */ (function () {
        function Statement(code) {
            this.children = new Array();
            this.code = code;
        }
        Statement.prototype.addChild = function (child) {
            this.children.push(child);
            child.parentStatement = this;
        };
        Statement.prototype.getCode = function () {
            var allCode = this.code;
            // for blocks, replace the children
            if (allCode.indexOf("<CHILDREN>") > 0) {
                var childCode_1 = "";
                this.children.forEach(function (child) {
                    if (childCode_1.length > 0) {
                        childCode_1 += ",\n ";
                    }
                    childCode_1 += child.getCode();
                });
                allCode = allCode.replace("<CHILDREN>", childCode_1);
            }
            return allCode;
        };
        return Statement;
    }());
    var MainStatement = /** @class */ (function (_super) {
        __extends(MainStatement, _super);
        function MainStatement() {
            return _super.call(this, "") || this;
        }
        MainStatement.prototype.getCode = function () {
            var _this = this;
            var allCode = "";
            if (this.children.length === 0) {
                return "";
            }
            this.children.forEach(function (child, index) {
                allCode += child.getCode();
                if (index < _this.children.length - 1) {
                    allCode += ",";
                }
            });
            return "function main () {\n                return [" + allCode + "];\n            }";
        };
        return MainStatement;
    }(Statement));
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        function Board() {
            var _this = _super.call(this) || this;
            _this.bus = new pxsim.EventBus(pxsim.runtime);
            _this.mainStatement = new MainStatement();
            _this.currentStatement = _this.mainStatement;
            return _this;
        }
        Board.prototype.addBlock = function (str) {
            var newBlock = new Statement(str);
            this.currentStatement.addChild(newBlock);
            this.currentStatement = newBlock;
            // this.updateJSCad()
        };
        Board.prototype.addStatement = function (str) {
            var newBlock = new Statement(str);
            this.currentStatement.addChild(newBlock);
            this.updateJSCad();
        };
        Board.prototype.updateJSCad = function () {
            var jsCadInterpreter = (window.jscad);
            var codeStr = this.mainStatement.getCode();
            if (codeStr.length > 0) {
                jsCadInterpreter.setJsCad(codeStr);
            }
            console.log("JSCAD AM HERE", codeStr);
        };
        Board.prototype.initAsync = function (msg) {
            //  document.body.innerHTML = ''; // clear children
            this.updateJSCad();
            return Promise.resolve();
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
