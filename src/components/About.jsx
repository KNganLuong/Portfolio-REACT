/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const About = ({ resumeData }) => {
  return (
    <section id='about' className='about-container'>
      <img
        className='profile-pic'
        src='images/profilepic.jpg'
        alt='picture profile'
      />

      <div className='about-content'>
        <h2>About Me</h2>
        <p>{resumeData.aboutme}</p>

        <div className='contact-details'>
          <h2>Contact Details</h2>
          <p className='address'>
            <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
