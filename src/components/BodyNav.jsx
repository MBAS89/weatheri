import React, { useState } from 'react'
import './styles/BodyNav.css'

//ICONS IMPORTED FROM iconscout.com
import { UilSearch, UilMapMarker, UilCelsius, UilFahrenheit } from '@iconscout/react-unicons'


export const BodyNav = () => {

  return (
    <nav className='bodyNav-container'>
       <div className='bodyNav-search-input'>
            <input type="text" placeholder='search for city..'/>
            <UilSearch className="bodyNav-search-icon"/>
            <UilMapMarker className="bodynav-location-icon"/>
            <UilCelsius className="bodynav-Celsius-icon"/>
            <span>|</span>
            <UilFahrenheit className="bodynav-Fahrenheit-icon"/>
       </div>
    </nav>
  )
}
