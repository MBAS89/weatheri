import { useEffect, useState } from 'react'
import './styles/ExtraWidgetForCurrentWeather.css'
import windIcon from '../images/wind-icon.png'
import pressureIcon from '../images/pressure-icon.png'
import uviIcon from '../images/uvi-icon.png'
import { MoonPhase } from './MoonPhase'

export const ExtraWidgetForCurrentWeather = () => {
    const [moonPhaseName,setMoonPhaseName] = useState('')

    console.log(moonPhaseName)

  return (
    <section className='extraWidgetsConatiner'>
        <div className='extraWidget'>
            <div className='extraWidget-info'>
                <h5>Wind</h5>
                <p>Today Wind Speed</p>
                <h5>12Km/h</h5>
            </div>
            <div className='extraWidget-icon-container'>
                <img src={windIcon} alt="an icon that show wind movement" />
            </div>
        </div>
        <div className='extraWidget'>
            <div className='extraWidget-info'>
                <h5>Pressure</h5>
                <p>Today Pressure</p>
                <h5>720 hpa</h5>
            </div>
            <div className='extraWidget-icon-container'>
                <img src={pressureIcon} alt="an icon that show wind movement" />
            </div>
        </div>
        <div className='extraWidget'>
            <div className='extraWidget-info'>
                <h5>UV Index</h5>
                <p>Today UV Index</p>
                <h5>2</h5>
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
                <MoonPhase moonPhase={0.63} name={setMoonPhaseName}/>
            </div>
        </div>
    </section>
  )
}


