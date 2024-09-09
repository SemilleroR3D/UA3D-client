import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { useLocation } from 'react-router-dom'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { DropdownMenuIcon } from '@radix-ui/react-icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import CustomLink from './CustomLink'

const components = [
  {
    title: 'Laboratorio IoT',
    href: '/iot-lab',
    description: 'Su mejor experiencia en los procesos de enseñanza y aprendizaje.'
  },
  {
    title: 'Events',
    href: '/events',
    description: 'Conéctate con los últimos eventos.'
  }
]

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default function ContentMenu () {
  const location = useLocation()

  return (
    <>
      {/* Menú para pantallas pequeñas */}
      <div className='block md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger className='p-3 space-x-3 text-gray-700 dark:text-gray-300'>
            <DropdownMenuIcon className='mx-3 h-8 w-8' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='bg-white dark:bg-gray-800'>
            {location.pathname !== '/' && (
              <DropdownMenuItem asChild>
                <CustomLink to='/'>Inicio</CustomLink>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem asChild>
              <CustomLink to='/about'>Acerca de</CustomLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <CustomLink to='/dashboard'>DashBoard</CustomLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <CustomLink to='/projects'>Proyectos</CustomLink>
            </DropdownMenuItem>
            {components.map((component) => (
              <DropdownMenuItem key={component.title} asChild>
                <CustomLink to={component.href}>
                  {component.title}
                </CustomLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menú para pantallas grandes */}
      <div className='hidden md:block'>
        <NavigationMenu>
          <NavigationMenuList>
            {location.pathname !== '/' && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <CustomLink to='/' className={navigationMenuTriggerStyle()}>
                    Inicio
                  </CustomLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-7 p-5 md:w-[450px] lg:w-[410px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <CustomLink to='/' className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'>
                        <div className='mb-2 mt-4 text-lg font-medium'>Uniamazonia 3D</div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          Su mejor experiencia en los procesos de enseñanza y aprendizaje.
                        </p>
                      </CustomLink>
                    </NavigationMenuLink>
                  </li>
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <CustomLink to='/about' className={navigationMenuTriggerStyle()}>
                  Acerca de
                </CustomLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <CustomLink to='/dashboard' className={navigationMenuTriggerStyle()}>
                  DashBoard
                </CustomLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  )
}
