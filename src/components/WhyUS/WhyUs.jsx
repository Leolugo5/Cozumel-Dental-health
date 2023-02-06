import React from 'react'
import pic10 from '../../media/MiniGallery/TemporalPictures/pic10.jpg'
import pic11 from '../../media/MiniGallery/TemporalPictures/pic11.jpg'
import pic12 from '../../media/MiniGallery/TemporalPictures/pic12.jpg'
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
                                <p className='title-h2-g'>
                                    Expect to save thousands of dollars when coming to Mexico to meet your dental needs. Dental tourism is something everyone should look into considering the immense savings! We pride ourselves in providing 5-star dental care, all while saving our clients money.
                                </p>
                            </div>
                            <div className="content">
                                <div className="image-wrapper">
                                    <img src={pic10} alt="mini gallery pic 10" />
                                </div>
                            </div>
                        </li>
                        <li className='item item-reverse'>
                            <div className="item-title">
                                <p className='title-h2-g'>
                                    Our office includes professionals with over 25 years of experience working to perfect smiles. Here at Cozumel Dental Health, we provide exceptional service for each of our patients and their dental goals. For your benefit, our office has made itself available to be your hotspot for dental tourism.
                                </p>
                            </div>
                            <div className="content">
                                <div className="image-wrapper">
                                    <img src={pic11} alt="mini gallery pic 10" />
                                </div>
                            </div>
                        </li>
                        <li className='item'>
                            <div className="item-title">
                                <p className='title-h2-g'>
                                    Our office has top quality dental treatments and procedures that use the latest and most practical technology for your procedure. Your dental care is our top priority and therefore we provide it to you with the best equipment.
                                </p>
                            </div>
                            <div className="content">
                                <div className="image-wrapper">
                                    <img src={pic12} alt="mini gallery pic 10" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhyUs