import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown, Code, Zap, Palette, Rocket } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 dark:bg-pink-500 rotate-12 opacity-80 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 dark:bg-purple-500 -rotate-6 opacity-80 animate-bounce" />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-green-400 dark:bg-blue-500 rotate-45 opacity-80 animate-pulse" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-8 animate-bounce">
              <span className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 font-bold text-sm tracking-wider">
                ✨ WELCOME TO MY PORTFOLIO ✨
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none">
              <span className="block bg-yellow-400 dark:bg-pink-500 px-4 py-2 inline-block border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] mb-4">
                RELAXED
              </span>
              <span className="block text-foreground">
                DEVELOPER
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl font-bold mb-12 text-muted-foreground max-w-3xl mx-auto">
              Building <span className="text-yellow-500 dark:text-pink-500"> real </span> solutions for common yet unattended problems!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                variant="brutalist"
                size="lg"
                className="text-xl px-8 py-6"
                asChild
              >
                <Link href="/projects">
                  VIEW PROJECTS
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                variant="brutalistOutline"
                size="lg"
                className="text-xl px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  GET IN TOUCH
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-12 w-12 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-4 h-4 bg-yellow-400 dark:bg-pink-500 rotate-45" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">ABOUT ME</h2>
                <div className="flex-1 h-4 bg-black dark:bg-white" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed">
                    I'm a <span className="font-bold bg-yellow-400 dark:bg-pink-500 px-2">passionate</span> developer who believes in pushing boundaries and creating unique digital experiences. My work combines technical excellence with creative freedom.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Specializing in modern web technologies, I transform ideas into <span className="font-bold">impactful</span> products that stand out from the crowd.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyan-400 dark:bg-purple-500 border-4 border-black dark:border-white p-6 text-center hover:scale-105 transition-transform">
                    <Code className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-bold text-lg">FULL STACK</p>
                    <p className="text-sm">Development</p>
                  </div>
                  <div className="bg-yellow-400 dark:bg-pink-500 border-4 border-black dark:border-white p-6 text-center hover:scale-105 transition-transform">
                    <Palette className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-bold text-lg">UI/UX</p>
                    <p className="text-sm">Design</p>
                  </div>
                  <div className="bg-green-400 dark:bg-blue-500 border-4 border-black dark:border-white p-6 text-center hover:scale-105 transition-transform">
                    <Zap className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-bold text-lg">FAST</p>
                    <p className="text-sm">Performance</p>
                  </div>
                  <div className="bg-red-400 dark:bg-orange-500 border-4 border-black dark:border-white p-6 text-center hover:scale-105 transition-transform">
                    <Rocket className="h-12 w-12 mx-auto mb-4" />
                    <p className="font-bold text-lg">MODERN</p>
                    <p className="text-sm">Tech Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
