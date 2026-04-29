'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { href: '/', label: 'HOME', hash: '' },
  { href: '/#projects', label: 'PROJECTS', hash: 'projects' },
  { href: '/#social', label: 'SOCIAL', hash: 'social' },
  { href: '/#contact', label: 'CONTACT', hash: 'contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Set home as active if at top of page
      if (scrollPosition < 200) {
        setActiveSection('home')
        return
      }

      // Check each section
      navItems.forEach((item) => {
        if (!item.hash || item.hash === '') return
        const section = document.getElementById(item.hash)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.hash)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (item: any) => {
    // Check if pathname matches and if hash matches active section
    if (pathname === '/') {
      if (item.hash === '' && activeSection === 'home') return true
      if (item.hash === activeSection) return true
    }
    return pathname === item.href
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b-4 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black tracking-tighter hover:scale-105 transition-transform"
          >
            <span className="bg-yellow-400 dark:bg-pink-500 px-4 py-2 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              PORTFOLIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive(item) ? 'brutalist' : 'brutalistOutline'}
                  className="text-lg font-bold hover:bg-cyan-400 dark:hover:bg-purple-500 hover:border-cyan-400 dark:hover:border-purple-500 transition-all"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="brutalist"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-4 border-black dark:border-white">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive(item) ? 'brutalist' : 'brutalistOutline'}
                    className="w-full text-lg font-bold hover:bg-cyan-400 dark:hover:bg-purple-500 hover:border-cyan-400 dark:hover:border-purple-500 transition-all"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
