<template>
  <button @click="back">Go back</button>
</template>

<script setup>
import {router} from "@/router";

function back() {
  router.back()
}

</script>

<style scoped>

</style>