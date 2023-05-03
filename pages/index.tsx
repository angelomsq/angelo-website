import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Seo from '../components/Seo'
import HOMEPAGE from '../queries/homepage.query'
import contentful from '../services/contentful'

import IImage from '../interfaces/image.interface'
import IContainer from '../interfaces/container.interface'
import IProject from '../interfaces/project.interface'
import Headline from '../components/Headline'
import Feature from '../components/Feature'
import Logos from '../components/Logos'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

interface IHome {
  sys: { id: number }
  seoTitle: string
  seoDescription: string
  seoImage: IImage
  title: string
  url: string
  content: string
  blocks: {
    items: IContainer[]
  }
  projects: IProject[]
}

const Home: React.FC<IHome> = ({ seoTitle, seoDescription, seoImage, url, blocks, projects }) => {
  const seo = {
    title: seoTitle,
    description: seoDescription,
    image: seoImage,
    pagePath: url,
    ogType: 'Website',
  }
  return (
    <>
      <Seo {...seo} />
      {blocks.items.map((block) => {
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
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await contentful.query({ query: HOMEPAGE })

  return {
    props: {
      ...data.pages.items[0],
      projects: data.projects.items,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

export default Home
