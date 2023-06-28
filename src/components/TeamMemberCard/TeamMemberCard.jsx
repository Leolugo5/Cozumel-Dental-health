import React from 'react'
import './TeamMemberCard.scss'
import GenericDentist from '../../media/People/NotOurs/GenericDentist.png'
import ClaudiaNunez from '../../media/mainPhotos/ClaudiaNunez.jpg'
import MitchelRomero from '../../media/mainPhotos/MitchelRomero.jpg'
import ArianaAlbornoz from '../../media/mainPhotos/ArianaAlbornoz.jpg'
import GabrielaLopez from '../../media/mainPhotos/GabrielaLopez.jpg'

function TeamMemberCard() {
    return (
        <div className='team-card-wrapper'>
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={GenericDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Rafael Lasprilla
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                "La sonrrisa es la llave magica que abre las puertas del corazon"
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                Implants and rehabilitation
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #123456789
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Colombia
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                28
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={GenericDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Nayely Novelo
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                "A smile is the magical key that opens the doors of the heart."
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                Endodontist
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #123456789
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Mexico
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                8
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}

            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={GenericDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Erick Polanco
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                "A smile is the magical key that opens the doors of the heart."
                            </p>
                            <br />
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                General Dentist Implantology
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #123456789
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Campeche
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                8
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}

            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={GenericDentist} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Leonardo Sarmento
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                "A smile is the magical key that opens the doors of the heart."
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                Maxillofacial Surgeon
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #123456789
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Mexico
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                10
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}

            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={ClaudiaNunez} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Claudia nuñez
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                La sonrrisa es la llave magica que abre las puertas del corazon
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                General Dentist
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #12704006
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Valladolid
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                28
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={MitchelRomero} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Mitchel Romero
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                "A smile is the magical key that opens the doors of the heart."
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                General Dentist
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #13054339

                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Valladolid
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                8
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second Card */}
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={ArianaAlbornoz} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Ariana Albornoz
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                La sonrrisa es la llave magica que abre las puertas del corazon
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                General Dentist
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #12623112
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Valladolid
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                12
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* second card */}
            <div className="inner-wrapper">
                <div className="card-frame">
                    <div className="media">
                        <img src={GabrielaLopez} alt="Doctor X" />
                    </div>
                    <div className="card-content">
                        <div className="team-member-name">
                            <h3 className="title-h2-g-alt">
                                Gabriela Lopez
                            </h3>
                        </div>
                        <div className="team-member-description">
                            <p className="team-member-quote">
                                "A smile is the magical key that opens the doors of the heart."
                            </p>
                            <span className="field years-of-experience">
                                <span>Specific field</span>
                                Implants and rehabilitation
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Licence</span>
                                #123456789
                            </span>
                            <br />
                            <span className="city">
                                <span>From</span>
                                Colombia
                            </span>
                            <br />
                            <span className="years-of-experience">
                                <span>Years of experience</span>
                                28
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard