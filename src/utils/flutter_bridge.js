export default  {
    flutter_callHandler(name, data = '') {
        window[name].postMessage(data)
    },

    flutter_register(name, data) {

    },

    flutter_close(data = '') {
        window['close'].postMessage(data)
    }
}

// vue 调用 flutter
// window['close'].postMessage('')

// flutter 调用 vue
// window.method = method
// (vue) window.method()
// (flutter) window.demo4()