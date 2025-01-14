import { RefObject } from 'react'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Timeline from './Timeline'

interface SectionContainerProps {
  activeSection: string | null
  sectionRefs: {
    [key: string]: RefObject<HTMLElement>
  }
}

export default function SectionContainer({ activeSection, sectionRefs }: SectionContainerProps) {
  return (
    <>
      <About ref={sectionRefs.about} isActive={activeSection === 'about'} />
      <Skills ref={sectionRefs.skills} isActive={activeSection === 'skills'} />
      <Education ref={sectionRefs.education} isActive={activeSection === 'education'} />
      <Timeline ref={sectionRefs.projects} isActive={activeSection === 'projects'} />
    </>
  )
}

