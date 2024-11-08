'use client'

import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const GitHubCal = () => {
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  // Ensure this component only renders on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const colorScheme = theme === 'dark' ? 'dark' : 'light'

  // Render the calendar only on the client
  return isClient ? (
    <GitHubCalendar username="ReinhardtBotha" colorScheme={colorScheme} showWeekdayLabels={true} />
  ) : null
}

export default GitHubCal
