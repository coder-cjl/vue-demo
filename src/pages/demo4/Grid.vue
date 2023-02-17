<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  data: Array,
  columns: Array,
  filterKey: String,
})

const sortKey = ref('')
const sortOrders = ref(
    props.columns.reduce((o, k) => ((o[k] = 1), o), {})
)

const filteredData = computed(() => {
  let {data, filterKey} = props
  if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }
  const key = sortKey.value
  if (key) {
    const order = sortOrders.value[key]
    data = data.slice().sort((a, b) => {
      a = a[key]
      b = b[key]
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }
  return data
})

function sortBy(key) {
  sortKey.value = key
  sortOrders.value[key] *= -1
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <table v-if="filteredData.length">
    <thead>
    <tr>
      <th v-for="key in columns" @click="sortBy(key)" :class="{active: sortKey == key}">
        {{capitalize(key)}}
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
    <p v-else>No matches found.</p>
  </table>

</template>

<style scoped>

</style>