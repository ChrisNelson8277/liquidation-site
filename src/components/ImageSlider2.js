import React from 'react'
import { useState } from 'react'
import './AdminComponents/admincard.css'



function ImageSlider2({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderStyle ={
        height: '100%',
        position: 'relative'
    }
    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: "center",

    }


  return (
    <div style={sliderStyle}>
        <div className='slide-image2' style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider2