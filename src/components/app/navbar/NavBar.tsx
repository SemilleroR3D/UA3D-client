import { Link } from 'react-router-dom'
import ContentMenu from './ContentMenu'
import AvatarUser from './Avatar'
import ModeToggle from './mode-toggle'

export default function NavBar () {
  return (
    <nav className='bg-white border-b border-gray-200 fixed z-30 w-full dark:bg-gray-900 dark:border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <Link to='/' className='text-xl font-bold flex items-center lg:ml-2.5'>
              <img src='/logo-icon.webp' alt='Logo' className='h-10 w-10' />
              <span className='self-center whitespace-nowrap ml-2 text-2xl'>Uniamazonia 3D</span>
            </Link>
          </div>
          <div className='flex items-center'>
            <ContentMenu />
            <div className='h-6 border-l border-gray-200 mx-4' />
            <div className='flex items-center space-x-4'>
              <ModeToggle />
              <AvatarUser />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
