import SectionHeading from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education & Training" subtitle="My academic background and professional development" />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-2 border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">Year Up United</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">2024-Present</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Application Development Program</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Year Up is a leading one-year career development program with 250 corporate partners around the
                    country; the program includes college-level courses, professional training, and a six-month
                    internship.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-950/90">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <Code className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">Web Development Projects</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">2024-Present</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>All projects are available on my professional GitHub</li>
                    <li>
                      Actively working on multiple web development projects, both independently and collaboratively
                    </li>
                    <li>
                      All projects showcase my coding, problem-solving, and adaptability in different development
                      environments
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
