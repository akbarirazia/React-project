import React from 'react';
import './skill.css';
const Skill=()=>{
    return(
        <section id="skills">
             <h5>The Skills I Have</h5>
            <h2>My Skills</h2>
            <div className="container skill__container">
                <div className="skill__frontend">
                    <h3>Frontend Development</h3>
                    <div className="skill__box">
                        <span className="title">HTML</span>
                        <div className="skill__bar">
                            <span className="skill__per html">
                                <span className="tooltip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">CSS</span>
                        <div className="skill__bar">
                            <span className="skill__per css">
                                <span className="tooltip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">Java Script</span>
                        <div className="skill__bar">
                            <span className="skill__per JavaScript">
                                <span className="tooltip">75%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">Bootstrap</span>
                        <div className="skill__bar">
                            <span className="skill__per Bootstrap">
                                <span className="tooltip">85%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">React</span>
                        <div className="skill__bar">
                            <span className="skill__per react">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="skill__backend">
                <h3>Backend Development</h3>
                    <div className="skill__box">
                        <span className="title">PHP</span>
                        <div className="skill__bar">
                            <span className="skill__per PHP">
                                <span className="tooltip">55%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">MySQL</span>
                        <div className="skill__bar">
                            <span className="skill__per MySQL">
                                <span className="tooltip">50%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">Java</span>
                        <div className="skill__bar">
                            <span className="skill__per Java">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">OOP</span>
                        <div className="skill__bar">
                            <span className="skill__per OOP">
                                <span className="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill__box">
                        <span className="title">C</span>
                        <div className="skill__bar">
                            <span className="skill__per C">
                                <span className="tooltip">45%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;