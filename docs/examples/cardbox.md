# Card Box

Create a custom box for your cards!

```blocks

function set_variables () {
    number_of_sections = parameters.numberParameter("Number of sections", 2)
    sections = []
    for (let index = 0; index <= number_of_sections - 1; index++) {
        sections.push(parameters.numberParameter("Section " + (index + 1) + " gap size (mm)", 20))
    }
    card_width = parameters.numberParameter("Card width (mm)", 64)
    box_height = parameters.numberParameter("Card height (mm)", 90)
    wall_thickness = parameters.numberParameter("Wall thickness (mm)", 2)
}
function total_box_length () {
    sum = 0
    for (let section_width of sections) {
        sum += section_width
    }
    return sum + (sections.length + 1) * wall_thickness
}
function make_box () {
    operators.placeOnGround(function () {
        operators.subtractShapes(function () {
            shapes.cube(card_width + 2 * wall_thickness, total_box_length(), box_height + wall_thickness)
            for (let section_width2 of sections) {
                total_distance += section_width2 / 2
                operators.setPosition(0, total_distance, wall_thickness, function () {
                    operators.styleEdges(EdgeStyle.ConcaveChamfer, StyleEdgeDirection.Top, wall_thickness, function () {
                        shapes.cube(card_width, section_width2, box_height)
                    })
                })
                total_distance += section_width2 / 2 + wall_thickness
            }
            operators.move(box_height / 2, Axis.Z, function () {
                operators.turn(90, RotateAxis.X, function () {
                    shapes.cylinder(notch_radius, total_box_length())
                })
            })
        })
    })
}
function make_lid () {
    operators.placeOnGround(function () {
        operators.move(card_width + (2 * wall_thickness + 5), Axis.X, function () {
            operators.subtractShapes(function () {
                shapes.cube(card_width + 4 * wall_thickness, total_box_length() + 2 * wall_thickness, notch_radius + 2 + 3 * wall_thickness)
                operators.move(wall_thickness, Axis.Z, function () {
                    shapes.cube(card_width + 0.2 + 2 * wall_thickness, total_box_length() + 0.2, notch_radius + 2 + 2 * wall_thickness)
                })
            })
        })
    })
}
let sum = 0
let box_height = 0
let sections: number[] = []
let number_of_sections = 0
let card_width = 0
let notch_radius = 0
let wall_thickness = 0
let total_distance = 0
set_variables()
total_distance = total_box_length() * -1 / 2 + wall_thickness
notch_radius = Math.min(10, card_width / 2)
make_box()
make_lid()

```