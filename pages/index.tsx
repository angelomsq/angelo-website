import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Seo from '../components/Seo'
import HOMEPAGE from '../queries/homepage.query'
import directus from '../services/directus'

import IImage from '../interfaces/image.interface'
import IContainer from '../interfaces/container.interface'
import IProject from '../interfaces/project.interface'
import Headline from '../components/Headline'
import Feature from '../components/Feature'
import Logos from '../components/Logos'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

interface IBlock {
  item: IContainer
}

interface IHome {
  id: number
  page_title: string
  page_description: string
  page_image: IImage
  title: string
  url: string
  content: string
  blocks: IBlock[]
  projects: IProject[]
}

const Home: React.FC<IHome> = ({
  page_title,
  page_description,
  page_image,
  url,
  blocks,
  projects,
}) => {
  const seo = {
    title: page_title,
    description: page_description,
    image: page_image,
    pagePath: url,
    ogType: 'Website',
  }
  console.info(projects)
  return (
    <>
      <Seo {...seo} />
      {blocks.map((block) => {
        if (block.item.type === 'Headline') {
          return <Headline key={block.item.id} {...block.item} />
        }
        if (block.item.type === 'Feature') {
          return <Feature key={block.item.id} {...block.item} />
        }
        if (block.item.type === 'Logos') {
          return <Logos key={block.item.id} {...block.item} />
        }
        if (block.item.type === 'Projects') {
          return <Projects key={block.item.id} {...block.item} projects={projects} />
        }
        if (block.item.type === 'Contact') {
          return <Contact key={block.item.id} {...block.item} />
        }
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await directus.query({ query: HOMEPAGE })

  return {
    props: {
      ...data.pages[0],
      projects: data.projects,
    },
  }
}

export default Home
