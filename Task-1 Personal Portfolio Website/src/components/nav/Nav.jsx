import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}><LuUser2 /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
      {/* <a href="#services" onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}><RiServiceLine /></a> */}
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}><GoProjectSymlink /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav