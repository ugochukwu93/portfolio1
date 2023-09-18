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
            <h2>About me</h2>
            <div></div>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className='aboutMe' id='about'>
            <div>
                <h2>Get to know me !</h2>
                <p>As a frontend engineer, I've crafted seamless user interfaces and intuitive web experiences. I've designed and developed captivating websites and web applications, blending creativity with precision. Currently, I'm expanding my skill set into backend development, mastering Node.js for robust server-side functionality. My journey is a fusion of aesthetics and technology.</p>
                {/* <p>I am proficient in HTML, CSS, and JavaScript, and I constantly stay updated with the latest trends and best practices in front-end development. My goal is to ensure that websites and applications I develop are not only functional but also optimized for performance and accessibility.</p> */}
                {/* <p>Collaboration is an integral part of my work approach. I enjoy working closely with designers, back-end developers, and stakeholders to translate their visions into interactive and responsive web interfaces. I value effective communication and believe that understanding the user's needs and goals is crucial in crafting intuitive and engaging user interfaces.</p> */}
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
                <div>Vuelidate</div>
                <div>Vuetify</div>
            </div>
            <div className='aboutMe-skills'>
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Emotional Intelligence</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Critical thinking</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Teamwork</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Version control</div>
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Organization</div>
                        {/* <div className='grid-item'><img src={Star} alt='' width={15}/> Open-mindedness</div> */}
                        <div className='grid-item'><img src={Star} alt='' width={15}/> Problem solving</div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}
