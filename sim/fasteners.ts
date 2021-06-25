/// <reference path="./threads.ts"/>
/**
 * 3D Shapes to create on the surface
 * http://makecode.buildbee.com/docs/shapes.html
 */


// for more info on defining blocks see https://makecode.com/defining-blocks
namespace pxsim.fasteners {

    // -------------------------------------------- UTIL FUNCTIONS --------------------------------------------
    function getThreadForm(fullyQualifiedThreadName:string){

        let threadForm: any = THREAD_TABLE
        let key = ""
    
        if (!/\./.test(fullyQualifiedThreadName)) {
            const result = threadForm[fullyQualifiedThreadName]
            if (result) {
                return result
            }
            throw new Error("Ooops! Could not find " + fullyQualifiedThreadName)
        }
        
        // pick through the "unified.fine.UNF 10x1"
        let categories = fullyQualifiedThreadName.split(/\./)
        const threadName = categories.pop()

        // walk through the nested JSON
        let nestedCategory = threadForm
        categories.forEach(cat => {
            nestedCategory= nestedCategory[cat]
            if (!nestedCategory) {
                throw new Error("Ooops! Could not find " +  nestedCategory + " while looking for " + fullyQualifiedThreadName)
            }
        });

        // should now have the thread profile
        const result =  nestedCategory[threadName]
        if (!result) {
            throw new Error("Ooops could not find " +  fullyQualifiedThreadName)
        }
        return result

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

    const GET_POINTS_FROM_PROFILE = `
    function getPointsFromProfile(profile) {
        const points = profile.map(function (profilePoint2d) {
            return [profilePoint2d[0], profilePoint2d[1], 0]
        })
        return points
    }
    `

    const MAKE_THREAD = `
        function makeThread(profile, pitch, rRotation, turns, higbee_arc = 20, fn = 120) {
            const points = getPointsFromProfile(profile)
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
    function getMaxZBounds(children) {
        let maxZ = -99999
        for (let i = 0; i < children.length; i++) {
            let child = children[i]
            const childZ = child.getBounds()[1]._z
            maxZ = Math.max(childZ, maxZ)
        }
        return maxZ
    }
     
      
      function makeTap(
          threadProfile,
          height,
          fn) {
        const { sectionProfile, pitch, rRotation, dSupport }  = threadProfile
   
        const turns = (height / pitch);
        const shaft = cylinder({
          h: height, /* RE 10: this shaft will be cut away, make sure it's tall enough*/
          d: dSupport,
          fn: fn
         
        }).translate([0,0,pitch/2])
       const cutShaft = difference(
             shaft,
             makeInternalThread(sectionProfile, pitch, rRotation, turns, 1, fn)
        )
        return cutShaft.translate([0,0, -(height + pitch/2) /2])

      }
      function threadedHole(
        threadProfile,
        height,
        fn = 120,
        children
      ) {
        const { sectionProfile, pitch, rRotation, dSupport }  = threadProfile

        const tap = makeTap( threadProfile,
          height,
          fn)
    
        
        const childZMax = getMaxZBounds(children);
        return difference(
          union(children),
          translate([0, 0, childZMax - height + height/2], tap)
        );
      }


    function makeInternalThread(sectionProfile, pitch, rRotation, turns, higbee_arc = 20, fn = 120) {
        const points = getPointsFromProfile(sectionProfile)
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


    //% blockId=softDrinkBottle block="soft drink bottle - $threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/softDrinkBottleThread
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% weight=80
    //% expandableArgumentMode="enabled"
    /**
     * Make a thread compatible with a PET soda bottle.  To cut threads into a shape, subtract the "thread cutting tap" from another shape.
     * @param threadType choose between the screw thread or the lid interior thread
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function softDrinkBottleThread(threadType: ThreadShapeType, height:number=20, lead?:number, resolution?:number ){
        const sizeName = 'bottle'
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(sizeName, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(sizeName, height, lead, resolution);
        }

    }

    
    //% blockId=britishStandardThread block="british standard - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/britishStandardThread
    //% thread.defl=BritishSizes.G_OneSixteenthInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=70
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * British Standard Pipe (BSP) is a set of technical standards for screw threads that has been adopted internationally for interconnecting and sealing pipes and fittings by mating an external (male) thread with an internal (female) thread. It has been adopted as standard in plumbing and pipe fitting, except in North America, where NPT and related threads are used. 
     * Source: Wikipedia
     * To cut threads into a shape, subtract the "thread cutting tap" from another shape.
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function britishStandardThread(threadType: ThreadShapeType, size: BritishSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = britishLookup[size]
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(`british.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`british.${sizeName}`, height, lead, resolution);
        }

    }


        
    //% blockId=metricCoarseThread block="metric coarse - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% thread.defl=MetricCoarseSizes.M8x1
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=60
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * Metric screws (ISO metric screw thread) the most commonly used type of general-purpose screw threads.
     * The "M" stnads for the outer diameter of the screw thread, in mm. 
     * 
     * Coarse threads have a larger pitch (distance between the thread ridges), and are preferred for most applications.
     * Use fine threads when you need to add strength or need to prevent loosening.
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function metricCoarseThread(threadType: ThreadShapeType, size: MetricCoarseSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = metricCoarseLookup[size]
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(`metric.coarse.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`metric.coarse.${sizeName}`, height, lead, resolution);
        }

    }

    //% blockId=metricFineThread block="metric fine - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/metricFineThread
    //% thread.defl=MetricFineSizes.M10x1
    //% height.defl=10
    //% lead.defl=20
    //% weight=50
    //% resolution.defl=120
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * Metric screws (ISO metric screw thread) the most commonly used type of general-purpose screw threads.
     * The "M" stnads for the outer diameter of the screw thread, in mm. 
     * 
     * Coarse threads have a larger pitch (distance between the thread ridges), and are preferred for most applications.
     * Use fine threads when you need to add strength or need to prevent loosening.
     * 
     * @param thread the type of thread you want
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function metricFineThread(threadType: ThreadShapeType, size: MetricFineSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = metricFineLookup[size]
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(`metric.fine.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`metric.fine.${sizeName}`, height, lead, resolution);
        }

    }

    //% blockId=unifiedCoarseThread block="unified coarse - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% thread.defl=UnifiedCoarseSizes.UNC_HalfInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=40
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function unifiedCoarseThread(threadType: ThreadShapeType, size: UnifiedCoarseSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = unifiedCoarseLookup[size]
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(`unified.coarse.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`unified.coarse.${sizeName}`, height, lead, resolution);
        }

    }

    //% blockId=unifiedFineThread block="unified fine - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% thread.defl=UnifiedFineSizes.UNF_HalfInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=30
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function unifiedFineThread(threadType: ThreadShapeType, size: UnifiedFineSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = unifiedFineLookup[size]
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(`unified.fine.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`unified.fine.${sizeName}`, height, lead, resolution);
        }

    }

    //% blockId=unifiedExtraFineThread block="unified extra fine - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% thread.defl=UnifiedExtraFineSizes.UNEF_OneQuarterInch
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=20
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function unifiedExtraFineThread(threadType: ThreadShapeType, size: UnifiedExtraFineSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = unifiedExtraFineLookup[size]
       

        if (threadType === ThreadShapeType.Thread) {
            return thread(`unified.extra fine.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`unified.extra fine.${sizeName}`, height, lead, resolution);
        }

    }


        
    //% blockId=unifiedNumberedThread block="unified numbered - $size|$threadType|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/bolt
    //% thread.defl=UnifiedNumberedSizes.UN_32
    //% height.defl=10
    //% lead.defl=20
    //% resolution.defl=120
    //% weight=10
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    /**
     * The Unified Thread Standard (UTS) defines a standard thread form and series—along with allowances, 
     * tolerances, and designations—for screw threads commonly used in the United States and Canada. 
     * It is the main standard for bolts, nuts, and a wide variety of other threaded fasteners used in these countries. It has the same 60° profile as the ISO metric screw thread, but the characteristic dimensions of each UTS thread (outer diameter and pitch) were chosen as an inch fraction rather than a millimeter value. 
     * The UTS is currently controlled by ASME/ANSI in the United States.
     * Source: Wikipedia
     * 
     * @param threadType  choose between the screw thread or the interior thread, which can be cut out of another shape
     * @param size the standard size from British Standard 
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function unifiedNumberedThread(threadType: ThreadShapeType, size: UnifiedNumberedSizes, height:number=20, lead?:number, resolution?:number ){
        const sizeName = unifiedNumberedLookup[size]
        
        if (threadType === ThreadShapeType.Thread) {
            return thread(`unified.numbered.${sizeName}`, height, lead, resolution);
        }
        if (threadType === ThreadShapeType.ThreadCuttingTap) {
            return threadCuttingTap(`unified.numbered.${sizeName}`, height, lead, resolution);
        }

    }




/*

    //% blockId=threadProfile block="thread profile | pitch $pitch | rRotation $rRotation | dSupport $dSupport | profile $sectionProfile" 
    //% shim=TD_ID
    //% group="Sizes"
    //% pitch.defl=2.7
    //% rRotation.defl=11.52381
    //% dSupport.defl=24.2
    //% sectionProfile.defl="[[0, -0.987894698],[0, 0.987894698],[2.17619, 0.604173686],[2.17619, -0.195826314]]"
    //% weight=10
   
    export function threadProfile(pitch: number, rRotation: number, dSupport: number, sectionProfile: string){
        const sectionProfileArr =  JSON.parse(sectionProfile);

        return JSON.stringify({
            pitch,
            rRotation,
            dSupport,
            sectionProfile: sectionProfileArr,
            isCustomProfile: true
        })
       
    }
*/


    //% blockId=thread block="thread - $thread|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/thread
    //% thread.defl="bottle"
    //% height.defl=20
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% expandableArgumentMode="enabled"
    //% weight=9
    /**
     * Make a cylinder with an external thread
     * @param thread the type of thread you want
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function thread(thread:string, height:number=20, lead?:number, resolution?:number ){
        
        
        let threadForm
        if (/isCustomProfile/.test(thread)) {
            // allow custom profiles to be passed in 
            threadForm = JSON.parse(thread)
        }
        else {
            threadForm = getThreadForm(thread)
        }
        
        const { sectionProfile, pitch, rRotation, dSupport } = threadForm["ext"]
        const stringifiedProfile = JSON.stringify(sectionProfile)
        board().requireImport('CENTER_CHILDREN', CENTER_CHILDREN)
        board().requireImport('GET_POINTS_FROM_PROFILE', GET_POINTS_FROM_PROFILE)
        board().requireImport('MAKE_THREAD', MAKE_THREAD)
        board().requireImport('MAKE_THREADED_SHAFT', MAKE_THREADED_SHAFT)
        board().addStatement(`centerChildren(threadedShaft(${stringifiedProfile}, ${pitch}, ${rRotation}, ${dSupport}, ${height}, ${lead || 20}, ${resolution || 120}))`)
    }





    //% blockId=threadCuttingTap block="thread cutting tap - $thread|height $height||lead $lead||resolution $resolution" 
    //% inlineInputMode=inline
    //% help=fasteners/threadCuttingTap
    //% thread.defl="bottle"
    //% height.defl=20
    //% lead.defl=20
    //% resolution.defl=120
    //% group="Threads"
    //% weight=8
    //% expandableArgumentMode="enabled"
    /**
     * Make a cylinder with an external thread
     * @param thread the type of thread you want
     * @param height the height of the cylinder
     * @param lead the number of segments the thread should lead in for
     * @param resolution the number of radial segments in the thread model
     */
    export function threadCuttingTap(thread:string, height:number=20, lead?:number, resolution?:number ){
        
        let threadForm
        if (/isCustomProfile/.test(thread)) {
            // allow custom profiles to be passed in 
            threadForm = JSON.parse(thread)
        }
        else {
            threadForm = getThreadForm(thread)
        }
        
        const threadProfile = JSON.stringify(threadForm["int"])
        board().requireImport('GET_POINTS_FROM_PROFILE', GET_POINTS_FROM_PROFILE)
        board().requireImport('MAKE_THREADED_HOLE', MAKE_THREADED_HOLE)
        board().addStatement(`makeTap(${threadProfile}, ${height}, ${resolution || 120})`)
    }


  
}

