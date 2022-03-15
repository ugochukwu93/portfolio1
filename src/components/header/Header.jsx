import React from 'react'
import MyPDF from '../../assets/files/Ugochukwu+Nwadike+(2).pdf'
import '../header/Header.scss'
import headerBgImg from '../../assets/png-transparent-printed-circuit-board-electrical-network-icon-line-board-blue-line-connection-angle-electronics-symmetry-thumbnail-removebg-preview.png'
import HeaderImg from '../../assets/UgochukwuCroped.jpg'
var sectionStyle = {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${headerBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };


export default function Header() {
  return (
    <div className='header' id="home">
        <div className='header-text'>
            <h3>Hello My Name Is</h3>
            <h6>Ugochukwu Nwadike I am a <span>Front End Software Engineer</span></h6>
            <a href={MyPDF} download><button>Get Resume</button></a>
        </div>
        <div className='header-imgContainer' style={sectionStyle}>
            <div className='header-ImageBorder'>
                <img src={HeaderImg} alt='phot' height={280}/>
            </div>
        </div>
    </div>
  )
}
