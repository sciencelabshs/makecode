## Step 1 @unplugged
We are going to use loops and random numbers to make a program that generates a new coaster each time it is run!

## Step 2 @fullscreen
Let's start by adding a rim for the coaster.

Add a ``||operators:place on ground||`` block, a ``||Operators:subtractShapes||`` block and two ``||Shapes:polygon||`` blocks.

Set the polygon to have 6 sides and height 3.

Set polygon 1 to have radius 25.

Set polygon 2 to have radius 24. 


```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 25, 3)
        shapes.polygon3D(6, 24, 3)
    })
})
```

## Step 3
Let's give the coaster a nice flat base.

Add a ``||operators:place on ground||`` block and a ``||Shapes:polygon||`` block.

Set the polygon to have 6 sides, radius 25 and height 1.


```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 25, 3)
        shapes.polygon3D(6, 24, 3)
    })
})
operators.placeOnGround(function () {
    shapes.polygon3D(6, 25, 1)
})
```

## Step 4
Let's add some shapes to the middle of the coaster.

To do this, add ``||operators:place on ground||``, ``||Operators:subtractShapes||`` and two ``||Shapes:polygon||`` blocks.

Set the polygons to have 6 sides and height 3.

Set Polygon 1 to have a radius of 10 and polygon 2 to have a radius of 9.

```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 25, 3)
        shapes.polygon3D(6, 24, 3)
    })
})
operators.placeOnGround(function () {
    shapes.polygon3D(6, 25, 1)
})
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 10, 3)
        shapes.polygon3D(6, 9, 3)
    })
})
```


## Step 5
We can randomize the number of sides of the shape using variables.

Go to Variables and click "Make new variable". Call it "sides".

Now add the ``||Variables:set sides||`` block inside the last ``||Operators.placeOnGround||`` block and set it's value to be a ``||Math:pick random||`` between 3 and 6.

Set both polygon's sides to ``||Variables:sides||``

```blocks
let Sides = 0
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 25, 3)
        shapes.polygon3D(6, 24, 3)
    })
})
operators.placeOnGround(function () {
    shapes.polygon3D(6, 25, 1)
})
operators.placeOnGround(function () {
    Sides = randint(3, 6)
    operators.subtractShapes(function () {
        shapes.polygon3D(Sides, 10, 3)
        shapes.polygon3D(Sides, 10, 3)
    })
})
```

## Step 6
To get multiple shapes we can add a ``||Loops:for||`` block. Set the ``||Loops:for||`` block to run to 4.

We can now set the first polygon to have radius (``||Variables:index||`` ``||Math:+||`` 1) ``||Math:x||`` 4.

Set the second polygon to have radius ((``||Variables:index||`` ``||Math:+||`` 1) ``||Math:x||`` 4) ``||Math:-||`` 1.

```blocks
let Sides = 0
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 25, 3)
        shapes.polygon3D(6, 24, 3)
    })
})
operators.placeOnGround(function () {
    shapes.polygon3D(6, 25, 1)
})
operators.placeOnGround(function () {
    for (let index = 0; index <= 4; index++) {
        Sides = randint(3, 6)
        operators.subtractShapes(function () {
            shapes.polygon3D(Sides, (index + 1) * 4, 3)
            shapes.polygon3D(Sides, (index + 1) * 4 - 1, 3)
        })
    }
})
```

## Step 7
To get your coaster ready for 3D Printing, wrap everything in a ``||Operators:addShapes||`` block.

```blocks
let Sides = 0
operators.addShapes(function () {
    operators.placeOnGround(function () {
        operators.subtractShapes(function () {
            shapes.polygon3D(6, 25, 3)
            shapes.polygon3D(6, 24, 3)
        })
    })
    operators.placeOnGround(function () {
        shapes.polygon3D(6, 25, 1)
    })
    operators.placeOnGround(function () {
        for (let index = 0; index <= 4; index++) {
            Sides = randint(3, 6)
            operators.subtractShapes(function () {
                shapes.polygon3D(Sides, (index + 1) * 4, 3)
                shapes.polygon3D(Sides, (index + 1) * 4 - 1, 3)
            })
        }
    })
})
```

## Step 8
That's it, your coaster is finished!

You can always add some ``||Colors.color||`` blocks in to make your coaster look even cooler!

```blocks
let Sides = 0
operators.addShapes(function () {
    operators.placeOnGround(function () {
        colors.color(colors.rainbowColor(40), function () {
            operators.subtractShapes(function () {
                shapes.polygon3D(6, 25, 3)
                shapes.polygon3D(6, 24, 3)
            })
        })
    })
    operators.placeOnGround(function () {
        colors.color(shapes.chooseColor(0xC3CDE6), function () {
            shapes.polygon3D(6, 25, 1)
        })
    })
    operators.placeOnGround(function () {
        for (let index = 0; index <= 4; index++) {
            Sides = randint(3, 6)
            colors.color(colors.rainbowColor(index), function () {
                operators.subtractShapes(function () {
                    shapes.polygon3D(Sides, (index + 1) * 4, 3)
                    shapes.polygon3D(Sides, (index + 1) * 4 - 1, 3)
                })
            })
        }
    })
})
```