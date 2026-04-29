import { Button } from '@/components/ui/button'
import { Github, Twitter, Linkedin, Users, TrendingUp, Award, Heart, Star } from 'lucide-react'

export default function Social() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Social Media Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              CONNECT WITH ME
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Follow my journey on social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {/* GitHub */}
            <div className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform flex flex-col">
              <div className="text-center mb-6">
                <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-20 h-20 mb-4">
                  <Github className="h-10 w-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight">GitHub</h3>
                <p className="text-sm md:text-base text-muted-foreground">@SkyArjun99</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">4</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Repositories</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">2</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Stars</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">2</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Followers</div>
                </div>
              </div>
              <Button variant="brutalist" className="w-full mt-auto" asChild>
                <a href="https://github.com/SkyArjun99" target="_blank" rel="noopener noreferrer">
                  FOLLOW
                </a>
              </Button>
            </div>

            {/* Twitter */}
            <div className="bg-cyan-400 dark:bg-purple-500 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform flex flex-col">
              <div className="text-center mb-6">
                <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-20 h-20 mb-4">
                  <Twitter className="h-10 w-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight">Twitter</h3>
                <p className="text-sm md:text-base text-muted-foreground">no account yet</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">0k</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Tweets</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">0k</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Following</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">k</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Followers</div>
                </div>
              </div>
              <Button variant="brutalist" className="w-full mt-auto" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  FOLLOW
                </a>
              </Button>
            </div>

            {/* LinkedIn */}
            <div className="bg-yellow-400 dark:bg-pink-500 border-4 border-black dark:border-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:scale-105 transition-transform flex flex-col">
              <div className="text-center mb-6">
                <div className="bg-black text-white dark:bg-white dark:text-black inline-flex items-center justify-center w-20 h-20 mb-4">
                  <Linkedin className="h-10 w-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight">no account yet</h3>
                <p className="text-sm md:text-base text-muted-foreground"></p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">0</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Connections</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">0</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Endorsements</div>
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-bold leading-tight truncate">0</div>
                  <div className="text-xs md:text-sm leading-tight mt-1">Skills</div>
                </div>
              </div>
              <Button variant="brutalist" className="w-full mt-auto" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  CONNECT
                </a>
              </Button>
            </div>
          </div>

          {/* Achievements Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                ACHIEVEMENTS
              </h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                Milestones and recognition
              </p>
            </div>

            
              
            
          </section>

          {/* Testimonials Section */}
          <section>
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
                  author: "Maharshi Ved Vyas",
                  role: "Story Writer",
                  color: 'bg-yellow-400',
                },
                {
                  quote: "Professional, creative, and efficient. The brutalist design is unique and really stands out. Highly recommended!",
                  author: "Purandar ( INDRA )",
                  role: " Head Of Department , Weather Earth & Co.",
                  color: 'bg-cyan-400',
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
          </section>
        </div>
      </div>
    </div>
  )
}
