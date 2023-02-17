
<script setup>
import {computed} from "vue";
import {valueToPoint} from "@/pages/page5/utils";
import AxisLabel from './AxisLabel.vue'


const props = defineProps({
  stats: Array
})

const points = computed(() => {
  const total = props.stats.length
  return props.stats.map((stat, i) => {
    const {x, y} = valueToPoint(stat.value, i, total)
    return `${x},${y}`
  }).join(' ')
})

</script>

<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
<!--    <AxisLabel v-for="(stat, index) in stats" :stat="stat" :index="index" :total="stats.length"></AxisLabel>-->
  </g>
</template>

<style scoped>

</style>