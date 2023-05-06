import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 mx-4 flex w-full items-center justify-center py-8">
      <span className="text-center text-sm">
        Proudly designed by Angelo Queiroz with <span className="text-xl">☕️</span> using{' '}
        <Link
          className="font-bold transition-all ease-in hover:opacity-70"
          href={'https://nextjs.org/'}
          target="_blank"
        >
          NextJS
        </Link>{' '}
        and{' '}
        <Link
          className="font-bold transition-all ease-in hover:opacity-70"
          href={'https://tailwindcss.com/'}
          target="_blank"
        >
          Tailwind
        </Link>
      </span>
    </footer>
  )
}

export default Footer
