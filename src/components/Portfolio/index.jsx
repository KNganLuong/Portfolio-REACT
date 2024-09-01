/* eslint-disable no-unused-vars */
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProjectItem from './ProjectItem'
import resumeData from '../datas/resumeData'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>Check Out Some of My Works.</h1>
      <ul id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
        {resumeData.portfolio &&
          resumeData.portfolio.map((item) => (
            <ProjectItem
              key={uuidv4()}
              cover={item.cover}
              title={item.title}
              id={item.id}
            />
          ))}
      </ul>
    </section>
  )
}

export default Portfolio
