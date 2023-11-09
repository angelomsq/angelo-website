'use client'
import { Container } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { SyntheticEvent, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { toast } from 'react-toastify'
import * as zod from 'zod'
import Footer from './Footer'
import TextArea from './Input/TextArea'
import TextInput from './Input/TextInput'

const contactFormSchema = zod.object({
  firstName: zod.string().min(1, 'This field is required'),
  lastName: zod.string().min(1, 'This field is required'),
  email: zod.string().min(1, 'This field is required').email(),
  message: zod.string().min(1, 'This field is required'),
})

type ContactForm = zod.infer<typeof contactFormSchema>

export default function Contact({ anchor, heading, description }: Container) {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactFormSchema) })

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleRecaptcha = (e: SyntheticEvent) => {
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
    console.log(data)
    setLoading(true)
    try {
      const response = await axios.post<ContactForm>('/api/contact', {
        ...data,
        token,
      })
      setLoading(false)
      toast.success(response.data.message)
      reset()
    } catch (error: any) {
      setLoading(false)
      toast.error(error.response.data.message)
    }
  }

  return (
    <section
      id={anchor}
      className="contact flex min-h-screen w-full items-center justify-center sm:snap-center sm:snap-always"
    >
      <div className="container mx-4 my-0 flex flex-1 flex-col items-center sm:mx-24 lg:mx-40">
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
              className="bg-main text-background shadow-card dark:bg-tertiary dark:text-main rounded-xl p-8"
            >
              <h2
                className="mb-3 text-xl lg:text-2xl"
                dangerouslySetInnerHTML={{ __html: `Get In Touch` }}
              />
              <div
                className="text-paragraph mb-6"
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
                  {loading ? (
                    <>
                      Sending
                      <FaSpinner className="ml-2 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2" />
                    </>
                  )}
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
