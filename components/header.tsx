"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
    const pathName = usePathname();
    console.log("pathName", pathName);
    return (
    <header className="sticky top-0 z-40 w-full border-zinc-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 pr-6">
      <div className="container flex h-20 items-center">
          <div className="mr-4 flex">
            <Link
              href="/"
              className="flex items-center space-x-2 pl-8"
              >
                <img src="/Images/LogoConTextoBlanco.png" alt="Logo" className="h-12 w-auto" />
            </Link>
            {/* <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl">AI Solutions Pro</span>
            </Link> */}
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
            <Link href="/" className={
              cn(
                "transition-colors hover:text-purple-400 text-lg",
                pathName === "/" ? "text-white" : "text-zinc-400"
              )
            }>
              Home
            </Link>
            <Link href="/services" className={
              cn(
                "transition-colors hover:text-purple-400 text-lg",
                pathName === "/services" ? "text-white" : "text-zinc-400"
              )
            }>
              Services
            </Link>
            <Link href="/about" className={
              cn(
                "transition-colors hover:text-purple-400 text-lg",
                pathName === "/about" ? "text-white" : "text-zinc-400"
              )
            }>
              About
            </Link>
            <Link href="/contact" className={
              cn(
                "transition-colors hover:text-purple-400 text-lg",
                pathName === "/contact" ? "text-white" : "text-zinc-400"
              )
            }>
              Contact
            </Link>
            {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white text-base font-medium">Get Started</Button> */}
          </nav>
        </div>
      </header>
      )
}