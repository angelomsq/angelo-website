import { Entity, Image } from "@/types"

export type Project = Entity & {
  content: string
  image: Image
  gallery: {
    items: Image[]
  }
  techs: string[]
  url: string
  sourceUrl: string
  date: string
}
