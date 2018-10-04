// Formats response to look presentable on webpage

const app = document.getElementById('container');

const renderResponse = (res) => {

    // TODO implement icons: http://darkskyapp.github.io/skycons/

    if(!res){
        console.log(res.status)
    }



    // Append header:
    const header = document.createElement('h1');
    header.setAttribute('id', 'header');
    header.innerHTML = `Today in Kansas City`;
    app.appendChild(header);

    // Append weather data to second row, 1st col:
    const weatherData = document.createElement('div');
    weatherData.setAttribute('class', 'card card-one');
    weatherData.innerHTML = `Latitude: ${res.latitude} <br>
                                        Longitude: ${res.longitude} <br> 
                                        Temperature: ${res.currently.temperature} <br>
                                        Currently: ${res.currently.summary} <br>
                                        Precipitation: ${res.currently.precipProbability*100}% <br>
                                        Humidity: ${res.currently.humidity*100}% <br>
                                        Wind: ${res.currently.windSpeed} <br>
                                        Highs: ${res.daily.data[0].temperatureHigh* 9 / 5 + 32} <br>
                                        Lows: ${res.daily.data[0].temperatureLow* 9 / 5 + 32}`;

    app.appendChild(weatherData);

    // Append temperature:
    const tempData = document.createElement('div');
    tempData.setAttribute('class', 'card card-two');
    tempData.innerHTML = `${parseInt(res.currently.temperature* 9/5+32)}`;
    app.append(tempData);


    /*// Append MISC:
    const windSpeed = document.createElement('div');
    windSpeed.setAttribute('class', 'card card-three');
    //windSpeed.innerHTML = `Wind Speed: ${res.currently.windSpeed}`;
    app.appendChild(windSpeed);*/
    chooseIcon(res.currently.icon);
}

function chooseIcon(icon) {

    console.log("here!");

    let icons = new Skycons({"color": "white"});

    switch(icon) {

        case 'clear-day':
            icons.set("clear-day", Skycons.CLEAR_DAY);
            break;

        case 'clear-night':
            icons.set("clear-night", Skycons.CLEAR_NIGHT);
            break;

        case 'partly-cloudy-day':
            icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
            break;

        case 'partly-cloudy-night':
            icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
            break;
        case 'cloudy':
            icons.set("cloudy", Skycons.CLOUDY);
            break;
        case 'rain':
            icons.set("rain", Skycons.RAIN);
            break;
        case 'sleet':
            icons.set("sleet", Skycons.SLEET);
            break;
        case 'snow':
            icons.set("snow", Skycons.SNOW);
            break;
        case 'wind':
            icons.set("wind", Skycons.WIND);
            break;

        case 'fog':
            icons.set("fog", Skycons.FOG);
            break;

    }

    // Append MISC:
    const iconImage = document.createElement('div');
    iconImage.setAttribute('class', 'card card-three');
    iconImage.setAttribute('id', `${icon}`);

    app.appendChild(iconImage);

    icons.play();
}