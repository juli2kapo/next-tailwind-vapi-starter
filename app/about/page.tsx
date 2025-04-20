import Link from "next/link"
import { ArrowRight, Sparkles, Brain, Users, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Header/Navigation */}
      <Header />

      <main className="flex-1">
        {/* About Hero */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                  <Brain className="mr-1 h-3.5 w-3.5" />
                  <span>About Us</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                    AI Solutions Pro
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    We're a team of AI specialists and developers dedicated to creating intelligent solutions that
                    transform how businesses operate
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Solutions Pro Team"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative order-last lg:order-first">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Our Story"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                    Our Story
                  </h2>
                  <p className="text-zinc-400">
                    Founded in 2015, AI Solutions Pro began with a simple mission: to make artificial intelligence
                    accessible and practical for businesses of all sizes. What started as a small team of AI enthusiasts
                    has grown into a leading provider of intelligent solutions.
                  </p>
                  <p className="text-zinc-400 mt-4">
                    Our journey has been driven by a passion for innovation and a commitment to delivering measurable
                    results for our clients. We've helped hundreds of businesses across various industries transform
                    their operations through AI-powered applications, custom software, and specialized services.
                  </p>
                  <p className="text-zinc-400 mt-4">
                    Today, we continue to push the boundaries of what's possible with AI, constantly refining our
                    approaches and embracing new technologies to deliver the best possible solutions for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] -left-[20%] w-[50%] h-[60%] bg-purple-900/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[50%] bg-blue-900/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Our Values</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  The Principles That Guide Us
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values shape everything we do
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                  <p className="text-zinc-400">
                    We strive for excellence in everything we do, from code quality to client communication
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                  <p className="text-zinc-400">
                    We believe in working closely with our clients to ensure solutions that truly meet their needs
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                  <p className="text-zinc-400">
                    We continuously explore new technologies and approaches to deliver cutting-edge solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Users className="mr-1 h-3.5 w-3.5" />
                <span>Our Team</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Meet Our AI Experts
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The brilliant minds behind our innovative solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"></div>
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="CEO"
                      className="relative aspect-square rounded-full object-cover object-center"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-white">Alex Johnson</h3>
                    <p className="text-sm text-purple-400">CEO & Founder</p>
                    <p className="text-sm text-zinc-400">
                      With over 15 years in AI and software development, Alex leads our vision and strategy
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"></div>
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="CTO"
                      className="relative aspect-square rounded-full object-cover object-center"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-white">Sarah Chen</h3>
                    <p className="text-sm text-purple-400">CTO</p>
                    <p className="text-sm text-zinc-400">
                      Sarah brings deep expertise in machine learning and natural language processing
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"></div>
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="COO"
                      className="relative aspect-square rounded-full object-cover object-center"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-white">Michael Rodriguez</h3>
                    <p className="text-sm text-purple-400">COO</p>
                    <p className="text-sm text-zinc-400">
                      Michael ensures our operations run smoothly and our clients receive exceptional service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-cover bg-center"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  Join Our Team of AI Innovators
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're always looking for talented individuals who are passionate about AI and technology
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-black border-t border-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-purple-500" />
                <span className="font-bold text-xl">AI Solutions Pro</span>
              </Link>
              <p className="text-sm text-zinc-400">Transforming business through intelligent AI solutions since 2015</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Services</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="/services/chatbot-development" className="hover:text-purple-400 transition-colors">
                    Chatbot Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/conversational-ai" className="hover:text-purple-400 transition-colors">
                    Conversational AI
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-development" className="hover:text-purple-400 transition-colors">
                    Custom AI Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Connect</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} AI Solutions Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
