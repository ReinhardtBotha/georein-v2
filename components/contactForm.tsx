'use client'

import { useActionState } from 'react'
import { submitContactForm } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactForm() {
  const initialState = { message: null, errors: {}, values: {}, isError: false }
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <div className="bg-background mx-auto max-w-lg rounded-lg p-6 shadow-lg">
      <h2 className="mb-6 text-center text-5xl font-bold">Contact me</h2>
      <p className="mb-6">Have any questions? Want to know more? Feel free to reach out to me.</p>
      <form action={formAction} className="space-y-4">
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
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Sending...' : 'Send Message'}
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
