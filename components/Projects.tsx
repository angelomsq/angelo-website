import React, { useRef } from 'react'
import IContainer from '../interfaces/container.interface'
import Image from 'next/image'
import Link from 'next/link'
import IProject from '../interfaces/project.interface'
import { FaGithub, FaLink, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'

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
      <div className="container max-w-lg px-4 sm:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={false}
          centeredSlides={false}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="carousel"
        >
          <div slot="container-start">
            {heading && (
              <div className="relative flex flex-col items-center md:pb-10">
                <h2
                  className="mb-6 text-3xl lg:text-4xl"
                  dangerouslySetInnerHTML={{ __html: heading }}
                />
                <div
                  className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-1/2"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
                <div className="flex h-full w-40 items-center justify-center gap-2 py-5 md:absolute md:right-4 md:top-0 md:items-start md:justify-end md:py-2">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              </div>
            )}
          </div>
          {projects &&
            projects.map((project, index) => (
              <SwiperSlide key={project.sys.id}>
                <div
                  className={`group flex h-full flex-col items-center rounded-xl bg-main text-background shadow-card transition-all ease-in hover:shadow-xl dark:bg-tertiary dark:text-main`}
                >
                  <div
                    className={`relative w-full flex-none overflow-hidden rounded-tl-xl rounded-tr-xl`}
                  >
                    <Image
                      src={project.image.url}
                      width={300}
                      height={300}
                      className="relative inset-0 h-40 w-full object-cover transition-all ease-in group-hover:scale-110"
                      alt={'Angelo Photo'}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 text-left">
                    <h4 className="text-base lg:text-lg">{project.title}</h4>
                    <span className="my-3 text-xs text-paragraph dark:text-main dark:opacity-60 lg:text-sm">
                      {project.description}
                    </span>
                    <span className="mt-3 mb-6 text-xs text-paragraph dark:text-main dark:opacity-60">
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
                      {project.sourceUrl && (
                        <li>
                          <Link
                            href={project.sourceUrl}
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  )
}

const SlideNextButton = () => {
  const swiper = useSwiper()
  return (
    <FaChevronRight
      size={30}
      className="cursor-pointer text-secondary-dark transition-all ease-in-out hover:text-secondary"
      title="Next Slide"
      onClick={() => swiper.slideNext()}
    />
  )
}
const SlidePrevButton = () => {
  const swiper = useSwiper()
  return (
    <FaChevronLeft
      size={30}
      className="cursor-pointer text-secondary-dark transition-all ease-in-out hover:text-secondary"
      title="Previous Slide"
      onClick={() => swiper.slidePrev()}
    />
  )
}

export default Projects
