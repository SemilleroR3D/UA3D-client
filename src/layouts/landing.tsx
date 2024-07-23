import { Outlet } from 'react-router-dom'
import NavBar from '@/components/app/navbar/NavBar'
import Footer from '@/components/app/footer'

export default function LandingLayout () {
  return (
    <>
      <NavBar />
      <main className='w-full min-h-[calc(100vh-230px)] '>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
