import Link from "next/link"
import { Sparkles, Mail, Phone, MapPin, Send, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Header/Navigation */}
      <Header />

      <main className="flex-1">
        {/* Contact Hero */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-blue-900/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <Brain className="mr-1 h-3.5 w-3.5" />
                <span>Get in Touch</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  Connect With Our AI Experts
                </h1>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reach out to discuss how our AI expertise can transform your business and solve your most complex
                  challenges
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl blur-xl"></div>
                <Card className="relative bg-zinc-900/60 border-zinc-800 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Send us a message</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First name
                          </label>
                          <Input
                            id="first-name"
                            placeholder="John"
                            className="bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-purple-500/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last name
                          </label>
                          <Input
                            id="last-name"
                            placeholder="Doe"
                            className="bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-purple-500/20"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          placeholder="john.doe@example.com"
                          type="email"
                          className="bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          className="bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="project-type"
                          className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          What AI solution are you interested in?
                        </label>
                        <select
                          id="project-type"
                          className="flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                        >
                          <option value="" className="bg-zinc-900">
                            Select an option
                          </option>
                          <option value="chatbot" className="bg-zinc-900">
                            Chatbot Development
                          </option>
                          <option value="conversational-ai" className="bg-zinc-900">
                            Conversational AI
                          </option>
                          <option value="custom-ai" className="bg-zinc-900">
                            Custom AI Solution
                          </option>
                          <option value="machine-learning" className="bg-zinc-900">
                            Machine Learning
                          </option>
                          <option value="computer-vision" className="bg-zinc-900">
                            Computer Vision
                          </option>
                          <option value="other" className="bg-zinc-900">
                            Other
                          </option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none text-zinc-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or inquiry"
                          className="min-h-[150px] bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-500 focus:border-purple-500 focus:ring-purple-500/20"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col space-y-6">
                <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Here's how you can reach our AI team directly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-sm text-zinc-400">ai@aisolutionspro.com</p>
                        <p className="text-sm text-zinc-400">support@aisolutionspro.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Phone</h3>
                        <p className="text-sm text-zinc-400">+1 (555) 123-4567</p>
                        <p className="text-sm text-zinc-400">Mon-Fri, 9am-5pm EST</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">Office</h3>
                        <p className="text-sm text-zinc-400">
                          123 AI Innovation Center, Suite 400
                          <br />
                          San Francisco, CA 94103
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Schedule a Demo</CardTitle>
                    <CardDescription className="text-zinc-400">
                      See our AI solutions in action with a personalized demo
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 mb-4">
                      Our team of AI experts can walk you through a customized demonstration of our solutions tailored
                      to your specific business needs.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Book a Demo Session</Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/60 border-zinc-800 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-zinc-400">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-400">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                <span>Our Location</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
                  Visit Our AI Innovation Center
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're located in the heart of San Francisco's technology district
                </p>
              </div>
            </div>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl blur-sm"></div>
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Office Location Map"
                className="relative aspect-video w-full object-cover"
                width={800}
                height={400}
              />
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
                  Let's start a conversation about how our AI expertise can help you achieve your goals
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
