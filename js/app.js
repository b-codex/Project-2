TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.1 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      tl.fromTo(chairs, 0.1, { x: "100%" }, { x: "-10%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }
  }
});


// the api

const key = '87edfe8fa9d769d1fdc98d83269a9b9b';

(async function(){
    let city = 'london'

    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}&units=metric`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    if (data.cod == '404') {
        console.log('err')
    }

    let City = document.getElementById('City') 
    let Longitude = document.getElementById('Longitude') 
    let Latitude = document.getElementById('Latitude') 
    let Weather = document.getElementById('Weather') 
    let Temperature = document.getElementById('Temperature') 

    City.innerHTML = `City : ${data.name}`;
    Longitude.innerHTML = `Longitude: ${data.coord.lon}`;
    Latitude.innerHTML = `Latitude: ${data.coord.lat}`;
    Weather.innerHTML = `Current Weather forecast: ${data.weather[0].main}`
    Temperature.innerHTML = `City : ${data.main.temp}°C` 
})()

var geoLocation = document.getElementById("geolocation-heading-one");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    geoLocation.innerHTML = "Geolocation is not supported by this browser.";
  }
}