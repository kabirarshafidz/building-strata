import Link from "next/link"
import { Filter, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MaintenancePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Maintenance" text="Manage maintenance requests and scheduled services.">
        <Button asChild>
          <Link href="/maintenance/new">
            <Plus className="mr-2 h-4 w-4" />
            New Request
          </Link>
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="requests" className="space-y-4">
        <TabsList>
          <TabsTrigger value="requests">Maintenance Requests</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Services</TabsTrigger>
          <TabsTrigger value="contractors">Contractors</TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Maintenance Requests</CardTitle>
              <CardDescription>View and manage all maintenance requests from owners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Priorities</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex w-full items-center gap-2 sm:w-auto">
                    <Input placeholder="Search requests..." className="h-9 md:w-[200px] lg:w-[300px]" />
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-1 gap-4 p-4 font-medium md:grid-cols-6">
                    <div className="hidden md:block">ID</div>
                    <div className="md:col-span-2">Description</div>
                    <div className="hidden md:block">Submitted By</div>
                    <div className="hidden md:block">Status</div>
                    <div className="hidden md:block">Actions</div>
                  </div>
                  {maintenanceRequests.map((request) => (
                    <div key={request.id} className="grid grid-cols-1 gap-4 border-t p-4 md:grid-cols-6">
                      <div className="flex items-center gap-2 md:block">
                        <span className="font-medium md:hidden">ID:</span>
                        {request.id}
                      </div>
                      <div className="md:col-span-2">
                        <div className="font-medium">{request.title}</div>
                        <div className="text-sm text-muted-foreground">{request.description}</div>
                        <div className="mt-1 flex items-center gap-2 md:hidden">
                          <Badge className={getStatusColor(request.status)} variant="outline">
                            {request.status}
                          </Badge>
                          <Badge className={getPriorityColor(request.priority)} variant="outline">
                            {request.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:block">
                        <span className="font-medium md:hidden">Submitted By:</span>
                        <div>{request.submittedBy}</div>
                        <div className="text-sm text-muted-foreground">{request.date}</div>
                      </div>
                      <div className="hidden md:flex md:items-center md:gap-2">
                        <Badge className={getStatusColor(request.status)} variant="outline">
                          {request.status}
                        </Badge>
                        <Badge className={getPriorityColor(request.priority)} variant="outline">
                          {request.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/maintenance/${request.id}`}>View</Link>
                        </Button>
                        <Button size="sm">Update</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Services</CardTitle>
              <CardDescription>Regular maintenance services scheduled for the building</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 gap-4 p-4 font-medium md:grid-cols-5">
                  <div>Service</div>
                  <div>Contractor</div>
                  <div>Frequency</div>
                  <div>Next Due</div>
                  <div>Actions</div>
                </div>
                {scheduledServices.map((service) => (
                  <div key={service.id} className="grid grid-cols-1 gap-4 border-t p-4 md:grid-cols-5">
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-muted-foreground">{service.description}</div>
                    </div>
                    <div>{service.contractor}</div>
                    <div>{service.frequency}</div>
                    <div>{service.nextDue}</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View History
                      </Button>
                      <Button size="sm">Reschedule</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contractors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approved Contractors</CardTitle>
              <CardDescription>List of approved contractors for maintenance services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 gap-4 p-4 font-medium md:grid-cols-4">
                  <div>Name</div>
                  <div>Services</div>
                  <div>Contact</div>
                  <div>Actions</div>
                </div>
                {contractors.map((contractor) => (
                  <div key={contractor.id} className="grid grid-cols-1 gap-4 border-t p-4 md:grid-cols-4">
                    <div>
                      <div className="font-medium">{contractor.name}</div>
                      <div className="text-sm text-muted-foreground">{contractor.company}</div>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {contractor.services.map((service) => (
                          <Badge key={service} variant="outline">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div>{contractor.phone}</div>
                      <div className="text-sm text-muted-foreground">{contractor.email}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80"
    case "In Progress":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100/80"
    case "Completed":
      return "bg-green-100 text-green-800 hover:bg-green-100/80"
    case "Rejected":
      return "bg-red-100 text-red-800 hover:bg-red-100/80"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 hover:bg-red-100/80"
    case "Medium":
      return "bg-orange-100 text-orange-800 hover:bg-orange-100/80"
    case "Low":
      return "bg-green-100 text-green-800 hover:bg-green-100/80"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100/80"
  }
}

const maintenanceRequests = [
  {
    id: "REQ-001",
    title: "Lobby light replacement",
    description: "Three lights in the main lobby need replacement",
    submittedBy: "Unit 12",
    date: "March 24, 2025",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "REQ-002",
    title: "Pool gate repair",
    description: "The pool gate latch is broken and won't close properly",
    submittedBy: "Unit 5",
    date: "March 22, 2025",
    status: "Pending",
    priority: "High",
  },
  {
    id: "REQ-003",
    title: "Garage door malfunction",
    description: "The garage door is making loud noises when opening",
    submittedBy: "Unit 8",
    date: "March 20, 2025",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "REQ-004",
    title: "Hallway carpet cleaning",
    description: "The carpet on level 2 needs professional cleaning",
    submittedBy: "Unit 17",
    date: "March 18, 2025",
    status: "Pending",
    priority: "Low",
  },
  {
    id: "REQ-005",
    title: "Intercom system repair",
    description: "Intercom not working for units 10-15",
    submittedBy: "Unit 10",
    date: "March 15, 2025",
    status: "Completed",
    priority: "High",
  },
]

const scheduledServices = [
  {
    id: 1,
    name: "Garden Maintenance",
    description: "Regular gardening and landscaping services",
    contractor: "Green Thumb Landscaping",
    frequency: "Bi-weekly",
    nextDue: "April 2, 2025",
  },
  {
    id: 2,
    name: "Cleaning Services",
    description: "Common area cleaning and maintenance",
    contractor: "Sparkle Cleaning Co.",
    frequency: "Weekly",
    nextDue: "March 30, 2025",
  },
  {
    id: 3,
    name: "Elevator Maintenance",
    description: "Regular inspection and maintenance of elevators",
    contractor: "Lift Tech Services",
    frequency: "Quarterly",
    nextDue: "May 15, 2025",
  },
  {
    id: 4,
    name: "Fire Safety Inspection",
    description: "Inspection of fire alarms and equipment",
    contractor: "SafeGuard Fire Protection",
    frequency: "Annually",
    nextDue: "August 10, 2025",
  },
  {
    id: 5,
    name: "Pool Maintenance",
    description: "Chemical treatment and cleaning of swimming pool",
    contractor: "Blue Waters Pool Services",
    frequency: "Weekly",
    nextDue: "March 29, 2025",
  },
]

const contractors = [
  {
    id: 1,
    name: "John Williams",
    company: "Green Thumb Landscaping",
    services: ["Gardening", "Landscaping"],
    phone: "0412 345 678",
    email: "john@greenthumb.com.au",
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Sparkle Cleaning Co.",
    services: ["Cleaning", "Window Washing"],
    phone: "0423 456 789",
    email: "sarah@sparkleclean.com.au",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    company: "Lift Tech Services",
    services: ["Elevator Maintenance", "Repairs"],
    phone: "0434 567 890",
    email: "michael@lifttech.com.au",
  },
  {
    id: 4,
    name: "Emma Wilson",
    company: "SafeGuard Fire Protection",
    services: ["Fire Safety", "Inspections"],
    phone: "0445 678 901",
    email: "emma@safeguard.com.au",
  },
  {
    id: 5,
    name: "David Nguyen",
    company: "Blue Waters Pool Services",
    services: ["Pool Maintenance", "Repairs"],
    phone: "0456 789 012",
    email: "david@bluewaters.com.au",
  },
]

