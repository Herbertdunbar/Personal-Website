import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Server } from "lucide-react"

const skillCategories = [
  {
    title: "HTML & CSS",
    icon: <Layout className="h-8 w-8 mb-4 text-orange-600" />,
    skills: ["Semantic HTML implementation", "Responsive layouts with flexbox and grid", "CSS selectors and styling"],
  },
  {
    title: "JavaScript",
    icon: <Code className="h-8 w-8 mb-4 text-yellow-600" />,
    skills: ["Foundational JavaScript concepts", "DOM manipulation", "Interactive web elements"],
  },
  {
    title: "Other Skills",
    icon: <Server className="h-8 w-8 mb-4 text-purple-600" />,
    skills: ["Version control with Git", "Agile and Scrum methodologies", "Problem-solving and debugging"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-transparent pixel-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Technical Skills" subtitle="A showcase of my technical expertise and capabilities" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-950/90 border-2 border-gray-200 dark:border-gray-800 pixel-card"
            >
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-4 pixel-font">{category.title}</h3>
                  <ul className="space-y-2 text-left w-full">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
