import { DateTime } from "luxon";

const API_KEY = "9b2896da4c1c0f5a2c61a067427babb9" 


const getWeatherData = (infoType, searchParams) => {
    if (infoType === 'weather'){
        let BASE_URL = "https://api.openweathermap.org/data/2.5"

        const url =  new URL(BASE_URL + "/" + infoType);
        url.search = new URLSearchParams({...searchParams, appid:API_KEY})
    
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data)

    }else if(infoType === 'onecall'){
        let BASE_URL = "https://api.openweathermap.org/data/3.0"

        const url =  new URL(BASE_URL + "/" + infoType);
        url.search = new URLSearchParams({...searchParams, appid:API_KEY})
    
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data)
    }
}

const formatCurrentWeather = (data) => {
    console.log(data,'current') /// herer 
    const { 
        coord : { lat, lon },
        main : { temp, feels_like, temp_min, temp_max, pressure, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind : { speed }
     } = data

     const { main: details, icon } = weather[0]

    return { lat, lon, temp, feels_like, temp_min, temp_max, pressure, humidity, name, dt, country, sunrise, sunset, details, icon, speed }
}

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data
    console.log(data) //here
    daily = daily.slice(0,6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })

    hourly = hourly.slice(0,6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })

    return { timezone, daily, hourly }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams)
      .then(formatCurrentWeather)

    const { lat, lon } = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat, lon, exclude: 'current,mainutely,alerts', units: searchParams.units
    }).then(formatForecastWeather)

    return { ...formattedCurrentWeather, ...formattedForecastWeather }  
}

const formatToLocalTime = (secs, zone, format = "cccc, dd, LLL, yyyy' | Local time: ' hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export default getFormattedWeatherData