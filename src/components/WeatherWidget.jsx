import React, { useEffect, useState } from 'react'
import './styles/WeatherWidget.css'

import { UilLocationPoint, UilWind, UilThermometer, UilTear } from '@iconscout/react-unicons'
import { Chart } from './Chart'
import { data } from './Chart'

import getFormattedWeatherData from '../services/weatherService'

export const WeatherWidget = () => {

  const [ query, setQuery ] = useState({q: 'berlin'})
  const [ units, setUnits ] = useState('metric')
  const [ weather, setWeather ] = useState(null)

  useEffect(()=>{
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units })
        .then(data => { setWeather(data) })
    }
    fetchWeather()
  },[query, units])

  console.log(weather)


  return (
    <div className='weatherWidget-container'>
      {weather && (
        <>
          <div className='weatherWidget-left'>
            <div className='weatherWidget-left-up'>
              <div className='weatherWidget-left-up-location'>
                <UilLocationPoint />
                <h4>{weather.name}</h4>
              </div>
              <p>
              Today 05:24 PM
              </p>
            </div>
            <div className='weatherWidget-left-middle'>
              <h1>14°</h1>
              <p>Mostly Clear</p>
            </div>
            <div className='weatherWidget-left-bottom'>
              <div>
                <UilWind />
                <p>12km/h</p>
              </div>
              <div>
                <UilThermometer />
                <p>17°</p>
              </div>
              <div>
                <UilTear />
                <p>32%</p>
              </div>
            </div>
          </div>
          <div className='weatherWidget-right'>
            <div className='weatherWidget-right-glass-container'>
              <p>Temperature</p>
              <Chart />
              <div className='weatherWidget-right-glass-daytime-container'>
                {data.map((day)=>(
                  <div key={day.name}>
                    <span>{day.name}</span>
                    <h5>{day.pv}°</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
