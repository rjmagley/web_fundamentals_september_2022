console.log("script runs");

var api_key = "414bdd15b8405e3a47982e6fc5f805d1";

// 41.8803, -87.6298

async function getCurrentWeather(lat, long) {

    var result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`);

    var data = await result.json();

    var currentTempElement = document.getElementById("temp");
    var tempFahrenheit = (1.8 * (data['main']['temp'] - 273)) + 32
    currentTempElement.innerHTML = tempFahrenheit;
}
//F = 1.8*(K-273) + 32
getCurrentWeather(41.8803, -87.6298);