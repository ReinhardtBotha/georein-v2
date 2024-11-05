interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'WeaUp',
    description: `WeaUp is a mobile app that promotes posture awareness, offering instant feedback on bad posture when using your phone or wearing earbuds. It helps users develop and maintain good posture habits through detailed analytics, collaborative features, badges, goals, and more.`,
    imgSrc: '/static/images/google.png',
    href: '/projects/code-sample',
  },
  {
    title: 'Plowterra',
    description: `Plowterra is web application that enables farmers to effortlessly record daily harvests and manage payrolls.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Outsafe BC',
    description: `Outsafe BC is a community-driven GIS web app dedicated to improving outdoor activity safety in British Columbia. It offers users an intuitive platform for reporting and locating various hazards, such as wildlife, environmental issues, and infrastructure concerns.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
