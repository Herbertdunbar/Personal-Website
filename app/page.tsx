import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import "@/app/8bit-background.css"

export default function Home() {
  return (
    <div className="min-h-screen pixel-bg relative">
      {/* Decorative pixel corners */}
      <div className="pixel-corner pixel-corner-tl"></div>
      <div className="pixel-corner pixel-corner-tr"></div>
      <div className="pixel-corner pixel-corner-bl"></div>
      <div className="pixel-corner pixel-corner-br"></div>

      {/* Floating 8-bit elements */}
      <div className="pixel-art pixel-mushroom"></div>
      <div className="pixel-art pixel-coin"></div>
      <div className="pixel-art pixel-star"></div>
      <div className="pixel-art pixel-block"></div>
      <div className="pixel-art pixel-ghost"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
