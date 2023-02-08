import { api_key } from "../components/api_key";

export const getCity = (city, callback) => {
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${api_key}`,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((res) => callback(res));
};

export const getCity2 = (city, callback) => {
  fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${api_key}`,
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    }
  )
    .then((res) => res.json())
    .then((res) => callback(res));
};
