import React, { useRef } from 'react'
import IContainer from '../interfaces/container.interface'
import Image from 'next/image'

const Logos: React.FC<IContainer> = ({ anchor, heading, description, itemsCollection }) => {
  const ref = useRef(null)
  return (
    <section
      ref={ref}
      id={anchor}
      className="logos flex min-h-screen w-full snap-center snap-always items-center justify-center"
    >
      <div className="container my-0 mx-8 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
        <h2 className="mb-6 text-3xl lg:text-4xl" dangerouslySetInnerHTML={{ __html: heading }} />
        <div
          className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-1/2"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div className="mt-10 grid w-full grid-cols-4 items-center gap-4 lg:grid-cols-8 lg:gap-6">
          {!!itemsCollection.items.length &&
            itemsCollection.items.map((item) => (
              <div
                key={item.sys.id}
                className="group relative flex w-auto items-center justify-center transition-all ease-in"
              >
                <Image
                  src={item.image.url}
                  width={120}
                  height={120}
                  alt={item.image.description || 'Logo Image'}
                  className="max-h-20 w-20 text-center transition-all ease-in group-hover:scale-125"
                />
                <span className="tooltip-top">{item.heading}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
