/* eslint-disable no-unused-vars */

import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='row'>
        <div className='twelve columns'>
          <ul>
            <SocialLinks />
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
