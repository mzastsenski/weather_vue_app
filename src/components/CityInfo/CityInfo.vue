<script setup>
import "./CityInfo.scss";
import { getDay, getShortCountry } from "../../helpers";
import { ref, watch } from "vue";
import { getCity2 } from "../../requests";

const props = defineProps(["data", "show", "setShow"]);

const data2 = ref("");

const setData2 = (newData) => {
  data2.value = newData;
};

watch(props, () => {
  if (props.data.location) getCity2(props.data.location.name, setData2);
});
</script>

<template>
  <div :class="show ? 'info show' : 'info'" @click="setShow">
    <div v-if="data.location && show" class="CityInfo" @click="setShow">
      <h4>
        {{ data.location.name }}
        <span> {{ getShortCountry(data.location.country) }}</span>
      </h4>
      <h1>
        {{ data.current.temp_c }}
        <span> °C</span>
      </h1>
      <img :src="data.current.condition.icon" alt="" />
      <p>{{ data.current.condition.text }}</p>
      <p></p>
      <p>Local Time: {{ data.location.localtime.substring(0) }}</p>
      <p>Humidity: {{ data.current.humidity }}%</p>
      <p>Wind: {{ data.current.wind_kph }} kph</p>
      <div v-if="data2.location">
        <p>Sunrise:{{ data2.current_observation.astronomy.sunrise }}</p>
        <p>Sunset: {{ data2.current_observation.astronomy.sunset }}</p>
      </div>
      <p>---</p>
      <div v-if="data2.location" className="forecasts">
        <p>
          Tomorow: {{ data2.forecasts[1].high }} °C
          {{ data2.forecasts[1].text }}
        </p>
        <p>
          {{ getDay(data2.forecasts[2].day) }}: {{ data2.forecasts[2].high }} °C
          {{ data2.forecasts[2].text }}
        </p>
        <p>
          {{ getDay(data2.forecasts[3].day) }}:
          {{ data2.forecasts[3].high }} °C,
          {{ data2.forecasts[3].text }}
        </p>
        <p>
          {{ getDay(data2.forecasts[4].day) }}:
          {{ data2.forecasts[4].high }} °C,
          {{ data2.forecasts[4].text }}
        </p>
        <p>
          {{ getDay(data2.forecasts[5].day) }}:
          {{ data2.forecasts[5].high }} °C,
          {{ data2.forecasts[5].text }}
        </p>
        <p>
          {{ getDay(data2.forecasts[6].day) }}:
          {{ data2.forecasts[6].high }} °C,
          {{ data2.forecasts[6].text }}
        </p>
      </div>
    </div>
  </div>
</template>
