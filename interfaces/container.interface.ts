import IImage from './image.interface'
import IItem from './item.interface'
import ILink from './link.interface'

export default interface IContainer {
  id: number
  title: string
  anchor: string
  type: string
  heading: string
  label: string
  description: string
  image: IImage
  background: IImage
  items: IItem[]
  links: ILink[]
}
