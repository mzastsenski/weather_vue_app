<script setup>
import "./Form.scss";
import { ref } from "vue";
const props = defineProps(["addCity"]);
// const emit = defineEmits(["response"]);

const city = ref("");

const newCity = () => {
  if (city.value) props.addCity(city.value);
  // if (city.value) emit("response", city.value);
  city.value = "";
};
</script>

<template>
  <form class="form" @submit.prevent="newCity">
    <input type="text" placeholder="Add City" v-model="city" />
    <button>ADD</button>
  </form>
</template>
