import React from 'react'
import TestimonialsFrame from '../../../media/BGS/Frames/TestimonialsFrame.png'
import AnimatedGallery from '../../AnimatedGallery/AnimatedGallery'
import './Testimonials.scss'

function Testimonials() {
    return (
        <div className='testimonials-wrapper'>
            <div className="testimonials-main-wrapper">
                <div className="gallery">
                    <AnimatedGallery />
                </div>
                <div className="testimonial-container">
                    <img src={TestimonialsFrame} alt="Quote Frame" className='frame-wrapper' />
                    {/* <div className="frame-wrapper-text">
                        <span className="testimonial title-h2-g">
                            A beautiful smile represents good oral health which is essential to your overall well-being. as your dentist in Cozumel, we provide you with the most advanced care utilizing the latest dental technology to maintain and to perfect your smile.
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Testimonials