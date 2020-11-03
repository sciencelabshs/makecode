/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="../libs/solids.ts"/>
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
 * Extra Maths 
 * 
 */
namespace pxsim.extraMath {
    //% block="convert $angle to radians"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=95
    //% group="Angles"
    /**
        * Convert an angle in degrees to an angle in radians
        * @param angle The angle in degrees
        */
    export function radians(angle: number = 0) {
        return Math.PI * angle / 180
    }

    //% block="convert $angle to degrees"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=94
    //% group="Angles"
    /**
        * Convert an angle in degrees to an angle in degrees
        * @param angle The angle in degrees
    */
    export function degrees(angle: number = 0) {
        return 180 * angle / Math.PI
    }


    //% block="sin $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=93
    //% group="Trigonometry in Degrees"
    /**
        * Sine of angle in degrees
        * @param theta The angle in degrees
    */
    export function sin(theta: number = 0) {
        return Math.sin(extraMath.radians(theta))
    }

    //% block="cos $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=92
    //% group="Trigonometry in Degrees"
    /**
        * Cosine of angle in degrees
        * @param theta The angle in degrees
    */
    export function cos(theta: number = 0) {
        return Math.cos(extraMath.radians(theta))
    }


    //% block="tan $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=91
    //% group="Trigonometry in Degrees"
    /**
        * Tangent of angle in degrees
        * @param theta The angle in degrees
    */
    export function tan(theta: number = 0) {
        return Math.tan(extraMath.radians(theta))
    }


    //% block="arcsin $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=90
    //% group="Trigonometry in Degrees"
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for inverse sin
    */
    export function arcsin(x: number = 0) {
        return extraMath.degrees(Math.asin(x))
    }

    //% block="arccos $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=89
    //% group="Trigonometry in Degrees"
    /**
        * Inverse sine of angle in degrees
        * @param x cos
    */
    export function arccos(x: number = 0) {
        return extraMath.degrees(Math.acos(x))
    }

    //% block="arctan $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=88
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for inverse tan
    */
    export function arctan(x: number = 0) {
        return extraMath.degrees(Math.atan(x))
    }

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
    export function arctan2(y: number = 0,  x: number = 0) {
        return extraMath.degrees(Math.atan2(y, x))
    }


    //% block="ln $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=86
    //% group="Logarithms"
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for the natural log
    */
    export function ln(x: number = 1) {
        return Math.log(x)
    }

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
    export function log(x: number = 1, base: number = 10) {
        return Math.log(x) / Math.log(base) // Use change of base formula
    }

    //% block="π"
    //% inlineInputMode=inline
    //% weight=84
    //% group="Constants"
    /**
        * The mathematical constant Pi, the circle constant.
    */
    export function Pi() {
        return Math.PI
    }

    //% block="e"
    //% inlineInputMode=inline
    //% weight=83
    //% group="Constants"
    /**
        * The mathematical constant e, the exponential constant.
    */
    export function e() {
        return Math.E
    }

    //% block="ϕ"
    //% inlineInputMode=inline
    //% weight=82
    //% group="Constants"
    /**
        * The mathematical constant Phi, the golden ratio.
    */
    export function Phi() {
        return (Math.sqrt(5) + 1) / 2.0
    }

    //% block="√2"
    //% inlineInputMode=inline
    //% weight=81
    //% group="Constants"
    /**
        * The mathematical constant the square root of 2.
    */
    export function Sqrt2() {
        return Math.sqrt(2)
    }
}



/**
 * 3D Shapes to create on the surface
 * 
 */
namespace pxsim.shapes {


    //% blockId="main_axisPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    export function _axisPicker(axis: Axis): number {
        return axis
    }


    //% blockId="main_rotateAxisPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    export function _rotateAxisPicker(axis: RotateAxis): number {
        return axis
    }

    //% blockId="main_edgeStylePicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    export function _edgeStylePicker(edgeStyle: EdgeStyle): number {
        return edgeStyle
    }

    //% blockId=colorNumberPicker2 block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#4ebed7", "#ffffff","#001F3F","#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#F012BE", "#B10DC9", "#85144B", "#FFFFFF", "#AAAAAA", "#DDDDDD",  "#111111", "#663300", "#cc6600", "#ffcc99", "#fff2e6"]'
    //% value.defl='#ff0000'
    export function __colorNumberPicker2(value: number) {
        return value;
    }

    //% block="cube - width $width|depth $depth|height $height||color $color=colorNumberPicker2|center $center"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% center.defl=false
    //% weight=95
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
        * Add a cube
        * @param width The width of the cube
        * @param depth The depth of the cube
        * @param height The height of the cube
        * @param color If specified, what color to make the cube.  In hex (0xab1234)
        * @param center If specified, whether to center the cube when it is places
        */
    export function cube(width: number = 1, depth: number = 1, height: number = 1, color?: number, center?:boolean) {
        const statement = `cube({size: [${width}, ${depth}, ${height}], center: [${center}, ${center}, ${center}],})`
        board().addStatement(statement, color)


    }


    //% block="sphere - radius $radius || color $color|type $type|center $center|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=60
    //% faces.min=4
    //% faces.max=1000
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% center.defl=false
    //% type.defl=SphereType.icosahedron
    //% weight=94
    //% expandableArgumentMode="toggle"
    //% group="3D Shapes"
    /**
     * Add a sphere 
     * @param radius The distance from the center to the edge of the sphere 
     * @param color The color to make the sphere
     * @param type Whether to use geodesic or icosahedron.  Geodesic is more triangular and has a golf-ball like appearance.
     * @param center Whether to center around the z axis.  By default this is false.
     * @param faces How many faces to use to make the sphere.  The more you use the longer it takes to render, so choose wisely!
     */
    export function sphere(radius: number, color?: number, type?: SphereType, center?: boolean, faces?: number) {
        const fn = (faces) ? Math.max(faces, 4) : 150
        const sphereType = type === SphereType.geodesic ? "geodesic" : "icosahedron";

        board().addStatement(`sphere({r: ${radius}, center: [${center}, ${center}, ${center}],  fn: ${fn}, type: "${sphereType}"})`, color);

    }


    //% block="cylinder - radius $radius|height $height||color $color|radius2 $radius2|center $centerZ|faces $faces"
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
    //% block="donut - thickness $thickness|radius $radius||color $color|inner faces $innerFaces|outer faces $outerFaces|innerRotation $innerRotation"
    //% inlineInputMode=inline
    //% thickness.defl=4 thickness.min=1
    //% radius.defl=10
    //% innerFaces.defl=16
    //% outerFaces.defl=32
    //% innerRotation.defl=0
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
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


    //% block="cone - radius $radius|height $height|| color $color | faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% faces.defl=100
    //% weight=75
    //% group="3D Shapes - Round Shapes"
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
    function writeText({text, lineWidth, fontSize, lineSpacing, letterSpacing, extrudeHeight}) {

        var l = vectorText({
                xOffset:0,
                yOffset:0,
                input: text,
                height: fontSize,
                lineSpacing: lineSpacing,
                letterSpacing: letterSpacing,
                align: 'left',
                extrudeOffset: 0,
            
        }, text);   // l contains a list of polylines to be drawn


        var o = [];
        l.forEach(function(pl) {                   // pl = polyline (not closed)
            o.push(rectangular_extrude(pl, {w: lineWidth, h: extrudeHeight}));   // extrude it to 3D
        });
        return o;
      }
        `



    //% block="text - text $text | fontSize $fontSize | height $height ||color $color | line width $lineWidth |  letterSpacing $letterSpacing | lineSpacing $lineSpacing"
    //% inlineInputMode=inline
    //% lineWidth.defl=4
    //% fontSize.defl=21,
    //% lineSpacing.defl=1.4
    //% letterSpacing.defl=1
    //% text.defl="text"
    //% height.defl=4
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
    export function text(text: string, fontSize?: number, height?: number, color?: number, lineWidth?: number, letterSpacing?: number, lineSpacing?: number) {
        board().requireImport('WRITE_TEXT', WRITE_TEXT)
        // text returns a list of shapes we need to expand [... list of extruded polylines]
        board().addStatement(`union(writeText({
                                text: "${text}", 
                                lineWidth:${lineWidth === undefined ? 4 : lineWidth},
                                fontSize: ${fontSize === undefined ? 21 : fontSize},
                                lineSpacing: ${lineSpacing === undefined ? 1.4 : lineSpacing},
                                letterSpacing: ${letterSpacing === undefined ? 1 : letterSpacing},
                                extrudeHeight: ${height === undefined ? 1 : height}
                            }))`, color);

    }



    //% block="roof - width $width|depth $depth|height $height||color $color"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=93
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
    * Add a triangular prism (roof)
    * @param width The width of the cube
    * @param depth The depth of the cube
    * @param height The height of the cube
    * @param color If specified, what color to make the cube.  In hex (0xab1234)
    */
    export function triangleRoof(width: number, height: number, depth: number, color?: number) {
        board().requireImport('TRIANGLE_PRISM', TRIANGLE_PRISM)

        board().addStatement(`triangularPrism({
                mode: "equilateral", 
                width: ${width},
                height: ${height},
                depth: ${depth},
            })`, color);
    }



    //% block="ramp - width $width|depth $depth|height $height||color $color"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=92
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
    * Add a triangular prism (rampe)
    * @param width The width of the cube
    * @param depth The depth of the cube
    * @param height The height of the cube
    * @param color If specified, what color to make the cube.  In hex (0xab1234)
    */
    export function triangleRamp(width: number, height: number, depth: number, color?: number) {
        board().requireImport('TRIANGLE_PRISM', TRIANGLE_PRISM)

        board().addStatement(`triangularPrism({
            mode: "right", 
            width: ${width},
            height: ${height},
            depth: ${depth},
        })`, color);
    }

    // this is designed to stack perfectly with cube.
    const TRIANGLE_PRISM = `
    function triangularPrism({mode, width, depth, height}) {
        if (mode === "equilateral") {
            var cag = polygon({ points: [ [0,0],[-width/2,height],[width/2,height] ] })
            return linear_extrude({height:depth}, cag).rotateX(-90).translate([width/2,0,height])
              
        }
        else if (mode === "right") {
            var cag = polygon({ points: [ [0,0],[0,height],[width,height] ] })
            return linear_extrude({height:depth}, cag).rotateX(-90).translate([width/2,0,height])
         
        }
    }
    `


    //% block="polygon - sides $sides|radius $radius|height $height||color $color"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% sides.defl=6
    //% sides.min=3
    //% weight=80
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
    * Add a triangular prism (roof)
    * @param sides The width of the cube
    * @param radius The depth of the cube
    * @param height The height of the cube
    * @param color If specified, what color to make the cube.  In hex (0xab1234)
    */
    export function polygon3D(sides: number, radius: number, height: number, color?: number) {
        board().requireImport('POLYGON_PRISM', POLYGON_PRISM)

        board().addStatement(`polygonPrism({
            sides: ${sides}, 
            radius: ${Math.max(radius, .001)}, // avoid degenerate olygon
            height: ${height},
        })`, color);
    }

    const POLYGON_PRISM = `


function polygonPrism({sides, radius, height}) {
    
    var centerX = 0, centerY = 0, size = radius;
    let points = []
    
    points.push([centerX + size * Math.cos(0), 
                 centerY + size * Math.sin(0)])
    
    for (var i = 1; i <= sides;i += 1) {
        points.push([centerX + size * Math.cos(i * 2 * Math.PI / sides), 
                     centerY + size *Math.sin(i * 2 * Math.PI / sides)])
    }

    var twoDShape = polygon({ points: points  })
    return linear_extrude({height: height}, twoDShape); 
  
}
 
 `

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
    export function circle(radius: number) {
        board().addStatement(`circle({r: ${radius}})`);
    }

    //% blockId=add_rect block="rect (2d) - width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% height.defl=20
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    export function rect(width: number, height: number) {
        board().addStatement(`square({size: [${width}, ${height}]})`);
    }

    const REGULAR_POLYGON = `


    function regularPolygon({sides, radius, height}) {
        
        var centerX = 0, centerY = 0, size = radius;
        let points = []
        
        points.push([centerX + size * Math.cos(0), 
                     centerY + size * Math.sin(0)])
        
        for (var i = 1; i <= sides;i += 1) {
            points.push([centerX + size * Math.cos(i * 2 * Math.PI / sides), 
                         centerY + size *Math.sin(i * 2 * Math.PI / sides)])
        }
    
        var twoDShape = polygon({ points: points  })
        return twoDShape
      
    }
     
     `


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
    export function regularPolygon(sides: number, radius: number) {
        board().requireImport('REGULAR_POLYGON', REGULAR_POLYGON)

        board().addStatement(`regularPolygon({
                sides: ${sides}, 
                radius: ${Math.max(radius, .001)}, // avoid degenerate olygon
            })`);
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
        return Math.round(Math.random() * 255 * 255 * 255)
    }

    //% blockId="main_polyhedraPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=3
    export function _polyhedraPicker(polyhedra: Polyhedra): number {
        return polyhedra
    }

    
    //% blockId=polyhedra block="polyhedron type: $polyhedron=main_polyhedraPicker with radius: $radius mm ||color $color=colorNumberPicker2" 
    //% topblock=false
    //% handlerStatement=true
    //% radius.defl=5
    //% group="Complex Geometry"
    //% advanced=true
    //% inlineInputMode=inline
    /**
     * Creates a polyhedron
     * @param radius the radius to use
     * @param color If specified, what color to make the cube.  In hex (0xab1234)
    */
    export function polyhedron(polyhedron: Polyhedra = 6, radius: number = 5, color?: number) {
        let statement = ""
        board().requireImport('WRITE_TEXT', WRITE_TEXT)
        switch (polyhedron){
            case 4:
                statement = tetrahedronStatement(radius, ["1", "2", "3", "4"]);
                break;
            case 6:
                statement = cubeStatement(radius);
                break;
            case 8:
                statement = octahedronStatement(radius);
                break;
            case 10:
                statement = pentagonalTrapezohedronStatement(radius);
                break;
            case 12:
                statement = dodecahedronStatement(radius);
                break;
            case 20:
                statement = icosahedronStatement(radius);
                break;
        }
        if (statement && statement.length > 0){
            board().addStatement(
                statement, 
                color
            )
        }
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
    export function moveAsync(mm: number, direction: Axis, body: RefAction): Promise<void> {

        switch (direction) {
            case Axis.X:
            default:
                return _makeBlock(`translate([${mm}, 0, 0], <CHILDREN> )`, body)
            case Axis.Y:
                return _makeBlock(`translate([0, ${mm}, 0], <CHILDREN> )`, body)
            case Axis.Z:
                return _makeBlock(`translate([0, 0, ${mm}], <CHILDREN> )`, body)
        }


    }



    const SNAP_TO_SIDE_SCRIPT = `
// thanks to jscad-util for snapToSide function
function snapToSide(moveobj, withobj, axis, orientation, delta) {
    var translation = calcSnap(moveobj, withobj, axis, orientation, delta);
    const result = moveobj.translate(translation);
    return result
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
            "10": "outside-",
            "11": "inside+",
            "00": "inside-",
            "-11": "center+",
            "-10": "center-"
        };
        error("calcSnap: invalid side: " + orientation + " should be " + fix["" + orientation + delta]);
    }
    var m = moveobj.getBounds();
    var w = withobj.getBounds();
  
    console.time("centroid")
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

    `
    const AXIS_APPLY_SCRIPT = `
    
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
    //% group="Layout"
    /**
     * move shapes up the z axis
     * @param direction the direction to stack
     * @param axis the axis to stack in
     * @param body the shapes to move up
     */
    export function stackAsync(direction: StackDirection, axis: Axis, body: RefAction): Promise<void> {

        board().requireImport('SNAP_TO_SIDE_SCRIPT', SNAP_TO_SIDE_SCRIPT)
        board().requireImport('AXIS_APPLY_SCRIPT', AXIS_APPLY_SCRIPT)
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


    function _styleEdgeDirectionToString(direction: StyleEdgeDirection) {
        switch (direction) {
            case StyleEdgeDirection.Top:
                return "+"
            case StyleEdgeDirection.Bottom:
                return "-"

        }
        return "+"
    }


    const LAYOUT_SCRIPT = `
// thanks to jscad-utils for this script



var LayoutUtils = {

    scaleSize: function(size, value) {
        if (value == 0) return 1;
        return 1 + 100 / (size / value) / 100;
    },

    enlarge: function(object, x, y, z) {
        var a;
        if (Array.isArray(x)) {
            a = x;
        } else {
            a = [ x, y || x, z || x ];
        }
        var objectSize = LayoutUtils.getObjectSize(object);
        var objectCentroid = LayoutUtils.centroid(object, objectSize);
        var idx = 0;
        var t = LayoutUtils.mapObjectKeys(objectSize, function(i) {
            return LayoutUtils.scaleSize(i, a[idx++]);
        });
        var new_object = scale(t, object)
        var new_centroid = LayoutUtils.centroid(new_object);
        var delta = new_centroid.minus(objectCentroid).times(-1);
        return new_object.translate(delta);
    },
    hollow: function (object, thickness, onModifyInternalShape) {
        var wallThickness = thickness || 2;
        var size = -wallThickness * 2;

        var internalShape = LayoutUtils.enlarge(object, [ size, size, size ]);
        if (onModifyInternalShape) {
            internalShape = onModifyInternalShape(internalShape)
        }
       

        var box = object.subtract(internalShape);
        return box;
    },

    mapObjectKeys: function(o, f) {
        return Object.keys(o).map(function (key) {
            return f(o[key], key, o);
        });
    },
    arrayRange: function(a, b) {
        var result = [];
        for (var i = a; i < b; i++) {
            result.push(i);
        }
        return result;
    },

    getObjectSize: function(o) {
        var bbox = o.getBounds ? o.getBounds() : o;
        var boxSize = bbox[1].minus(bbox[0]);
        return boxSize;
    },
    centroid: function(o, objectSize) {
      
        try {
            var bounds = o.getBounds();
            objectSize = objectSize || LayoutUtils.getObjectSize(bounds);
            return bounds[0].plus(objectSize.dividedBy(2));
        } catch (err) {
            error("centroid error o:".concat(jscadToString(o), " objectSize: ").concat(objectSize), undefined, err);
        }
    },

    normalVector: function(axis) {
        var axisInfo = {
            z: {
                orthoNormalCartesian: ["X", "Y"],
                normalVector: CSG.Vector3D.Create(0, 1, 0)
            },
            x: {
                orthoNormalCartesian: ["Y", "Z"],
                normalVector: CSG.Vector3D.Create(0, 0, 1)
            },
            y: {
                orthoNormalCartesian: ["X", "Z"],
                normalVector: CSG.Vector3D.Create(0, 0, 1)
            }
        };
        if (!axisInfo[axis]) error("normalVector: invalid axis " + axis);
        return axisInfo[axis];
    },
    axisApply: function(axes, valfun, a) {
        var retval = a || [0, 0, 0];
        var lookup = {
            x: 0,
            y: 1,
            z: 2
        };
        axes.split("").forEach(function (axis) {
            retval[lookup[axis]] = valfun(lookup[axis], axis);
        });
        return retval;
    },
    sliceParams: function(orientation, radius, bounds) {
        var axis = orientation[0];
        var direction = orientation[1];
        var dirInfo = {
            "dir+": {
                sizeIdx: 1,
                sizeDir: -1,
                moveDir: -1,
                positive: true
            },
            "dir-": {
                sizeIdx: 0,
                sizeDir: 1,
                moveDir: 0,
                positive: false
            }
        };
        var info = dirInfo["dir" + direction];
        return Object.assign({
            axis,
            cutDelta: LayoutUtils.axisApply(axis, function (i, a) {
                return bounds[info.sizeIdx][a] + Math.abs(radius) * info.sizeDir;
            }),
            moveDelta: LayoutUtils.axisApply(axis, function (i, a) {
                return bounds[info.sizeIdx][a] + Math.abs(radius) * info.moveDir;
            })
        }, info, LayoutUtils.normalVector(axis));
    },
    filletObjects(objects, radius, orientation, options) {
        let results = []
        for (let i = 0; i < objects.length; i++) {
            results.push(LayoutUtils.fillet(objects[i], radius, orientation, options))
        }
        return union(results);
    },
    
    fillet: function(object, rad, orient, opts) {

        var radius = rad || 4
        var options = opts || {}
        var orientation = orient || "z+"

        return LayoutUtils.reShape(object, radius,  orientation, options, function (first, last, slice) {
            var v1 = new CSG.Vector3D(first);
            var v2 = new CSG.Vector3D(last);
            var res = options.resolution || CSG.defaultResolution3D;
            var slices = LayoutUtils.arrayRange(0, res).map(function (i) {
                var p = i > 0 ? i / (res - 1) : 0;
                var v = v1.lerp(v2, p);
                var size = -radius * 2 - Math.cos(Math.asin(p)) * (-radius * 2);
                return {
                    poly: LayoutUtils.enlarge(slice, [size, size]),
                    offset: v
                };
            });
            return slices;
        });
    },
    chamferObjects(objects, radius, orientation, options) {
        let results = []
        for (let i = 0; i < objects.length; i++) {
            results.push(LayoutUtils.chamfer(objects[i], radius, orientation, options))
        }
        return union(results);
    },
    chamfer: function(object, rad, orient, opts) {
        var radius = rad || 2
        var options = opts || {}
        var orientation = orient || "z+"
        
            return LayoutUtils.reShape(object, radius, orientation, options, function(first, last, slice) {
                return [ {
                    poly: slice,
                    offset: new CSG.Vector3D(first)
                }, {
                    poly: LayoutUtils.enlarge(slice, [ -radius * 2, -radius * 2 ]),
                    offset: new CSG.Vector3D(last)
                } ];
            });
     },

    first: function first(a) {
        return a ? a[0] : undefined;
    },
    last: function last(a) {
        return a && a.length > 0 ? a[a.length - 1] : undefined;
    },
    slices2poly: function(slices, options, axis) {
        var twistangle = options && parseFloat(options.twistangle) || 0;
        var twiststeps = options && parseInt(options.twiststeps) || CSG.defaultResolution3D;
        if (twistangle == 0 || twiststeps < 1) {
            twiststeps = 1;
        }
        var normalVector = options.si.normalVector;
        var polygons = [];
        var first$1 = LayoutUtils.first(slices)
        var last$1 = LayoutUtils.last(slices);

        var up = first$1.offset[axis] > last$1.offset[axis];
        polygons = polygons.concat(first$1.poly._toPlanePolygons({
            translation: first$1.offset,
            normalVector,
            flipped: !up
        }));
        var rotateAxis = "rotate" + axis.toUpperCase();
        polygons = polygons.concat(last$1.poly._toPlanePolygons({
            translation: last$1.offset,
            normalVector: normalVector[rotateAxis](twistangle),
            flipped: up
        }));
        var rotate = twistangle === 0 ? function rotateZero(v) {
            return v;
        } : function rotate(v, angle, percent) {
            return v[rotateAxis](angle * percent);
        };
        var connectorAxis = last$1.offset.minus(first$1.offset).abs();
        slices.forEach(function (slice, idx) {
            if (idx < slices.length - 1) {
                var nextidx = idx + 1;
                var top = !up ? slices[nextidx] : slice;
                var bottom = up ? slices[nextidx] : slice;
                var c1 = new CSG.Connector(bottom.offset, connectorAxis, rotate(normalVector, twistangle, idx / slices.length));
                var c2 = new CSG.Connector(top.offset, connectorAxis, rotate(normalVector, twistangle, nextidx / slices.length));
                polygons = polygons.concat(bottom.poly._toWallPolygons({
                    cag: top.poly,
                    toConnector1: c1,
                    toConnector2: c2
                }));
            }
        });
        return CSG.fromPolygons(polygons);
    },

    reShape: function(object, radius, orientation, options, slicer) {
       
        options = options || {};
        var b = object.getBounds();
        var ar = Math.abs(radius);
        var si = LayoutUtils.sliceParams(orientation, radius, b);
        if (si.axis !== "z") throw new Error('reShape error: CAG._toPlanePolytons only uses the "z" axis.  You must use the "z" axis for now.');
        var cutplane = CSG.OrthoNormalBasis.GetCartesian(si.orthoNormalCartesian[0], si.orthoNormalCartesian[1]).translate(si.cutDelta);
        var slice = object.sectionCut(cutplane);
        var first = LayoutUtils.axisApply(si.axis, function () {
            return si.positive ? 0 : ar;
        });
        var last = LayoutUtils.axisApply(si.axis, function () {
            return si.positive ? ar : 0;
        });
        var plane = si.positive ? cutplane.plane : cutplane.plane.flipped();
        var slices = slicer(first, last, slice);
        var delta = LayoutUtils.slices2poly(slices, Object.assign(options, {
            si
        }), si.axis);
        var remainder = object.cutByPlane(plane);
      
      return union([remainder, delta.translate(si.moveDelta)]);
    }
    
}



`
    const SLICE_PARAMS_SCRIPT = `
function normalVector(axis) {
    var axisInfo = {
        z: {
            orthoNormalCartesian: [ "X", "Y" ],
            normalVector: CSG.Vector3D.Create(0, 1, 0)
        },
        x: {
            orthoNormalCartesian: [ "Y", "Z" ],
            normalVector: CSG.Vector3D.Create(0, 0, 1)
        },
        y: {
            orthoNormalCartesian: [ "X", "Z" ],
            normalVector: CSG.Vector3D.Create(0, 0, 1)
        }
    };
    if (!axisInfo[axis]) error("normalVector: invalid axis " + axis);
    return axisInfo[axis];
}
function sliceParams(orientation, radius, bounds) {
    var axis = orientation[0];
    var direction = orientation[1];
    var dirInfo = {
        "dir+": {
            sizeIdx: 1,
            sizeDir: -1,
            moveDir: -1,
            positive: true
        },
        "dir-": {
            sizeIdx: 0,
            sizeDir: 1,
            moveDir: 0,
            positive: false
        }
    };
    var info = dirInfo["dir" + direction];
    return Object.assign({
        axis,
        cutDelta: axisApply(axis, function(i, a) {
            return bounds[info.sizeIdx][a] + Math.abs(radius) * info.sizeDir;
        }),
        moveDelta: axisApply(axis, function(i, a) {
            return bounds[info.sizeIdx][a] + Math.abs(radius) * info.moveDir;
        })
    }, info, normalVector(axis));
}`





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
    export function styleEdgesAsync(edgeStyle: EdgeStyle, direction: StyleEdgeDirection, radius: number, body: RefAction): Promise<void> {



        switch (edgeStyle) {
            case EdgeStyle.Chamfer:
                return _chamferEdges(direction, radius, body)
            case EdgeStyle.ConcaveChamfer:
                return _chamferEdges(direction, -radius, body)

            case EdgeStyle.ConcaveFillet:
                return _filletEdges(direction, -radius, body)
            case EdgeStyle.Fillet:
            default:
                return _filletEdges(direction, radius, body)


        }

    }


    function _chamferEdges(direction: StyleEdgeDirection, radius: number, body: RefAction): Promise<void> {
        board().requireImport('LAYOUT_SCRIPT', LAYOUT_SCRIPT)

        if (direction === StyleEdgeDirection.Both) {

            return _makeBlock(`LayoutUtils.chamferObjects( [LayoutUtils.chamferObjects( [<CHILDREN>], ${radius}, "z+" )], ${radius}, "z-" )`, body);

        }
        else {
            const directionStr = _styleEdgeDirectionToString(direction)
            return _makeBlock(`LayoutUtils.chamferObjects( [<CHILDREN>], ${radius}, "z${directionStr}" )`, body);
        }
    }
    function _filletEdges(direction: StyleEdgeDirection, radius: number, body: RefAction): Promise<void> {

        board().requireImport('LAYOUT_SCRIPT', LAYOUT_SCRIPT)
        if (direction === StyleEdgeDirection.Both) {
            return _makeBlock(`LayoutUtils.filletObjects( [LayoutUtils.filletObjects( [<CHILDREN>], ${radius}, "z+" )], ${radius}, "z-" )`, body);
        }
        else {
            const directionStr = _styleEdgeDirectionToString(direction)
            return _makeBlock(`LayoutUtils.filletObjects( [<CHILDREN>], ${radius}, "z${directionStr}" )`, body);
        }


    }

    //% blockId=color_block block="color $color" 
    //% topblock=false
    //% handlerStatement=true
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    //% group="Edges"
    export function colorAsync(color: number, body: RefAction): Promise<void> {

        let statementCode = `union([<CHILDREN>])`
        if (color !== undefined && color !== 0x4ebed7) {
            const red = (color & 0xFF0000) >> 16;
            const green = (color & 0x00FF00) >> 8;
            const blue = (color & 0x0000FF);

            statementCode = `color([${red / 255}, ${green / 255}, ${blue / 255}], ${statementCode})`
        }
        return _makeBlock(statementCode, body);




    }

    //% blockId=makehollow block="hollow shapes: $wallThickness mm walls | with $insideRound mm radius | cut through: $cutThrough" 
    //% topblock=false
    //% handlerStatement=true
    //% cutThrough.defl=true
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
    export function hollowShapesAsync(wallThickness: number, insideRound: number, cutThrough: boolean, body: RefAction): Promise<void> {


        board().requireImport('LAYOUT_SCRIPT', LAYOUT_SCRIPT)

        if (insideRound) {
            return _makeBlock(`
            LayoutUtils.hollow(union([<CHILDREN>]), ${wallThickness},  function(interiorBox) {
                var roundedBottom = LayoutUtils.fillet(interiorBox, ${insideRound}, "z-")
                return LayoutUtils.fillet(roundedBottom, ${insideRound}, "z+")
                        
            }, ${cutThrough} )`, body);

        }
        else {
            return _makeBlock(`LayoutUtils.hollow(union([<CHILDREN>]), ${wallThickness})`, body);

        }


    }


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
    export function translateShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        return _makeBlock(`translate([${x}, ${y}, ${z}], <CHILDREN> )`, body);


    }
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
    export function scaleShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {

        return _makeBlock(`scale([${x}, ${y}, ${z}], <CHILDREN> )`, body);


    }
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
    export function enlargeShapesAsync(x: number, y: number, z: number, body: RefAction): Promise<void> {
        board().requireImport('LAYOUT_SCRIPT', LAYOUT_SCRIPT)

        return _makeBlock(`LayoutUtils.enlarge( union(<CHILDREN>), [${x}, ${y}, ${z}] )`, body);


    }

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
    export function turnAsync(angle: number, axis: RotateAxis, body: RefAction): Promise<void> {

        switch (axis) {
            case RotateAxis.X:
            default:
                return _makeBlock(`rotate([${angle}, 0, 0], <CHILDREN> )`, body)
            case RotateAxis.Y:
                return _makeBlock(`rotate([0, ${angle}, 0], <CHILDREN> )`, body)
            case RotateAxis.Z:
                return _makeBlock(`rotate([0, 0, ${angle}], <CHILDREN> )`, body)
        }
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
    export function rotateExtrudeAsync(startAngle: number, stopAngle: number, faces: number, body: RefAction): Promise<void> {
        return _makeBlock(`rotate_extrude({fn: ${faces}, startAngle: ${startAngle}, angle: ${stopAngle}},  union([<CHILDREN>]) )`, body);

    }

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
    export function linearExtrudeAsync(height: number, twist: number, slices: number, body: RefAction): Promise<void> {
        // union in 2D is hull. /
        return _makeBlock(`linear_extrude({slices: ${slices}, height: ${height}, twist: ${twist}},  union([<CHILDREN>]) )`, body);

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