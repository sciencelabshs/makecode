# Chess piece

Make a chess piece in code!

![Make chess piece](/docs/static/examples/chess-piece/project-image.png?v=DOCVER-1)


## Step 1 
Let's make the base of the chess piece.

Add a ``||Shapes:cone||`` the ``||Loops:on start||`` block.  

Set the cone radius **10** and height to **20** mm.

```blocks
    shapes.cone(10, 20)
```

## Step 1 @fullscreen

The cone will be below the ground.  Let's add a ``||operators:place on ground||`` around it to raise the block.


```blocks
//@highlight
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
```


## Step 2 @fullscreen
Let's decorate the base.

Add a ``||Shapes:donut||`` beneath the ``||operators:place on ground||`` block.

Set the donut thickness to **3**mm.

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
//@highlight
shapes.donut(3, 10)
```

## Step 3 @fullscreen
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
Let's make the top of the chess piece.

Add a ``||Shapes:sphere||`` block to the bottom of your code and set the radius to **5**mm.

```blocks
operators.placeOnGround(function () {
    shapes.cone(10, 20)
})
operators.placeOnGround(function () {
    shapes.donut(3, 10)
})
//@highlight
shapes.sphere(5)
```

## Step 5 @fullscreen
Add an ``||operators.move||`` block around the sphere. Set the move block to **20** mm in the **Z** direction

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
Sweet!  You just made a chess piece!  

Below are some things you could do next. When you are ready to move onto the next project, click finish, then Home in the menu bar.

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)

