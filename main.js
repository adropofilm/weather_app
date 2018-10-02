// write the javascript code to pull the weather condition for your current location
// you can get the browser location by using HTML5 Geolocation API

//document.write('Find My Weather');


// Get Location from browser:
const responseField = document.getElementById("coordinates");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    responseField.innerHTML = "Lat: " + position.coords.latitude +
        "<br>Long: " + position.coords.longitude;
}

window.onload = getLocation();

/*

// Information to reach Dark Sky API:
const apiKey = '81741895358c06957f92a6aff5dc837c';
const url = 'https://api.darksky.net/forecast/';


// AJAX function:
const getForecast = () => {
    const endpoint = `${url}${latitude}${longitude}`;

    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // do stuff
        }
    }

    xhr.open('GET', endpoint);
    xhr.send();
}

getForecast();

*/