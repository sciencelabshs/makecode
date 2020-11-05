# Cookie Cutters

Learn how to add and subtract shapes to make a cookie cutter.

![Make a cookie cutter](/docs/static/examples/subtractshapes/project-image.png)



## Step 1 @fullscreen

Place the ``||Shapes:cube||`` block in the ``||loops:start||`` block.

```blocks
shapes.cube(10, 10, 10)
```

## Step 2

Set the width to 60 and depth to 60 on the ``||Shapes:cube||`` block.

```blocks
shapes.cube(60, 60, 20)
```

## Step 3
Place a second ``||Shapes:cube||`` block in the ``||loops:start||`` block with the same settings as the previous one.
```blocks
shapes.cube(60, 60, 20)
shapes.cube(60, 60, 20)
```

## Step 4
Place a ``||Operators:turn||`` block in the ``||loops:start||`` block and move the second ``||Shapes:cube||`` blocks inside.
```blocks
shapes.cube(60, 60, 20)
operators.turn(45, RotateAxis.X, function () {
    shapes.cube(60, 60, 20)
})
```

## Step 5
Set the turn type to Z. 
```blocks
shapes.cube(60, 60, 20)
operators.turn(45, RotateAxis.Z, function () {
    shapes.cube(60, 60, 20)
})
```

## Step 6
Place a ``||Operators:add||`` block in the ``||loops:start||`` block and move the ``||Shapes:cube||`` and ``||Operators:turn||`` blocks inside.

```blocks
operators.addShapes(function () {
    shapes.cube(60, 60, 20)
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(60, 60, 20)
    })
})
```

## Step 7
Place a third ``||Shapes:cube||`` in the ``||loops:start||`` block. Set the width to 55, the depth to 55.
```blocks
operators.addShapes(function () {
    shapes.cube(60, 60, 20)
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(60, 60, 20)
    })
})
shapes.cube(55, 55, 20)
```

## Step 8
Place a fourth ``||Shapes:cube||`` in the ``||loops:start||`` block with the same settings.
```blocks
operators.addShapes(function () {
    shapes.cube(60, 60, 20)
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(60, 60, 20)
    })
})
shapes.cube(55, 55, 20)
shapes.cube(55, 55, 20)
```

## Step 9
Place a ``||Operators:turn||`` block in the ``||loops:start||`` block and move the fourth ``||Shapes:cube||`` blocks inside. 
```blocks
operators.addShapes(function () {
    shapes.cube(60, 60, 20)
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(60, 60, 20)
    })
})
shapes.cube(55, 55, 20)
operators.turn(45, RotateAxis.X, function () {
    shapes.cube(55, 55, 20)
})
```

## Step 10
Set the new ``||Operators:turn||`` to have turn type Z. 
```blocks
operators.addShapes(function () {
    shapes.cube(60, 60, 20)
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(60, 60, 20)
    })
})
shapes.cube(55, 55, 20)
operators.turn(45, RotateAxis.Z, function () {
    shapes.cube(55, 55, 20)
})
```

## Step 11
Place a ``||Operators:subtract||`` block in the ``||loops:start||`` block and move all the other blocks inside.
```blocks
operators.subtractShapes(function () {
    operators.addShapes(function () {
        shapes.cube(60, 60, 20)
        operators.turn(45, RotateAxis.Z, function () {
            shapes.cube(60, 60, 20)
        })
    })
    shapes.cube(55, 55, 20)
    operators.turn(45, RotateAxis.Z, function () {
        shapes.cube(55, 55, 20)
    })
})
```