/// <reference path="./threads.ts"/>
/**
 * 3D Shapes to create on the surface
 * http://makecode.buildbee.com/docs/shapes.html
 */


// for more info on defining blocks see https://makecode.com/defining-blocks
namespace pxsim.fasteners {

    // -------------------------------------------- UTIL FUNCTIONS --------------------------------------------
    function getThreadForm(thread:string){

        let threadForm: any = THREAD_TABLE
        let depth = 0
        let key = ""
        let rest = thread
        while (true){
            if (depth > 3) throw Error("Thread parse recursion depth exceeded")
            depth ++

            // Some thread names have decimal points. Check to see if we hit them
            if (threadForm[rest]){
                threadForm = threadForm[rest]
            }else {
                key = rest.split(".")[0]
                rest = rest.split(".").slice(1).join(".")
                threadForm = threadForm[key]
            }

            if (threadForm.sortSize) return threadForm
        }
    }


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
    // -------------------------------------------- JSCAD DEFNS --------------------------------------------
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

    const MAKE_THREAD = `
        function makeThread(profile, pitch, rRotation, turns, higbee_arc = 20, fn = 120) {
            const points = profile.map(profilePoint2d => {
                return [profilePoint2d[0], profilePoint2d[1], 0]
            })
            const threadProfilePolygon = CSG.Polygon.createFromPoints(points)
            const r = rRotation
            const steps = Math.floor(turns * fn)
        
        
            // radial scaling function for tapered lead-in and lead-out
            function lilo_taper(x, N, tapered_fraction) {
                return min(min(1, (1.0 / tapered_fraction) * (x / N)), (1 / tapered_fraction) * (1 - x / N))
            }
        
            return threadProfilePolygon.solidFromSlices({
                numslices: steps,
                callback: function (t, slice) {
                    return rotate([0, 0, 360 * slice / fn - 90],
                        translate([0, r, pitch * slice / fn],
                            rotate([90, 0, 0],
                                rotate([0, 90, 0],
                                    scale([0.01 + 0.99 *
                                            lilo_taper(slice / turns, steps / turns, (higbee_arc / 360) / turns), 1, 1
                                        ],
                                        this)))))
                }
            });
        }
    `

    const MAKE_THREADED_HOLE_CHAMFER = `
        function makeThreadHoleChamfer(profile, rRotation, fn = 120, top=false) {
            const points = profile.map(profilePoint2d => {
                return [profilePoint2d[0], profilePoint2d[1], 0]
            })
            const threadProfilePolygon = CSG.Polygon.createFromPoints(points)
            const r = rRotation
            const steps = Math.floor(fn)+1

            return threadProfilePolygon.solidFromSlices({
                numslices: steps,
                callback: function (t, slice) {
                    return rotate([0, 0, (360 * slice / fn - 90) + 3],  // The +3 just makes it so that vertexes dont line up with the threads
                        translate([0, r, 0],
                            rotate([90, 0, 0],
                                rotate([0, 90, 0], this))))
                }
            });
        }
    `

    const MAKE_THREADED_SHAFT = `
        function threadedShaft(profile, pitch, rRotation, dSupport, height, higbee_arc = 20, fn = 120) {
            const turns = height / pitch - 1;

            // Minimum pitch requirements
            if (height < pitch){
                return translate([0, 0, -pitch / 2],
                    cylinder({
                        h: height,
                        d: dSupport,
                        fn: fn
                    })); 
            }
            else {
                const thread = makeThread(profile, pitch, rRotation, turns, higbee_arc, fn);
                const shaft = translate([0, 0, -pitch / 2],
                    cylinder({
                        h: height,
                        d: dSupport,
                        fn: fn
                    }));
                return union(
                    thread,
                    shaft
                )
            }
        }
    `

    const MAKE_THREADED_HOLE = `
        function threadedHole(profile, pitch, rRotation, dSupport, height, fn = 120, children) {
            const turns = height / pitch;
            // Minimum pitch requirements
            let subtractionTool
            if (height < pitch){
                subtractionTool = translate([0, 0, -pitch / 2],
                        cylinder({
                            h: height,
                            d: dSupport,
                            fn: fn
                        }))
            }
            else {
                const profileHeightValues = profile.map(point => point[1])
                const halfProfileHeight = Math.sqrt((Math.max(...profileHeightValues) - Math.min(...profileHeightValues))**2)
                subtractionTool = union(
                    cylinder({
                        h: height,
                        d: dSupport,
                        fn: fn
                    }),
                    difference(
                        difference(
                            union(
                                union(
                                    makeThread(profile, pitch, rRotation, turns, 1, fn),
                                    makeThreadHoleChamfer(profile, rRotation, fn)
                                ),
                                translate(
                                    [0, 0, height],
                                    makeThreadHoleChamfer(profile, rRotation, fn, true)
                                )
                            ),
                            translate(
                                [-dSupport, -dSupport, height],
                                cube({ size:[ 2*dSupport, 2*dSupport, halfProfileHeight]})
                            )
                        ),
                        translate(
                            [-dSupport, -dSupport, -halfProfileHeight],
                            cube({ size:[ 2*dSupport, 2*dSupport, halfProfileHeight]})
                        )
                    )
                )
            }
            const childZMax = Math.max(...children.map(child => child.getBounds()[1]._z))

            return difference(
                union(children),
                translate(
                    [0, 0, childZMax - height],
                    subtractionTool
                )
            )
        }
    `

    // -------------------------------------------- SIZES --------------------------------------------

    //% blockId=bottleSize block="Soda Bottle size" 
    //% group="Sizes"
    /**
     * Specify a size for a thread
     */
    export function bottleSize(){
        return `bottle`
    }
    
    //% blockId=metricCoarseSizes block="Metric coarse | $size" 
    //% shim=TD_ID
    //% size.defl="M6x0.7"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function metricCoarseSizePicker(size: MetricCoarseSizes):string{
        const sizeStr = metricCoarseLookup[size]
        return `metric.coarse.${sizeStr}`
    }

    //% blockId=metricFineSizes block="Metric fine | $size" 
    //% shim=TD_ID
    //% size.defl="M6x0.8"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function metricFineSizePicker(size: MetricFineSizes){
        return `metric.fine.${size}`
    }

    //% blockId=unifiedCoarseSizes block="Unified coarse | $size" 
    //% shim=TD_ID
    //% size.defl="UNC 1/2"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function unifiedCoarseSizePicker(size: UnifiedCoarseSizes){
        return `unified.coarse.${size}`
    }

    //% blockId=unifiedFineSizes block="Unified fine | $size" 
    //% shim=TD_ID
    //% size.defl="UNF 1/2"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function unifiedFineSizePicker(size: UnifiedFineSizes){
        return `unified.fine.${size}`
    }

    //% blockId=unifiedExtraFineSizes block="Unified extra fine | $size" 
    //% shim=TD_ID
    //% size.defl="UNEF 1/2"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function unifiedExtraFineSizePicker(size: UnifiedExtraFineSizes){
        return `unified.extra fine.${size}`
    }

    //% blockId=unifiedNumberedSizes block="Unified numbered | $size" 
    //% shim=TD_ID
    //% size.defl="32 UN"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function unifiedNumberedSizePicker(size: UnifiedNumberedSizes){
        return `unified.numbered.${size}`
    }

    //% blockId=britishSizes block="British standard | $size" 
    //% shim=TD_ID
    //% size.defl="G1"
    //% group="Sizes"
    /**
     * Specify a size for a thread
     * @param size the direction to stack
     */
    export function britishSizePicker(size: BritishSizes){
        return `british.${size}`
    }

    // -------------------------------------------- THREADS --------------------------------------------

    //% blockId=threadedShaft block="threaded shaft - $thread|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/threadedShaft
    //% thread.defl="bottle"
    //% height.defl=20
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * Make a cylinder with an external thread
     * @param thread the type of thread you want
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function threadedShaft(thread:string, height:number=20, lead?:number, resolution?:number ){
        const threadForm = getThreadForm(thread)
        const { sectionProfile, pitch, rRotation, dSupport } = threadForm["ext"]
        const stringifiedProfile = JSON.stringify(sectionProfile)
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().requireImport('MAKE_THREAD', MAKE_THREAD)
        board().requireImport('MAKE_THREADED_SHAFT', MAKE_THREADED_SHAFT)
        board().addStatement(`centerChildren(threadedShaft(${stringifiedProfile}, ${pitch}, ${rRotation}, ${dSupport}, ${height}, ${lead || 20}, ${resolution || 120}))`)
    }

    //% blockId=threadedHole block="threaded hole - $thread|height $height|resolution $resolution" 
    //% topblock=false
    //% handlerStatement=true
    //% help=fasteners/threadedHole
    //% thread.defl="bottle"
    //% height.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * Make a cylinder with an external thread
     * @param thread the type of thread you want
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     * @param body the shapes to put a hole in
     */
    export function threadedHoleAsync(thread:string, height:number=20, resolution:number, body: RefAction ): Promise<void>{
        const threadForm = getThreadForm(thread)
        const { sectionProfile, pitch, rRotation, dSupport } = threadForm["ext"]
        const stringifiedProfile = JSON.stringify(sectionProfile)
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().requireImport('MAKE_THREAD', MAKE_THREAD)
        board().requireImport('MAKE_THREADED_HOLE', MAKE_THREADED_HOLE)
        board().requireImport('MAKE_THREADED_HOLE_CHAMFER', MAKE_THREADED_HOLE_CHAMFER)
        return _makeBlock(`threadedHole(${stringifiedProfile}, ${pitch}, ${rRotation}, ${dSupport}, ${height}, ${resolution || 120},  [<CHILDREN>])`, body)
    }

}