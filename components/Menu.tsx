import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Link as ScrollLink, scrollSpy } from 'react-scroll'
import IMenu from '../interfaces/menu.interface'

interface ISide {
  menu: IMenu[]
  active: number
  setActive: Dispatch<SetStateAction<number>>
}

const Menu: React.FC<ISide> = ({ menu, active, setActive }) => {
  useEffect(() => {
    scrollSpy.update()
  }, [])
  return (
    <aside className="fixed right-0 hidden min-h-screen w-24 flex-col items-center justify-center sm:flex">
      <ul className="relative z-0 flex w-full flex-col items-center">
        {menu.map((item, index) => (
          <li key={index} className="flex w-full justify-center pb-12 last-of-type:pb-0">
            <ScrollLink
              to={item.url.replace(/[^a-zA-Z0-9]/g, '')}
              hashSpy
              spy
              smooth={'easeInOutQuad'}
              duration={500}
              className="group relative cursor-pointer transition-all ease-in"
              onClick={() => setActive(index)}
              onSetActive={() => setActive(index)}
            >
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-all duration-300 ease-in-out ${
                  active === index
                    ? 'h-8 w-8 fill-primary stroke-tertiary stroke-[2px] dark:stroke-white'
                    : 'h-4 w-4 fill-tertiary stroke-tertiary group-hover:h-6 group-hover:w-6 group-hover:fill-secondary group-hover:stroke-[4px] dark:fill-main dark:stroke-white'
                }`}
              >
                <circle cx="18" cy="18" r="16" />
              </svg>
              <span className="tooltip-left">{item.label}</span>
            </ScrollLink>
          </li>
        ))}
        <div className="absolute top-1.5 -z-10 h-[calc(100%_-_0.75rem)] w-0.5 bg-background bg-opacity-20 bg-center dark:bg-stone-500" />
      </ul>
    </aside>
  )
}

export default Menu
