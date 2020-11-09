# Mandelbrot
Make an awesome mandelbrot fractal coaster!

```blocks
let tempReal = 0
let imaginaryComponent = 0
let realComponent = 0
let stepSize = parameters.numberRangeParameter("Sample Size", 0.1, 0.07, 0.3, 0.01)
let iterations = parameters.numberRangeParameter("Samples", 25, 1, 100, 1)
let minX = -1.5
let minY = -1
let maxX = 1
let maxY = 1
let x = minX
let y = minY
let epsilon = 0.1 * stepSize
operators.layOnPrintBed(function () {
    operators.setPosition(0, 0, 0, function () {
        operators.scaleShapes(50, 50, 20, function () {
            operators.subtractShapes(function () {
                operators.move(-0.4, Axis.X, function () {
                    operators.move(stepSize / 2, Axis.Y, function () {
                        shapes.cylinder(1.4, 0.1)
                    })
                })
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
                            operators.setPosition(x, y, 0, function () {
                                shapes.cube(epsilon + stepSize, epsilon + stepSize, 2)
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