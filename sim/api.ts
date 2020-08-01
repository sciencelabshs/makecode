/// <reference path="../libs/core/enums.d.ts"/>

/**
 * How to set fields and colours
 * @external https://makecode.com/playground#basic-default-values
 * @external https://makecode.com/extensions/getting-started/simple-extension
 * use the playground to configure the pickers
 */

 /**
  * 3D Shapes to create on the surface
  */
//% groups='["3D Shapes", "2D Shapes"]'
//% weight=100 color=#d2b48c icon="\uf1b0"
namespace pxsim.shapes {

    /**
     * Add a cube
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     */
    //% block="cube width $width|depth $depth|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=10
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    export function cube(width: number = 1, depth: number = 1, height: number = 1) {
        board().addStatement(`cube({size: [${width}, ${depth}, ${height}]})`);

    }

    /**
     * Add a sphere
     * @param width The width of the sphere
     * @param depth The depth of the sphere
     * @param height The height of the sphere
     */
    //% block="sphere width $width|depth $depth|height $height"
    //% inlineInputMode=inline
    //% width.defl=50
    //% depth.defl=50
    //% height.defl=50
    //% weight=20
    //% group="3D Shapes"
    export function sphere(width: number, depth: number, height: number) {
        board().addStatement(`sphere({size: [${width}, ${depth}, ${height}]})`);

    }


    //% block="cylinder radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% weight=30
     //% group="3D Shapes"
    export function cylinder(radius: number, height: number) {
        board().addStatement(`cylinder({r1: ${radius}, r2: ${radius}, h: ${height}})`);
    }
    //% block="donut thickness $thickness|radius $radius"
    //% inlineInputMode=inline
    //% thickness.defl=20
    //% radius.defl=100
    //% weight=40
    //% group="3D Shapes"
    export function donut(thickness: number, radius: number) {
        board().addStatement(`torus({ri: ${thickness / 2}, ro: ${radius} })`)
    }

    
    //% block="cone radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% weight=50
    //% group="3D Shapes"
    export function cone(radius: number, height: number) {
        board().addStatement(`cylinder({r2: 0, r1: ${radius}, h: ${height}})`);
    }


    //% block="circle radius $radius"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% weight=50
    //% group="2D Shapes"
    export function circle(radius: number) {
        board().addStatement(`circle({r: ${radius}})`);
    }

    //% blockId=add_rect block="rect width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=50
    //% height.defl=50
    //% weight=50
    //% group="2D Shapes"
    export function rect(width: number, height: number) {
        board().addStatement(`square({size: [${width}, ${height}]})`);
    }

    


}

/**
 * Move and rotate shapes
 */
//% groups=["Position", "Rotation", "Operations"]
//% color=#4c96f7 weight=21 icon="\uf13e"
namespace pxsim.position {


    function _makeBlock(JSCadBlockStr: string, body:RefAction) {
        return new Promise<void>((resolve, reject)=>{
            // push a new statement as the parent
            board().addBlock(JSCadBlockStr);
            
            // execute the child blocks
            pxsim.runtime.runFiberAsync(body).then((result)=>{
                // return back to previous parent statement, or main
                board().popBlock();
                resolve(result)
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    /**
     * move shapes across the x axis
     * @param x how far to move across the x axis
     * @param body the shapes to move across
     */
    //% blockId=move_shapes_across block="move shapes across $x" 
    //% topblock=false
    //% x.defl=10
    //% handlerStatement=true
    //% group="Position"
    export function moveShapesAcrossAsync(x: number, body: RefAction): Promise<void> {

       return _makeBlock(`translate([${x}, 0, 0], <CHILDREN> )`, body)
     
    }
    
    //% blockId=move_shapes_over block="move shapes over $y" 
    //% topblock=false
    //% y.defl=10
    //% handlerStatement=true
    //% group="Position"
    export function moveShapesOverAsync(y: number, body: RefAction): Promise<void> {
 
        return _makeBlock(`translate([0, ${y}, 0], <CHILDREN> )`, body)
    }

  
    //% blockId=move_shapes_up block="move shapes up $z" 
    //% topblock=false
    //% z.defl=10
    //% handlerStatement=true
    //% group="Position"
    export function  moveShapesUpAsync(z: number, body: RefAction): Promise<void> {

     
        return _makeBlock(`translate([0, 0, ${z}], <CHILDREN> )`, body)
        
    }
 
    //% blockId=move_shapes block="translate shapes x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Position"
    //% advanced=true
    export function translateShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        return _makeBlock(`translate([${x}, ${y}, ${z}], <CHILDREN> )`, body);
       
     
    }

    //% blockId=flip_shapes block="flip shapes $x °" 
    //% topblock=false
    //% handlerStatement=true
    //% x.shadow="protractorPicker"
    //% group="Rotation"
    export function flipShapesAsync(x: number, body: RefAction): Promise<void> {
        return _makeBlock(`rotate([${x}, 0, 0], <CHILDREN> )`, body);
     
    } 
    //% blockId=roll_shapes block="roll shapes $y °" 
    //% topblock=false
    //% handlerStatement=true
    //% y.shadow="protractorPicker"
   //% group="Rotation"
   
    export function rollShapesAsync(y: number, body: RefAction): Promise<void> {

        return _makeBlock(`rotate([0, ${y}, 0], <CHILDREN> )`, body);
     
    }

    //% blockId=spin_shapes block="roll shapes $z °" 
    //% topblock=false
    //% handlerStatement=true
    //% z.shadow="protractorPicker"
    //% group="Rotation"
  
    export function spinShapesAsync(z: number, body: RefAction): Promise<void> {

        return _makeBlock(`rotate([0, 0, ${z}], <CHILDREN> )`, body);

    }

    //% blockId=rotate_shapes block="rotate shapes x°: $x|  y°: $y | z°: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Rotation"
    //% advanced=true
    export function rotateShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        return _makeBlock(`rotate([${x}, ${y}, ${z}], <CHILDREN> )`, body);
 

    }


     //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    export function addShapes(body: RefAction): void {
        return _makeBlock("union( <CHILDREN> )", body);

    }

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    export function subtractShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("difference( <CHILDREN> )", body); // add a JSCad statement to the interpreter.
    
    
    }

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    export function intersectShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("intersect( <CHILDREN> )", body);
      
    
    }

    //% blockId=wrap2dshapes block="wrap 2d shapes (hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% advanced=true
    export function wrap2DShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("hull( <CHILDREN> )", body);
      
    }

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% advanced=true
    export function sequentialWrap2DShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("chain_hull( <CHILDREN> )", body);
    
    }
}

