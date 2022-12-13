import { useEffect, useState } from 'react'
import './styles/ExtraWidgetForCurrentWeather.css'
import windIcon from '../images/wind-icon.png'
import pressureIcon from '../images/pressure-icon.png'
import uviIcon from '../images/uvi-icon.png'
import { MoonPhase } from './MoonPhase'

export const ExtraWidgetForCurrentWeather = ({weather}) => {
    const [moonPhaseName,setMoonPhaseName] = useState('')

    console.log(moonPhaseName)

  return (
    <section className='extraWidgetsConatiner'>
        {weather && (
            <>
                <div className='extraWidget'>
                    <div className='extraWidget-info'>
                        <h5>Wind</h5>
                        <p>Today Wind Speed</p>
                        <h5>{weather.speed}Km/h</h5>
                    </div>
                    <div className='extraWidget-icon-container'>
                        <img src={windIcon} alt="an icon that show wind movement" />
                    </div>
                </div>
                <div className='extraWidget'>
                    <div className='extraWidget-info'>
                        <h5>Pressure</h5>
                        <p>Today Pressure</p>
                        <h5>{weather.pressure} hpa</h5>
                    </div>
                    <div className='extraWidget-icon-container'>
                        <img src={pressureIcon} alt="an icon that show wind movement" />
                    </div>
                </div>
                <div className='extraWidget'>
                    <div className='extraWidget-info'>
                        <h5>UV Index</h5>
                        <p>Today UV Index</p>
                        <h5>{weather?.daily[0].uvi}</h5>
                    </div>
                    <div className='extraWidget-icon-container'>
                        <img src={uviIcon} alt="an icon that show wind movement" />
                    </div>
                </div>
                <div className='extraWidget'>
                    <div className='extraWidget-info'>
                        <h5>Moon</h5>
                        <p>Today Moon Phases</p>
                        <h5>{moonPhaseName}</h5>
                    </div>
                    <div className='extraWidget-icon-container'>
                        <MoonPhase moonPhase={weather?.daily[0].moon_phase} name={setMoonPhaseName}/>
                    </div>
                </div>
            </>
        )}
    </section>
  )
}


