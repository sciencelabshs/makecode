# Hour of Code Trophy 



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

## Step 2 @fullscreen
We have given you a few extra blocks, which will appear in the functions section.  Lets start out with the base of the trophy.

Grab a ``||functions:make trophy base||`` block and change the "BuildBee" to your name!  (We will leave it BuildBee.)

```blocks
make_trophy_base("BuildBee")

unction make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```

## Step 3 @fullscreen
Add a ``||Shapes:polygon||`` to form the stem of the trophy.  

It will poke below the trophy - we will move it next!

```blocks
make_trophy_base("BuildBee")
//@highlight
shapes.polygon3D(6, 4, 10)


function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```

## Step 4 @fullscreen
Add a ``||operators:move||`` to put the stem in the right place. 

Move **10**  in the **Z** direction.

```blocks
make_trophy_base("BuildBee")
//@highlight
operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)
})

function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```

## Step 5 @fullscreen
Let's add a cup to our trophy.  We have made a block for you called ``||functions:make cup||``.  It has one number - the radius of the cup.  The radius says how wide to make the cup from the center.

Add a ``||functions:make cup||`` and set the radius to **10**

The cup will appear below the trophy - we will move it next!

```blocks
make_trophy_base("BuildBee")
//@highlight
operators.move(10, Axis.Z, function () {
    shapes.polygon3D(6, 4, 10)

})
make_cup(10)

function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}

```

## Step 6 @fullscreen
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

function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```

## Step 7 @fullscreen
Hollowing out the cup (part 1 of 2)  

Add a ``||operators:subtract shapes||`` block around ``||functions:make cup||``.

Nothing will happen yet! 


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

function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```

## Step 8 @fullscreen
Hollowing out the cup (part 2 of 2)  

Add a second ``||functions:make cup||`` underneath the first one.

Set radius of the 2nd ``||functions:make cup||`` to **9**

Optional: play with different values -  what happens to the walls? What happens if the second cup is bigger than the first?

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

function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```


## Step 9 @fullscreen
Bonus activity: Make an app (1 of 2)

With one extra block, we can turn this into a trophy-making app that will let your friends make their own trophies!

Add a ``||parameters:text||`` block into the ``||functions:make trophy base||`` block.

Change where it says **text input** to **Winner**



```blocks
//@highlight
make_trophy_base(parameters.textParameter("Winner"))

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
function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```


## Step 10 @fullscreen
Bonus activity: Make an app (2 of 2)

Now in the simulator click the parameters button! 
Changing the text in this form changes the winner of the trophy!

If you share with friends, they will now be able to put their own name on the trophy!


```blocks
//@highlight
make_trophy_base(parameters.textParameter("Name"))

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

function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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
    })
}
```

## Step last @unplugged
<img width="100%" height="100%" src="/docs/static/examples/shared/confetti.svg" style="position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;"/>
![bee]](/docs/static/avatar.svg#left-icon)    
WINNER!  Congratulations on your trophy!  

There's lots more to do in BuildBee MakeCode.  

If you dont have access to a 3D printer at the moment, you can take a photo of your project or share a link to friends!

![last steps]](/docs/static/examples/shared/done.png#center?v=DOCVER-1)




```template
function make_trophy_base (name: string) {
    operators.placeOnGround(function () {
        operators.styleEdges(EdgeStyle.Chamfer, StyleEdgeDirection.Top, 2, function () {
            operators.subtractShapes(function () {
                shapes.cube(30, 30, 10)
                operators.move(-15, Axis.Y, function () {
                    operators.turn(90, RotateAxis.X, function () {
                        shapes.text(name, 2.2, 1, shapes.chooseColor(0x00468C), 1, 1, 2.2)
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