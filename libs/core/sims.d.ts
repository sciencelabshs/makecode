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
    //% shim=shapes::sphere
    function sphere(width: number, depth: number, height: number): void;

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
    //% thickness.defl=20
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

}
declare namespace position {
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
    //% shim=position::moveShapesAcrossAsync promise
    function moveShapesAcross(x: number, body: () => void): void;

    //% blockId=move_shapes_over block="move shapes over $y" 
    //% topblock=false
    //% y.defl=10
    //% handlerStatement=true
    //% group="Position"
    //% shim=position::moveShapesOverAsync promise
    function moveShapesOver(y: number, body: () => void): void;

    //% blockId=move_shapes_up block="move shapes up $z" 
    //% topblock=false
    //% z.defl=10
    //% handlerStatement=true
    //% group="Position"
    //% shim=position::moveShapesUpAsync promise
    function moveShapesUp(z: number, body: () => void): void;

    //% blockId=move_shapes block="translate shapes x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Position"
    //% advanced=true
    //% shim=position::translateShapesAsync promise
    function translateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=flip_shapes block="flip shapes $x °" 
    //% topblock=false
    //% handlerStatement=true
    //% x.shadow="protractorPicker"
    //% group="Rotation"
    //% shim=position::flipShapesAsync promise
    function flipShapes(x: number, body: () => void): void;

    //% blockId=roll_shapes block="roll shapes $y °" 
    //% topblock=false
    //% handlerStatement=true
    //% y.shadow="protractorPicker"
    //% group="Rotation"
    //% shim=position::rollShapesAsync promise
    function rollShapes(y: number, body: () => void): void;

    //% blockId=spin_shapes block="roll shapes $z °" 
    //% topblock=false
    //% handlerStatement=true
    //% z.shadow="protractorPicker"
    //% group="Rotation"
    //% shim=position::spinShapesAsync promise
    function spinShapes(z: number, body: () => void): void;

    //% blockId=rotate_shapes block="rotate shapes x°: $x|  y°: $y | z°: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Rotation"
    //% advanced=true
    //% shim=position::rotateShapesAsync promise
    function rotateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% shim=position::addShapes
    function addShapes(body: () => void): void;

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% shim=position::subtractShapesAsync promise
    function subtractShapes(body: () => void): void;

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% shim=position::intersectShapesAsync promise
    function intersectShapes(body: () => void): void;

    //% blockId=wrap2dshapes block="wrap 2d shapes (hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% advanced=true
    //% shim=position::wrap2DShapesAsync promise
    function wrap2DShapes(body: () => void): void;

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    //% advanced=true
    //% shim=position::sequentialWrap2DShapesAsync promise
    function sequentialWrap2DShapes(body: () => void): void;

}

// Auto-generated. Do not edit. Really.
