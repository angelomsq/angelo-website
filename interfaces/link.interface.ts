export default interface ILink {
  links_id: {
    id: number
    label: string
    description: string
    url: string
    download: {
      id: string
      title: string
      type: string
    }
    external: boolean
    style: string
  }
}
