import IImage from './image.interface'

export default interface ISite {
  id: number
  title: string
  logo: IImage
  instagram: string | null
  linkedin: string | null
  github: string | null
  whatsapp: string | null
  youtube: string | null
  discord: string | null
}
