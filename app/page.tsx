import Link from "next/link"
import { ArrowRight, Sparkles, Bot, Zap, Brain, Cpu, BarChart3, Code, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import  SpaceBackground from "@/components/space"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Header/Navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 overflow-hidden"
                            // style={{
                            //   backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnJ5JTIwc2t5fGVufDB8fDB8fHww')",
                            //   backgroundSize: "cover", 
                            //   backgroundPosition: "center",
                            //   backgroundRepeat: "no-repeat",
                            //   padding: "2rem" // Optional padding to ensure content isn't too close to edges
                            // }}
          >
            <SpaceBackground />
            
            {/* <div className="relative top-4 left-4 text-white">
              <img src="/Images/LogoConTextoBlanco.png" alt="Logo" className="h-16 w-auto" />
            </div> */}
            <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10" style={{
            marginLeft: "15vw",
            width: "70vw",
          }}>
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
              {/* <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400 self-start">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>AI-Powered Innovation</span>
                </div> */}
                <div className="space-y-2"
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                    Artificial Intelligence Solutions for the Future
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    We combine cutting-edge AI expertise with custom development to create intelligent solutions that
                    transform businesses.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Explore AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-700 text-purple-400 hover:bg-purple-950/50"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              {/* <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <img
                  src="/placeholder.svg?height=550&width=550"
                  alt="AI Solutions Pro Hero"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  width={550}
                  height={550}
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* AI Expertise Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900" style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgb(0, 0, 0), rgb(24, 24, 27) 15%, rgb(24, 24, 27) 100%)'
          }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Brain className="mr-1 h-3.5 w-3.5" />
                <span>AI Expertise</span>
              </div> */}
              <div className="space-y-2">
                <h2 className="text-3xl pt-12 font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Artificial Intelligence at Our Core
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in leveraging AI technologies to create intelligent, adaptive solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
                  <p className="text-zinc-400">
                    Custom ML models that learn from your data to make predictions, automate decisions, and uncover
                    insights
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Natural Language Processing</h3>
                  <p className="text-zinc-400">
                    Advanced NLP capabilities for understanding, generating, and analyzing human language
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
                  <p className="text-zinc-400">
                    Image and video analysis solutions that can identify objects, people, and patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] -left-[20%] w-[50%] h-[60%] bg-purple-900/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[50%] bg-blue-900/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Zap className="mr-1 h-3.5 w-3.5" />
                <span>Featured Solutions</span>
              </div> */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  AI-Powered Services
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our pre-established AI solutions ready to transform your business
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Bot className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-white">Chatbot Development</CardTitle>
                  <CardDescription className="text-zinc-400">
                    AI-powered chatbots designed to enhance customer engagement and streamline operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Advanced natural language understanding</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Context-aware conversations</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Seamless integration with existing systems</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Multi-platform deployment</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-purple-700 text-purple-400 hover:bg-purple-950/50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-all group overflow-hidden">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <Brain className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-white">Conversational AI</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Advanced AI solutions that understand context and deliver natural interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-zinc-400">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Deep learning language models</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Sentiment analysis and emotion detection</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Personalized customer experiences</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-400" />
                      <span>Continuous learning and improvement</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-purple-700 text-purple-400 hover:bg-purple-950/50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Custom Development Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Code className="mr-1 h-3.5 w-3.5" />
                <span>Custom Solutions</span>
              </div> */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  AI-Enhanced Custom Development
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Beyond our pre-established services, we build custom AI-powered solutions tailored to your unique
                  needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Web Applications</h3>
                  <p className="text-zinc-400">
                    Intelligent web applications with AI-powered features for enhanced user experiences
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m9 10 2 2-2 2"></path>
                      <path d="M15 10h-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Mobile Applications</h3>
                  <p className="text-zinc-400">
                    AI-enhanced mobile apps with smart features like image recognition and voice interfaces
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/50 p-6 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
                  <p className="text-zinc-400">
                    Advanced analytics solutions powered by AI to extract actionable insights from your data
                  </p>
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
                  Let's discuss how our AI expertise and development capabilities can help you achieve your business
                  goals
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
      <Footer />
    </div>
  )
}
