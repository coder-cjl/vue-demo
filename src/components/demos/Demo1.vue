

<script setup>
import {ref, onMounted, watch} from "vue";
import Demo2 from "@/components/demos/Demo2.vue";
import Demo3 from "@/components/demos/Demo3.vue";

const todos = ref([])
const text = ref('')
const p = ref(null)
const count = ref(0)

watch(count, (newCount) => {
  console.log(`new count is: ${newCount}`)
})

function actionCount() {
  count.value++
}

function addTodos(todo) {
  todos.value.push(todo)
}
function removeFirstTodo() {
  todos.value.pop()
}

onMounted(() => {
  p.value.textContent = "1111"
})

const childMsg = ref('No child msg yet')

</script>

<template>
  <p>
    demo7:
  </p>
  <Demo4></Demo4>
  <p>
    demo6:
    <Demo3></Demo3>
  </p>
  <p>demo5:</p>
  <Demo2 @response="(msg) => childMsg = msg"></Demo2>
  {{childMsg}}
  <p>demo4</p>
  <p>
    <Demo2 msg="1230000"></Demo2>
  </p>
  <p>demo3</p>
  <p>
    <button @click="actionCount">Test</button>
  </p>
  <p>Demo1</p>
  <p>
    <input v-model="text">
    <button @click="addTodos(text)">添加</button>
  </p>
  <ul>
    <li v-for="todo in todos">
      {{todo}}
      <button @click="removeFirstTodo">删除</button>
    </li>
  </ul>
  <p>Demo2</p>
  <p ref="p">Hello</p>
</template>

<style scoped>

</style>