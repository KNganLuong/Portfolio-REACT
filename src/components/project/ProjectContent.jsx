/* eslint-disable react/prop-types */

const ProjectContent = ({ projectDescription, projectLangage }) => {
  return (
    <div className='project-content'>
      <h2 className='project-description'>{projectDescription}</h2>
      <h3 className='project-langage'>{projectLangage}</h3>
    </div>
  )
}
export default ProjectContent
