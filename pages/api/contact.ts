import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import mg from '../../services/mailgun'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }
  const data = req.body
  if (!data.firstName || !data.lastName || !data.email || !data.message || !data.token) {
    return res.status(400).json({ message: 'Bad request' })
  }
  console.log(req.body)
  const recaptcha = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.token}`,
    {},
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
      },
    }
  )

  console.log('RECAPTCHA:', recaptcha.data)

  // const content = `Contact form submission: ${data.firstName} ${data.lastName} <${data.email}> <br /> ${data.message}`
  // mg.messages
  //   .create(process.env.MAILGUN_DOMAIN, {
  //     from: 'Angelo Queiroz Website <noreply@angeloqueiroz.com>',
  //     to: ['contato@angeloqueiroz.com'],
  //     subject: 'Angelo Queiroz | Website Contact Form',
  //     text: content,
  //     html: content,
  //   })
  //   .then((msg: any) => res.status(200).json({ message: msg }))
  //   .catch((err: any) => res.status(400).json({ message: err }))
}
