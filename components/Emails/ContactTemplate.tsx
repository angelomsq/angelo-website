import { Body } from '@react-email/body'
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'
import { Tailwind } from '@react-email/tailwind'

interface ContactTemplateProps {
  firstName: string
  lastName: string
  email: string
  message: string
}

const ContactTemplate = ({ firstName, lastName, email, message }: ContactTemplateProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body>
          <section className="mx-auto max-w-2xl bg-white px-6 py-8 dark:bg-gray-900">
            <header>
              <a href="#" className="mx-auto h-7 w-auto sm:h-8">
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
              </a>
            </header>

            <main className="mt-8">
              <h2 className="mt-6 text-gray-700 dark:text-gray-200">Hi Angelo,</h2>

              <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                You have received a new contact message from angeloqueiroz.com contact form.
              </p>

              <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                <strong>Name: </strong>
                <span>
                  {firstName} {lastName}
                </span>
                <br />
                <strong>E-mail: </strong>
                <span>{email}</span>
                <br />
                <strong>Message: </strong>
                <br />
                <span>{message}</span>
              </p>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Thanks, <br />
                Angelo Queiroz Website
              </p>
            </main>

            <footer className="mt-8 text-center">
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
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Angelo Queiroz. All Rights Reserved.
              </p>
            </footer>
          </section>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactTemplate
