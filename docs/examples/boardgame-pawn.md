
# Boardgame pawn

Make a pawn for a boardgame in code!


## Step 1 @fullscreen
Add a ``||Shapes:cone||`` in the ``||Operators:alignToPrintBed||`` block.  The cone will appear on top of the print bed area.


```blocks
operators.alignToPrintBed(function () {
    shapes.cone(10, 20)
})
```


## Step 2 @fullscreen
Add a ``||Shapes:sphere||`` below the ``||Shapes:cone||`` block. Set the radius to 5 mm. The sphere will be in the wrong spot but we'll move it next!

```blocks
operators.alignToPrintBed(function () {
     shapes.cone(10, 20)
     shapes.sphere(5)
})
```

## Step 3 @fullscreen
Add the  ``||Operators:move||`` around  the ``||Shapes:sphere||`` block.    Move in the Z axis by 18mm.

```blocks
operators.alignToPrintBed(function () {
    shapes.cone(10, 20)
    operators.move(18, Axis.Z, function () {
        shapes.sphere(5)
    })
})
```

## Step 4 @fullscreen
Add a  ``||Shapes:donut||`` to the bottom of your project.    Set the thickness to 3 and the radius to 10.

```blocks
operators.alignToPrintBed(function () {
    shapes.cone(10, 20)
    operators.move(18, Axis.Z, function () {
        shapes.sphere(5)
    })
    shapes.donut(3, 10)
})
```

