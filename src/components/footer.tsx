import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t-4 border-black dark:border-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter">ABOUT</h3>
            <p className="text-muted-foreground leading-relaxed">
              A brutalist portfolio showcasing creative works, projects, and ideas. Built with passion and energy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter">QUICK LINKS</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="brutalistOutline" asChild>
                <a href="/">Home</a>
              </Button>
              <Button variant="brutalistOutline" asChild>
                <a href="/#projects">Projects</a>
              </Button>
              <Button variant="brutalistOutline" asChild>
                <a href="/#social">Social</a>
              </Button>
              <Button variant="brutalistOutline" asChild>
                <a href="/#contact">Contact</a>
              </Button>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tighter">CONNECT</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="brutalistOutline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="brutalistOutline" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="brutalistOutline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="brutalistOutline" size="icon" asChild>
                <a href="mailto:hello@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-4 border-black dark:border-white">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-bold text-lg">
              © {currentYear} PORTFOLIO. ALL RIGHTS RESERVED.
            </p>
            <p className="flex items-center gap-2">
              BUILT WITH <Heart className="h-5 w-5 text-red-500 animate-pulse" /> AND CREATIVITY
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
