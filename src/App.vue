<script setup>
import "./App.scss";
import CityItem from "./components/Cityitem/CityItem.vue";
import CityInfo from "./components/CityInfo/CityInfo.vue";
import FormComponent from "./components/Form/FormComponent.vue";
import { ref, watch, onMounted } from "vue";

const citys = ref([]);
const addCity = (e) => {
  citys.value.push(e);
  citys.value = [...citys.value];
};
const deleteCity = (idx) => {
  const newData = citys.value.filter((e, i) => i !== idx);
  citys.value = [...newData];
};

const show = ref(false);
const setShow = () => (show.value = false);

const data = ref("");
const cityCallback = (citydata) => {
  data.value = citydata;
  show.value = true;
};

onMounted(() => {
  const res = JSON.parse(localStorage.getItem("citys"));
  if (res && res.length) citys.value = res;
  else citys.value = ["Frankfurt", "Minsk"];
});

watch(citys, (newData) => {
  localStorage.setItem("citys", JSON.stringify(newData));
});
</script>

<template>
  <div class="app">
    <CityInfo :data="data" :show="show" :setShow="setShow" />
    <div v-if="show" class="overlay"></div>
    <h1>Weather Vue-App</h1>
    <FormComponent
      :addCity="addCity"
      @response="(e) => addCity(e)"
    ></FormComponent>
    <div class="city_container">
      <div v-for="(city, idx) in citys" :key="idx">
        <CityItem
          :city="city"
          :cityCallback="cityCallback"
          :idx="idx"
          :deleteCity="deleteCity"
        />
      </div>
    </div>
  </div>
</template>
