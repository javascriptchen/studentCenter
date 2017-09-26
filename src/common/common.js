//与APP建立链接
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    let WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
    }, 0);
}


/**
 * 调用客户端方法
 * @param functionName
 * @param paras
 * @param callBack
 */
export function callNativeFunction(functionName,paras,callBack) {
    setupWebViewJavascriptBridge(function (bridge) {
        bridge.callHandler(functionName,
            paras,
            function (response) {
                callBack(response);
            }
        )
    })
}
