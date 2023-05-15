import React from 'react'
import { ToastContainer } from 'react-toastify'
import ISite from '../interfaces/site.interface'
import Header from './Header'
import Menu from './Menu'
import Toggle from './Toggle'
import 'react-toastify/dist/ReactToastify.css'

interface ILayout {
  children: JSX.Element
  site: ISite
}

const Layout: React.FC<ILayout> = ({ children, site }) => {
  return (
    <div className="h-screen w-full">
      <Header {...site} />
      <Menu menu={site.mainMenuCollection.items} />
      <Toggle />
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {children}
      </main>
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  )
}

export default Layout
