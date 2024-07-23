import CarouselComponent from '@/components/app/landing/Carousel'
import useDocumentTitle from '@/utils/useDocumentTitle'

export default function HomePage () {
  useDocumentTitle('Inicio')
  return (
    <div className='pt-20 relative w-full h-screen'>
      <CarouselComponent />
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white'>
        <h1 className='text-4xl font-bold'>Bienvenidos a Uniamazonia 3D</h1>
      </div>
    </div>
  )
}
