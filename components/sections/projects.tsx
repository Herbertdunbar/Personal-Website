import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack application for managing tasks and projects with user authentication and real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "E-commerce Website",
    description: "An online store with product listings, shopping cart functionality, and secure checkout process.",
    tags: ["JavaScript", "HTML", "CSS", "API Integration"],
    githubLink: "#",
    liveLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Projects" subtitle="A selection of my recent web development work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full border-2 border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90"
            >
              <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-4xl font-bold text-gray-300 dark:text-gray-700 pixel-font">
                  {project.title.charAt(0)}
                </div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link href={project.githubLink || "#"} className="flex-1">
                    <Button variant="outline" className="w-full gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.liveLink || "#"} className="flex-1">
                    <Button className="w-full gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
