<script>
import "./City.scss";
import { getCity } from "./functions";

export default {
  props: {
    city: String,
    cityCallback: Object,
    idx: Number,
    deleteCity: Function,
  },
  data() {
    return {
      data: "",
    };
  },
  methods: {
    setData(newData) {
      this.data = newData;
    },
    sendData() {
      this.cityCallback(this.data);
    },
    deleteCityCard() {
      this.deleteCity(this.idx);
    },
  },
  mounted() {
    getCity(this.city, this.setData);
  },
};
// const { city, cityCallback, idx, deleteCity } = defineProps([
//   "city",
//   "cityCallback",
//   "idx",
//   "deleteCity",
// ]);

// const data = ref("");
// const setData = (newData) => (data.value = newData);
// const sendData = () => cityCallback(data.value);

// const deleteCityCard = () => deleteCity(idx);

// watch(city, (newData) => {
//   getCity(city, setData);
// });

// watch(data, (newData) => {
//   getCity(city, setData);
// });

// getCity(city, setData);
</script>

<template>
  <div v-if="this.data.location" class="City" @click="sendData">
    <h2>{{ idx }}</h2>
    <h4>
      {{ data.location.name }}
      <!-- <span> {{ getShortCountry(data.location.country) }}</span> -->
    </h4>
    <h1>{{ data.current.temp_c }} <span> °C</span></h1>
    <img :src="data.current.condition.icon" alt="" />
    <p>{{ data.current.condition.text }}</p>
    <button class="delete_button" @click.stop="this.deleteCityCard">X</button>
  </div>
</template>
