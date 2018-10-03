// write the javascript code to pull the weather condition for your current location
// you can get the browser location by using HTML5 Geolocation API

/*
______________________________________________________________________
|                                                                     |
|                      HTML5 Geolocation API:                         |
|_____________________________________________________________________|

 */

// Get Location from browser:
const responseField = document.getElementById("root");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getForecast);
    } else {
        responseField.innerHTML = "Geolocation is not supported by this browser.";
    }
}

window.onload = getLocation();

/*
______________________________________________________________________
|                                                                     |
|                             Dark Sky API                            |
|_____________________________________________________________________|

 */

// Information to reach Dark Sky API:
const apiKey = config.MY_KEY;
const url = 'https://api.darksky.net/forecast/';

// AJAX function:
function getForecast (position) {
    const proxyServer = 'https://cors-anywhere.herokuapp.com/';
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const exclude = '?units=si&exclude=minutely,hourly,alerts';
    const endpoint = `${proxyServer}${url}${apiKey}/${latitude},${longitude}${exclude}`;

    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        //xhr.readyState === XMLHttpRequest.DONE &&
        if (xhr.status >= 200 && xhr.status < 400) {
            const responseField = document.getElementById("root");

            responseField.innerHTML = `Latitude: ${xhr.response.latitude} <br>
                                        Longitude: ${xhr.response.longitude} <br>
                                        Currently: ${xhr.response.currently.summary} <br>
                                        Precipitation: ${xhr.response.currently.precipProbability*100}% <br>
                                        Humidity: ${xhr.response.currently.humidity*100}% <br>
                                        Wind: ${xhr.response.currently.windSpeed} <br>
                                        Highs: ${xhr.response.daily.data[0].temperatureHigh* 9 / 5 + 32} <br>
                                        Lows: ${xhr.response.daily.data[0].temperatureLow* 9 / 5 + 32}`;
        }
        else {
            console.log(xhr.status);

        }
    }
    xhr.open('GET', endpoint);
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    xhr.send();
}