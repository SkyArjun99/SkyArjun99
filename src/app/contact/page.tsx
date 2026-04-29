import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                LET'S WORK TOGETHER
              </h1>
              <p className="text-2xl text-muted-foreground">
                Have a project in mind? Let's create something amazing!
              </p>
            </div>

            <div className="space-y-6">
              <Button variant="brutalist" className="w-full h-16 text-xl font-bold" asChild>
                <a href="mailto:arjunkorlekar51@gmail.com">
                  SEND ME AN EMAIL
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="bg-yellow-400 dark:bg-pink-500 border-4 border-black dark:border-white p-6 mb-2">
                    <p className="font-bold text-lg">EMAIL</p>
                  </div>
                  <p className="font-mono text-sm">arjunkorlekar51.com</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-400 dark:bg-purple-500 border-4 border-black dark:border-white p-6 mb-2">
                    <p className="font-bold text-lg">LOCATION</p>
                  </div>
                  <p className="font-mono text-sm">Remote / Worldwide</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-400 dark:bg-blue-500 border-4 border-black dark:border-white p-6 mb-2">
                    <p className="font-bold text-lg">STATUS</p>
                  </div>
                  <p className="font-mono text-sm">Available for Internships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
