import { useParams } from 'react-router-dom'

import NavigationBanner from '../Header/Navigation'
import Slideshow from '../project/Slideshow'
import ProjectContent from '../project/ProjectContent'
import projectData from '../datas/projectData'
import SocialLinks from '../SocialLinks'

const Project = () => {
  const { id } = useParams()

  const project = projectData.projects.find((p) => p.id === parseInt(id))

  return (
    <>
      <NavigationBanner />
      <main>
        {project && (
          <>
            <Slideshow imgUrl={project.imgUrl} />
            <ProjectContent
              projectTitle={project.title}
              projectDescription={project.description}
              projectLangage={project.language}
              projectUrl={project.lien}
            />
          </>
        )}
      </main>
      <SocialLinks />
    </>
  )
}

export default Project
