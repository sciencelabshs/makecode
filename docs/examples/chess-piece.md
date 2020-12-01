
# Chess piece

Make a chess piece in code!


## Step 1 @fullscreen
Add a ``||operators:place on ground||`` block  and place a ``||Shapes:cone||`` in it.  The cone will appear on top of the print bed area. Set the cone height to 20mm.


```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
```


## Step 2 @fullscreen
Add another ``||operators:place on ground||`` block  below the first one. This time add a ``||Shapes:donut||`` block. Set the donut thickness to 3mm.

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
```

## Step 3 @fullscreen
Add a ``||Shapes:sphere||`` block to the bottom of your code and set the radius to 5mm.

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
shapes.sphere(5)
```

## Step 4 @fullscreen
Add an ``||operators.move||`` block around the sphere. Set the move block to 20mm in the z direction

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
operators.move(20, Axis.Z, function () {
    shapes.sphere(5)
})

```

