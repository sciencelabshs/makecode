# Impossible

Learn how to add and subtract shapes to make an impossible box.

![Make an impossible box](/docs/static/examples/impossible-box/project-image.png)



## Step 1 @fullscreen

Add a ``||Operators:placeOnGround||``  and place a ``||Shapes:cube||`` block inside.

Set the width to 50, depth to 50 and height to 50

```blocks

operators.placeOnGround(function () {
    shapes.cube(50, 50, 50)
})

```

## Step 2 @fullscreen

Add a subtract shapes ``||Operators:subtractShapes||`` block around the ``||Shapes:cube||`` block.  This will help us cut out the middle of the cube.

```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.cube(50, 50, 50)
    })
})
```

## Step 3 @fullscreen
Add 3 more ``||Shapes:cube||`` blocks in the ``||Operators:subtractShapes||`` block. 

Cut through the main cube by setting the sizes of the cubes.

* First cube: 50, 50, 50
* Second cube: 40, 40, 80
* Third cube: 80, 40, 40
* Fourth cube: 80, 40, 40


```blocks
operators.placeOnGround(function () {
   operators.subtractShapes(function () {
            shapes.cube(50, 50, 50)
            shapes.cube(40, 40, 80)
            shapes.cube(80, 40, 40)
            shapes.cube(40, 80, 40)
    })

})
```

## Step 4 @fullscreen
Add a ``||Shapes:sphere||`` to the center.  Set the radius to 22mm.
Since the cube cutouts are 40mm, the sphere will be 44mm, and won't be able to escape the box!

```blocks
operators.placeOnGround(function () {
   operators.subtractShapes(function () {
            shapes.cube(50, 50, 50)
            shapes.cube(40, 40, 80)
            shapes.cube(80, 40, 40)
            shapes.cube(40, 80, 40)
    })
    shapes.sphere(22)
})
```

## Step 5 @fullscreen
Prepare for 3D printing.  Because this model has a lot of overhanging parts, it will print best if it is rotated 45 degrees. 

Note when you go to print, you will need to print with supports and brim (if available). 

Add a ``||operators:turn||`` block and turn by 45 degrees in the x axis

```blocks
operators.placeOnGround(function () {
    operators.turn(45, RotateAxis.X, function () {
        operators.subtractShapes(function () {
            shapes.cube(50, 50, 50)
            shapes.cube(40, 40, 80)
            shapes.cube(80, 40, 40)
            shapes.cube(40, 80, 40)
        })
        shapes.sphere(22)
    })
})
```
## Step 6 @fullscreen
You're ready to print!  (Approx print time: 2.5h)

Either download to STL or directly print to your 3D printer using BuildBee by pressing the download button in the simulator.  Dont forget to add supports!