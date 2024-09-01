/* eslint-disable no-unused-vars */
import React from 'react'
import resumeData from './datas/resumeData'

const SocialLinks = () => {
  const socialLinks = resumeData?.socialLinks

  if (!socialLinks) {
    return <div>No social links available</div>
  }

  return (
    <div className='social-links'>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className={link.className}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={link.name}
        >
          {/* <span className='sr-only'>{link.name}</span> */}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
