/**
 * Parameters for making customizable objects
 * 
 */

declare const enum ParameterTypes {
    Text=1
}

namespace pxsim.parameters {
    

    //% block="test"
    //% inlineInputMode=inline
    //% weight=81
    //% group="Basic"
    /**
        * Test block
    */
    export function test() {
        return 1
    }


    //% block="Text parameter - parameterName $parameterName | defaultText $defaultText ||characterLimit $characterLimit"
    //% inlineInputMode=inline
    //% defaultText.defl="default"
    //% characterLimit.defl=0
    //% group="Basic"
    //% expandableArgumentMode="enabled"
    /**
     * Add text input parameter
     * @param parameterName The label text input field
     * @param defaultText The default text for the text input field
     * @param characterLimit The character limit to apply to the text input. (0 means no limit)
     */
    export function textPerameter(parameterName: string = "", defaultText: string = "", characterLimit?: number) {
        board().addParameter(ParameterTypes.Text, parameterName, defaultText, 1, 2, 3)
    }
}