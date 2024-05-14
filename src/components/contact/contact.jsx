import React from 'react'
import './Contact.css'

/* Logos */
import email from '../../assets/social-media/email.svg'
import facebook from '../../assets/social-media/facebook.svg'
import instagram from '../../assets/social-media/instagram.svg'
import tiktok from '../../assets/social-media/tiktok.svg'
import linkedin from '../../assets/social-media/linkedin.svg'

import Form from './Form'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-us-container'>
        <h1 className='contact-heading'>CONTACT US</h1>
        <hr></hr>

        <div className='form-container'>

          <Form />
          <div className='stay-updated-ctr'>
            <h2 className='stay-updated-title'>Stay Updated</h2>
            <p className='stay-updated-content'>
              Follow us on our social media to be the first to  find out about our upcoming events!
              </p>
            <hr></hr>
            <a href="mailto:tedxuofw@uw.edu"><img src={email} alt='Email Link'/></a>
            <a href="https://www.facebook.com/TEDxUofW"><img src={facebook} alt='Facebook Link'/></a>
            <a href="https://www.instagram.com/tedxuofw/"><img src={instagram} alt='Instagram Link'/></a>
            <a href="https://www.tiktok.com/@tedxuofw"><img src={tiktok} alt='TikTok Link'/></a>
            <a href="https://www.linkedin.com/company/tedxuofw/mycompany/"><img src={linkedin} alt='LinkedIn Link'/></a>
          </div>
        </div>
      </div>

      <div className='donate-container'>
        <h1 className='contact-heading'>CONTACT US</h1>
        <hr></hr>
        <div className='donate-content-ctr'>
          <div className='donate-content'>
            <h2>Make an Impact in Your Community</h2>
            <p>Donations help us invest in training our speakers, improving conference day experiences for our guests, and in recording TEDx talks with high-quality equipment. Any amount is appreciated!</p>
            <hr></hr>
            <p>We appreciate your support!</p>
          </div>

          <div className='donate-links-ctr'>
            <div className='donate-link'>
              <a href=""><img src={linkedin} alt='LinkedIn Link'/></a>
              <p className='donate-link-names'>TEDxUofW_2024</p>
            </div>

            <div className='donate-link'>
              <a href=""><img src={linkedin} alt='LinkedIn Link'/></a>
              <p className='donate-link-names'>tedxuofw@uw.edu</p>
            </div>

            <div className='donate-link'>
              <a href=""><img src={linkedin} alt='LinkedIn Link'/></a>
              <p className='donate-link-names'>Tedxuofw</p>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Contact
