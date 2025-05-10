import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 pixel-font"
            style={{ textShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}
          >
            Herbert Dunbar Jr.
          </h1>
          <p
            className="text-xl md:text-2xl text-white dark:text-white mb-8 max-w-3xl bg-black/50 dark:bg-black/50 px-4 py-2 backdrop-blur-sm rounded-none pixel-font"
            style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)", boxShadow: "4px 4px 0 rgba(0,0,0,0.2)" }}
          >
            Aspiring Software Developer with expertise in web development and Microsoft tools
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link href="mailto:herbertdunbar19@gmail.com">
              <Button className="gap-2 rounded-none" style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}>
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                variant="outline"
                className="gap-2 rounded-none"
                style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}
              >
                View My Projects
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 mb-12">
            <Link href="https://github.com/Herbertdunbar" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full p-2">
                <Github className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full p-2">
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:herbertdunbar19@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full p-2">
                <Mail className="h-8 w-8" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>

          <Link href="#about" className="animate-bounce">
            <Button variant="ghost" size="icon" className="rounded-full p-2">
              <ArrowDown className="h-8 w-8" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
