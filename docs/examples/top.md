# Name tag

## Introduction @unplugged

Learn to use loops and make a spinning top!

We recommend completing the previous tutorials before starting this one.

![Make a top](/docs/static/examples/top/project-image.png)

## Step 1 @fullscreen

Place two ``||Shapes:cylinder||`` block in the ``||loops:start||`` block. Give the first a radius of 40 and the second a radius of 30.
```blocks
shapes.cylinder(40, 10)
shapes.cylinder(30, 10)
```


## Step 2
Add a ``||Operators:subtract||`` block around both cylinders. This should give you a ring.
```blocks
operators.subtractShapes(function () {
    shapes.cylinder(40, 10)
    shapes.cylinder(30, 10)
})
```

## Step 3
Add a ``||Shapes:cube||`` block. Set its width to 2, depth to 60 and height to 10.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(40, 10)
    shapes.cylinder(30, 10)
})
shapes.cube(2, 60, 10)
```

## Step 4
Add a ``||Operators:turn||`` block around the ``||Shapes:cube||``. Set the turn type to Z.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(40, 10)
    shapes.cylinder(30, 10)
})
operators.turn(45, RotateAxis.Z, function () {
    shapes.cube(2, 60, 10)
})
```

## Step 5
Add a ``||loops:for||`` block around the ``||Operators:turn||``. Set the loop count to 3.

```blocks
operators.subtractShapes(function () {
shapes.cylinder(40, 10)
shapes.cylinder(30, 10)
})
for (let index = 0; index <= 3; index++) {
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(2, 60, 10)
    })
}
```

## Step 6
Add a ``||Math:✕||`` into the ``||Operators:turn||`` block. Drag the ``||Variables:index||`` from the loop into the ``||Math:✕||`` and set the other number to be 45.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(40, 10)
    shapes.cylinder(30, 10)
})
for (let index = 0; index <= 3; index++) {
    operators.turn(45 * index, RotateAxis.Z, function () {
        shapes.cube(2, 60, 10)
    })
}
```

## Step 7
Add a ``||Shapes:cylinder||`` block. Set the radius to 7.
```blocks
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
```

## Step 8
Add a ``||Operators:add||`` block around all the other blocks.

```blocks
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
```

## Step 9
Add a ``||Shapes:cylinder||`` block. Click the + buttona  few times and set the radius to 2, the height to 50 and radius2 to 5. 

```blocks
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
shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
```

## Step 10
Add a ``||Operators:subtract||`` block around all the other blocks.

This will make a hole in the top for a spindle to go into.

```blocks
operators.subtractShapes(function () {
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
    shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
})
```

## Step 11
To make the spindle add a new ``||Shapes:cylinder||``. Expand the options by clicking + a few times. Set the radius to 5, the height to 50 and radius2 to 2. 

```blocks
operators.subtractShapes(function () {
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
    shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
})
shapes.cylinder(5, 50, 0x4ebed7, 100, 2)
```


## Step 12
Add a ``||Operators:translate||`` block around the new ``||Shapes:cylinder||``. This can be found in the `... more` section of Operators. Set the X value to 50 and the Z value to 20.

```blocks
operators.subtractShapes(function () {
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
    shapes.cylinder(2, 50, 0x4ebed7, 100, 5)
})
operators.translateShapes(50, 0, 20, function () {
    shapes.cylinder(5, 50, 0x4ebed7, 100, 2)
})
```