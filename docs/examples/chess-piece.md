# Chess piece

Make a chess piece in code!

![Make chess piece](/docs/static/examples/chess-piece/project-image.png?v=DOCVER-1)


## Step 1 
![cone](/docs/static/examples/chess-piece/cone.png#left-icon)

Let's make the base of the chess piece.

Add a ``||Shapes:cone||`` the ``||Loops:on start||`` block.  

Set the cone radius **10** and height to **20** mm.

```blocks
    shapes.cone(10, 20)
```

## Step 1 @fullscreen
![cone above ground]](/docs/static/examples/chess-piece/cone-above-ground.png#left-icon)

The cone will be below the ground.  Let's add a ``||operators:place on ground||`` around it to raise the block.


```blocks
//@highlight
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
```


## Step 2 @fullscreen
![donut](/docs/static/examples/chess-piece/donut.png#left-icon)

Let's decorate the base.

Add a ``||Shapes:donut||`` beneath the ``||operators:place on ground||`` block.

Set the donut thickness to **3** mm.

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
//@highlight
shapes.donut(3, 10)
```

## Step 3 @fullscreen
![donut above ground](/docs/static/examples/chess-piece/donut-above-ground.png#left-icon)

We need to sit the donut on the ground too.  

Grab another ``||operators:place on ground||`` block and put it around the ``||shapes:donut||`` to raise it.


```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
//@highlight
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
```


## Step 4 @fullscreen
![sphere](/docs/static/examples/chess-piece/sphere.png#left-icon)

Let's make the top of the chess piece.

Add a ``||Shapes:sphere||`` block to the bottom of your code.

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
//@highlight
shapes.sphere(20)
```

## Step 5 @fullscreen
![sphere moved resized](/docs/static/examples/chess-piece/sphere-moved-resized.png#left-icon)

The sphere is bigger than the chess piece!

Set the ``||Shapes:sphere||`` to radius **5**

Then add a move``||operators.move||`` block around the sphere. 
Set the ``||operators.move||`` block to **20** mm in the **Z** direction.


```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
//@highlight
operators.move(20, Axis.Z, function () {
    shapes.sphere(5)
})

```

## Step Last @unplugged
Checkmate!  You just made a chess piece!  

 When you are ready to move onto the next project, click finish, then Home in the menu bar. You can also, save, print or share your project!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)

