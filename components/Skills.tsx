import { forwardRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "Dart"],
  },
  {
    title: "Web Development",
    skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Flask", "FastAPI", "HTML", "CSS"],
  },
  {
    title: "Data Science & Machine Learning",
    skills: ["Decision Trees", "Random Forest", "KNN", "SVM", "MLP", "CNN", "EfficientNet", "U-Net", "ResNet", "YOLO", "R-CNN", "InceptionNet"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Git", "GitHub", "Docker", "PyCharm", "Android Studio", "Maven", "Jenkins", "Unreal Engine", "AWS EC2"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Teamwork", "Communication", "Problem-Solving"],
  },
]

interface SkillsProps {
  isActive: boolean
}

const Skills = forwardRef<HTMLElement, SkillsProps>(({ isActive }, ref) => {
  if (!isActive) return null

  return (
    <section ref={ref} id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
})

Skills.displayName = 'Skills'

export default Skills

