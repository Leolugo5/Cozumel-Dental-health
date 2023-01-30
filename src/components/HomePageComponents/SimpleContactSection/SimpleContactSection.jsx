import React from 'react'
import './SimpleContactSection.scss'

function SimpleContactSection() {
    return (
        <section className='simple-contact-section-wrapper'>
            <div className="inner-wrapper">
                <div className="info">
                    <div className="title-wrapper">
                        <h2 className="title-h1-g">Contact Details</h2>
                    </div>
                    <div className="info-content">
                        <label className='title-h2-g-alt' htmlFor="celphone ">Phone</label>
                        <a href="tel:+">+52 1 (987) 138 4893</a>
                        <label className='title-h2-g-alt' htmlFor="email ">Email</label>
                        <a href="mailto:">hola@email.com</a>
                            <label className='title-h2-g-alt' htmlFor="Social ">Social</label>
                        <div className="social-media">
                            <a href="http://google.com" target="_blank" rel="noopener noreferrer">insta</a>
                        </div>
                    </div>
                </div>
                <div className="map-wrapper">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe title="Map location of Cozumel Dental Health" width="500" height="400" id="gmap_canvas" src='https://maps.google.com/maps?q=Cozumel%20Dental%20Health,%2050%20Avenida%20Sur,%20Adolfo%20L%C3%B3pez%20Mateos,%20San%20Miguel%20de%20Cozumel,%20Quintana%20Roo&t=&z=15&ie=UTF8&iwloc=&output=embed' frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimpleContactSection