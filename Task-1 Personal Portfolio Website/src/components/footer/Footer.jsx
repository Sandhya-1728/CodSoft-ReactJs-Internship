import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Sandhya S
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/in/sandhya-somasundaram-17s1a2n">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Sandhya-1728">
          <FaGithub />
        </a>
        <a href="https://medium.com/@uit20213">
          <BsMedium/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;2024 Sandhya S. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer