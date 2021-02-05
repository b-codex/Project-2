var express = require('express')
var fetch = require('node-fetch')
var dotenv = require('dotenv')
dotenv.config()

var app = express()
var port = process.env.PORT || 6969


app.get('/', (req, res) => {

    (async function(){
        var city = 'addis ababa'
        // const search_el = document.getElementById('search_el').value
        const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
        const query = `?q=${city}&appid=${process.env.apiKey}&units=metric`;

        //make fetch call (promise call)
        const response = await fetch(baseURL + query);

        //promise data
        const data = await response.json();
        if (data.cod == '404') {
            console.log('err')
        }
        res.json(data)

        console.log(
            'Coordinates : ' + `${data.coord.lon} Longitude` + ` ${data.coord.lat} Latitude` + '\n\n' + 'Weather Info : ' + `${data.weather[0].main}` + '\n\n' + `Temperature: ${data.main.temp}°C` + '\n\n' + `Min Temp: ${data.main.temp_min}°C` + '\n\n' + `Max Temp: ${data.main.temp_max}°C`
        );
    })()

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})