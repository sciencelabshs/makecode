# Snowflake Ornament 

## Step 1 @unplugged
Lets make a snowflake ornament! 

Snowflake's are special because they have symmetry. 

This means we can make one arm and copy it to make the whole snowflake!

## Step 2 @fullscreen
To get started add an ``||operators:place on ground||`` block and a ``||shapes:cube||`` width width: 5, depth: 3 and height: 40. This will be the center of our snowflake's arm.

```blocks
operators.placeOnGround(function () {
    shapes.cube(5, 3, 40)
})
```

## Step 3
Let's add some details to our arm.

Add a ``||shapes:cube||`` block. Set it to width: 2.5, depth: 3, height:22

Wrap the cube in an ``||operators:turn||`` block. Set it to 45 degrees in the Y axis.

Add another ``||shapes:cube||`` and ``||operators:turn||`` with the same settings. Change the second ``||operators:turn||`` to be -45 degrees.

```blocks
operators.placeOnGround(function () {
    shapes.cube(5, 3, 40)
    operators.turn(45, RotateAxis.Y, function () {
        shapes.cube(2.5, 3, 22)
    })
    operators.turn(-45, RotateAxis.Y, function () {
        shapes.cube(2.5, 3, 22)
    })
})
```

## Step 4
Let's put a hexagon at the end of the arm.

Add a ``||shapes:polygon||`` block. Set it to 6 sides, radius 5 and height 3.

Add a ``||operators:turn||`` block. Set it to 90 degrees in the X axis.

Add a ``||operators:move||`` block. Set the move block to 20mm along the Z axis.

```blocks
operators.placeOnGround(function () {
    shapes.cube(5, 3, 40)
    operators.turn(45, RotateAxis.Y, function () {
        shapes.cube(2.5, 3, 22)
    })
    operators.turn(-45, RotateAxis.Y, function () {
        shapes.cube(2.5, 3, 22)
    })
    operators.move(20, Axis.Z, function () {
        operators.turn(90, RotateAxis.X, function () {
            shapes.polygon3D(6, 5, 3)
        })
    })
})
```

## Step 5
Let's pattern the arm we have made to make a proper snowflake.

Wrap everything in a ``||loops:for||`` block and a ``||operators:turn||`` block. 

Put a ``||Math:multiplication||`` block in the turn ``||operators:turn||`` block and set the axis to Y. 

Put set the values of the ``||Math:multiplication||`` block to be 60 and ``||variables:index||``.

Set the ``||loops:for||`` block to 5.

```blocks
for (let index = 0; index <= 5; index++) {
    operators.turn(60 * index, RotateAxis.Y, function () {
        operators.placeOnGround(function () {
            shapes.cube(5, 3, 40)
            operators.turn(45, RotateAxis.Y, function () {
                shapes.cube(2.5, 3, 22)
            })
            operators.turn(-45, RotateAxis.Y, function () {
                shapes.cube(2.5, 3, 22)
            })
            operators.move(20, Axis.Z, function () {
                operators.turn(90, RotateAxis.X, function () {
                    shapes.polygon3D(6, 5, 3)
                })
            })
        })
    })
}
```

## Step 6
Let's lay the snowflake flat to finish it off.

Wrap everything in a ``||operators:turn||`` block. Set the axis to X and turn 90 degrees.
```blocks
operators.turn(90, RotateAxis.X, function () {
    for (let index = 0; index <= 5; index++) {
        operators.turn(60 * index, RotateAxis.Y, function () {
            operators.placeOnGround(function () {
                shapes.cube(5, 3, 40)
                operators.turn(45, RotateAxis.Y, function () {
                    shapes.cube(2.5, 3, 22)
                })
                operators.turn(-45, RotateAxis.Y, function () {
                    shapes.cube(2.5, 3, 22)
                })
                operators.move(20, Axis.Z, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.polygon3D(6, 5, 3)
                    })
                })
            })
        })
    }
})
```

## Step 7
Let's put a hexagon in the center to make the snowflake a bit stronger.

Add an ``||operators:add shapes||`` block around all the other blocks. 

Place a ``||shapes:polygon||`` block inside and set the sides to 6, radius to 12 and height to 3.

```blocks
operators.addShapes(function () {
    operators.turn(90, RotateAxis.X, function () {
        for (let index = 0; index <= 5; index++) {
            operators.turn(60 * index, RotateAxis.Y, function () {
                operators.placeOnGround(function () {
                    shapes.cube(5, 3, 40)
                    operators.turn(45, RotateAxis.Y, function () {
                        shapes.cube(2.5, 3, 22)
                    })
                    operators.turn(-45, RotateAxis.Y, function () {
                        shapes.cube(2.5, 3, 22)
                    })
                    operators.move(20, Axis.Z, function () {
                        operators.turn(90, RotateAxis.X, function () {
                            shapes.polygon3D(6, 5, 3)
                        })
                    })
                })
            })
        }
    })
    shapes.polygon3D(6, 12, 3)
})
```

## Step 8
Let's make a window in the center of the snowflake.

Add a ``||operators:subtract shapes||`` block around all the other blocks. 

Place a ``||shapes:polygon||`` block inside and set the sides to 6, radius to 7 and height to 3.

```blocks
operators.subtractShapes(function () {
    operators.addShapes(function () {
        operators.turn(90, RotateAxis.X, function () {
            for (let index = 0; index <= 5; index++) {
                operators.turn(60 * index, RotateAxis.Y, function () {
                    operators.placeOnGround(function () {
                        shapes.cube(5, 3, 40)
                        operators.turn(45, RotateAxis.Y, function () {
                            shapes.cube(2.5, 3, 22)
                        })
                        operators.turn(-45, RotateAxis.Y, function () {
                            shapes.cube(2.5, 3, 22)
                        })
                        operators.move(20, Axis.Z, function () {
                            operators.turn(90, RotateAxis.X, function () {
                                shapes.polygon3D(6, 5, 3)
                            })
                        })
                    })
                })
            }
        })
        shapes.polygon3D(6, 12, 3)
    })
    shapes.polygon3D(6, 7, 3)
})
```

## Step 9
Now we can add a ring to hang the ornament from.

Add two ``||Shapes:cylinder||`` blocks. Give the first a radius of 10, the second a radius of 8 and both a height of 3.

Wrap the two ``||Shapes:cylinder||`` blocks in a ``||Operators:subtract||`` to make a ring.

Wrap the ``||Operators:subtract||`` in a ``||Operators:move||`` block. Move the ring 50mm in the Y direction.

```blocks
operators.subtractShapes(function () {
    operators.addShapes(function () {
        operators.turn(90, RotateAxis.X, function () {
            for (let index = 0; index <= 5; index++) {
                operators.turn(60 * index, RotateAxis.Y, function () {
                    operators.placeOnGround(function () {
                        shapes.cube(5, 3, 40)
                        operators.turn(45, RotateAxis.Y, function () {
                            shapes.cube(2.5, 3, 22)
                        })
                        operators.turn(-45, RotateAxis.Y, function () {
                            shapes.cube(2.5, 3, 22)
                        })
                        operators.move(20, Axis.Z, function () {
                            operators.turn(90, RotateAxis.X, function () {
                                shapes.polygon3D(6, 5, 3)
                            })
                        })
                    })
                })
            }
        })
        shapes.polygon3D(6, 12, 3)
    })
    shapes.polygon3D(6, 7, 3)
})
operators.move(50, Axis.Y, function () {
    operators.subtractShapes(function () {
        shapes.cylinder(10, 3)
        shapes.cylinder(8, 3)
    })
})
```


## Step 9
To finish everything up ready to 3D Print, wrap everything in an ``||operators:place on ground||`` and an ``||operators:addShapes||`` block. This makes sure everything is lying flat and is properly joined together.

And that's it, you are done!

By changing what we did in steps 2, 3 and 4 you can make your own unique snowflake!

```blocks
operators.placeOnGround(function(){
    operators.addShapes(function () {
        operators.subtractShapes(function () {
            operators.addShapes(function () {
                operators.turn(90, RotateAxis.X, function () {
                    for (let index = 0; index <= 5; index++) {
                        operators.turn(60 * index, RotateAxis.Y, function () {
                            operators.placeOnGround(function () {
                                shapes.cube(5, 3, 40)
                                operators.turn(45, RotateAxis.Y, function () {
                                    shapes.cube(2.5, 3, 22)
                                })
                                operators.turn(-45, RotateAxis.Y, function () {
                                    shapes.cube(2.5, 3, 22)
                                })
                                operators.move(20, Axis.Z, function () {
                                    operators.turn(90, RotateAxis.X, function () {
                                        shapes.polygon3D(6, 5, 3)
                                    })
                                })
                            })
                        })
                    }
                })
                shapes.polygon3D(6, 12, 3)
            })
            shapes.polygon3D(6, 7, 3)
        })
        operators.move(50, Axis.Y, function () {
            operators.subtractShapes(function () {
                shapes.cylinder(10, 3)
                shapes.cylinder(8, 3)
            })
        })
    })
})
```