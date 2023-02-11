import React from 'react'
import IMenu from '../interfaces/menu.interface'
import ISite from '../interfaces/site.interface'
import Header from './Header'
import Menu from './Menu'
import Toggle from './Toggle'

interface ILayout {
  children: JSX.Element
  site: ISite
  menu: IMenu[]
}

const Layout: React.FC<ILayout> = ({ children, site, menu }) => {
  return (
    <div className="h-screen w-full bg-main dark:bg-background">
      <Header {...site} />
      <Menu menu={menu} />
      <Toggle />
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {children}
      </main>
    </div>
  )
}

export default Layout
