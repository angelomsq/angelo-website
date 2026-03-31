import FormData from 'form-data'
import Mailgun from 'mailgun.js'

const mailgunApiKey = process.env.MAILGUN_API_KEY
if (!mailgunApiKey) {
  throw new Error('MAILGUN_API_KEY environment variable is not defined')
}

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
  username: 'api',
  key: mailgunApiKey,
})

export default mg
