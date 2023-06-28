import React from 'react'
import pic1 from '../../media/mainPhotos/pic1.jpg'
import pic2 from '../../media/mainPhotos/pic2.jpg'
import pic3 from '../../media/mainPhotos/pic3.jpg'
import pic4 from '../../media/mainPhotos/pic4.jpg'
import pic5 from '../../media/mainPhotos/pic5.jpg'
import pic6 from '../../media/mainPhotos/pic6.jpg'
import pic7 from '../../media/mainPhotos/pic7.jpg'
import pic8 from '../../media/mainPhotos/pic8.jpg'
import pic9 from '../../media/mainPhotos/pic9.jpg'
import './AnimatedGallery.scss'

function AnimatedGallery() {

  return (
    <div className='mini-gallery-wrapper'>
      <section className="mini-gallery-main-pictures">
        <div className="image-item-frame">
          <img src={pic1} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic2} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic3} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic4} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic5} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic6} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic7} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic8} alt="Description" className='picture-item' />
        </div>
        <div className="image-item-frame">
          <img src={pic9} alt="Description" className='picture-item' />
        </div>
      </section>
    </div>
  )
}

export default AnimatedGallery