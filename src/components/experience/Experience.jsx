import React from 'react'
import './Experience.scss'
// import ReactLogo from '../../assets/638-6386413_react-logo-png-white-transparent-png-removebg-preview.png'
// import VeuIcon from '../../assets/240079ae6ed9ddb6309ac63785695f93-removebg-preview.png'
// import HtmlIcon from '../../assets/html-5.png'
// import CssIcon from '../../assets/css-3.png'
// import JsIcon from '../../assets/js.png'
// import SassLogo from '../../assets/sasss.png'
// import BootstrapLogo from '../../assets/bootstrap.png'

export default function Experience() {
  return (
    <div className='experience' id='skill'>
        <div className='experience-level'>
            <h2 className=''>Work Experience</h2>
            <div></div>
        </div>
            <div className="experience-container">
            <div className='divider'>
                <div className='experience-work'>
                    <div className='experience-date'>
                        <div>
                            <h4>Front-end Engineer</h4>
                            <p>Sterling Bank</p>
                        </div>
                        <p>August 2022 - Present</p>
                        <p className='experience-button'>Full Time</p>
                    </div>
                    <div className='experience-place'>
                        <h4>The Business Hub</h4>
                        <p>As part of the development team, I contributed to the seamless user experience of the Web application. I collaborated on implementing security features to safeguard customers' personal and financial data. </p>
                    </div>
                </div>
            </div>
            <div className='divider'>
                <div className='experience-work'>
                    <div className='experience-date'>
                        <h4>Front-end Engineer</h4>
                        <p>Peexoo Technologies</p>
                        <p>March 2021 - June 2022</p>
                        <p className='experience-button'>Full Time</p>
                    </div>
                    <div className='experience-place'>
                        <h4>Peexoo</h4>
                        <p>As a Frontend Engineer, I achieved the successful implementation of an in-app schedule management system for photographers, improving their booking and project organization. I collaborated closely with the product and design teams, gathering requirements and iterating on features. By leveraging AI technology, specifically the "Find My Face" feature, I and my team implemented and optimized a powerful search functionality that enabled clients to effectively search for their pictures.</p>
                    </div>
                </div>
            </div>
            <div className='divider'>
                <div className='experience-work'>
                    <div className='experience-date'>
                        <h4>Intern Front-end Engineer</h4>
                        <p>The Bulb Africa</p>
                        <p>August 2022 - March 2021</p>
                        <p className='experience-button'>Full Time</p>
                    </div>
                    <div className='experience-place'>
                        <h4>The Bulb</h4>
                        <p>As a Frontend Engineer, I successfully implemented the client side using React, Redux, and React-Router. Collaborating closely with senior engineers, I refined and finalized product designs through meticulous code implementation, validation, and debugging. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
