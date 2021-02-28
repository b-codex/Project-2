let log = console.log

let cityName = document.querySelector("#city")
let weatherIcon = document.querySelector('#weatherIcon')
let country = document.querySelector("#country")

let cityName2 = document.querySelector("#city2")
let weatherIcon2 = document.querySelector('#weatherIcon2')
let country2 = document.querySelector("#country2")
let temp2 = document.querySelector("#temp2")
let weatherDescription2 = document.querySelector("#weatherDescription2")

let temp = document.querySelector("#temp")
let weatherDescription = document.querySelector("#weatherDescription")
let longitude = document.querySelector("#longitude")
let latitude = document.querySelector("#latitude")
let windSpeed = document.querySelector("#windSpeed")
let windDirection = document.querySelector("#windDirection")
let feelsLike = document.querySelector("#feelsLike")
let humidity = document.querySelector("#humidity")
let pressure = document.querySelector("#pressure")
let tempMin = document.querySelector("#tempMin")
let tempMax = document.querySelector("#tempMax")


let searchForm = document.querySelector(".searchForm")
let searchBtn = document.querySelector(".searchIcon")
let hiddenCard = document.querySelector(".section-container")

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    let city = search.value;
    const key = '87edfe8fa9d769d1fdc98d83269a9b9b';

    // var city = 'addis ababa'
    // const search_el = document.getElementById('search_el').value
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}&units=metric`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);
    const data = await response.json();

    if (data.cod === 200) {
        log(data.wind)
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
        tempMin.innerText = data.main.temp_min
        tempMax.innerText = data.main.temp_max

        cityName2.innerText = data.name
        weatherIcon2.src = icon
        country2.innerHTML = data.sys.country
        temp2.innerHTML = data.main.temp + ' °C'
        weatherDescription2.innerHTML = data.weather[0].main



        searchForm.reset()
    } else {
        log(data)
        alert('Error')
    }



    hiddenCard.style.visibility = "visible"
    
    
})
hiddenCard.style.visibility = "hidden"