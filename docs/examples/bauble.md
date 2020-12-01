# 3D Printable Bauble 

Make a bauble that you can 3D print, decorate and hang on your tree!

## Step 1 @unplugged
Make a bauble that you can 3D print, decorate and hang on your tree!
![Bauble]](/docs/static/examples/bauble/project-image.png)


## Step 2 @fullscreen
![cylinder]](/docs/static/examples/bauble/cylinder.png#left-icon)
Let's start by making something to hang our bauble from. Add a ``||Shapes:cylinder||`` block. 

Set the radius to **5**.

```blocks
shapes.cylinder(5, 10)
```

## Step 3
![cylinder-string]](/docs/static/examples/bauble/cylinder-string.png#left-icon)
Cutting a hole: Step 1 of 2

Let's cut out a hole to thread a string through. A square hole will 3D print better than a round hole.  

Add a ``||Shapes:cube||`` block. Set width: **20**, depth: **2**, height: **2**.


```blocks
    shapes.cylinder(5, 10)
    //@highlight
    shapes.cube(20, 2, 2)
```


## Step 4
![cylinder-hole]](/docs/static/examples/bauble/cylinder-hole.png#left-icon)
Cutting a hole: Step 2 of 2

Add a ``||Operators:subtract shapes||`` block around all the shapes to cut the cube out of the cylinder.


```blocks
//@highlight
operators.subtractShapes(function () {
    shapes.cylinder(5, 10)
    shapes.cube(20, 2, 2)
})
```

## Step 4
![sphere](/docs/static/examples/bauble/add-sphere.png#left-icon)

Now we can add the bauble body. Add a ``||Shapes:sphere||`` block below the ``||Operators:subtract shapes||`` block.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(5, 10)
    shapes.cube(20, 2, 2)
})
//@highlight
shapes.sphere(20)
```

## Step 5
![below ground bauble]](/docs/static/examples/bauble/below-ground-bauble.png#left-icon)

Let's move the sphere to the right spot. 

Add a ``||Operators:move||`` block around the sphere. Set the move axis to **Z** and the distance to **22** mm.



```blocks
operators.subtractShapes(function () {
    shapes.cylinder(5, 10)
    shapes.cube(20, 2, 2)
})
//@highlight
operators.move(22, Axis.Z, function () {
    shapes.sphere(20)
})
```
## Step 7
![below ground bauble]](/docs/static/examples/bauble/below-ground-bauble.png#left-icon)
It will look like the bauble is upside down. This is because it gives us a nice flat surface on the bottom for 3D printing. 

Let's ``||Operators:add shapes||`` so we can move them all together on top of the ground.


```blocks
//@highlight
operators.addShapes(function() {
    operators.subtractShapes(function () {
        shapes.cylinder(5, 10)
        shapes.cube(10, 2, 2)
    })
    operators.move(22, Axis.Z, function () {
        shapes.sphere(20)
    })
})

```


## Step 6
![upside down bauble]](/docs/static/examples/bauble/upside-down-bauble.png#left-icon)

One last step to get the bauble ready for printing. 

Use the ``||Operators:place on ground||`` block to raise everything. 

```blocks
//@highlight
operators.placeOnGround(function () {
    operators.addShapes(function() {

        operators.subtractShapes(function () {
            shapes.cylinder(5, 10)
            shapes.cube(10, 2, 2)
        })
        operators.move(22, Axis.Z, function () {
            shapes.sphere(20)
        })
    })
})
```

## Step Last @unplugged

Done! If you want to customize your bauble, have a play around!

A great idea is to paint and decorate the model after you print it. PVA glue and glitter are a perfect way to make your bauble shine!


### 3D Print your creation!
*  Send to BuildBee - easily print on your 3D printer!  
    ![how to print]](/docs/static/examples/shared/print-buildbee.png) 

*  Advanced - download a STL file for printing. 
    ![how to download]](/docs/static/examples/shared/download-stl.png)  

<!-- -->

### Save and Share with Friends!
* Save your MakeCode file to your computer.  This will save a .mkcd file, which contains all your code.
    ![how to save]](/docs/static/examples/shared/save.png) 

* Share a link with a friend!  
    ![how to share]](/docs/static/examples/shared/share.png)