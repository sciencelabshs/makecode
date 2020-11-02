// const generateLabelExpression = (labels: Array<any>, points: Array<Array<number>>, faces:Array<Array<number>>) => {
//     const maxLabels = Math.min(labels.length, faces.length)
//     let labelExpression = ""


//     // Face by face create text
//     for (let i = 0; i < maxLabels; i++){
//         // Get target face vertices
//         const vertices = faces[i].map(vertexIndex => points[vertexIndex])

//         // Compute center of face
//         const cx = vertices.reduce((accumulator, current) => current[0] + accumulator, 0) / faces[i].length
//         const cy = vertices.reduce((accumulator, current) => current[1] + accumulator, 0) / faces[i].length
//         const cz = vertices.reduce((accumulator, current) => current[2] + accumulator, 0) / faces[i].length

//         // Compute conversion angles between text and face. Rotations using these angles should always be applied x then z
//         const xConversionAngle = Math.acos(cz)
//         const zConversionAngle = Math.acos(-cy / Math.sin(xConversionAngle)) || 0 // If NAN then there is no z component required

//         // Determine label sizes
//         const text = labels[i]
//         const fontSize = 1
//         const lineSpacing = 1
//         const letterSpacing = 1
//         const lineWidth = 1
//         const extrudeHeight = 1
//         labelExpression += `
//             writeText({
//                 text: "${text}", 
//                 lineWidth:${lineWidth},
//                 fontSize: ${fontSize},
//                 lineSpacing: ${lineSpacing},
//                 letterSpacing: ${letterSpacing},
//                 extrudeHeight: ${extrudeHeight}
//             }))
//         `
//     }
//     return ""
// }

const tetrahedronStatement = (radius: number = 1, labels: Array<string> = []) => {
    const points = [
        [ radius*Math.sqrt(8/9), 0, -radius/3 ],
        [ -radius*Math.sqrt(2/9), radius*Math.sqrt(2/3), -radius/3 ],
        [ -radius*Math.sqrt(2/9), -radius*Math.sqrt(2/3), -radius/3 ],
        [0, 0, radius]

    ]
    const faces = [ 
        [0,1,2],
        [0,3,1],
        [0,2,3],
        [1,3,2]
    ]

    // let labelsExpression = labels.length > 0 ? generateLabelExpression(labels, points, faces) : ""

   
    return `
        polyhedron({
            points: ${JSON.stringify(points)},
            triangles: ${JSON.stringify(faces)}
        })
    ` // + labelsExpression
}

const cubeStatement = (radius: number = 1) => {
    const unitLength = radius * Math.sqrt(2) / 2
    return `
        polyhedron({
            points: [ 
                [${unitLength}, ${unitLength}, ${unitLength}], 
                [-${unitLength}, ${unitLength}, ${unitLength}], 
                [-${unitLength}, -${unitLength}, ${unitLength}], 
                [${unitLength}, -${unitLength}, ${unitLength}],
                [${unitLength}, ${unitLength}, -${unitLength}], 
                [-${unitLength}, ${unitLength}, -${unitLength}], 
                [-${unitLength}, -${unitLength}, -${unitLength}], 
                [${unitLength}, -${unitLength}, -${unitLength}]          
            ],
            triangles: [ 
                [0,3,2,1],
                [0,1,5,4],
                [1,2,6,5],
                [2,3,7,6],
                [3,0,4,7],
                [4,5,6,7]
            ]
        })
    `
}


const octahedronStatement = (radius: number = 1) => {
    return `
        polyhedron({
            points: [ 
                [${radius}, 0, 0],
                [-${radius}, 0, 0],
                [0, ${radius}, 0],
                [0, -${radius}, 0],
                [0, 0, ${radius}],
                [0, 0, -${radius}] 

            ],
            triangles: [ 
                [4,2,0],
                [4,0,3],
                [4,3,1],
                [4,1,2],
                [5,0,2],
                [5,3,0],
                [5,1,3],
                [5,2,1]
            
            ]
        })
    `
}

const pentagonalTrapezohedronStatement = (radius: number = 1) => {
    const C0 = 0.309016994374947424102293417183
    const C1 = 0.809016994374947424102293417183
    const C2 = 1.30901699437494742410229341718

    return `
        scale(
            [ ${0.6*radius}, ${radius}, ${radius}],
            rotate(
                [0, 0, 31],
                polyhedron({
                    points: [
                    [ 0.0,   ${C0},   ${C1}],
                    [ 0.0,   ${C0},  -${C1}],
                    [ 0.0,  -${C0},   ${C1}],
                    [ 0.0,  -${C0},  -${C1}],
                    [ 0.5,  0.5,  0.5],
                    [ 0.5,  0.5, -0.5],
                    [-0.5, -0.5,  0.5],
                    [-0.5, -0.5, -0.5],
                    [  ${C2},  -${C1},  0.0],
                    [ -${C2},   ${C1},  0.0],
                    [  ${C0},   ${C1},  0.0],
                    [ -${C0},  -${C1},  0.0]
                ],
                triangles: [
                    [ 11 ,  6,  2,  8],
                    [  3 ,  7, 11,  8],
                    [  5 ,  1,  3,  8],
                    [  4 , 10,  5,  8],
                    [  2 ,  0,  4,  8],
                    [ 10 ,  4,  0,  9],
                    [  1 ,  5, 10,  9],
                    [  7 ,  3,  1,  9],
                    [  6 , 11,  7,  9],
                    [  0 ,  2,  6,  9]
                ]})
            )
        )`
}

const dodecahedronStatement = (radius: number = 1) => {
    const phi = (Math.sqrt(5) +1) / 2
    return `
        scale(
            ${radius / phi},
            polyhedron({
                points: [ 
                    [+1, +1, +1],
                    [+1, -1, +1],
                    [-1, -1, +1],
                    [-1, +1, +1],
                
                    [+1, +1, -1],
                    [-1, +1, -1],
                    [-1, -1, -1],
                    [+1, -1, -1],
                
                    [0, +1/${phi}, +${phi}],
                    [0, -1/${phi}, +${phi}],
                    [0, -1/${phi}, -${phi}],
                    [0, +1/${phi}, -${phi}],
                
                    [-1/${phi}, +${phi}, 0],
                    [+1/${phi}, +${phi}, 0],
                    [+1/${phi}, -${phi}, 0],
                    [-1/${phi}, -${phi}, 0],
                
                    [-${phi}, 0, +1/${phi}],
                    [+${phi}, 0, +1/${phi}],
                    [+${phi}, 0, -1/${phi}],
                    [-${phi}, 0, -1/${phi}]
                ],
                triangles: [ 
                    [1,9,8], [1,8,0], [1,0,17], [9,1,14], [9,14,15], 
                    [9,15,2], [9,2,16], [9,16,3], [9,3,8], [8,3,12], 
                    [8,12,13], [8,13,0], [0,13,4], [0,4,18], [0,18,17], 
                    [1,17,18], [1,18,7], [1,7,14], [15,14,7], [15,7,10], 
                    [15,10,6], [2,15,6], [2,6,19], [2,19,16], [16,19,5], 
                    [16,5,12], [16,12,3], [12,5,11], [12,11,4], [12,4,13], 
                    [18,4,11], [18,11,10], [18,10,7], [19,6,10], [19,10,11], [19,11,5]
                ]
            })
        )
    `
}

const icosahedronStatement = (radius: number = 1) => {
    const phi = (Math.sqrt(5) +1) / 2
    return `
        scale(
            ${radius / phi},
            polyhedron({
                points: [ 
                    [0, +1, +${phi}],
                    [0, +1, -${phi}],
                    [0, -1, -${phi}],
                    [0, -1, +${phi}],
                
                    [+${phi}, 0, +1],
                    [+${phi}, 0, -1],
                    [-${phi}, 0, -1],
                    [-${phi}, 0, +1],
                
                    [+1, +${phi}, 0],
                    [+1, -${phi}, 0],
                    [-1, -${phi}, 0],
                    [-1, +${phi}, 0]
                
                ],
                triangles: [ 
                    [3,0,4],
                    [3,4,9],
                    [3,9,10],
                    [3,10,7],
                    [3,7,0],
                    [0,8,4],
                    [0,7,11],
                    [0,11,8],
                    [4,8,5],
                    [4,5,9],
                    [7,10,6],
                    [7,6,11],
                    [9,5,2],
                    [9,2,10],
                    [2,6,10],
                    [1,5,8],
                    [1,8,11],
                    [1,11,6],
                    [5,1,2],
                    [2,1,6]
                ]
            })
        )
    `
}