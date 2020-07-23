/// <reference path="../libs/core/enums.d.ts"/>


/**
 * @external https://makecode.com/playground#basic-default-values
 * use the playground to configure the pickers
 */

namespace pxsim.shapes {
    //% block="cube width $width|depth $depth|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    export function cube(width: number = 1, depth: number = 1, height: number = 1) {
        board().addStatement(`cube({size: [${width}, ${depth}, ${height}]})`);

    }


    //% block="sphere width $width|depth $depth|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10

    export function sphere(width: number, depth: number, height: number) {
        board().addStatement(`sphere({size: [${width}, ${depth}, ${height}]})`);

    }


    //% block="cylinder radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    export function cylinder(radius: number, height: number) {
        board().addStatement(`cylinder({r1: ${radius}, r2: ${radius}, h: ${height}})`);
    }
    //% block="donut thickness $thickness|radius $radius"
    //% inlineInputMode=inline
    //% thickess.defl=20
    //% radius.defl=100
    export function donut(thickness: number, radius: number) {
        board().addStatement(`torus({ri: ${thickness / 2}, ro: ${radius} })`)
    }

    //% block="cone radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    export function cone(radius: number, height: number) {
        board().addStatement(`cylinder({r2: 0, r1: ${radius}, h: ${height}})`);
    }



}

namespace pxsim.operators {

    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    export function addShapes(body: RefAction): void {
        board().addBlock("union( <CHILDREN> )");

       return  thread.runInBackground(body)
    }

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    export function subtractShapesAsync(body: RefAction): Promise<void> {
        board().addBlock("difference( <CHILDREN> )"); // add a JSCad statement to the interpreter.
    
        return pxsim.runtime.runFiberAsync(body)
    
    }

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    export function intersectShapesAsync(body: RefAction): Promise<void> {
        board().addBlock("intersect( <CHILDREN> )");
      
    
        return pxsim.runtime.runFiberAsync(body)
    
    }
 
    //% blockId=move_shapes block="move shapes across x: $x| over y: $y | up z: $z" 
    //% topblock=false
    //% handlerStatement=true
    export function moveShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        board().addBlock(`translate([${x}, ${y}, ${z}], <CHILDREN> )`);
       
        return pxsim.runtime.runFiberAsync(body)
    }

     //% blockId=rotate_shapes block="rotate shapes x: $x|  y: $y | z: $z" 
    //% topblock=false
    //% handlerStatement=true
    export function rotateShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        board().addBlock(`rotate([${x}, ${y}, ${z}], <CHILDREN> )`);
        return pxsim.runtime.runFiberAsync(body)

    }


}

