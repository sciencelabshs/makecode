# Name tag

## Introduction @unplugged

Learn to use loops and make a spinning top!

We recommend completing the previous tutorials before starting this one.

![Make a top](/docs/static/examples/top/project-image.png)

## Step 1 @fullscreen

Add two ``||Shapes:cylinder||`` blocks and a ``||operators:placeOnGround||`` block. 

Give the first cylinder a radius of 40.
Give the second a radius of 30.

```blocks
operators.placeOnGround(function () {
    shapes.cylinder(40, 10)
    shapes.cylinder(30, 10)
})
```


## Step 2
Wrap a ``||Operators:subtract||`` block around both cylinders. This should give you a ring.

```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
    })
})
```

## Step 3
Add a ``||Shapes:cube||`` block. Set its width to 2, depth to 60 and height to 10.

```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
    })
    shapes.cube(2, 60, 10)
})
```

## Step 4
Add a ``||Operators:turn||`` block around the ``||Shapes:cube||``. Set the turn type to Z.

```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
    })
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(2, 60, 10)
    })
})
```

## Step 5

Add a ``||loops:for||`` block around the ``||Operators:turn||``. Set the loop count to 3.  

Note: This will make 4 cubes, but we wont be able to see  all of them yet!

```blocks
operators.placeOnGround(function () {

    operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
    })
    for (let index = 0; index <= 3; index++) {
        operators.turn(45, RotateAxis.Z, function () {
            shapes.cube(2, 60, 10)
        })
    }
})
```

## Step 6

Separate the cubes by turning them all different amounts.

Add a ``||Math:✕||`` into the ``||Operators:turn||`` block. Drag the ``||Variables:index||`` from the loop into the ``||Math:✕||`` and set the other number to be 45.

```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
    })
    for (let index = 0; index <= 3; index++) {
        operators.turn(45 * index, RotateAxis.Z, function () {
            shapes.cube(2, 60, 10)
        })
    }
})
```

## Step 7
Make the center spoke. 

Add a ``||Shapes:cylinder||`` block. Set the radius to 7.

```blocks
operators.placeOnGround(function () {

    operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
    })
    for (let index = 0; index <= 3; index++) {
        operators.turn(45 * index, RotateAxis.Z, function () {
            shapes.cube(2, 60, 10)
        })
    }
    shapes.cylinder(7, 10)
})
```

## Step 8
Add a ``||Operators:add||`` block around all the other blocks.

```blocks
operators.placeOnGround(function () {
    operators.addShapes(function () {
        operators.subtractShapes(function () {
            shapes.cylinder(40, 10)
            shapes.cylinder(30, 10)
        })
        for (let index = 0; index <= 3; index++) {
            operators.turn(45 * index, RotateAxis.Z, function () {
                shapes.cube(2, 60, 10)
            })
        }
        shapes.cylinder(7, 10)
    })
})
```

## Step 9
Cut the hole for the center spindle (part 1 of 2).

Add a ``||Shapes:cylinder||`` block. Click the + button a few times and set the radius to 2, the height to 50 and radius2 to 5. 

```blocks
operators.placeOnGround(function () {
    operators.addShapes(function () {
        operators.subtractShapes(function () {
        shapes.cylinder(40, 10)
        shapes.cylinder(30, 10)
        })
        for (let index = 0; index <= 3; index++) {
            operators.turn(45 * index, RotateAxis.Z, function () {
                shapes.cube(2, 60, 10)
            })
        }
        shapes.cylinder(7, 10)
    })
})
shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
```

## Step 10
Cut the hole for the center spindle (part 2 of 2).

Add a ``||Operators:subtract||`` block around all the other blocks.


```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.addShapes(function () {
            operators.subtractShapes(function () {
            shapes.cylinder(40, 10)
            shapes.cylinder(30, 10)
            })
            for (let index = 0; index <= 3; index++) {
                operators.turn(45 * index, RotateAxis.Z, function () {
                    shapes.cube(2, 60, 10)
                })
            }
            shapes.cylinder(7, 10)
        })
    })
    shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
})
```

## Step 11
Make the spindle.

Add  new ``||Shapes:cylinder||``. Expand the options by clicking + a few times. Set the radius to 5, the height to 50 and radius2 to 2. 

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.addShapes(function () {
            operators.subtractShapes(function () {
            shapes.cylinder(40, 10)
            shapes.cylinder(30, 10)
            })
            for (let index = 0; index <= 3; index++) {
                operators.turn(45 * index, RotateAxis.Z, function () {
                    shapes.cube(2, 60, 10)
                })
            }
            shapes.cylinder(7, 10)
        })
    })
    shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
})
shapes.cylinder(5, 50, 0x4ebed7, 100, 2)
```


## Step 12
Move the spindle out of the way.  

Use the ``||Operators:placeOnGround||`` block and ``||Operators:move||`` block around the new ``||Shapes:cylinder||``. 

Set the X value to 50mm.

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.addShapes(function () {
            operators.subtractShapes(function () {
            shapes.cylinder(40, 10)
            shapes.cylinder(30, 10)
            })
            for (let index = 0; index <= 3; index++) {
                operators.turn(45 * index, RotateAxis.Z, function () {
                    shapes.cube(2, 60, 10)
                })
            }
            shapes.cylinder(7, 10)
        })
    })
    shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
})
operators.placeOnGround(function () {
    operators.move(50, Axis.X, function () {
        shapes.cylinder(5, 50, 0x4ebed7, 100, 2)
    })
})
```

## Step 13
Thats it! 

You can conveniently upload your print directly to BuildBee for printing to your 3D printer, or download the STL file.  
