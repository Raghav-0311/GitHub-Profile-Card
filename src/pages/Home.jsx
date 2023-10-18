import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'

const Home = ({ navigateHome, navigateCard }) => {
  return (
    <div className="main_container">
      <NavBar navigateCard={navigateCard} navigateHome={navigateHome}/>
      <Hero navigateCard={navigateCard}/>
    </div>
  )
}

export default Home
