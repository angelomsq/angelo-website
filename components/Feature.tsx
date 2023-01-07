import React from 'react'
import Image from 'next/image'
import IContainer from '../interfaces/container.interface'
import Button from './Button'
import { getMediaURL } from '../plugins/helpers'

const Feature: React.FC<IContainer> = ({
  id,
  anchor,
  heading,
  label,
  description,
  links,
  image,
}) => {
  return (
    <section
      id={anchor}
      className="feature flex min-h-screen items-center justify-center py-24 sm:py-0"
    >
      <div className="container my-0 mx-4 flex flex-col sm:mx-24 md:flex-row lg:mx-40 ">
        <div className="order-2 flex flex-col content-between sm:pr-6 md:order-1">
          <h3 className="text-left font-primary text-lg font-bold uppercase text-secondary-dark lg:text-xl">
            {label}
          </h3>
          <h2
            className="mb-6 text-left text-3xl lg:text-4xl"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <div
            className="text-left text-paragraph sm:pr-10"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          {!!links.length && (
            <div className="mt-10 flex flex-wrap items-center">
              {links.map((link) => (
                <Button key={link.links_id.id} {...link.links_id} />
              ))}
            </div>
          )}
        </div>
        <div className="order-1 mx-auto mb-8 flex w-3/4 items-center justify-center sm:flex-none md:order-2 md:w-1/4 md:px-0">
          <Image
            src={getMediaURL(image.id)}
            width={300}
            height={300}
            className="border-spacing-8 rounded-full border-8 border-transparent bg-gradient-to-b from-primary via-secondary to-primary-dark bg-clip-border bg-origin-padding"
            alt={'Angelo Photo'}
          />
        </div>
      </div>
    </section>
  )
}

export default Feature
