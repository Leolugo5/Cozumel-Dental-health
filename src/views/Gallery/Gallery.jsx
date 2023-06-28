import React from 'react'
import AnimatedGallery from '../../components/AnimatedGallery/AnimatedGallery'
import './Gallery.scss'

function Gallery() {
  return (
    <div className='gallery-main-wrapper'>
      <h1 className='title-h1-g'>Gallery</h1>
      <div className="gallery-window-wrapper">
        <AnimatedGallery />
      </div>
    </div>
  )
}

export default Gallery