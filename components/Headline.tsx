import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import ScrollDownIcon from '../public/lottie/scroll-down-grey.json'
import IContainer from '../interfaces/container.interface'
import Button from './Button'

const Headline: React.FC<IContainer> = ({ id, anchor, heading, label, description, links }) => {
  const ref = useRef(null)
  return (
    <section
      ref={ref}
      id={anchor}
      className="headline flex min-h-screen w-full justify-center sm:snap-center sm:snap-always"
    >
      <div className="container my-0 mx-4 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
        <h1
          className="mb-6 mt-20 text-4xl sm:mt-auto lg:w-3/4 lg:text-5xl"
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <div
          className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-1/2"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className="mt-10 flex flex-wrap items-center justify-center sm:mt-24">
          {links &&
            links.map((link) => (
              <Button key={link.links_id.id} {...link.links_id} centered size="lg" />
            ))}
        </div>

        <div className="my-5 sm:mb-8 sm:mt-12">
          <Lottie animationData={ScrollDownIcon} loop={true} />
        </div>
      </div>
    </section>
  )
}

export default Headline
