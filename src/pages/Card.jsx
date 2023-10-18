import React from 'react'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'

const Card = ({ navigateHome, navigateCard, data, navigateProfile }) => {
  return (
    <div className="main_container">
      <NavBar navigateCard={navigateCard} navigateHome={navigateHome}/>
      <ProfileCard data={data}/>
    </div>
  )
}

export default Card
