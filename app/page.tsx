'use client'

import { useState, useRef, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionContainer from '@/components/SectionContainer'
import Terminal from '@/components/Terminal'
import Footer from '@/components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: React.RefObject<HTMLElement> }>({
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    terminal: useRef(null),
  })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
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
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-4">
          <Hero scrollToSection={scrollToSection} setActiveSection={setActiveSection} />
          <div className="space-y-32 mt-32">
            <SectionContainer
              activeSection={activeSection}
              sectionRefs={sectionRefs.current}
            />
            <Terminal ref={sectionRefs.current.terminal} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

