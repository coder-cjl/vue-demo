
<script setup>
import {computed} from "vue";
import {valueToPoint} from "@/pages/page5/utils";

const props = defineProps({
  stat: Object,
  index: Number,
  total: Number,
})

const point = computed(() => {
  valueToPoint(+props.stat.value + 10, props.index, props.total)
})

</script>

<template>
  <svg>
    <text :x="point.x" :y="point.y">{{1}}</text>
  </svg>
</template>

<style scoped>

</style>