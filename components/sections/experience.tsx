import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Internship Simulator",
    company: "Maxx Potential",
    period: "January 2025 - April 2025",
    responsibilities: [
      "Developing features or fixing bugs in existing applications",
      "Writing and testing code using programming languages like Python, HTML, CSS, and JavaScript",
      "Gaining experience in Agile and Scrum methodologies",
    ],
  },
  {
    title: "Domestic Operator",
    company: "Personal Quality Private Duty Sitting Services",
    period: "April 2024 - Present",
    responsibilities: [
      "Highly reliable and dependable in providing consistent, quality care to clients",
      "Recognizes and responds to emergencies",
      "Engaged in conversation and social activities",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-transparent pixel-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Professional Experience" subtitle="My work history and professional achievements" />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="pixel-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0 flex items-start justify-center">
                    <div
                      className="p-3 bg-blue-100 dark:bg-blue-900 rounded-none"
                      style={{ boxShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}
                    >
                      <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold pixel-font">{exp.title}</h3>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
