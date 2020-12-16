![Wrap Shapes](/docs/reference/operators/wrap-shapes.png?v=DOCVER-2) 

### Wrap Shapes
```sig
operators.wrapShapes(function() {})
```

Wraps two or more shapes together to form one single object.  


**Before wrap shapes**

![Wrap Shapes](/docs/reference/operators/wrap-shapes-before.png?v=DOCVER-2) 

**After wrap shapes**

![Wrap Shapes](/docs/reference/operators/wrap-shapes.png?v=DOCVER-2) 


**Details**

The operation performed is called a quick hull which finds the outermost edges of the resulting shape and joins them all together. 

Interestingly, this technique is also used in game engines to determine the places where an item may collide in a 3d game. 
