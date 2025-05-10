"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 dark:bg-black/70 backdrop-blur-md shadow-sm" : "bg-black/50 dark:bg-black/50"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-center">
          <Link
            href="/"
            className="text-xl font-bold text-white dark:text-white absolute left-4 pixel-font"
            style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
          >
            HD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-300 dark:text-white dark:hover:text-blue-300 transition-colors pixel-font"
                style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>

          {/* Theme Toggle - Desktop */}
          <div className="hidden md:block absolute right-4">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 bg-black/80 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-300 dark:text-white dark:hover:text-blue-300 transition-colors pixel-font px-4"
                  style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
