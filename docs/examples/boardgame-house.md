# Boardgame house

## Introduction @unplugged

Learn to stack shapes around by making a boardgame house.


![Make a heart shape](/docs/static/examples/boardgame-house/project-image.png)

## Step 1 @fullscreen
Add a ``||Operators:stackShapes||`` in the ``||loops:alignToPrintBed||`` block.  Shapes placed inside this block will stack on top of one another.


```blocks
operators.alignToPrintBed(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
    
    })
})
```


## Step 2 @fullscreen

Add a ``||Shapes:cube||`` to the ``||Operators:stackShapes||`` block.

```blocks
operators.alignToPrintBed(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {  
        shapes.cube(10, 10, 10)
    })
})
```

## Step 3 @fullscreen

Add ``||Shapes:roof||`` below the  ``||Shapes:cube||`` block.

```blocks
operators.alignToPrintBed(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {  
        shapes.cube(10, 10, 10)
        shapes.triangleRoof(10, 10, 10)
    })
})
```



## Step 4 @fullscreen

Let's make a chimney!

Add another the ``||Shapes:cube||``.
Set the size to width: 2 depth: 2 height: 20.  Dont forget to make the block tall enough so it pokes through the roof!

```blocks
operators.alignToPrintBed(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cube(10, 10, 10)
        shapes.triangleRoof(10, 5, 10)
    })


    shapes.cube(2, 2, 20)
})
```

## Step 5 @fullscreen
Use the ``||Shapes:move||`` blocks to position the chimney to the side.  Move by 2mm in the X axis - or anywhere you like!


```blocks
operators.alignToPrintBed(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cube(10, 10, 10)
        shapes.triangleRoof(10, 5, 10)
    })
    operators.move(2, Axis.X, function () {
        shapes.cube(2, 2, 20)
    })
})
```

