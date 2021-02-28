let log = console.log

const search = document.querySelector('#search')
let City = document.getElementById('City')
let Longitude = document.getElementById('Longitude')
let Latitude = document.getElementById('Latitude')
let Weather = document.getElementById('Weather')
let Temperature = document.getElementById('Temperature')

let searchBtn = document.querySelector(".icon")

// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

document.querySelector(".searchForm").addEventListener('submit', (e) => {
    e.preventDefault()

    let city = search.value;
    const key = '87edfe8fa9d769d1fdc98d83269a9b9b';

    (async function () {
        // var city = 'addis ababa'
        // const search_el = document.getElementById('search_el').value
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
        const query = `?q=${city}&appid=${key}&units=metric`;

        //make fetch call (promise call)
        const response = await fetch(baseURL + query);
        if (response.status === 200) {
            document.querySelector('#section-2').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.log(`Error while fetching req ${response.status}`);
            return;
        }
        //promise data
        const data = await response.json();
        log(data)
        City.innerHTML = `City : ${data.name}`;
        Longitude.innerHTML = `Longitude: ${data.coord.lon}`;
        Latitude.innerHTML = `Latitude: ${data.coord.lat}`;
        Weather.innerHTML = `Current Weather forecast: ${data.weather[0].main}`
        Temperature.innerHTML = `City : ${data.main.temp}°C`

    })()


})