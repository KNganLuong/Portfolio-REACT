import { useParams } from 'react-router-dom'
import Footer from '../Footer'
import NavigationBanner from '../Header/Navigation'
import Slideshow from '../project/Slideshow'
import ProjectContent from '../project/ProjectContent'
import projectData from '../datas/projectData'

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
              projectDescription={project.description}
              projectLangage={project.language}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Project
