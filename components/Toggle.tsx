import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

import { useTheme } from 'next-themes'

const Toggle: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <FaSun
          className="sun h-6 w-6 text-main transition-all ease-in hover:opacity-90 sm:h-8 sm:w-8"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <FaMoon
          className="h-6 w-6 text-tertiary transition-all ease-in hover:opacity-90 sm:h-8 sm:w-8"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return (
    <aside className="fixed right-0 z-50 flex h-20 w-20 flex-col items-center justify-center sm:mt-6 sm:h-8 sm:w-24">
      {toggleTheme()}
    </aside>
  )
}

export default Toggle
