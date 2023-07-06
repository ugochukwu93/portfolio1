import React from 'react'
import LinkedinLogo from '../../assets/linkedin.png'
import GitLogo from '../../assets/github.png'
// import  React, { useState , useEffect } from 'react'
import './Footer.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='logo'>
                <img src={LinkedinLogo} alt='' height={40}/>
            </div>
            <div className='logo1'>
                <img src={GitLogo} alt='' height={40}/>
            </div>
        </div>
        <div>
        <p>&copy; Ugochukwu {currentYear}</p>
        </div>
    </div>
  )
}
