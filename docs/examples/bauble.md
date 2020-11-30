# 3D Printable Bauble 

Make a bauble that you can 3D print, decorate and hang on your tree!

## Step 1 @unplugged
Make a bauble that you can 3D print, decorate and hang on your tree!

## Step 2 @fullscreen

Let's start by making something to hang our bauble from. Add a ``||Shapes:cylinder||`` block. Set the radius to 5mm.
```blocks
shapes.cylinder(5, 10)
```

## Step 3

Let's cut out a hole to thread a string through. A square hole will 3D print better than a round hole. 

Add a ``||Shapes:cube||`` block and set width: 10mm, depth: 2mm, height: 2mm.

Wrap both blocks in an ``||Operators:subtractShapes||`` block.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(5, 10)
    shapes.cube(10, 2, 2)
})
```

## Step 4

Now we can add the bauble body. Add a ``||Shapes:sphere||`` block.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(5, 10)
    shapes.cube(10, 2, 2)
})
shapes.sphere(20)
```

## Step 5

Let's move the sphere to the right spot. 

Add a ``||Operators:move||`` block around the sphere. Set the move axis to Z and the distance to 22mm.

It will look like the bauble is upside down. This is because it gives us a nice flat surface on the bottom for 3D printing.

```blocks
operators.subtractShapes(function () {
    shapes.cylinder(5, 10)
    shapes.cube(10, 2, 2)
})
operators.move(22, Axis.Z, function () {
    shapes.sphere(20)
})
```

## Step 6

One last step to get the bauble ready for printing. 

Wrap everything in a ``||Operators:addShapes||`` block and a ``||Operators:placeOnGround||`` block.

```blocks
operators.placeOnGround(function () {
    operators.addShapes(function () {
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

## Step 7

That's it, your bauble model is ready.

If you want to customize your bauble, have a play around!

A great idea is to paint and decorate the model after you print it. PVA glue and glitter are a perfect way to make your bauble shine!