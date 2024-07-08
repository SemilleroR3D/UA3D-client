import { Outlet } from 'react-router-dom'
import NavBar from '@/components/app/navbar/NavBar'
import Footer from '@/components/app/footer'

export default function landingLayout () {
  return (
    <>
      <NavBar />
      <main>
        <div className='pt-28 pb-25 px-6 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
          <div className='w-full min-h-[calc(100vh-230px)]'>
            <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 dark:bg-slate-900'>
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
