// Formats response to look presentable on webpage
const renderResponse = (res) => {
    if(!res){
        console.log(res.status)
    }

    const responseField = document.getElementById("root");

    responseField.innerHTML = `Latitude: ${res.latitude} <br>
                                        Longitude: ${res.longitude} <br> 
                                        Temperature: ${res.currently.temperature} <br>
                                        Currently: ${res.currently.summary} <br>
                                        Precipitation: ${res.currently.precipProbability*100}% <br>
                                        Humidity: ${res.currently.humidity*100}% <br>
                                        Wind: ${res.currently.windSpeed} <br>
                                        Highs: ${res.daily.data[0].temperatureHigh* 9 / 5 + 32} <br>
                                        Lows: ${res.daily.data[0].temperatureLow* 9 / 5 + 32}`;

    // manipulates responseField to render the modified response

}