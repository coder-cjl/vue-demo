<template>
  <select v-model="flightType">
    <option value="one-way flight">One-way Flight</option>
    <option value="return flight">Return Flight</option>
  </select>
  <p>
    <input type="data" v-model="departureDate">
  </p>
  <p>
    <input type="data" v-model="returnDate" :disabled="!isReturn">
  </p>
  <button :disabled="!canBook" @click="book">Book</button>
  <p>{{canBook ? '' : 'Return data must be after departure date.'}}</p>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {get} from '@/server'
import axios from "axios";
import http from "@/server/request";

const flightType = ref('one-way flight')
const departureDate = ref(dateToString(new Date()))
const returnDate = ref(departureDate.value)
const isReturn = computed(() => flightType.value == 'return flight')
const canBook = computed(() => !isReturn.value || stringToDate(returnDate.value) > stringToDate(departureDate.value))

function book() {
  alert(
      isReturn.value ? `You have booked a return flight leaving on ${departureDate.value} and returning on ${returnDate.value}`
          : `You have booked a one-way flight leaving on ${departureDate.value}.`
  )
}

async function demoReq() {
  // const res = await fetch('https://hn.algolia.com/api/v1/search?query=vue')
  // const json = await res.json()
  // console.log(json)
  const res = await get('https://hn.algolia.com/api/v1/search?query=vue1')
  if (res.ok) {
    console.log(res.data)
  } else {
    alert(res.message)
  }
}

async function demoAxios() {
  const res = await axios.get('https://hn.algolia.com/api/v1/search?query=vue')
  console.log(res)
}

async function demoHttp() {
  const data = await http.get('https://hn.algolia.com/api/v1/search?query=vue')
  console.log(data)
  eventBus.$on('sayHi', sayHi)
}

function sayHi() {

}

// demoReq()
// demoAxios()
demoHttp()

function dateToString(date) {
  return(
      date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate())
  )
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s
}

function stringToDate(str) {
  const [y, m, d] = str.splice('-')
  return new Date(+y, m - 1, +d)
}

</script>

<style scoped>
select,
input,
button {
  display: block;
  margin: 0.5em 0;
  font-size: 15px;
}

input[disabled] {
  color: #999;
}

p {
  color: red;
}
</style>