import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function MaintenanceRequests() {
  const requests = [
    {
      id: 1,
      title: "Lobby light replacement",
      description: "Three lights in the main lobby need replacement",
      submittedBy: "Unit 12",
      date: "March 24, 2025",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: 2,
      title: "Pool gate repair",
      description: "The pool gate latch is broken and won't close properly",
      submittedBy: "Unit 5",
      date: "March 22, 2025",
      status: "Pending",
      priority: "High",
    },
    {
      id: 3,
      title: "Garage door malfunction",
      description: "The garage door is making loud noises when opening",
      submittedBy: "Unit 8",
      date: "March 20, 2025",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: 4,
      title: "Hallway carpet cleaning",
      description: "The carpet on level 2 needs professional cleaning",
      submittedBy: "Unit 17",
      date: "March 18, 2025",
      status: "Pending",
      priority: "Low",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "In Progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-900/30 dark:text-blue-400"
      case "Completed":
        return "bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900/30 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 hover:bg-red-100/80 dark:bg-red-900/30 dark:text-red-400"
      case "Medium":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100/80 dark:bg-orange-900/30 dark:text-orange-400"
      case "Low":
        return "bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900/30 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div key={request.id} className="rounded-lg border p-4 transition-colors hover:bg-muted/50">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{request.title}</h3>
            <div className="flex gap-2">
              <Badge className={getStatusColor(request.status)} variant="outline">
                {request.status}
              </Badge>
              <Badge className={getPriorityColor(request.priority)} variant="outline">
                {request.priority}
              </Badge>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{request.description}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Submitted by: {request.submittedBy}</span>
            <span>{request.date}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="outline" size="sm">
              View Details
            </Button>
            <Button size="sm">Update Status</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

