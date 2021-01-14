![Rainbow Color](/docs/reference/colors/rainbow.png?v=DOCVER-1) 
### Rainbow Color
```sig 
colors.rainbowColor(0)
```
Chooses a color from the rainbow.

**Options:**
* **rainbowColor** - how many color wheel incremenent steps to jump

**Advanced Options:** - click (+) to expand
* **colorWheelIncrement** - the number of degrees to jump around the color wheel


### The simplest way to use rainbow color
![Rainbow Blocks ](/docs/reference/colors/rainbow-blocks.png?v=DOCVER-1)

We can stack 4 blocks on top of each other, and keep calling the next
rainbow color.

```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        shapes.cube(10, 10, 10, colors.rainbowColor(0))
        shapes.cube(10, 10, 10, colors.rainbowColor(1))
        shapes.cube(10, 10, 10, colors.rainbowColor(2))
        shapes.cube(10, 10, 10, colors.rainbowColor(3))
    })
})
```


### Using rainbow color with loops - just use index!
Using a ``||loops:for||`` loop, we can use the index to count from 0 to 3 for us.  To do this, use the ``||variables:index||`` inside the ``||colors:rainbow color||`` block.

```blocks
operators.placeOnGround(function () {
    operators.stack(StackDirection.Above, Axis.Z, function () {
        for (let index = 0; index <= 3; index++) {
            shapes.cube(10, 10, 10, colors.rainbowColor(index))
        }
    })
})

```


### How does it work?

![Rainbow Color 20 degrees](/docs/reference/colors/rainbow-colorwheel.png?v=DOCVER-1) 
```blocks
operators.placeOnGround(function () {
    for (let index = 0; index <= 17; index++) {
        shapes.arc(10, 10, index * 20, (index + 1) * 20, colors.rainbowColor(index), 60)
    }
})
```

Imagine taking a color wheel and dividing into segments.  The first segment would be 0, or red.  Then we would jump 20 degrees and start to move on to orange.  

How far you jump on the color wheel is set by the "color wheel increment".  By default, this is set to 20 degrees.   

By setting the color wheel increment smaller, you get smaller segments, and more color choices. This is what happens when we drop the angle from 20 to 10:

![Rainbow Color 10 degrees ](/docs/reference/colors/rainbow-colorwheel-10.png?v=DOCVER-1) 

```blocks
operators.placeOnGround(function () {
    for (let index = 0; index <= 35; index++) {
        shapes.arc(10, 10, index * 10, (index + 1) * 10, colors.rainbowColor(index, 10))
    }
})
```