import React from 'react'
import HeroHomepage from '../../components/Heros/HeroHomepage/HeroHomepage'
import DentalTourism from '../../components/HomePageComponents/DentalTourism/DentalTourism'
import SimpleContactSection from '../../components/HomePageComponents/SimpleContactSection/SimpleContactSection'
import Testimonials from '../../components/HomePageComponents/Testimonials/Testimonials'
import WhyUs from '../../components/WhyUS/WhyUs'
import './Home.scss'

function Home() {
  return (
    <div className='main-home-wrapper'>
      <HeroHomepage />
      <WhyUs />
      <DentalTourism />
      <Testimonials />
      <SimpleContactSection />
    </div>
  )
}

export default Home