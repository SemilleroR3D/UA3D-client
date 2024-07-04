import { Outlet } from 'react-router-dom'
import NavBar from '@/components/app/navbar/NavBar'

export default function landingLayout () {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
