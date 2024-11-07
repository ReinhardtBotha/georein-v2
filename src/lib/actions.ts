'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/EmailTemplate'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(prevState: any, formData: FormData) {
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
  }
}
