/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid'

const ProjectContent = ({ projectDescription, projectLangage }) => {
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
    </div>
  )
}
export default ProjectContent
