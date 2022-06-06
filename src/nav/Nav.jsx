import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {SiPolywork} from 'react-icons/si'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNAv] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNAv('#home')}className={activeNav ==='#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNAv('#about')}className={activeNav ==='#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNAv('#experience')}className={activeNav ==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#service" onClick={() => setActiveNAv('#service')}className={activeNav ==='#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNAv('#portfolio')}className={activeNav ==='#portfolio' ? 'active' : ''}><SiPolywork/></a>
      <a href="#contact" onClick={() => setActiveNAv('#contact')}className={activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav