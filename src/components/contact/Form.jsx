import React from 'react'

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css'
import Button from '../button/button'



const Form = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const form = useRef();


    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
        .sendForm('service_yihjaqd', 'template_xcdirxp', form.current, {
            publicKey: 'NJ9CgmSswaDJg8Bvt',
          })
        .then(
            (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
            },
            (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
            }
        );

        // Clears the form after sending the email
        e.target.reset();
    };
  return (
    <div className='form-container'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='fields'>
                <input className='input-fields' type="text" name="user_name" placeholder='Full Name' required/>
                <input className='input-fields' type="email" name="user_email" placeholder='youremailhere@uw.edu' required/>
                <input className='input-fields'type="text" name="user_org" placeholder='Name of Organization (opt)' />
                <input className='input-fields' type="text" name="user_phone" placeholder='Your Phone Number (opt)' />
                <textarea className='input-fields message-box' name="message" placeholder='Reason for contact (questions about TEDxUofW, why you want to become a sponsor, etc)' required/>
            </div>
            </form>
            <div className='submit-btn'>
                <Button className="contact-btn" title="SUBMIT" type="submit" disabled={isSubmitting} />
                {stateMessage && <p>{stateMessage}</p>}
            </div>

    </div>
  )
}

export default Form
