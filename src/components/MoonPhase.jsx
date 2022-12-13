import React from 'react'
import fullMoon from '../images/fullMoon.png'
import halfLeftDark from '../images/half-left-dark.png'
import halfRightDark from '../images/half-right-dark.png'
import leftAlmostFull from '../images/left-almost-full.png'
import leftAlmsotFullDark from '../images/left-amlmsot-full-dark.png'
import leftLight from '../images/left-light.png'
import RightAlmostFullMoon from '../images/right-almost-full.png'
import dark from '../images/dark.png'


export const MoonPhase = ({ moonPhase, name }) => {

    let moonIcon;
  
    // Determine the moon icon to display based on the moon phase value
    if (moonPhase <= 0.125) {
      moonIcon = dark;
      name('New Moon')
    } else if (moonPhase <= 0.25) {
      moonIcon = leftAlmsotFullDark;
      name('Waxing Crescent')
    } else if (moonPhase <= 0.375) {
      moonIcon = halfLeftDark;
      name('First Quarter')
    } else if (moonPhase <= 0.5) {
      moonIcon = RightAlmostFullMoon;
      name('Waxing Gibbous')
    } else if (moonPhase <= 0.625) {
      moonIcon = fullMoon;
      name('Full Moon')
    } else if (moonPhase <= 0.75) {
      moonIcon = leftAlmostFull;
      name('Waning Gibbous')
    } else if (moonPhase <= 0.875) {
      moonIcon = halfRightDark;
      name('Third Quarter')
    } else if (moonPhase <= 1) {
      moonIcon = leftLight;
      name('Waning Crescent')
    } else {
      // If the moon phase value is invalid, default to the new moon icon
      moonIcon = dark;
      name('New Moon')
    }
  
    return (
      <img src={moonIcon} alt="Moon phase icon" />
    );
};
  

