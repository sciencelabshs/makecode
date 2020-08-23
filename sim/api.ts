


/// <reference path="../libs/core/enums.d.ts"/>

/**
 * How to set fields and colours
 * @external https://makecode.com/playground#basic-default-values
 * @external https://makecode.com/extensions/getting-started/simple-extension
 * use the playground to configure the pickers
 * 
 * With the block command, try and keep the order of arguments consistent
 * the first one after (+) being color.   Use || to deliniate extra expandable
 * arguments
 */

/**
 * 3D Shapes to create on the surface
 * 
 */
namespace pxsim.shapes {





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
    /**
        * Add a cube
        * @param width The width of the cube
        * @param depth The depth of the cube
        * @param height The height of the cube
        * @param color If specified, what color to make the cube.  In hex (0xab1234)
        */
    export function cube(width: number = 1, depth: number = 1, height: number = 1, color?: number) {

        const statement = `cube({size: [${width}, ${depth}, ${height}]})`
        board().addStatement(statement, color)


    }


    //% block="sphere radius $radius || color $color|type $type|center $centerZ|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=80
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
    /**
     * Add a sphere 
     * @param radius The distance from the center to the edge of the sphere 
     * @param color The color to make the sphere
     * @param type Whether to use geodesic or icosahedron.  Geodesic is more triangular and has a golf-ball like appearance.
     * @param centerZ Whether to center around the z axis.  By default this is false.
     * @param faces How many faces to use to make the sphere.  The more you use the longer it takes to render, so choose wisely!
     */
    export function sphere(radius: number, color?: number, type?: SphereType, centerZ?: boolean, faces?: number) {
        const fn = (faces) ? Math.max(faces, 4) : 150
        const sphereType = type === SphereType.geodesic ? "geodesic" : "icosahedron";

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
    /**
     * Add a cylinder
     * @param radius The radius (distance from center to edge) of the cylinder
     * @param height How tall to make the cylinder
     * @param color The color of the cylinder in hex (0xab1234)
     * @param radius2 If specified, make the bottom of the cylinder have a different size
     * @param centerZ Use this if you dont want to center above the z axis, otherwise use move or transform
     * @param faces The number of faces the cylinder has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     */
    export function cylinder(radius: number, height: number, color?: number, radius2?: number, centerZ?: boolean, faces?: number) {

        const fn = (faces) ? Math.max(faces, 4) : 150

        board().addStatement(`cylinder({r1: ${radius}, 
                                        r2: ${radius2 === undefined ? radius : radius2}, 
                                        fn: ${fn},
                                        center: [true, true, ${centerZ}],
                                        h: ${height}})`, color);




    }
    //% block="donut thickness $thickness|radius $radius||color $color|inner faces $innerFaces|outer faces $outerFaces|innerRotation $innerRotation"
    //% inlineInputMode=inline
    //% thickness.defl=20 thickness.min=1
    //% radius.defl=100
    //% innerFaces.defl=16
    //% outerFaces.defl=32
    //% innerRotation.defl=0
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% weight=80
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * 
     * @param thickness How thick to make the donut
     * @param radius The radius of the donut
     * @param color Color (in hex 0xab12345)
     * @param innerFaces How many faces on the inside of the object
     * @param outerFaces How many faces on the outside of the object
     * @param innerRotation How far to turn the inside (useful if the number of inner faces is small)
     */
    export function donut(thickness: number, radius: number, color?: number, innerFaces?: number, outerFaces?: number, innerRotation?: number) {

        /*
        ri = inner radius (default: 1),
        ro = outer radius (default: 4),
        fni = inner resolution (default: 16),
        fno = outer resolution (default: 32),
        roti = inner rotation (default: 0)
        */

        board().addStatement(`torus({
                                    ri: ${thickness / 2}, 
                                    ro: ${radius}, 
                                    fni: ${innerFaces === undefined ? 16 : innerFaces},
                                    fno: ${outerFaces === undefined ? 32 : outerFaces},
                                    roti: ${innerRotation === undefined ? 32 : innerRotation}, 
                                })`, color)
    }


    //% block="cone radius $radius|height $height|| color $color | faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% faces.defl=100
    //% weight=75
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * 
     * @param radius The radius of the cone
     * @param height How high to make the cone
     * @param color The color to use for the cone
     * @param centerZ Whether or not the cone centers around the Z axis.  Most likely you want to use move/translate instead.
     * @param faces The number of faces the cone has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     */
    export function cone(radius: number, height: number, color?: number, centerZ?: boolean, faces?: number) {
        board().addStatement(`cylinder({
                r2: 0, 
                r1: ${radius}, 
                h: ${height},
                fn: ${faces === undefined ? 100 : faces},
                center: [true, true, ${centerZ}]}
            )`, color);
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



    //% block="write text $text||line width $lineWidth|height $height|color $color"
    //% inlineInputMode=inline
    //% lineWidth.defl=4
    //% text.defl="text"
    //% height.defl=10
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add text
     * @param text The text to add
     * @param lineWidth How thick to make the text
     * @param height How tall to extrude the text
     * @param color The color of the text
     */
    export function text(text: string, lineWidth?: number, height?: number, color?: number) {
        board().requireImport('WRITE_TEXT', WRITE_TEXT)
        // text returns a list of shapes we need to expand [... list of extruded polylines]
        board().addStatement(`... writeText("${text}", 
                                ${lineWidth === undefined ? 4 : lineWidth}, 
                                ${height === undefined ? 10 : height})`, color);

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



    //% blockId=randomColor block="random color"
    //% inlineInputMode=inline
    //% group="Colors"
    //% advanced=true
    export function randomColor(): number {
        return Math.round(Math.random() * 255 * 255 *255)
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
    /**
     * move shapes over on the y axis
     * @param y the amount to move over
     * @param body the shapes to move across
     */
    export function moveShapesOverAsync(y: number, body: RefAction): Promise<void> {

        return _makeBlock(`translate([0, ${y}, 0], <CHILDREN> )`, body)
    }


    //% blockId=move_shapes_up block="move shapes up $z" 
    //% topblock=false
    //% z.defl=10
    //% handlerStatement=true
    //% group="Position"
    /**
     * move shapes up the z axis
     * @param z the amount to move up (in the air)
     * @param body the shapes to move up
     */
    export function moveShapesUpAsync(z: number, body: RefAction): Promise<void> {


        return _makeBlock(`translate([0, 0, ${z}], <CHILDREN> )`, body)

    }



    const SNAP_TO_SIDE_SCRIPT = `
    
function snapToSide(moveobj, withobj, axis, orientation, delta) {
    var translation = calcSnap(moveobj, withobj, axis, orientation, delta);
    return moveobj.translate(translation);
}
function centroid(o, objectSize) {
    try {
        var bounds = o.getBounds();
        objectSize = objectSize || size(bounds);
        return bounds[0].plus(objectSize.dividedBy(2));
    } catch (err) {
        error("centroid error o:".concat(jscadToString(o), " objectSize: ").concat(objectSize), undefined, err);
    }
}
var flushSide = {
    "above-outside": [ 1, 0 ],
    "above-inside": [ 1, 1 ],
    "below-outside": [ 0, 1 ],
    "below-inside": [ 0, 0 ],
    "outside+": [ 0, 1 ],
    "outside-": [ 1, 0 ],
    "inside+": [ 1, 1 ],
    "inside-": [ 0, 0 ],
    "center+": [ -1, 1 ],
    "center-": [ -1, 0 ]
};

function calcSnap(moveobj, withobj, axes, orientation) {
    var delta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var side = flushSide[orientation];
    if (!side) {
        var fix = {
            "01": "outside+",
            10: "outside-",
            11: "inside+",
            "00": "inside-",
            "-11": "center+",
            "-10": "center-"
        };
        error("calcSnap: invalid side: " + orientation + " should be " + fix["" + orientation + delta]);
    }
    var m = moveobj.getBounds();
    var w = withobj.getBounds();
    if (side[0] === -1) {
        w[-1] = centroid(withobj);
    }
    var t = axisApply(axes, function(i, axis) {
        return w[side[0]][axis] - m[side[1]][axis];
    });
    return delta ? axisApply(axes, function(i) {
        return t[i] + delta;
    }) : t;
}

function axisApply(axes, valfun, a) {
    var retval = a || [ 0, 0, 0 ];
    var lookup = {
        x: 0,
        y: 1,
        z: 2
    };
    axes.split("").forEach(function(axis) {
        retval[lookup[axis]] = valfun(lookup[axis], axis);
    });
    return retval;
}
    `
    const STACK_SHAPES_SCRIPT = `
       
function stackShapes(direction, axis, shapes) {

    if (shapes.length > 1) {
        var result = shapes[0]
        for (var i = 1; i < shapes.length; i++) {
            result = result.union(
                snapToSide( shapes[i], result, axis, direction)  
            );
        }
    }
    else {
        if (shapes.length > 0) {
            return shapes[0]
        }
        return []
    }
        return result
    
}
    `
    //% blockId=stackshapes block="stack shapes|$direction|axis: $axis" 
    //% topblock=false
    //% handlerStatement=true
    //% direction.defl=StackDirection.Above
    //% axis.defl=Axis.Z
    //% group="Position"
    /**
     * move shapes up the z axis
     * @param direction the direction to stack
     * @param axis the axis to stack in
     * @param body the shapes to move up
     */
    export function stackShapesAsync(direction: StackDirection, axis: Axis, body: RefAction): Promise<void> {

        board().requireImport('SNAP_TO_SIDE_SCRIPT', SNAP_TO_SIDE_SCRIPT)
        board().requireImport('STACK_SHAPES_SCRIPT', STACK_SHAPES_SCRIPT)

        const directionStr = _stackDirectionToString(direction)
        const axisStr = _axisToString(axis)
        return _makeBlock(`stackShapes("${directionStr}", "${axisStr}",  [<CHILDREN>] )`, body);



    }

    function _axisToString(axis: Axis) {
        switch (axis) {
            case Axis.X:
                return "x"
            case Axis.Y:
                return "y"
            case Axis.Z:
            default:
                return "z"
        }
    }
    /**
     * 
     * @param direction stacking direction
     */
    function _stackDirectionToString(direction: StackDirection) {
        let directionStr = "outside-"
        switch (direction) {
            case StackDirection.CenterAbove:
                directionStr = "center-"
                break
            case StackDirection.CenterBelow:
                directionStr = "center+"
                break
            case StackDirection.Below:
                directionStr = "outside+"
                break
            case StackDirection.InsideBelow:
                directionStr = "inside+"
                break
            case StackDirection.InsideAbove:
                directionStr = "inside-"
                break
            case StackDirection.Above:
            default:
                directionStr = "outside-"
                break
        }
        return directionStr
    }
    //% blockId=move_shapes block="translate shapes x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Position"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How far to move across in x
     * @param y How far to move over in y
     * @param z How far to move up in z
     * @param body The list of shapes to move
     */
    export function translateShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        return _makeBlock(`translate([${x}, ${y}, ${z}], <CHILDREN> )`, body);


    }

    //% blockId=flip_shapes block="flip shapes $x x°" 
    //% topblock=false
    //% handlerStatement=true
    //% x.shadow="protractorPicker"
    //% group="Rotation"
    /**
     * Flip along the X axis
     * @param x the amount, in degrees to rotate
     * @param body the shapes to rotate
     */
    export function flipShapesAsync(x: number, body: RefAction): Promise<void> {
        return _makeBlock(`rotate([${x}, 0, 0], <CHILDREN> )`, body);

    }
    //% blockId=roll_shapes block="roll shapes $y y°" 
    //% topblock=false
    //% handlerStatement=true
    //% y.shadow="protractorPicker"
    //% group="Rotation"
    /**
     * Roll shapes along Y axis
     * @param y the amount, in degrees to rotate in Y axis
     * @param body the shapes to rotate
     */
    export function rollShapesAsync(y: number, body: RefAction): Promise<void> {

        return _makeBlock(`rotate([0, ${y}, 0], <CHILDREN> )`, body);

    }

    //% blockId=spin_shapes block="spin shapes $z z°" 
    //% topblock=false
    //% handlerStatement=true
    //% z.shadow="protractorPicker"
    //% group="Rotation"
    /**
     * Spin shapes in Z axis
     * @param z the amount, in degrees to rotate in Z axis
     * @param body the shapes to rotate
     */
    export function spinShapesAsync(z: number, body: RefAction): Promise<void> {

        return _makeBlock(`rotate([0, 0, ${z}], <CHILDREN> )`, body);

    }

    //% blockId=rotate_shapes block="rotate shapes x°: $x|  y°: $y | z°: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Rotation"
    //% advanced=true
    /**
     * Perform a rotation in X, Y and Z axis
     * @param x Rotation in X, degrees
     * @param y Rotation in X, degrees
     * @param z Rotation in X, degrees
     * @param body The shapes to rotate
     */
    export function rotateShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        return _makeBlock(`rotate([${x}, ${y}, ${z}], <CHILDREN> )`, body);


    }


    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    /**
     * Add shapes together. Sometimes called "union".
     * @param body List of shapes to add
     */
    export function addShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("union( <CHILDREN> )", body);

    }

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    /**
     * From the first shape, cut away all other shapes.  Sometimes called "difference"
     * @param body List of shapes to subtract
     */
    export function subtractShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("difference( <CHILDREN> )", body); // add a JSCad statement to the interpreter.


    }

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    /**
     * Intersect shapes - only leave the parts from all shapes that overlap.
     * @param body List of shapes to intersect
     */
    export function intersectShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("intersect( <CHILDREN> )", body);


    }

    //% blockId=wrap2dshapes block="wrap 2d shapes (hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrinkwrapping technique to join them together.  Also known as hull.
     * @param body List of 2D shapes to shrink wrap
     */
    export function wrap2DShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("hull( <CHILDREN> )", body);

    }

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrink wrapping function one at a time to get a progressive effect.  Also known as "chain hull"
     * @param body The list of 2d shapes to sequentially shrink wrap
     */
    export function sequentialWrap2DShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("chain_hull( <CHILDREN> )", body);

    }


}

