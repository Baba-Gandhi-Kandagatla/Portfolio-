import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
  setActiveSection: (section: string) => void
}

export default function Hero({ scrollToSection, setActiveSection }: HeroProps) {
  const handleButtonClick = (section: string) => {
    setActiveSection(section)
    setTimeout(() => {
      scrollToSection(section)
    }, 0)
  }

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Baba Gandhi Kandagatla
      </h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        B.Tech student specializing in Computer Science Engineering (AI/ML), with expertise in full-stack development and AI-driven applications.
      </p>
      <div className="flex justify-center space-x-4 mb-8">
        <Button asChild variant="outline" size="icon">
          <a href="https://github.com/Baba-Gandhi-Kandagatla" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="https://www.linkedin.com/in/baba-gandhi-kandagatla-828852319/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="mailto:babagandhikandagatla@gmail.com">
            <MailIcon className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href="tel:+918309103893">
            <PhoneIcon className="h-5 w-5" />
            <span className="sr-only">Mobile</span>
          </a>
        </Button>
      </div>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><Button onClick={() => handleButtonClick('about')} variant="link">About</Button></li>
          <li><Button onClick={() => handleButtonClick('skills')} variant="link">Skills</Button></li>
          <li><Button onClick={() => handleButtonClick('education')} variant="link">Education</Button></li>
          <li><Button onClick={() => handleButtonClick('projects')} variant="link">Projects</Button></li>
          {/* <li><Button onClick={() => handleButtonClick('terminal')} variant="link">Terminal</Button></li> */}
        </ul>
      </nav>
    </section>
  )
}

