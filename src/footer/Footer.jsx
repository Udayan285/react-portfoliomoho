import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo'>MohoIT</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/udayan285/"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/udayan-nath-957070224/"><BsLinkedin/></a>
        <a href="https://twitter.com/UdayanS46939579?t=3FeR9s6MnLnfjTi6CRdduQ&s=07&fbclid=IwAR1qQvYqVwe-j0B4q94b98nPU__AG_P_73EXFHW7L_6tWpvYM5voIUpyOnc"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MohoIT all right reserved</small>
      </div>
    </footer>
  )
}

export default Footer