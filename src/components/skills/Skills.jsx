import React from 'react'
import './Skills.scss'
import ReactLogo from '../../assets/638-6386413_react-logo-png-white-transparent-png-removebg-preview.png'
import VeuIcon from '../../assets/240079ae6ed9ddb6309ac63785695f93-removebg-preview.png'
import HtmlIcon from '../../assets/html-5.png'
import CssIcon from '../../assets/css-3.png'
import JsIcon from '../../assets/js.png'
import SassLogo from '../../assets/sasss.png'
import BootstrapLogo from '../../assets/bootstrap.png'

export default function Skills() {
  return (
    <div className='skills' id='skill'>
        <h4>Skills</h4>
        <div className='skills-flex'>
            <div className='skills-con' data-aos="flip-left">
                <img src={HtmlIcon} alt=""  width={65} height={65}/>
                <h6>Html 5</h6>
            </div>
            <div className='skills-con' data-aos="flip-left">
                <img src={CssIcon} alt=""  width={65} height={65}/>
                <h6>Css 3</h6>
            </div>
            <div className='skills-con' data-aos="flip-left">
                <img src={JsIcon} alt="" width={65} height={65}/>
                <h6>Javascript</h6>
            </div>
            <div className='skills-con' data-aos="flip-left">
                <img src={ReactLogo} alt=""  width={65} height={65}/>
                <h6>React Js</h6>
            </div>
            <div className='skills-con' data-aos="flip-left">
                <img src={VeuIcon} alt="" width={65} height={65}/>
                <h6>Vue Js</h6>
            </div>
            <div className='skills-con' data-aos="flip-left">
                <img src={BootstrapLogo} alt=''  width={65} height={65}/>
                <h6>Bootstrap</h6>
            </div>
            <div className='skills-con' data-aos="flip-left">
                <img src={SassLogo} alt=''  width={65} height={65}/>
                <h6>Sass</h6>
            </div>
        </div>
    </div>
  )
}
