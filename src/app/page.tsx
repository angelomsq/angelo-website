import Contact from '@/components/Contact'
import Feature from '@/components/Feature'
import Headline from '@/components/Headline'
import Logos from '@/components/Logos'
import Projects from '@/components/Projects'
import { HOMEPAGE } from '@/graphql/queries'
import contentful from '@/services/contentful'
import { Container, Image, Project } from '@/types'
import { Metadata } from 'next'

type PageProps = {
  sys: { id: number }
  seoTitle: string
  seoDescription: string
  seoImage: Image
  title: string
  url: string
  content: string
  blocks: {
    items: Container[]
  }
}
export const revalidate = 60 * 60 * 24 // 1 day

export const metadata: Metadata = {
  title: 'Homepage | Angelo Queiroz',
  description: 'Welcome to Angelo Queiroz Website',
}

export default async function Home() {
  const { data } = await contentful.query({ query: HOMEPAGE })
  const page: PageProps = data.pages.items[0]
  const projects: Project[] = data.projects.items

  return (
    <>
      {page.blocks.items.map((block) => {
        if (block.type === 'Headline') {
          return <Headline key={block.sys.id} {...block} />
        }
        if (block.type === 'Feature') {
          return <Feature key={block.sys.id} {...block} />
        }
        if (block.type === 'Logos') {
          return <Logos key={block.sys.id} {...block} />
        }
        if (block.type === 'Projects') {
          return <Projects key={block.sys.id} {...block} projects={projects} />
        }
        if (block.type === 'Contact') {
          return <Contact key={block.sys.id} {...block} />
        }
        return null
      })}
    </>
  )
}
