import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  NextJs,
  Tailwind,
  TypeScript,
  Vercel,
  BuyMeACoffee,
  Location,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  nextjs: NextJs,
  tailwind: Tailwind,
  typescript: TypeScript,
  vercel: Vercel,
  buymeacoffee: BuyMeACoffee,
  location: Location,
}

type SocialIconProps = {
  kind: keyof typeof components
  href?: string | undefined
  size?: number
  hover?: boolean
}

const SocialIcon = ({ kind, href, size = 8, hover = true }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  if (href === 'nothing')
    return (
      <SocialSvg
        className={`fill-current text-gray-700  dark:text-gray-200  h-${size} w-${size}`}
      />
    )

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      {hover ? (
        <SocialSvg
          className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
        />
      ) : (
        <SocialSvg
          className={`fill-current text-gray-700  dark:text-gray-200  h-${size} w-${size}`}
        />
      )}
    </a>
  )
}

export default SocialIcon
