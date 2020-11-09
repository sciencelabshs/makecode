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
    //% block="Text parameter - name $parameterName | default value $defaultText ||characterLimit $characterLimit"
    //% inlineInputMode=inline
    //% defaultText.defl="default"
    //% characterLimit.defl=0
    //% characterLimit.min=0
    //% group="Basic"
    //% expandableArgumentMode="enabled"
    /**
     * Add text input parameter
     * @param parameterName The label for text input field
     * @param defaultText The default text for the text input field
     * @param characterLimit The character limit to apply to the text input. (0 means no limit)
     */
    export function textParameter(parameterName: string = "textInput", defaultText: string = "", characterLimit?: number) {
        const varSafeName = parameterName.split(" ").join("")
        board().addParameter({
            type: ParameterTypes.Text, 
            name: parameterName, 
            varSafeName,
            defaultValue: defaultText, 
            characterLimit
        })

        let value
        try {
            value = String($(".parameterDiv").find(`input[name="${varSafeName}"]`).val());
        } catch(e){
            console.error(e)
        }
        return value || defaultText
    }

    //% block="Number parameter - name $parameterName | default value $defaultValue"
    //% inlineInputMode=inline
    //% defaultValue.defl="0"
    //% group="Basic"
    //% expandableArgumentMode="enabled"
    /**
     * Add text input parameter
     * @param parameterName The label for number input field
     * @param defaultValue The default value for the number input field
     */
    export function numberParameter(parameterName: string = "numberInput", defaultValue: number = 0) {
        const varSafeName = parameterName.split(" ").join("")
        board().addParameter({
            type: ParameterTypes.Number, 
            name: parameterName, 
            varSafeName,
            defaultValue
        })

        let value
        try {
            value = Number($(".parameterDiv").find(`input[name="${varSafeName}"]`).val());
        } catch(e){
            console.error(e)
        }
        return value || defaultValue
    }

    //% block="Number slider - name $parameterName | default value $defaultValue | min value $minValue | max value $maxValue || step value $stepValue"
    //% inlineInputMode=inline
    //% defaultValue.defl="0"
    //% minValue.defl="0"
    //% maxValue.defl="10"
    //% stepValue.defl="1"
    //% group="Basic"
    //% expandableArgumentMode="enabled"
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
        defaultValue: number = 0, 
        minValue: number = 0,
        maxValue: number = 10,
        stepValue?: number
    ) {
        const varSafeName = parameterName.split(" ").join("")
        board().addParameter({
            type: ParameterTypes.NumberRange, 
            name: parameterName, 
            varSafeName,
            defaultValue,
            minValue,
            maxValue,
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