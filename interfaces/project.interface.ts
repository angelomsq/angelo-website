import IImage from './image.interface'

export default interface IProject {
  sys: { id: number }
  title: string
  description: string
  content: string
  image: IImage
  gallery: {
    items: IImage[]
  }
  techs: string[]
  url: string
  sourceUrl: string
  date: string
}
