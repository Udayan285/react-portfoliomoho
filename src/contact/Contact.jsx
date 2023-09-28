import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
const form = useRef();


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_8va7a7p', 'template_8mvmkxz', form.current, 'b9TJ2okfZY7DRqef9')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
};


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>odoynnath@gmail.com</h5>
            <a href="mailto:odoynnath@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option" target="_blank">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Moho IT</h5>
            <a href="https://m.me/udayan285">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801319037021</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801319037021" target="_blank">Send a message</a>
          </article>
        </div>
        {/* ===============END OF CONTACT OPTION============== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message Here' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact