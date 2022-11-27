import React from 'react'
import { BodyNav } from '../components/BodyNav'

export const Home = () => {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }
  return (
    <div>
        <BodyNav onSearchChange={handleOnSearchChange}/>
    </div>
  )
}
