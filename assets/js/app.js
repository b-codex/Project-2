// Selectors

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

// API Key
const key = '87edfe8fa9d769d1fdc98d83269a9b9b'

// Adding Listener For Search
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    let city = search.value;

    // API Requests
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}&units=metric`

    //make fetch call (promise call)
    const response = await fetch(baseURL + query)
    const data = await response.json()

    // data.cod is response from API telling if request is successful or not
    if (data.cod === 200) {
        
        //promise data

        let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

        // Setting data from api to selectors on the html
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

        hiddenCard.classList.remove('visibility-hidden')
        searchForm.reset()
    } else {
        // log(data)
        alert('City Not Found')
    }

})


// listener for Add to favorites button
addFav.addEventListener('click', add_Fav)

function add_Fav() {
    
    let cityFav = document.querySelector("#city2").textContent
    let countryFav = document.querySelector("#country2").textContent


    let favCityInfo = {
        city: cityFav,
        country: countryFav
    }

    localStorage.setItem(`fav_${cityFav}`, JSON.stringify(favCityInfo))

    loadFavFromLocalStorage()

}


// Loading favorites from local storage
function loadFavFromLocalStorage() {

    // setting the innerHTML to empty so the list doesn't get repeated
    favContainer.innerHTML = ""

    // Getting all data stored in the local storage
    let cities = []
    let keys = Object.keys(localStorage) //Getting keys from local storage
    let i = keys.length

    // loop to add data from local storage to cities array
    while (i--) {
        cities.push(JSON.parse(localStorage.getItem(keys[i])))
    }

    // iterating cities array and displaying favorites on the html
    cities.forEach(x => {

        let fav = `
            <div class="card col-12 d-flex">
                <div class="card-header d-flex justify-content-between w-100">
                    <div>
                        ${x.city}&nbsp;
                       
                    </div>

                    <div>
                        <button type="button" class="btn btn-info getMoreInfo" style="width:fit-content;" onclick="getMoreInfo(this)">Get More Info</button>
                        <a href="#" id="delete" onclick="deleteFav(this)"><i class="fa fa-trash" aria-hidden="true"></i></a>
                    </div>

                    </div>
                </div>
            </div>
        `
        document.querySelector("#favRow > div.container.my-4 > div > button.btn.btn-outline-danger").classList.remove('visibility-hidden')
        favContainer.innerHTML += fav
        favRow.classList.remove('visibility-hidden')

        // attaching listeners to the Get More Info buttons in the favorite section
        let getMoreInfoButtons = document.querySelectorAll('.getMoreInfo')
        getMoreInfoButtons.forEach(button => {
            button.addEventListener('click', () => {
                fullpage_api.moveTo(2)
            })
        })

    })
}
// Executing the loadFavFromLocalStorage() by default so if the user has favorites on the local storage, it will be displayed automatically
loadFavFromLocalStorage()

// Delete all favorites
function deleteFavFromLocalStorage() {
    localStorage.clear()
    loadFavFromLocalStorage()
    document.querySelector("#favRow > div.container.my-4 > div > button.btn.btn-outline-danger").classList.add('visibility-hidden')
}

// delete a specific city from favorites
function deleteFav(e) {
    let city = e.parentElement.parentElement.firstElementChild.textContent.trim()
    localStorage.removeItem(`fav_${city}`)
    loadFavFromLocalStorage()
}
// to get info based on favorite cities
// request happens every time the user clicks on Get More Info button
// it is async because the fetch needs await to get data before returning it
async function getMoreInfo(e) {
    let city = e.parentElement.parentElement.firstElementChild.textContent.trim()
    // log(e.parentElement.parentElement.firstElementChild)

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}&units=metric`

    //make fetch call (promise call)
    const response = await fetch(baseURL + query)
    const data = await response.json()


    if (data.cod === 200) {

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

    } else {
        // log(data)
        alert('City Not Found')
    }
}
