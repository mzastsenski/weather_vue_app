<script setup>
import s from "./CityItem.module.scss";
import { getCity } from "../../requests";
import { getShortCountry } from "../../helpers";
import { ref, watch } from "vue";

const props = defineProps(["city", "cityCallback", "idx", "deleteCity"]);

const data = ref("");
const setData = (newData) => {
  if (newData.error) props.deleteCity(props.idx);
  data.value = newData;
};

watch(props, () => {
  getCity(props.city, setData);
});

getCity(props.city, setData);
</script>

<template>
  <div v-if="data.location" :class="s.city" @click="cityCallback(data)">
    <h4>
      {{ data.location.name }}
      <span> {{ getShortCountry(data.location.country) }}</span>
    </h4>
    <h1>{{ data.current.temp_c }} <span> °C</span></h1>
    <img :src="data.current.condition.icon" alt="" />
    <p>{{ data.current.condition.text }}</p>
    <button :class="s.delete_button" @click.stop="deleteCity(idx)">X</button>
  </div>
</template>
