import './styles/SideNav.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

//ASSETS IMPORTED
import logo from '../images/logo.png'
import activeDash from '../images/dashActive.png'
import noActiveDash from '../images/dashNoActive.png'

export const SideNav = () => {
  
  const [activeIcon,setActiveIcon] = useState('')

  const navlinkactivator = (isActive) => {
    if(isActive){
        setActiveIcon(false)
        return('SideNav-active-link')
    }else{
        setActiveIcon(true)
        return('SideNav-notactive-link')
    } 
  }

  return (
    <div className='sideNav-container'>
        <section className='logo-section'>
            <img src={logo} alt='Logo' className='logo'/>
        </section>
        <section className='appLinks-container'>
            <ul>
                <li><NavLink className={({ isActive }) => navlinkactivator(isActive)} to="/"><img src={activeIcon ? activeDash: noActiveDash} alt="dashboard icon" className='dashboard-icon'/>Dashboard</NavLink></li>
                <li><NavLink className={({ isActive }) => navlinkactivator(isActive)} to="/map"><img src={activeIcon ? activeDash: noActiveDash} alt="dashboard icon" className='dashboard-icon'/>Dashboard</NavLink></li>
            </ul>
        </section>
    </div>
  )
}
