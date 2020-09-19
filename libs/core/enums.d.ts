

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
    //% blockIdentity=main._axisPicker blockImage=1
    X =1,
    //% blockIdentity=main._axisPicker blockImage=1
    Y,
    //% blockIdentity=main._axisPicker blockImage=1
    Z
}

declare const enum RotateAxis {
    //% blockIdentity=main._rotateAxisPicker blockImage=1
    X =1,
    //% blockIdentity=main._rotateAxisPicker blockImage=1
    Y,
    //% blockIdentity=main._rotateAxisPicker blockImage=1
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

declare const enum FilletDirection {
    Above,
    Below,
    Both
}
