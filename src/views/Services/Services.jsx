import React from 'react'
import SimpleContactSection from '../../components/HomePageComponents/SimpleContactSection/SimpleContactSection'
import ServicesHero from '../../components/Heros/ServicesHero/ServicesHero'
import './Services.scss'

function Services() {
  return (
    <div className='main-services-wrapper'>
        <ServicesHero/>
        <SimpleContactSection/>
        
    </div>
  )
}

export default Services