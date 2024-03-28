import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import PopularCategory from '../PopularCategory/PopularCategory'
import StayHome from '../StayHome/StayHome'
import FoodSection from '../FoodSection/FoodSection'

function Main() {
  return (
    <main>
      <HeroSection/>
      <PopularCategory/>
      <StayHome/>
      <FoodSection/>
    </main>
  )
}

export default Main