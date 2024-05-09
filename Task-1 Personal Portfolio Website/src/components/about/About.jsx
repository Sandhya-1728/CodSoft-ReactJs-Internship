import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>  
            <article className="about__card">
              <PiCertificateBold className='about__icon' />
              <h5>Certifications</h5>
              <small>20+ certificates</small>
            </article>  
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>  
          </div>
          <p>
            I am a driven and self-motivated individual with a passion for learning
            and innovation. With a strong foundation in programming languages such as
            Java, Python, and web technologies, I am eager to tackle new challenges and
            continually expand my skill set. Having undergone internships in Java
            Fullstack Development and Cloud Computing, I have gained practical experience
            in building robust and efficient software solutions. My projects, including
            the creation of an online education platform, a sign language detection
            system, and a blockchain document verification system, reflect my commitment
            to leveraging technology for positive impact. With a Bachelor's degree in
            Information Technology and a remarkable CGPA of 9.41, I bring both
            technical expertise and academic excellence to the table. I thrive
            in collaborative environments and am always eager to contribute to
            innovative projects.
          </p>
          <a href="#contact" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About