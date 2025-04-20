import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full py-6 md:py-12 bg-black border-t border-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 pl-1"
              >
                <img src="/Images/LogoConTextoBlanco.png" alt="Logo" className="h-8 w-auto" />
            </Link>
              <p className="text-sm text-zinc-400">Creadores de MileiGPT papa</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Servicios</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="/services/chatbot-development" className="hover:text-purple-400 transition-colors">
                    Desarrollo de chatbot
                  </Link>
                </li>
                <li>
                  <Link href="/services/conversational-ai" className="hover:text-purple-400 transition-colors">
                    IA Conversacional
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-development" className="hover:text-purple-400 transition-colors">
                    Desarrollos personalizados con IA
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Compañia</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-400 transition-colors">
                    Contacto
                  </Link>
                </li>
                {/* <li>
                  <Link href="/careers" className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Conectate</h4>
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
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Elykia. All rights reserved.
          </div>
        </div>
      </footer>
    )
}