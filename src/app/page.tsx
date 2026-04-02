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

type HomepageQueryResult = {
  pages?: {
    items?: PageProps[]
  }
  projects?: {
    items?: Project[]
  }
}

export const revalidate = 86400 // 1 day

export const metadata: Metadata = {
  title: 'Homepage | Angelo Queiroz',
  description: 'Welcome to Angelo Queiroz Website',
}

export default async function Home() {
  let page: PageProps | null = null
  let projects: Project[] = []

  try {
    const { data } = await contentful.query<HomepageQueryResult>({
      query: HOMEPAGE,
    })
    page = data?.pages?.items?.[0] || null
    projects = data?.projects?.items || []
  } catch (error) {
    console.error('Failed to load homepage content from Contentful:', error)
  }

  if (!page?.blocks?.items?.length) {
    return null
  }

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
