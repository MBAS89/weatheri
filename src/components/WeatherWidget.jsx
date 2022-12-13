import React, { useEffect, useState } from 'react'
import './styles/WeatherWidget.css'

import { UilLocationPoint, UilWind, UilThermometer, UilTear } from '@iconscout/react-unicons'
import { Chart } from './Chart'
import { data } from './Chart'
import { formatToLocalTime } from '../services/weatherService'


export const WeatherWidget = ({weather}) => {

  return (
    <div className='weatherWidget-container'>
      {weather && (
        <>
          <div className='weatherWidget-left'>
            <div className='weatherWidget-left-up'>
              <div className='weatherWidget-left-up-location'>
                <UilLocationPoint />
                <h4>{weather.name} | {weather.country}</h4>
              </div>
              <p>
              {formatToLocalTime(weather.dt, weather.timezone, "hh:mm a")}
              </p>
            </div>
            <div className='weatherWidget-left-middle'>
              <h1>{(weather.temp).toFixed()}°</h1>
              <p>{weather.details}</p>
            </div>
            <div className='weatherWidget-left-bottom'>
              <div>
                <UilWind />
                <p>{(weather.speed).toFixed()}km/h</p>
              </div>
              <div>
                <UilThermometer />
                <p>{(weather.feels_like).toFixed()}°</p>
              </div>
              <div>
                <UilTear />
                <p>{(weather.humidity).toFixed()}%</p>
              </div>
            </div>
          </div>
          <div className='weatherWidget-right'>
            <div className='weatherWidget-right-glass-container'>
              <p>Temperature</p>
              <Chart data={weather}/>
              <div className='weatherWidget-right-glass-daytime-container'>
                {weather?.daily[0].allDayTemp.map((day)=>(
                  <div key={day.name}>
                    <span>{day.name}</span>
                    <h5>{(day.temp).toFixed()}°</h5>
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
