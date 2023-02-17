import mitt from "mitt";

const emitter = mitt()

const eventBus = {
    $on: (...args) => emitter.on(...args),
    $emit: (...args) => emitter.emit(...args),
    $off: (...args) => emitter.off(...args),

}