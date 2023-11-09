import { Image } from "@/types"

export type Site = {
  sys: { id: number }
  title: string
  logo: Image
  instagram: string | null
  linkedin: string | null
  github: string | null
  whatsapp: string | null
  youtube: string | null
  discord: string | null
  mainMenuCollection: {
    items: Menu[]
  }
}

export type Menu = {
  label: string
  url: string
}

