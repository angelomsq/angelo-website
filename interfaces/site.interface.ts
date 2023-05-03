import IImage from './image.interface'
import IMenu from './menu.interface'

export default interface ISite {
  sys: { id: number }
  title: string
  logo: IImage
  instagram: string | null
  linkedin: string | null
  github: string | null
  whatsapp: string | null
  youtube: string | null
  discord: string | null
  mainMenuCollection: {
    items: IMenu[]
  }
}
