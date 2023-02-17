<template>
  <button class="bt1" @click="toPage11">TO Page 11</button>
  <br>
  <br>
  <button class="bt1" @click="callAppFunc1">app - 下个页面</button>
  <br>
  <br>
  <button class="bt1" @click="close">关闭页面</button>
  <br>
  <br>
  <button class="bt1" @click="callAppFunc1">app - 弹框</button>
  <br>
  <br>
  <button class="bt1" @click="demo3">demo3</button>
  <br>
  <br>
  <button v-show="isShow">{{buttonName}}</button>
</template>

<script setup>

import {router} from "@/router";
import {onMounted, ref} from "vue";
import bridge from "@/utils/bridge";
import flutter_bridge from "@/utils/flutter_bridge";

const isShow = ref(false)
const buttonName = ref('')

onMounted(() => {
  register()
  window.document.title = 'demo1'
  window.demo4 = demo4
})

function register() {
  bridge.registerHandler("demo1", (data, callback) => {
    console.log(data)
    toPage11()
    callback()
  })

  bridge.registerHandler("demo2", (data, callback) => {
    isShow.value = !isShow.value
    buttonName.value = data
    callback("demo2的数据收到啦")
  })
}

function callAppFunc1() {
  router.push('/page11')
}

function close() {
  // bridge.close()
  // flutter_bridge.flutter_callHandler('close')
  // window['close'].postMessage('')
  flutter_bridge.flutter_close()
}

function toPage11() {
  router.push('/page11')
}

function demo4() {
  router.push('/page11')
  return 'return.demo4'
}

function demo3() {
  bridge.callHandler("demo3", "vue 发送数据", data => {
    isShow.value = true
    buttonName.value = data
  })
}

</script>

<style scoped>

.bt1 {
  height: 30px;
}

</style>