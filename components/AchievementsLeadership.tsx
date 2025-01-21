import { forwardRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AchievementsLeadershipProps {
  isActive: boolean
}

const achievements = [
  "1st Prize in CODE PURPLE Hackathon (IEEE at MJCET)",
  "1st Prize in Enginerd Hackathon (KMIT) for Software & Physics Categories",
  "Finalist in HackXcelerate Hackathon (Microsoft and Bytxl at CBIT)",
  "Winner in CHAT Olympiad (Chemistry Exam)",
  "Freelance Projects: Developed API connections to the Amazon Product Advertising API, earning ₹4,000 for the project.",
]

const leadershipEngagements = [
  "StreetCuse KMIT: Contributed to village adoption projects near Bhadrachalam, mentoring students and raising funds for community development.",
  "Public Speaking: Delivered Orientation Speeches for junior batches, welcoming and guiding new students.",
  "Vachan (Speakers Club): Active member of the Speakers Club, participating in events that foster communication, public speaking, and leadership skills.",
]

const AchievementsLeadership = forwardRef<HTMLElement, AchievementsLeadershipProps>(({ isActive }, ref) => {
  if (!isActive) return null

  return (
    <section ref={ref} id="achievements-leadership" className="scroll-mt-16 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Leadership</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <Badge variant="secondary" className="mt-1 mr-2 flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-2xl">Leadership & Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {leadershipEngagements.map((engagement, index) => (
                <li key={index} className="flex items-start">
                  <Badge variant="secondary" className="mt-1 mr-2 flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <span>{engagement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
})

AchievementsLeadership.displayName = "AchievementsLeadership"

export default AchievementsLeadership

