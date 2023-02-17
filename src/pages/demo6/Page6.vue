<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>

<script setup>
import Modal from "@/pages/demo6/Modal.vue";
import {ref} from "vue";

const  showModal = ref(false)
</script>

<style scoped>

</style>