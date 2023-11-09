'use client'
import { Container } from '@/types'
import Lottie from 'lottie-react'
import ScrollDownIcon from '../../public/lottie/scroll-down-grey.json'
import Button from './Button'

export default function Headline({
  anchor,
  heading,
  description,
  linksCollection,
}: Container) {
  return (
    <section
      id={anchor}
      className="headline flex min-h-screen w-full justify-center sm:snap-center sm:snap-always"
    >
      <div className="container mx-4 my-0 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
        <div className="my-auto flex flex-col items-center">
          <h1
            className="mb-6 mt-20 text-4xl lg:w-3/4 lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <div
            className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-1/2"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <div className="mt-10 flex flex-wrap items-center justify-center sm:mt-24">
            {!!linksCollection.items.length &&
              linksCollection.items.map((link) => (
                <Button key={link.sys.id} {...link} centered size="lg" />
              ))}
          </div>
        </div>

        <div className="absolute bottom-2 w-14">
          <Lottie animationData={ScrollDownIcon} loop={true} />
        </div>
      </div>
    </section>
  )
}
