import './styles/Forcast.css'
import fullMoon from '../images/fullMoon.png'
import halfLeftDark from '../images/half-left-dark.png'
import halfRightDark from '../images/half-right-dark.png'
import { iconUrl } from '../services/weatherService'

export const Forcast = ({weather}) => {

  return (
    <div className='forcast-container'>
        <header className='forcast-heading'>This Week</header>
        <section className='today-forcast-container'>
            <div className='today-forcast-header'>Today</div>
            <div className='forcast-hourly-container'>
                {weather?.hourly.map((hour)=>(
                    <div className='hour-container'>
                        <span className='hour-time'>{hour.title}</span>
                        <img src={iconUrl(hour.icon)} />
                        <span className='hour-temp'>{(hour.temp.toFixed())}°</span>
                    </div>
                ))} 
            </div>
        </section>
        <section className='this-week-forcast-container'>
            {weather?.daily.slice(1).map((day)=>(
                <div className='day-container'>
                    <div className='day-info'>
                        <div>{day.title}</div>
                        <span>{day.date}</span>
                    </div>
                    <span className='day-temp'>{(day.temp.toFixed())}°</span>
                    <div className='day-cion-container'>
                        <img src={iconUrl(day.icon)} />
                    </div>
                </div>
            ))} 
        </section>
    </div>
  )
}
