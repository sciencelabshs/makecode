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
namespace pxsim.shapes {




    /**
     * Add a cube
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     */
    //% block="cube %type=main_iconPicker width $width|depth $depth|height $height||color $color"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=95
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    export function cube(width: number = 1, depth: number = 1, height: number = 1, color?: number) {
   
        const statement = `cube({size: [${width}, ${depth}, ${height}]})`
        board().addStatement(statement, color)


    }

    /**
     * Add a sphere
     * @param radius The radius of the sphere
     */
    //% block="sphere radius $radius || color $color|type $type|center $centerZ|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=120
    //% faces.min=4
    //% faces.max=1000
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% centerZ.defl=false
    //% type.defl=SphereType.icosahedron
    //% weight=94
    //% expandableArgumentMode="toggle"
    //% group="3D Shapes"
    export function sphere(radius: number, color?: number, type?: SphereType,  centerZ?: boolean, faces?: number) {
        const fn = (faces) ? Math.max(faces, 4) : 150
        const sphereType = type === SphereType.geodesic ? "geodesic" :  "icosahedron";

        board().addStatement(`sphere({r: ${radius}, center: [true, true, ${centerZ}],  fn: ${fn}, type: "${sphereType}"})`, color);

    }


    //% block="cylinder radius $radius|height $height||color $color|radius2 $radius2|center $centerZ|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10

    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% faces.defl=100
    //% weight=90
    //% group="3D Shapes"
    export function cylinder(radius: number, height: number, color?: number, radius2?: number, centerZ?: boolean, faces?: number) {
    
        const fn = (faces) ? Math.max(faces, 4) : 150
    
        board().addStatement(`cylinder({r1: ${radius}, 
                                        r2: ${radius2 === undefined ? radius : radius2}, 
                                        fn: ${fn},
                                        center: [true, true, ${centerZ}],
                                        h: ${height}})`, color);
    
        

    
    }
    //% block="donut thickness $thickness|radius $radius"
    //% inlineInputMode=inline
    //% thickness.defl=20 thickness.min=1
    //% radius.defl=100
    //% weight=80
    //% group="3D Shapes"
    export function donut(thickness: number, radius: number) {
        board().addStatement(`torus({ri: ${thickness / 2}, ro: ${radius} })`)
    }


    //% block="cone radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% weight=75
    //% group="3D Shapes"
    export function cone(radius: number, height: number) {
        board().addStatement(`cylinder({r2: 0, r1: ${radius}, h: ${height}})`);
    }

    const WRITE_TEXT = `
    function writeText(text, lineWidth, height) {
        var l = vector_text(0,0,text);   // l contains a list of polylines to be drawn
        var o = [];
        l.forEach(function(pl) {                   // pl = polyline (not closed)
            o.push(rectangular_extrude(pl, {w: lineWidth, h: height}));   // extrude it to 3D
        });
        return o;
    }
        `



    //% block="write text $text||line width $lineWidth|height $height"
    //% inlineInputMode=inline
    //% lineWidth.defl=1
    //% height.defl=70
    //% group="3D Shapes"
    export function text(text: string, lineWidth: number, height: number) {
        board().requireImport('WRITE_TEXT', WRITE_TEXT)
        // text returns a list of shapes we need to expand
        board().addStatement(`... writeText("${text}", ${lineWidth}, ${height})`);

    }


    /*
    enum Animal {
        'Penguin', 
        'Giraffe'
    }

    //% block="stamp animal||line width $lineWidth|height $height"
    //% inlineInputMode=inline
    //% lineWidth.defl=.5
    //% height.defl=10
    //% group="3D Shapes"
    export function animal(lineWidth?: number, height?: number) {
        
        board().requireImport('animals.makePenguin', animals.penguin)
        board().addStatement(`makePenguin(${lineWidth}, ${height})`);
    }
*/
    /* todo: investigate bug; points.map  is not a function
        //% block="polyhedron from 3d points $points|triangles $triangles"
        //% points.defl="inner_shadow_block"
        //% triangles.defl="inner_shadow_block"
        //% polyhedron.shadow="lists_create_with"
        //% advanced=true
        //% group="Advanced 3D Shapes"
        export function polyhedron(points: string[], triangles: string[]): void {
            const pointsArrayStr = points["data"].toString()
            const triangleArrayStr = triangles["data"].toString()
            board().addStatement(`rectangular_extrude({points: [${pointsArrayStr}], triangles: [${triangleArrayStr}]})`);
       
        }*/

    /*
    //% block="draw 3d lines with width $width|height $height|closed $closed|from 2d points $points"
    //% width.defl=10
    //% height.defl=10
    //% closed.defl=true
    //% points.defl="inner_shadow_block"
    //% linePath.shadow="lists_create_with"
    //% advanced=true
    //% group="Advanced 3D Shapes"
     export function drawLinePath(width: number, height: number, closed: boolean, points: string[]): void {
        console.log(points)
        const pointsArrayStr = points["data"].toString()
        board().addStatement(`rectangular_extrude([${pointsArrayStr}], {w: ${width}, h: ${height}, closed: ${closed}})`);
   
    }*/



    //% block="circle radius $radius"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    export function circle(radius: number) {
        board().addStatement(`circle({r: ${radius}})`);
    }

    //% blockId=add_rect block="rect width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=50
    //% height.defl=50
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    export function rect(width: number, height: number) {
        board().addStatement(`square({size: [${width}, ${height}]})`);
    }



    //% blockId=point3d block="3D point x: $x|y:  $y|z:  $z"
    //% inlineInputMode=inline
    //% x.defl=50
    //% y.defl=50
    //% z.defl=50
    //% group="Points"
    //% advanced=true
    export function point3d(x: number, y: number, z: number): string {
        return `[${x}, ${y},  ${z}]`;
    }

    //% blockId=point2d block="2D point x: $x|y:  $y"
    //% inlineInputMode=inline
    //% x.defl=50
    //% y.defl=50
    //% group="Points"
    //% advanced=true
    export function point2d(x: number, y: number): string {
        return `[${x}, ${y}]`;
    }




}

/**
 * Move and rotate shapes
 */
namespace pxsim.operators {


    function _makeBlock(JSCadBlockStr: string, body: RefAction) {
        return new Promise<void>((resolve, reject) => {
            // push a new statement as the parent
            board().addBlock(JSCadBlockStr);

            // execute the child blocks
            pxsim.runtime.runFiberAsync(body).then((result) => {
                // return back to previous parent statement, or main
                board().popBlock();
                resolve(result)
            }).catch((error) => {
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
    export function moveShapesUpAsync(z: number, body: RefAction): Promise<void> {


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

    //% blockId=spin_shapes block="spin shapes $z °" 
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
    export function addShapesAsync(body: RefAction): Promise<void> {
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
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    export function wrap2DShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("hull( <CHILDREN> )", body);

    }

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    export function sequentialWrap2DShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("chain_hull( <CHILDREN> )", body);

    }


}

