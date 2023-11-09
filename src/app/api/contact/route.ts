import axios from 'axios'
import mg from '@/services/mailgun'
import { render } from '@react-email/render'
import ContactTemplate from '@/emails/ContactTemplate'

export async function POST(request: Request) {
  const data = await request.json()
  console.log(data)
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.message ||
    !data.token
  ) {
    return Response.json(
      { status: 'failure', message: 'Bad request' },
      { status: 400 },
    )
  }

  try {
    const recaptcha = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.token}`,
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;',
        },
      },
    )

    console.log('RECAPTCHA:', recaptcha.data)

    if (recaptcha.data.success) {
      if (recaptcha.data.score > 0.5) {
        const content = `Contact form submission: ${data.firstName} ${data.lastName} (${data.email}) <br /> ${data.message}`
        const htmlContent = render(
          ContactTemplate({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            message: data.message,
          }),
        )
        mg.messages
          .create(process.env.MAILGUN_DOMAIN || 'mail.angeloqueiroz.com', {
            from: 'Angelo Queiroz Website <noreply@angeloqueiroz.com>',
            to: ['contato@angeloqueiroz.com'],
            subject: 'Angelo Queiroz | Website Contact Form',
            text: content,
            html: htmlContent,
          })
          .then(() =>
            Response.json(
              {
                status: 'success',
                message: 'E-mail successfully sent!',
              },
              { status: 200 },
            ),
          )
          .catch((err: any) =>
            Response.json({ status: 'failure', message: err }, { status: 400 }),
          )
      } else {
        return Response.json(
          { status: 'failure', message: 'Failed ReCaptcha Score' },
          { status: 400 },
        )
      }
    } else {
      return Response.json(
        { status: 'failure', message: 'Failed ReCaptcha' },
        { status: 400 },
      )
    }
  } catch (err) {
    console.error(err)
    return Response.json({ status: 'failure', message: err }, { status: 400 })
  }
}
