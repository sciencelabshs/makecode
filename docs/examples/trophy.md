# Hour of Code Trophy 

```template
make_trophy_base("BuildBee")
    
function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, 0x0564f6, .5, 1, 2.2)
                    })
                })
            })
        })
    })
}
function make_cup (radius: number) {
    operators.wrapShapes(function () {
        operators.move(-1 * radius, Axis.Z, function () {
            shapes.sphere(radius)
        })
        shapes.cylinder(radius + 1, 10, shapes.chooseColor(0xED0A3F), 100, radius + 3)
    });
}
```


## Step 1 @unplugged


<img width="100%" height="100%" src="/docs/static/examples/shared/confetti.svg" style="position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;"/>


![bee]](/docs/static/avatar.svg#left-icon)
One last project for your Hour of Code with BuildBee! 


Let's put everything you have learned together to make an Hour of Code Trophy!

## Step 2 
![base](/docs/static/examples/trophy/base.png#left-icon)

We have given you a few extra blocks, which will appear in the functions section.  Lets start out with the base of the trophy.

We added a ``||functions:make trophy base||`` block. Change the **BuildBee** to your name! 

```blocks
make_trophy_base("BuildBee")

```

## Step 3 
![base hexbelow](/docs/static/examples/trophy/base-hexbelow.png#left-icon)

Add a ``||Shapes:polygon||`` to form the stem of the trophy.  

It will poke below the trophy - we will move it next!

Set the sides **6** radius **4** and height **10**.

```blocks
make_trophy_base("BuildBee")
//@highlight
shapes.polygon3D(6, 4, 10)



```

## Step 4 
![base hexabove](/docs/static/examples/trophy/base-hexabove.png#left-icon)

Add a ``||operators:move||`` to put the stem in the right place. 

Move **10**  in the **Z** direction.

```blocks
make_trophy_base("BuildBee")
//@highlight
operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)
})

```

## Step 5 
![cup](/docs/static/examples/trophy/makecup.png#left-icon)
Let's add a cup to our trophy. 

From advanced - functions add a ``||functions:call make cup||`` block.

Set the radius to **10**. The cup will appear below the trophy - we will move it next!

```blocks
make_trophy_base("BuildBee")
//@highlight
operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)

})
make_cup(10)

```

## Step 6 
![no hole](/docs/static/examples/trophy/nohole.png#left-icon)
Raise the cup up high! If you're this far, you've earned it!

Add a ``||operators:move||`` block around ``||functions:make cup||``.
Raise the cup by **32** mm in the **Z** direction.

```blocks
make_trophy_base("BuildBee")
operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)

})
//@highlight
operators.move(32, Axis.Z, function () {
    make_cup(10)
})

```

## Step 7 
![no hole](/docs/static/examples/trophy/nohole.png#left-icon)
Hollowing out the cup (part 1 of 2)  

You will notice the top of the cup has no hole!  Let's fix that.

Add a ``||operators:subtract shapes||`` block around ``||functions:make cup||``. Nothing will happen yet! 


```blocks
make_trophy_base("BuildBee")

operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)

})
operators.move(32, Axis.Z, function () {
     //@highlight
    operators.subtractShapes(function () {
        make_cup(10)
    })
})

```

## Step 8 
![cup hole](/docs/static/examples/trophy/cuphole.png#left-icon)

Hollowing out the cup (part 2 of 2)  

Add a second ``||functions:make cup||`` underneath the first one.

Set radius of the 2nd ``||functions:make cup||`` to **9**

```blocks
make_trophy_base("BuildBee")

operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)

})
operators.move(32, Axis.Z, function () {
     //@highlight
    operators.subtractShapes(function () {
         make_cup(10)
         
         //@highlight
         make_cup(9)
    })
})


```

## Step last @unplugged

![bee]](/docs/static/avatar.svg#left-icon)    
Congratulations on your trophy!  🏆🏆🏆 

There's lots more to do in BuildBee MakeCode.  

If you dont have access to a 3D printer at the moment, you can take a photo of your project or share a link to friends!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)
