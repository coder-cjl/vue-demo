
<script setup>
import {ref} from "vue";
import TreeItem from "@/pages/demo1/TreeItem.vue";

const treeData = ref({
  name: 'My Tree',
  children: [
    {name: 'Hello'},
    {name: 'World'},
    {
      name: "child folder",
      children: [
        {
          name: 'child folder',
          children: [
            {name: 'hello'},
            {name: 'world'},
            {name: 'hello'},
            {name: 'world'},
            {
              name: 'child folder',
              children: [
                {name: 'hello'},
                {name: 'world'},
              ]
            },
          ]
        }
      ]
    }
  ]
})

</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"></TreeItem>
  </ul>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}

</style>