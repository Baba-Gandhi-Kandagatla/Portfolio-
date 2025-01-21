"use client"

import { useState, forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "SkillSage - Mock Interview System",
    date: "05-2023 to Present",
    idea: "A scalable mock interview system for students, tailored to resumes and dynamically adapting based on interviewee responses.",
    techStack: ["MERN Stack", "Node.js", "AI-based question generation"],
    innovation:
      "Supports real-time, personalized interviews at scale, helping colleges automate and improve their interview processes.",
    impact:
      "Enables efficient interview preparation for over 300 students simultaneously, with detailed analytics on individual performance, improving overall interview readiness by 40%.",
    color: "bg-blue-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=SkillSage+Dashboard",
      "/placeholder.svg?height=400&width=600&text=SkillSage+Interview",
      "/placeholder.svg?height=400&width=600&text=SkillSage+Analytics",
    ],
  },
  {
    title: "Breast Cancer Detection Using AI & VR",
    date: "01-2022 to 12-2022",
    idea: "An AI-driven system for detecting breast cancer in ultrasound images, visualized in a VR environment.",
    techStack: ["MERN Stack", "Flask", "Unreal Engine", "EfficientNet", "U-Net"],
    innovation:
      "Real-time AI-based classification and segmentation of ultrasound imagery, with immersive VR display for detailed analysis.",
    impact:
      "Provides an intuitive tool for medical professionals and students to engage with complex diagnostic data, improving detection rates by 30%.",
    color: "bg-pink-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Cancer+Detection+AI",
      "/placeholder.svg?height=400&width=600&text=VR+Visualization",
    ],
  },
  {
    title: "Interactive Quiz Generator",
    date: "03-2023 to 06-2023",
    idea: "A web platform that dynamically adjusts quiz difficulty based on user inputs, such as the selected topic and provided documents or internet searches.",
    techStack: ["MERN Stack", "Microsoft Phi 3.5 Mini"],
    innovation: "AI integration to create personalized quizzes that adapt in real-time to the user's skill level.",
    impact:
      "Enhances user engagement and learning by offering quizzes tailored to individual preferences, resulting in a 50% improvement in quiz completion rates and a better understanding of complex topics.",
    color: "bg-purple-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Quiz+Generator+UI",
      "/placeholder.svg?height=400&width=600&text=Quiz+Taking+Interface",
      "/placeholder.svg?height=400&width=600&text=Performance+Analytics",
    ],
  },
]

interface TimelineProps {
  isActive: boolean
}

const Timeline = forwardRef<HTMLElement, TimelineProps>(({ isActive }, ref) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})

  if (!isActive) return null

  const handlePrevImage = (projectTitle: string) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectTitle]:
        (prev[projectTitle] - 1 + projects.find((p) => p.title === projectTitle)!.images.length) %
        projects.find((p) => p.title === projectTitle)!.images.length,
    }))
  }

  const handleNextImage = (projectTitle: string) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectTitle]: (prev[projectTitle] + 1) % projects.find((p) => p.title === projectTitle)!.images.length,
    }))
  }

  return (
    <section ref={ref} id="projects" className="scroll-mt-16 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Project Timeline</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className={`${project.color} text-white`}>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <p className="text-sm font-semibold">{project.date}</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Idea</h4>
                    <p>{project.idea}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p>{project.innovation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Impact</h4>
                    <p>{project.impact}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={project.images[currentImageIndex[project.title] || 0]}
                      alt={`${project.title} preview`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <Button variant="secondary" size="icon" onClick={() => handlePrevImage(project.title)}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="icon" onClick={() => handleNextImage(project.title)}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
})

Timeline.displayName = "Timeline"

export default Timeline

