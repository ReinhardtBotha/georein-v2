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
    imgSrc: '/static/images/weaup.jpg',
    href: '/projects/weaup',
  },
  {
    title: 'Plowterra',
    description: `Plowterra is web application that enables farmers to effortlessly record daily harvests and manage payrolls.`,
    imgSrc: '/static/images/plowterra.jpg',
    href: '/projects/plowterra',
  },
  {
    title: 'Outsafe BC',
    description: `Outsafe BC is a community-driven GIS web app dedicated to improving outdoor activity safety in British Columbia. It offers users an intuitive platform for reporting and locating various hazards, such as wildlife, environmental issues, and infrastructure concerns.`,
    imgSrc: '/static/images/outsafe-bc.png',
    href: '/projects/outsafe-bc',
  },
  {
    title: 'NZXT Aviation Gauge',
    description: `Aircraft Engine Indicating and Crew Alerting System (EICAS) inspired gauge using the NZXT web integrations API.`,
    imgSrc: '/static/images/nzxt.jpg',
    href: '/projects/nzxt-aviation',
  },
]

export default projectsData
