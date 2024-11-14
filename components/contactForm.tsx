'use client'

import { FormEvent, useActionState, startTransition, useRef } from 'react'
import { submitContactForm } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { getCaptchaToken } from '@/lib/captcha'

export default function ContactForm() {
  const initialState = { message: null, errors: {}, values: {}, isError: false, isSuccess: false }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const token = await getCaptchaToken()

    const formData = new FormData(form)

    startTransition(() => {
      formAction({ token, formData })
    })
  }

  if (formRef.current && state.isSuccess) {
    formRef.current.reset()
  }

  return (
    <div className="bg-background mx-auto max-w-lg rounded-lg p-6 shadow-lg">
      <h2 className="mb-6 text-center text-5xl font-bold">Contact me</h2>
      <p className="mb-6">Have any questions? Want to know more? Feel free to reach out to me.</p>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="url"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: 'absolute', left: '-999999999px' }}
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              aria-describedby="firstName-error"
              defaultValue={state.values?.firstName || ''}
            />
            {state.errors?.firstName && (
              <p id="firstName-error" className="text-sm text-red-500">
                {state.errors.firstName}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              required
              aria-describedby="lastName-error"
              defaultValue={state.values?.lastName || ''}
            />
            {state.errors?.lastName && (
              <p id="lastName-error" className="text-sm text-red-500">
                {state.errors.lastName}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            aria-describedby="email-error"
            defaultValue={state.values?.email || ''}
          />
          {state.errors?.email && (
            <p id="email-error" className="text-sm text-red-500">
              {state.errors.email}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            aria-describedby="message-error"
            defaultValue={state.values?.message || ''}
          />
          {state.errors?.message && (
            <p id="message-error" className="text-sm text-red-500">
              {state.errors.message}
            </p>
          )}
        </div>
        <p>
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="animate-spin"></Loader2>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
      {state.message && (
        <p
          className={`mt-4 text-center ${state.errors || state.isError ? 'text-red-500' : 'text-green-500'}`}
        >
          {state.message}
        </p>
      )}
    </div>
  )
}
