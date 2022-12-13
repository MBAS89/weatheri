import React from 'react'
import { BodyNav } from '../components/BodyNav'
import { ExtraWidgetForCurrentWeather } from '../components/ExtraWidgetForCurrentWeather'
import { Forcast } from '../components/Forcast'
import { WeatherWidget } from '../components/WeatherWidget'
import './Styles/Home.css'

export const Home = () => {

  return (
    <div className='body-container'>
        <section className='body-middle-container'>
            <BodyNav />
            <WeatherWidget />
            <ExtraWidgetForCurrentWeather />
        </section>
        <section className='body-right-container'>
            <Forcast />
        </section>
    </div>
  )
}
