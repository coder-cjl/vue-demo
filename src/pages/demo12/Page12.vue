<template>
  <button>测试EventBus - emit</button>
</template>

<script setup>

import bus from "@/utils/event-bus";

bus.on('test1', (e) => {
  console.log(e)
  console.log('event bus on success')
})

</script>

<style scoped>

</style>