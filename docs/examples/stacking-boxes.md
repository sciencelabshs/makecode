# Stacking Boxes
Make stacking storage containers of a customisable size.

```blocks
function makeIndent () {
    operators.subtractShapes(function () {
        shapes.cube(width - stepWidth, depth - stepWidth, stepHeight)
        operators.translateShapes((width - stepWidth) / -2, (depth - stepWidth) / -2, 0, function () {
            cornerFiletTool()
        })
        operators.translateShapes((width - stepWidth) / 2, (depth - stepWidth) / -2, 0, function () {
            operators.turn(90, RotateAxis.Z, function () {
                cornerFiletTool()
            })
        })
        operators.translateShapes((width - stepWidth) / 2, (depth - stepWidth) / 2, 0, function () {
            operators.turn(180, RotateAxis.Z, function () {
                cornerFiletTool()
            })
        })
        operators.translateShapes((width - stepWidth) / -2, (depth - stepWidth) / 2, 0, function () {
            operators.turn(270, RotateAxis.Z, function () {
                cornerFiletTool()
            })
        })
    })
}
function cornerFiletTool () {
    operators.subtractShapes(function () {
        shapes.cube(cornerRadius * 2, cornerRadius * 2, height)
        operators.translateShapes(cornerRadius, cornerRadius, 0, function () {
            shapes.cylinder(cornerRadius, height, shapes.chooseColor(0xED0A3F), cornerResoFaces)
        })
    })
}
function makeRest () {
    operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Bottom, stepWidth / 2, function () {
        operators.subtractShapes(function () {
            shapes.cube(width, depth, height - stepHeight)
            operators.translateShapes(width / -2, depth / -2, 0, function () {
                cornerFiletTool()
            })
            operators.translateShapes(width / 2, depth / -2, 0, function () {
                operators.turn(90, RotateAxis.Z, function () {
                    cornerFiletTool()
                })
            })
            operators.translateShapes(width / 2, depth / 2, 0, function () {
                operators.turn(180, RotateAxis.Z, function () {
                    cornerFiletTool()
                })
            })
            operators.translateShapes(width / -2, depth / 2, 0, function () {
                operators.turn(270, RotateAxis.Z, function () {
                    cornerFiletTool()
                })
            })
        })
    })
}
let cornerResoFaces = 0
let cornerRadius = 0
let stepHeight = 0
let stepWidth = 0
let depth = 0
let width = 0
let height = 0
height = parameters.numberParameter("Height (mm)", 40)
width = parameters.numberParameter("Width (mm)", 50)
depth = parameters.numberParameter("Depth (mm)", 50)
let wallThickness = parameters.numberParameter("Wall Thickness (mm)", 2)
stepWidth = wallThickness * 4
stepHeight = Math.max(5, wallThickness)
cornerRadius = 5
cornerResoFaces = 80
let cutout = parameters.numberRangeParameter("Cutout", 1, -1, 1, 2) > 0
colors.color(colors.convertFromHex("FFF"), function () {
    operators.subtractShapes(function () {
        operators.placeOnGround(function () {
            operators.hollowShapes(wallThickness, 1, function () {
                operators.stack(StackDirection.Above, Axis.Z, function () {
                    makeIndent()
                    makeRest()
                })
            })
        })
        operators.move(height - stepHeight, Axis.Z, function () {
            operators.placeOnGround(function () {
                makeRest()
            })
        })
        if (cutout) {
            operators.move(height / 2, Axis.Z, function () {
                operators.placeOnGround(function () {
                    operators.move(depth / -2, Axis.Y, function () {
                        operators.styleEdges(EdgeStyle.Fillet, StyleEdgeDirection.Bottom, 5, function () {
                            operators.turn(90, RotateAxis.X, function () {
                                shapes.cube((width - wallThickness) / 2, height / 2, 2 * wallThickness + 10, shapes.chooseColor(0xED0A3F))
                            })
                        })
                    })
                })
            })
        }
    })
})

```