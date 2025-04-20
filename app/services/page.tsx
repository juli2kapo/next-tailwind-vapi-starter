import Link from "next/link"
import { ArrowRight, Sparkles, Bot, Brain, CheckCircle, Code, Cpu, BarChart3, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Header/Navigation */}
      <Header />

      <main className="flex-1">
        {/* Services Hero */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Our Services</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  AI-Powered Solutions
                </h1>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From custom AI development to pre-established intelligent solutions, we leverage artificial
                  intelligence to solve complex business challenges
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Expertise */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                {/* <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                  <Brain className="mr-1 h-3.5 w-3.5" />
                  <span>AI Expertise</span>
                </div> */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                    Artificial Intelligence Specialists
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    We combine deep AI expertise with development capabilities to create intelligent solutions that
                    solve complex business challenges.
                  </p>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Machine learning model development and training</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Natural language processing and understanding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Computer vision and image recognition</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Predictive analytics and forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>AI integration with existing systems</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Explore AI Capabilities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Expertise"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pre-established Services */}
        <section className="w-full py-12 md:py-0 lg:py-0">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Pre-established Solutions</span>
              </div> */}
              <div className="space-y-2">
                <h2 className="text-3xl pt-6 font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Ready-to-Implement AI Solutions
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our proven AI solutions that can be quickly adapted to your business needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Development */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                  <Bot className="mr-1 h-3.5 w-3.5" />
                  <span>Chatbot Development</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                    Intelligent Conversational Agents
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    We design and develop AI-powered chatbots that deliver natural, context-aware interactions that
                    transform customer experiences.
                  </p>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Advanced natural language understanding</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Context-aware conversation management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Multi-platform deployment (web, mobile, social media)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Analytics and continuous improvement</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Chatbot Development"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conversational AI */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative order-last lg:order-first">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Conversational AI"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                  <Brain className="mr-1 h-3.5 w-3.5" />
                  <span>Conversational AI</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                    Advanced AI Interactions
                  </h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Our conversational AI solutions go beyond simple chatbots to deliver sophisticated, human-like
                    interactions powered by cutting-edge language models.
                  </p>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>State-of-the-art language models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Sentiment analysis and emotion detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Personalized customer experiences</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Continuous learning and improvement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom AI Solutions */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] -left-[20%] w-[50%] h-[60%] bg-purple-900/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[50%] bg-blue-900/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Code className="mr-1 h-3.5 w-3.5" />
                <span>Custom AI Solutions</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  Tailored AI Development
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We build custom AI solutions that address your unique business challenges
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Layers className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-white">AI-Powered Web Applications</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Intelligent web applications with AI features for enhanced user experiences
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>
                    From recommendation engines to intelligent search, we build web applications that leverage AI to
                    deliver exceptional user experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-white">Computer Vision Solutions</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Image and video analysis systems for object detection and recognition
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>
                    Our computer vision solutions can analyze images and videos to identify objects, people, and
                    patterns for applications ranging from security to retail analytics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-white">Predictive Analytics</CardTitle>
                  <CardDescription className="text-zinc-400">
                    AI-powered forecasting and trend analysis for data-driven decisions
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-zinc-400">
                  <p>
                    Leverage your data with our predictive analytics solutions that use machine learning to forecast
                    trends, identify patterns, and drive better business decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Our Process</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  AI Development Methodology
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our structured approach to delivering successful AI solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4 lg:gap-12 mt-12">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
                  <p className="text-zinc-400">
                    We analyze your business needs and identify opportunities for AI implementation
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Design</h3>
                  <p className="text-zinc-400">We create a tailored AI solution architecture and data strategy</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                  <p className="text-zinc-400">
                    Our team builds and trains your AI solution to meet your specific requirements
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 text-xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Deployment</h3>
                  <p className="text-zinc-400">We launch your solution and provide ongoing support and optimization</p>
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
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how our AI expertise can help you achieve your business goals
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-700 text-purple-400 hover:bg-purple-950/50"
                >
                  View Case Studies
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
