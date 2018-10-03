// write the javascript code to pull the weather condition for your current location
// you can get the browser location by using HTML5 Geolocation API

/*
______________________________________________________________________
|                                                                     |
|                      HTML5 Geolocation API:                         |
|_____________________________________________________________________|

 */

// Get Location from browser:
const responseField = document.getElementById("coordinates");

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
    const endpoint = `${proxyServer}${url}${apiKey}/${latitude},${longitude}`;

    const xhr = new XMLHttpRequest();

    //xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const responseField = document.getElementById("demo");
            responseField.innerHTML = xhr.response;
        }
        else {
            alert("It failed!");

        }
    }
    xhr.open('GET', endpoint);
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    xhr.send();
}