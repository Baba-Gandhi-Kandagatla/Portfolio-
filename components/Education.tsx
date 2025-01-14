import { forwardRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    institution: "Keshav Memorial Institute of Technology",
    degree: "B.Tech in Computer Science Engineering (AI/ML)",
    period: "2022–2026 (Expected)",
    grade: "CGPA: 8.4/10.0",
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate (MPC)",
    period: "2020–2022",
    grade: "Marks: 885",
  },
  {
    institution: "Sri Chaitanya School",
    degree: "SSC",
    period: "2020",
    grade: "CGPA: 10/10",
  },
]

interface EducationProps {
  isActive: boolean
}

const Education = forwardRef<HTMLElement, EducationProps>(({ isActive }, ref) => {
  if (!isActive) return null

  return (
    <section ref={ref} id="education" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.institution}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{edu.degree}</p>
              <p>{edu.period}</p>
              <p>{edu.grade}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
})

Education.displayName = 'Education'

export default Education

