import IImage from './image.interface'
import ILink from './link.interface'

export default interface IItem {
  sys: { id: number }
  title: string
  heading: string
  label: string
  description: string
  image: IImage
  url: string
  linksCollection: {
    items: ILink[]
  }
}
