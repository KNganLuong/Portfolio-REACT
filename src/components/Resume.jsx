/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Resume = ({ resumeData }) => {
  return (
    <section id='resume'>
      <div className='row education'>
        <div className='three columns header-col'>
          <h1>Education</h1>
        </div>

        <div className='nine columns main-col'>
          {resumeData.education &&
            resumeData.education.map((item) => (
              <div className='row item' key={uuidv4()}>
                <div className='twelve columns'>
                  <h3>{item.UniversityName}</h3>
                  <p className='info'>
                    {item.specialization}
                    <span>&bull;</span>{' '}
                    <em className='date'>
                      {item.MonthOfPassing} {item.YearOfPassing}
                    </em>
                  </p>
                  <p>{item.Achievements}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='row skill'>
        <div className='three columns header-col'>
          <h1>Skills</h1>
        </div>

        <div className='nine columns main-col'>
          <p>{resumeData.skillsDescription}</p>

          <div className='bars'>
            <ul className='skills'>
              {resumeData.skills &&
                resumeData.skills.map((item) => (
                  <li key={uuidv4()}>
                    <span
                      className={`bar-expand ${item.skillname.toLowerCase()}`}
                    ></span>
                    <em>{item.skillname}</em>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
