'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Zap, Palette, Rocket, Github, Twitter, Linkedin, ChevronDown, Star, Award, TrendingUp, Users, Eye, Heart, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

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
                CREATIVE
              </span>
              <span className="block text-foreground">
                DEVELOPER
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl font-bold mb-12 text-muted-foreground max-w-3xl mx-auto">
              Building <span className="text-yellow-500 dark:text-pink-500">extraordinary</span> digital experiences with brutalism & creativity
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                variant="brutalist"
                size="lg"
                className="text-xl px-8 py-6"
                onClick={() => scrollToSection('projects')}
              >
                VIEW PROJECTS
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="brutalistOutline"
                size="lg"
                className="text-xl px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                GET IN TOUCH
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <Button variant="brutalistOutline" size="icon" className="w-14 h-14" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="brutalistOutline" size="icon" className="w-14 h-14" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="brutalistOutline" size="icon" className="w-14 h-14" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-7 w-7" />
                </a>
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

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              TECH STACK
            </h2>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Tools & technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', color: 'bg-white dark:bg-black' },
              { name: 'React', color: 'bg-cyan-400' },
              { name: 'TypeScript', color: 'bg-blue-500' },
              { name: 'Tailwind CSS', color: 'bg-teal-400' },
              { name: 'Node.js', color: 'bg-green-500' },
              { name: 'PostgreSQL', color: 'bg-blue-700' },
              { name: 'Prisma', color: 'bg-gray-800 text-white' },
              { name: 'Git', color: 'bg-orange-500' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`${tech.color} border-4 border-black dark:border-white p-8 text-center font-bold text-xl hover:scale-105 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                FEATURED PROJECTS
              </h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse of my recent work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'Modern shopping experience with full-stack features including cart, checkout, and payment integration.',
                  tags: ['Next.js', 'Stripe', 'Prisma'],
                  color: 'bg-yellow-400',
                  stars: '2.5k',
                  views: '15k',
                },
                {
                  title: 'AI Chat Application',
                  description: 'Real-time chat with AI integration, supporting multiple models and conversation history.',
                  tags: ['React', 'WebSocket', 'OpenAI'],
                  color: 'bg-pink-500',
                  stars: '5k',
                  views: '30k',
                },
                {
                  title: 'Dashboard Analytics',
                  description: 'Data visualization platform for businesses with interactive charts and real-time updates.',
                  tags: ['TypeScript', 'Chart.js', 'PostgreSQL'],
                  color: 'bg-cyan-400',
                  stars: '3.8k',
                  views: '22k',
                },
                {
                  title: 'Task Management App',
                  description: 'Collaborative project management tool with real-time collaboration and notifications.',
                  tags: ['Next.js', 'Socket.io', 'MongoDB'],
                  color: 'bg-green-400',
                  stars: '4.2k',
                  views: '28k',
                },
                {
                  title: 'Social Media Dashboard',
                  description: 'Analytics dashboard for social media platforms with scheduling and automation features.',
                  tags: ['React', 'Node.js', 'Redis'],
                  color: 'bg-purple-500',
                  stars: '3.1k',
                  views: '19k',
                },
                {
                  title: 'Portfolio Generator',
                  description: 'AI-powered portfolio generator that creates personalized portfolios from resume data.',
                  tags: ['Next.js', 'Vercel AI', 'Tailwind'],
                  color: 'bg-red-400',
                  stars: '6.7k',
                  views: '45k',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`${project.color} border-4 border-black dark:border-white p-6 hover:scale-105 transition-all hover:rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black">{project.title}</h3>
                    <Button variant="brutalistOutline" size="icon" className="w-10 h-10 shrink-0">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-current" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {project.views}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="brutalist" size="lg" className="text-xl" asChild>
                <a href="#projects">
                  VIEW ALL PROJECTS
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                CONNECT WITH ME
              </h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                Follow my journey on social media
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* GitHub */}
              <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-20 h-20 mb-4">
                    <Github className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-2">GitHub</h3>
                  <p className="text-muted-foreground">@developer</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold">250+</div>
                    <div className="text-sm">Repositories</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5.2k</div>
                    <div className="text-sm">Stars</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1.8k</div>
                    <div className="text-sm">Followers</div>
                  </div>
                </div>
                <Button variant="brutalist" className="w-full" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    FOLLOW
                  </a>
                </Button>
              </div>

              {/* Twitter */}
              <div className="bg-cyan-400 dark:bg-purple-500 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-20 h-20 mb-4">
                    <Twitter className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-2">Twitter</h3>
                  <p className="text-muted-foreground">@developer</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold">12.5k</div>
                    <div className="text-sm">Tweets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">8.3k</div>
                    <div className="text-sm">Following</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15.7k</div>
                    <div className="text-sm">Followers</div>
                  </div>
                </div>
                <Button variant="brutalist" className="w-full" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    FOLLOW
                  </a>
                </Button>
              </div>

              {/* LinkedIn */}
              <div className="bg-yellow-400 dark:bg-pink-500 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform">
                <div className="text-center mb-6">
                  <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-20 h-20 mb-4">
                    <Linkedin className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-black mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">/in/developer</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Connections</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm">Endorsements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-sm">Skills</div>
                  </div>
                </div>
                <Button variant="brutalist" className="w-full" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    CONNECT
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                ACHIEVEMENTS
              </h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                Milestones and recognition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: '50+ Clients',
                  description: 'Happy clients worldwide',
                  color: 'bg-yellow-400 dark:bg-pink-500',
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: '100+ Projects',
                  description: 'Successfully delivered',
                  color: 'bg-cyan-400 dark:bg-purple-500',
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: '15 Awards',
                  description: 'Industry recognition',
                  color: 'bg-green-400 dark:bg-blue-500',
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: '10k+ Likes',
                  description: 'Community love',
                  color: 'bg-red-400 dark:bg-orange-500',
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`${achievement.color} border-4 border-black dark:border-white p-8 text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform`}
                >
                  <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                    {achievement.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-2">{achievement.title}</h3>
                  <p className="font-bold">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                TESTIMONIALS
              </h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                What people say about working with me
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Incredible work! The developer exceeded all expectations and delivered a stunning portfolio that perfectly captures our vision.",
                  author: "Sarah Johnson",
                  role: "CEO, TechStart",
                  color: 'bg-yellow-400',
                },
                {
                  quote: "Professional, creative, and efficient. The brutalist design is unique and really stands out. Highly recommended!",
                  author: "Michael Chen",
                  role: "Product Manager, InnovateCo",
                  color: 'bg-cyan-400',
                },
                {
                  quote: "Working with this developer was a game-changer for our brand. The attention to detail is remarkable.",
                  author: "Emily Davis",
                  role: "Marketing Director, BrandBoost",
                  color: 'bg-pink-500',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`${testimonial.color} border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform`}
                >
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-bold leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <p className="font-black text-xl">{testimonial.author}</p>
                    <p className="font-bold text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                  LET'S WORK TOGETHER
                </h2>
                <p className="text-2xl text-muted-foreground">
                  Have a project in mind? Let's create something amazing!
                </p>
              </div>

              <div className="space-y-6">
                <Button variant="brutalist" className="w-full h-16 text-xl font-bold" asChild>
                  <a href="mailto:hello@example.com">
                    SEND ME AN EMAIL
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="bg-yellow-400 dark:bg-pink-500 border-4 border-black dark:border-white p-6 mb-2">
                      <p className="font-bold text-lg">EMAIL</p>
                    </div>
                    <p className="font-mono text-sm">hello@example.com</p>
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
                    <p className="font-mono text-sm">Available for Hire</p>
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
