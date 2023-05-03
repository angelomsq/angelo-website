import React from 'react'
import Link from 'next/link'
import ILink from '../interfaces/link.interface'
import { BsArrowUpRight } from 'react-icons/bs'

interface IButton extends ILink {
  size?: string
  centered?: boolean
}

const Button: React.FC<IButton> = ({ label, url, external, style, download, size, centered }) => {
  const btnURL = download ? download.url : url
  return (
    <Link
      href={btnURL}
      scroll={false}
      target={external ? '_blank' : '_self'}
      className={`${size === 'lg' ? 'sm:btn-lg' : size === 'sm' ? 'sm:btn-sm' : 'btn'} ${
        centered ? 'mx-2' : 'mr-4'
      } btn mb-4 ${style === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
    >
      <span className="drop-shadow-md">{label}</span>
      {external && <BsArrowUpRight size={16} className="ml-2 drop-shadow-md" />}
    </Link>
  )
}

export default Button
