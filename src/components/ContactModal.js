import React from 'react'
import { GoX } from "react-icons/go";
import { IconContext } from 'react-icons/lib'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";


function ContactModal(props) {
  return (
    
        <div className='contact-modal'>
            <IconContext.Provider value={{
                className: "exit-icon2"  }}>
            <GoX onClick={() => {props.openModal(false)}}/>

            </IconContext.Provider>
            <h1>Interested in one of our listings? Contact us</h1>
            <div className='contact-box'>
                <div className='contact-left'>
                    <form>
                        <div className='input-row'>
                            <div className='input-group'>
                                    <label>Name:</label>
                                    <input type="text" placeholder='John Smith'></input>
                                </div>
                                <div className='input-group'>
                                    <label>Number:</label>
                                    <input type="text" placeholder='614-418-9572'></input>
                                </div>
                        </div>
                        <div className='input-row'>
                            <div className='input-group'>
                                    <label>Email</label>
                                    <input type="email" placeholder='johnsmith@gmail.com'></input>
                                </div>
                                <div className='input-group'>
                                    <label>Subject:</label>
                                    <input type="text" placeholder='Item ID#'></input>
                                </div>

                        </div>
                        <label>Message</label>
                                <textarea rows="5" placeholder='Leave a message'></textarea>
                                <label></label>
                                <input type="submit" placeholder='Leave a message'></input>
                    </form>
                </div>
                <div className='contact-right'>
                    <h1>Contact Info</h1>

                    <div className='contact-info'>
                        <div className='contact-info2'>

                            <IconContext.Provider value={{
                                className: "email-icon"
                            }}>
                            <MdOutlineMailOutline/>
                            </IconContext.Provider>
                        </div>
                        <div className='contact-info3'>
                            <p>luckyliquidations@gmail.com</p>

                        </div>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info2'>

                            <IconContext.Provider value={{
                                className: "email-icon"
                            }}>
                            <RiMapPin2Fill/>
                            </IconContext.Provider>
                        </div>
                        <div className='contact-info3'>
                            <p>Columbus, Ohio</p>

                        </div>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info2'>

                            <IconContext.Provider value={{
                                className: "email-icon"
                            }}>
                            <AiFillPhone/>
                            </IconContext.Provider>
                        </div>
                        <div className='contact-info3'>
                            <p>614 444 4444</p>

                        </div>
                    </div>
                    <div className='bottom-icons'>
                        <div className='contact-icons'>
                        <BsFacebook />
                        </div>
                        <div className='contact-icons'>
                        <BsInstagram />
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>

  )
}

export default ContactModal