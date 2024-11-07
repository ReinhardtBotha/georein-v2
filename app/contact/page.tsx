import PageTitle from '@/components/PageTitle'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="py-32 text-center">
        <PageTitle>Coming Soon</PageTitle>
      </div>
    </>
  )
}
