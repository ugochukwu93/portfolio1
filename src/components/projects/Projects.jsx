import React from 'react'
import './Projects.scss'
import GitLogo from '../../assets/github.png'
import WeatherLogo from '../../assets/weather-app.png'
import InvoiceLogo from '../../assets/invoice.png'
import AfricaLogo from '../../assets/africa.png'
import DashboardLogo from '../../assets/dashboard.png'
import StopWatch from '../../assets/stop-watch.png'
import Tailor from '../../assets/dressmaker.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


export default function Projects() {
  return (
    <div className='projects' id='project'>
          <div className='projects-title'>
            <h4>Projects</h4>
          </div>
        <div  className='projects-container'>
        <div className='projects-weatherApp' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              onClick={()=> window.open("https://tailor-web-ugochukwu93.vercel.app/?", "_blank")}>
              <div className='projects-flex'>
                <img src={GitLogo} alt='' height={25}
                onClick={()=> window.open("https://github.com/ugochukwu93/Tailor-web", "_blank")}/>
                <img src={Tailor} alt='' height={30}/>
              </div>
              <h4>Landing Page</h4>
                <div>
                  <p>A fashion designers landing page website that tell about the designer and his/her work.</p>
                </div>
                <div className='projects-used'>
                <div>Vue Js</div>
                <div>Scss Modules</div>
                </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" 
     onClick={()=> window.open("invoice-app-eight-lemon.vercel.app", "_blank")}>
              <div className='projects-flex'>
                <img src={GitLogo} alt='' height={25}
                 onClick={()=> window.open("https://github.com/ugochukwu93/Invoice-App", "_blank")}/>
                <img src={InvoiceLogo} alt='' height={25}/>
              </div>
              <h4>Invoice app</h4>
              <div>
                <p>the app will have a easy interface to create invoices.</p>
              </div>
              <div className='projects-used'>
                <div>Vue Js</div>
                <div>Sass</div>
                <div>fire store</div>
              </div>
            </div>
          
            <div className='projects-weatherApp' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     onClick={()=> window.open("weather-app-vert-five.vercel.app", "_blank")}>
              <div className='projects-flex'>
                <img src={GitLogo} alt='' height={25}
                onClick={()=> window.open("https://github.com/ugochukwu93/WeatherApp", "_blank")}/>
                <img src={WeatherLogo} alt='' height={25}/>
              </div>
              <h4>Weather app</h4>
              <div>
                <p>The app is designed using weather Api to give users the most accurate and up-to-date weather information.</p>
              </div>
              <div className='projects-used'>
                <div>Vue Js</div>
                <div>Sass</div>
              </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     onClick={()=> window.open("https://image-gallery-mlmcb0pni-ugochukwu93.vercel.app/", "_blank")}>
              <div className='projects-flex'>
                <img src={GitLogo} alt='' height={25}
                onClick={()=> window.open("https://github.com/ugochukwu93/Image-Gallery", "_blank")}/>
                <img src={DashboardLogo} alt='' height={25}/>
              </div>
                <h4>Image gallery</h4>
                <div>
                  <p>image gallery viewer, view images fetched from unsplash Api</p>
                </div>
                <div className='projects-used'>
                <div>React Js</div>
                <div>Scss Modules</div>
                </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" onClick={()=> window.open("https://todo1-app.netlify.app", "_blank")}>
              <div className='projects-flex'>
                <img src={GitLogo} alt='' height={25}
                onClick={()=> window.open("https://github.com/ugochukwu93/todolist", "_blank")}/>
                <img src={AfricaLogo} alt='' height={25}/>
              </div>
              <h4>Todo App</h4>
              <div>
                <p>Todo app allows you to create your own personal to-do list. Once youve created your list, you can keep track of what needs to be done and plan your day!</p>
              </div>
              <div className='projects-used'>
                <div>Html</div>
                <div>Css</div>
                <div>Javascript</div>
              </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" onClick={()=> window.open("https://ugochukwu93.github.io/stop-watch/", "_blank")}>
              <div className='projects-flex'>
                <img src={GitLogo} alt='' height={25}
                onClick={()=> window.open("https://github.com/ugochukwu93/stop-watch", "_blank")}/>
                <img src={StopWatch} alt='' height={25}/>
              </div>
              <h4>Stop Watch</h4>
                <div>
                  <p>A very simple time-keeping device, track your time so you can see how much time you are wasting.</p>
                </div>
                <div className='projects-used'>
                <div>Html</div>
                <div>Css</div>
                <div>Javascript</div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
