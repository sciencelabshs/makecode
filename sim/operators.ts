/// <reference path="../libs/core/enums.d.ts"/>
/// <reference path="./solids.ts"/>

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

    const CENTER_SHAPE_AT = `
    function centerShapeAtLocation(shapes, targetLocation) {
        return shapes.map(shape => {
            const bounds = shape.getBounds()
            const min = bounds[0]
            const max = bounds[1]
            const cx = (min._x + max._x) / 2
            const cy = (min._y + max._y) / 2
            const cz = (min._z + max._z) / 2
            
            return shape.translate([
                targetLocation[0] - cx,
                targetLocation[1] - cy,
                targetLocation[2] - cz
            ], shape)
        })
    }

    `
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
    export function setPositionAsync(x: number, y:number, z:number, body: RefAction): Promise<void> {
        board().requireImport('CENTER_SHAPE_AT', CENTER_SHAPE_AT)
        return _makeBlock(`union(centerShapeAtLocation([<CHILDREN>], [${x}, ${y}, ${z}]))`, body);
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

    


    // recenter a group of shapes so that the lowest face aligns 
    // to the bed.  
    // If you work on this make sure you test all the starter 
    // projects and tutorials to make sure behaviour is conserved
    const PLACE_ON_GROUND = `
    
    function placeOnGround(shapes) {
        if (shapes.length > 0) {  
            let collectionMinZ = shapes[0].getBounds()[0]._z

            let translatedShapes = []

            for (var i = 0; i < shapes.length; i++) {
                collectionMinZ = Math.min(collectionMinZ,  shapes[i].getBounds()[0]._z)
            }
            for (var i = 0; i < shapes.length; i++) {
                var shape = shapes[i]
                var translatedShape = shape.translate([0, 0, -collectionMinZ], shape);
                translatedShapes.push(translatedShape)
                
            }
            return translatedShapes;
        }
        return []
    }
    `
    //% blockId=placeOnGround block="place on ground" 
    //% topblock=false
    //% handlerStatement=true
    //% group="Layout"
    /**
     * Take all shapes inside this block and move them as a group so that they are on the ground.
     * @param body the shapes to move
     */
    export function placeOnGroundAsync(body: RefAction): Promise<void> {
        board().requireImport('PLACE_ON_GROUND', PLACE_ON_GROUND)
        return _makeBlock(`...placeOnGround([<CHILDREN>])`, body);
    }


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
    export function hollowShapesAsync(wallThickness: number, insideRound: number, body: RefAction): Promise<void> {


        board().requireImport('LAYOUT_SCRIPT', LAYOUT_SCRIPT)

        if (insideRound) {
            return _makeBlock(`
            LayoutUtils.hollow(union([<CHILDREN>]), ${wallThickness},  function(interiorBox) {
                var roundedBottom = LayoutUtils.fillet(interiorBox, ${insideRound}, "z-")
                return LayoutUtils.fillet(roundedBottom, ${insideRound}, "z+")
                        
            })`, body);

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
    //% angle.min=0
    //% angle.max=360
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
        return _makeBlock("intersection( <CHILDREN> )", body);


    }


    //% blockId=rotateExtrude2dshapes block="rotate extrude 2d shape from angle $startAngle | to $stopAngle | faces $faces" 
    //% startAngle.defl=0
    //% startAngle.min=0
    //% startAngle.max=360
    //% stopAngle.min=0
    //% stopAngle.max=360
    //% stopAngle.defl=360
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
    //% twist.min=0
    //% twist.max=360
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