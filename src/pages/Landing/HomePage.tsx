import useDocumentTitle from '@/utils/useDocumentTitle'

export default function HomePage () {
  useDocumentTitle('Inicio')
  return (
    <div className='home-page'>
      <h1>Bienvenidos a Uniamazonia 3D</h1>
    </div>
  )
}
