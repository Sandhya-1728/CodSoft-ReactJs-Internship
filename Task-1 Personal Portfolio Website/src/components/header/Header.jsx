import React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile.png'
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Sandhya S</h1>
      <h5 className="text-light">Fullstack Web Developer</h5>
      <CTA />
      <HeaderSocial />

      <div className="me">
        <img src={ME} alt="Sandhya S" />
      </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header