<template>
  <button @click="back">Go back</button>
  <br>
  <br>
  <button @click="testEventBus">测试EventBus - emit</button>
</template>

<script setup>
import {router} from "@/router";
import bus from "@/utils/event-bus";

function back() {
  router.back()
}

function testEventBus() {
  bus.emit('test2')
}

</script>

<style scoped>

</style>