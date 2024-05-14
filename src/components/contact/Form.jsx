import React from 'react'

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';



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
        {/* <form id="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="name"></label>
                <input type="text" className="form-control" value="Name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value="youremailhere@uw.edu" required/>
            </div>
            <div className="form-group">
                <label htmlFor="organization"></label>
                <input type="text" className="form-control" value="Name of Organization (opt)" />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber"></label>
                <input type="text" className="form-control" value="Your Phone Number (opt)" />
            </div>
            <div className="form-group">
                <label htmlFor="message"></label>
                <textarea className="form-control" rows="5" value="Reason for contact (questions about TEDxUofW, why you want to become a sponsor, etc)"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
            {stateMessage && <p>{stateMessage}</p>}
        </form> */}

        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
            </form>

    </div>
  )
}

export default Form
