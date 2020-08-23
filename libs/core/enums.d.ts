

/*
To declare an image dropdown, make an enum,
then add icons into sim/public/blocks/namepace/enumvalue.png
declare const enum BasicShapes {
    //% blockIdentity=main._iconPicker blockImage=1
    Cube
}
*/

declare const enum SphereType {
    icosahedron = 1,
    geodesic
}

declare const enum Axis {
    X =1,
    Y,
    Z
}
declare const enum StackDirection {
    Below =1,
    Above,
    InsideBelow,
    InsideAbove,
    CenterBelow,
    CenterAbove
}