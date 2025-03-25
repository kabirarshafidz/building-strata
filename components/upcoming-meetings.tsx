import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function UpcomingMeetings() {
  const meetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "April 15, 2025",
      time: "7:00 PM",
      location: "Building Common Room",
      type: "General Meeting",
    },
    {
      id: 2,
      title: "Committee Meeting",
      date: "May 2, 2025",
      time: "6:30 PM",
      location: "Online (Zoom)",
      type: "Committee Meeting",
    },
    {
      id: 3,
      title: "Budget Planning Session",
      date: "May 20, 2025",
      time: "7:00 PM",
      location: "Building Common Room",
      type: "Committee Meeting",
    },
  ]

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="flex flex-col space-y-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{meeting.title}</h3>
            <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
              {meeting.type}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {meeting.date} at {meeting.time}
          </div>
          <div className="text-sm text-muted-foreground">Location: {meeting.location}</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            <Button size="sm">Add to Calendar</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

