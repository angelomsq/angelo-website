import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import IContainer from '../interfaces/container.interface'
import Footer from './Footer'
import TextInput from './Input/TextInput'
import TextArea from './Input/TextArea'
import { FaPaperPlane } from 'react-icons/fa'
import axios from 'axios'

const contactFormSchema = zod.object({
  firstName: zod.string().min(1, 'This field is required'),
  lastName: zod.string().min(1, 'This field is required'),
  email: zod.string().min(1, 'This field is required').email(),
  message: zod.string().min(1, 'This field is required'),
})

type ContactForm = zod.infer<typeof contactFormSchema>

const Contact: React.FC<IContainer> = ({ anchor, heading, description }) => {
  const ref = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactFormSchema) })

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleRecaptcha = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!executeRecaptcha) {
      console.log('error recaptcha')
      return
    }
    executeRecaptcha('contactForm').then((captchaToken) => {
      handleSubmit((data) => handleContactForm(data, captchaToken))()
    })
  }

  const handleContactForm = async (data: ContactForm, token: string) => {
    console.log(data, token)
    const response = await axios.post<ContactForm>('/api/contact', { ...data, token })
    console.log(response)
  }

  return (
    <section
      ref={ref}
      id={anchor}
      className="contact flex min-h-screen w-full items-center justify-center sm:snap-center sm:snap-always"
    >
      <div className="container my-0 mx-4 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
        <div className="flex flex-col items-center justify-center text-center lg:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h2
              className="mb-6 text-3xl lg:text-4xl"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <div
              className="text-paragraph sm:w-3/4 lg:w-2/3 xl:w-3/4"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
          <div className="mt-4 flex w-full flex-1 flex-wrap justify-center text-left sm:mt-10">
            <form
              onSubmit={handleRecaptcha}
              className="rounded-xl bg-main p-8 text-background shadow-card dark:bg-tertiary dark:text-main"
            >
              <h2
                className="mb-3 text-xl lg:text-2xl"
                dangerouslySetInnerHTML={{ __html: `Get In Touch` }}
              />
              <div
                className="mb-6 text-paragraph"
                dangerouslySetInnerHTML={{
                  __html: `Fill out this form to send me a direct message.`,
                }}
              />
              <div className="-mx-3 mb-3 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                  <TextInput
                    label={'First Name'}
                    error={errors.firstName?.message || ''}
                    {...register('firstName')}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <TextInput
                    label={'Last Name'}
                    error={errors.lastName?.message || ''}
                    {...register('lastName')}
                  />
                </div>
              </div>
              <div className="-mx-3 mb-3 flex flex-wrap">
                <div className="w-full px-3">
                  <TextInput
                    label={'E-mail Address'}
                    error={errors.email?.message || ''}
                    {...register('email')}
                  />
                </div>
              </div>

              <div className="-mx-3 mb-3 flex flex-wrap">
                <div className="w-full px-3">
                  <TextArea
                    label={'Message'}
                    error={errors.message?.message || ''}
                    rows={3}
                    {...register('message')}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary shadow-none">
                  Send Message <FaPaperPlane className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  )
}

export default Contact
