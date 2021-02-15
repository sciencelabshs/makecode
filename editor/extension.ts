
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />

namespace pxt.editor {

    export class ResourceImporter implements pxt.editor.IResourceImporter {
        public id: "txt";
        public canImport(data: File): boolean {
            return data.name && data.name.indexOf("stl" ) >0;
        }
        public importAsync(project: pxt.editor.IProjectView, data: File): Promise<void> {
            return new Promise(async (resolve, reject)=>{
                try {
                    // https://github.com/microsoft/pxt/blob/072834287825472c0d6c9e2b64811580a21b3eec/webapp/src/app.tsx#L1761
                     await (project as any).importAssetFile(data)
                     resolve()
                }
                catch(e) {
                    reject(e)
                }
     
            })
            // return ts.pxtc.Util.fileReadAsTextAsync(data)
            //     .then(txt => {
            //         if (!txt) {
            //             core.errorNotification(lf("Ooops, could not read file"));
            //             return;
            //         }
    
            //         // parse times
            //         const lines = txt.split(/\n/g).map(line => {
            //             // extract timespace
            //             const t = /^\s*(\d+)>/.exec(line);
            //             if (t) line = line.substr(t[0].length);
            //             return {
            //                 type: "serial",
            //                 data: line + "\n",
            //                 id: data.name,
            //                 receivedTime: t ? parseFloat(t[1]) : undefined
            //             } as pxsim.SimulatorSerialMessage;
            //         })
            //         if (!lines.length)
            //             return;
    
            //         // normalize timestamps
            //         const now = Util.now();
            //         const linest = lines.filter(line => !!line.receivedTime);
            //         if (linest.length) {
            //             const tmax = linest[linest.length - 1].receivedTime || 0;
            //             linest.forEach(line => line.receivedTime += now - tmax);
            //         }
    
            //         // show console
    
            //         // send as serial message
            //         lines.forEach(line => window.postMessage(line, "*"));
            //     });
        }
    }

    initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
        pxt.debug('loading arcade target extensions...')

        const res: pxt.editor.ExtensionResult = {
            resourceImporters: [new ResourceImporter()],
        };

        return Promise.resolve<pxt.editor.ExtensionResult>(res);
    }
}