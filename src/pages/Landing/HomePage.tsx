import CarouselComponent from '@/components/app/landing/Carousel'
import useDocumentTitle from '@/utils/useDocumentTitle'

export default function HomePage () {
  useDocumentTitle('Inicio')

  return (
    <>
      <div className='relative w-full h-screen pt-16'>
        <CarouselComponent />
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <h1 className='text-4xl font-bold text-white'>Bienvenidos a Uniamazonia 3D</h1>
        </div>
      </div>
    </>
  )
}