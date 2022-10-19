import React from 'react'
import './css/aboutus.css'
import BodyFooter from './Footer'

function AboutUs() {
  return (
    <div className='about-us' id="about-us">
        <br></br>
        <h1 id='about-us-title'>About Us</h1>
            <div className='about-text-header'>
                <div className='about-text-header1'>Our Story</div>
                <div className='about-text-header2'>Our Mission</div>
                <div className='about-text-header3'>Refund Policy</div>
            </div>
        <div className='about-us-wrapper'>

            <div className='about-para'>
                <h1>Our Story</h1>
                <p>Sunt sunt ex aliquip laborum incididunt nisi nulla ipsum duis irure excepteur nostrud. Occaecat ad enim ut nostrud occaecat esse velit commodo consequat Lorem voluptate. Anim nisi mollit aliqua aliquip laborum veniam. Ut pariatur sunt tempor sit ex Lorem eu esse ipsum minim.</p>
                <h1>Our Mission</h1>
                <p>Sunt sunt ex aliquip laborum incididunt nisi nulla ipsum duis irure excepteur nostrud. Occaecat ad enim ut nostrud occaecat esse velit commodo consequat Lorem voluptate. Anim nisi mollit aliqua aliquip laborum veniam. Ut pariatur sunt tempor sit ex Lorem eu esse ipsum minim.</p>
                <h1>Refund Policy</h1>
                <p>Sunt sunt ex aliquip laborum incididunt nisi nulla ipsum duis irure excepteur nostrud. Occaecat ad enim ut nostrud occaecat esse velit commodo consequat Lorem voluptate. Anim nisi mollit aliqua aliquip laborum veniam. Ut pariatur sunt tempor sit ex Lorem eu esse ipsum minim.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs