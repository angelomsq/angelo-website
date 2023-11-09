import { Site } from '@/types'
import Link from 'next/link'
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

export default function Header({
  instagram,
  linkedin,
  github,
  whatsapp,
  youtube,
  discord,
}: Site) {
  return (
    <header className="dark:bg-background fixed z-10 h-20 w-full flex-col content-between items-center bg-white bg-opacity-80 py-4 dark:bg-opacity-80 sm:flex sm:min-h-screen sm:w-24 sm:bg-transparent sm:py-6 dark:sm:bg-transparent">
      <div className="flex flex-1 flex-col items-center">
        <Link href={'/#home'} className="cursor-pointer" scroll={true}>
          <svg
            width="60"
            viewBox="0 0 67 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:pb-12"
          >
            <path
              d="M49.2678 40.5611L49.2191 34.3398L49.2678 28.2441L67 48.8432H56.3819L52.7762 44.6446L49.2678 40.5611Z"
              fill="#8B5CF6"
            />
            <path
              d="M0 48.892L9.1687 48.7775L24.5594 18.2718L38.9598 48.8837H48.1746L24.742 0.433838L0 48.892Z"
              fill="#5EEAD4"
            />
            <path
              d="M0 48.892L9.1687 48.7775L24.5594 18.2718L38.9598 48.8837H48.1746L24.742 0.433838L0 48.892Z"
              fill="#5EEAD4"
            />
            <path
              d="M0 48.892L9.1687 48.7775L24.5594 18.2718L38.9598 48.8837H48.1746L24.742 0.433838L0 48.892Z"
              fill="#5EEAD4"
            />
            <path
              d="M0 48.892L9.1687 48.7775L24.5594 18.2718L38.9598 48.8837H48.1746L24.742 0.433838L0 48.892Z"
              fill="#5EEAD4"
            />
            <path
              d="M32.2054 10.6538L28.6104 3.22069C30.818 1.88888 33.1814 0.984195 36.0071 0.36911C38.6703 -0.210637 44.7014 -0.0876795 47.2948 0.59931C52.2041 1.89939 56.274 4.45834 59.6633 8.37577C63.9668 13.3499 65.7758 18.6524 65.5133 25.525C65.3956 28.6081 64.8239 31.5111 63.9433 33.4988L63.5536 34.3784L57.0825 27.8871L57.3125 26.5068C57.7646 23.7943 57.1417 19.8117 55.8731 17.3032C53.8347 13.2726 50.2848 10.1556 46.1399 8.75675C43.6878 7.92918 39.8689 7.78796 37.3267 8.43077C35.4627 8.90213 33.7422 9.65553 32.2054 10.6538Z"
              fill="#8B5CF6"
            />
            <path
              d="M36.2159 48.0432L31.1151 37.2002C30.9818 37.107 30.8476 37.0111 30.7125 36.9125C27.9017 34.8609 25.4464 31.0252 24.6806 27.4889C24.4354 26.3565 24.3497 24.7788 24.4049 23.2336L24.4043 23.2515L21.8671 28.3219C20.9114 30.2318 19.7543 32.5343 18.5896 34.8455C20.2954 38.3028 22.8627 41.3708 26.2003 43.8455C29.1841 46.0578 32.4921 47.4475 36.2159 48.0432Z"
              fill="#8B5CF6"
            />
          </svg>
        </Link>

        <div className="bg-tertiary hidden w-[3px] flex-1 rounded-full dark:bg-white sm:flex sm:h-full">
          &nbsp;
        </div>
      </div>
      <ul className="hidden flex-col items-center justify-between py-12 sm:flex">
        {github && (
          <li className="pb-8 last:pb-0">
            <Link href={github} target="_blank" className="group">
              <FaGithub
                size={32}
                className="group-hover:text-primary transition-all ease-in"
              />
            </Link>
          </li>
        )}

        {linkedin && (
          <li className="pb-8 last:pb-0">
            <Link href={linkedin} target="_blank" className="group">
              <FaLinkedinIn
                size={32}
                className="group-hover:text-primary transition-all ease-in"
              />
            </Link>
          </li>
        )}

        {instagram && (
          <li className="pb-8 last:pb-0">
            <Link href={instagram} target="_blank" className="group">
              <FaInstagram
                size={32}
                className="group-hover:text-primary transition-all ease-in"
              />
            </Link>
          </li>
        )}

        {whatsapp && (
          <li className="pb-8 last:pb-0">
            <Link href={whatsapp} target="_blank" className="group">
              <FaWhatsapp
                size={32}
                className="group-hover:text-primary transition-all ease-in"
              />
            </Link>
          </li>
        )}

        {youtube && (
          <li className="pb-8 last:pb-0">
            <Link href={youtube} target="_blank" className="group">
              <FaYoutube
                size={32}
                className="group-hover:text-primary transition-all ease-in"
              />
            </Link>
          </li>
        )}

        {discord && (
          <li className="pb-8 last:pb-0">
            <Link href={discord} target="_blank" className="group">
              <FaDiscord
                size={32}
                className="group-hover:text-primary transition-all ease-in"
              />
            </Link>
          </li>
        )}
      </ul>
      <div className="bg-tertiary hidden h-full w-[3px] flex-1 rounded-full dark:bg-white sm:flex">
        &nbsp;
      </div>
    </header>
  )
}
