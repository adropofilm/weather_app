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
        x.innerHTML = "Geolocation is not supported by this browser.";
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

    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const endpoint = `${url}${apiKey}/${latitude},${longitude}`;

    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Begin accessing JSON data here
            //alert(response.timezone);
        }
    }
    xhr.open('GET', endpoint);
    xhr.send();
}