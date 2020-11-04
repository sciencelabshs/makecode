# Sundial

Enter your latitude and get a sundial perfect for your house!

```blocks
function create_numbers () {
    for (let index = 0; index <= 6; index++) {
        hour = 12 - index
        angle = H(convertToRadians(15 * index), convertToRadians(L))
        labelX = radius * Math.cos(angle)
        labelY = radius * Math.sin(angle)
        operators.move(labelX, Axis.X, function () {
            operators.move(labelY, Axis.Y, function () {
                operators.turn(convertToDegrees(angle) - 90, RotateAxis.Z, function () {
                    operators.move(-1 * (characterOffset * labels[hour].length), Axis.X, function () {
                        shapes.text(labels[hour], fontSize, 4, 0xff8000, 2)
                    })
                    operators.move(-2 * fontSize, Axis.Y, function () {
                        shapes.cylinder(2, 3, 0xff8000)
                    })
                })
            })
        })
    }
    for (let index2 = 0; index2 <= 5; index2++) {
        hour = 12 - (1 + index2)
        angle = H(convertToRadians(15 * (1 + index2)), convertToRadians(L))
        labelX = radius * Math.cos(angle)
        labelY = radius * Math.sin(angle)
        operators.move(labelX, Axis.X, function () {
            operators.move(-1 * labelY, Axis.Y, function () {
                operators.turn(-1 * convertToDegrees(angle) - 90, RotateAxis.Z, function () {
                    operators.move(-1 * (characterOffset * labels[12 - hour].length), Axis.X, function () {
                        shapes.text(labels[12 - hour], 6, 4, 0xff8000, 2)
                    })
                    operators.move(-2 * fontSize, Axis.Y, function () {
                        shapes.cylinder(2, 3, 0xff8000)
                    })
                })
            })
        })
    }
}
function convertToRadians (degrees: number) {
    return degrees * 0.0174533
}
function H (T: number, L: number) {
    return Math.atan2(Math.tan(T) * Math.sin(L), 1)
}
function create_gnomnon () {
    operators.subtractShapes(function () {
        operators.turn(180, RotateAxis.Z, function () {
            operators.move(-0.5 * radius, Axis.X, function () {
                shapes.triangleRamp(radius, radius * Math.tan(convertToRadians(L)), 10)
            })
        })
        operators.move((radius - 3) * Math.tan(convertToRadians(L)), Axis.Z, function () {
            shapes.cylinder(radius, 100)
        })
    })
}
function convertToDegrees (radians: number) {
    return radians / 0.0174533
}
let labelY = 0
let labelX = 0
let angle = 0
let hour = 0
let characterOffset = 0
let fontSize = 0
let radius = 0
let L = 0
let labels: string[] = []
let My_Latitude_in_Degrees = 39
let Radius_of_Sun_Dial_in_mm = 90
labels = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
L = Math.abs(My_Latitude_in_Degrees)
radius = Radius_of_Sun_Dial_in_mm
fontSize = 0.05555555555 * radius
characterOffset = fontSize / 2
operators.addShapes(function () {
    shapes.cylinder(1.2 * radius, 2, 0x4ebed7, true)
    create_gnomnon()
    create_numbers()
})

```