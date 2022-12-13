import { BodyNav } from '../components/BodyNav'
import { ExtraWidgetForCurrentWeather } from '../components/ExtraWidgetForCurrentWeather'
import { Forcast } from '../components/Forcast'
import { WeatherWidget } from '../components/WeatherWidget'
import './Styles/Home.css'

export const Home = ({weather}) => {


  console.log(weather)

  return (
    <div className='body-container'>
        <section className='body-middle-container'>
            <BodyNav />
            <WeatherWidget weather={weather}/>
            <ExtraWidgetForCurrentWeather weather={weather}/>
        </section>
        <section className='body-right-container'>
            <Forcast weather={weather}/>
        </section>
    </div>
  )
}
