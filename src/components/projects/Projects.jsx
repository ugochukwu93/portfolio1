import React from 'react'
import './Projects.scss'
// import InvoiceLogo from '../../assets/invoice.jpeg'
// import Agoga from '../../assets/agoganetwork.jpeg'
// import Tailor from '../../assets/fashion.jpeg'
// import GoAsOne from "../../assets/files/GoAsOne.JPG"
// import Bsf from "../../assets/files/Capture11.JPG"
// import MovieApp from "../../assets/files/movie.JPG"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


export default function Projects() {
  return (
    <div className='projects' id='project'>
          <div className='projects-title'>
            <h2>Projects</h2>
            <div></div>
          </div>
        <div  className='projects-container'>
          
            <div className='projects-weatherApp' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              onClick={()=> window.open("https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/", "_blank")}
            >
              <div className='projects-img'>
                {/* <img src={Bsf} alt=''  height={380} width={280}
                onClick={()=> window.open("https://tbh-dashboard-frontend-dev.sterlingapps.p.azurewebsites.net/", "_blank")}/> */}
                {/* <img src={DashboardLogo} alt='' height={25}/> */}
              </div>
              <div className='projects-description'>
                <h4>The Business Hub</h4>
                <div>
                  <p>A platform for startups and growing businesses also an online lending platform for SME’s in Nigeria. Quick access of up to N5 million with NO Collateral at an attractive interest rate. A mixed-stack app built with React js and Vue js</p>
                  <button>GO TO APP</button>
                </div>
              </div>
            </div>
            <div 
            className='projects-weatherApp' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            onClick={()=> window.open("https://agoganetwork.com/about-us.php", "_blank")}
          >
              <div className='projects-img2'>
                {/* <img src={Agoga} alt='' height={380} width={280}/> */}
              </div>
              <div className='projects-description'>
                <h4>Agoga Network</h4>
                <p>Agoga set out to empower organizations bay helping them to: Extend their business and organizational reach through our inclusive agency network</p>
                <button>GO TO APP</button>
              </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              onClick={()=> window.open("https://goasone.org/", "_blank")}
            >
              <div className='projects-img3'>
                {/* <img src={GoAsOne} alt=''  height={380} width={280}
                onClick={()=> window.open("https://goasone.org/", "_blank")}/> */}
                {/* <img src={WeatherLogo} alt='' height={25}/> */}
              </div>
              <div className='projects-description'>
                <h4>GoAsOne</h4>
                <div>
                  <p>It enables anyone to organize people to work together, to create the change they care about.</p>
                  <button>GO TO APP</button>
                </div>
              </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              onClick={()=> window.open("https://tailor-web-ugochukwu93.vercel.app/?", "_blank")}
            >
              <div className='projects-img4'>
                {/* <img src={Tailor} alt=''  height={380} width={280}/> */}
              </div>
              <div className='projects-description'>
                <h4>Fashion Page</h4>
                <div>
                  <p>A fashion designer website showcases a stunning collection of unique and innovative designs.</p>
                  <button>GO TO APP</button>
                </div>
              </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
              data-aos-anchor-placement="center-bottom" 
              onClick={()=> window.open("https://invoice-app-eight-lemon.vercel.app/", "_blank")}
            >
              <div className='projects-img5'>
                {/* <img src={InvoiceLogo} alt=''  height={380} width={280}/> */}
              </div>
              <div className='projects-description'>
                <h4>Invoice App</h4>
                <div>
                  <p>\Ivoice app with easy interface to create business invoices.</p>
                  <button>GO TO APP</button>
                </div>
              </div>
            </div>
            <div className='projects-weatherApp' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" onClick={()=> window.open("https://agoganetwork.com/", "_blank")}
            >
              <div className='projects-img6'>
                {/* <img src={MovieApp} alt=''  height={380} width={280}
                onClick={()=> window.open("https://github.com/ugochukwu93/todolist", "_blank")}/> */}
                {/* <img src={AfricaLogo} alt='' height={25}/> */}
              </div>
              <div className='projects-description'>
              <h4>Movie App</h4>
              <div>
                <p>Movie app to discover newly released movie and top rated movies</p>
                <button>GO TO APP</button>
              </div>
            </div>
              {/* <div className='projects-used'>
                <div>Html</div>
                <div>Css</div>
                <div>Javascript</div>
              </div> */}
            </div>
            
        </div>
    </div>
  )
}
