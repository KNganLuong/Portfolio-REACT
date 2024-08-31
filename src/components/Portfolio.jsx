/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Modal from 'react-modal'
import { v4 as uuidv4 } from 'uuid'

Modal.setAppElement('#root') // Pour la gestion des lecteurs d'écran

const Portfolio = ({ resumeData }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const openModal = (projectIndex, imageIndex = 0) => {
    setCurrentImageIndex(imageIndex)
    setModalIsOpen(true)
    setCurrentProjectIndex(projectIndex)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const project = resumeData.portfolio[currentProjectIndex]
      return (prevIndex + 1) % project.imgurl.length
    })
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const project = resumeData.portfolio[currentProjectIndex]
      return (prevIndex - 1 + project.imgurl.length) % project.imgurl.length
    })
  }

  return (
    <section id='portfolio'>
      <h1>Check Out Some of My Works.</h1>
      <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
        {resumeData.portfolio &&
          resumeData.portfolio.map((item, projectIndex) => (
            <a
              className='portfolio-item'
              key={uuidv4()}
              onClick={(e) => {
                e.preventDefault()
                openModal(projectIndex)
              }}
            >
              <img
                src={`./src/assets/${item.imgurl[0]}`}
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

      {resumeData.portfolio.length > 0 && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Portfolio Image Modal'
          className='modal'
          overlayClassName='overlay'
        >
          <button onClick={closeModal} className='close-btn'>
            ×
          </button>
          <button onClick={prevImage} className='prev-btn'>
            ❮
          </button>
          <img
            src={`./src/assets/${resumeData.portfolio[currentProjectIndex].imgurl[currentImageIndex]}`}
            alt={resumeData.portfolio[currentProjectIndex].name}
            className='modal-image'
          />
          <button onClick={nextImage} className='next-btn'>
            ❯
          </button>
        </Modal>
      )}
    </section>
  )
}

export default Portfolio
