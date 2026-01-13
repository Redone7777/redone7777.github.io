import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout'
import { HomePage } from '../features/home'
import { AboutPage } from '../features/about'
import { ProjectsPage } from '../features/projects'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
])
