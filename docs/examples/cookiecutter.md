# Cookie Cutters
Learn how to add and subtract shapes to make a cookie cutter.

![Make a cookie cutter](/docs/static/examples/subtractshapes/project-image.png)

```template
operators.placeOnGround(function () {
    shapes.polygon3D(6, 10, 10)
})
```

## Step 1 @fullscreen
Todays challenge is to turn this hexagon into a cookie cutter. 

In order to do this we need to use a new block, ``||Operators:subtractShapes||``.  

When we subtract shapes - we can cut holes, which leads to more interesting designs. (Click next to continue.)


## Step 2 @fullscreen
![hexagon](/docs/static/examples/cookiecutter/hexagon.png#left-icon)

Subtracting a shape (part 1 of 2)

Add a subtract shapes ``||Operators:subtractShapes||`` block around the ``||Shapes:polygon||`` block.  This will help us cut out the middle of the hexagon.

```blocks
operators.placeOnGround(function () {
    //@highlight
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 10, 10)
    })
})
```

## Step 3 @fullscreen
![hexagon cutout](/docs/static/examples/cookiecutter/hexagon-cutout.png#left-icon)

Subtracting a shape (part 2 of 2)

Place a second ``||Shapes:polygon||`` block in the ``||Operators:subtractShapes||`` block.  Change the radius to **8**.

Tip!  If your object just disappeared - you haven't set the radius yet! 🙃 


```blocks
operators.placeOnGround(function () {
    operators.subtractShapes(function () {
        shapes.polygon3D(6, 10, 10)
        //@highlight
        shapes.polygon3D(6, 8, 10)
    })

})



```

## Step 4
![style edges](/docs/static/examples/cookiecutter/hexagon-styleedges.png#left-icon)

Add some style!  Place a second ``||Operators:styleEdges||`` block around the  ``||Operators:subtractShapes||`` block.  

Play with the edge style, to 'chamfer' or 'fillet' the top of the cookie cutter - this makes the edge easier to hold in your hand.  

Adjust the radius to **0.2** mm, or whatever you think looks great!

```blocks
operators.placeOnGround(function () {
    //@highlight
    operators.styleEdges(EdgeStyle.ConcaveFillet, StyleEdgeDirection.Top, 0.2, function () {
        operators.subtractShapes(function () {
            shapes.polygon3D(6, 10, 10)
            shapes.polygon3D(6, 8, 10)
        })
    })
})
```

## Step 5 @unplugged

Now that you know how to cut out basic shapes - you can build your own by mixing and matching shapes!  

When you are ready to move onto the next project, click finish, then Home in the menu bar.  You could also, save, print or share your project!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)