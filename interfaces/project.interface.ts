import IImage from './image.interface'
import IGallery from './gallery.interface'

export default interface IProject {
  id: number
  title: string
  description: string
  content: string
  image: IImage
  gallery: IGallery[]
  techs: string[]
  url: string
  source_url: string
  date: string
}
