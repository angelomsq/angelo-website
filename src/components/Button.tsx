import Link from 'next/link'
import { LinkItem } from '@/types'
import { BsArrowUpRight } from 'react-icons/bs'

type ButtonProps = LinkItem & {
  size?: string
  centered?: boolean
}

export default function Button({
  label,
  url,
  external,
  style,
  download,
  size,
  centered,
}: ButtonProps) {
  const btnURL = download ? download.url : url
  return (
    <Link
      href={btnURL}
      scroll={true}
      target={external ? '_blank' : '_self'}
      className={`${
        size === 'lg' ? 'sm:btn-lg' : size === 'sm' ? 'sm:btn-sm' : 'btn'
      } ${centered ? 'mx-2' : 'mr-4'} btn mb-4 ${
        style === 'primary' ? 'btn-primary' : 'btn-secondary'
      }`}
    >
      <span className="drop-shadow-md">{label}</span>
      {external && <BsArrowUpRight size={16} className="ml-2 drop-shadow-md" />}
    </Link>
  )
}
