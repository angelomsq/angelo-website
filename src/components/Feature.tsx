import { Container } from '@/types'
import Image from 'next/image'
import Button from './Button'

export default function Feature({
  anchor,
  heading,
  label,
  description,
  linksCollection,
  image,
}: Container) {
  return (
    <section
      id={anchor}
      className="feature flex min-h-screen snap-center snap-always items-center justify-center py-24 sm:py-0"
    >
      <div className="container mx-4 my-0 flex flex-col sm:mx-24 md:flex-row lg:mx-40 ">
        <div className="order-2 flex flex-col content-between sm:pr-6 md:order-1">
          <h3 className="font-primary text-secondary-dark text-left text-lg font-bold uppercase lg:text-xl">
            {label}
          </h3>
          <h2
            className="mb-6 text-left text-3xl lg:text-4xl"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <div
            className="text-paragraph text-left sm:pr-10"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          {!!linksCollection.items.length && (
            <div className="mt-10 flex flex-wrap items-center">
              {linksCollection.items.map((link) => (
                <Button key={link.sys.id} {...link} />
              ))}
            </div>
          )}
        </div>
        <div className="order-1 mx-auto mb-8 flex w-3/4 items-center justify-center sm:flex-none md:order-2 md:w-1/4 md:px-0">
          <Image
            src={image.url}
            width={300}
            height={300}
            className="from-primary via-secondary to-primary-dark border-spacing-8 rounded-full border-8 border-transparent bg-gradient-to-b bg-clip-border bg-origin-padding"
            alt={image.description || 'Angelo Photo'}
          />
        </div>
      </div>
    </section>
  )
}
