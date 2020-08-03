// Auto-generated from simulator. Do not edit.
declare namespace shapes {
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
    //% shim=shapes::cube
    function cube(width: number, depth: number, height: number): void;

    /**
     * Add a sphere
     * @param radius The radius of the sphere
     */
    //% block="sphere radius $radius || faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=50
    //% faces.defl=150
    //% faces.min=4
    //% faces.max=1000
    //% weight=20
    //% expandableArgumentMode="toggle"
    //% group="3D Shapes"
    //% shim=shapes::sphere
    function sphere(radius: number, faces?: number): void;

    //% block="cylinder radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% weight=30
    //% group="3D Shapes"
    //% shim=shapes::cylinder
    function cylinder(radius: number, height: number): void;

    //% block="donut thickness $thickness|radius $radius"
    //% inlineInputMode=inline
    //% thickness.defl=20 thickness.min=1
    //% radius.defl=100
    //% weight=40
    //% group="3D Shapes"
    //% shim=shapes::donut
    function donut(thickness: number, radius: number): void;

    //% block="cone radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% weight=50
    //% group="3D Shapes"
    //% shim=shapes::cone
    function cone(radius: number, height: number): void;

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
    //% group="2D Shapes"
    //% shim=shapes::circle
    function circle(radius: number): void;

    //% blockId=add_rect block="rect width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=50
    //% height.defl=50
    //% weight=50
    //% group="2D Shapes"
    //% shim=shapes::rect
    function rect(width: number, height: number): void;

    //% blockId=point3d block="3D point x: $x|y:  $y|z:  $z"
    //% inlineInputMode=inline
    //% x.defl=50
    //% y.defl=50
    //% z.defl=50
    //% group="Points"
    //% advanced=true
    //% shim=shapes::point3d
    function point3d(x: number, y: number, z: number): string;

    //% blockId=point2d block="2D point x: $x|y:  $y"
    //% inlineInputMode=inline
    //% x.defl=50
    //% y.defl=50
    //% group="Points"
    //% advanced=true
    //% shim=shapes::point2d
    function point2d(x: number, y: number): string;

}
declare namespace operators {
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
    //% shim=operators::moveShapesAcrossAsync promise
    function moveShapesAcross(x: number, body: () => void): void;

    //% blockId=move_shapes_over block="move shapes over $y" 
    //% topblock=false
    //% y.defl=10
    //% handlerStatement=true
    //% group="Position"
    //% shim=operators::moveShapesOverAsync promise
    function moveShapesOver(y: number, body: () => void): void;

    //% blockId=move_shapes_up block="move shapes up $z" 
    //% topblock=false
    //% z.defl=10
    //% handlerStatement=true
    //% group="Position"
    //% shim=operators::moveShapesUpAsync promise
    function moveShapesUp(z: number, body: () => void): void;

    //% blockId=move_shapes block="translate shapes x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Position"
    //% advanced=true
    //% shim=operators::translateShapesAsync promise
    function translateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=flip_shapes block="flip shapes $x °" 
    //% topblock=false
    //% handlerStatement=true
    //% x.shadow="protractorPicker"
    //% group="Rotation"
    //% shim=operators::flipShapesAsync promise
    function flipShapes(x: number, body: () => void): void;

    //% blockId=roll_shapes block="roll shapes $y °" 
    //% topblock=false
    //% handlerStatement=true
    //% y.shadow="protractorPicker"
    //% group="Rotation"
    //% shim=operators::rollShapesAsync promise
    function rollShapes(y: number, body: () => void): void;

    //% blockId=spin_shapes block="spin shapes $z °" 
    //% topblock=false
    //% handlerStatement=true
    //% z.shadow="protractorPicker"
    //% group="Rotation"
    //% shim=operators::spinShapesAsync promise
    function spinShapes(z: number, body: () => void): void;

    //% blockId=rotate_shapes block="rotate shapes x°: $x|  y°: $y | z°: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Rotation"
    //% advanced=true
    //% shim=operators::rotateShapesAsync promise
    function rotateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% shim=operators::addShapes
    function addShapes(body: () => void): void;

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% shim=operators::subtractShapesAsync promise
    function subtractShapes(body: () => void): void;

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% shim=operators::intersectShapesAsync promise
    function intersectShapes(body: () => void): void;

    /** Rotational extrusion is similar to the process of turning or "throwing" a bowl on the Potter's wheel. */
    //% blockId=rotateExtrudeShapes block="rotate extrude 2d shape (turn in z axis)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    //% shim=operators::rotateExtrudeShapeAsync promise
    function rotateExtrudeShape(body: () => void): void;

    //% blockId=wrap2dshapes block="wrap 2d shapes (hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    //% shim=operators::wrap2DShapesAsync promise
    function wrap2DShapes(body: () => void): void;

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    //% shim=operators::sequentialWrap2DShapesAsync promise
    function sequentialWrap2DShapes(body: () => void): void;

}

// Auto-generated. Do not edit. Really.
