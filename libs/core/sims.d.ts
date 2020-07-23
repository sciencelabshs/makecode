// Auto-generated from simulator. Do not edit.
declare namespace shapes {
    //% block="cube width $width|depth $depth|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% shim=shapes::cube
    function cube(width: number, depth: number, height: number): void;

    //% block="sphere width $width|depth $depth|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% shim=shapes::sphere
    function sphere(width: number, depth: number, height: number): void;

    //% block="cylinder radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% shim=shapes::cylinder
    function cylinder(radius: number, height: number): void;

    //% block="donut thickness $thickness|radius $radius"
    //% inlineInputMode=inline
    //% thickess.defl=20
    //% radius.defl=100
    //% shim=shapes::donut
    function donut(thickness: number, radius: number): void;

    //% block="cone radius $radius|height $height"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% shim=shapes::cone
    function cone(radius: number, height: number): void;

}
declare namespace operators {
    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% shim=operators::addShapes
    function addShapes(body: () => void): void;

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% shim=operators::subtractShapesAsync promise
    function subtractShapes(body: () => void): void;

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% shim=operators::intersectShapesAsync promise
    function intersectShapes(body: () => void): void;

    //% blockId=move_shapes block="move shapes across x: $x| over y: $y | up z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% shim=operators::moveShapesAsync promise
    function moveShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=rotate_shapes block="rotate shapes x: $x|  y: $y | z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% shim=operators::rotateShapesAsync promise
    function rotateShapes(x: number, y: number, z: number, body: () => void): void;

}

// Auto-generated. Do not edit. Really.
