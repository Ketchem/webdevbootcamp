var request = require('request');

request('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22', function (error, response, body) {
    if(!error && response.statusCode === 200){
        var data = JSON.parse(body);
        console.log(data["main"]["temp"]);
    }
    else {
        console.error('error', error)
    }
});