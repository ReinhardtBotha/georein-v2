interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tech?: Array<string>
}

const projectsData: Project[] = [
  {
    title: 'WeaUp',
    description: `WeaUp is a mobile app that promotes posture awareness, offering instant feedback on bad posture when using your phone or wearing earbuds. It helps users develop and maintain good posture habits through detailed analytics, collaborative features, badges, goals, and more.`,
    imgSrc: 'https://utfs.io/f/MDuYRQOXX1wgRiU9beLxAIW641b2ZyadEfx3QFiekPBr7v8s',
    href: '/projects/weaup',
    tech: [
      'React Native',
      'Expo',
      'Typescript',
      'NodeJS',
      'ExpressJS',
      'NGINX',
      'MongoDB',
      'Amazon EC2',
    ],
  },
  {
    title: 'Plowterra',
    description: `Plowterra is web application that enables farmers to effortlessly record daily harvests and manage payrolls.`,
    imgSrc: 'https://utfs.io/f/MDuYRQOXX1wgo5F9fnZPFfynVgrAlds43oqWSHL6TcOz8iGK',
    href: '/projects/plowterra',
    tech: [
      'ReactJS',
      'Typescript',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Mongoose',
      'Material UI',
      'ApexCharts',
      'Vite',
      'Netlify',
      'JWT',
      'AWS Lamda',
    ],
  },
  {
    title: 'Outsafe BC',
    description: `Outsafe BC is a community-driven GIS web app dedicated to improving outdoor activity safety in British Columbia. It offers users an intuitive platform for reporting and locating various hazards, such as wildlife, environmental issues, and infrastructure concerns.`,
    imgSrc: 'https://utfs.io/f/MDuYRQOXX1wgJL0X4aYlGmkTve6j9OZWdzFhfLA2nq4E3bVo',
    href: '/projects/outsafe-bc',
    tech: [
      'Javascript',
      'Leaflet',
      'Geoapify',
      'HTML',
      'CSS',
      'Netlify Functions',
      'Postgres',
      'Netlify',
    ],
  },
  {
    title: 'NZXT Aviation Gauge',
    description: `Aircraft Engine Indicating and Crew Alerting System (EICAS) inspired gauge using the NZXT web integrations API.`,
    imgSrc: 'https://utfs.io/f/MDuYRQOXX1wgG7CQIPDN0B19SRevJCKcyY2m3lDWzkO8AqV5',
    href: '/projects/nzxt-aviation',
    tech: [
      'ReactJS',
      'Typescript',
      'Vite',
      'ApexCharts',
      'Styled Components',
      'NZXT API',
      'GitHub Pages',
    ],
  },
]

export default projectsData
