import { forwardRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutProps {
  isActive: boolean
}

const About = forwardRef<HTMLElement, AboutProps>(({ isActive }, ref) => {
  if (!isActive) return null

  return (
    <section ref={ref} id="about" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Baba Gandhi Kandagatla</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            I am a B.Tech student specializing in Computer Science Engineering (AI/ML), 
            with expertise in full-stack development and AI-driven applications. 
            As the founder of SkillSage, I have successfully led product development, 
            established partnerships, and innovated in AI-based systems, 
            such as breast cancer detection and personalized mock interviews.
          </p>
          <p className="mb-4">
            Passionate about leveraging technology for social good, 
            I aim to create scalable solutions that improve everyday lives. 
            Driven by the belief that technology can empower individuals and communities, 
            I am committed to working on projects that make a meaningful impact, 
            particularly in the healthcare and education sectors.
          </p>
          <p>
            Currently focusing on Spring Boot, 
            I am eager to expand my leadership experience in AI, healthcare, and education.
          </p>
        </CardContent>
      </Card>
    </section>
  )
})

About.displayName = 'About'

export default About

