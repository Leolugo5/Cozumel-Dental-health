import React from 'react'
import ServicesHero from '../Heros/ServicesHero/ServicesHero'

function ServicesComponent({ service, key }) {
    return (
        <div key={key} className='main-services-card-wrapper'>
            <div className="services-wrapper">
                <div className="cover">
                    <img src={service.img} alt={service.alt} />
                </div>
                <div className="service-name">
                    {service.name}
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent