import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import SpaceBackground from "@/components/space-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <SpaceBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

