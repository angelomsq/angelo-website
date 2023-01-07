import React from 'react'
import Lottie from 'lottie-react'
import ScrollDownIcon from '../public/lottie/scroll-down-grey.json'
import IContainer from '../interfaces/container.interface'
import Image from 'next/image'
import { getMediaURL } from '../plugins/helpers'

const Logos: React.FC<IContainer> = ({ anchor, heading, description, items }) => {
  return (
    <section id={anchor} className="logos flex min-h-screen w-full items-center justify-center">
      <div className="container my-0 mx-4 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
        <h2 className="mb-6 text-3xl lg:text-4xl" dangerouslySetInnerHTML={{ __html: heading }} />
        <div
          className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-1/2"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className="mt-10 flex flex-wrap items-center justify-center sm:mt-24">
          {items &&
            items.map((item) => (
              <Image
                key={item.items_id.id}
                src={getMediaURL(item.items_id.image.id)}
                width={120}
                height={120}
                alt={item.items_id.image.title}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
