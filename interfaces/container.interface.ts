import IImage from './image.interface'
import IItem from './item.interface'
import ILink from './link.interface'

export default interface IContainer {
  sys: { id: number }
  title: string
  anchor: string
  type: string
  heading: string
  label: string
  description: string
  image: IImage
  background: IImage
  itemsCollection: {
    items: IItem[]
  }
  linksCollection: {
    items: ILink[]
  }
}
