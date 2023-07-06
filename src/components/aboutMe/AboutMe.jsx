import React from 'react'
import './AboutMe.scss'
import Star from '../../assets/star (1).png'


export default function AboutMe() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:nwadikeugochukwu93@gmail.com';
    };
  return (
    <div>
        <div className='aboutMeHead'>
            <h2>ABOUT ME</h2>
            <div></div>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className='aboutMe' id='about'>
            <div>
                <h2>Get to know me !</h2>
                <p>As a front-end software engineer, my passion lies in creating visually appealing and user-friendly web applications. With a strong foundation in web technologies and a keen eye for design, I strive to deliver exceptional user experiences through clean and efficient code.</p>
                <p>I am proficient in HTML, CSS, and JavaScript, and I constantly stay updated with the latest trends and best practices in front-end development. My goal is to ensure that websites and applications I develop are not only functional but also optimized for performance and accessibility.</p>
                <p>Collaboration is an integral part of my work approach. I enjoy working closely with designers, back-end developers, and stakeholders to translate their visions into interactive and responsive web interfaces. I value effective communication and believe that understanding the user's needs and goals is crucial in crafting intuitive and engaging user interfaces.</p>
                <button onClick={handleEmailClick}>Contact me</button>
            </div>
            <div>
            <div className='aboutMe-mainSkill'>
                <div>Html</div>
                <div>Css</div>
                <div>Javascript</div>
                <div>React.js</div>
                <div>Redux</div>
                <div>Vue.js</div>
                <div>Vuex</div>
                <div>Nuxt.js</div>
                <div>Bootstrap</div>
                <div>Sass</div>
            </div>
            <div className='aboutMe-skills'>
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Emotional Intelligence</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/>Critical thinking</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/>Teamwork</div>
                        {/* <div className='grid-item'><img src={Star} alt='' width={15}/>Written/Oral communication</div> */}
                        <div className='grid-item'><img src={Star} alt='' width={15}/>Organization</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/>Open-mindedness</div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}
