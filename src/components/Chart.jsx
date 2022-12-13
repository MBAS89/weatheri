import React, { useState, useEffect } from 'react'
import './styles/Chart.css'
import { LineChart, Line } from "recharts";

export const data = [
  {
    name: "Morning",
    pv: 0
  },
  {
    name: "AfterNon",
    pv: 14
  },
  {
    name: "Evning",
    pv: 16
  },
  {
    name: "Night",
    pv: 30
  }
];

export const Chart = () => {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [responsiveHeight, setResponsiveHeight] = useState(140)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [responsiveWidth, setResponsiveWidth] = useState(270)

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    switch (true) {
      case (windowHeight > 672):
        setResponsiveHeight(140);
        break;
      case (windowHeight < 672 && windowHeight > 627):
        setResponsiveHeight(120);
        break;
      case (windowHeight < 627 && windowHeight > 600):
        setResponsiveHeight(110);
        break;
      case (windowHeight < 600 && windowHeight > 580):
        setResponsiveHeight(100);
        break;
      case (windowHeight < 580 && windowHeight > 550):
        setResponsiveHeight(90);
        break;
      case (windowHeight < 550 && windowHeight > 535):
        setResponsiveHeight(80);
        break;
      case (windowHeight < 535 && windowHeight > 500):
        setResponsiveHeight(70);
        break;
      case (windowHeight < 500 && windowHeight > 475):
        setResponsiveHeight(60);
        break;
      case (windowHeight < 475 && windowHeight > 450):
        setResponsiveHeight(50);
        break;
      case (windowHeight < 450 && windowHeight > 430):
        setResponsiveHeight(40);
        break;
      case (windowHeight < 430 && windowHeight > 400):
        setResponsiveHeight(30);
        break;
      case (windowHeight < 400):
        setResponsiveHeight(20);
        break;
    }

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
    
  }, [windowHeight, windowWidth]);

  return (
    <div className='chart-container'>
      <LineChart  width={responsiveWidth} height={responsiveHeight} data={data}>
        <Line  type="monotone" dataKey="pv" stroke="white" strokeWidth={2}  dot={{ stroke: 'white', strokeWidth: 3 }} />
      </LineChart>
    </div>
  )
}
