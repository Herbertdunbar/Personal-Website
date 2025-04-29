import SectionHeading from "@/components/section-heading"

export default function About() {
  return (
    <section id="about" className="py-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" subtitle="Get to know more about my background and career goals" />

        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert prose-lg mx-auto">
            <p>
              I am an aspiring Software Developer with a track record of enhancing organizational performance and
              serving thousands annually. My professional journey has equipped me with valuable skills in collaboration,
              compliance, and adherence to industry standards.
            </p>
            <p>
              I excel in client relations, community engagement, and brand messaging. My experience includes training
              and executing targeted campaigns to drive engagement, retention, and team growth.
            </p>
            <p>
              Currently, I am focused on expanding my technical skills through the Year Up program and various web
              development projects. I am passionate about creating accessible, user-friendly applications that solve
              real-world problems.
            </p>
            <p>
              Based in Hampton, GA, I am actively seeking opportunities to apply my skills and contribute to innovative
              software development teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
