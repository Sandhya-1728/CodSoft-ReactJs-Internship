import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { BsMedium } from "react-icons/bs";

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://linkedin.com/in/sandhya-somasundaram-17s1a2n" target="_blank" ><IoLogoLinkedin/></a>
          <a href="https://github.com/Sandhya-1728" target="_blank"><IoLogoGithub /></a>
          <a href="https://medium.com/@uit20213" target="__blank"><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials