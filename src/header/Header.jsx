import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../src/assets/me3.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container" id='home'>
        <h5>Hello I'm</h5>
        <h1>Udayan</h1>
        <h5 className="text-light">
          Full Stack Developer
        </h5>
        <CTA/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#footer" className='scroll__down'>Scroll Down</a>
        <HeaderSocial/>
      </div>
    </header>
  )
}

export default Header