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

    const workExp = [
        {
            skill: "Front-end Engineer",
            jobType: "Full time",
            companyName: "Sterling Bank",
            dateRange: 'July, 2021 - August, 2022',
            place: 'The Business Hub',
            description: "As part of the development team, I contributed to the seamless user experience of the Web application. I collaborated on implementing security features to safeguard customers' personal and financial data."
        },
        {
            skill: "Front-end Engineer",
            jobType: "Full time",
            companyName: "Peexoo Tech",
            dateRange: 'March 2021 - June 2022',
            place: 'Peexoo Tech',
            description: "As a Frontend Engineer, I achieved the successful implementation of an in-app schedule management system for photographers, improving their booking and project organization. I collaborated closely with the product and design teams, gathering requirements and iterating on features."
        },
        {
            skill: "Intern Front-end Engineer",
            jobType: "Full time",
            companyName: "The Bulb Africa",
            dateRange: 'August 2022 - March 2021',
            place: 'The Bulb',
            description: "As a Frontend Engineer, I successfully implemented the client side using React, Redux, and React-Router. Collaborating closely with senior engineers, I refined and finalized product designs through meticulous code implementation, validation, and debugging."
        },
        
    ]
  return (
    <div className='experience' id='skill'>
        <div className='experience-level'>
            <h2 className=''>Work experience</h2>
            <div></div>
        </div>
            <div className="experience-container">
                {workExp.map((experience, index)=> (
                    <div className='divider'>
                    <div className='experience-work'>
                        <div className='experience-date'>
                            <div>
                                <h4>{experience.skill}</h4>
                                <p>{experience.companyName}</p>
                            </div>
                            <p>{experience.dateRange}</p>
                            <p className='experience-button'>{experience.jobType}</p>
                        </div>
                        <div className='experience-place'>
                            <h4>{experience.place}</h4>
                            <p>{experience.description}</p>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}
