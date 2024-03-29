'use client'
import { Menu } from '@/types'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

interface MenuProps {
  menu: Menu[]
}

export default function Menu({ menu }: MenuProps) {
  const [active, setActive] = useState(0)
  return (
    <aside className="fixed right-0 z-10 hidden min-h-screen w-24 flex-col items-center justify-center sm:flex">
      <ul className="relative flex w-full flex-col items-center">
        {menu.map((item, index) => (
          <li
            key={index}
            className="flex w-full justify-center pb-12 last-of-type:pb-0"
          >
            <ScrollLink
              // href={item.url}
              to={item.url.replace(/[^a-zA-Z0-9]/g, '')}
              hashSpy
              spy
              smooth={false}
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
                    ? 'fill-primary stroke-tertiary h-8 w-8 stroke-[2px] dark:stroke-white'
                    : 'fill-tertiary stroke-tertiary group-hover:fill-secondary dark:fill-main h-4 w-4 group-hover:h-6 group-hover:w-6 group-hover:stroke-[4px] dark:stroke-white'
                }`}
              >
                <circle cx="18" cy="18" r="16" />
              </svg>
              <span className="tooltip-left">{item.label}</span>
            </ScrollLink>
          </li>
        ))}
        <div className="bg-background absolute top-1.5 -z-10 h-[calc(100%_-_0.75rem)] w-0.5 bg-opacity-20 bg-center dark:bg-stone-500" />
      </ul>
    </aside>
  )
}
