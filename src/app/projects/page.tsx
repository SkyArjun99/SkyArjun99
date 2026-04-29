import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Eye, ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              FEATURED PROJECTS
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              
              {
                title: 'Synapse : PKM',
                description: 'Personal Knowledge Management System. Version 1 ( Active Now ) is designed for single user',
                tags: ['TypeScript', 'Next.Js', 'React Canvas','Tailwind','Postgres'],
                link:'https://github.com/SkyArjun99/synapse',
                color: 'bg-pink-500',
                stars: '2',
                views: '30',
              },
            /*  {
                title: 'Dashboard Analytics',
                description: 'Data visualization platform for businesses with interactive charts and real-time updates.',
                tags: ['TypeScript', 'Chart.js', 'PostgreSQL'],
                link:'',
                color: 'bg-cyan-400',
                stars: '0',
                views: '0',
              },*/
              {
                title: 'Task Management App',
                description: 'Collaborative project management tool with real-time collaboration and notifications.',
                tags: ['Next.js', 'FastAPI', 'PostgresSQL','Tailwind','Typescript'],
                link:'https://github.com/SkyArjun99',
                color: 'bg-green-400',
                stars: '0',
                views: '0',
              },
              /*{
                title: 'Social Media Dashboard',
                description: 'Analytics dashboard for social media platforms with scheduling and automation features.',
                tags: ['React', 'Node.js', 'Redis'],
                link:'',
                color: 'bg-purple-500',
                stars: '3.1k',
                views: '19k',
              },*/
              {
                title: 'My Portfolio ',
                description: 'Portfolio made for myself . Designed to showcase my info .',
                tags: ['Next.js', 'Tailwind'],
                link:'https://github.com/SkyArjun99/SkyArjun99',
                color: 'bg-red-400',
                stars: '0',
                views: '10',
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`${project.color} border-4 border-black dark:border-white p-6 hover:scale-105 transition-all hover:rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <Button variant="brutalistOutline" size="icon" className="w-10 h-10 shrink-0">
                    <a href={project.link}><ExternalLink  className="h-5 w-5" /></a>
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
        </div>
      </div>
    </div>
  )
}
