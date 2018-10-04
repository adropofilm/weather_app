/*
______________________________________________________________________
|                                                                     |
|         HTML5 Geolocation API: get user coords from browser         |
|_____________________________________________________________________|

 */

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
|             Dark Sky API: to get forecast based on coords           |
|_____________________________________________________________________|

 */

// Request:
    let longitude, latitude;

function getForecast (position) {

    // Information to reach Dark Sky API:
    const apiKey = config.GEO_KEY;
    const url = 'https://api.darksky.net/forecast/';

    const proxyServer = 'https://cors-anywhere.herokuapp.com/';
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
    const exclude = '?units=si&exclude=minutely,hourly,alerts';
    const endpoint = `${proxyServer}${url}${apiKey}/${latitude},${longitude}${exclude}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
            renderResponse(xhr.response);
        }
        else {
            // sumthn went wrong bud :(
            console.log('Error');
        }
    }
    xhr.open('GET', endpoint);
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    xhr.send();

    getCity(longitude, latitude);

}

/*
______________________________________________________________________
|                                                                     |
|             GoogleGeocoding API: to get city using coords           |
|_____________________________________________________________________|

 */

// Request:
function getCity(latitude, longitude) {
    const apiKey = `&key=${config.GOOGLE_KEY}`;
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    const latlong = `?latlng=${longitude},${latitude}`;

    const endpoint = `${url}${latlong}${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.status >= 200 && xhr.status < 400) {
            renderCityResponse(xhr.response);
        }
        else {
            // sumthn went wrong bud :(
            console.log('Error');
        }
    }
    xhr.open('GET', endpoint);
    xhr.send();

}