// Auto-generated from simulator. Do not edit.
declare namespace extraMath {
    //% block="convert $number to text"
    //% inlineInputMode=inline
    //% weight=99
    //% number.defl=0
    //% group="Conversion"
    /**
     * Convert any number to text
     */
    //% shim=extraMath::convert
    function convert(number: number): string;

    //% block="convert $angle to radians"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=95
    //% group="Conversion"
    /**
     * Convert an angle in degrees to an angle in radians
     * @param angle The angle in degrees
     */
    //% shim=extraMath::radians
    function radians(angle: number): number;

    //% block="convert $angle to degrees"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=94
    //% group="Conversion"
    /**
     * Convert an angle in degrees to an angle in degrees
     * @param angle The angle in degrees
     */
    //% shim=extraMath::degrees
    function degrees(angle: number): number;

    //% block="sin $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=93
    //% group="Trigonometry in Degrees"
    /**
     * Sine of angle in degrees
     * @param theta The angle in degrees
     */
    //% shim=extraMath::sin
    function sin(theta: number): number;

    //% block="cos $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=92
    //% group="Trigonometry in Degrees"
    /**
     * Cosine of angle in degrees
     * @param theta The angle in degrees
     */
    //% shim=extraMath::cos
    function cos(theta: number): number;

    //% block="tan $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=91
    //% group="Trigonometry in Degrees"
    /**
     * Tangent of angle in degrees
     * @param theta The angle in degrees
     */
    //% shim=extraMath::tan
    function tan(theta: number): number;

    //% block="arcsin $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=90
    //% group="Trigonometry in Degrees"
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for inverse sin
     */
    //% shim=extraMath::arcsin
    function arcsin(x: number): number;

    //% block="arccos $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=89
    //% group="Trigonometry in Degrees"
    /**
     * Inverse sine of angle in degrees
     * @param x cos
     */
    //% shim=extraMath::arccos
    function arccos(x: number): number;

    //% block="arctan $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=88
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for inverse tan
     */
    //% shim=extraMath::arctan
    function arctan(x: number): number;

    //% block="arctan2 $y $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% y.defl=0
    //% weight=87
    //% group="Trigonometry in Degrees"
    /**
     * Inverse sine of angle in degrees
     * @param x The "adjacent" operand for inverse tan
     * @param y The "opposite" operand for inverse tan
     */
    //% shim=extraMath::arctan2
    function arctan2(y: number, x: number): number;

    //% block="ln $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=86
    //% group="Logarithms"
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for the natural log
     */
    //% shim=extraMath::ln
    function ln(x: number): number;

    //% block="log $x base $base"
    //% inlineInputMode=inline
    //% x.defl=1
    //% base.defl=10
    //% weight=85
    //% group="Logarithms"
    /**
     * Inverse sine of angle in degrees
     * @param x The operand for the log
     * @param base The base to take the logarithm with respect to
     */
    //% shim=extraMath::log
    function log(x: number, base: number): number;

    //% block="π"
    //% inlineInputMode=inline
    //% weight=84
    //% group="Constants"
    /**
     * The mathematical constant Pi, the circle constant.
     */
    //% shim=extraMath::Pi
    function Pi(): number;

    //% block="e"
    //% inlineInputMode=inline
    //% weight=83
    //% group="Constants"
    /**
     * The mathematical constant e, the exponential constant.
     */
    //% shim=extraMath::e
    function e(): number;

    //% block="ϕ"
    //% inlineInputMode=inline
    //% weight=82
    //% group="Constants"
    /**
     * The mathematical constant Phi, the golden ratio.
     */
    //% shim=extraMath::Phi
    function Phi(): number;

    //% block="√2"
    //% inlineInputMode=inline
    //% weight=81
    //% group="Constants"
    /**
     * The mathematical constant the square root of 2.
     */
    //% shim=extraMath::Sqrt2
    function Sqrt2(): number;

}
declare namespace shapes {
    //% blockId="main_axisPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_axisPicker
    function _axisPicker(axis: Axis): number;

    //% blockId="main_rotateAxisPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_rotateAxisPicker
    function _rotateAxisPicker(axis: RotateAxis): number;

    //% blockId="main_edgeStylePicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_edgeStylePicker
    function _edgeStylePicker(edgeStyle: EdgeStyle): number;

    //% blockId=colorNumberPicker2 block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#4ebed7", "#ffffff","#001F3F","#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#F012BE", "#B10DC9", "#85144B", "#FFFFFF", "#AAAAAA", "#DDDDDD",  "#111111", "#663300", "#cc6600", "#ffcc99", "#fff2e6"]'
    //% value.defl='#ff0000'
    //% shim=shapes::__colorNumberPicker2
    function __colorNumberPicker2(value: number): number;

    //% block="cube - width $width|depth $depth|height $height||color $color=colorNumberPicker2"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=95
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add a cube
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::cube
    function cube(width: number, depth: number, height: number, color?: number): void;

    //% block="sphere - radius $radius || color $color=colorNumberPicker2|type $type|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=60
    //% faces.min=4
    //% faces.max=1000
    //% type.defl=SphereType.icosahedron
    //% weight=94
    //% expandableArgumentMode="toggle"
    //% group="3D Shapes"
    /**
     * Add a sphere 
     * @param radius The distance from the center to the edge of the sphere 
     * @param color The color to make the sphere
     * @param type Whether to use geodesic or icosahedron.  Geodesic is more triangular and has a golf-ball like appearance.
     * @param faces How many faces to use to make the sphere.  The more you use the longer it takes to render, so choose wisely!
     */
    //% shim=shapes::sphere
    function sphere(radius: number, color?: number, type?: SphereType, faces?: number): void;

    //% block="cylinder - radius $radius|height $height||$color=colorNumberPicker2|faces $faces|radius2 $radius2"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=100
    //% weight=90
    //% group="3D Shapes"
    /**
     * Add a cylinder
     * @param radius The radius (distance from center to edge) of the cylinder
     * @param height How tall to make the cylinder
     * @param color The color of the cylinder in hex (0xab1234)
     * @param faces The number of faces the cylinder has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     * @param radius2 If specified, make the bottom of the cylinder have a different size
     */
    //% shim=shapes::cylinder
    function cylinder(radius: number, height: number, color?: number, faces?: number, radius2?: number): void;

    //% block="donut - thickness $thickness|radius $radius||$color=colorNumberPicker2|inner faces $innerFaces|outer faces $outerFaces|innerRotation $innerRotation"
    //% inlineInputMode=inline
    //% thickness.defl=4 thickness.min=1
    //% radius.defl=10
    //% innerFaces.defl=16
    //% outerFaces.defl=32
    //% innerRotation.defl=0
    //% weight=80
    //% group="3D Shapes - Round Shapes"
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
    //% shim=shapes::donut
    function donut(thickness: number, radius: number, color?: number, innerFaces?: number, outerFaces?: number, innerRotation?: number): void;

    //% block="cone - radius $radius|height $height|| color $color=colorNumberPicker2| faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=100
    //% weight=75
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * 
     * @param radius The radius of the cone
     * @param height How high to make the cone
     * @param color The color to use for the cone
     * @param faces The number of faces the cone has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     */
    //% shim=shapes::cone
    function cone(radius: number, height: number, color?: number, faces?: number): void;

    //% block="text - text $text | fontSize $fontSize | height $height ||color $color=colorNumberPicker2 | line width $lineWidth |  letterSpacing $letterSpacing | lineSpacing $lineSpacing"
    //% inlineInputMode=inline
    //% lineWidth.defl=4
    //% fontSize.defl=21,
    //% lineSpacing.defl=1.4
    //% letterSpacing.defl=1
    //% text.defl="BuildBee"
    //% height.defl=4
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add text
     * @param text The text to add
     * @param lineWidth How thick to make the text
     * @param height How tall to extrude the text
     * @param color The color of the text
     */
    //% shim=shapes::text
    function text(text: string, fontSize?: number, height?: number, color?: number, lineWidth?: number, letterSpacing?: number, lineSpacing?: number): void;

    //% block="roof - width $width|depth $depth|height $height||color $color=colorNumberPicker2"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=93
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
     * Add a triangular prism (roof)
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::triangleRoof
    function triangleRoof(width: number, height: number, depth: number, color?: number): void;

    //% block="ramp - width $width|depth $depth|height $height||color $color=colorNumberPicker2"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=92
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
     * Add a triangular prism (rampe)
     * @param width The width of the cube
     * @param depth The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::triangleRamp
    function triangleRamp(width: number, height: number, depth: number, color?: number): void;

    //% block="polygon - sides $sides|radius $radius|height $height||color $color=colorNumberPicker2"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% sides.defl=6
    //% sides.min=3
    //% weight=80
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
     * Add a triangular prism (roof)
     * @param sides The width of the cube
     * @param radius The depth of the cube
     * @param height The height of the cube
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::polygon3D
    function polygon3D(sides: number, radius: number, height: number, color?: number): void;

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
    //% block="polyhedron from 3d points $points|triangles $triangles"
    //% points.defl="inner_shadow_block"
    //% polyhedron.shadow="lists_create_with"
    //% advanced=true
    //% group="Advanced 3D Shapes"
    /*   export function polyhedron(points: Array<any>): void {
    const pointsArrayStr = (points as any).toArray()
    board().requireImport('POLYHEDRON_SCRIPT', POLYHEDRON_SCRIPT)
    board().addStatement(`generatePolyhedron([${pointsArrayStr}])`);
    }
    const POLYHEDRON_SCRIPT =`
    function generatePolyhedron(points) {
    var polygons = [];
    for (let i = 0; i < points.length; i++) {
    if (points[i] && points[i].length > 2) {
    const x = points[i][0]
    const y = points[i][1]
    const z = points[i][2]
    polygons.push(new CSG.Vertex(new CSG.Vector3D(x,y,z)));
    }
    }
    // add more polygons and finally:
    return CSG.fromPolygons(polygons);
    }
    `*/
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
    const pointsArrayStr = (points as any).toArray()
    board().addStatement(`rectangular_extrude([${pointsArrayStr}], {w: ${width}, h: ${height}, closed: ${closed}})`);
    }*/
    //% block="circle (2d) - radius $radius"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    //% shim=shapes::circle
    function circle(radius: number): void;

    //% blockId=add_rect block="rect (2d) - width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% height.defl=20
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    //% shim=shapes::rect
    function rect(width: number, height: number): void;

    //% blockId=regular_polygon block="regular polygon (2d) - sides $sides|radius $radius"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% sides.defl=6
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    /**
     * regular polygon
     * @param sides the number of sides to make
     * @param radius the distance from the center
     */
    //% shim=shapes::regularPolygon
    function regularPolygon(sides: number, radius: number): void;

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

    //% blockId="main_polyhedraPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    //% shim=shapes::_polyhedraPicker
    function _polyhedraPicker(polyhedra: Polyhedra): number;

    //% blockId=polyhedra block="polyhedron type: $polyhedron=main_polyhedraPicker with radius: $radius mm ||color $color=colorNumberPicker2" 
    //% topblock=false
    //% handlerStatement=true
    //% radius.defl=5
    //% group="More Shapes"
    //% advanced=false
    //% inlineInputMode=inline
    /**
     * Creates a polyhedron
     * @param radius the radius to use
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
     */
    //% shim=shapes::polyhedron
    function polyhedron(polyhedron: Polyhedra, radius: number, color?: number): void;

}
declare namespace operators {
    /**
     * move shapes in mm in axis
     * @param mm how far to move across the axis
     * @param axis which axis to use
     * @param body the shapes to move across
     */
    //% blockId=move block="move $mm mm $direction=main_axisPicker" 
    //% topblock=false
    //% mm.defl=10
    //% handlerStatement=true
    //% group="Position"
    //% weight=82
    //% shim=operators::moveAsync promise
    function move(mm: number, direction: Axis, body: () => void): void;

    //% blockId=setPoition block="set position to x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Position"
    //% x.defl=0
    //% y.defl=0
    //% z.defl=0
    /**
     * Move all shapes to lie on the XY Plane at Z = 0. A Great last thing to check before 3D Printing.
     * @param x the x position to move shapes to
     * @param y the y position to move shapes to
     * @param z the z position to move shapes to
     * @param body the shapes to move up
     */
    //% shim=operators::setPositionAsync promise
    function setPosition(x: number, y: number, z: number, body: () => void): void;

    //% blockId=stackshapes block="stack shapes|$direction|axis: $axis" 
    //% topblock=false
    //% handlerStatement=true
    //% direction.defl=StackDirection.Above
    //% axis.defl=Axis.Z
    //% group="Layout"
    /**
     * move shapes up the z axis
     * @param direction the direction to stack
     * @param axis the axis to stack in
     * @param body the shapes to move up
     */
    //% shim=operators::stackAsync promise
    function stack(direction: StackDirection, axis: Axis, body: () => void): void;

    //% blockId=trim_edges block="style edges: $edgeStyle=main_edgeStylePicker | sides: $direction | with radius: $radius mm" 
    //% topblock=false
    //% handlerStatement=true
    //% axis.defl=3
    //% radius.defl=2
    //% group="Edges"
    /**
     * Either chamfers or fillets the edges in the Z axis
     * @param direction the direction to stack
     * @param radius the radius to use
     * @param body the shapes to move up
     */
    //% shim=operators::styleEdgesAsync promise
    function styleEdges(edgeStyle: EdgeStyle, direction: StyleEdgeDirection, radius: number, body: () => void): void;

    //% blockId=placeOnGround block="align to print bed" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Layout"
    /**
     * Recenter all shapes to lie on the XY Plane at Z = 0. A Great last thing to check before 3D Printing.
     * @param body the shapes to move up
     */
    //% shim=operators::placeOnGroundAsync promise
    function placeOnGround(body: () => void): void;

    //% blockId=makehollow block="hollow shapes: $wallThickness mm walls | with $insideRound mm radius" 
    //% topblock=false
    //% handlerStatement=true
    //% wallThickness.defl=2
    //% wallThickness.min=1
    //% insideRound.defl=1
    //% insideRound.min=0
    //% group="Edges"
    /**
     * Hollows out a part
     * @param wallThickness how thick to make the walls
     * @param insideRound the radius to use on the inside
     * @param body the shapes to move up
     */
    //% shim=operators::hollowShapesAsync promise
    function hollowShapes(wallThickness: number, insideRound: number, body: () => void): void;

    //% blockId=move_shapes block="translate shapes x: $x|  y: $y |  z: $z" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Position and Size"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How far to move across in x
     * @param y How far to move over in y
     * @param z How far to move up in z
     * @param body The list of shapes to move
     */
    //% shim=operators::translateShapesAsync promise
    function translateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=scale_shapes block="scale shapes x: $x|  y: $y |  z: $z" 
    //% x.defl=1
    //% y.defl=1
    //% z.defl=1
    //% topblock=false
    //% handlerStatement=true
    //% group="Position and Size"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How much to scale in x
     * @param y How much to scale in y
     * @param z How much to scale in z
     * @param body The list of shapes to move
     */
    //% shim=operators::scaleShapesAsync promise
    function scaleShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=enlarge_shapes block="enlarge shapes x: $x|  y: $y |  z: $z" 
    //% x.defl=2
    //% y.defl=2
    //% z.defl=2
    //% topblock=false
    //% handlerStatement=true
    //% group="Position and Size"
    //% advanced=true
    /**
     * Move shapes in three dimensions
     * @param x How much to enlarge in x
     * @param y How much to enlarge in y
     * @param z How much to enlarge in z
     * @param body The list of shapes to enlarge
     */
    //% shim=operators::enlargeShapesAsync promise
    function enlargeShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=flip_shapes block="turn $angle ° | $axis=main_rotateAxisPicker" 
    //% topblock=false
    //% handlerStatement=true
    //% angle.defl=45
    //% angle.shadow="protractorPicker"
    //% axis.defl=2
    //% weight=80
    //% group="Position"
    /**
     * Flip along the X axis
     * @param x the amount, in degrees to rotate
     * @param body the shapes to rotate
     */
    //% shim=operators::turnAsync promise
    function turn(angle: number, axis: RotateAxis, body: () => void): void;

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
    //% shim=operators::rotateShapesAsync promise
    function rotateShapes(x: number, y: number, z: number, body: () => void): void;

    //% blockId=add_shapes block="add shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    /**
     * Add shapes together. Sometimes called "union".
     * @param body List of shapes to add
     */
    //% shim=operators::addShapesAsync promise
    function addShapes(body: () => void): void;

    //% blockId=subtract_shapes block="subtract shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    /**
     * From the first shape, cut away all other shapes.  Sometimes called "difference"
     * @param body List of shapes to subtract
     */
    //% shim=operators::subtractShapesAsync promise
    function subtractShapes(body: () => void): void;

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Operations"
    /**
     * Intersect shapes - only leave the parts from all shapes that overlap.
     * @param body List of shapes to intersect
     */
    //% shim=operators::intersectShapesAsync promise
    function intersectShapes(body: () => void): void;

    //% blockId=rotateExtrude2dshapes block="rotate extrude 2d shape from angle $startAngle | to $stopAngle | faces $faces" 
    //% startAngle.defl=0
    //% stopAngle.defl=360
    //% startAngle.shadow="protractorPicker"
    //% stopAngle.shadow="protractorPicker"
    //% faces.defl=32
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrinkwrapping technique to join them together.  Also known as hull.
     * @param body List of 2D shapes to shrink wrap
     */
    //% shim=operators::rotateExtrudeAsync promise
    function rotateExtrude(startAngle: number, stopAngle: number, faces: number, body: () => void): void;

    //% blockId=linearExtrude2dshapes block="linear extrude 2d shape to height: $height | twist: $twist | slices: $slices" 
    //% height.defl=10
    //% twist.defl=0
    //% twist.shadow="protractorPicker"
    //% slices.defl=50
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * Give a 2D shape height, optionally twist it
     * @param height The height of the extrusion
     * @param twist The angle to twist the extrusion
     * @param slices Defines resolution of the twist
     * @param body 
     */
    //% shim=operators::linearExtrudeAsync promise
    function linearExtrude(height: number, twist: number, slices: number, body: () => void): void;

    //% blockId=wrap2dshapes block="wrap 2d shapes (hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrinkwrapping technique to join them together.  Also known as hull.
     * @param body List of 2D shapes to shrink wrap
     */
    //% shim=operators::wrap2DShapesAsync promise
    function wrap2DShapes(body: () => void): void;

    //% blockId=sequentialWrap2dshapes block="wrap 2d shapes sequentially (chain hull)" 
    //% topblock=false
    //% handlerStatement=true
    //% group="2D to 3D Shape Converters"
    //% advanced=true
    /**
     * For 2D shapes, apply a shrink wrapping function one at a time to get a progressive effect.  Also known as "chain hull"
     * @param body The list of 2d shapes to sequentially shrink wrap
     */
    //% shim=operators::sequentialWrap2DShapesAsync promise
    function sequentialWrap2DShapes(body: () => void): void;

}
declare namespace parameters {
    //% block="text - label: $parameterName || default: $defaultText | characterLimit: $characterLimit"
    //% inlineInputMode=inline
    //% parameterName.defl="textInput"
    //% defaultText.defl="text"
    //% characterLimit.defl=0
    //% characterLimit.min=0
    //% group="Text"
    //% expandableArgumentMode="enabled"
    /**
     * Add text input parameter
     * @param parameterName The label for text input field
     * @param defaultText The default text for the text input field
     * @param characterLimit The character limit to apply to the text input. (0 means no limit)
     */
    //% shim=parameters::textParameter
    function textParameter(parameterName: string, defaultText?: string, characterLimit?: number): string;

    //% block="number - label: $parameterName || default: $defaultValue"
    //% inlineInputMode=inline
    //% parameterName.defl="numberInput"
    //% defaultValue.defl="0"
    //% group="Numbers"
    //% expandableArgumentMode="enabled"
    /**
     * Add text input parameter
     * @param parameterName The label for number input field
     * @param defaultValue The default value for the number input field
     */
    //% shim=parameters::numberParameter
    function numberParameter(parameterName: string, defaultValue?: number): number;

    //% block="range - label: $parameterName || default: $defaultValue | min: $minValue | max: $maxValue | step: $stepValue"
    //% inlineInputMode=inline
    //% parameterName.defl="rangeInput"
    //% defaultValue.defl="0"
    //% minValue.defl="0"
    //% maxValue.defl="10"
    //% stepValue.defl="1"
    //% group="Numbers"
    //% expandableArgumentMode="enabled"
    /**
     * Add text input parameter
     * @param parameterName The label for slider
     * @param defaultValue The default text for the text input field
     * @param minValue The minimum value of the slider
     * @param maxValue The maximum value of the slider
     * @param stepValue The default value of the slider
     */
    //% shim=parameters::numberRangeParameter
    function numberRangeParameter(parameterName: string, defaultValue?: number, minValue?: number, maxValue?: number, stepValue?: number): number;

}
declare namespace colors {
    //% blockId=randomColor block="random color"
    //% inlineInputMode=inline
    //% group="Colors"
    //% advanced=false
    //% shim=colors::randomColor
    function randomColor(): number;

    //% blockId=rainbowColor block="rainbow color: $rainbowColor || color wheel increment: $colorWheelDegrees °"
    //% inlineInputMode=inline
    //% rainbowColor.defl=0
    //% colorWheelDegrees.defl=20
    //% group="Colors"
    //% advanced=false
    //% shim=colors::rainbowColor
    function rainbowColor(rainbowColor: number, colorWheelDegrees?: number): number;

    //% blockId=color_block block="color $color" 
    //% group="Colors"
    //% topblock=false
    //% handlerStatement=true
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% shim=colors::colorAsync promise
    function color(color: number, body: () => void): void;

}

// Auto-generated. Do not edit. Really.
