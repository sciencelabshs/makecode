

When you add back in an enumeration, you need
to use enums.d.ts to define the enum

Then add this ... follow example from pxt-holiday

        
    //% blockId="main_iconPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=6
    export function _iconPicker(input: YourEnumName): number {
        return input;
    }


This was also very helpful
https://github.com/microsoft/pxt/blob/938669a6ec993238f3a598688f83c1126377d7b9/libs/pxt-common/pxt-helpers.ts

