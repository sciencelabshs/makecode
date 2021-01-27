# Sundial
## Step 1 @unplugged
Enter your latitude and get a sundial perfect for your house!

```template
function create_numbers () {
    operators.placeOnGround(function () {
        for (let index = 0; index <= 6; index++) {
            hour = 12 - index
            angle = H(extraMath.radians(15 * index), extraMath.radians(L))
            labelX = radius * Math.cos(angle)
            labelY = radius * Math.sin(angle)
            operators.move(labelX, Axis.X, function () {
                operators.move(labelY, Axis.Y, function () {
                    operators.turn(extraMath.degrees(angle) - 90, RotateAxis.Z, function () {
                        shapes.text(labels[hour], fontSize, 4, colors.rainbowColor(index), 1)
                        operators.move(-2 * fontSize, Axis.Y, function () {
                            shapes.cylinder(1, 3, colors.rainbowColor(index))
                        })
                    })
                })
            })
        }
        for (let index2 = 0; index2 <= 5; index2++) {
            hour = 12 - (1 + index2)
            angle = H(extraMath.radians(15 * (1 + index2)), extraMath.radians(L))
            labelX = radius * Math.cos(angle)
            labelY = radius * Math.sin(angle)
            operators.move(labelX, Axis.X, function () {
                operators.move(-1 * labelY, Axis.Y, function () {
                    operators.turn(-1 * extraMath.degrees(angle) - 90, RotateAxis.Z, function () {
                        shapes.text(labels[12 - hour], fontSize, 4, colors.rainbowColor(index2), 1)
                        operators.move(-2 * fontSize, Axis.Y, function () {
                            shapes.cylinder(1, 3, colors.rainbowColor(index2))
                        })
                    })
                })
            })
        }
    })
}
function H (T: number, L: number) {
    return Math.atan2(Math.tan(T) * Math.sin(L), 1)
}
function create_gnomnon () {
    operators.placeOnGround(function () {
        operators.subtractShapes(function () {
            operators.turn(180, RotateAxis.Z, function () {
                operators.translateShapes(0.5 * radius, 0, 0.5 * (radius * extraMath.tan(L)), function () {
                    shapes.triangleRamp(radius, radius * extraMath.tan(L), 0.1 * radius)
                })
            })
        })
    })
}
let labelY = 0
let labelX = 0
let angle = 0
let hour = 0
let fontSize = 0
let radius = 0
let L = 0
let labels: string[] = []
let My_Latitude_in_Degrees = parameters.numberParameter("My Latitude in degrees", 39)
let Radius_of_Sun_Dial_in_mm = parameters.numberParameter("Radius of Sundial in mm", 45)
labels = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
L = Math.abs(My_Latitude_in_Degrees)
radius = Radius_of_Sun_Dial_in_mm
fontSize = 0.05555555555 * radius
let characterOffset = fontSize / 2
operators.addShapes(function () {
    operators.placeOnGround(function () {
        shapes.cylinder(1.1 * radius, 2, shapes.chooseColor(0x4ebed7))
    })
    create_numbers()
    create_gnomnon()
})
```