/*这段代码是固定的，必须要放到js中*/
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0);
}

//html点击去客户端播放语音
function getProducts(products) {
  var json = {'products': products};

  setupWebViewJavascriptBridge(function (bridge) {
    /* Initialize your app here */
    bridge.callHandler('buyProduct',
      json,
      function (response) {
        //log('JS got response', response);
      }
    );
  });
}
