import React from 'react'
import pic1 from '../../media/MiniGallery/TemporalPictures/pic1.jpg'
import pic2 from '../../media/MiniGallery/TemporalPictures/pic2.jpg'
import pic3 from '../../media/MiniGallery/TemporalPictures/pic3.jpg'
import pic4 from '../../media/MiniGallery/TemporalPictures/pic4.jpg'
import pic5 from '../../media/MiniGallery/TemporalPictures/pic5.jpg'
import pic6 from '../../media/MiniGallery/TemporalPictures/pic6.jpg'
import pic7 from '../../media/MiniGallery/TemporalPictures/pic7.jpg'
import pic8 from '../../media/MiniGallery/TemporalPictures/pic8.jpg'
import pic9 from '../../media/MiniGallery/TemporalPictures/pic9.jpg'
import pic10 from '../../media/MiniGallery/TemporalPictures/pic10.jpg'
import pic11 from '../../media/MiniGallery/TemporalPictures/pic11.jpg'
import pic12 from '../../media/MiniGallery/TemporalPictures/pic12.jpg'
import './AnimatedGallery.scss'

function AnimatedGallery() {

  const randNum = Math.floor(Math.random() * 12) + 1;
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12
  ]

  // const show = () => {
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];
  //     console.log(element)

  //   }
  // }
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
        {/* <img src={pic10} alt="Description" className='picture-item' />
      <img src={pic11} alt="Description" className='picture-item' />
      <img src={pic12} alt="Description" className='picture-item' />  */}
      </section>
    </div>
  )
}

export default AnimatedGallery