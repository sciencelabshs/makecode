# Storage Tray

A customizable storage tray!

```blocks
function set_variables () {
    total_sections = parameters.numberParameter("Number of sections", 2)
    for (let index = 0; index <= total_sections - 1; index++) {
        sections.push(parameters.numberParameter("Section " + (index + 1) + " gap size (mm)", 20))
    }
    card_width = parameters.numberParameter("Card width (mm)", 64)
    box_height = parameters.numberParameter("Container height (mm)", 40)
    wall_thickness = parameters.numberParameter("Wall thickness (mm)", 2)
}
function total_box_length () {
    sum = 0
    for (let section_width of sections) {
        sum += section_width
    }
    return sum + (sections.length + 1) * wall_thickness
}
let sum = 0
let total_sections = 0
let sections: number[] = []
let box_height = 0
let card_width = 0
let wall_thickness = 0
set_variables()
let total_distance = total_box_length() * -1 / 2 + wall_thickness
operators.alignToPrintBed(function () {
    operators.subtractShapes(function () {
        shapes.cube(card_width + 2 * wall_thickness, total_box_length(), box_height + wall_thickness)
        for (let section_width of sections) {
            total_distance += section_width / 2
            operators.setPosition(0, total_distance, wall_thickness, function () {
                operators.styleEdges(EdgeStyle.ConcaveChamfer, StyleEdgeDirection.Top, wall_thickness, function () {
                    shapes.cube(card_width, section_width, box_height)
                })
            })
            total_distance += section_width / 2 + wall_thickness
        }
    })
})
```