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
    pixelClass: "bg-red-500",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack application for managing tasks and projects with user authentication and real-time updates.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    liveLink: "#",
    pixelClass: "bg-blue-500",
  },
  {
    title: "E-commerce Website",
    description: "An online store with product listings, shopping cart functionality, and secure checkout process.",
    tags: ["JavaScript", "HTML", "CSS", "API Integration"],
    githubLink: "#",
    liveLink: "#",
    pixelClass: "bg-green-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm pixel-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Projects" subtitle="A selection of my recent web development work" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full pixel-card">
              <div className={`relative h-48 w-full ${project.pixelClass} flex items-center justify-center`}>
                <div
                  className="text-5xl font-bold text-white pixel-font"
                  style={{
                    textShadow: "4px 4px 0 rgba(0,0,0,0.3), -2px -2px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {project.title.charAt(0)}
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, transparent 50%, rgba(0,0,0,0.1) 50%), linear-gradient(90deg, transparent 50%, rgba(0,0,0,0.1) 50%)",
                    backgroundSize: "10px 10px",
                  }}
                ></div>
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2 pixel-font">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-none"
                      style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link href={project.githubLink || "#"} className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full gap-2 rounded-none"
                      style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                  <Link href={project.liveLink || "#"} className="flex-1">
                    <Button className="w-full gap-2 rounded-none" style={{ boxShadow: "2px 2px 0 rgba(0,0,0,0.2)" }}>
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
