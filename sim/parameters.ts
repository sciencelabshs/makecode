/**
 * Parameters for making customizable objects
 * 
 */

declare const enum ParameterTypes {
    Text=1,
    Number=2,
    NumberRange=3
}


namespace pxsim.parameters {
    //% block="text - label: $parameterName || default: $defaultText | characterLimit: $characterLimit"
    //% inlineInputMode=inline
    //% parameterName.defl="textInput"
    //% defaultText.defl="text"
    //% characterLimit.defl=0
    //% characterLimit.min=0
    //% group="Text"
    //% expandableArgumentMode="toggle"
    /**
     * Add text input parameter
     * @param parameterName The label for text input field
     * @param defaultText The default text for the text input field
     * @param characterLimit The character limit to apply to the text input. (0 means no limit)
     */
    export function textParameter(parameterName: string = "textInput", defaultText?: string, characterLimit?: number) {
        const varSafeName = parameterName.split(" ").join("")
        board().addParameter({
            type: ParameterTypes.Text, 
            name: parameterName, 
            varSafeName,
            defaultValue: defaultText || "text", 
            characterLimit: characterLimit || 0
        })

        let value
        try {
            value = String($(".parameterDiv").find(`input[name="${varSafeName}"]`).val());
        } catch(e){
            console.error(e)
        }
        return value || defaultText
    }

    //% block="number - label: $parameterName || default: $defaultValue"
    //% inlineInputMode=inline
    //% parameterName.defl="numberInput"
    //% defaultValue.defl="0"
    //% group="Numbers"
    //% expandableArgumentMode="toggle"
    /**
     * Add text input parameter
     * @param parameterName The label for number input field
     * @param defaultValue The default value for the number input field
     */
    export function numberParameter(parameterName: string = "numberInput", defaultValue?: number) {
        const varSafeName = parameterName.split(" ").join("")
        board().addParameter({
            type: ParameterTypes.Number, 
            name: parameterName, 
            varSafeName,
            defaultValue: defaultValue || 0
        })

        let value
        try {
            value = Number($(".parameterDiv").find(`input[name="${varSafeName}"]`).val());
        } catch(e){
            console.error(e)
        }
        return value || defaultValue
    }

    //% block="range - label: $parameterName || default: $defaultValue | min: $minValue | max: $maxValue | step: $stepValue"
    //% inlineInputMode=inline
    //% parameterName.defl="rangeInput"
    //% defaultValue.defl="0"
    //% minValue.defl="0"
    //% maxValue.defl="10"
    //% stepValue.defl="1"
    //% group="Numbers"
    //% expandableArgumentMode="toggle"
    /**
     * Add text input parameter
     * @param parameterName The label for slider
     * @param defaultValue The default text for the text input field
     * @param minValue The minimum value of the slider
     * @param maxValue The maximum value of the slider
     * @param stepValue The default value of the slider
     */
    export function numberRangeParameter(
        parameterName: string = "rangeInput", 
        defaultValue?: number, 
        minValue?: number,
        maxValue?: number,
        stepValue?: number
    ) {
        const varSafeName = parameterName.split(" ").join("")
        console.log('!!asd', maxValue)
        board().addParameter({
            type: ParameterTypes.NumberRange, 
            name: parameterName, 
            varSafeName,
            defaultValue: defaultValue || 0,
            minValue: minValue || 0,
            maxValue: maxValue === undefined ? 10 : maxValue,
            stepValue: stepValue || 1
        })

        let value
        try {
            value = Number($(".parameterDiv").find(`input[name="${varSafeName}"]`).val());
        } catch(e){
            console.error(e)
        }
        return value || defaultValue
    }
}