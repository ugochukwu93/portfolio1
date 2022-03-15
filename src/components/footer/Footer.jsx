import React from 'react'
import LinkedinLogo from '../../assets/linkedin.png'
import GitLogo from '../../assets/git.png'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div>
                <img src={LinkedinLogo} alt='' height={40}/>
            </div>
            <div>
                <img src={GitLogo} alt='' height={40}/>
            </div>
        </div>
        <div>
        <p>&copy; 2022 Ugochukwu</p>
        </div>
    </div>
  )
}
