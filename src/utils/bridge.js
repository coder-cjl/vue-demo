const isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
function setupWebViewJavascriptBridge(callback) {
    if (isAndroid) {
        if (window["WebViewJavascriptBridge"]) {
            callback(window["WebViewJavascriptBridge"])
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', () => {
                callback(window["WebViewJavascriptBridge"])
            }, false)
        }
        sessionStorage.phoneType = 'android'
    }

    if (isiOS) {
        if (window["WebViewJavascriptBridge"]) {
            return callback(window["WebViewJavascriptBridge"])
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback)
        }
        window.WVJBCallbacks = [callback]
        let WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none'
        WVJBIframe.src = 'https://__bridge_loaded__'
        document.documentElement.appendChild(WVJBIframe)
        setTimeout(() => {
            document.documentElement.removeChild(WVJBIframe)
        }, 0)
        sessionStorage.phoneType = 'ios'
    }
}

setupWebViewJavascriptBridge((bridge) => {
    if (isAndroid) {
        bridge.init((message, responseCallback) => {
            const data = {
                'Javascript Responds': 'Wee!'
            }
            responseCallback(data)
        })
    }
})

export default {
    callHandler(name, data, callback) {
        setupWebViewJavascriptBridge((bridge) => {
            bridge.callHandler(name, data, callback)
        })
    },

    registerHandler(name, callback) {
        setupWebViewJavascriptBridge((bridge) => {
            bridge.registerHandler(name, (data, responseCallback) => {
                callback(data, responseCallback)
            })
        })
    },

    close(callback) {
      setupWebViewJavascriptBridge((bridge) => {
          bridge.callHandler('close', null, callback)
      })
    }
}

// bridge.callHandler("demo3", "vue 发送数据", data => {
//     isShow.value = true
//     buttonName.value = data
// })

// bridge.registerHandler("demo2", (data, callback) => {
//     isShow.value = !isShow.value
//     buttonName.value = data
//     callback("demo2的数据收到啦")
// })