// Formats response to look presentable on webpage

const app = document.getElementById('container');

const renderResponse = (res) => {

    if(!res){
        console.log(res.status)
    }

    // Append header:
    const header = document.createElement('h1');
    header.setAttribute('id', 'header');
    header.innerHTML = `Today in Kansas City`;
    app.appendChild(header);

    // Append icon:
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

    if(currTemp < lowTemp) {
        tempData.innerHTML = `${lowTemp} <p id="hl-temp">${currTemp}/${highTemp}</p>`;
    }
    else {
        tempData.innerHTML = `${currTemp} <p id="hl-temp">${lowTemp}/${highTemp}</p>`;
    }

    app.append(tempData);

    // Append weather data:
    const weatherData = document.createElement('div');
    weatherData.setAttribute('class', 'card card-three');
    weatherData.innerHTML = `<div id = 'weather-data'> 
                                   <div>  <img src = './images/wind.png' alt = 'wind-icon' class = 'weather-icons'> ${res.currently.windSpeed}  </div>
                                   <div>  <img src = './images/umbrella.png' alt = 'umbrella-icon' class = 'weather-icons'> ${res.currently.precipProbability*100}%  </div>
                                   <div>  <img src = './images/drop.png' alt = 'droplet-icon' class = 'weather-icons'> ${res.currently.humidity*100}%  </div>
                            </div>`
    app.appendChild(weatherData);
}

function getIcon(icon) {
    let iconCode;
    switch(icon) {

        case 'clear-day':
            iconCode = './images/clearday.png';
            return iconCode;
            break;

        case 'clear-night':
            iconCode = './images/clearnight.png';
            return iconCode;
            break;

        case 'partly-cloudy-day':
            iconCode = './images/cloudyday.png';
            return iconCode;
            break;

        case 'partly-cloudy-night':
            iconCode = './images/cloudynight.png';
            return iconCode;
            break;
        case 'cloudy':
            iconCode = './images/cloudy.png';
            return iconCode;
            break;
        case 'rain':
            iconCode = './images/rain.png';
            return iconCode;
            break;
        case 'sleet':
            iconCode = './images/sleet.png';
            return iconCode;
            break;
        case 'snow':
            iconCode = './images/snow.png';
            return iconCode;
            break;
        case 'wind':
            iconCode = './images/wind.png';
            return iconCode;
            break;
        case 'fog':
            iconCode = './images/fog.png';
            return iconCode;
            break;
    }
}
