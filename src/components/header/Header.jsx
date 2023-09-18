import React from 'react'
import MyPDF from '../../assets/files/Ugochukwu Nwadike CV (2) (1).pdf'
import '../header/Header.scss'
// import headerBgImg from '../../assets/creative-wallpaper-with-white-shapes.jpg'
import HeaderImg from '../../assets/UgochukwuCroped.jpg'
// let sectionStyle = {
//     // width: "50%",
//     // height: "100%",
//     backgroundImage: `url(${headerBgImg})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   };


export default function Header() {
  return (
    <div className='header' id="home"  >
        <div className='header-text'>
            <h3 className='writing-fade'>Hello,</h3>
            <h6 className='writing-fade2'>My name is Ugochukwu Nwadike I am</h6>
            <h6 className='writing-fade3'>a Front-end software Engineer</h6>
            <div className='header-bio'>
              <p>I am passionate about creating exceptional user experiences through clean and efficient code.</p>
              <p>One of my strengths as a frontend engineer is my ability to bridge the gap between design and development.</p>
            </div>
            <a href={MyPDF} download><button>View CV</button></a>
        </div>
        <div className='header-imgContainer hiThere'>
            <div className='header-ImageBorder'>
                <img src={HeaderImg} alt='phot' height={280}/>
            </div>
        </div>
    </div>
  )
}
