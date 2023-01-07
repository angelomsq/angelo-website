import React, { useState } from 'react'
import Link from 'next/link'
import IMenu from '../interfaces/menu.interface'

interface ISide {
  menu: IMenu[]
}

const Menu: React.FC<ISide> = ({ menu }) => {
  const [active, setActive] = useState(0)
  return (
    <aside className="fixed right-0 hidden min-h-screen w-24 flex-col items-center justify-center sm:flex">
      <ul className="relative z-0 flex w-full flex-col items-center">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex w-full justify-center ${index === menu.length - 1 ? '' : 'pb-12'}`}
          >
            <Link
              href={item.url}
              scroll={false}
              className="group relative transition-all ease-in"
              onClick={() => setActive(index)}
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
            </Link>
          </li>
        ))}
        <div className="absolute top-1.5 -z-10 h-[calc(100%_-_0.75rem)] w-0.5 bg-background bg-opacity-20 bg-center dark:bg-stone-500" />
      </ul>
    </aside>
  )
}

export default Menu
