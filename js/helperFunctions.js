// Formats response to look presentable on webpage

const renderResponse = (res) => {
    const app = document.getElementById('container');
    if(!res){
        console.log(res.status)
    }

    // Add current weather icon to page:
    const icon = document.createElement('div');
    icon.setAttribute('class', 'card card-one');
    icon.innerHTML = `<img src = ${getIcon(res.currently.icon)} alt = 'Weather Icon' id = 'icon'>`;
    app.appendChild(icon);

    // Append temperature (current, high, low):
    const tempData = document.createElement('div');
    const highTemp = parseInt(res.daily.data[0].temperatureHigh* 9 / 5 + 32);
    const lowTemp = parseInt(res.daily.data[0].temperatureLow* 9 / 5 + 32);
    const currTemp = parseInt(res.currently.temperature* 9/5+32);
    tempData.setAttribute('class', 'card card-two');

    // Account for temp error in API:
    if(currTemp < lowTemp) {
        tempData.innerHTML = `${lowTemp} <p id="hl-temp">${currTemp}/${highTemp}</p>`;
    }
    else {
        tempData.innerHTML = `${currTemp} <p id="hl-temp">${lowTemp}/${highTemp}</p>`;
    }
    app.append(tempData);

    // Append weather data:
    const weatherData = document.createElement('div');
    const windSpeed = parseInt(res.currently.windSpeed);
    const precipitation = parseInt(res.currently.precipProbability*100);
    const humidity = parseInt(res.currently.humidity*100);
    weatherData.setAttribute('class', 'card card-three');
    weatherData.innerHTML = `<div id = 'weather-data'> 
                                   <div>  <img src = './images/wind.png' alt = 'wind-icon' class = 'weather-icons'> Wind:${windSpeed}mph</div>
                                   <div>  <img src = './images/umbrella.png' alt = 'umbrella-icon' class = 'weather-icons'> Prec: ${precipitation}%</div>
                                   <div>  <img src = './images/drop.png' alt = 'droplet-icon' class = 'weather-icons'> Hum: ${humidity}%  </div>
                            </div>`
    app.appendChild(weatherData);
}

const renderCityResponse = (res) => {
    // Append header:
    const app = document.getElementById('container');
    const city = res.results[0].formatted_address;
    const header = document.createElement('h1');
    header.setAttribute('id', 'header');
    header.innerHTML = `Today in ${city} `;
    app.appendChild(header);

}

function getIcon(icon) {
    let iconCode;
    switch(icon) {
        case 'clear-day':
            iconCode = './images/clearday.png';
            return iconCode;
        case 'clear-night':
            iconCode = './images/clearnight.png';
            return iconCode;
        case 'partly-cloudy-day':
            iconCode = './images/cloudyday.png';
            return iconCode;
        case 'partly-cloudy-night':
            iconCode = './images/cloudynight.png';
            return iconCode;
        case 'cloudy':
            iconCode = './images/cloudy.png';
            return iconCode;
        case 'rain':
            iconCode = './images/rain.png';
            return iconCode;
        case 'sleet':
            iconCode = './images/sleet.png';
            return iconCode;
        case 'snow':
            iconCode = './images/snow.png';
            return iconCode;
        case 'wind':
            iconCode = './images/wind.png';
            return iconCode;
        case 'fog':
            iconCode = './images/fog.png';
            return iconCode;
    }
}
