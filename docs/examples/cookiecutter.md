# Cookie Cutters

Learn how to add and subtract shapes to make a cookie cutter.

![Make a cookie cutter](/docs/static/examples/subtractshapes/project-image.png)



## Step 1 @fullscreen

Place the ``||Shapes:polygon||`` block in the ``||Operators:alignToPrintBed||`` block.

```blocks

operators.alignToPrintBed(function () {
    shapes.polygon3D(6, 10, 10)
})

```

## Step 2 @fullscreen

Add a subtract shapes ``||Operators:subtractShapes||`` block around the ``||Shapes:polygon||`` block.  This will help us cut out the middle of the block.

```blocks
operators.alignToPrintBed(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 10, 10)
    })
})
```

## Step 3 @fullscreen

Place a second ``||Shapes:polygon||`` block in the ``||Operators:subtractShapes||`` block.  Change the radius to 8.

Tip!  If your object just disappeared you haven't set the radius yet! :)


```blocks
operators.alignToPrintBed(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 10, 10)
        shapes.polygon3D(6, 8, 10)
    })

})



```

## Step 4
Add some style!  Place a second ``||Operators:styleEdges||`` block around the  ``||Operators:subtractShapes||`` block.  

Play with the edge style, to 'chamfer' or 'fillet' the top of the cookie cutter - this makes the edge easier to hold in your hand.  

Adjust the radius to .2mm, or whatever you think looks great!

```blocks
operators.alignToPrintBed(function () {
    operators.styleEdges(EdgeStyle.ConcaveFillet, StyleEdgeDirection.Top, 0.2, function () {
        operators.subtractShapes(function () {
            shapes.polygon3D(6, 10, 10)
            shapes.polygon3D(6, 8, 10)
        })
    })
})
```

## Step 5

Now that you know how to cut out basic shapes - you can build your own by mixing and matching shapes!  

Enjoy!
