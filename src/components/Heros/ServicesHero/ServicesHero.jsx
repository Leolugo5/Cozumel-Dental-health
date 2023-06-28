import React from 'react'
import { ListOfServices } from '../../../DB/Services/Services'
import ServicesComponent from '../../ServicesComponent/ServicesComponent'
import './ServicesHero.scss'


function ServicesHero() {
    return (
        <div>
            <div className="services-main-wrapper">
                <br />
                <h1 className='title-h2-g services-title'>
                    Learn more about our services and how you can save thousands.
                </h1>
                <div className="services-item-wrapper">
                    <div className="grid-services">
                        <div className="service-inner-wrapper">
                            <div className="img-cover">

                            </div>
                                <h4 className="service-title">Ortodoncia</h4>
                            <div className="description-wrapper">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHero