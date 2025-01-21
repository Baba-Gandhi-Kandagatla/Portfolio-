"use client"

import { useState, useRef, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import AchievementsLeadership from "@/components/AchievementsLeadership"
import Timeline from "@/components/Timeline"
import Footer from "@/components/Footer"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLElement> }>({
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    "achievements-leadership": useRef(null),
    projects: useRef(null),
  })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs.current[sectionId]
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero scrollToSection={scrollToSection} setActiveSection={setActiveSection} />
          <div className="space-y-32 mt-32">
            <About ref={sectionRefs.current.about} isActive={activeSection === "about"} />
            <Skills ref={sectionRefs.current.skills} isActive={activeSection === "skills"} />
            <Education ref={sectionRefs.current.education} isActive={activeSection === "education"} />
            <AchievementsLeadership
              ref={sectionRefs.current["achievements-leadership"]}
              isActive={activeSection === "achievements-leadership"}
            />
            <Timeline ref={sectionRefs.current.projects} isActive={activeSection === "projects"} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

