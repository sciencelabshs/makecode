/**
 * Extra Maths 
 * 
 */
namespace pxsim.extraMath {
    //% block="convert $angle to radians"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=95
    //% group="Angles"
    /**
        * Convert an angle in degrees to an angle in radians
        * @param angle The angle in degrees
        */
    export function radians(angle: number = 0) {
        return Math.PI * angle / 180
    }

    //% block="convert $angle to degrees"
    //% inlineInputMode=inline
    //% angle.defl=0
    //% weight=94
    //% group="Angles"
    /**
        * Convert an angle in degrees to an angle in degrees
        * @param angle The angle in degrees
    */
    export function degrees(angle: number = 0) {
        return 180 * angle / Math.PI
    }


    //% block="sin $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=93
    //% group="Trigonometry in Degrees"
    /**
        * Sine of angle in degrees
        * @param theta The angle in degrees
    */
    export function sin(theta: number = 0) {
        return Math.sin(extraMath.radians(theta))
    }

    //% block="cos $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=92
    //% group="Trigonometry in Degrees"
    /**
        * Cosine of angle in degrees
        * @param theta The angle in degrees
    */
    export function cos(theta: number = 0) {
        return Math.cos(extraMath.radians(theta))
    }


    //% block="tan $theta°"
    //% inlineInputMode=inline
    //% theta.defl=0
    //% weight=91
    //% group="Trigonometry in Degrees"
    /**
        * Tangent of angle in degrees
        * @param theta The angle in degrees
    */
    export function tan(theta: number = 0) {
        return Math.tan(extraMath.radians(theta))
    }


    //% block="arcsin $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=90
    //% group="Trigonometry in Degrees"
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for inverse sin
    */
    export function arcsin(x: number = 0) {
        return extraMath.degrees(Math.asin(x))
    }

    //% block="arccos $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% weight=89
    //% group="Trigonometry in Degrees"
    /**
        * Inverse sine of angle in degrees
        * @param x cos
    */
    export function arccos(x: number = 0) {
        return extraMath.degrees(Math.acos(x))
    }

    //% block="arctan $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=88
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for inverse tan
    */
    export function arctan(x: number = 0) {
        return extraMath.degrees(Math.atan(x))
    }

    //% block="arctan2 $y $x"
    //% inlineInputMode=inline
    //% x.defl=0
    //% y.defl=0
    //% weight=87
    //% group="Trigonometry in Degrees"
    /**
        * Inverse sine of angle in degrees
        * @param x The "adjacent" operand for inverse tan
        * @param y The "opposite" operand for inverse tan
    */
    export function arctan2(y: number = 0,  x: number = 0) {
        return extraMath.degrees(Math.atan2(y, x))
    }


    //% block="ln $x"
    //% inlineInputMode=inline
    //% x.defl=1
    //% weight=86
    //% group="Logarithms"
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for the natural log
    */
    export function ln(x: number = 1) {
        return Math.log(x)
    }

    //% block="log $x base $base"
    //% inlineInputMode=inline
    //% x.defl=1
    //% base.defl=10
    //% weight=85
    //% group="Logarithms"
    /**
        * Inverse sine of angle in degrees
        * @param x The operand for the log
        * @param base The base to take the logarithm with respect to
    */
    export function log(x: number = 1, base: number = 10) {
        return Math.log(x) / Math.log(base) // Use change of base formula
    }

    //% block="π"
    //% inlineInputMode=inline
    //% weight=84
    //% group="Constants"
    /**
        * The mathematical constant Pi, the circle constant.
    */
    export function Pi() {
        return Math.PI
    }

    //% block="e"
    //% inlineInputMode=inline
    //% weight=83
    //% group="Constants"
    /**
        * The mathematical constant e, the exponential constant.
    */
    export function e() {
        return Math.E
    }

    //% block="ϕ"
    //% inlineInputMode=inline
    //% weight=82
    //% group="Constants"
    /**
        * The mathematical constant Phi, the golden ratio.
    */
    export function Phi() {
        return (Math.sqrt(5) + 1) / 2.0
    }

    //% block="√2"
    //% inlineInputMode=inline
    //% weight=81
    //% group="Constants"
    /**
        * The mathematical constant the square root of 2.
    */
    export function Sqrt2() {
        return Math.sqrt(2)
    }
}

