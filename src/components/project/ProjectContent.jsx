/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectContent = ({ projectDescription, projectLangage, projectUrl }) => {
  return (
    <div className='project-content'>
      <h2 className='project-description'>{projectDescription}</h2>
      <div className='project-language'>
        {projectLangage &&
          projectLangage.map((language) => (
            <p className='project-language-text ' key={uuidv4()}>
              {language}
            </p>
          ))}
      </div>

      <Link to={`${projectUrl}`} className='project-lien'>
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHub</span>
      </Link>
    </div>
  )
}
export default ProjectContent
