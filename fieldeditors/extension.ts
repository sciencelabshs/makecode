/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {
    initFieldExtensionsAsync = function (opts: pxt.editor.FieldExtensionOptions): Promise<pxt.editor.FieldExtensionResult> {
        pxt.debug('loading buildbee target extensions...')
        const res: pxt.editor.FieldExtensionResult = {
            fieldEditors: [{
                selector: "protractor360",
                editor: FieldProtractor360
            }, {
                selector: "stlEditor",
                editor: FieldSTLEditor
            }]
        };
        return Promise.resolve<pxt.editor.FieldExtensionResult>(res);
    }
}