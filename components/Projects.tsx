import React, { useRef } from 'react'
import IContainer from '../interfaces/container.interface'
import Image from 'next/image'
import Link from 'next/link'
import { getMediaURL } from '../plugins/helpers'
import IProject from '../interfaces/project.interface'
import { FaGithub, FaLink } from 'react-icons/fa'

interface IProjects extends IContainer {
  projects: IProject[]
}

const Projects: React.FC<IProjects> = ({ anchor, heading, description, projects }) => {
  const ref = useRef(null)
  return (
    <section
      ref={ref}
      id={anchor}
      className="projects flex min-h-screen w-full snap-center snap-always items-center justify-center"
    >
      <div className="container my-0 mx-4 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
        <h2 className="mb-6 text-3xl lg:text-4xl" dangerouslySetInnerHTML={{ __html: heading }} />
        <div
          className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-1/2"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {projects &&
            projects.map((project, index) => (
              <div
                className={`${
                  index === 2 ? 'col-auto sm:col-span-2 xl:col-auto' : ''
                } group flex flex-col rounded-xl bg-main text-background shadow-xl transition-all ease-in hover:shadow-2xl dark:bg-tertiary dark:text-main sm:flex-row xl:flex-col`}
                key={project.id}
              >
                <div
                  className={`${
                    index === 2 ? 'sm:w-1/2' : 'sm:w-1/3'
                  } relative w-full flex-none overflow-hidden rounded-tl-xl rounded-tr-xl sm:rounded-bl-xl sm:rounded-tr-none xl:w-full xl:rounded-tr-xl xl:rounded-bl-none`}
                >
                  <Image
                    src={getMediaURL(project.image.id)}
                    width={300}
                    height={300}
                    className="relative inset-0 h-full w-full object-cover transition-all ease-in group-hover:scale-110 sm:absolute xl:relative xl:w-full"
                    alt={'Angelo Photo'}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 text-left">
                  <h4 className="text-base lg:text-lg">{project.title}</h4>
                  <span className="my-3 text-xs text-paragraph dark:text-main dark:opacity-60 lg:text-sm">
                    {project.description}
                  </span>
                  <span className="my-3 text-xs text-paragraph dark:text-main dark:opacity-60">
                    <strong>Tech Stack:</strong> {project.techs.join(', ')}
                  </span>
                  <ul className="mt-auto flex items-center justify-between text-xs">
                    {project.url && (
                      <li>
                        <Link
                          href={project.url}
                          className="flex items-center transition-all ease-in hover:underline"
                          target={'_blank'}
                        >
                          <FaLink size={20} />
                          <span className="ml-2">Live Preview</span>
                        </Link>
                      </li>
                    )}
                    {project.source_url && (
                      <li>
                        <Link
                          href={project.source_url}
                          className="flex items-center transition-all ease-in hover:underline"
                          target={'_blank'}
                        >
                          <FaGithub size={20} />
                          <span className="ml-2">Source Code</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
