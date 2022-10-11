import React from 'react'

import './Contact.css'
import contactIllustration from '../assets/images/Lets-talk-illustration.png'
import github from '../assets/icons/icons8-github-60.png'
import mail from '../assets/icons/icons8-mail-60.png'
import linkedin from '../assets/icons/icons8-linkedin-circled-60.png'

const Contact = ({ closeContact }) => {
  return (
    <div className = "Contact">
        <div className="contact-content">
            <button className="close-btn" onClick={()=>{closeContact(false)}}>X</button>
            <div className="content">
                <h1 className ="contact-heading">Lets Talk</h1>
                <img className = "contact-image" src={contactIllustration} alt="contact-image"/>
                <div className="social">
                    <h2>Socials</h2>
                    <div className="s-icons">
                      <img className="social-icon" src = {mail} alt="mail-icon-img" />
                      <img className="social-icon" src = {github} alt="github-icon-img" />
                      <img className="social-icon" src = {linkedin} alt="linkedin-icon-img"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact