let temperature = document.querySelector(".temperature")
let humidity = document.querySelector(".humidity")
let sunSet = document.querySelector(".sunSet")
let sunRise = document.querySelector(".sunRise")
let windSpeed = document.querySelector(".windSpeed")

let limit = 5;
let apiKey = "e0924d691e356673726a65177fe6c572";

// let url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '& limit=' + limit + ' & appid=' + apiKey


let cityName = document.querySelector(".cityName");

async function getData() {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&limit=5&appid=d5b7d25e03a3ed0023cdaa31fe5bf1b9&units=metric'
    document.querySelector(".status").innerHTML = "";

    try {
        let response = await fetch(url);
        if (response.status !== 200) {
            cityName.value = "";
            document.querySelector(".city").innerHTML = "";
            temperature.innerHTML = "";
            humidity.innerHTML = "";
            sunRise.innerHTML = "";
            sunSet.innerHTML = "";
            windSpeed.innerHTML = "";
            document.querySelector(".status").innerHTML = "Error " + response.status;
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        document.querySelector(".city").innerHTML = String(cityName.value).toUpperCase();
        let data = await response.json();
        temperature.innerHTML = Math.floor(data.main.temp) + '°C';
        humidity.innerHTML = Math.floor(data.main.humidity) + '%';

        let riseHour = new Date(data.sys.sunrise * 1000)
        sunRise.innerHTML = String(riseHour.getHours()).padStart(2, '0') + ":" + String(riseHour.getMinutes()).padStart(2, '0') + ":" + String(riseHour.getSeconds()).padStart(2, '0');

        windSpeed.innerHTML = Math.floor((data.wind.speed * 3600) / 1000) + "km/h";

        let setHour = new Date(data.sys.sunset * 1000);
        sunSet.innerHTML = String(setHour.getHours()).padStart(2, '0') + ":" + String(setHour.getMinutes()).padStart(2, '0') + ":" + String(setHour.getSeconds()).padStart(2, '0');
        console.log(data);
        console.log(response);
        cityName.value = "";
    }
    catch (error) {
        console.error('Error fetching data', error);

    }
}
// getData();



function timer() {
    let time = new Date();
    document.querySelector(".time").innerHTML = String(time.getHours()).padStart(2, '0') + ":" + String(time.getMinutes()).padStart(2, '0') + ":" + String(time.getSeconds()).padStart(2, '0');
}

setInterval(timer, 1000);