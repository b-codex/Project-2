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

    alert(
        `City : ${data.name} \n\n` + 'Coordinates : ' + `${data.coord.lon} Longitude` + ` ${data.coord.lat} Latitude` + '\n\n' + 'Weather Info : ' + `${data.weather[0].main}` + '\n\n' + `Temperature: ${data.main.temp}°C` + '\n\n'
    )
})()