# Name tag

## Introduction @unplugged

Learn to use text to create a name tag.

![Make a name tag](/docs/static/examples/name-tag/project-image.png)

## Step 1 @fullscreen

Place the ``||Shapes:text||`` block in the ``||loops:start||`` block.

```blocks
    shapes.text("text", 21, 4)
```

## Step 2

Put your name in the text field

```blocks
    shapes.text("BuildBee", 21, 4)
```


## Step 3

Click the + button twice to reveal the line width setting. Set the line width to 8.
```blocks
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
```

## Step 4
Add another ``||Shapes:text||`` block in the ``||loops:start||`` block. Put your name in the text field, set the height to 2 and set the line width to 18.

```blocks
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
    shapes.text("BuildBee", 21, 2, 0x4ebed7, 18)
```

## Step 5
Add a ``||Operators:move||`` block around both ``||Shapes:text||`` blocks and move the text 25mm in the Y direction. 
```blocks
operators.move(25, Axis.Y, function () {
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
    shapes.text("BuildBee", 21, 2, 0x4ebed7, 18)
})
```

## Step 6
Add a ``||Shapes:cylinder||`` block to the ``||loops:start||`` block. Set the radius to 10 and the height to 2.
```blocks
operators.move(25, Axis.Y, function () {
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
    shapes.text("BuildBee", 21, 2, 0x4ebed7, 18)
})
shapes.cylinder(10, 2)
```

## Step 7
Add a ``||Operators:add||`` block around the other blocks.
```blocks
operators.addShapes(function () {
    operators.move(25, Axis.Y, function () {
        shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
        shapes.text("BuildBee", 21, 2, 0x4ebed7, 18)
    })
    shapes.cylinder(10, 2)
})
```

## Step 8
Add a ``||Shapes:cylinder||`` block to the ``||loops:start||`` block: Set the radius to 5 and the height to 4.
```blocks
operators.addShapes(function () {
    operators.move(25, Axis.Y, function () {
        shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
        shapes.text("BuildBee", 21, 2, 0x4ebed7, 18, 1, 1.4)
    })
    shapes.cylinder(10, 2)
})
shapes.cylinder(5, 4)
```


## Step 8
Add a ``||Operators:subtract||`` block around all the other blocks.
```blocks
operators.subtractShapes(function () {
    operators.addShapes(function () {
        operators.move(25, Axis.Y, function () {
            shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
            shapes.text("BuildBee", 21, 2, 0x4ebed7, 18, 1, 1.4)
        })
        shapes.cylinder(10, 2)
    })
    shapes.cylinder(5, 4)
})
```
