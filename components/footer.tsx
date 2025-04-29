import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Link href="https://github.com/Herbertdunbar" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="mailto:herbertdunbar19@gmail.com">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" />
            </Link>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Herbert Dunbar Jr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
