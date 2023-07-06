import React, { useState } from "react";
import '../navbar/Navbar.scss'
import ImgLogo from '../../assets/coding.png'
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const [navSize, setnavSize] = useState("5rem");
  // const [navColor, setnavColor] = useState("#2d2e32");


  const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

  
  
  // const listenScrollEvent = () => {
  //   window.scrollY > 10 ? setnavColor("#2d2e32") : setnavColor("transparent");
  //   window.scrollY > 10 ? setnavSize("0rem") : setnavSize("5rem");
    
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
    
  // }, []);
  
  return (
        <nav className="navbar">
        <div className="nav-logo">
        <div><img src={ImgLogo} alt='logo' width={40} /></div>
        </div>
        <div onClick={handleClick} className="nav-icon">
          {open ? <FiX /> : <FiMenu />}
        </div>
        <ul className={open ? 'nav-links active' : 'nav-links'}>
          <li className="nav-item">
            <div className="nav-link"
             onClick={closeMenu} 
             ><a href="#home">
              Home
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={closeMenu}>
            <a href="#about">
              About
            </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={closeMenu}>
            <a href="#project">
              Project
            </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={closeMenu}>
            <a href="#skill">
              Work Experience
            </a>  
            </div>
          </li>
        </ul>
      </nav>
  )
}
