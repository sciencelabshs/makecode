/// <reference path="../node_modules/pxt-core/localtypings/blockly.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />


import {FieldProtractor360} from "./FieldProtractor360"
import {FieldStlEditor} from "./FieldStlEditor"

pxt.editor.initFieldExtensionsAsync = function (opts: pxt.editor.FieldExtensionOptions): Promise<pxt.editor.FieldExtensionResult> {
        pxt.debug('loading buildbee target extensions...')
        const res: pxt.editor.FieldExtensionResult = {
            fieldEditors: [{
                selector: "protractor360",
                editor: FieldProtractor360
            }, {
                selector: "stlEditor",
                editor: FieldStlEditor
            }]
        };
        return Promise.resolve<pxt.editor.FieldExtensionResult>(res);
    }
