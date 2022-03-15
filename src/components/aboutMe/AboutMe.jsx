import React from 'react'
import './AboutMe.scss'
import Star from '../../assets/star (1).png'
import TSLogo from '../../assets/TSimages.png'
import VueILogo from '../../assets/1184px-Vue.js_Logo_2.svg.png'
import ReactLogo from '../../assets/logo-og-removebg.png'
import AboutMeImg from '../../assets/depositphotos_327623974-stock-illustration-bearded-man-sits-on-the.jpg'

export default function AboutMe() {
  return (
    <div className='aboutMe' id='about'>
        <div className='aboutMe-container'>
                <div className='aboutMe-Img'>
                    <img className='aboutMe-aboutImg' src={AboutMeImg} alt='img' height={450} width={450}/>
                    <div className='aboutMe-flex'>
                        <img src={ReactLogo} alt="react" height={50}/>
                        <img src={VueILogo} alt="react" height={50}/>
                        <img src={TSLogo} alt="react" height={50}/>
                    </div>
                </div>
                <div className='aboutMe-skills'>
                    <div className='grid-item'><img src={Star} alt='' width={15}/> Emotional Intelligence</div>
                    <div className='grid-item'><img src={Star} alt='' width={15}/>Written / Oral communication</div>
                    <div className='grid-item'><img src={Star} alt='' width={15}/>Teamwork</div>
                    <div className='grid-item'><img src={Star} alt='' width={15}/>Critical thinking</div>
                    <div className='grid-item'><img src={Star} alt='' width={15}/>Organization</div>
                    <div className='grid-item'><img src={Star} alt='' width={15}/>Open-mindedness</div>
                </div>
            <div className='aboutMe-text'>
                <div>
                <p>Logical and result driven Web Developer dedicated to building and optimizing user-focused website for customers with various business objective. judicious and creative when crafting effective website, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor</p>
                </div>
            </div>
        </div>
    </div>
  )
}
