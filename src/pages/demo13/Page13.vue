<template>
  <button @click="getData">获取数据</button>
  <p>{{id}}{{name}}</p>
</template>

<script setup>
import {router} from "@/router";
import {onMounted, ref} from "vue";
const id = ref('')
const name = ref('')

onMounted(() => {
  id.value = router.currentRoute.value.query.id
  name.value = router.currentRoute.value.query.name
})

function getData() {
  id.value = router.currentRoute.value.query.id
  name.value = router.currentRoute.value.query.name
}

</script>

<style scoped>

</style>