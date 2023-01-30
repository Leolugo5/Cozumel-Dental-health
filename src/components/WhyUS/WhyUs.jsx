import React from 'react'
import Dentist0123 from '../../media/BGS/Other/Dentist0123.jpg'
import './WhyUs.scss'

function WhyUs() {
    return (
        <div className='why-us-main-wrapper'>
            <div className="wrapper">
                <div className="title">
                    <h1 className='title-h1-g'>
                        Why Choose Cozumel Dental Health?
                    </h1>
                </div>
                <div className="content">
                    <ul className="list-items">
                        <li className='item'>
                            <div className="item-title">
                                <h2 className='title-h2-g'>
                                    Expertise
                                </h2>
                            </div>
                            <div className="content">
                                <p className='p-g1'>
                                    Share what makes your business unique to set you apart from your competition.
                                </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div className="item-title">
                                <h2  className='title-h2-g'>
                                    Philosophy
                                </h2>
                            </div>
                            <div className="content">
                                <p className='p-g1'>
                                    Share what makes your business unique to set you apart from your competition.
                                </p>
                            </div>
                        </li>
                        <li className='item featured'>
                            <div className="item-title">
                                <h2  className='title-h2-g'>
                                    Technology
                                </h2>
                            </div>
                            <div className="content">
                                <p className='p-g1'>
                                    Share what makes your business unique to set you apart from your competition.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="image">
                        <img src={Dentist0123} alt="Dentist on cirjury" className='image-item' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs