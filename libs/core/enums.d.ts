

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
declare const enum MetricCoarseSizes {
    //% block="M 0.3x0.09"
    M0p3x0p09 = 0,
    //% block="M 1.1x0.25"
    M1p1x0p25 = 1,
    //% block="M 1.6x0.3"
    M1p6x0p3 = 2,
    //% block="M 2.3x0.45"
    M2p3x0p45 = 3,
    //% block="M 4.5x0.75"
    M4p5x0p75 = 4,
    //% block="M 6x0.8"
    M6x0p8 = 5,
    //% block="M 7x0.75"
    M7x0p75 = 6,
    //% block="M 8x1"
    M8x1 = 7,
    //% block="M 9x1.25"
    M9x1p25 = 8,
    //% block="M 10x1.25"
    M10x1p25 = 9,
    //% block="M 11x1.5"
    M11x1p5 = 10,
    //% block="M 12x1.5"
    M12x1p5 = 11,
    //% block="M 14x1.5"
    M14x1p5 = 12,
    //% block="M 15x1.5"
    M15x1p5 = 13,
    //% block="M 16x1.6"
    M16x1p6 = 14,
    //% block="M 17x1.5"
    M17x1p5 = 15,
    //% block="M 18x2"
    M18x2 = 16,
    //% block="M 20x2"
    M20x2 = 17,
    //% block="M 22x3"
    M22x3 = 18,
    //% block="M 24x2.5"
    M24x2p5 = 19,
    //% block="M 25x2"
    M25x2 = 20,
    //% block="M 27x2"
    M27x2 = 21,
    //% block="M 28x2"
    M28x2 = 22,
    //% block="M 30x3"
    M30x3 = 23,
    //% block="M 32x2"
    M32x2 = 24,
    //% block="M 33x3"
    M33x3 = 25,
    //% block="M 36x3"
    M36x3 = 26,
    //% block="M 39x3"
    M39x3 = 27,
    //% block="M 40x3"
    M40x3 = 28,
    //% block="M 42x4"
    M42x4 = 29,
    //% block="M 45x4"
    M45x4 = 30,
    //% block="M 48x4"
    M48x4 = 31,
    //% block="M 50x4"
    M50x4 = 32,
    //% block="M 52x4"
    M52x4 = 33,
    //% block="M 55x4"
    M55x4 = 34,
    //% block="M 56x4"
    M56x4 = 35,
    //% block="M 58x4"
    M58x4 = 36,
    //% block="M 60x4"
    M60x4 = 37,
    //% block="M 62x4"
    M62x4 = 38,
    //% block="M 64x5.5"
    M64x5p5 = 39,
    //% block="M 65x4"
    M65x4 = 40,
    //% block="M 68x6"
    M68x6 = 41,
    //% block="M 70x6"
    M70x6 = 42,
    //% block="M 72x6"
    M72x6 = 43,
    //% block="M 75x6"
    M75x6 = 44,
    //% block="M 76x6"
    M76x6 = 45,
    //% block="M 80x6"
    M80x6 = 46,
    //% block="M 85x6"
    M85x6 = 47,
    //% block="M 90x6"
    M90x6 = 48,
    //% block="M 95x6"
    M95x6 = 49,
    //% block="M 100x6"
    M100x6 = 50,
    //% block="M 105x6"
    M105x6 = 51,
    //% block="M 110x6"
    M110x6 = 52,
    //% block="M 115x6"
    M115x6 = 53,
    //% block="M 120x6"
    M120x6 = 54,
    //% block="M 125x8"
    M125x8 = 55,
    //% block="M 130x8"
    M130x8 = 56,
    //% block="M 135x6"
    M135x6 = 57,
    //% block="M 140x8"
    M140x8 = 58,
    //% block="M 145x6"
    M145x6 = 59,
    //% block="M 150x8"
    M150x8 = 60,
    //% block="M 155x6"
    M155x6 = 61,
    //% block="M 160x8"
    M160x8 = 62,
    //% block="M 165x6"
    M165x6 = 63,
    //% block="M 170x8"
    M170x8 = 64,
    //% block="M 175x6"
    M175x6 = 65,
    //% block="M 180x8"
    M180x8 = 66,
    //% block="M 185x6"
    M185x6 = 67,
    //% block="M 190x8"
    M190x8 = 68,
    //% block="M 195x6"
    M195x6 = 69,
    //% block="M 200x8"
    M200x8 = 70,
    //% block="M 205x6"
    M205x6 = 71,
    //% block="M 210x8"
    M210x8 = 72,
    //% block="M 215x6"
    M215x6 = 73,
    //% block="M 220x8"
    M220x8 = 74,
    //% block="M 225x6"
    M225x6 = 75,
    //% block="M 230x6"
    M230x6 = 76,
    //% block="M 235x6"
    M235x6 = 77,
    //% block="M 240x8"
    M240x8 = 78,
    //% block="M 245x6"
    M245x6 = 79,
    //% block="M 250x8"
    M250x8 = 80,
    //% block="M 255x6"
    M255x6 = 81,
    //% block="M 260x8"
    M260x8 = 82,
    //% block="M 265x6"
    M265x6 = 83,
    //% block="M 270x6"
    M270x6 = 84,
    //% block="M 275x6"
    M275x6 = 85,
    //% block="M 280x8"
    M280x8 = 86,
    //% block="M 285x6"
    M285x6 = 87,
    //% block="M 290x6"
    M290x6 = 88,
    //% block="M 295x6"
    M295x6 = 89,
    //% block="M 300x8"
    M300x8 = 90,
    //% block="M 310x6"
    M310x6 = 91,
    //% block="M 320x6"
    M320x6 = 92,
    //% block="M 330x6"
    M330x6 = 93,
    //% block="M 340x6"
    M340x6 = 94,
    //% block="M 350x6"
    M350x6 = 95,
    //% block="M 360x6"
    M360x6 = 96,
    //% block="M 370x6"
    M370x6 = 97,
    //% block="M 380x6"
    M380x6 = 98,
    //% block="M 390x6"
    M390x6 = 99,
    //% block="M 400x6"
    M400x6 = 100,
}

declare const enum MetricFineSizes {
    //% block="M 0.3x0.08"
    M0p3x0p08 = 0,
    //% block="M 1.1x0.2"
    M1p1x0p2 = 1,
    //% block="M 1.6x0.2"
    M1p6x0p2 = 2,
    //% block="M 2.3x0.4"
    M2p3x0p4 = 3,
    //% block="M 4.5x0.5"
    M4p5x0p5 = 4,
    //% block="M 6x0.75"
    M6x0p75 = 5,
    //% block="M 6x0.7"
    M6x0p7 = 6,
    //% block="M 6x0.5"
    M6x0p5 = 7,
    //% block="M 7x0.5"
    M7x0p5 = 8,
    //% block="M 8x0.8"
    M8x0p8 = 9,
    //% block="M 8x0.75"
    M8x0p75 = 10,
    //% block="M 8x0.5"
    M8x0p5 = 11,
    //% block="M 9x1"
    M9x1 = 12,
    //% block="M 9x0.75"
    M9x0p75 = 13,
    //% block="M 9x0.5"
    M9x0p5 = 14,
    //% block="M 10x1.12"
    M10x1p12 = 15,
    //% block="M 10x1"
    M10x1 = 16,
    //% block="M 10x0.75"
    M10x0p75 = 17,
    //% block="M 10x0.5"
    M10x0p5 = 18,
    //% block="M 11x1"
    M11x1 = 19,
    //% block="M 11x0.75"
    M11x0p75 = 20,
    //% block="M 11x0.5"
    M11x0p5 = 21,
    //% block="M 12x1.25"
    M12x1p25 = 22,
    //% block="M 12x1"
    M12x1 = 23,
    //% block="M 12x0.75"
    M12x0p75 = 24,
    //% block="M 12x0.5"
    M12x0p5 = 25,
    //% block="M 14x1.25"
    M14x1p25 = 26,
    //% block="M 14x1"
    M14x1 = 27,
    //% block="M 14x0.75"
    M14x0p75 = 28,
    //% block="M 14x0.5"
    M14x0p5 = 29,
    //% block="M 15x1"
    M15x1 = 30,
    //% block="M 16x1.5"
    M16x1p5 = 31,
    //% block="M 16x1.25"
    M16x1p25 = 32,
    //% block="M 16x1"
    M16x1 = 33,
    //% block="M 16x0.75"
    M16x0p75 = 34,
    //% block="M 16x0.5"
    M16x0p5 = 35,
    //% block="M 17x1"
    M17x1 = 36,
    //% block="M 18x1.5"
    M18x1p5 = 37,
    //% block="M 18x1.25"
    M18x1p25 = 38,
    //% block="M 18x1"
    M18x1 = 39,
    //% block="M 18x0.75"
    M18x0p75 = 40,
    //% block="M 18x0.5"
    M18x0p5 = 41,
    //% block="M 20x1.5"
    M20x1p5 = 42,
    //% block="M 20x1"
    M20x1 = 43,
    //% block="M 20x0.75"
    M20x0p75 = 44,
    //% block="M 20x0.5"
    M20x0p5 = 45,
    //% block="M 22x2"
    M22x2 = 46,
    //% block="M 22x1.5"
    M22x1p5 = 47,
    //% block="M 22x1"
    M22x1 = 48,
    //% block="M 22x0.75"
    M22x0p75 = 49,
    //% block="M 22x0.5"
    M22x0p5 = 50,
    //% block="M 24x2"
    M24x2 = 51,
    //% block="M 24x1.5"
    M24x1p5 = 52,
    //% block="M 24x1"
    M24x1 = 53,
    //% block="M 24x0.75"
    M24x0p75 = 54,
    //% block="M 25x1.5"
    M25x1p5 = 55,
    //% block="M 25x1"
    M25x1 = 56,
    //% block="M 27x1.5"
    M27x1p5 = 57,
    //% block="M 27x1"
    M27x1 = 58,
    //% block="M 27x0.75"
    M27x0p75 = 59,
    //% block="M 28x1.5"
    M28x1p5 = 60,
    //% block="M 28x1"
    M28x1 = 61,
    //% block="M 30x2.5"
    M30x2p5 = 62,
    //% block="M 30x2"
    M30x2 = 63,
    //% block="M 30x1.5"
    M30x1p5 = 64,
    //% block="M 30x1"
    M30x1 = 65,
    //% block="M 30x0.75"
    M30x0p75 = 66,
    //% block="M 32x1.5"
    M32x1p5 = 67,
    //% block="M 33x2"
    M33x2 = 68,
    //% block="M 33x1.5"
    M33x1p5 = 69,
    //% block="M 33x1"
    M33x1 = 70,
    //% block="M 33x0.75"
    M33x0p75 = 71,
    //% block="M 36x2"
    M36x2 = 72,
    //% block="M 36x1.5"
    M36x1p5 = 73,
    //% block="M 36x1"
    M36x1 = 74,
    //% block="M 39x2"
    M39x2 = 75,
    //% block="M 39x1.5"
    M39x1p5 = 76,
    //% block="M 39x1"
    M39x1 = 77,
    //% block="M 40x2.5"
    M40x2p5 = 78,
    //% block="M 40x2"
    M40x2 = 79,
    //% block="M 40x1.5"
    M40x1p5 = 80,
    //% block="M 42x3"
    M42x3 = 81,
    //% block="M 42x2"
    M42x2 = 82,
    //% block="M 42x1.5"
    M42x1p5 = 83,
    //% block="M 42x1"
    M42x1 = 84,
    //% block="M 45x3"
    M45x3 = 85,
    //% block="M 45x2"
    M45x2 = 86,
    //% block="M 45x1.5"
    M45x1p5 = 87,
    //% block="M 45x1"
    M45x1 = 88,
    //% block="M 48x3"
    M48x3 = 89,
    //% block="M 48x2"
    M48x2 = 90,
    //% block="M 48x1.5"
    M48x1p5 = 91,
    //% block="M 50x3"
    M50x3 = 92,
    //% block="M 50x2"
    M50x2 = 93,
    //% block="M 50x1.5"
    M50x1p5 = 94,
    //% block="M 52x3"
    M52x3 = 95,
    //% block="M 52x2"
    M52x2 = 96,
    //% block="M 52x1.5"
    M52x1p5 = 97,
    //% block="M 55x3"
    M55x3 = 98,
    //% block="M 55x2"
    M55x2 = 99,
    //% block="M 55x1.5"
    M55x1p5 = 100,
    //% block="M 56x3"
    M56x3 = 101,
    //% block="M 56x2"
    M56x2 = 102,
    //% block="M 56x1.5"
    M56x1p5 = 103,
    //% block="M 56x1"
    M56x1 = 104,
    //% block="M 58x3"
    M58x3 = 105,
    //% block="M 58x2"
    M58x2 = 106,
    //% block="M 58x1.5"
    M58x1p5 = 107,
    //% block="M 60x3"
    M60x3 = 108,
    //% block="M 60x2"
    M60x2 = 109,
    //% block="M 60x1.5"
    M60x1p5 = 110,
    //% block="M 60x1"
    M60x1 = 111,
    //% block="M 62x3"
    M62x3 = 112,
    //% block="M 62x2"
    M62x2 = 113,
    //% block="M 62x1.5"
    M62x1p5 = 114,
    //% block="M 64x4"
    M64x4 = 115,
    //% block="M 64x3"
    M64x3 = 116,
    //% block="M 64x2"
    M64x2 = 117,
    //% block="M 64x1.5"
    M64x1p5 = 118,
    //% block="M 64x1"
    M64x1 = 119,
    //% block="M 65x3"
    M65x3 = 120,
    //% block="M 65x2"
    M65x2 = 121,
    //% block="M 65x1.5"
    M65x1p5 = 122,
    //% block="M 68x4"
    M68x4 = 123,
    //% block="M 68x3"
    M68x3 = 124,
    //% block="M 68x2"
    M68x2 = 125,
    //% block="M 68x1.5"
    M68x1p5 = 126,
    //% block="M 68x1"
    M68x1 = 127,
    //% block="M 70x4"
    M70x4 = 128,
    //% block="M 70x3"
    M70x3 = 129,
    //% block="M 70x2"
    M70x2 = 130,
    //% block="M 70x1.5"
    M70x1p5 = 131,
    //% block="M 72x4"
    M72x4 = 132,
    //% block="M 72x3"
    M72x3 = 133,
    //% block="M 72x2"
    M72x2 = 134,
    //% block="M 72x1.5"
    M72x1p5 = 135,
    //% block="M 72x1"
    M72x1 = 136,
    //% block="M 75x4"
    M75x4 = 137,
    //% block="M 75x3"
    M75x3 = 138,
    //% block="M 75x2"
    M75x2 = 139,
    //% block="M 75x1.5"
    M75x1p5 = 140,
    //% block="M 76x4"
    M76x4 = 141,
    //% block="M 76x3"
    M76x3 = 142,
    //% block="M 76x2"
    M76x2 = 143,
    //% block="M 76x1.5"
    M76x1p5 = 144,
    //% block="M 76x1"
    M76x1 = 145,
    //% block="M 80x4"
    M80x4 = 146,
    //% block="M 80x3"
    M80x3 = 147,
    //% block="M 80x2"
    M80x2 = 148,
    //% block="M 80x1.5"
    M80x1p5 = 149,
    //% block="M 80x1"
    M80x1 = 150,
    //% block="M 85x4"
    M85x4 = 151,
    //% block="M 85x3"
    M85x3 = 152,
    //% block="M 85x2"
    M85x2 = 153,
    //% block="M 85x1.5"
    M85x1p5 = 154,
    //% block="M 90x4"
    M90x4 = 155,
    //% block="M 90x3"
    M90x3 = 156,
    //% block="M 90x2"
    M90x2 = 157,
    //% block="M 90x1.5"
    M90x1p5 = 158,
    //% block="M 95x4"
    M95x4 = 159,
    //% block="M 95x3"
    M95x3 = 160,
    //% block="M 95x2"
    M95x2 = 161,
    //% block="M 95x1.5"
    M95x1p5 = 162,
    //% block="M 100x4"
    M100x4 = 163,
    //% block="M 100x3"
    M100x3 = 164,
    //% block="M 100x2"
    M100x2 = 165,
    //% block="M 100x1.5"
    M100x1p5 = 166,
    //% block="M 105x4"
    M105x4 = 167,
    //% block="M 105x3"
    M105x3 = 168,
    //% block="M 105x2"
    M105x2 = 169,
    //% block="M 105x1.5"
    M105x1p5 = 170,
    //% block="M 110x4"
    M110x4 = 171,
    //% block="M 110x3"
    M110x3 = 172,
    //% block="M 110x2"
    M110x2 = 173,
    //% block="M 110x1.5"
    M110x1p5 = 174,
    //% block="M 115x4"
    M115x4 = 175,
    //% block="M 115x3"
    M115x3 = 176,
    //% block="M 115x2"
    M115x2 = 177,
    //% block="M 115x1.5"
    M115x1p5 = 178,
    //% block="M 120x4"
    M120x4 = 179,
    //% block="M 120x3"
    M120x3 = 180,
    //% block="M 120x2"
    M120x2 = 181,
    //% block="M 120x1.5"
    M120x1p5 = 182,
    //% block="M 125x6"
    M125x6 = 183,
    //% block="M 125x4"
    M125x4 = 184,
    //% block="M 125x3"
    M125x3 = 185,
    //% block="M 125x2"
    M125x2 = 186,
    //% block="M 125x1.5"
    M125x1p5 = 187,
    //% block="M 130x6"
    M130x6 = 188,
    //% block="M 130x4"
    M130x4 = 189,
    //% block="M 130x3"
    M130x3 = 190,
    //% block="M 130x2"
    M130x2 = 191,
    //% block="M 130x1.5"
    M130x1p5 = 192,
    //% block="M 135x4"
    M135x4 = 193,
    //% block="M 135x3"
    M135x3 = 194,
    //% block="M 135x2"
    M135x2 = 195,
    //% block="M 135x1.5"
    M135x1p5 = 196,
    //% block="M 140x6"
    M140x6 = 197,
    //% block="M 140x4"
    M140x4 = 198,
    //% block="M 140x3"
    M140x3 = 199,
    //% block="M 140x2"
    M140x2 = 200,
    //% block="M 140x1.5"
    M140x1p5 = 201,
    //% block="M 145x4"
    M145x4 = 202,
    //% block="M 145x3"
    M145x3 = 203,
    //% block="M 145x2"
    M145x2 = 204,
    //% block="M 145x1.5"
    M145x1p5 = 205,
    //% block="M 150x6"
    M150x6 = 206,
    //% block="M 150x4"
    M150x4 = 207,
    //% block="M 150x3"
    M150x3 = 208,
    //% block="M 150x2"
    M150x2 = 209,
    //% block="M 150x1.5"
    M150x1p5 = 210,
    //% block="M 155x4"
    M155x4 = 211,
    //% block="M 155x3"
    M155x3 = 212,
    //% block="M 155x2"
    M155x2 = 213,
    //% block="M 160x6"
    M160x6 = 214,
    //% block="M 160x4"
    M160x4 = 215,
    //% block="M 160x3"
    M160x3 = 216,
    //% block="M 160x2"
    M160x2 = 217,
    //% block="M 165x4"
    M165x4 = 218,
    //% block="M 165x3"
    M165x3 = 219,
    //% block="M 165x2"
    M165x2 = 220,
    //% block="M 170x6"
    M170x6 = 221,
    //% block="M 170x4"
    M170x4 = 222,
    //% block="M 170x3"
    M170x3 = 223,
    //% block="M 170x2"
    M170x2 = 224,
    //% block="M 175x4"
    M175x4 = 225,
    //% block="M 175x3"
    M175x3 = 226,
    //% block="M 175x2"
    M175x2 = 227,
    //% block="M 180x6"
    M180x6 = 228,
    //% block="M 180x4"
    M180x4 = 229,
    //% block="M 180x3"
    M180x3 = 230,
    //% block="M 180x2"
    M180x2 = 231,
    //% block="M 185x4"
    M185x4 = 232,
    //% block="M 185x3"
    M185x3 = 233,
    //% block="M 185x2"
    M185x2 = 234,
    //% block="M 190x6"
    M190x6 = 235,
    //% block="M 190x4"
    M190x4 = 236,
    //% block="M 190x3"
    M190x3 = 237,
    //% block="M 190x2"
    M190x2 = 238,
    //% block="M 195x4"
    M195x4 = 239,
    //% block="M 195x3"
    M195x3 = 240,
    //% block="M 195x2"
    M195x2 = 241,
    //% block="M 200x6"
    M200x6 = 242,
    //% block="M 200x4"
    M200x4 = 243,
    //% block="M 200x3"
    M200x3 = 244,
    //% block="M 200x2"
    M200x2 = 245,
    //% block="M 205x4"
    M205x4 = 246,
    //% block="M 205x3"
    M205x3 = 247,
    //% block="M 205x2"
    M205x2 = 248,
    //% block="M 210x6"
    M210x6 = 249,
    //% block="M 210x4"
    M210x4 = 250,
    //% block="M 210x3"
    M210x3 = 251,
    //% block="M 210x2"
    M210x2 = 252,
    //% block="M 215x4"
    M215x4 = 253,
    //% block="M 215x3"
    M215x3 = 254,
    //% block="M 220x6"
    M220x6 = 255,
    //% block="M 220x4"
    M220x4 = 256,
    //% block="M 220x3"
    M220x3 = 257,
    //% block="M 220x2"
    M220x2 = 258,
    //% block="M 225x4"
    M225x4 = 259,
    //% block="M 225x3"
    M225x3 = 260,
    //% block="M 225x2"
    M225x2 = 261,
    //% block="M 230x4"
    M230x4 = 262,
    //% block="M 230x3"
    M230x3 = 263,
    //% block="M 230x2"
    M230x2 = 264,
    //% block="M 235x4"
    M235x4 = 265,
    //% block="M 235x3"
    M235x3 = 266,
    //% block="M 240x6"
    M240x6 = 267,
    //% block="M 240x4"
    M240x4 = 268,
    //% block="M 240x3"
    M240x3 = 269,
    //% block="M 240x2"
    M240x2 = 270,
    //% block="M 245x4"
    M245x4 = 271,
    //% block="M 245x3"
    M245x3 = 272,
    //% block="M 245x2"
    M245x2 = 273,
    //% block="M 250x6"
    M250x6 = 274,
    //% block="M 250x4"
    M250x4 = 275,
    //% block="M 250x3"
    M250x3 = 276,
    //% block="M 250x2"
    M250x2 = 277,
    //% block="M 255x4"
    M255x4 = 278,
    //% block="M 255x3"
    M255x3 = 279,
    //% block="M 260x6"
    M260x6 = 280,
    //% block="M 260x4"
    M260x4 = 281,
    //% block="M 260x3"
    M260x3 = 282,
    //% block="M 265x4"
    M265x4 = 283,
    //% block="M 265x3"
    M265x3 = 284,
    //% block="M 270x4"
    M270x4 = 285,
    //% block="M 270x3"
    M270x3 = 286,
    //% block="M 275x4"
    M275x4 = 287,
    //% block="M 275x3"
    M275x3 = 288,
    //% block="M 280x6"
    M280x6 = 289,
    //% block="M 280x4"
    M280x4 = 290,
    //% block="M 280x3"
    M280x3 = 291,
    //% block="M 285x4"
    M285x4 = 292,
    //% block="M 285x3"
    M285x3 = 293,
    //% block="M 290x4"
    M290x4 = 294,
    //% block="M 290x3"
    M290x3 = 295,
    //% block="M 295x4"
    M295x4 = 296,
    //% block="M 295x3"
    M295x3 = 297,
    //% block="M 300x6"
    M300x6 = 298,
    //% block="M 300x4"
    M300x4 = 299,
    //% block="M 300x3"
    M300x3 = 300,
    //% block="M 310x4"
    M310x4 = 301,
    //% block="M 320x4"
    M320x4 = 302,
    //% block="M 330x4"
    M330x4 = 303,
    //% block="M 340x4"
    M340x4 = 304,
    //% block="M 350x4"
    M350x4 = 305,
    //% block="M 360x4"
    M360x4 = 306,
    //% block="M 370x4"
    M370x4 = 307,
    //% block="M 380x4"
    M380x4 = 308,
    //% block="M 390x4"
    M390x4 = 309,
    //% block="M 400x4"
    M400x4 = 310,
}

declare const enum UnifiedCoarseSizes {
    //% block="UNC 1/4"
    UNC_QuarterInch = 0,
    //% block="UNC 5/16"
    UNC_FiveSixteenthsInch = 1,
    //% block="UNC 3/8"
    UNC_ThreeEighthsInch = 2,
    //% block="UNC 7/16"
    UNC_SevenSixteenthsInch = 3,
    //% block="UNC 1/2"
    UNC_HalfInch = 4,
    //% block="UNC 9/16"
    UNC_NineSixteenthsInch = 5,
    //% block="UNC 5/8"
    UNC_FiveEigthsInch = 6,
    //% block="UNC 3/4"
    UNC_ThreeQuartersInch = 7,
    //% block="UNC 7/8"
    UNC_SevenEighthsInch = 8,
    //% block="UNC #1"
    UNC_No1 = 9,
    //% block="UNC 1"
    UNC_1 = 10,
    //% block="UNC 1 1/8"
    UNC_OneAndOneEighthsInch = 11,
    //% block="UNC 1 1/4"
    UNC_OneAndOneQuarterInch = 12,
    //% block="UNC 1 3/8"
    UNC_OneAndThreeEighthsInch = 13,
    //% block="UNC 1 1/2"
    UNC_OneAndOneHalfInch = 14,
    //% block="UNC 1 3/4"
    UNC_OneAndThreeQuartersInch = 15,
    //% block="UNC #2"
    UNC_No2 = 16,
    //% block="UNC 2"
    UNC_2 = 17,
    //% block="UNC 2 1/4"
    UNC_TwoAndOneQuarterInch = 18,
    //% block="UNC 2 1/2"
    UNC_TwoAndOneHalfInch = 19,
    //% block="UNC 2 3/4"
    UNC_TwoAndThreeQuartersInch = 20,
    //% block="UNC #3"
    UNC_No3 = 21,
    //% block="UNC 3"
    UNC_3 = 22,
    //% block="UNC 3 1/4"
    UNC_ThreeAndOneQuarterInch = 23,
    //% block="UNC 3 1/2"
    UNC_ThreeAndOneHalfInch = 24,
    //% block="UNC 3 3/4"
    UNC_ThreeAndThreeQuartersInch = 25,
    //% block="UNC #4"
    UNC_No4 = 26,
    //% block="UNC 4"
    UNC_4 = 27,
    //% block="UNC #5"
    UNC_No5 = 28,
    //% block="UNC #6"
    UNC_No6 = 29,
    //% block="UNC #8"
    UNC_No8 = 30,
    //% block="UNC #10"
    UNC_No10 = 31,
    //% block="UNC #12"
    UNC_No12 = 32,
}

declare const enum UnifiedFineSizes {
    //% block="UNF #0"
    UNF_No0 = 0,
    //% block="UNF 1/4"
    UNF_OneQuarterInch = 1,
    //% block="UNF 5/16"
    UNF_FiveSixteenthsInch = 2,
    //% block="UNF 3/8"
    UNF_ThreeEighthsInch = 3,
    //% block="UNF 7/16"
    UNF_SevenSixteenthsInch = 4,
    //% block="UNF 1/2"
    UNF_HalfInch = 5,
    //% block="UNF 9/16"
    UNF_NineSixteenthsInch = 6,
    //% block="UNF 5/8"
    UNF_FiveEighthsInch = 7,
    //% block="UNF 3/4"
    UNF_ThreeQuartersInch = 8,
    //% block="UNF 7/8"
    UNF_SevenEighthsInch = 9,
    //% block="UNF #1"
    UNF_No1 = 10,
    //% block="UNF 1"
    UNF_1 = 11,
    //% block="UNF 1 1/8"
    UNF_OneAndOneEighthInch = 12,
    //% block="UNF 1 1/4"
    UNF_OneAndOneQuarterInch = 13,
    //% block="UNF 1 3/8"
    UNF_OneAndThreeEighthsInch = 14,
    //% block="UNF 1 1/2"
    UNF_OneAndOneHalfInch = 15,
    //% block="UNF #2"
    UNF_No2 = 16,
    //% block="UNF #3"
    UNF_No3 = 17,
    //% block="UNF #4"
    UNF_No4 = 18,
    //% block="UNF #5"
    UNF_No5 = 19,
    //% block="UNF #6"
    UNF_No6 = 20,
    //% block="UNF #8"
    UNF_No8 = 21,
    //% block="UNF #10"
    UNF_No10 = 22,
    //% block="UNF #12"
    UNF_No12 = 23,
}

declare const enum UnifiedExtraFineSizes {
    //% block="UNEF 1/4"
    UNEF_OneQuarterInch = 0,
    //% block="UNEF 5/16"
    UNEF_FiveSixteenthsInch = 1,
    //% block="UNEF 3/8"
    UNEF_ThreeEighthsInch = 2,
    //% block="UNEF 7/16"
    UNEF_SevenSixteenthsInch = 3,
    //% block="UNEF 1/2"
    UNEF_HalfInch = 4,
    //% block="UNEF 9/16"
    UNEF_NineSixteenthsInch = 5,
    //% block="UNEF 5/8"
    UNEF_FiveEigthsInch= 6,
    //% block="UNEF 11/16"
    UNEF_ElevenSixteenthsInch = 7,
    //% block="UNEF 3/4"
    UNEF_ThreeQuartersInch = 8,
    //% block="UNEF 13/16"
    UNEF_ThirteenSixteenthsInch = 9,
    //% block="UNEF 7/8"
    UNEF_SevenEighthsInch = 10,
    //% block="UNEF 15/16"
    UNEF_FifteenSixteenthsInch = 11,
    //% block="UNEF 1"
    UNEF_1 = 12,
    //% block="UNEF 1 1/16"
    UNEF_OneAndOneSixteenthsInch = 13,
    //% block="UNEF 1 1/8"
    UNEF_OneAndOneEighthInch = 14,
    //% block="UNEF 1 3/16"
    UNEF_OneAndThreeSixteenthsInch = 15,
    //% block="UNEF 1 1/4"
    UNEF_OneAndOneQuarterInch = 16,
    //% block="UNEF 1 5/16"
    UNEF_OneAndFiveSixteenthsInch = 17,
    //% block="UNEF 1 3/8"
    UNEF_OneAndThreeEighthsInch = 18,
    //% block="UNEF 1 7/16"
    UNEF_OneAndSevenSixteenthsInch = 19,
    //% block="UNEF 1 1/2"
    UNEF_OneAndOneHalfInch = 20,
    //% block="UNEF 1 9/16"
    UNEF_OneAndNineSixteenthsInch = 21,
    //% block="UNEF 1 5/8"
    UNEF_OneAndFiveEigthsInch = 22,
    //% block="UNEF 1 11/16"
    UNEF_OneAndElevenSixteenthsInch = 23,
    //% block="UNEF #12"
    UNEF_No12 = 24,
}

declare const enum UnifiedNumberedSizes {
    //% block="UN 32"
    UN_32 = 0,
    //% block="UN 28"
    UN_28 = 1,
    //% block="UN 20"
    UN_20 = 2,
    //% block="UN 4"
    UN_4 = 3,
    //% block="UN 6"
    UN_6 = 4,
    //% block="UN 8"
    UN_8 = 5,
    //% block="UN 12"
    UN_12 = 6,
    //% block="UN 16"
    UN_16 = 7,
}

declare const enum BritishSizes {
    //% block="G 1/16"
    G_OneSixteenthInch = 0,
    //% block="G 1/8"
    G_OneEighthInch = 1,
    //% block="G 1/4"
    G_OneQuarterInch = 2,
    //% block="G 3/8"
    G_ThreeEighthsInch = 3,
    //% block="G 1/2"
    G_HalfInch = 4,
    //% block="G 5/8"
    G_FiveEighthsInch = 5,
    //% block="G 3/4"
    G_ThreeQuarterInch = 6,
    //% block="G 7/8"
    G_SevenQuartersInch = 7,
    //% block="G 1"
    G_OneInch = 8,
    //% block="G 1 1/8"
    G_OneAndOneEighthInch = 9,
    //% block="G 1 1/4"
    G_OneAndOneQuarterInch = 10,
    //% block="G 1 1/2"
    G_OneAndOneHalfInch = 11,
    //% block="G 1 3/4"
    G_OneAndThreeQuarterInch = 12,
    //% block="G 2"
    G_TwoInch = 13,
    //% block="G 2 1/4"
    G_TwoAndOneQuarterInch = 14,
    //% block="G 2 1/2"
    G_TwoAndOneHalfInch = 15,
    //% block="G 2 3/4"
    G_TwoAndThreeQuarterInch = 16,
    //% block="G 3"
    G_ThreeInch = 17,
    //% block="G 3 1/2"
    G_ThreeAndOneHalfInch = 18,
    //% block="G 4"
    G_FourInch = 19,
    //% block="G 4 1/2"
    G_FourAndOneHalfInch = 20,
    //% block="G 5"
    G_FiveInch = 21,
    //% block="G 5 1/2"
    G_FiveAndOneHalfInch = 22,
    //% block="G 6"
    G_SixInch = 23,
}

declare const enum ThreadShapeType {
    //% block="thread"
    Thread,
    //% block="thread cutting tap"
    ThreadCuttingTap
}