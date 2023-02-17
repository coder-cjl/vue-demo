<template>
  <button @click="toPage8">跳转</button>
  <router-link to="/page10"> To Page10</router-link>


</template>

<script setup>
import {computed} from "vue";

function callApp() {
  const params = {taskId: 123, list: [1, 2, 3]}
  this.$bridge.callHandler('vueCallFun', params, res => {
    console.log(res)
  })
}

function appCall() {
  this.$bridge.registerHandler('appCallFun', (data, res) => {
    console.log(data)
    res('123')
    this.$bridge.close()
  })
}

computed(() => {
  // console.log(this.$router.params.username)
})

function toPage8() {
  console.log('aaa')
  this.$router.push('/page10')
  // router.push('/page10')
  // console.log(router.params.username)

  // router.push({path: '/page10', query:{id: 123, 'name': 'tom'}})
}

</script>

<style scoped>

</style>