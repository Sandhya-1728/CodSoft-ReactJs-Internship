import React from 'react'
import './qualifications.css'


const Qualifications = () => {
return (
    <section class="qualification section">
    <h2 class="section__title">Qualifications</h2>
    <span class="section__subtitle">My Personal Journey</span>

    <div class="qualification__container container">
        <div class="qualification__tabs">
            <div class="qualification__button button--flex">
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
            </div>

            <div class="qualification__button button--flex">
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Internships
            </div>
        </div>

        <div class="qualification__sections">
            <div class="qualification__content">
                <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Information Technology</h3>
                            <span class="qualification__subtitle">R.M.D. Engineering College</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2020 - 2024
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>    
                </div>
                    
                <div class="qualification__data">
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">Senior Secondary Education</h3>
                            <span class="qualification__subtitle">Little Oxford Matri. Hr. Sec. School</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>    
                </div> 

                <div class="qualification__data">
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div> 
                        <div>
                            <h3 class="qualification__title">Secondary Education</h3>
                            <span class="qualification__subtitle">Jaya Matric. Hr. Sec. School</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2017 - 2018
                            </div>
                        </div>   
                </div>    
            </div>
                

            <div class="qualification__content">
                <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">AI/ML Intern</h3>
                            <span class="qualification__subtitle">System Tron</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Jan'24 - Feb'24
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>    
                </div>
                    
                <div class="qualification__data">
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">Frontend Developer Intern</h3>
                            <span class="qualification__subtitle">Infosys SpringBoard</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Jan'23 - May'23
                            </div>
                        </div>    
                </div> 

                <div class="qualification__data">
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div> 
                        <div>
                            <h3 class="qualification__title">Java Fullstack Masterclass</h3>
                            <span class="qualification__subtitle">Pantech eLearning</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Sep'22 - Oct'22
                            </div>
                        </div>   
                </div>  
                    
                <div class="qualification__data">
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div> 
                        <div>
                            <h3 class="qualification__title">Cloud Computing Intern</h3>
                            <span class="qualification__subtitle">Uniq Technologies</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                Feb'22 - Mar'22
                            </div>
                        </div>   
                </div>      
            </div>    
        </div>      
    </div>
    </section>
)
}

export default Qualifications;