import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Navigate,
} from 'react-router-dom'
import './index.css'
import './assets/SASS/main.scss'
import HomePage from './components/pages/HomePage.jsx'
import Error from './components/pages/Error.jsx'
import Project from './components/pages/Project.jsx'
import resumeData from './components/datas/resumeData.js'

const isValidId = (id) => {
  return resumeData.portfolio.some((portfolio) => portfolio.id === parseInt(id))
}

// eslint-disable-next-line react-refresh/only-export-components
const ProjectWrapper = () => {
  const { id } = useParams()

  if (!isValidId(id)) {
    return <Navigate to='/error' replace />
  }

  return <Project />
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/project/:id',
      element: <ProjectWrapper />,
    },
    {
      path: '/error',
      element: <Error />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ],
  { basename: '/Portfolio-React/' }
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
