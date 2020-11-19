# Rainbow Vase

## Step 1 @unplugged
We are going to make an awesome rainbow vase.

Our vase will be made out of a tower of polygons that change in size. 

## Step 2 @fullscreen

Let's start by adding a ``||Loops:for||`` block. Set it to go to 27.

Then add a ``||Shapes.polygon||`` block and set the sides to 7, the height to 10 and the radius to 20 ``||Math:+||`` ``||Variables:index||``.

```blocks
for (let index = 0; index <= 27; index++) {
    shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
}
```

## Step X
To make our vase increase in height we need to add an ``||Operators:move||`` block around the ``||Shapes.polygon||``.

Set the direction to Z and the value to ``||Variables:index||`` ``||Math:X||`` 3.

```blocks
for (let index = 0; index <= 27; index++) {
    operators.move(index * 3, Axis.Z, function () {
        shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
    })
}
```

## Step X
Let's add a twist to the vase. To let us control the twist easily we can add a variable. 

Go to Variables and click "Make a variable". Call it spin. Now drag the ``||Variables:set spin||`` block to the top of the code and set it to 10.

Finally, wrap the ``||Shapes:polygon||`` block with a ``||Operators:turn||`` block. Set the turn axis to Z and the value to ``||Variables:index||`` ``||Math:X||`` ``||Variables:spin||``.

```blocks
let spin = 10
for (let index = 0; index <= 27; index++) {
    operators.move(index * 3, Axis.Z, function () {
        operators.turn(index * spin, RotateAxis.Z, function () {
            shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
        })
    })
}
```


## Step X
Let's smooth out the vase by wrapping a ``||Operators:styleEdges||`` block around the ``||Shapes:polygon||`` block. 

Set sides to bottom and radius to 10mm.
```blocks
let spin = 10
for (let index = 0; index <= 27; index++) {
    operators.move(index * 3, Axis.Z, function () {
        operators.turn(index * spin, RotateAxis.Z, function () {
            operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Bottom, 10, function () {
                shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
            })
        })
    })
}
```

## Step X
To make the vase look pretty, lets make it a rainbow.

Wrap the ``||Operators:styleEdges||`` block with a ``||Colors:color||`` block.

Set the color to ``||Colors:rainbowColor||`` block. Set the ``||Colors:rainbowColor||`` value to be ``||Variables:index||``.

```blocks
let spin = 10
for (let index = 0; index <= 27; index++) {
    operators.move(index * 3, Axis.Z, function () {
        operators.turn(index * spin, RotateAxis.Z, function () {
            colors.color(colors.rainbowColor(index), function () {
                operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Bottom, 10, function () {
                    shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
                })
            })
        })
    })
}
```

## Step X
To get ready for 3D printing wrap everything in ``||Operators:placeOnGround||`` and ``||Operators:addShapes||`` blocks.

This ensures everything is joined together and is lying flat on the ground.
```blocks
let spin = 10
operators.placeOnGround(function () {
    operators.addShapes(function () {
        for (let index = 0; index <= 27; index++) {
            operators.move(index * 3, Axis.Z, function () {
                operators.turn(index * spin, RotateAxis.Z, function () {
                    colors.color(colors.rainbowColor(index), function () {
                        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Bottom, 10, function () {
                            shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
                        })
                    })
                })
            })
        }
    })
})
```

## Step X
We can make the vase adjustable by adding a parameter. Add a ``||Parameters:range||`` block to the ``||Variables:set||`` block for spin. This will add a slider we can adjust.

Click the + button a few times to set up the slider. Set the default to 10, the min to 0 and the max to 50.

You can now open the parameters menu by clicking the settings button at the bottom of the 3D view. Have a play with the slider, and don't forget to click the update button for your changes to take effect.

If you go to 3D print this model, make sure you use Vase Mode so that it prints without a top!

```blocks
let spin = parameters.numberRangeParameter("spin", 10, 0, 360 / 7, 1)
operators.placeOnGround(function () {
    operators.addShapes(function () {
        for (let index = 0; index <= 27; index++) {
            operators.addShapes(function () {
                operators.move(index * 3, Axis.Z, function () {
                    operators.turn(index * spin, RotateAxis.Z, function () {
                        colors.color(colors.rainbowColor(index), function () {
                            operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Bottom, 10, function () {
                                shapes.polygon3D(7, 20 + index, 10, shapes.__colorNumberPicker2(0x4ebed7))
                            })
                        })
                    })
                })
            })
        }
    })
})
```