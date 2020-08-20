# Heart shape

## Introduction @unplugged

Learn to add and move shapes around by making a heart.

![Make a heart shape](/docs/static/examples/heart-shape/project-image.png)

## Step 1 @fullscreen

Place the ``||Shapes:cube||`` block in the ``||loops:start||`` block.

```blocks
shapes.cube(10, 10, 10)
```

## Step 2

Set the width to 20 and depth to 20 on the ``||Shapes:cube||`` block.

```blocks
shapes.cube(20, 20, 10)
```

## Step 3

Add a ``||Shapes:cylinder||`` block below your cube.

```blocks
shapes.cube(20, 20, 10)
shapes.cylinder(10, 10)
```

## Step 4

Move the first ``||Shapes:cylinder||`` into the correct position by using the ``||Operators:move shapes across||`` block. 

```blocks
shapes.cube(20, 20, 10)
operators.moveShapesAcross(10, function () {
    shapes.cylinder(10, 10)
})
```

## Step 5

Add a second cylinder using the ``||Shapes:cylinder||`` block.

```blocks
shapes.cube(20, 20, 10)
operators.moveShapesAcross(10, function () {
    shapes.cylinder(10, 10)
})
shapes.cylinder(10,10)
```


## Step 6

Move the second ``||Shapes:cylinder||`` into the correct position by using the ``||Operators:move shapes over||`` block.  

```blocks
shapes.cube(20, 20, 10)
operators.moveShapesAcross(10, function () {
    shapes.cylinder(10, 10)
})
operators.moveShapesOver(10, function () {
    shapes.cylinder(10, 10)
})
```




