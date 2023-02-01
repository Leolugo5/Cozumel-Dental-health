import pic1 from '../../media/MiniGallery/TemporalPictures/pic1.jpg'
import pic2 from '../../media/MiniGallery/TemporalPictures/pic2.jpg'
import pic3 from '../../media/MiniGallery/TemporalPictures/pic3.jpg'
import React from 'react'
import './OurTeam.scss'
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard'

function OurTeam() {
    return (
        <div className='component-wrapper'>
            <div className="our-team-main-wrapper">
                <div className="inner-wrapper">
                    <div className="max-w-wrapper">
                        <div className="svg-inner-content">
                            <div className="header-media">
                                <div className="top">
                                    <img src={pic1} alt="doctor profile" />
                                </div>
                                <div className="bottom">
                                    <img src={pic2} alt="doctor profiler" />
                                    <img src={pic3} alt="doctor profile" />
                                </div>
                            </div>
                            <div className="header-content">
                                <h1 className="title-h1-g">
                                    Meet the team
                                </h1>
                                <h3 className="subtitle title-h2-g-alt">
                                    Our team of experts have over 25 years of experience and speak both Spanish and English. Our team specializes in various different dental fields
                                </h3>
                                <button className="see-more">Our Dentists</button>
                            </div>
                        </div>
                        {/* New component goes here */}
                    </div>
                </div>
            </div>
            <div className="dentist-list">
                <TeamMemberCard />
            </div>
        </div>
    )
}

export default OurTeam