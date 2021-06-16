/// <reference path="./threads.ts"/>

/**
 * 3D Shapes to create on the surface
 * http://makecode.buildbee.com/docs/shapes.html
 */


// for more info on defining blocks see https://makecode.com/defining-blocks
namespace pxsim.fasteners {

    const MAKE_THREAD = `
    function makeThread(threadSpecs, turns, higbee_arc = 20, fn = 120) {
        const profile = threadSpecs.sectionProfile
        const rRotation = threadSpecs.rRotation
        const pitch = threadSpecs.pitch
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

    //% blockId=metricCoarseSizes block="Metric coarse|$size" 
    //% size.defl="test"
    //% group="Threads"
    /**
     * move shapes up the z axis
     * @param size the direction to stack
     */
    export function metricCoarseSizePicker(size: MetricCoarse){
        return 1
    }

}