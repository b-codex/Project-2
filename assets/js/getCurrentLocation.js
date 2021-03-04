// Selectors

log = console.log

cityName = document.querySelector("#city")
weatherIcon = document.querySelector('#weatherIcon')
country = document.querySelector("#country")

cityName2 = document.querySelector("#city2")
weatherIcon2 = document.querySelector('#weatherIcon2')
country2 = document.querySelector("#country2")
temp2 = document.querySelector("#temp2")
weatherDescription2 = document.querySelector("#weatherDescription2")

temp = document.querySelector("#temp")
weatherDescription = document.querySelector("#weatherDescription")
longitude = document.querySelector("#longitude")
latitude = document.querySelector("#latitude")
windSpeed = document.querySelector("#windSpeed")
windDirection = document.querySelector("#windDirection")
feelsLike = document.querySelector("#feelsLike")
humidity = document.querySelector("#humidity")
pressure = document.querySelector("#pressure")
tempMin = document.querySelector("#tempMin")
tempMax = document.querySelector("#tempMax")


searchForm = document.querySelector(".searchForm")
searchBtn = document.querySelector(".searchIcon")
hiddenCard = document.querySelector(".section-container")


// Location getting options
var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
}

// success function for navigator geolocation
async function success(pos) {
    let crd = pos.coords;

    // API Key
    const key = '87edfe8fa9d769d1fdc98d83269a9b9b';

    // URI for fetch API
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?lat=${crd.latitude}&lon=${crd.longitude}&appid=${key}&units=metric`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);
    const data = await response.json();

    if (data.cod === 200) { //if data.cod === 200 (success), execute the block
        //promise data


        let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

        cityName.innerText = data.name
        weatherIcon.src = icon
        country.innerHTML = data.sys.country
        temp.innerHTML = data.main.temp + ' °C'
        weatherDescription.innerHTML = data.weather[0].main


        longitude.innerText = data.coord.lon
        latitude.innerText = data.coord.lat
        windSpeed.innerText = data.wind.speed
        windDirection.innerText = data.wind.deg + ' deg'
        feelsLike.innerText = data.main.feels_like + ' °C'
        humidity.innerText = data.main.humidity
        pressure.innerText = data.main.pressure
        tempMin.innerText = data.main.temp_min + ' °C'
        tempMax.innerText = data.main.temp_max + ' °C'

        cityName2.innerText = data.name
        weatherIcon2.src = icon
        country2.innerHTML = data.sys.country
        temp2.innerHTML = data.main.temp + ' °C'
        weatherDescription2.innerHTML = data.weather[0].main


        hiddenCard.style.visibility = "visible"

        searchForm.reset()
    } else {
        log(data)
        alert('Error')
    }

}

function error(err) {
    // if error occurs, the 1st card will not be displayed
    hiddenCard.classList.add('visibility-hidden')

    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// BOM navigator element
navigator.geolocation.getCurrentPosition(success, error, options);