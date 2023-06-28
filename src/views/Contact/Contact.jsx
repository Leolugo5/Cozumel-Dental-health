import React from 'react'
import './Contact.scss'

function Contact() {
    return (
        <div className='contact-main-wrapper'>
            <div className="contact-inner-wrapper">
                <h1 className="contact-title title-h1-g">
                    Have Any Questions?
                </h1>
                <span className="title-h2-g">
                    Please contact us with any questions about services, available times, and prices.
                </span>

                <form action="" className="main-contact-form">
                    <input className='input-item1' type="text" name="Name" id="useName" placeholder='Full Name' />
                    <input className='input-item2' type="email" name="email" id="userEmail" placeholder='Email Address' />
                    <textarea className='input-item3' name="Message" id="userMessage" cols="30" rows="10" placeholder='Message'></textarea>
                </form>
                <button className='submit' type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Contact