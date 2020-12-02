# Looping Towers

Learn to loop making a tower!

## Step 1 @fullscreen
Start building the base of the tower.  We will stack cylinders, so we need the stack shapes block.

Add a ``||operators:place on ground||`` block with a ``||operators:stack shapes||`` block inside.  

```blocks
operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
          
        })
})
```


## Step 2 @fullscreen
Make a basic tower using cylinders. 

Add two ``||Shapes:cylinder||`` blocks to the ``||operators:place on ground||`` block.  

First cylinder - radius 10, height 30

Second cylinder - radius 12, height 10

```blocks
operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            shapes.cylinder(10, 30)
            shapes.cylinder(12, 10)
        })
})
```

## Step 3 @fullscreen
Start to make the hole that will be cut out of the roof.  

Below the ``||operators:stack shapes||`` block, add a ``||Operators:move||`` block.   ``||Operators:move||``  a new ``||Shapes:cylinder||`` block.

Move the new cylinder up 25mm in Z axis.

```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cylinder(10, 30)
        shapes.cylinder(12, 10)
    })
    operators.move(25, Axis.Z, function () {
        shapes.cylinder(10, 10)
    })
})
```

## Step 4 @fullscreen
Cut the hole in the roof by adding a ``||Operators:subtractShapes||`` block around the ``||operators:place on ground||``

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            shapes.cylinder(10, 30)
            shapes.cylinder(12, 10)
        })
        operators.move(25, Axis.Z, function () {
            shapes.cylinder(10, 10)
        })
    })
})
```

## Step 5 @fullscreen
Lets decorate the wall by cutting out crenellations at the top.  We will use a cube to do that.

Add a ``||Shapes:cube||`` with width: 4, depth: 30, and height: 10.

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            shapes.cylinder(10, 30)
            shapes.cylinder(12, 10)
        })
        operators.move(25, Axis.Z, function () {
            shapes.cylinder(10, 10)
            shapes.cube(4, 30, 10)
        })
    })
})
```


## Step 6 @fullscreen
Turn the cube 45 degrees by wrapping the ``||Shapes:cube||`` in a ``||Operators:turn||`` block. Make sure the turn axis is set to Z.

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            shapes.cylinder(10, 30)
            shapes.cylinder(12, 10)
        })
        operators.move(25, Axis.Z, function () {
            shapes.cylinder(10, 10)
            operators.turn(45, RotateAxis.Z, function () {
                shapes.cube(4, 30, 10)
            })
        })
    })
})
```

## Step 7 @fullscreen
Make the crenellations (part 1 of 2)

Add a ``||loops:for||`` loop and wrap it around the ``||Shapes.cube||`` 

Set the for loop to go to 7.  This will make 8 cubes because it counts 0,1,2,3,4,5,6,7.

We wont be able to see all the cutouts yet! (See next step.)

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            shapes.cylinder(10, 30)
            shapes.cylinder(12, 10)
        })
        operators.move(25, Axis.Z, function () {
            shapes.cylinder(10, 10)
            for (let index = 0; index <= 8; index++) {
                operators.turn(index * (360 / 8), RotateAxis.Z, function () {
                    shapes.cube(4, 30, 10)
                })
            }
        })
    })
})
```

## Step 8 @fullscreen
Make the crenellations (part 2 of 2).   All the cubes are currently overlapping at 45 degrees.  

We want the first cube to turn 0, the second to turn 45, third to turn 90 - so that we can see them all. 

Add a ``||Math:multiply||`` loop and put it into the ``||Operators.turn||`` 

Set the multiply to be 45 * ``||Variables:index||``. 

```blocks
operators.subtractShapes(function () {
    operators.placeOnGround(function () {
        operators.stack(StackDirection.Above, Axis.Z, function () {
            shapes.cylinder(10, 30)
            shapes.cylinder(12, 10)
        })
        operators.move(25, Axis.Z, function () {
            shapes.cylinder(10, 10)
            for (let index = 0; index <= 7; index++) {
                operators.turn(index * 45, RotateAxis.Z, function () {
                    shapes.cube(4, 30, 10)
                })
            }
        })
    })
})
```

## Step 9

Optional: Add some style!

Click the plus button on the first ``||shapes.cylinder||`` in the project until you find a "radius2".  

You can change this to be **8** to taper in the sides of the base to make it feel more cone-like.

## Step 10
Way to go!  For loop 👑 of the castle! 
 
 When you are ready to move onto the next project, click finish, then Home in the menu bar. You can also, save, print or share your project!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)