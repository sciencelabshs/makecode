![Sphere](/docs/reference/shapes/sphere.png?v=DOCVER-1) 
### Sphere
The sphere is a three dimensional circular shape.  


```sig 
shapes.sphere(10)
```

**Options:**
* **Radius** - the distance from the center of the bottom of the sphere to the outside edge

**Advanced Options:** - click (+) to expand
* **Type** - how to draw the sphere. (see below)
* **Color** - set the color of the shape. 
* **Faces** - how many triangles to use to make this shape.  Use wisely! The more faces you use, the smoother it is, but the longer it takes to draw.

**About Spheres**

The basic building block of 3D modelling is a triangle, which can be difficult to make curved shapes out of.  

When modelling a sphere, there is a tradeoff between how fast it can draw and how smooth it is.  How fast it can draw and how smooth it is are both affected by how many faces you use and which technique you choose to draw with.

The default sphere in BuildBee MakeCode is geodesic.  As this is a slightly more detailed model - we have turned down the number of faces to allow the spheres to draw slightly faster. 

![Geodesic Sphere](/docs/reference/shapes/geodesic.png?v=DOCVER-1) 

But an isocohedron form is still available:
![Isocohedron Sphere](/docs/reference/shapes/isocohedron.png?v=DOCVER-1) 

You can see in both models how playing with the faces can affect how smooth and how long it takes to draw.

