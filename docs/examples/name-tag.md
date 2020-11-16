# Name tag

## Introduction @unplugged

Learn to use text to create a name tag.

![Make a name tag](/docs/static/examples/name-tag/project-image.png)

## Step 1 @fullscreen

Place the ``||Shapes:text||`` block in the ``||Operators:alignToPrintBed||`` block.  For now, leave the text saying "BuildBee" - we will change this at the end. 

```blocks
operators.alignToPrintBed(function () {
     shapes.text("BuildBee", 21, 4)
})

```



## Step 2 @fullscreen

Click the + button twice to reveal the line width setting. Set the line width to 8.
```blocks
operators.alignToPrintBed(function () {
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
})
```

## Step 3 @fullscreen
Add another ``||Shapes:text||`` block in the ``||Operators:alignToPrintBed||`` block. Change the text to "BuildBee" field, set the height to 2 and set the line width to 18.

```blocks
operators.alignToPrintBed(function () {
    shapes.text("BuildBee", 21, 4, shapes.__colorNumberPicker2(0x4ebed7), 8)
    shapes.text("BuildBee", 21, 2, shapes.__colorNumberPicker2(0x4ebed7), 18)
})

```

## Step 4 @fullscreen
Make a loop for a string or keyring to pass through. 

Add a ``||Shapes:cylinder||`` block in the in the ``||Operators:alignToPrintBed||`` block.   Set the radius to 10mm, and height to 2mm.

We will cut out the inside of the loop later.

## Step 5 @fullscreen

Use two move blocks to move the  ``||Shapes:cylinder||`` to the correct position - one to move in the X direction by 12, one to move in the Y direction by 24. 

At the end the cylinder should be where you can see it, but it won't have a hole yet.

```blocks
 operators.alignToPrintBed(function () {
    shapes.text("BuildBee", 21, 4, shapes.__colorNumberPicker2(0x4ebed7), 8)
    shapes.text("BuildBee", 21, 2, shapes.__colorNumberPicker2(0x4ebed7), 18)
     operators.move(24, Axis.Y, function () {
        operators.move(12, Axis.X, function () {
            shapes.cylinder(10, 2)
        })
     }) 
       
})
```

## Step 6 @fullscreen

Cut the hole for the string to go through (part one of two).  Add a second cylinder that will form the inside of the loop.

```blocks  
  operators.alignToPrintBed(function () {
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
    shapes.text("BuildBee", 21, 2, 0x4ebed7, 18)
    operators.move(24, Axis.Y, function () {
        operators.move(12, Axis.X, function () {
            shapes.cylinder(10, 2)
            shapes.cylinder(5, 4)
        
        })
    })
})
```
  
## Step 7 @fullscreen

Cut the hole for the string to go through (part two of two).  Cut away the inner cylinder by wrapping both ``||Shape:cylinder||`` blocks in a ``||Operators:subtractShapes||`` block. 

```blocks  
  operators.alignToPrintBed(function () {
    shapes.text("BuildBee", 21, 4, 0x4ebed7, 8)
    shapes.text("BuildBee", 21, 2, 0x4ebed7, 18)
    operators.move(24, Axis.Y, function () {
        operators.move(12, Axis.X, function () {
            operators.subtractShapes(function () {
                shapes.cylinder(10, 2)
                shapes.cylinder(5, 4)
            })
        })
    })
})
```

## Step 7 @fullscreen

Make it your own!  Now that you have a working nametag - change BuildBee in the text blocks to whatever name you'd like.  You may also want to adjust the X and Y location of the loop.

Have fun!
