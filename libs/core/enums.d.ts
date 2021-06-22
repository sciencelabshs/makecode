

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
    //% block="M0.3x0.09"
    thread_M0p3x0p09 = 0,
    //% block="M1.1x0.25"
    thread_M1p1x0p25 = 1,
    //% block="M1.6x0.3"
    thread_M1p6x0p3 = 2,
    //% block="M2.3x0.45"
    thread_M2p3x0p45 = 3,
    //% block="M4.5x0.75"
    thread_M4p5x0p75 = 4,
    //% block="M6x0.8"
    thread_M6x0p8 = 5,
    //% block="M7x0.75"
    thread_M7x0p75 = 6,
    //% block="M8x1"
    thread_M8x1 = 7,
    //% block="M9x1.25"
    thread_M9x1p25 = 8,
    //% block="M10x1.25"
    thread_M10x1p25 = 9,
    //% block="M11x1.5"
    thread_M11x1p5 = 10,
    //% block="M12x1.5"
    thread_M12x1p5 = 11,
    //% block="M14x1.5"
    thread_M14x1p5 = 12,
    //% block="M15x1.5"
    thread_M15x1p5 = 13,
    //% block="M16x1.6"
    thread_M16x1p6 = 14,
    //% block="M17x1.5"
    thread_M17x1p5 = 15,
    //% block="M18x2"
    thread_M18x2 = 16,
    //% block="M20x2"
    thread_M20x2 = 17,
    //% block="M22x3"
    thread_M22x3 = 18,
    //% block="M24x2.5"
    thread_M24x2p5 = 19,
    //% block="M25x2"
    thread_M25x2 = 20,
    //% block="M27x2"
    thread_M27x2 = 21,
    //% block="M28x2"
    thread_M28x2 = 22,
    //% block="M30x3"
    thread_M30x3 = 23,
    //% block="M32x2"
    thread_M32x2 = 24,
    //% block="M33x3"
    thread_M33x3 = 25,
    //% block="M36x3"
    thread_M36x3 = 26,
    //% block="M39x3"
    thread_M39x3 = 27,
    //% block="M40x3"
    thread_M40x3 = 28,
    //% block="M42x4"
    thread_M42x4 = 29,
    //% block="M45x4"
    thread_M45x4 = 30,
    //% block="M48x4"
    thread_M48x4 = 31,
    //% block="M50x4"
    thread_M50x4 = 32,
    //% block="M52x4"
    thread_M52x4 = 33,
    //% block="M55x4"
    thread_M55x4 = 34,
    //% block="M56x4"
    thread_M56x4 = 35,
    //% block="M58x4"
    thread_M58x4 = 36,
    //% block="M60x4"
    thread_M60x4 = 37,
    //% block="M62x4"
    thread_M62x4 = 38,
    //% block="M64x5.5"
    thread_M64x5p5 = 39,
    //% block="M65x4"
    thread_M65x4 = 40,
    //% block="M68x6"
    thread_M68x6 = 41,
    //% block="M70x6"
    thread_M70x6 = 42,
    //% block="M72x6"
    thread_M72x6 = 43,
    //% block="M75x6"
    thread_M75x6 = 44,
    //% block="M76x6"
    thread_M76x6 = 45,
    //% block="M80x6"
    thread_M80x6 = 46,
    //% block="M85x6"
    thread_M85x6 = 47,
    //% block="M90x6"
    thread_M90x6 = 48,
    //% block="M95x6"
    thread_M95x6 = 49,
    //% block="M100x6"
    thread_M100x6 = 50,
    //% block="M105x6"
    thread_M105x6 = 51,
    //% block="M110x6"
    thread_M110x6 = 52,
    //% block="M115x6"
    thread_M115x6 = 53,
    //% block="M120x6"
    thread_M120x6 = 54,
    //% block="M125x8"
    thread_M125x8 = 55,
    //% block="M130x8"
    thread_M130x8 = 56,
    //% block="M135x6"
    thread_M135x6 = 57,
    //% block="M140x8"
    thread_M140x8 = 58,
    //% block="M145x6"
    thread_M145x6 = 59,
    //% block="M150x8"
    thread_M150x8 = 60,
    //% block="M155x6"
    thread_M155x6 = 61,
    //% block="M160x8"
    thread_M160x8 = 62,
    //% block="M165x6"
    thread_M165x6 = 63,
    //% block="M170x8"
    thread_M170x8 = 64,
    //% block="M175x6"
    thread_M175x6 = 65,
    //% block="M180x8"
    thread_M180x8 = 66,
    //% block="M185x6"
    thread_M185x6 = 67,
    //% block="M190x8"
    thread_M190x8 = 68,
    //% block="M195x6"
    thread_M195x6 = 69,
    //% block="M200x8"
    thread_M200x8 = 70,
    //% block="M205x6"
    thread_M205x6 = 71,
    //% block="M210x8"
    thread_M210x8 = 72,
    //% block="M215x6"
    thread_M215x6 = 73,
    //% block="M220x8"
    thread_M220x8 = 74,
    //% block="M225x6"
    thread_M225x6 = 75,
    //% block="M230x6"
    thread_M230x6 = 76,
    //% block="M235x6"
    thread_M235x6 = 77,
    //% block="M240x8"
    thread_M240x8 = 78,
    //% block="M245x6"
    thread_M245x6 = 79,
    //% block="M250x8"
    thread_M250x8 = 80,
    //% block="M255x6"
    thread_M255x6 = 81,
    //% block="M260x8"
    thread_M260x8 = 82,
    //% block="M265x6"
    thread_M265x6 = 83,
    //% block="M270x6"
    thread_M270x6 = 84,
    //% block="M275x6"
    thread_M275x6 = 85,
    //% block="M280x8"
    thread_M280x8 = 86,
    //% block="M285x6"
    thread_M285x6 = 87,
    //% block="M290x6"
    thread_M290x6 = 88,
    //% block="M295x6"
    thread_M295x6 = 89,
    //% block="M300x8"
    thread_M300x8 = 90,
    //% block="M310x6"
    thread_M310x6 = 91,
    //% block="M320x6"
    thread_M320x6 = 92,
    //% block="M330x6"
    thread_M330x6 = 93,
    //% block="M340x6"
    thread_M340x6 = 94,
    //% block="M350x6"
    thread_M350x6 = 95,
    //% block="M360x6"
    thread_M360x6 = 96,
    //% block="M370x6"
    thread_M370x6 = 97,
    //% block="M380x6"
    thread_M380x6 = 98,
    //% block="M390x6"
    thread_M390x6 = 99,
    //% block="M400x6"
    thread_M400x6 = 100,
}

declare const enum MetricFineSizes {
    //% block="M0.3x0.08"
    thread_M0p3x0p08 = 0,
    //% block="M1.1x0.2"
    thread_M1p1x0p2 = 1,
    //% block="M1.6x0.2"
    thread_M1p6x0p2 = 2,
    //% block="M2.3x0.4"
    thread_M2p3x0p4 = 3,
    //% block="M4.5x0.5"
    thread_M4p5x0p5 = 4,
    //% block="M6x0.75"
    thread_M6x0p75 = 5,
    //% block="M6x0.7"
    thread_M6x0p7 = 6,
    //% block="M6x0.5"
    thread_M6x0p5 = 7,
    //% block="M7x0.5"
    thread_M7x0p5 = 8,
    //% block="M8x0.8"
    thread_M8x0p8 = 9,
    //% block="M8x0.75"
    thread_M8x0p75 = 10,
    //% block="M8x0.5"
    thread_M8x0p5 = 11,
    //% block="M9x1"
    thread_M9x1 = 12,
    //% block="M9x0.75"
    thread_M9x0p75 = 13,
    //% block="M9x0.5"
    thread_M9x0p5 = 14,
    //% block="M10x1.12"
    thread_M10x1p12 = 15,
    //% block="M10x1"
    thread_M10x1 = 16,
    //% block="M10x0.75"
    thread_M10x0p75 = 17,
    //% block="M10x0.5"
    thread_M10x0p5 = 18,
    //% block="M11x1"
    thread_M11x1 = 19,
    //% block="M11x0.75"
    thread_M11x0p75 = 20,
    //% block="M11x0.5"
    thread_M11x0p5 = 21,
    //% block="M12x1.25"
    thread_M12x1p25 = 22,
    //% block="M12x1"
    thread_M12x1 = 23,
    //% block="M12x0.75"
    thread_M12x0p75 = 24,
    //% block="M12x0.5"
    thread_M12x0p5 = 25,
    //% block="M14x1.25"
    thread_M14x1p25 = 26,
    //% block="M14x1"
    thread_M14x1 = 27,
    //% block="M14x0.75"
    thread_M14x0p75 = 28,
    //% block="M14x0.5"
    thread_M14x0p5 = 29,
    //% block="M15x1"
    thread_M15x1 = 30,
    //% block="M16x1.5"
    thread_M16x1p5 = 31,
    //% block="M16x1.25"
    thread_M16x1p25 = 32,
    //% block="M16x1"
    thread_M16x1 = 33,
    //% block="M16x0.75"
    thread_M16x0p75 = 34,
    //% block="M16x0.5"
    thread_M16x0p5 = 35,
    //% block="M17x1"
    thread_M17x1 = 36,
    //% block="M18x1.5"
    thread_M18x1p5 = 37,
    //% block="M18x1.25"
    thread_M18x1p25 = 38,
    //% block="M18x1"
    thread_M18x1 = 39,
    //% block="M18x0.75"
    thread_M18x0p75 = 40,
    //% block="M18x0.5"
    thread_M18x0p5 = 41,
    //% block="M20x1.5"
    thread_M20x1p5 = 42,
    //% block="M20x1"
    thread_M20x1 = 43,
    //% block="M20x0.75"
    thread_M20x0p75 = 44,
    //% block="M20x0.5"
    thread_M20x0p5 = 45,
    //% block="M22x2"
    thread_M22x2 = 46,
    //% block="M22x1.5"
    thread_M22x1p5 = 47,
    //% block="M22x1"
    thread_M22x1 = 48,
    //% block="M22x0.75"
    thread_M22x0p75 = 49,
    //% block="M22x0.5"
    thread_M22x0p5 = 50,
    //% block="M24x2"
    thread_M24x2 = 51,
    //% block="M24x1.5"
    thread_M24x1p5 = 52,
    //% block="M24x1"
    thread_M24x1 = 53,
    //% block="M24x0.75"
    thread_M24x0p75 = 54,
    //% block="M25x1.5"
    thread_M25x1p5 = 55,
    //% block="M25x1"
    thread_M25x1 = 56,
    //% block="M27x1.5"
    thread_M27x1p5 = 57,
    //% block="M27x1"
    thread_M27x1 = 58,
    //% block="M27x0.75"
    thread_M27x0p75 = 59,
    //% block="M28x1.5"
    thread_M28x1p5 = 60,
    //% block="M28x1"
    thread_M28x1 = 61,
    //% block="M30x2.5"
    thread_M30x2p5 = 62,
    //% block="M30x2"
    thread_M30x2 = 63,
    //% block="M30x1.5"
    thread_M30x1p5 = 64,
    //% block="M30x1"
    thread_M30x1 = 65,
    //% block="M30x0.75"
    thread_M30x0p75 = 66,
    //% block="M32x1.5"
    thread_M32x1p5 = 67,
    //% block="M33x2"
    thread_M33x2 = 68,
    //% block="M33x1.5"
    thread_M33x1p5 = 69,
    //% block="M33x1"
    thread_M33x1 = 70,
    //% block="M33x0.75"
    thread_M33x0p75 = 71,
    //% block="M36x2"
    thread_M36x2 = 72,
    //% block="M36x1.5"
    thread_M36x1p5 = 73,
    //% block="M36x1"
    thread_M36x1 = 74,
    //% block="M39x2"
    thread_M39x2 = 75,
    //% block="M39x1.5"
    thread_M39x1p5 = 76,
    //% block="M39x1"
    thread_M39x1 = 77,
    //% block="M40x2.5"
    thread_M40x2p5 = 78,
    //% block="M40x2"
    thread_M40x2 = 79,
    //% block="M40x1.5"
    thread_M40x1p5 = 80,
    //% block="M42x3"
    thread_M42x3 = 81,
    //% block="M42x2"
    thread_M42x2 = 82,
    //% block="M42x1.5"
    thread_M42x1p5 = 83,
    //% block="M42x1"
    thread_M42x1 = 84,
    //% block="M45x3"
    thread_M45x3 = 85,
    //% block="M45x2"
    thread_M45x2 = 86,
    //% block="M45x1.5"
    thread_M45x1p5 = 87,
    //% block="M45x1"
    thread_M45x1 = 88,
    //% block="M48x3"
    thread_M48x3 = 89,
    //% block="M48x2"
    thread_M48x2 = 90,
    //% block="M48x1.5"
    thread_M48x1p5 = 91,
    //% block="M50x3"
    thread_M50x3 = 92,
    //% block="M50x2"
    thread_M50x2 = 93,
    //% block="M50x1.5"
    thread_M50x1p5 = 94,
    //% block="M52x3"
    thread_M52x3 = 95,
    //% block="M52x2"
    thread_M52x2 = 96,
    //% block="M52x1.5"
    thread_M52x1p5 = 97,
    //% block="M55x3"
    thread_M55x3 = 98,
    //% block="M55x2"
    thread_M55x2 = 99,
    //% block="M55x1.5"
    thread_M55x1p5 = 100,
    //% block="M56x3"
    thread_M56x3 = 101,
    //% block="M56x2"
    thread_M56x2 = 102,
    //% block="M56x1.5"
    thread_M56x1p5 = 103,
    //% block="M56x1"
    thread_M56x1 = 104,
    //% block="M58x3"
    thread_M58x3 = 105,
    //% block="M58x2"
    thread_M58x2 = 106,
    //% block="M58x1.5"
    thread_M58x1p5 = 107,
    //% block="M60x3"
    thread_M60x3 = 108,
    //% block="M60x2"
    thread_M60x2 = 109,
    //% block="M60x1.5"
    thread_M60x1p5 = 110,
    //% block="M60x1"
    thread_M60x1 = 111,
    //% block="M62x3"
    thread_M62x3 = 112,
    //% block="M62x2"
    thread_M62x2 = 113,
    //% block="M62x1.5"
    thread_M62x1p5 = 114,
    //% block="M64x4"
    thread_M64x4 = 115,
    //% block="M64x3"
    thread_M64x3 = 116,
    //% block="M64x2"
    thread_M64x2 = 117,
    //% block="M64x1.5"
    thread_M64x1p5 = 118,
    //% block="M64x1"
    thread_M64x1 = 119,
    //% block="M65x3"
    thread_M65x3 = 120,
    //% block="M65x2"
    thread_M65x2 = 121,
    //% block="M65x1.5"
    thread_M65x1p5 = 122,
    //% block="M68x4"
    thread_M68x4 = 123,
    //% block="M68x3"
    thread_M68x3 = 124,
    //% block="M68x2"
    thread_M68x2 = 125,
    //% block="M68x1.5"
    thread_M68x1p5 = 126,
    //% block="M68x1"
    thread_M68x1 = 127,
    //% block="M70x4"
    thread_M70x4 = 128,
    //% block="M70x3"
    thread_M70x3 = 129,
    //% block="M70x2"
    thread_M70x2 = 130,
    //% block="M70x1.5"
    thread_M70x1p5 = 131,
    //% block="M72x4"
    thread_M72x4 = 132,
    //% block="M72x3"
    thread_M72x3 = 133,
    //% block="M72x2"
    thread_M72x2 = 134,
    //% block="M72x1.5"
    thread_M72x1p5 = 135,
    //% block="M72x1"
    thread_M72x1 = 136,
    //% block="M75x4"
    thread_M75x4 = 137,
    //% block="M75x3"
    thread_M75x3 = 138,
    //% block="M75x2"
    thread_M75x2 = 139,
    //% block="M75x1.5"
    thread_M75x1p5 = 140,
    //% block="M76x4"
    thread_M76x4 = 141,
    //% block="M76x3"
    thread_M76x3 = 142,
    //% block="M76x2"
    thread_M76x2 = 143,
    //% block="M76x1.5"
    thread_M76x1p5 = 144,
    //% block="M76x1"
    thread_M76x1 = 145,
    //% block="M80x4"
    thread_M80x4 = 146,
    //% block="M80x3"
    thread_M80x3 = 147,
    //% block="M80x2"
    thread_M80x2 = 148,
    //% block="M80x1.5"
    thread_M80x1p5 = 149,
    //% block="M80x1"
    thread_M80x1 = 150,
    //% block="M85x4"
    thread_M85x4 = 151,
    //% block="M85x3"
    thread_M85x3 = 152,
    //% block="M85x2"
    thread_M85x2 = 153,
    //% block="M85x1.5"
    thread_M85x1p5 = 154,
    //% block="M90x4"
    thread_M90x4 = 155,
    //% block="M90x3"
    thread_M90x3 = 156,
    //% block="M90x2"
    thread_M90x2 = 157,
    //% block="M90x1.5"
    thread_M90x1p5 = 158,
    //% block="M95x4"
    thread_M95x4 = 159,
    //% block="M95x3"
    thread_M95x3 = 160,
    //% block="M95x2"
    thread_M95x2 = 161,
    //% block="M95x1.5"
    thread_M95x1p5 = 162,
    //% block="M100x4"
    thread_M100x4 = 163,
    //% block="M100x3"
    thread_M100x3 = 164,
    //% block="M100x2"
    thread_M100x2 = 165,
    //% block="M100x1.5"
    thread_M100x1p5 = 166,
    //% block="M105x4"
    thread_M105x4 = 167,
    //% block="M105x3"
    thread_M105x3 = 168,
    //% block="M105x2"
    thread_M105x2 = 169,
    //% block="M105x1.5"
    thread_M105x1p5 = 170,
    //% block="M110x4"
    thread_M110x4 = 171,
    //% block="M110x3"
    thread_M110x3 = 172,
    //% block="M110x2"
    thread_M110x2 = 173,
    //% block="M110x1.5"
    thread_M110x1p5 = 174,
    //% block="M115x4"
    thread_M115x4 = 175,
    //% block="M115x3"
    thread_M115x3 = 176,
    //% block="M115x2"
    thread_M115x2 = 177,
    //% block="M115x1.5"
    thread_M115x1p5 = 178,
    //% block="M120x4"
    thread_M120x4 = 179,
    //% block="M120x3"
    thread_M120x3 = 180,
    //% block="M120x2"
    thread_M120x2 = 181,
    //% block="M120x1.5"
    thread_M120x1p5 = 182,
    //% block="M125x6"
    thread_M125x6 = 183,
    //% block="M125x4"
    thread_M125x4 = 184,
    //% block="M125x3"
    thread_M125x3 = 185,
    //% block="M125x2"
    thread_M125x2 = 186,
    //% block="M125x1.5"
    thread_M125x1p5 = 187,
    //% block="M130x6"
    thread_M130x6 = 188,
    //% block="M130x4"
    thread_M130x4 = 189,
    //% block="M130x3"
    thread_M130x3 = 190,
    //% block="M130x2"
    thread_M130x2 = 191,
    //% block="M130x1.5"
    thread_M130x1p5 = 192,
    //% block="M135x4"
    thread_M135x4 = 193,
    //% block="M135x3"
    thread_M135x3 = 194,
    //% block="M135x2"
    thread_M135x2 = 195,
    //% block="M135x1.5"
    thread_M135x1p5 = 196,
    //% block="M140x6"
    thread_M140x6 = 197,
    //% block="M140x4"
    thread_M140x4 = 198,
    //% block="M140x3"
    thread_M140x3 = 199,
    //% block="M140x2"
    thread_M140x2 = 200,
    //% block="M140x1.5"
    thread_M140x1p5 = 201,
    //% block="M145x4"
    thread_M145x4 = 202,
    //% block="M145x3"
    thread_M145x3 = 203,
    //% block="M145x2"
    thread_M145x2 = 204,
    //% block="M145x1.5"
    thread_M145x1p5 = 205,
    //% block="M150x6"
    thread_M150x6 = 206,
    //% block="M150x4"
    thread_M150x4 = 207,
    //% block="M150x3"
    thread_M150x3 = 208,
    //% block="M150x2"
    thread_M150x2 = 209,
    //% block="M150x1.5"
    thread_M150x1p5 = 210,
    //% block="M155x4"
    thread_M155x4 = 211,
    //% block="M155x3"
    thread_M155x3 = 212,
    //% block="M155x2"
    thread_M155x2 = 213,
    //% block="M160x6"
    thread_M160x6 = 214,
    //% block="M160x4"
    thread_M160x4 = 215,
    //% block="M160x3"
    thread_M160x3 = 216,
    //% block="M160x2"
    thread_M160x2 = 217,
    //% block="M165x4"
    thread_M165x4 = 218,
    //% block="M165x3"
    thread_M165x3 = 219,
    //% block="M165x2"
    thread_M165x2 = 220,
    //% block="M170x6"
    thread_M170x6 = 221,
    //% block="M170x4"
    thread_M170x4 = 222,
    //% block="M170x3"
    thread_M170x3 = 223,
    //% block="M170x2"
    thread_M170x2 = 224,
    //% block="M175x4"
    thread_M175x4 = 225,
    //% block="M175x3"
    thread_M175x3 = 226,
    //% block="M175x2"
    thread_M175x2 = 227,
    //% block="M180x6"
    thread_M180x6 = 228,
    //% block="M180x4"
    thread_M180x4 = 229,
    //% block="M180x3"
    thread_M180x3 = 230,
    //% block="M180x2"
    thread_M180x2 = 231,
    //% block="M185x4"
    thread_M185x4 = 232,
    //% block="M185x3"
    thread_M185x3 = 233,
    //% block="M185x2"
    thread_M185x2 = 234,
    //% block="M190x6"
    thread_M190x6 = 235,
    //% block="M190x4"
    thread_M190x4 = 236,
    //% block="M190x3"
    thread_M190x3 = 237,
    //% block="M190x2"
    thread_M190x2 = 238,
    //% block="M195x4"
    thread_M195x4 = 239,
    //% block="M195x3"
    thread_M195x3 = 240,
    //% block="M195x2"
    thread_M195x2 = 241,
    //% block="M200x6"
    thread_M200x6 = 242,
    //% block="M200x4"
    thread_M200x4 = 243,
    //% block="M200x3"
    thread_M200x3 = 244,
    //% block="M200x2"
    thread_M200x2 = 245,
    //% block="M205x4"
    thread_M205x4 = 246,
    //% block="M205x3"
    thread_M205x3 = 247,
    //% block="M205x2"
    thread_M205x2 = 248,
    //% block="M210x6"
    thread_M210x6 = 249,
    //% block="M210x4"
    thread_M210x4 = 250,
    //% block="M210x3"
    thread_M210x3 = 251,
    //% block="M210x2"
    thread_M210x2 = 252,
    //% block="M215x4"
    thread_M215x4 = 253,
    //% block="M215x3"
    thread_M215x3 = 254,
    //% block="M220x6"
    thread_M220x6 = 255,
    //% block="M220x4"
    thread_M220x4 = 256,
    //% block="M220x3"
    thread_M220x3 = 257,
    //% block="M220x2"
    thread_M220x2 = 258,
    //% block="M225x4"
    thread_M225x4 = 259,
    //% block="M225x3"
    thread_M225x3 = 260,
    //% block="M225x2"
    thread_M225x2 = 261,
    //% block="M230x4"
    thread_M230x4 = 262,
    //% block="M230x3"
    thread_M230x3 = 263,
    //% block="M230x2"
    thread_M230x2 = 264,
    //% block="M235x4"
    thread_M235x4 = 265,
    //% block="M235x3"
    thread_M235x3 = 266,
    //% block="M240x6"
    thread_M240x6 = 267,
    //% block="M240x4"
    thread_M240x4 = 268,
    //% block="M240x3"
    thread_M240x3 = 269,
    //% block="M240x2"
    thread_M240x2 = 270,
    //% block="M245x4"
    thread_M245x4 = 271,
    //% block="M245x3"
    thread_M245x3 = 272,
    //% block="M245x2"
    thread_M245x2 = 273,
    //% block="M250x6"
    thread_M250x6 = 274,
    //% block="M250x4"
    thread_M250x4 = 275,
    //% block="M250x3"
    thread_M250x3 = 276,
    //% block="M250x2"
    thread_M250x2 = 277,
    //% block="M255x4"
    thread_M255x4 = 278,
    //% block="M255x3"
    thread_M255x3 = 279,
    //% block="M260x6"
    thread_M260x6 = 280,
    //% block="M260x4"
    thread_M260x4 = 281,
    //% block="M260x3"
    thread_M260x3 = 282,
    //% block="M265x4"
    thread_M265x4 = 283,
    //% block="M265x3"
    thread_M265x3 = 284,
    //% block="M270x4"
    thread_M270x4 = 285,
    //% block="M270x3"
    thread_M270x3 = 286,
    //% block="M275x4"
    thread_M275x4 = 287,
    //% block="M275x3"
    thread_M275x3 = 288,
    //% block="M280x6"
    thread_M280x6 = 289,
    //% block="M280x4"
    thread_M280x4 = 290,
    //% block="M280x3"
    thread_M280x3 = 291,
    //% block="M285x4"
    thread_M285x4 = 292,
    //% block="M285x3"
    thread_M285x3 = 293,
    //% block="M290x4"
    thread_M290x4 = 294,
    //% block="M290x3"
    thread_M290x3 = 295,
    //% block="M295x4"
    thread_M295x4 = 296,
    //% block="M295x3"
    thread_M295x3 = 297,
    //% block="M300x6"
    thread_M300x6 = 298,
    //% block="M300x4"
    thread_M300x4 = 299,
    //% block="M300x3"
    thread_M300x3 = 300,
    //% block="M310x4"
    thread_M310x4 = 301,
    //% block="M320x4"
    thread_M320x4 = 302,
    //% block="M330x4"
    thread_M330x4 = 303,
    //% block="M340x4"
    thread_M340x4 = 304,
    //% block="M350x4"
    thread_M350x4 = 305,
    //% block="M360x4"
    thread_M360x4 = 306,
    //% block="M370x4"
    thread_M370x4 = 307,
    //% block="M380x4"
    thread_M380x4 = 308,
    //% block="M390x4"
    thread_M390x4 = 309,
    //% block="M400x4"
    thread_M400x4 = 310,
}

declare const enum UnifiedCoarseSizes {
    //% block="UNC 1/4"
    thread_UNC_1on4 = 0,
    //% block="UNC 5/16"
    thread_UNC_5on16 = 1,
    //% block="UNC 3/8"
    thread_UNC_3on8 = 2,
    //% block="UNC 7/16"
    thread_UNC_7on16 = 3,
    //% block="UNC 1/2"
    thread_UNC_1on2 = 4,
    //% block="UNC 9/16"
    thread_UNC_9on16 = 5,
    //% block="UNC 5/8"
    thread_UNC_5on8 = 6,
    //% block="UNC 3/4"
    thread_UNC_3on4 = 7,
    //% block="UNC 7/8"
    thread_UNC_7on8 = 8,
    //% block="UNC #1"
    thread_UNC_no1 = 9,
    //% block="UNC 1"
    thread_UNC_1 = 10,
    //% block="UNC 1 1/8"
    thread_UNC_1_1on8 = 11,
    //% block="UNC 1 1/4"
    thread_UNC_1_1on4 = 12,
    //% block="UNC 1 3/8"
    thread_UNC_1_3on8 = 13,
    //% block="UNC 1 1/2"
    thread_UNC_1_1on2 = 14,
    //% block="UNC 1 3/4"
    thread_UNC_1_3on4 = 15,
    //% block="UNC #2"
    thread_UNC_no2 = 16,
    //% block="UNC 2"
    thread_UNC_2 = 17,
    //% block="UNC 2 1/4"
    thread_UNC_2_1on4 = 18,
    //% block="UNC 2 1/2"
    thread_UNC_2_1on2 = 19,
    //% block="UNC 2 3/4"
    thread_UNC_2_3on4 = 20,
    //% block="UNC #3"
    thread_UNC_no3 = 21,
    //% block="UNC 3"
    thread_UNC_3 = 22,
    //% block="UNC 3 1/4"
    thread_UNC_3_1on4 = 23,
    //% block="UNC 3 1/2"
    thread_UNC_3_1on2 = 24,
    //% block="UNC 3 3/4"
    thread_UNC_3_3on4 = 25,
    //% block="UNC #4"
    thread_UNC_no4 = 26,
    //% block="UNC 4"
    thread_UNC_4 = 27,
    //% block="UNC #5"
    thread_UNC_no5 = 28,
    //% block="UNC #6"
    thread_UNC_no6 = 29,
    //% block="UNC #8"
    thread_UNC_no8 = 30,
    //% block="UNC #10"
    thread_UNC_no10 = 31,
    //% block="UNC #12"
    thread_UNC_no12 = 32,
}

declare const enum UnifiedFineSizes {
    //% block="UNF #0"
    thread_UNF_no0 = 0,
    //% block="UNF 1/4"
    thread_UNF_1on4 = 1,
    //% block="UNF 5/16"
    thread_UNF_5on16 = 2,
    //% block="UNF 3/8"
    thread_UNF_3on8 = 3,
    //% block="UNF 7/16"
    thread_UNF_7on16 = 4,
    //% block="UNF 1/2"
    thread_UNF_1on2 = 5,
    //% block="UNF 9/16"
    thread_UNF_9on16 = 6,
    //% block="UNF 5/8"
    thread_UNF_5on8 = 7,
    //% block="UNF 3/4"
    thread_UNF_3on4 = 8,
    //% block="UNF 7/8"
    thread_UNF_7on8 = 9,
    //% block="UNF #1"
    thread_UNF_no1 = 10,
    //% block="UNF 1"
    thread_UNF_1 = 11,
    //% block="UNF 1 1/8"
    thread_UNF_1_1on8 = 12,
    //% block="UNF 1 1/4"
    thread_UNF_1_1on4 = 13,
    //% block="UNF 1 3/8"
    thread_UNF_1_3on8 = 14,
    //% block="UNF 1 1/2"
    thread_UNF_1_1on2 = 15,
    //% block="UNF #2"
    thread_UNF_no2 = 16,
    //% block="UNF #3"
    thread_UNF_no3 = 17,
    //% block="UNF #4"
    thread_UNF_no4 = 18,
    //% block="UNF #5"
    thread_UNF_no5 = 19,
    //% block="UNF #6"
    thread_UNF_no6 = 20,
    //% block="UNF #8"
    thread_UNF_no8 = 21,
    //% block="UNF #10"
    thread_UNF_no10 = 22,
    //% block="UNF #12"
    thread_UNF_no12 = 23,
}

declare const enum UnifiedExtraFineSizes {
    //% block="UNEF 1/4"
    thread_UNEF_1on4 = 0,
    //% block="UNEF 5/16"
    thread_UNEF_5on16 = 1,
    //% block="UNEF 3/8"
    thread_UNEF_3on8 = 2,
    //% block="UNEF 7/16"
    thread_UNEF_7on16 = 3,
    //% block="UNEF 1/2"
    thread_UNEF_1on2 = 4,
    //% block="UNEF 9/16"
    thread_UNEF_9on16 = 5,
    //% block="UNEF 5/8"
    thread_UNEF_5on8 = 6,
    //% block="UNEF 11/16"
    thread_UNEF_11on16 = 7,
    //% block="UNEF 3/4"
    thread_UNEF_3on4 = 8,
    //% block="UNEF 13/16"
    thread_UNEF_13on16 = 9,
    //% block="UNEF 7/8"
    thread_UNEF_7on8 = 10,
    //% block="UNEF 15/16"
    thread_UNEF_15on16 = 11,
    //% block="UNEF 1"
    thread_UNEF_1 = 12,
    //% block="UNEF 1 1/16"
    thread_UNEF_1_1on16 = 13,
    //% block="UNEF 1 1/8"
    thread_UNEF_1_1on8 = 14,
    //% block="UNEF 1 3/16"
    thread_UNEF_1_3on16 = 15,
    //% block="UNEF 1 1/4"
    thread_UNEF_1_1on4 = 16,
    //% block="UNEF 1 5/16"
    thread_UNEF_1_5on16 = 17,
    //% block="UNEF 1 3/8"
    thread_UNEF_1_3on8 = 18,
    //% block="UNEF 1 7/16"
    thread_UNEF_1_7on16 = 19,
    //% block="UNEF 1 1/2"
    thread_UNEF_1_1on2 = 20,
    //% block="UNEF 1 9/16"
    thread_UNEF_1_9on16 = 21,
    //% block="UNEF 1 5/8"
    thread_UNEF_1_5on8 = 22,
    //% block="UNEF 1 11/16"
    thread_UNEF_1_11on16 = 23,
    //% block="UNEF #12"
    thread_UNEF_no12 = 24,
}

declare const enum UnifiedNumberedSizes {
    //% block="32 UN"
    thread_32_UN = 0,
    //% block="28 UN"
    thread_28_UN = 1,
    //% block="20 UN"
    thread_20_UN = 2,
    //% block="4 UN"
    thread_4_UN = 3,
    //% block="6 UN"
    thread_6_UN = 4,
    //% block="8 UN"
    thread_8_UN = 5,
    //% block="12 UN"
    thread_12_UN = 6,
    //% block="16 UN"
    thread_16_UN = 7,
}

declare const enum BritishSizes {
    //% block="G1/16"
    thread_G1on16 = 0,
    //% block="G1/8"
    thread_G1on8 = 1,
    //% block="G1/4"
    thread_G1on4 = 2,
    //% block="G3/8"
    thread_G3on8 = 3,
    //% block="G1/2"
    thread_G1on2 = 4,
    //% block="G5/8"
    thread_G5on8 = 5,
    //% block="G3/4"
    thread_G3on4 = 6,
    //% block="G7/8"
    thread_G7on8 = 7,
    //% block="G1"
    thread_G1 = 8,
    //% block="G1 1/8"
    thread_G1_1on8 = 9,
    //% block="G1 1/4"
    thread_G1_1on4 = 10,
    //% block="G1 1/2"
    thread_G1_1on2 = 11,
    //% block="G1 3/4"
    thread_G1_3on4 = 12,
    //% block="G2"
    thread_G2 = 13,
    //% block="G2 1/4"
    thread_G2_1on4 = 14,
    //% block="G2 1/2"
    thread_G2_1on2 = 15,
    //% block="G2 3/4"
    thread_G2_3on4 = 16,
    //% block="G3"
    thread_G3 = 17,
    //% block="G3 1/2"
    thread_G3_1on2 = 18,
    //% block="G4"
    thread_G4 = 19,
    //% block="G4 1/2"
    thread_G4_1on2 = 20,
    //% block="G5"
    thread_G5 = 21,
    //% block="G5 1/2"
    thread_G5_1on2 = 22,
    //% block="G6"
    thread_G6 = 23,
}

declare const enum ThreadShapeType {
    //% block="thread"
    Thread,
    //% block="thread cutting tap"
    ThreadCuttingTap
}