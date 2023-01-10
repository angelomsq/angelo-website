import React, { useEffect, useState, WheelEvent } from 'react'
import IMenu from '../interfaces/menu.interface'
import ISite from '../interfaces/site.interface'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Toggle from './Toggle'
import { scroller } from 'react-scroll'

interface ILayout {
  children: JSX.Element
  site: ISite
  menu: IMenu[]
}

const Layout: React.FC<ILayout> = ({ children, site, menu }) => {
  const [active, setActive] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsScrolling(false)
    }, 1500)
  }, [active])

  useEffect(() => {
    window.addEventListener(
      'scroll',
      function (e) {
        e.preventDefault()
      },
      false
    )
  }, [])

  const handleScroll = (e: WheelEvent) => {
    e.nativeEvent.stopImmediatePropagation()
    e.stopPropagation()
    if (!isScrolling) {
      let nextMenu = 0
      if (e.deltaY > 0) {
        nextMenu = active + 1 > menu.length - 1 ? active : active + 1
      } else {
        nextMenu = active - 1 < 0 ? active : active - 1
      }

      if (nextMenu !== active) {
        scroller.scrollTo(menu[nextMenu].url.replace(/[^a-zA-Z0-9]/g, ''), {
          duration: 1500,
          delay: 0,
          smooth: true,
        })
        setActive(nextMenu)
        setIsScrolling(true)
      }
    }
  }

  return (
    <div className="min-h-screen w-full bg-main dark:bg-background" onWheel={handleScroll}>
      <Header {...site} />
      <Menu menu={menu} active={active} setActive={setActive} />
      <Toggle />
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
