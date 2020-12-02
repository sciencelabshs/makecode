# Boardgame house

## Introduction @unplugged

Welcome to an Hour of Code with BuildBee MakeCode! 

![Boardgame House]](/docs/static/examples/boardgame-house/project-image.png)

## Step 1 @fullscreen
![cube]](/docs/static/examples/boardgame-house/cube.png#left-icon)

To get started, click on the shapes category and add a ``||Shapes:cube||``. 

This will form the base of our house.

```blocks
shapes.cube(10, 10, 10)
```

## Step 2 @fullscreen
![cube on ground]](/docs/static/examples/boardgame-house/cube-on-ground.png#left-icon)

Our house should sit on the ground!  Add a ``||Operators:place on ground||`` block around the ``||Shapes:cube||``.

This will raise the base of our house to ground level.

```blocks
// @highlight
operators.placeOnGround(function () {
    shapes.cube(10, 10, 10)
})
```

## Step 3 @fullscreen
Adding a roof (part 1 of 2):

We need a roof - but to add it we would like to stack the roof on top.  So add a 
``||Operators:stack shapes||`` around the ``||Shapes:cube||``.


```blocks
operators.placeOnGround(function () {
    // @highlight
    operators.stack(StackDirection.Above, Axis.Z, function () {
     shapes.cube(10, 10, 10)
    })
})
```


## Step 4 @fullscreen
![cube on ground]](/docs/static/examples/boardgame-house/stacked-roof.png#left-icon)
Adding a roof (part 2 of 2):

Add ``||Shapes:roof||`` below the  ``||Shapes:cube||`` block. 

```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {  
        shapes.cube(10, 10, 10)
        // @highlight
        shapes.triangleRoof(10, 10, 10)
    })
})
```



## Step 6 @fullscreen
![below ground]](/docs/static/examples/boardgame-house/below-ground.png#left-icon)

Let's make a chimney! (part 1 of 3)

Add another ``||Shapes:cube||`` to the ``||Loops:on start||`` block.

Set the ``||Shapes:cube||`` size to width: **2** depth: **2** height: **22**.  The cube will poke below the ground!


```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cube(10, 10, 10)
        shapes.triangleRoof(10, 10, 10)
    })
})
// @highlight
shapes.cube(2, 2, 22)
```

## Step 6 @fullscreen
![above ground]](/docs/static/examples/boardgame-house/above-ground.png#left-icon)

Let's make a chimney! (part 2 of 3)

Wrap your chimney ``||Shapes:cube||`` in a  ``||Operators:place on ground||``.

This should raise the chimney to the ground.


```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cube(10, 10, 10)
        shapes.triangleRoof(10, 10, 10)
    })
})
// @highlight
operators.placeOnGround(function () {
    shapes.cube(2, 2, 22)
})
```


## Step 7 @fullscreen
![above ground]](/docs/static/examples/boardgame-house/above-ground.png#left-icon)

Let's make a chimney! (part 3 of 3)

Add a ``||Shapes:move||`` block to move the chimney into place.  Move by **2** mm in the X axis - or anywhere you like!


```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cube(10, 10, 10)
        shapes.triangleRoof(10, 10, 10)
    })
})
operators.placeOnGround(function () {
    //@highlight
    operators.move(2, Axis.X, function () {
        shapes.cube(2, 2, 22)
    })
})
```

## Step Last @unplugged

Wahoo!  Congratulations on finishing boardgame house!

When you are ready to move onto the next project, click finish, then Home in the menu bar. You can also, save, print or share your project!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)






