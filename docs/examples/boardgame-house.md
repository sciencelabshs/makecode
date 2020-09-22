# Boardgame house

```
operators.stack(StackDirection.Above, Axis.Z, function () {
    shapes.cube(10, 10, 10)
    shapes.roof(10, 5, 10)
})
operators.move(4, Axis.Y, function () {
    operators.move(2, Axis.X, function () {
        shapes.cube(2, 2, 15)
    })
})
```