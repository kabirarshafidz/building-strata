import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SC",
      },
      action: "approved a maintenance request",
      target: "Lobby light replacement",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Michael Wong",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MW",
      },
      action: "uploaded a document",
      target: "Annual Financial Statement 2024",
      time: "Yesterday",
    },
    {
      id: 3,
      user: {
        name: "Jessica Taylor",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JT",
      },
      action: "scheduled a meeting",
      target: "Quarterly Committee Meeting",
      time: "2 days ago",
    },
    {
      id: 4,
      user: {
        name: "David Nguyen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DN",
      },
      action: "paid levy",
      target: "Q2 Administration Fund",
      time: "3 days ago",
    },
    {
      id: 5,
      user: {
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EW",
      },
      action: "submitted a maintenance request",
      target: "Pool gate repair",
      time: "4 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-muted/50">
          <Avatar className="h-10 w-10 border border-primary/10">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback className="bg-primary/10 text-primary">{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name} <span className="text-muted-foreground">{activity.action}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.target}</p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}

