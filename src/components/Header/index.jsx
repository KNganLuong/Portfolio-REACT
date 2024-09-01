/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import SocialLinks from '../SocialLinks'
import NavigationBanner from './Navigation'

const Header = () => {
  return (
    <header id='home'>
      <NavigationBanner />

      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>I am Kim-Ngan.</h1>
          <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
            I am a Frontend Developer. I like dabbling in various parts of
            frontend development and like to learn about new technologies, or
            simply play games in my free time (of course, with my children!).
          </h3>

          <ul className='social'>
            <SocialLinks />
          </ul>
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  )
}

export default Header
