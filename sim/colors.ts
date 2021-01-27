/// <reference path="../libs/core/enums.d.ts"/>


// TODO - having difficulties loading external modules here
// so loaded as a script in the simulator.html instead. :/
//import * as chroma from "chroma-js"



namespace pxsim.colors {


    const chroma = (window as any).chroma
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



    //% blockId=color_block block="color $color=colorsChooseColor" 
    //% group="Colors"
    //% topblock=false
    //% help=colors/all
    //% handlerStatement=true
    //% weight=80
    /**
     * set the shapes inside this block to a particular color
     * @param color - color to set e.g. 0xc0c0c0
     */
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
    //% blockId=randomColor block="random color"
    //% inlineInputMode=inline
    //% help=colors/all
    //% group="Colors"
    //% advanced=false
    //% weight=90
    export function randomColor(): number {
        const randomLightness = .3 + Math.random() *.5
        const randomHue = Math.round(Math.random()*360)

        return  chroma.hsl(randomHue, 1, randomLightness).num() as number
       
    }

    //% blockId=rainbowColor block="rainbow color: $rainbowColor || color wheel increment: $colorWheelDegrees °"
    //% inlineInputMode=inline
    //% help=colors/rainbow
    //% rainbowColor.defl=0
    //% colorWheelDegrees.defl=20
    //% group="Colors"
    //% advanced=false
    /**
     * Use rainbow color in order to go through all the colors of the rainbow in order.
     * Very handy to use inside of a for loop.
     * @param rainbowColor - what index of the rainbow to use.
     * @param colorWheelDegrees - how many degrees to skip across the color wheel.  
     * By default this is set to 20 degrees, so the hues picked will be every 20 degrees on the color wheel.
     */
    //% weight=100
    export function rainbowColor(rainbowColor: number, colorWheelDegrees?: number): number {
        const colorWheelIncr = colorWheelDegrees || 20
 
        const hue = (rainbowColor * colorWheelIncr) %360
        return chroma.hsl(hue, 1, .5).num() as number
    }


     /**
     * Kelvin is a temperature unit which is often used as a measure of the colour temperature of light sources. 
     * Black bodies at temperatures below about 4000 K appear reddish, whereas those above about 7500 K appear bluish. 
     * @param kelvinDegrees 
     */
    //% blockId=colorTemperature block="color temperature: $kelvinDegrees ° Kelvin"
    //% inlineInputMode=inline
    //% kelvinDegrees.defl=3500
    //% kelvinDegrees.min=0
    //% kelvinDegrees.max=10000
    //% help=colors/all
    //% group="Colors"
    //% advanced=false
    export function colorTemperature(kelvinDegrees: number): number {
        return chroma.temperature(kelvinDegrees).num() as number
    }

    /**
     * Color scale helps you go between two colors incrementally. 
     * Pick a starting color and an ending color, then choose how many colors you want in your scale.
     * Use the colorIndex to choose which color to use. 
     * 
     * The idea is you can go fromColor red toColor purple, and say there are 6 colors you will use.
     * You can then draw each shape with a different color index to get a variation in colors along the scale. 
     * 
     * @param fromColor the starting color in your scale
     * @param toColor the ending color in your scale
     * @param colorIndex which color you want 
     * @param numColors how many total colors there are in your scale
     */
    //% blockId=colorScale block="color scale from: $fromColor=colorsChooseColor to: $toColor=colorsChooseColor colorIndex: $colorIndex || numColors: $numColors"
    //% inlineInputMode=inline
    //% fromColor.defl=0x4ebed7
    //% toColor.defl=0x6B3FA0
    //% colorIndex.defl=0
    //% numColors.defl=6
    //% expandableArgumentMode="enabled" 
    //% help=colors/all
    //% group="Colors"
    //% advanced=false
    export function colorScale(fromColor: number, toColor: number,  colorIndex: number, numColors?: number): number {
      
        let colorCount = isNaN(numColors) ? 6 : Math.max(2, Math.floor(numColors))
        let colorIdx = isNaN(colorIndex) ? 0 : colorIndex % colorCount
       
        const scaleOfColors = chroma.scale([chroma(fromColor), chroma(toColor)]).mode('lch').colors(colorCount + 1)
        return chroma(scaleOfColors[colorIdx +1 ]).num()
    }



    //% blockId=convertFromHex block="convert from hex: $hex"
    //% inlineInputMode=inline
    //% hex.defl="#ED0A3F"
    //% help=colors/all
    //% group="Converters"
    //% advanced=false
    /**
     * use a color from a web (hex) value.  e.g. #c0c0c0
     * @param hex hex value
     */
    export function convertFromHex(hex: string): number {
        return chroma(hex).num() as number
    }


    //% blockId=convertFromRGB block="convert from red: $red green: $green blue $blue (RGB)"
    //% inlineInputMode=inline
    //% red.defl=0xFF
    //% green.defl=0x00
    //% blue.defl=0x00
    //% group="Converters"
    //% advanced=false
    //% help=colors/all
   /**
     * Use a color from a rgb value.  
     * @param red red value
     * @param green green value
     * @param blue blue value
     */
    export function convertFromRGB(red: number, green: number, blue: number): number {
        const boundedRed = (isNaN(red)) ? 0 : Math.max(0, Math.min(red, 255))
        const boundedGreen= (isNaN(green)) ? 0 : Math.max(0, Math.min(green, 255))
        const boundedBlue= (isNaN(blue)) ?  0 : Math.max(0, Math.min(blue, 255))

        return chroma.rgb(boundedRed, boundedGreen, boundedBlue).num() as number
    }

    //% blockId=convertFromHSL block="convert from hue: $hue saturation: $saturation lightness $lightness (HSL)"
    //% inlineInputMode=inline
    //% hue.defl=0
    //% hue.min=0
    //% hue.max=360
    //% saturation.defl=0.5
    //% lightness.defl=0.5
    //% group="Converters"
    //% advanced=false
    /**
     * Use a color from an HSL (hue, saturation, and lightness) value.  Using HSL is handy when trying to pick colors from the rainbow, or colors that are similar, but one is darker than the other.
     * @param hue the color of the rainbow, represented by an angle on the color wheel - 0 to 360
     * @param saturation the amount of grey added to the color, on a scale of 0 to 1
     * @param lightness the amount of light (white) added to the color, on a scale of 0 to 1
     * 
     */
    export function convertFromHSL(hue: number, saturation: number, lightness: number): number {
        const boundedSat = (isNaN(saturation)) ? 0 : Math.max(0, Math.min(saturation, 1))
        const boundedLight= (isNaN(lightness)) ? 0 : Math.max(0, Math.min(lightness, 1))
        const boundedHue = (isNaN(hue)) ? 0 : hue % 360

        return chroma.hsl(boundedHue, boundedSat, boundedLight).num() as number
    }

       
    //% blockId=colorsChooseColor block="%value"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    //% shim=TD_ID
    /**
     * choose a color from a number
     * @param value the hex number
     */
    export function choose(value: number): number {
        // For some reason I can't hide this block from writing to javascript.
        // It should have been a shadow block.
        // So I've made it part of the api.  :/
        return value;
    }





}