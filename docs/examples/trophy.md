# Hour of Code Trophy 

## Step 1 @unplugged
So you've completed the Hour of Code. Congratulations!

Let's put everything you have learned together to make an Hour of Code trophy!

## Step 2 @fullscreen

Let's start by making a base for the trophy. Add a ``||shapes:cube||`` block and set the width and depth to 30.

```blocks
shapes.cube(30, 30, 10)
```

## Step 3

All trophies need your name on them! Add a ``||shapes:text||`` block. Click the + button.

Set the font size to 3, height to 1 and line width to 1. Make sure to set the text field to be your name!

You might not be able to see your name yet. That's okay,  we will move it into position in the next step.

```blocks
shapes.cube(30, 30, 10)
shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
```

## Step 4
Let's put the text in the right place. 

Add a ``||operators:turn||`` block around the ``||shapes:text||`` block. Set the angle to 90.

Add a ``||operators:move||`` block around the ``||operators:turn||`` block. Set the distance to -15mm and the axis to Y.

```blocks
shapes.cube(30, 30, 10)
operators.move(-15, Axis.Y, function () {
    operators.turn(90, RotateAxis.X, function () {
        shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
    })
})
```

## Step 5
Cut-out text 3D print's much better than text that sticks out.

Let's add a ``||operators:subtractShapes||`` block around all the other blocks.

```blocks
operators.subtractShapes(function () {
    shapes.cube(30, 30, 10)
    operators.move(-15, Axis.Y, function () {
        operators.turn(90, RotateAxis.X, function () {
            shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
        })
    })
})
```

## Step 6
Let's finish of the trophy base by styling the top edges. 

Add a ``||operators:styleEdges||`` block around everything.

```blocks
operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
    operators.subtractShapes(function () {
        shapes.cube(30, 30, 10)
        operators.move(-15, Axis.Y, function () {
            operators.turn(90, RotateAxis.X, function () {
                shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
            })
        })
    })
})
```


## Step 7
Let's add a column to our trophy. Add a ``||operators:stackShapes||`` block around everything.

Inside the ``||operators:stackShapes||`` block place a ``||shapes:cylinder||`` block. Set the radius to 7mm and the height to 20mm.

```blocks
operators.stack(StackDirection.Above, Axis.Z, function () {
    operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
        operators.subtractShapes(function () {
            shapes.cube(30, 30, 10)
            operators.move(-15, Axis.Y, function () {
                operators.turn(90, RotateAxis.X, function () {
                    shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
                })
            })
        })
    })
    shapes.cylinder(7, 20)
})
```


## Step 8
Now we need something to sit on top of the column. A star would look nice.

Add a ``||operators:move||`` block and a ``||operators:turn||`` block. Set the move block to 25mm in the Z direction and set the turn to 60 degrees. Put a ``||shapes:cube||`` inside.

```blocks
operators.stack(StackDirection.Above, Axis.Z, function () {
    operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
        operators.subtractShapes(function () {
            shapes.cube(30, 30, 10)
            operators.move(-15, Axis.Y, function () {
                operators.turn(90, RotateAxis.X, function () {
                    shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
                })
            })
        })
    })
    shapes.cylinder(7, 20)
})
operators.move(25, Axis.Z, function () {
    operators.turn(60, RotateAxis.X, function () {
        shapes.cube(10, 10, 10)
    })
})
```

## Step 9
To turn that ``||shapes:cube||`` into a star we need to set the width to 20mm, depth to 20mm and height to 8mm.

Then add a second ``||shapes:cube||`` and give it the same settings.

Finally add a ``||operators:turn||`` block around the second cube. Set it's axis to Z.

```blocks
operators.stack(StackDirection.Above, Axis.Z, function () {
    operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
        operators.subtractShapes(function () {
            shapes.cube(30, 30, 10)
            operators.move(-15, Axis.Y, function () {
                operators.turn(90, RotateAxis.X, function () {
                    shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
                })
            })
        })
    })
    shapes.cylinder(7, 20)
})
operators.move(25, Axis.Z, function () {
    operators.turn(60, RotateAxis.X, function () {
        shapes.cube(20, 20, 8)
        operators.turn(45, RotateAxis.Z, function () {
            shapes.cube(20, 20, 8)
        })
    })
})
```


## Step 10
Let's put something nice in the middle of the star to cover up the column that is sticking through.

At the end of the script add a ``||operators:move||`` block. Set the distance to 25mm and the direction to Z.

Inside the ``||operators:move||`` block add a ``||shapes:polyhedron||``. Set the type to 12 sided and the radius to 10mm.

Finally to make it stand out, wrap the ``||shapes:polyhedron||`` block in a ``||colors:color||`` block.

```blocks
operators.stack(StackDirection.Above, Axis.Z, function () {
    operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
        operators.subtractShapes(function () {
            shapes.cube(30, 30, 10)
            operators.move(-15, Axis.Y, function () {
                operators.turn(90, RotateAxis.X, function () {
                    shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
                })
            })
        })
    })
    shapes.cylinder(7, 20)
})
operators.move(25, Axis.Z, function () {
    operators.turn(60, RotateAxis.X, function () {
        shapes.cube(20, 20, 8)
        operators.turn(45, RotateAxis.Z, function () {
            shapes.cube(20, 20, 8)
        })
    })
})
operators.move(25, Axis.Z, function () {
    colors.color(colors.choose(0xED0A3F), function () {
        shapes.polyhedron(Polyhedra.Dodecahedron, 10)
    })
})
```

## Step 11
To get everything ready for 3D printing, wrap everything in an ``||operators:addShapes||`` block and a ``||operators:placeOnGround||`` block.

Double check that the text matches your name.

That's it, your hour of code trophy is complete! You can now take a picture by clicking the camera button under the 3D view or 3D print the model so you have a real life trophy! 

```blocks
operators.placeOnGround(function () {
    operators.addShapes(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
                operators.subtractShapes(function () {
                    shapes.cube(30, 30, 10)
                    operators.move(-15, Axis.Y, function () {
                        operators.turn(90, RotateAxis.X, function () {
                            shapes.text("BuildBee", 3, 1, shapes.chooseColor(0xED0A3F), 1, 1, 1.4)
                        })
                    })
                })
            })
            shapes.cylinder(7, 20)
        })
        operators.move(25, Axis.Z, function () {
            operators.turn(60, RotateAxis.X, function () {
                shapes.cube(20, 20, 8)
                operators.turn(45, RotateAxis.Z, function () {
                    shapes.cube(20, 20, 8)
                })
            })
        })
        operators.move(25, Axis.Z, function () {
            colors.color(colors.choose(0xED0A3F), function () {
                shapes.polyhedron(Polyhedra.Dodecahedron, 10)
            })
        })
    })
})
```