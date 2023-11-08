import React from 'react';
import './about.css';
import ME from '../../assets/images/My.jpg'
import {GiTrophyCup} from 'react-icons/gi';
import {PiCertificate} from 'react-icons/pi';
import {AiFillSafetyCertificate} from 'react-icons/ai';

const About=()=>{
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                     <div className="about__cards">
                         <article className="about__card">
                             <GiTrophyCup className="about__icon"/>
                             <h5>Awards</h5>
                               <small>15+ Awards Won<br/>(2015 - 2023)</small>
                         </article>

                         <article className="about__card">
                             <PiCertificate className="about__icon"/>
                             <h5>Certificates</h5>
                               <small>10+ Deferent Sections <br/> (2015 - 2023) </small>
                         </article>

                         <article className="about__card">
                             <AiFillSafetyCertificate className="about__icon"/>
                             <h5>Achievements</h5>
                               <small>Intern at Asoda Awar and CS OF CS<br/> (2018-2020)<br/>
                               </small>
                           
                         </article>
                     </div>
                     <p id="pragraph">
                     passionate about creating intuitive and visually appealing user interfaces. With 3 years of experience in front-end development, I have honed my skills in crafting responsive and dynamic web applications using cutting-edge technologies like React.js. Beyond my technical abilities, I am a creative problem-solver who thrives in collaborative environments. I believe in the power of teamwork and effective communication to achieve outstanding results. Let's work together to turn your ideas into reality and make a meaningful impact in the digital world.

                     </p>

                     <a href="#contact" className="btn btn-primary about-btn">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;