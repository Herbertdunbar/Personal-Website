interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
