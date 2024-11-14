'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/emailTemplate'
import { verifyCaptchaToken } from './captcha'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(
  prevState: any,
  payload: { token: string | null; formData: FormData }
) {
  const { token, formData } = payload

  // Check honeypot field
  if (formData.get('url')) {
    return {
      message: 'Spam detected.',
      values: {},
      isError: true,
    }
  }

  if (!token) {
    return {
      message: 'Token not found.',
      values: {},
      isError: true,
    }
  }

  // Verify the token
  const captchaData = await verifyCaptchaToken(token)

  if (!captchaData) {
    return {
      message: 'Captcha failed.',
      values: {},
      isError: true,
    }
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      message: 'Captcha failed.',
      values: {},
      isError: true,
      errors: !captchaData.success ? captchaData['error-codes'] : undefined,
    }
  }

  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Failed to submit the form. Please check the errors above.',
      values: Object.fromEntries(formData),
    }
  }

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [`${process.env.RESEND_EMAIL}`],
    subject: 'georein Contact Message',
    replyTo: validatedFields.data.email,
    react: EmailTemplate({
      firstName: validatedFields.data.firstName,
      lastName: validatedFields.data.lastName,
      emailAddress: validatedFields.data.email,
      message: validatedFields.data.message,
    }),
  })

  if (error) {
    return {
      message: 'Something went wrong, please try again later.',
      values: {},
      isError: true,
    }
  }

  return {
    message: "Thank you for your message. I'll be in touch soon!",
    values: {},
    isSuccess: true,
  }
}
