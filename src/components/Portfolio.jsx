/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Portfolio = ({ resumeData }) => {
  return (
    <section id='portfolio'>
      <h1>Check Out Some of My Works.</h1>
      <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
        {resumeData.portfolio &&
          resumeData.portfolio.map((item, index) => (
            <a
              href={`#modal-${index}`}
              className='portfolio-item'
              key={uuidv4()}
            >
              <img
                src={`${import.meta.env.BASE_URL}src/assets/${item.imgurl}`}
                className='item-img'
                alt={item.name}
              />

              <div className='portfolio-item-meta'>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
      </div>
    </section>
  )
}

export default Portfolio
