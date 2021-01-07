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
    //% help=operators/move
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
    //% help=operators/set-position
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
    //% help=operators/stack-shapes
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
    //% help=operators/style-edges
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
    //% help=operators/place-on-ground
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
    //% help=operators/hollow-shapes
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
    //% help=operators/translate
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
    //% help=operators/scale
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
    //% help=operators/enlarge
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
    //% help=operators/turn
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
    //% help=operators/rotate
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
    //% help=operators/add-shapes
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
    //% help=operators/subtract-shapes
    //% group="Operations"
    /**
     * Cut shapes away from the first shape in the list.  Sometimes called "difference"
     * @param body List of shapes to subtract
     */
    export function subtractShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("difference( <CHILDREN> )", body); // add a JSCad statement to the interpreter.


    }

    //% blockId=intersect_shapes block="intersect shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/intersect-shapes
    //% group="Operations"
    /**
     * Intersect shapes - only leave the parts from all shapes that overlap.
     * @param body List of shapes to intersect
     */
    export function intersectShapesAsync(body: RefAction): Promise<void> {
        return _makeBlock("intersection( <CHILDREN> )", body);


    }


    //% blockId=wrap_shapes block="wrap shapes" 
    //% topblock=false
    //% handlerStatement=true
    //% help=operators/wrap-shapes
    //% group="Operations"
    /**
     * Wrap shapes - cover all the shapes, leaving only the outermost edges.  Sometimes called "quick hull" or "convex hull".
     * @param body List of shapes to intersect
     */
    export function wrapShapesAsync(body: RefAction): Promise<void> {
        board().requireImport('WRAPSHAPES_SCRIPT', WRAPSHAPES_SCRIPT)

        return _makeBlock("wrapShapes( [<CHILDREN>] )", body);


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
    //% help=operators/linear-extrude
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

    const WRAPSHAPES_SCRIPT = `
   
      
      function wrapShapes(csgs) {
        var uniqBy = function (a, key) {
          var seen = {};
          return a.filter(function (item) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
          });
        };
        var getPoints = function (csgs) {
          if (!Array.isArray(csgs)) {
            csgs = [csgs];
          }
      
          // make a list of all unique vertices
          var vertex_array = [];
      
          for (var i = 0; i < csgs.length; i++) {
            for (var j = 0; j < csgs[i].polygons.length; j++) {
              for (var k = 0; k < csgs[i].polygons[j].vertices.length; k++) {
                vertex_array.push([
                  csgs[i].polygons[j].vertices[k].pos._x,
                  csgs[i].polygons[j].vertices[k].pos._y,
                  csgs[i].polygons[j].vertices[k].pos._z,
                ]);
              }
            }
          }
          var result = uniqBy(vertex_array, JSON.stringify);
          // console.log("uniq points:", result);
          var points = [];
          for (var i = 0; i < result.length; i++) {
            points.push(
              CSG.Vector3D.Create(result[i][0], result[i][1], result[i][2])
            );
          }
          return points;
        };
      
        var getColor = function (csgs) {
          // get the color from the first polygon of the first shape.
          if (csgs[0].polygons[0].shared) return csgs[0].polygons[0].shared.color;
          else return null;
        };
      
      
        for(var i=0; i<csgs.length; i++) {              // check for mixing 2d and 3d
          var blah = csgs[i];
          if(!(blah instanceof CSG)) {
      //          console.log("found a CAG in the CSG hull");
            throw("ERROR: don't mix 2D and 3D shapes in hull");
            //return new CSG();
          }
        }
      
        var points = getPoints(csgs);
        // console.log("points for hull are:",points);
      
        var color = getColor(csgs);
      
        var qhull = new CSGx.quickHull3D(); 
      
        var faces = qhull.build(points);
      
        // console.log(faces);
      
        var polygons = [];
        for (var i = 0; i < faces.length; i++) {
          // each index is a face.  I need to get the points and make an array of them
          // to send to CSG.Polygon.createFromPoints
          var pp = [];
          for (var j = 0; j < faces[i].length; j++) {
            // each of these should be an integer index into the original points variable.
            pp.push(points[faces[i][j]]);
          }
          // console.log("points for polygons");
          // console.log(pp);
          // var thispoly = new CSG.Polygon.createFromPoints(pp).sC(color);
      
          var np = new CSG.Polygon.createFromPoints(pp);
   
          polygons.push(np);
        }
        // console.log("polygons");
        // console.log(polygons);
      
        // I don't think I need to retesselate or canonicalize this CSG.
      
        var hulledShape = CSG.fromPolygons(polygons);
        hulledShape.isCanonicalized = true;
        hulledShape.isRetesselated = true;
      
        return CSG.fromPolygons(polygons);
      }
      // end hull3d
      
      var CSGx = {};
      
      // HalfEdge class for 3D hull
      // represents the half edges that surround each face in a counter-clockwise direction
      CSGx.HalfEdge = function (v, f) {
        if (arguments.length == 2) {
          // the vertex associated with the head of this half-edge
          this.vertex = v;
      
          // triangular face associated with this half-edge
          this.face = f;
        } else {
          this.vertex = null;
          this.face = null;
        }
      
        // list pointers
        this.prev = null;
        this.next = null;
      
        // half-edge associated with the opposite triangle
        // adjacent to this edge
      
        this.opposite = null;
      };
      
      CSGx.HalfEdge.prototype = {
        // set the value of the next edge adjacent
        // counter clockwise to this one within the triangle
        // edge parameter is the next adjacent edge
        setNext: function (edge) {
          this.next = edge;
        },
      
        // get the value of the next adjacent edge
        // counter clockwise to this one in the triangle
        getNext: function () {
          return this.next;
        },
      
        //set the value of the previous edge (clockwise)
        setPrev: function (edge) {
          this.prev = edge;
        },
      
        // get the value of the previous edge (clockwise)
        getPrev: function () {
          return this.prev;
        },
      
        // returns the triangular face located to the left of this half-edge
        getFace: function () {
          return this.face;
        },
      
        // returns the half-edge opposite to this half-edge
        getOpposite: function () {
          return this.opposite;
        },
      
        // sets the half-edge opposite to this half-edge
        // edge param is a half-edge
        setOpposite: function (edge) {
          this.opposite = edge;
          edge.opposite = this;
        },
      
        // returns the head vertex associated with this half-edge
        head: function () {
          return this.vertex;
        },
      
        // returns the tail vertex associated with this half-edge
        tail: function () {
          return this.prev != null ? this.prev.vertex : null;
        },
      
        // returns the opposite triangular face associated with this half-edge
        oppositeFace: function () {
          return this.opposite != null ? this.opposite.face : null;
        },
      
        // produces a string of this half edge by the point index values
        // of its head and tail vertices
        getVertexString: function () {
          if (this.tail() != null)
            return "" + this.tail().index + "-" + this.head().index;
          else return "? -" + this.head().index;
        },
      
        // returns the length of this half-edge
        length: function () {
          if (this.tail() != null) return this.head().pnt.distanceTo(this.tail().pnt);
          else return -1;
        },
      
        // returns the length squared of this half-edge
        lengthSquared: function () {
          if (this.tail() != null)
            return this.head().pnt.distanceToSquared(this.tail().pnt);
          else return -1;
        },
      }; // end HalfEdge class
      
      // class Face
      // Basic triangular face to form the convex 3D hull
      // A face has a planar normal, a planar offset, and a
      // doubly linked list of three HalfEdges which surround
      // the face in a counter-clockwise direction.
      
      CSGx.Face = function () {
        this.normal = new CSG.Vector3D(0, 0, 0);
        this.centroid = new CSG.Vector3D(0, 0, 0);
        this.mark = 1; // VISIBLE
      
        // list of half-edges
        this.he0 = null;
      
        // area of the face
        this.area = -1;
      
        // planar offset
        this.planeOffset = -1;
      
        this.index = -1;
        this.numVerts = -1;
      
        // Faces are kept in a list
        this.next = null;
      
        // List of outside vertices?
        this.outside = null;
      };
      var Vector3DEx = function() {}
      Vector3DEx.prototype = {
          hTimes: function(v1,c) {
              v1._x *= c;
              v1._y *= c;
              v1._z *= c;
              return v1
          },
          hAdd: function(v1,v2) {
              v1._x += v2._x;
              v1._y += v2._y;
              v1._z += v2._z;
              return v1
          },
          setZero: function(v) {
              v._x = 0;
              v._y = 0;
              v._z = 0;
              return v
          }
      }
      // single instance VectorUtil
      var VectorUtil = new Vector3DEx()
      
      CSGx.Face.prototype = {
        computeCentroid: function (centroid) {
          // console.log("centroid was:",centroid);
          centroid = VectorUtil.setZero(centroid);
       
          var he = this.he0;
          // console.log("he",he);
          do {
            // console.log("now centroid is:",centroid);
            centroid = VectorUtil.hAdd(centroid, he.head().pnt);
            he = he.next;
          } while (he != this.he0);
      
         
          
          centroid = VectorUtil.hTimes(centroid, 1 / this.numVerts);
          // console.log("now centroid is (done):",centroid);
        },
      
        computeNormal: function (normal, minArea) {
          var he1 = this.he0.next;
          var he2 = he1.next;
      
          var p0 = this.he0.head().pnt;
          var p2 = he1.head().pnt;
      
          var d2x = p2._x - p0._x;
          var d2y = p2._y - p0._y;
          var d2z = p2._z - p0._z;
      
          this.normal._x = 0;
          this.normal._y = 0;
          this.normal._z = 0;
      
      
          this.numVerts = 2;
      
          while (he2 != this.he0) {
            var d1x = d2x;
            var d1y = d2y;
            var d1z = d2z;
      
            p2 = he2.head().pnt;
            d2x = p2._x - p0._x;
            d2y = p2._y - p0._y;
            d2z = p2._z - p0._z;
      
            this.normal._x += d1y * d2z - d1z * d2y;
            this.normal._y += d1z * d2x - d1x * d2z;
            this.normal._z += d1x * d2y - d1y * d2x;
      
            he1 = he2;
            he2 = he2.next;
            this.numVerts++;
          }
          this.area = this.normal.length();
          this.normal = VectorUtil.hTimes(this.normal, 1 / this.area);
      
          if (arguments.length == 2) {
            if (this.area < minArea) {
              // make the normal more robust by removing components parallel to the longest edge
              var hedgeMax = null;
              var lenSqrMax = 0;
              var hedge = this.he0;
      
              do {
                var lenSqr = hedge.lengthSquared();
                if (lenSqr > lenSqrMax) {
                  hedgeMax = hedge;
                  lenSqrMax = lenSqr;
                }
              } while (hedge != this.he0);
      
              p2 = hedgeMax.head().pnt;
              p1 = hedgeMax.tail().pnt;
              var lenMax = Math.sqrt(lenSqrMax);
              var ux = (p2._x - p1._x) / lenMax;
              var uy = (p2._y - p1._y) / lenMax;
              var uz = (p2._z - p1._z) / lenMax;
              var dot =
                this.normal._x * ux + this.normal._y * uy + this.normal._z * uz;
              this.normal._x -= dot * ux;
              this.normal._y -= dot * uy;
              this.normal._z -= dot * uz;
      
              this.normal.normalize();
            }
          }
        },
      
        computeNormalAndCentroid: function (minArea) {
          if (arguments.length == 1) this.computeNormal(this.normal, minArea);
          else this.computeNormal(this.normal);
          this.computeCentroid(this.centroid);
          this.planeOffset = this.normal.dot(this.centroid);
        },
      
        // createTriangle creates and returns a triangle
        // using vertices v0, v1, v2.  minArea is optional (set to 0 if not given).
        createTriangle: function (v0, v1, v2, minArea) {
          var face = new CSGx.Face();
          var he0 = new CSGx.HalfEdge(v0, face);
          var he1 = new CSGx.HalfEdge(v1, face);
          var he2 = new CSGx.HalfEdge(v2, face);
      
          he0.prev = he2;
          he0.next = he1;
          he1.prev = he0;
          he1.next = he2;
          he2.prev = he1;
          he2.next = he0;
      
          face.he0 = he0;
      
          // compute the normal and offset
      
          if (minArea) face.computeNormalAndCentroid(minArea);
          else face.computeNormalAndCentroid(0);
      
          return face;
        },
        // create a face from an array of vertices and an array of indices
        create: function (vtxArray, indices) {
          var face = new CSGx.Face();
          var hePrev = null;
          for (var i = 0; i < indices.length; i++) {
            var he = new CSGx.HalfEdge(vtxArray[indices[i]], face);
            if (hePrev != null) {
              he.setPrev(hePrev);
              hePrev.setNext(he);
            } else {
              face.he0 = he;
            }
            hePrev = he;
          }
          face.he0.setPrev(hePrev);
          hePrev.setNext(face.he0);
      
          // compute the normal and offset
          face.computeNormalAndCentroid();
          return face;
        },
      
        // get the i-th half-edge associated with the face.
        // takes an index i (should be between 0 and 2)
        // returns the half-edge.
        getEdge: function (i) {
          var he = this.he0;
          while (i > 0) {
            he = he.next;
            i--;
          }
          while (i < 0) {
            he = he.prev;
            i++;
          }
          return he;
        },
      
        getFirstEdge: function () {
          return this.he0;
        },
      
        // finds the half-edge within this face which has tail vt and head vh.
        // takes two vertices (vt, vh)
        // return the half-edge if found, or null.
        findEdge: function (vt, vh) {
          var he = this.he0;
          do {
            if (he.head() == vh && he.tail() == vt) return he;
            he = he.next;
          } while (he != this.he0);
          return null;
        },
      
        // calculates the distance from this face to a point p
        distanceToPlane: function (p) {
          return (
            this.normal._x * p._x +
            this.normal._y * p._y +
            this.normal._z * p._z -
            this.planeOffset
          );
        },
      
        // returns the normal of the plane associated with this face
        getNormal: function () {
          return this.normal;
        },
      
        getCentroid: function () {
          return this.centroid;
        },
      
        numVertices: function () {
          return this.numVerts;
        },
      
        getVertexString: function () {
          var s = "";
          var he = this.he0;
      
          do {
            if (s.length == 0) s += he.head().index;
            else s += " " + he.head().index;
      
            he = he.next;
          } while (he != this.he0);
          return s;
        },
      
        getVertexIndices: function (idxs) {
          var he = this.he0;
          var i = 0;
          do {
            idxs[i++] = he.head().index;
            he = he.next;
          } while (he != this.he0);
        },
      
        connectHalfEdges: function (hedgePrev, hedge) {
          var discardedFace = null;
      
          if (hedgePrev.oppositeFace() == hedge.oppositeFace()) {
            // there is a redundant edge we can get rid of
            var oppFace = hedge.oppositeFace();
            var hedgeOpp;
      
            if (hedgePrev == this.he0) this.he0 = hedge;
            if (oppFace.numVertices() == 3) {
              // we can get rid of the opposite face altogether
              hedgeOpp = hedge.getOpposite().prev.getOpposite();
              oppFace.mark = 3; // DELETED
              discardedFace = oppFace;
            } else {
              hedgeOpp = hedge.getOpposite().next;
              if (oppFace.he0 == hedgeOpp.prev) oppFace.he0 = hedgeOpp;
              hedgeOpp.prev = hedgeOpp.prev.prev;
              hedgeOpp.prev.next = hedgeOpp;
            }
      
            hedge.prev = hedgePrev.prev;
            hedge.prev.next = hedge;
      
            hedge.opposite = hedgeOpp;
            hedgeOpp.opposite = hedge;
      
            // oppFace was modified, so need to recompute
            oppFace.computeNormalAndCentroid();
          } else {
            hedgePrev.next = hedge;
            hedge.prev = hedgePrev;
          }
          return discardedFace;
        },
      
        checkConsistency: function () {
          // do a sanity check on the face
          var hedge = this.he0;
          var maxd = 0;
          var numv = 0;
      
          if (this.numVerts < 3)
            throw (
              "face" +
              this.getVertexString() +
              ": " +
              "unreflected half edge " +
              hedge.getVertexString()
            );
      
          do {
            var hedgeOpp = hedge.getOpposite();
            if (hedgeOpp == null)
              throw (
                "face " +
                this.getVertexString() +
                ": " +
                "unreflected half edge " +
                hedge.getVertexString()
              );
            else if (hedgeOpp.getOpposite() != hedge)
              throw (
                "face " +
                this.getVertexString() +
                ": " +
                "opposite half edge " +
                hedgeOpp.getVertexString() +
                " has opposite " +
                hedgeOpp.getOpposite().getVertexString()
              );
            if (hedgeOpp.head() != hedge.tail() || hedge.head() != hedgeOpp.tail())
              throw (
                "face " +
                this.getVertexString() +
                ": " +
                "half edge " +
                hedge.getVertexString() +
                " reflected by " +
                hedgeOpp.getVertexString()
              );
      
            var oppFace = hedgeOpp.face;
            if (oppFace == null)
              throw (
                "face " +
                this.getVertexString() +
                ": " +
                "no face on half edge " +
                hedgeOpp.getVertexString()
              );
            else if (oppFace.mark == 3)
              // DELETED
              throw (
                "face " +
                this.getVertexString() +
                ": " +
                "opposite face " +
                oppFace.getVertexString() +
                " not on hull"
              );
      
            var d = Math.abs(this.distanceToPlane(hedge.head().pnt));
            if (d > maxd) maxd = d;
            numv++;
            hedge = hedge.next;
          } while (hedge != this.he0);
      
          if (numv != this.numVerts)
            throw (
              "face " +
              this.getVertexString() +
              " numVerts=" +
              this.numVerts +
              " should be " +
              numv
            );
        },
      
        // merges adjacent faces.
        // hedgeAdj: a halfEdge
        // discarded: an array of faces
        mergeAdjacentFace: function (hedgeAdj, discarded) {
          var oppFace = hedgeAdj.oppositeFace();
          var numDiscarded = 0;
      
          discarded[numDiscarded++] = oppFace;
          oppFace.mark = 3; // DELETED
      
          var hedgeOpp = hedgeAdj.getOpposite();
          var hedgeAdjPrev = hedgeAdj.prev;
          var hedgeAdjNext = hedgeAdj.next;
          var hedgeOppPrev = hedgeOpp.prev;
          var hedgeOppNext = hedgeOpp.next;
      
          while (hedgeAdjPrev.oppositeFace() == oppFace) {
            hedgeAdjPrev = hedgeAdjPrev.prev;
            hedgeOppNext = hedgeOppNext.next;
          }
      
          while (hedgeAdjNext.oppositeFace() == oppFace) {
            hedgeOppPrev = hedgeOppPrev.prev;
            hedgeAdjNext = hedgeAdjNext.next;
          }
      
          var hedge;
      
          for (hedge = hedgeOppNext; hedge != hedgeOppPrev.next; hedge = hedge.next) {
            hedge.face = this;
          }
      
          if (hedgeAdj == this.he0) this.he0 = hedgeAdjNext;
      
          // handle the half edges at the head
          var discardedFace;
      
          discardedFace = this.connectHalfEdges(hedgeOppPrev, hedgeAdjNext);
          if (discardedFace != null) discarded[numDiscarded++] = discardedFace;
      
          // handle the half edges at the tail
          discardedFace = this.connectHalfEdges(hedgeAdjPrev, hedgeOppNext);
          if (discardedFace != null) discarded[numDiscarded++] = discardedFace;
      
          this.computeNormalAndCentroid();
          this.checkConsistency();
      
          return numDiscarded;
        },
        // return the squared area of the triangle defined by
        // the half edge hedge0 and the point at the head of hedge1
        areaSquared: function (hedge0, hedge1) {
          var p0 = hedge0.tail().pnt;
          var p1 = hedge0.head().pnt;
          var p2 = hedge1.head().pnt;
      
          var dx1 = p1._x - p0._x;
          var dy1 = p1._y - p0._y;
          var dz1 = p1._z - p0._z;
      
          var dx2 = p2._x - p0._x;
          var dy2 = p2._y - p0._y;
          var dz2 = p2._z - p0._z;
      
          var x = dy1 * dz2 - dz1 * dy2;
          var y = dz1 * dx2 - dx1 * dz2;
          var z = dx1 * dy2 - dy1 * dx2;
      
          return x * x + y * y + z * z;
        },
      
        triangulate: function (newFaces, minArea) {
          var hedge;
      
          if (this.numVertices < 4)
            // nothing to triangulate!
            return;
      
          var v0 = this.he0.head();
          var prevFace = null;
      
          hedge = this.he0.next;
          var oppPrev = hedge.opposite;
          var face0 = null;
      
          for (hedge = hedge.next; hedge != this.he0.prev; hedge = hedge.next) {
            var face = createTriangle(v0, hedge.prev.head(), hedge.head(), minArea);
            face.he0.next.setOpposite(oppPrev);
            face.he0.prev.setOpposite(hedge.opposite);
            oppPrev = face.he0;
            newFaces.add(face);
            if (face0 == null) face0 = face;
          }
          hedge = new CSGx.HalfEdge(this.he0.prev.prev.head(), this);
          hedge.setOpposite(oppPrev);
      
          hedge.prev = this.he0;
          hedge.prev.next = hedge;
      
          hedge.next = this.he0.prev;
          hedge.next.prev = hedge;
      
          computeNormalAndCentroid(minArea);
          checkConsistency();
      
          for (var face = face0; face != null; face = face.next)
            face.checkConsistency();
        },
      }; // end of Face.prototype
      
      CSGx.FaceList = function () {
        this.head = null;
        this.tail = null;
      };
      
      CSGx.FaceList.prototype = {
        // clear the list
        clear: function () {
          this.head = null;
          this.tail = null;
        },
        // add to the end of this list
        add: function (f) {
          if (this.head == null) this.head = f;
          else this.tail.next = f;
          f.next = null;
          this.tail = f;
        },
      
        first: function () {
          return this.head;
        },
      
        // returns true if the list is empty
        isEmpty: function () {
          return this.head == null;
        },
      }; // end FaceList.prototype
      
      CSGx.hVertex = function (x, y, z, idx) {
        this.pnt = new CSG.Vector3D(x, y, z);
        if (arguments.length == 4) this.index = idx;
      
        this.next = null;
        this.prev = null;
        this.face = null;
      };
      
      CSGx.hVertex.prototype = {
        clone: function () {
          return new CSG.hVertex(this._x, this._y, this._z, this.index);
        },
      };
      // doubly linked list of vertices.  Store a head and a tail pointer
      // used for 3D hull. - JY
      CSGx.hVertexList = function () {
        this.head = null;
        this.tail = null;
      };
      
      CSGx.hVertexList.prototype = {
        // clear the list
        clear: function () {
          this.head = null;
          this.tail = null;
        },
      
        // add a vertex to the end of the list
        // assumes that the vertex to be added is already an instantiated hVertex object
        add: function (v) {
          if (this.head == null) this.head = v;
          else this.tail.next = v;
      
          v.prev = this.tail;
          v.next = null;
          this.tail = v;
        },
      
        // Add a chain of vertices to the end of this list.
        addAll: function (vtx) {
          if (this.head == null) this.head = vtx;
          else this.tail.next = vtx;
          vtx.prev = this.tail;
          while (vtx.next != null) {
            vtx = vtx.next;
          }
          this.tail = vtx;
        },
      
        //Delete a vertex or vertex chain from this list
        delete: function (vtx1, vtx2) {
          // delete single vertex
          if (arguments.length == 1) {
            if (vtx1.prev == null) this.head = vtx1.next;
            else vtx1.prev.next = vtx1.next;
            if (vtx1.next == null) this.tail = vtx1.prev;
            else vtx1.next.prev = vtx1.prev;
          }
          // delete chain of contiguous vertices with vtx1 before vtx2
          else if (arguments.length == 2) {
            if (vtx1.prev == null) this.head = vtx2.next;
            else vtx1.prev.next = vtx2.next;
            if (vtx2.next == null) this.tail = vtx1.prev;
            else vtx2.next.prev = vtx1.prev;
          }
        },
        // insert a vertex into the list before another given vertex
        insertBefore: function (vtx, next) {
          vtx.prev = next.prev;
          if (next.prev == null) this.head = vtx;
          else next.prev.next = vtx;
          vtx.next = next;
          next.prev = vtx;
        },
        // return the first vertex in the list
        first: function () {
          return this.head;
        },
      
        // return true if the list is empty
        isEmpty: function () {
          return this.head == null;
        },
      }; // end hVertexList
      
      // implementation of the quickhull algorithm
      // based on the original paper by Barber, Dobkin, and Huhdanpaa (1995)
      // ported from the Java library by John Lloyd
      // https://www.cs.ubc.ca/~lloyd/java/quickhull3d.html
      //
      // function to build a 3D convex hull
      // takes an array of CSG.Vector3D values,
      // returns an array of "faces" (indexes into
      // the original vector array)
      CSGx.quickHull3D = function () {
        // the distance tolerance should be computed from input points
        this.AUTOMATIC_TOLERANCE = -1;
        this.DOUBLE_PREC = 2.2204460492503131e-16;
        this.findIndex = -1;
      
        this.debug = true;
      
        // estimated size of the point set
        this.charLength = 0;
      
        // will hold an array of vertices
        this.pointBuffer = [];
        this.vertexPointIndices = [];
        this.discardedFaces = [];
      
        this.maxVtxs = [];
        this.minVtxs = [];
      
        for (var i = 0; i < 3; i++) {
          this.maxVtxs.push(new CSGx.hVertex(0, 0, 0, i));
          this.minVtxs.push(new CSGx.hVertex(0, 0, 0, i));
          this.discardedFaces.push(new CSGx.Face());
        }
      
        this.faces = [];
        this.horizon = [];
      
        this.newFaces = new CSGx.FaceList();
        this.unclaimed = new CSGx.hVertexList();
        this.claimed = new CSGx.hVertexList();
      
        this.numVertices = 0;
        this.numFaces = 0;
        this.numPoints = 0;
      
        this.explicitTolerance = this.AUTOMATIC_TOLERANCE;
        this.tolerance = 0;
      };
      
      CSGx.quickHull3D.prototype = {
        build: function (points) {
          // test to see if we have enough points to build a hull.
          if (points.length < 4) {
            console.log("cannot build hull - fewer than four points");
            return null;
          }
      
          this.initBuffers(points, points.length);
          var doneFaces = this.buildHull();
          return doneFaces;
        },
      
        normalizeVector: function (vector) {
              // console.log(" in normalize", this);
              var lenSqr = vector.lengthSquared();
              var err = lenSqr - 1;
              var DOUBLE_PREC = 2.2204460492503131e-16;
              if (err > (2*DOUBLE_PREC) || err < -(2*DOUBLE_PREC)) {
                  // console.log("normalizing");
                  var len = Math.sqrt(lenSqr);
      
                  vector._x /= len
                  vector._y /= len
                  vector._z /= len 
                  
                 
              }
          
        },
        initBuffers: function (points, nump) {
          this.pointBuffer = [];
          for (var i = 0; i < nump; i++) {
            this.pointBuffer.push(
              new CSGx.hVertex(points[i]._x, points[i]._y, points[i]._z, i)
            );
            this.vertexPointIndices.push(0);
          }
      
          this.faces = [];
          this.claimed.clear();
      
          this.numVertices = nump;
          this.numFaces = 0;
          this.numPoints = nump;
        },
      
        buildHull: function () {
          var cnt = 0;
          var eyeVtx;
          // console.log(this.pointBuffer[0]);
          this.computeMaxAndMin();
          this.createInitialSimplex();
      
          while ((eyeVtx = this.nextPointToAdd()) != null) {
            // console.log ("eyeVtx is" , eyeVtx);
            this.addPointToHull(eyeVtx);
            cnt++;
            // console.log ("iteration " + cnt + " done");
          }
      
          this.reindexFacesAndVertices();
          // console.log("hull done");
          var doneFaces = this.getFaces();
          // console.log(doneFaces);
          // var doneVerts = this.getVertices();
          // console.log(doneVerts);
          // console.log("the points:");
          // this.printPoints();
          return doneFaces;
        },
      
        computeMaxAndMin: function () {
          // console.log(this.maxVtxs);
          // console.log(this.pointBuffer);
      
          var pt = this.pointBuffer[0];
      
          for (var i = 0; i < 3; i++) {
            this.maxVtxs[i] = this.pointBuffer[0];
            this.minVtxs[i] = this.pointBuffer[0];
          }
      
          // console.log(this.maxVtxs,this.minVtxs);
      
          var max = [pt.pnt._x, pt.pnt._y, pt.pnt._z];
          var min = [pt.pnt._x, pt.pnt._y, pt.pnt._z];
      
          for (var i = 0; i < this.numPoints; i++) {
            var pnt = this.pointBuffer[i].pnt;
            if (pnt._x > max[0]) {
              max[0] = pnt._x;
              this.maxVtxs[0] = this.pointBuffer[i];
            } else if (pnt._x < min[0]) {
              min[0] = pnt._x;
              this.minVtxs[0] = this.pointBuffer[i];
            }
            // y
            if (pnt._y > max[1]) {
              max[1] = pnt._y;
              this.maxVtxs[1] = this.pointBuffer[i];
            } else if (pnt._y < min[1]) {
              min[1] = pnt._y;
              this.minVtxs[1] = this.pointBuffer[i];
            }
            // z
            if (pnt._z > max[2]) {
              max[2] = pnt._z;
              this.maxVtxs[2] = this.pointBuffer[i];
            } else if (pnt._z < min[2]) {
              min[2] = pnt._z;
              this.minVtxs[2] = this.pointBuffer[i];
            }
          }
      
          // epsilon formula is from QuickHull
          this.charLength = Math.max(
            max[0] - min[0],
            max[1] - min[1],
            max[2] - min[2]
          );
          // console.log("longest delta was: ",this.charLength);
      
          if (this.explicitTolerance == this.AUTOMATIC_TOLERANCE) {
            this.tolerance =
              3 *
              this.DOUBLE_PREC *
              (Math.max(Math.abs(max[0]), Math.abs(min[0])) +
                Math.max(Math.abs(max[1]), Math.abs(min[1])) +
                Math.max(Math.abs(max[2]), Math.abs(min[2])));
          } else {
            this.tolerance = this.explicitTolerance;
          }
          // console.log("tolerance: ",this.tolerance);
          // console.log("max and min:", this.maxVtxs, this.minVtxs);
        },
        createInitialSimplex: function () {
          // console.log("in createInitialSimplex");
      
          var max = 0;
          var imax = 0;
          var dx = this.maxVtxs[0].pnt._x - this.minVtxs[0].pnt._x;
          var dy = this.maxVtxs[1].pnt._y - this.minVtxs[1].pnt._y;
          var dz = this.maxVtxs[2].pnt._z - this.minVtxs[2].pnt._z;
      
          if (dx > max) {
            max = dx;
            imax = 0;
          }
          if (dy > max) {
            max = dy;
            imax = 1;
          }
          if (dz > max) {
            max = dz;
            imax = 2;
          }
      
          if (max <= this.tolerance) throw "hull points are all coincident - fail!";
      
          var vtx = [];
          // set the first two points to be those with the greatest
          // one dimensional separation
          vtx[0] = this.maxVtxs[imax];
          vtx[1] = this.minVtxs[imax];
          // console.log("vtx is:",vtx);
      
          // set the third vertex to be the vertex farthest from
          // the line between vtx0 and vtx1
      
          var u01 = new CSG.Vector3D(vtx[1].pnt._x, vtx[1].pnt._y, vtx[1].pnt._z);
          u01 = u01.minus(vtx[0].pnt);
          this.normalizeVector(u01);
      
          var nrml = new CSG.Vector3D(0, 0, 0);
          var maxSqr = 0;
      
          for (var i = 0; i < this.numPoints; i++) {
            var pt = this.pointBuffer[i];
            var diff02 = CSG.Vector3D.Create(pt.pnt._x, pt.pnt._y, pt.pnt._z);
            diff02 = diff02.minus(vtx[0].pnt);
            var xprod = CSG.Vector3D.Create(u01._x, u01._y, u01._z);
            xprod = xprod.cross(diff02);
            var lenSqr = xprod.lengthSquared();
            if (
              lenSqr > maxSqr &&
              this.pointBuffer[i] != vtx[0] &&
              this.pointBuffer[i] != vtx[1]
            ) {
              maxSqr = lenSqr;
              vtx[2] = this.pointBuffer[i];
      
              nrml._x = xprod._x
              nrml._y = xprod._y
              nrml._z = xprod._z
              
              // console.log("1",nrml);
            }
          }
          if (Math.sqrt(maxSqr) <= 100 * this.tolerance)
            throw "Input points to hull appear to be co-linear";
          this.normalizeVector(nrml);
      
          var maxDist = 0;
          var d0 = vtx[2].pnt.dot(nrml);
      
          for (var i = 0; i < this.numPoints; i++) {
            var dist = Math.abs(this.pointBuffer[i].pnt.dot(nrml) - d0);
            if (
              dist > maxDist &&
              this.pointBuffer[i] != vtx[0] &&
              this.pointBuffer[i] != vtx[1] &&
              this.pointBuffer[i] != vtx[2]
            ) {
              maxDist = dist;
              vtx[3] = this.pointBuffer[i];
            }
          }
      
          if (Math.abs(maxDist) <= 100 * this.tolerance)
            throw "Input points appear to be coplanar";
      
          // console.log("initial vertices:");
          // console.log(vtx[0].index + ": " + vtx[0].pnt);
          // console.log(vtx[1].index + ": " + vtx[1].pnt);
          // console.log(vtx[2].index + ": " + vtx[2].pnt);
          // console.log(vtx[3].index + ": " + vtx[3].pnt);
      
          // we have our starting tetrahedron now.  Let's assign the other points.
      
          var tris = [
            new CSGx.Face(),
            new CSGx.Face(),
            new CSGx.Face(),
            new CSGx.Face(),
          ];
      
          if (vtx[3].pnt.dot(nrml) - d0 < 0) {
            tris[0] = tris[0].createTriangle(vtx[0], vtx[1], vtx[2]);
            tris[1] = tris[1].createTriangle(vtx[3], vtx[1], vtx[0]);
            tris[2] = tris[2].createTriangle(vtx[3], vtx[2], vtx[1]);
            tris[3] = tris[3].createTriangle(vtx[3], vtx[0], vtx[2]);
      
            for (var i = 0; i < 3; i++) {
              var k = (i + 1) % 3;
              tris[i + 1].getEdge(1).setOpposite(tris[k + 1].getEdge(0));
              tris[i + 1].getEdge(2).setOpposite(tris[0].getEdge(k));
            }
          } else {
            tris[0] = tris[0].createTriangle(vtx[0], vtx[2], vtx[1]);
            tris[1] = tris[1].createTriangle(vtx[3], vtx[0], vtx[1]);
            tris[2] = tris[2].createTriangle(vtx[3], vtx[1], vtx[2]);
            tris[3] = tris[3].createTriangle(vtx[3], vtx[2], vtx[0]);
      
            for (var i = 0; i < 3; i++) {
              var k = (i + 1) % 3;
              tris[i + 1].getEdge(0).setOpposite(tris[k + 1].getEdge(1));
              tris[i + 1].getEdge(2).setOpposite(tris[0].getEdge((3 - i) % 3));
            }
          }
          for (var i = 0; i < 4; i++) this.faces.push(tris[i]);
      
          // console.log(this.faces);
      
          for (var i = 0; i < this.numPoints; i++) {
            var v = this.pointBuffer[i];
            if (v == vtx[0] || v == vtx[1] || v == vtx[2] || v == vtx[3]) continue;
            maxDist = this.tolerance;
            var maxFace = null;
            for (var k = 0; k < 4; k++) {
              var dist = tris[k].distanceToPlane(v.pnt);
              if (dist > maxDist) {
                maxFace = tris[k];
                maxDist = dist;
              }
            }
            if (maxFace != null) this.addPointToFace(v, maxFace);
          }
        }, // end of computeInitialSimplex()
      
        addPointToFace: function (vtx, face) {
          vtx.face = face;
          // console.log("adding point: " + vtx.index + " to face: "  + face.getVertexString());
          if (face.outside == null) this.claimed.add(vtx);
          else this.claimed.insertBefore(vtx, face.outside);
          face.outside = vtx;
        },
      
        nextPointToAdd: function () {
          // var i = this.claimed.head;
          // while (i != null) {
          //     console.log("this.claimed: " + i.index);
          //     i = i.next;
          // }
      
          if (!this.claimed.isEmpty()) {
            var eyeFace = this.claimed.first().face;
            // console.log("eyeFace: ",eyeFace);
            var eyeVtx = null;
            var maxDist = 0;
            for (
              var vtx = eyeFace.outside;
              vtx != null && vtx.face == eyeFace;
              vtx = vtx.next
            ) {
              var dist = eyeFace.distanceToPlane(vtx.pnt);
              if (dist > maxDist) {
                maxDist = dist;
                eyeVtx = vtx;
              }
            }
            return eyeVtx;
          } else return null;
        },
      
        addPointToHull: function (eyeVtx) {
          this.horizon = [];
          this.unclaimed.clear();
      
          this.removePointFromFace(eyeVtx, eyeVtx.face);
       
          this.calculateHorizon(eyeVtx.pnt, null, eyeVtx.face, this.horizon);
          this.newFaces.clear();
          this.addNewFaces(this.newFaces, eyeVtx, this.horizon);
      
          // first merge pass ... merge faces which are non-convex
          // as determined by the larger face
      
          for (var face = this.newFaces.first(); face != null; face = face.next) {
            if (face.mark == 1) {
              // VISIBLE
              while (this.doAdjacentMerge(face, 1)) {} // NONCONVEX_WRT_LARGER_FACE
            }
          }
          // second merge pass ... merge faces which are non-convex
          // wrt either face
          for (var face = this.newFaces.first(); face != null; face = face.next) {
            if (face.mark == 2) {
              // NON_CONVEX
              face.mark = 1; // VISIBLE
              while (this.doAdjacentMerge(face, 2)) {} // NON_CONVEX
            }
          }
          this.resolveUnclaimedPoints(this.newFaces);
        },
      
        removePointFromFace: function (vtx, face) {
          // console.log("in removePointFromFace.  About to delete: " + vtx.index);
          if (vtx == face.outside) {
            if (vtx.next != null && vtx.next.face == face) face.outside = vtx.next;
            else face.outside = null;
          }
          this.claimed.delete(vtx);
        },
      
        calculateHorizon: function (eyePnt, edge0, face, horizon) {
          this.deleteFacePoints(face, null);
          face.mark = 3; // DELETED
          
          var edge;
          if (edge0 == null) {
            edge0 = face.getEdge(0);
            edge = edge0;
          } else edge = edge0.getNext();
      
          do {
            var oppFace = edge.oppositeFace();
            if (oppFace.mark == 1) {
              // VISIBLE
              if (oppFace.distanceToPlane(eyePnt) > this.tolerance)
                this.calculateHorizon(eyePnt, edge.getOpposite(), oppFace, horizon);
              else {
                horizon.push(edge);
                // console.log("   adding horizon edge " + edge.getVertexString());
              }
            }
            edge = edge.getNext();
          } while (edge != edge0);
        },
      
        oppFaceDistance: function (he) {
          return he.face.distanceToPlane(he.opposite.face.getCentroid());
        },
      
        doAdjacentMerge: function (face, mergeType) {
          var hedge = face.he0;
          var convex = true;
          do {
            var oppFace = hedge.oppositeFace();
            var merge = false;
            var dist1;
            var dist2;
            if (mergeType == 2) {
              // NONCONVEX
              // merge faces if they are definitively non-convex
              if (
                this.oppFaceDistance(hedge) > -1 * this.tolerance ||
                this.oppFaceDistance(hedge.opposite) > -1 * this.tolerance
              ) {
                merge = true;
              }
            } else {
              // NONCONVEX_WRT_LARGER_FACE
              // merge faces if they are parallel or non-convex
              // wrt the larger face; otherwise, just mark the
              // face non-convex for the second pass.
              if (face.area > oppFace.area) {
                if ((dist1 = this.oppFaceDistance(hedge)) > -this.tolerance)
                  merge = true;
                else if (this.oppFaceDistance(hedge.opposite) > -this.tolerance)
                  convex = false;
              } else {
                if (this.oppFaceDistance(hedge.opposite) > -this.tolerance)
                  merge = true;
                else if (this.oppFaceDistance(hedge) > -this.tolerance)
                  convex = false;
              }
            }
      
            if (merge) {
              // console.log("  merging " + face.getVertexString() + " and " + oppFace.getVertexString());
              var numd = face.mergeAdjacentFace(hedge, this.discardedFaces);
              for (var i = 0; i < numd; i++) {
                this.deleteFacePoints(this.discardedFaces[i], face);
              }
              // console.log("  result: " + face.getVertexString());
              return true;
            }
            hedge = hedge.next;
          } while (hedge != face.he0);
      
          if (!convex) face.mark = 2;
          return false;
        },
      
        deleteFacePoints: function (face, absorbingFace) {
          var faceVtxs = this.removeAllPointsFromFace(face);
          if (faceVtxs != null) {
            if (absorbingFace == null) this.unclaimed.addAll(faceVtxs);
            else {
              var vtxNext = faceVtxs;
              for (var vtx = vtxNext; vtx != null; vtx = vtxNext) {
                vtxNext = vtx.next;
                var dist = absorbingFace.distanceToPlane(vtx.pnt);
                if (dist > this.tolerance) {
                  // console.log("in deleteFacePoints - going to add points to a face now");
                  this.addPointToFace(vtx, absorbingFace);
                } else this.unclaimed.add(vtx);
              }
            }
          }
        },
      
        removeAllPointsFromFace: function (face) {
          if (face.outside != null) {
            var end = face.outside;
            while (end.next != null && end.next.face == face) end = end.next;
            // console.log("about to delete all points this.claimed in removeAllPointsFromFace: " + face.outside.index + " - " + end.index);
            this.claimed.delete(face.outside, end);
            end.next = null;
            return face.outside;
          } else return null;
        },
      
        addNewFaces: function (newFaces, eyeVtx, horizon) {
          newFaces.clear();
      
          var hedgeSidePrev = null;
          var hedgeSideBegin = null;
      
          for (var i = 0; i < horizon.length; i++) {
            var horizonHe = horizon[i];
            var hedgeSide = this.addAdjoiningFace(eyeVtx, horizonHe);
            // console.log("new face: " + hedgeSide.face.getVertexString());
      
            if (hedgeSidePrev != null) hedgeSide.next.setOpposite(hedgeSidePrev);
            else hedgeSideBegin = hedgeSide;
      
            newFaces.add(hedgeSide.getFace());
            hedgeSidePrev = hedgeSide;
          }
          hedgeSideBegin.next.setOpposite(hedgeSidePrev);
        },
      
        addAdjoiningFace: function (eyeVtx, he) {
          var face = new CSGx.Face();
          face = face.createTriangle(eyeVtx, he.tail(), he.head());
          // console.log("in addAdjoiningFace.  face is:",face);
          this.faces.push(face);
          face.getEdge(-1).setOpposite(he.getOpposite());
          return face.getEdge(0);
        },
      
        resolveUnclaimedPoints: function (newFaces) {
          // console.log("in resolveUnclaimedPoints, which has:");
      
          var vtxNext = this.unclaimed.first();
          for (var vtx = vtxNext; vtx != null; vtx = vtxNext) {
            // console.log(vtx.index);
            vtxNext = vtx.next;
            var maxDist = this.tolerance;
            var maxFace = null;
            for (
              var newFace = newFaces.first();
              newFace != null;
              newFace = newFace.next
            ) {
              if (newFace.mark == 1) {
                // VISIBLE
                var dist = newFace.distanceToPlane(vtx.pnt);
                if (dist > maxDist) {
                  maxDist = dist;
                  maxFace = newFace;
                }
                if (maxDist > 1000 * this.tolerance) break;
              }
            }
            if (maxFace != null) {
              this.addPointToFace(vtx, maxFace);
              // if (vtx.index == this.findIndex)  ;
              // console.log(this.findIndex + " CLAIMED BY " + maxFace.getVertexString());
            }
            // else if (vtx.index == this.findIndex);
            // console.log(this.findIndex + " DISCARDED");
          }
        },
      
        reindexFacesAndVertices: function () {
          for (var i = 0; i < this.numPoints; i++) this.pointBuffer[i].index = -1;
          // remove inactive faces and mark active vertices
      
          this.numFaces = 0;
          var nFaces = [];
      
          for (var i = 0; i < this.faces.length; i++) {
            var face = this.faces[i];
            if (face.mark == 1) {
              this.markFaceVertices(face, 0);
              this.numFaces++;
              nFaces.push(face);
            }
          }
          this.faces = nFaces;
      
          // reindex vertices
          this.numVertices = 0;
          for (var i = 0; i < this.numPoints; i++) {
            var vtx = this.pointBuffer[i];
            if (vtx.index == 0) {
              this.vertexPointIndices[this.numVertices] = i;
              vtx.index = this.numVertices++;
            }
          }
        },
      
        markFaceVertices: function (face, mark) {
          var he0 = face.getFirstEdge();
          var he = he0;
          do {
            he.head().index = mark;
            he = he.next;
          } while (he != he0);
        },
      
        // getFaces: get the faces of the completed hull.
        getFaces: function () {
          var allFaces = [];
          for (var i = 0; i < this.faces.length; i++) {
            var face = this.faces[i];
            allFaces.push([]);
            this.getFaceIndices(allFaces[i], face);
          }
      
          return allFaces;
        },
      
        getFaceIndices: function (indices, face) {
          var ccw = true;
          var indexedFromOne = false;
          var pointRelative = true;
      
          var hedge = face.he0;
          var k = 0;
          do {
            var idx = hedge.head().index;
            if (pointRelative) idx = this.vertexPointIndices[idx];
            if (indexedFromOne) idx++;
            indices[k++] = idx;
            hedge = ccw ? hedge.next : hedge.prev;
          } while (hedge != face.he0);
        },
      
        getVertices: function () {
          var coords = [];
          for (var i = 0; i < this.numVertices; i++) {
            var pnt = this.pointBuffer[this.vertexPointIndices[i]].pnt;
            coords.push([pnt._x, pnt._y, pnt._z]);
          }
          return coords;
        },
      
        printPoints: function () {
          for (var i = 0; i < this.pointBuffer.length; i++) {
            var pnt = this.pointBuffer[i].pnt;
            console.log(i + ": " + pnt._x + ", " + pnt._y + ", " + pnt._z);
          }
        },
      }; // end of quickHull3D.prototype
      
    
    `




}