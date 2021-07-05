# Dice Container

Enter a container height and make a customized dice container!


```blocks
function makeContainer (containerHeight: number) {
    operators.subtractShapes(function () {
        shapes.cylinder(15, containerHeight, 0x339ACC, 6)
        // hollow out the container
        operators.move(2.5, Axis.Z, function () {
            shapes.cylinder(12, containerHeight - 2, 0x00468C)
        })
        // cut out the thread from the container using a thread cutting tap
        operators.move(63, Axis.Z, function () {
            fasteners.metricFineThread(ThreadShapeType.ThreadCuttingTap, MetricFineSizes.M25x1, 6)
        })
    })
}
function makeLid () {
    operators.addShapes(function () {
        fasteners.metricFineThread(ThreadShapeType.Thread, MetricFineSizes.M25x1, 6)
        operators.move(10, Axis.Z, function () {
            shapes.cylinder(15, 15, 0x76D7EA, 6)
        })
    })
}
operators.placeOnGround(function () {
    operators.turn(180, RotateAxis.X, function () {
        makeContainer(parameters.numberParameter("Container Height (mm)", 132))
    })
})
operators.placeOnGround(function () {
    operators.move(50, Axis.Y, function () {
        operators.turn(180, RotateAxis.X, function () {
            makeLid()
        })
    })
})
```