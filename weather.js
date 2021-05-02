const weather = document.querySelector(".weather");
const API_KEY = "6ed31c833eb6a28c0c7eb54101c32a43";

let lat, lng;
let weatherData = {};

function success(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      weatherData = {
        temp: data.main.temp,
        dong: data.name,
        icon: data.weather[0].icon,
      };
      printWeather();
    });
}

function error() {
  console.log("error");
}

function printWeather() {
  const weatherInfo = `<div class="weatherInfo"><img src="http://openweathermap.org/img/wn/${weatherData.icon}.png"> <span>${weatherData.temp}º</span></div>`;
  weather.innerHTML = `${weatherInfo} ${weatherData.dong}`;
}

function initWeather() {
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

initWeather();
