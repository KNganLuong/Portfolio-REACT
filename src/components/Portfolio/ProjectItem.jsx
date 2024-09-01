/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({ cover, title, id }) => {
  return (
    <Link to={`/project/${id}`} className='portfolio-item'>
      <img src={cover} className='item-img' alt={`${title} cover`} />

      <h5 className='portfolio-item-meta'>{title}</h5>
    </Link>
  )
}

export default ProjectItem
