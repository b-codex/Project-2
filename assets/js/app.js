let log = console.log

let cityName = document.querySelector("#city")
let weatherIcon = document.querySelector('#weatherIcon')
let country = document.querySelector("#country")

let cityName2 = document.querySelector("#city2")
let weatherIcon2 = document.querySelector('#weatherIcon2')
let country2 = document.querySelector("#country2")
let temp2 = document.querySelector("#temp2")
let weatherDescription2 = document.querySelector("#weatherDescription2")

let cityName3 = document.querySelector("#city3")
let weatherIcon3 = document.querySelector('#weatherIcon3')
let country3 = document.querySelector("#country3")
let temp3 = document.querySelector("#temp3")
let weatherDescription3 = document.querySelector("#weatherDescription3")


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
let hiddenCard1 = document.querySelector(".section-container1")

let addFav = document.querySelector("#addFav")
let favRow = document.querySelector('#favRow')
let favContainer = document.querySelector('#favContainer')

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
        // log(data.wind)
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

        // cityName3.innerText = data.name
        // weatherIcon3.src = icon
        // country3.innerHTML = data.sys.country
        // temp3.innerHTML = data.main.temp + ' °C'
        // weatherDescription3.innerHTML = data.weather[0].main


        // hiddenCard.style.visibility = "visible"
        // hiddenCard1.style.visibility = "visible"


        searchForm.reset()
    } else {
        log(data)
        alert('Invalid City Name')
    }





})

addFav.addEventListener('click', add_Fav)

function add_Fav() {

    let clone = document.querySelector('#introCard').cloneNode(true)
    clone.setAttribute('id', '')
    clone.classList.remove('w-75')
    clone.classList.add('col-md-6', 'col-12', 'w-100','ml-5')

    favContainer.append(clone)
    // favRow.append(favContainer)

    favRow.classList.remove('visibility-hidden')
}


