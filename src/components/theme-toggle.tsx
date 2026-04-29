'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="brutalist"
        size="icon"
        className="w-12 h-12 border-4 border-black dark:border-white"
      >
        <Sun className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <Button
      variant="brutalist"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-12 h-12 border-4 border-black dark:border-white hover:bg-yellow-400 dark:hover:bg-pink-500 transition-all"
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 animate-pulse" />
      ) : (
        <Moon className="h-6 w-6 animate-pulse" />
      )}
    </Button>
  )
}
