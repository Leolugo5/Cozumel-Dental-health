import React from 'react'
import './TeamMemberCard.scss'
import HeroDentist from '../../media/People/NotOurs/HeroDentist.png'

function TeamMemberCard() {
    return (
        <div className='team-card-wrapper'>
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={HeroDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Rafael Lasprilla
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                La sonrrisa es la llave magica que abre las puertas del corazon
                            </p>
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                28
                            </span>
                            <span className="field">
                                <span>Specific field</span>
                                Implantes y reabilitacion
                            </span>
                            <span className="city">
                                <span>From</span>
                                Colombia
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={HeroDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Rafael Lasprilla
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                La sonrrisa es la llave magica que abre las puertas del corazon
                            </p>
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                28
                            </span>
                            <span className="field">
                                <span>Specific field</span>
                                Implantes y reabilitacion
                            </span>
                            <span className="city">
                                <span>From</span>
                                Colombia
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={HeroDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Rafael Lasprilla
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                La sonrrisa es la llave magica que abre las puertas del corazon
                            </p>
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                28
                            </span>
                            <span className="field">
                                <span>Specific field</span>
                                Implantes y reabilitacion
                            </span>
                            <span className="city">
                                <span>From</span>
                                Colombia
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard