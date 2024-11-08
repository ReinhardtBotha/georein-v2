import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import GitHubCal from '@/components/GitHubCal'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mb-8">
          <AuthorLayout content={mainContent}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        </div>
        <div>
          <h2 className="pb-8 pt-8 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200">
            GitHub Contributions
          </h2>
          <div className="flex items-center justify-center">
            <GitHubCal />
          </div>
        </div>
      </div>
    </>
  )
}
