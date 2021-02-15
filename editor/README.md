# How to replace field editors.

* Make a folder called fieldeditors
* Copy the tsconfig from this folder to your folder
* Make sure your pxtarget.json has "extendFieldEditors": "true"
* The pxt cli will look for "fieldeditors" folder and build it

* Fight typescript compile errors till it loves you back.
    * Upgrade your typescript to version 3, pxt-sample libs out of date.
    * Add a skipLibCheck to avoid jquery type errors
    * if you start with any of the ones from the base pxt, dont forget to update your path referencce to node_modules/pxt-core

```
/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
```


For a summary of all the base types check here:
https://github.com/microsoft/pxt/tree/9759fcf6368b9339e6ad0a5e1c5a96658422060f/pxtblocks/fields
