import React from 'react';
import './HeroHomepage.scss';
import HeroVideo from '../../../media/Videos/HeroVideo.mp4'



export default function HeroHomepage() {
  return (
    <div className='main-wrapper'>

      <div className="main-hero-container">

        <div className="hero-content-video">
          <div className="video">
            <video autoPlay loop muted playsInline className="video-file" >
              <source src={HeroVideo} />
            </video>
          </div>
        </div>
        <div className="description">
          <div className="content">
            <div className="content-wrapper">
              <h1 className="title-h1-g title">
                Cozumel Dental Health
              </h1>
              <div className="details">
                <div className="top title-h3-g">
                  Full Service Dental Office
                </div>
                <div className="center title-h3-g">
                  Reliable dentists to help you brighten your smile who speak both Spanish and English.
                </div>
                <div className="bottom">
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
