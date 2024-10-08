import LandingLayout from '@/layouts/landing'
import { ThemeProvider } from '@/components/app/navbar/theme-provider'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/Landing/HomePage'
import AboutPage from '@/pages/Landing/AboutPage'

const LandingRoutes = [
  {

    path: '/',
    element: <LandingLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ]
  }
]

// const combinedRoutes = [...LandingRoutes, ...dashboardRoutes]
const combinedRoutes = [...LandingRoutes]

const router = createBrowserRouter(combinedRoutes)

function App () {
  return (
    <>
      <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
