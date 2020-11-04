# Mandelbrot
Make an awesome mandelbrot fractal coaster!

```blocks
let tempReal = 0
let imaginaryComponent = 0
let realComponent = 0
let stepSize = 0.1
let iterations = 25
let minX = -1.5
let minY = -1
let maxX = 1
let maxY = 1
let x = minX
let y = minY
operators.move(30, Axis.X, function () {
    operators.scaleShapes(50, 50, 20, function () {
        operators.subtractShapes(function () {
            operators.move(-0.4, Axis.X, function () {
                operators.move(stepSize / 2, Axis.Y, function () {
                    shapes.cylinder(1.4, 0.1, 0x4ebed7, true)
                })
            })
            operators.addShapes(function () {
                while (y <= maxY) {
                    while (x <= maxX) {
                        realComponent = x
                        imaginaryComponent = y
                        for (let index = 0; index < iterations; index++) {
                            tempReal = realComponent ** 2 + (x - imaginaryComponent ** 2)
                            imaginaryComponent = 2 * (realComponent * imaginaryComponent) + y
                            realComponent = tempReal
                        }
                        if (realComponent ** 2 + imaginaryComponent ** 2 < 4) {
                            operators.move(x, Axis.X, function () {
                                operators.move(y, Axis.Y, function () {
                                    operators.move(-1, Axis.Z, function () {
                                        shapes.cube(stepSize, stepSize, 2, shapes.__colorNumberPicker2(0xF012BE))
                                    })
                                })
                            })
                        }
                        x += stepSize
                    }
                    x = minX
                    y += stepSize
                }
            })
        })
    })
})
```