import { z } from 'zod'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New message from ${name}`,
        from_name: name,
        name,
        email,
        message
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: 'New newsletter subscription',
        email,
        form_type: 'newsletter'
      })
    })

    if (!response.ok) {
      throw new Error('Failed to subscribe')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
