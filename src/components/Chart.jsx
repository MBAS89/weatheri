import React, { useState, useEffect } from 'react'
import './styles/Chart.css'
import { LineChart, Line } from "recharts";

export const Chart = ({data}) => {

  const [weatherData, setWeatherData] = useState(data)

  useEffect(()=>{
    setWeatherData(data?.daily[0].allDayTemp)
  },[data])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [responsiveWidth, setResponsiveWidth] = useState(270)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    //width part 
    switch (true) {
      case (windowWidth > 1440):
        setResponsiveWidth(270);
        break;
      case (windowWidth < 1440 && windowWidth > 1370):
        setResponsiveWidth(260);
        break;
      case (windowWidth < 1370 && windowWidth > 1320):
        setResponsiveWidth(250);
        break;
      case (windowWidth < 1320 && windowWidth > 1270):
        setResponsiveWidth(240);
        break;
      case (windowWidth < 1270 && windowWidth > 1230):
        setResponsiveWidth(230);
        break;
      case (windowWidth < 1230 && windowWidth > 1180):
        setResponsiveWidth(220);
        break;
      case (windowWidth < 1180 && windowWidth > 1120):
        setResponsiveWidth(210);
        break;
      case (windowWidth < 1120 && windowWidth > 1060):
        setResponsiveWidth(200);
        break;
      case (windowWidth < 1060):
        setResponsiveWidth(190);
        break;
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, [windowWidth]);

  return (
    <div className='chart-container'>
      <LineChart  width={responsiveWidth} height={110} data={weatherData}>
        <Line  type="monotone" dataKey="temp" stroke="white" strokeWidth={2}  dot={{ stroke: 'white', strokeWidth: 3 }} />
      </LineChart>
    </div>
  )
}
