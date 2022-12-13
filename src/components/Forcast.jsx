import './styles/Forcast.css'
import fullMoon from '../images/fullMoon.png'
import halfLeftDark from '../images/half-left-dark.png'
import halfRightDark from '../images/half-right-dark.png'

export const Forcast = () => {

  const hourlyDtat = [
    {
        title:"Now",
        icon:fullMoon,
        temp:1
    },
    {
        title:"6 PM",
        icon:fullMoon,
        temp:10
    },
    {
        title:"8 PM",
        icon:halfRightDark,
        temp:8
    },
    {
        title:"9 PM",
        icon:halfLeftDark,
        temp:9
    },
    {
        title:"10 PM",
        icon:halfLeftDark,
        temp:5
    },
    {
        title:"11 PM",
        icon:halfLeftDark,
        temp:2
    }
  ]

  const daily = [
    {
        title:"Now",
        day:"Tusday",
        icon:fullMoon,
        temp:1
    },
    {
        title:"6 PM",
        day:"moday",
        icon:fullMoon,
        temp:10
    },
    {
        title:"8 PM",
        day:"thursday",
        icon:halfRightDark,
        temp:8
    },
    {
        title:"9 PM",
        day:"friday",
        icon:halfLeftDark,
        temp:9
    },
    {
        title:"10 PM",
        day:"Tusday",
        icon:halfLeftDark,
        temp:5
    },
    {
        title:"11 PM",
        day:"Tusday",
        icon:halfLeftDark,
        temp:2
    }
  ]

  return (
    <div className='forcast-container'>
        <header className='forcast-heading'>This Week</header>
        <section className='today-forcast-container'>
            <div className='today-forcast-header'>Today</div>
            <div className='forcast-hourly-container'>
                {hourlyDtat.map((hour)=>(
                    <div className='hour-container'>
                        <span>{hour.title}</span>
                        <img src={hour.icon} />
                        <span className='hour-temp'>{hour.temp}°</span>
                    </div>
                ))} 
            </div>
        </section>
        <section className='this-week-forcast-container'>
            {daily.map((day)=>(
                <div className='day-container'>
                    <div className='day-info'>
                        <div>{day.day}</div>
                        <span>{day.title}</span>
                    </div>
                    <span className='day-temp'>{day.temp}°</span>
                    <div className='day-cion-container'>
                        <img src={day.icon} />
                    </div>
                </div>
            ))} 
        </section>
    </div>
  )
}
