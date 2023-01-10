import React from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import ILink from '../interfaces/link.interface'
import { BsArrowUpRight } from 'react-icons/bs'
import { getMediaURL } from '../plugins/helpers'

interface IButton extends ILink {
  links_id: ILink['links_id'] & {
    size?: string
    centered?: boolean
  }
}

const Button: React.FC<IButton['links_id']> = ({
  label,
  url,
  external,
  style,
  download,
  size,
  centered,
}) => {
  const btnURL = download ? getMediaURL(download.id) : url

  if (btnURL.startsWith('#')) {
    return (
      <ScrollLink
        to={btnURL.replace(/[^a-zA-Z0-9]/g, '')}
        smooth={'easeInOutQuad'}
        className={`cursor-pointer ${size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : 'btn'} ${
          centered ? 'mx-2' : 'mr-4'
        } mb-4 ${style === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
      >
        <span className="drop-shadow-md">{label}</span>
      </ScrollLink>
    )
  } else {
    return (
      <Link
        href={btnURL}
        target={external ? '_blank' : '_self'}
        className={`${size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : 'btn'} ${
          centered ? 'mx-2' : 'mr-4'
        } mb-4 ${style === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
      >
        <span className="drop-shadow-md">{label}</span>
        {external && <BsArrowUpRight size={16} className="ml-2 drop-shadow-md" />}
      </Link>
    )
  }
}

export default Button
