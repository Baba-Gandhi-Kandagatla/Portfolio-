'use client'

import { useState, forwardRef } from 'react'
@typescript-eslint/no-unused-vars
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageIcon } from 'lucide-react'
import ImageModal from './ImageModal'

const projects = [
  {
    title: "SkillSage - Mock Interview System",
    date: "2023",
    description: "A scalable mock interview system for students, tailored to resumes and dynamically adapting based on interviewee responses.",
    techStack: ["MERN Stack", "Node.js", "AI"],
    color: "bg-blue-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=SkillSage+1",
      "/placeholder.svg?height=400&width=600&text=SkillSage+2",
      "/placeholder.svg?height=400&width=600&text=SkillSage+3",
    ],
  },
  {
    title: "Breast Cancer Detection Using AI & VR",
    date: "2022",
    description: "An AI-driven system for detecting breast cancer in ultrasound images, visualized in a VR environment.",
    techStack: ["MERN Stack", "Flask", "Unreal Engine", "EfficientNet", "U-Net"],
    color: "bg-pink-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Cancer+Detection+1",
      "/placeholder.svg?height=400&width=600&text=Cancer+Detection+2",
    ],
  },
  {
    title: "Interactive Quiz Generator",
    date: "2023",
    description: "A web platform that dynamically adjusts quiz difficulty based on user inputs, such as the selected topic and provided documents or internet searches.",
    techStack: ["MERN Stack", "Microsoft Phi 3.5 Mini"],
    color: "bg-purple-500",
    images: [
      "/placeholder.svg?height=400&width=600&text=Quiz+Generator+1",
      "/placeholder.svg?height=400&width=600&text=Quiz+Generator+2",
      "/placeholder.svg?height=400&width=600&text=Quiz+Generator+3",
    ],
  },
]

interface TimelineProps {
  isActive: boolean
}

const Timeline = forwardRef<HTMLElement, TimelineProps>(({ isActive }, ref) => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null)

  if (!isActive) return null

  return (
    <section ref={ref} id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Project Timeline</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row">
            <div className="flex-none w-full md:w-64 mb-4 md:mb-0">
              <div className="h-full flex items-center justify-center md:justify-end">
                <span className={`${project.color} text-white text-lg font-semibold py-2 px-4 rounded`}>
                  {project.date}
                </span>
              </div>
            </div>
            <div className="flex-grow pl-0 md:pl-8 relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" style={{ left: '-4px' }}></div>
              <div className="hidden md:block absolute left-0 top-6 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700" style={{ left: '-6px' }}></div>
              <Card className="w-full transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{project.title}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedImages(project.images)}
                      aria-label={`View ${project.title} images`}
                    >
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      <ImageModal images={selectedImages} onClose={() => setSelectedImages(null)} />
    </section>
  )
})

Timeline.displayName = 'Timeline'

export default Timeline

