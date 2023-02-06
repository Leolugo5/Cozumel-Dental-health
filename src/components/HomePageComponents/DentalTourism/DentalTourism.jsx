import React from 'react'
import DentalTourism1 from '../../../media/Videos/DentalTourism1.mp4'
import DentalTourism2 from '../../../media/Videos/DentalTourism2.mp4'
import DentalTourism3 from '../../../media/Videos/DentalTourism3.mp4'
import './DentalTourism.scss'

function DentalTourism() {
    return (
        <div className='main-dental-tourism-wrapper'>
            <div className="wrapper">
                <div className="content">
                    <div className="title">
                        <h1 className="title-h1-g">
                            Dental Tourism:
                        </h1>
                    </div>
                    <div className="description title-h2-g-alt">
                        <p>
                            The biggest healthcare savings secret is out: traveling to mexico for affordable dentistry.
                        </p>
                    </div>
                    <div className="description title-h2-g-alt">
                        <p>
                            Mexico has been the premier destination for the u.s. and canadian patients looking for affordable and quality dental care.
                        </p>
                    </div>
                    <div className="description title-h2-g-alt">
                        <p>
                            You can save thousands by coming to us for your dental needs.
                        </p>
                    </div>
                </div>
                <div className="media">
                    <div className="media-wrapper">
                        <div className="video-container">
                            <video src={DentalTourism1} autoPlay loop muted className="video-container">
                            </video>
                        </div>
                        <div className="video-container">
                            <video src={DentalTourism2} autoPlay loop muted className="video-container video-featured">
                            </video>
                        </div>
                        <div className="video-container">
                            <video src={DentalTourism3} autoPlay loop muted className="video-container">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DentalTourism