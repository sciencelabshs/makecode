(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/makecode/",
    "verprefix": "",
    "workerjs": "/makecode/worker.js",
    "monacoworkerjs": "/makecode/monacoworker.js",
    "gifworkerjs": "/makecode/gifjs/gif.worker.js",
    "pxtVersion": "5.6.4",
    "pxtRelId": "",
    "pxtCdnUrl": "/makecode/",
    "commitCdnUrl": "/makecode/",
    "blobCdnUrl": "/makecode/",
    "cdnUrl": "/makecode/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "buildbeemakecode",
    "simUrl": "/makecode/simulator.html",
    "partsUrl": "/makecode/siminstructions.html",
    "runUrl": "/makecode/run.html",
    "docsUrl": "/makecode/docs.html",
    "isStatic": true
};

    var scripts = [
        "/makecode/highlight.js/highlight.pack.js",
        "/makecode/bluebird.min.js",
        "/makecode/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/makecode/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/makecode/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/makecode/target.js");
    scripts.push("/makecode/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
