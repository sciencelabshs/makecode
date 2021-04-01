

/*
To declare an image dropdown, make an enum,
then add icons into sim/public/blocks/namepace/enumvalue.png
declare const enum BasicShapes {
    //% blockIdentity=main._iconPicker blockImage=1
    Cube
}
*/

declare const enum SphereType {
    geodesic = 0,
    icosahedron = 1
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

declare const enum StyleEdgeDirection {
    Top =1,
    Bottom,
    Both
}

declare const enum EdgeStyle {
    //% blockIdentity=main._edgeStylePicker blockImage=1
    Chamfer =1 ,
    //% blockIdentity=main._edgeStylePicker blockImage=1
    ConcaveChamfer,
    //% blockIdentity=main._edgeStylePicker blockImage=1
    Fillet,
    //% blockIdentity=main._edgeStylePicker blockImage=1
    ConcaveFillet
}

declare const enum Polyhedra {
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Tetrahedron = 4 ,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Cube = 6,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Octahedron = 8,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    PentagonalTrapezohedron = 10,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Dodecahedron = 12,
    //% blockIdentity=main._polyhedraPicker blockImage=1
    Icosahedron = 20
}

// add missing declaration for python transpiling
declare const enum NumberFormat {
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,

    UInt32LE = 11,
    UInt32BE = 12,
    Float32LE = 13,
    Float64LE = 14,
    Float32BE = 15,
    Float64BE = 16,
    }

// add missing declaration for python transpiling
declare interface Buffer {
    /**
     * Reads an unsigned byte at a particular location
     */
    //% shim=BufferMethods::getUint8
    getUint8(off: int32): int32;

    /**
     * Returns false when the buffer can be written to.
     */
    //% shim=BufferMethods::isReadOnly
    isReadOnly(): boolean;

    /**
     * Writes an unsigned byte at a particular location
     */
    //% shim=BufferMethods::setUint8
    setUint8(off: int32, v: int32): void;

    /**
     * Write a number in specified format in the buffer.
     */
    //% shim=BufferMethods::setNumber
    setNumber(format: NumberFormat, offset: int32, value: number): void;

    /**
     * Read a number in specified format from the buffer.
     */
    //% shim=BufferMethods::getNumber
    getNumber(format: NumberFormat, offset: int32): number;

    /** Returns the length of a Buffer object. */
    //% property shim=BufferMethods::length
    length: int32;

    /**
     * Fill (a fragment) of the buffer with given value.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill
    fill(value: int32, offset?: int32, length?: int32): void;

    /**
     * Return a copy of a fragment of a buffer.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice
    slice(offset?: int32, length?: int32): Buffer;

    /**
     * Shift buffer left in place, with zero padding.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus
     * start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift
    shift(offset: int32, start?: int32, length?: int32): void;

    /**
     * Convert a buffer to string assuming UTF8 encoding
     */
    //% shim=BufferMethods::toString
    toString(): string;

    /**
     * Convert a buffer to its hexadecimal representation.
     */
    //% shim=BufferMethods::toHex
    toHex(): string;

    /**
     * Rotate buffer left in place.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus
     * start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate
    rotate(offset: int32, start?: int32, length?: int32): void;

    /**
     * Write contents of `src` at `dstOffset` in current buffer.
     */
    //% shim=BufferMethods::write
    write(dstOffset: int32, src: Buffer): void;

    /**
     * Compute k-bit FNV-1 non-cryptographic hash of the buffer.
     */
    //% shim=BufferMethods::hash
    hash(bits: int32): uint32;
}