import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/udayan-nath-957070224/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Udayan285" target="_blank"><ImGithub/></a>
        <a href="https://www.facebook.com/udayan285/" target="_blank"><FaFacebook/></a>

    </div>
  )
}

export default HeaderSocial