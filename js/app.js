TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");
      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
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
    let city = prompt('Enter a city')
    // var city = 'addis ababa'
    // const search_el = document.getElementById('search_el').value
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}&units=metric`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    if (data.cod == '404') {
        console.log('err')
    }

    // console.log(
    //     `City : ${data.name} \n\n` + 'Coordinates : ' + `${data.coord.lon} Longitude` + ` ${data.coord.lat} Latitude` + '\n\n' + 'Weather Info : ' + `${data.weather[0].main}` + '\n\n' + `Temperature: ${data.main.temp}°C` + '\n\n'
    // );


    // alert(
    //     `City : ${data.name} \n\n` + 'Coordinates : ' + `${data.coord.lon} Longitude` + ` ${data.coord.lat} Latitude` + '\n\n' + 'Weather Info : ' + `${data.weather[0].main}` + '\n\n' + `Temperature: ${data.main.temp}°C` + '\n\n'

    // )
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
    
    //  `${data.coord.lon} Longitude` + ` ${data.coord.lat} Latitude` + '\n\n' + 'Weather Info : ' + `${data.weather[0].main}` + '\n\n' + `Temperature: ${data.main.temp}°C` + '\n\n'



    // }else if (`${data.weather[0].main}` == "Rain"){
    //     alert("Hooray!")
    // }else if (`${data.weather[0].main}` == "Rain"){
    //     alert("Hooray!")
    // }else if (`${data.weather[0].main}` == "Rain"){
    //     alert("Hooray!")
    // }
})()