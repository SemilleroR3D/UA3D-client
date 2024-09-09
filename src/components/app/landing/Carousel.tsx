import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef, useEffect } from 'react'
import Fade from 'embla-carousel-fade'

const images = [
  { src: 'http://45.71.181.109/source-ua3d/imagen1.png', alt: 'Slide 1' },
  { src: 'http://45.71.181.109/source-ua3d/imagen2.png', alt: 'Slide 2' },
  { src: 'http://45.71.181.109/source-ua3d/imagen3.jpg', alt: 'Slide 3' }
]

export default function CarouselComponent () {
  const autoplayPlugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }))
  const fadePlugin = useRef(Fade())

  const handleMouseEnter = () => {
    autoplayPlugin.current.stop()
  }

  const handleMouseLeave = () => {
    autoplayPlugin.current.reset()
  }

  useEffect(() => {
    const currentAutoplayPlugin = autoplayPlugin.current
    return () => {
      currentAutoplayPlugin.stop()
    }
  }, [])

  return (
      <Carousel
        plugins={[autoplayPlugin.current, fadePlugin.current]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='flex-shrink-0'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover'
                />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer' />
        <CarouselNext className='absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg cursor-pointer' />
      </Carousel>
  )
}
