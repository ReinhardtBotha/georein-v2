import ContactForm from '@/components/contactForm'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContactForm />
    </div>
  )
}
