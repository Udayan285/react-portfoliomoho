import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {AiOutlineDribbble} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https//:linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https//:github.com" target="_blank"><ImGithub/></a>
        <a href="https//:dribble.com" target="_blank"><AiOutlineDribbble/></a>

    </div>
  )
}

export default HeaderSocial