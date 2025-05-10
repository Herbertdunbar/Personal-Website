interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl pixel-font"
        style={{
          textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg text-white dark:text-white max-w-3xl mx-auto bg-black/50 dark:bg-black/50 px-4 py-2 backdrop-blur-sm rounded-none pixel-font"
          style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.5)", boxShadow: "4px 4px 0 rgba(0,0,0,0.2)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
