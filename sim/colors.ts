/// <reference path="../libs/core/enums.d.ts"/>


// TODO - having difficulties loading external modules here
// so loaded as a script in the simulator.html instead. :/
//import * as chroma from "chroma-js"



namespace pxsim.colors {



    function _makeBlock(JSCadBlockStr: string, body: RefAction) {
        return new Promise<void>((resolve, reject) => {
            // push a new statement as the parent
            board().addBlock(JSCadBlockStr);

            // execute the child blocks
            pxsim.runtime.runFiberAsync(body).then((result) => {
                // return back to previous parent statement, or main
                board().popBlock();
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }


    //% blockId=randomColor block="random color"
    //% inlineInputMode=inline
    //% group="Colors"
    //% advanced=false
    export function randomColor(): number {
        const randomLightness = .3 + Math.random() *.5
        const randomHue = Math.round(Math.random()*360)
        return  chroma.hsl(randomHue, 1, randomLightness).num() as number
       
    }

    //% blockId=rainbowColor block="rainbow color: $rainbowColor || color wheel increment: $colorWheelDegrees °"
    //% inlineInputMode=inline
    //% rainbowColor.defl=0
    //% colorWheelDegrees.defl=20
    //% group="Colors"
    //% advanced=false
    export function rainbowColor(rainbowColor: number, colorWheelDegrees?: number): number {
        const colorWheelIncr = colorWheelDegrees || 20
 
        const hue = (rainbowColor * colorWheelIncr) %360
        return chroma.hsl(hue, 1, .5).num() as number
    }

    //% blockId=color_block block="color $color" 
    //% group="Colors"
    //% topblock=false
    //% handlerStatement=true
    //% color.fieldOptions.decompileLiterals=true color.fieldOptions.columns=1 color.fieldOptions.className='rgbColorPicker'    
    //% color.fieldOptions.colours='["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b", "#4ebed7"]'
    //% color.defl=0x4ebed7
    //% color.shadow="colorNumberPicker"
    export function colorAsync(color: number, body: RefAction): Promise<void> {

        let statementCode = `union([<CHILDREN>])`
        if (color !== undefined && color !== 0x4ebed7) {
            const red = (color & 0xFF0000) >> 16;
            const green = (color & 0x00FF00) >> 8;
            const blue = (color & 0x0000FF);

            statementCode = `color([${red / 255}, ${green / 255}, ${blue / 255}], ${statementCode})`
        }
        return _makeBlock(statementCode, body);




    }

}