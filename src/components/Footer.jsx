/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Footer = ({ resumeData }) => {
  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>
            {resumeData.socialLinks &&
              resumeData.socialLinks.map((item) => {
                return (
                  <li key={uuidv4()}>
                    <a href={item.url}>
                      <i className={item.className} />
                    </a>
                  </li>
                )
              })}
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
