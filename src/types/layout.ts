export type Entity = {
  sys: { id: number }
  title: string
  heading: string
  label: string
  description: string
}

export type ItemsCollection = {
  items: Item[]
}
export type LinksCollection = {
  items: LinkItem[]
}

export type Container = Entity & {
  anchor: string
  type: string
  image: Image
  background: Image
  itemsCollection: ItemsCollection
  linksCollection: LinksCollection
}

export type Item = Entity & {
  image: Image
  url: string
  linksCollection: LinksCollection
}

export type LinkItem = Entity & {
  url: string
  download: {
    url: string
  }
  external: boolean
  style: string
}

export type Image = {
  url: string
  description: string | null
  width: number | null
  height: number | null
}
