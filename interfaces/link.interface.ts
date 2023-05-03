export default interface ILink {
  sys: { id: number }
  label: string
  description: string
  url: string
  download: {
    url: string
  }
  external: boolean
  style: string
}
