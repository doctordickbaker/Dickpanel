var dis_weather = document.getElementById("weather");
var clock = document.getElementById("clock");

// Require the module
var Forecast = require('forecast');

// Initialize
var forecast = new Forecast({
  service: 'darksky',
  key: '55defc1ac8ce0557a6c6cd69028a83a1',
  units: 'fahrenheit',
  cache: true,      // Cache API requests
  ttl: {            // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
    minutes: 27,
    seconds: 45
  }
});

// Retrieve weather information from coordinates (Sydney, Australia)
forecast.get([-33.8683, 151.2086], function(err, weather) {
  if(err) return console.dir(err);
  console.dir(weather);
  dis_weather.innerHTML = weather.currently.temperature.toString().slice(0,2) + "F";
});

// Retrieve weather information, ignoring the cache
forecast.get([-33.8683, 151.2086], true, function(err, weather) {
  if(err) return console.dir(err);
  console.dir(weather);
});

/////////////////////////////// time

var d = new Date();


