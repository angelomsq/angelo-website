import React, { useRef } from 'react'
import IContainer from '../interfaces/container.interface'
import Image from 'next/image'
import { getMediaURL } from '../plugins/helpers'

const Projects: React.FC<IContainer> = ({ anchor, heading, description, items }) => {
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
        <div className="mt-10 flex flex-wrap items-center justify-center sm:mt-24">
          <p>Coming soon!</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
