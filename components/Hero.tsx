import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"

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
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Baba Gandhi Kandagatla
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-muted-foreground">
        B.Tech student specializing in Computer Science Engineering (AI/ML), with expertise in full-stack development
        and AI-driven applications.
      </p>
      <div className="flex justify-center space-x-4 mb-10">
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="https://github.com/Baba-Gandhi-Kandagatla" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a
            href="https://www.linkedin.com/in/baba-gandhi-kandagatla-828852319/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="mailto:babagandhikandagatla@gmail.com">
            <MailIcon className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <a href="tel:+918309103893">
            <PhoneIcon className="h-5 w-5" />
            <span className="sr-only">Mobile</span>
          </a>
        </Button>
      </div>
      <nav>
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <Button onClick={() => handleButtonClick("about")} variant="ghost" className="text-lg">
              About
            </Button>
          </li>
          <li>
            <Button onClick={() => handleButtonClick("skills")} variant="ghost" className="text-lg">
              Skills
            </Button>
          </li>
          <li>
            <Button onClick={() => handleButtonClick("education")} variant="ghost" className="text-lg">
              Education
            </Button>
          </li>
          <li>
            <Button onClick={() => handleButtonClick("achievements-leadership")} variant="ghost" className="text-lg">
              Achievements & Leadership
            </Button>
          </li>
          <li>
            <Button onClick={() => handleButtonClick("projects")} variant="ghost" className="text-lg">
              Projects
            </Button>
          </li>
        </ul>
      </nav>
    </section>
  )
}

