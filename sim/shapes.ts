/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="./solids.ts"/>

/**
 * 3D Shapes to create on the surface
 * http://makecode.buildbee.com/docs/shapes.html
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

    
    //% blockId=chooseColor block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    export function chooseColor(value: number): number {
        // For some reason I can't hide this block from writing to javascript.
        // It should have been a shadow block.
        // So I've made it part of the api.  :/
        return value;
    }

    //% blockId=colorNumberPicker2 block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    export function __colorNumberPicker2(value: number): number {
        // deprecated keep around for old serialization
        return value
    }
   

    //% block="cube - width $width|depth $depth|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% help=shapes/cube
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=95
    //% group="3D Shapes"
    //% expandableArgumentMode="enabled"
    /**
    * The cube, (or more technically a rectangular prism) allows you to make box like shapes. 
    * @param width The width of the cube
    * @param depth The depth of the cube
    * @param height The height of the cube
    * @param color If specified, what color to make the cube.  In hex (0xab1234)
    */
    export function cube(width: number = 1, depth: number = 1, height: number = 1, color?: number) {
        const statement = `cube({size: [${width}, ${depth}, ${height}], center: [true, true, true]})`
        board().addStatement(statement, color)


    }


    //% block="sphere - radius $radius || color $color=chooseColor|type $type|faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=20
    //% faces.defl=60
    //% faces.min=4
    //% faces.max=1000
    //% help=shapes/sphere
    //% type.defl=SphereType.geodesic
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
        const sphereType = (isNaN(type) || type === SphereType.geodesic) ? "geodesic" : "icosahedron";

        board().addStatement(`sphere({r: ${radius}, center: [true, true, true],  fn: ${fn}, type: "${sphereType}"})`, color);

    }


    //% block="cylinder - radius $radius|height $height||$color=chooseColor|faces $faces|radius2 $radius2"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=60
    //% help=shapes/cylinder
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
        const fn = (faces) ? Math.max(faces, 3) : 150
        board().addStatement(`cylinder({r1: ${radius}, 
                                        r2: ${radius2 === undefined ? radius : radius2}, 
                                        fn: ${fn},
                                        center: [true, true, true],
                                        h: ${height}})`, color);
    }

    //% block="donut - thickness $thickness|radius $radius||color $color=chooseColor|inner faces $innerFaces|outer faces $outerFaces|innerRotation $innerRotation"
    //% inlineInputMode=inline
    //% thickness.defl=4 thickness.min=1
    //% radius.defl=10
    //% innerFaces.defl=16
    //% outerFaces.defl=32
    //% innerRotation.defl=0
    //% help=shapes/donut
    //% weight=80
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add a donut (torus)
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
                                    fni: ${isNaN(innerFaces) ? 16 : innerFaces},
                                    fno: ${isNaN(outerFaces) ? 32 : outerFaces},
                                    roti: ${isNaN(innerRotation) ? 32 : innerRotation}, 
                                    center: [true, true, true],
                                })`, color)
    }

    //% block="tube - thickness $thickness|radius $radius|height $height||sides $sides | color $color=chooseColor"
    //% inlineInputMode=inline
    //% thickness.defl=1 thickness.min=1
    //% radius.defl=5
    //% height.defl=10
    //% sides.defl=60
    //% help=shapes/tube
    //% weight=81
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Add a tube with a flat top and bottom
     * For non-circular tubes, lower the sides.
     * e.g. Set the sides to 6 to get hexagonal tubes! 
     * @param thickness How thick to make the walls of the tube
     * @param radius The radius of the tube
     * @param height The height of the tube
     * @param color Color (in hex 0xab12345)
     * @param sides How many sides on the object
     */
    export function tube(thickness: number, radius: number, height: number, sides?: number, color?: number) {
        const outerTubeRadius = Math.max(0, radius)
        const innerTubeRadius = Math.max(0, radius - thickness)
        const tubeHeight = Math.max(0, height)
     
        if (innerTubeRadius <= 0) {
            // if there's nothing to cut out, how about don't try!
           board().addStatement(`cylinder({
                r1: ${outerTubeRadius}, 
                r2:${outerTubeRadius}, 
                fn: ${isNaN(sides) ? 60 : sides},
                center: [true, true, true],
                h: ${tubeHeight}})
                `, color)
        }
        else {
        board().addStatement( `difference( 
            cylinder({
                r1: ${outerTubeRadius}, 
                r2:${outerTubeRadius}, 
                fn: ${isNaN(sides) ? 60 : sides},
                center: [true, true, true],
                h: ${tubeHeight}}),
            cylinder({
                r1: ${innerTubeRadius}, 
                r2: ${innerTubeRadius}, 
                fn: ${isNaN(sides) ? 60 : sides},
                center: [true, true, true],
                h: ${tubeHeight}}) )`, color

        )
            }
    }


    //% block="cone - radius $radius|height $height|| color $color=chooseColor| faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=100
    //% weight=75
    //% help=shapes/cone
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
    /**
     * Make a cone like shape that is as tall as height.  The cone will be twice as wide as the radius. 
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

    const ARC = `
    function arc({radius, height, startAngle, endAngle, fn}) {
        var path = CSG.Path2D.arc({
            center: [0,0,0],
            radius: radius,
            startangle:startAngle,
            endangle:endAngle,
            resolution: fn || 32,
        });
        path = path.appendPoint([0,0])
                
        let shape = path.close().innerToCAG()
        const shape3d =  linear_extrude({ height: height }, shape);
        return shape3d.translate([0, 0, -height/2])
    }

    `
    //% block="arc - radius $radius|height $height|startAngle $startAngle|endAngle $endAngle|| color $color=chooseColor| faces $faces"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% height.defl=10
    //% faces.defl=60
    //% startAngle.defl=0
    //% endAngle.defl=30
    //% weight=60
    //% help=shapes/all
    //% group="3D Shapes - Round Shapes"
    //% expandableArgumentMode="enabled"
   /**
    * Make an arc (pie chart piece) - from an starting angle to end angle
    * @param radius The radius of the circle
    * @param height The thickness of your pie slice 
    * @param startAngle The starting angle (in degrees)
    * @param endAngle The end angle (in degrees)
    * @param color The color of the pie slice
    * @param faces The resolution of the pie slice.  The more faces it has, the slower it will draw. 
    */
    export function arc(radius: number, height: number, startAngle: number, endAngle: number,  color?: number, faces?: number) {
        board().requireImport('ARC', ARC)
        board().addStatement(`arc({
            startAngle: ${startAngle},
            endAngle: ${endAngle},
            radius: ${radius}, 
            height: ${height},
            fn: ${faces === undefined ? 32 : faces},
            })`, color);
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



    //% block="text - text $text | fontSize $fontSize | height $height ||color $color=chooseColor | line width $lineWidth |  letterSpacing $letterSpacing | lineSpacing $lineSpacing"
    //% inlineInputMode=inline
    //% lineWidth.defl=4
    //% fontSize.defl=21,
    //% lineSpacing.defl=1.4
    //% letterSpacing.defl=1
    //% text.defl="BuildBee"
    //% height.defl=4
    //% group="3D Shapes"
    //% help=shapes/text
    //% expandableArgumentMode="toggle"
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



    //% block="roof - width $width|depth $depth|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=93
    //% help=shapes/polygons
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



    //% block="ramp - width $width|depth $depth|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% width.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% weight=92
    //% help=shapes/ramp
    //% group="3D Shapes - Triangles/Polygons"
    //% expandableArgumentMode="enabled"
    /**
    * Add a triangular prism (ramp)
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


    //% block="polygon - sides $sides|radius $radius|height $height||color $color=chooseColor"
    //% inlineInputMode=inline
    //% radius.defl=10
    //% depth.defl=10
    //% height.defl=10
    //% sides.defl=6
    //% sides.min=3
    //% help=shapes/polygons
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

    
    //% blockId=polyhedra block="polyhedron type: $polyhedron=main_polyhedraPicker with radius: $radius mm ||color $color=chooseColor" 
    //% topblock=false
    //% handlerStatement=true
    //% radius.defl=5
    //% help=shapes/polyhedron
    //% group="More Shapes"
    //% advanced=false
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
