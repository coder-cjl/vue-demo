
<script setup>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

showConfetti()

</script>

<template>
  <h1 @click="showConfetti">🎉Congratulations！</h1>
</template>

<style scoped>
h1 {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}

</style>