/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="./solids.ts"/>

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
    export function cube(width: number = 1, depth: number = 1, height: number = 1, color?: number) {
        const statement = `cube({size: [${width}, ${depth}, ${height}], center: [true, true, true]})`
        board().addStatement(statement, color)


    }


    //% block="sphere - radius $radius || color $color|type $type|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=60
    //% faces.min=4
    //% faces.max=1000
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
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
    export function sphere(radius: number, color?: number, type?: SphereType, faces?: number) {
        const fn = (faces) ? Math.max(faces, 4) : 150
        const sphereType = type === SphereType.geodesic ? "geodesic" : "icosahedron";

        board().addStatement(`sphere({r: ${radius}, center: [true, true, true],  fn: ${fn}, type: "${sphereType}"})`, color);

    }


    //% block="cylinder - radius $radius|height $height||color $color|faces $faces|radius2 $radius2"
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
     * @param faces The number of faces the cylinder has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     * @param radius2 If specified, make the bottom of the cylinder have a different size
     */
    export function cylinder(radius: number, height: number, color?: number, faces?: number, radius2?: number,) {
        const fn = (faces) ? Math.max(faces, 4) : 150
        board().addStatement(`cylinder({r1: ${radius}, 
                                        r2: ${radius2 === undefined ? radius : radius2}, 
                                        fn: ${fn},
                                        center: [true, true, true],
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
                                    center: [true, true, true],
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
     * @param faces The number of faces the cone has.  The more it has, the smoother it is, but longer it takes to render.  So choose wisely!
     */
    export function cone(radius: number, height: number, color?: number, faces?: number) {
        board().addStatement(`cylinder({
                r2: 0, 
                r1: ${radius}, 
                h: ${height},
                fn: ${faces === undefined ? 100 : faces},
                center: [true, true, true]}
            )`, color);
    }


    const CENTER_CHILDREN = `
    function centerChildren(children) {
        const joined = union(children)
        const bounds = joined.getBounds()
        const min = bounds[0]
        const max = bounds[1]
        const cx = (min._x + max._x) / 2
        const cy = (min._y + max._y) / 2
        const cz = (min._z + max._z) / 2

        return translate([-cx, -cy, -cz], joined)
    }
    `

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

        return o
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
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().requireImport('WRITE_TEXT', WRITE_TEXT)
        // text returns a list of shapes we need to expand [... list of extruded polylines]
        board().addStatement(`
                        centerChildren(
                            writeText({
                                text: "${text}", 
                                lineWidth:${lineWidth === undefined ? 4 : lineWidth},
                                fontSize: ${fontSize === undefined ? 21 : fontSize},
                                lineSpacing: ${lineSpacing === undefined ? 1.4 : lineSpacing},
                                letterSpacing: ${letterSpacing === undefined ? 1 : letterSpacing},
                                extrudeHeight: ${height === undefined ? 1 : height}
                            })
                        )`, color);

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
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().addStatement(`
        centerChildren(
            triangularPrism({
                mode: "equilateral", 
                width: ${width},
                height: ${height},
                depth: ${depth}
            })
        )`, color);
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
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().addStatement(`centerChildren(
            triangularPrism({
                mode: "right", 
                width: ${width},
                height: ${height},
                depth: ${depth},
            })
        )`, color);
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
        cylinder(radius, height, color, sides, radius);
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
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().addStatement(`centerChildren(circle({r: ${radius}}))`);
    }

    //% blockId=add_rect block="rect (2d) - width $width|height $height"
    //% inlineInputMode=inline
    //% width.defl=10
    //% height.defl=20
    //% weight=50
    //% advanced=true
    //% group="2D Shapes"
    export function rect(width: number, height: number) {
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().addStatement(`centerChildren(square({size: [${width}, ${height}]}))`);
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
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().addStatement(`centerChildren(regularPolygon({
                sides: ${sides}, 
                radius: ${Math.max(radius, .001)}, // avoid degenerate olygon
            }))`);
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
