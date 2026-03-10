import { useTheme } from '@/hooks/useTheme'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Expertise from '@/components/sections/Expertise'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import ConceptWork from '@/components/sections/ConceptWork'
import VolunteerWork from '@/components/sections/VolunteerWork'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="font-sans antialiased transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Expertise />
        <Projects />
        <ConceptWork />
        <Experience />
        <Skills />
        <Education />
        <VolunteerWork />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
