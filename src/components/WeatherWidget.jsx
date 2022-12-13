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
