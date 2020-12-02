# Name tag

## Introduction @unplugged
Use the text block to make a puffy text name tag!

![Make a name tag](/docs/static/examples/name-tag/project-image.png)

```template
operators.placeOnGround(function () {
})
```

## Step 1 @fullscreen
Let's add text!

Add a ``||Shapes:text||`` block inside the ``||operators:place on ground||`` block.   

For now, leave the text saying "BuildBee" - we will change this at the end. 

```blocks
operators.placeOnGround(function () {
     shapes.text("BuildBee", 21, 4)
})

```



## Step 2 @fullscreen

Click the + to reveal the line width setting. 

Set the line width to **8**.

```blocks
operators.placeOnGround(function () {
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
})
```

## Step 3 
Add another ``||Shapes:text||`` block. 

Set the height to **2** and set the line width to **18**.

This will be the taller text in the middle.

```blocks
operators.placeOnGround(function () {
    shapes.text("BuildBee", 21, 4, shapes.chooseColor(0x4ebed7), 8)
    //@highlight
    shapes.text("BuildBee", 21, 2, shapes.chooseColor(0x4ebed7), 18)
})

```

## Step 4
Make a loop for a string or keyring to pass through. 

Add a ``||Shapes:cylinder||`` block.

Set the radius to **10** mm, and height to **2** mm.

We will cut out the inside of the loop later.

```blocks
operators.placeOnGround(function () {
    shapes.text("BuildBee", 21, 4, shapes.chooseColor(0x4ebed7), 8)
    shapes.text("BuildBee", 21, 2, shapes.chooseColor(0x4ebed7), 18)
    //@highlight
    shapes.cylinder(10, 2)
})
```

## Step 5 @fullscreen

Use two move blocks to move the  ``||Shapes:cylinder||`` to the correct position:
1st move block: **12** mm **X** direction
2nd move block: **24** mm **Y** direction

At the end the cylinder should be where you can see it, but it won't have a hole yet.

```blocks
operators.placeOnGround(function () {
    shapes.text("BuildBee", 21, 4, shapes.chooseColor(0x4ebed7), 8)
    shapes.text("BuildBee", 21, 2, shapes.chooseColor(0x4ebed7), 18)

    //@highlight
    operators.move(24, Axis.Y, function () {
        // @highlight
        operators.move(12, Axis.X, function () {
            shapes.cylinder(10, 2)
        })
    }) 
})
```

## Step 6 @fullscreen
Cut the hole for the string to go through (part 1 of 2).  

Add a second cylinder that will form the inside of the loop.

```blocks  
operators.placeOnGround(function () {
    shapes.text("BuildBee", 21, 4, shapes.chooseColor(0x4ebed7), 8)
    shapes.text("BuildBee", 21, 2, shapes.chooseColor(0x4ebed7), 18)
    operators.move(24, Axis.Y, function () {
        operators.move(12, Axis.X, function () {
            shapes.cylinder(10, 2)
            //@highlight
            shapes.cylinder(5, 2)
        })
    }) 
})
```
  
## Step 7 @fullscreen
Cut the hole for the string to go through (part 2 of 2).  

Cut away the inner cylinder by wrapping both ``||Shapes:cylinder||`` blocks in a ``||Operators:subtract shapes||`` block. 

```blocks  
operators.placeOnGround(function () {
    shapes.text("BuildBee", 21, 4, shapes.chooseColor(0x4ebed7), 8)
    shapes.text("BuildBee", 21, 2, shapes.chooseColor(0x4ebed7), 18)
    operators.move(24, Axis.Y, function () {
        operators.move(12, Axis.X, function () {
            //@highlight
            operators.subtractShapes(function () {
                shapes.cylinder(10, 2)
                shapes.cylinder(5, 2)
            })
        })
    }) 
})
```

## Step 8 @fullscreen
Make it your own!  Now that you have a working nametag - change BuildBee in the ``||Shapes:text||`` blocks to whatever name you'd like.  

After you change the text, you may also need to adjust the X and Y position on your ``||Operators:move||`` blocks to recenter everything.


## Step Last @unplugged
Nice work!!! 🤩

 When you are ready to move onto the next project, click finish, then Home in the menu bar. You can also, save, print or share your project!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)
