# Heart shape

## Introduction @unplugged

Welcome to an Hour of Code with BuildBee!  

BuildBee MakeCode works by adding shapes together to create 3D printable parts.   This is a quick example of how to combine three shapes to make a heart!

![Make a heart shape](/docs/static/examples/heart-shape/project-image.png?v=DOCVER-1)



## Step 1 @fullscreen
![cube]](/docs/static/examples/heart-shape/cube.png#left-icon)

Add a ``||shapes:cube||`` block. This will form the point of our heart.

```blocks
shapes.cube(10, 10, 10)
```

## Step 2 @unplugged
If you're new to block coding here are two quick tips before we continue.

### Dragging blocks
Always grab blocks by their name - e.g. click the word 'cube' to drag the cube.
![drag by the word](/docs/static/examples/heart-shape/drag-by-the-word.png?v=DOCVER-1)

### The bottoms of blocks are magnetic
The bottoms of blocks really want to the top of the block below. If you want to move a stack of blocks, always grab the first block in the stack. 

### Putting blocks inside blocks
Putting a block inside a blocks can be a bit tricky the first few times - but you quickly get the hang of it!  BuildBee MakeCode has a lot of these blocks so it is worth practing. 

![Place on ground](/docs/static/examples/heart-shape/place-on-ground-animation.gif?v=DOCVER-1)


## Step 3
![cube on ground]](/docs/static/examples/heart-shape/cube-on-ground.png#left-icon)
The cube seems to be hanging out below ground.  We can fix this by placing it on the ground.  

Add a ``||operators:place on ground||`` block around the ``||shapes:cube||``.
This will raise all the shapes inside to sit on the ground. 


```blocks
//@highlight
operators.placeOnGround(function () {
    shapes.cube(10, 10, 10)
})
```

## Step 3
![cube on ground]](/docs/static/examples/heart-shape/bigger-cube.png#left-icon)
Make the cube bigger.

On the ``||Shapes:cube||`` block: 
Set the width **20** depth  **20** and height **10**.

```blocks
operators.placeOnGround(function () {
    //@highlight
    shapes.cube(20, 20, 10)
})
```

## Step 4
![cube on ground]](/docs/static/examples/heart-shape/bigger-cube.png#left-icon)
Let's start forming the top of the heart. 

Add a ``||Shapes:cylinder||`` block to your code underneath the ``||Shapes:cube||`` block. 

(It won't show up yet because it will be stuck inside the big cube.)

```blocks
operators.placeOnGround(function () {
    shapes.cube(20, 20, 10)
    //@highlight
    shapes.cylinder(10, 10)
})
```

## Step 5
![start of heart top]](/docs/static/examples/heart-shape/first-cylinder-after-move.png#left-icon)
Let's start forming the top of the heart. 

Move the ``||Shapes:cylinder||`` into the correct position by using the ``||Operators:move||`` block.  

Move **10** mm in the **X** direction.

```blocks
operators.placeOnGround(function () {
    shapes.cube(20, 20, 10)
    //@highlight
    operators.move(10, Axis.X, function () {
        shapes.cylinder(10, 10)
    })
})
```

## Step 6
![start of heart top]](/docs/static/examples/heart-shape/first-cylinder-after-move.png#left-icon)

Add a second cylinder using the ``||Shapes:cylinder||`` block. 

(We wont see it yet because it is stuck inside the cube.)

```blocks
operators.placeOnGround(function () {
    shapes.cube(20, 20, 10)
    operators.move(10, Axis.X, function () {
        shapes.cylinder(10, 10)
    })
    //@highlight
    shapes.cylinder(10,10)
})
```


## Step 7

Move the second ``||Shapes:cylinder||`` into the correct position by using the ``||Operators:move||`` block.  Move **10** mm in the **Y** direction.

```blocks
operators.placeOnGround(function () {
    shapes.cube(20, 20, 10)
    operators.move(10, Axis.Y, function () {
        shapes.cylinder(10, 10)
    })
    operators.move(10, Axis.Y, function () {
        shapes.cylinder(10, 10)
    })
})
```


## Step 8 @unplugged

Wahoo!  Congratulations on finishing the heart shape!

 When you are ready to move onto the next project, click finish, then Home in the menu bar. You can also, save, print or share your project!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)

