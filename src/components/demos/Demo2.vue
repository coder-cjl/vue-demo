<template>
  <h2>{{ msg }}</h2>
</template>

<script setup>
const props = defineProps({
  msg: String
})

const emit = defineEmits(['response'])
emit('response', 'Hello from child')

</script>

<style scoped>

</style>