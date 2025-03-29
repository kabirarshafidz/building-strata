import { Plus } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";

export default function MeetingsPage() {
  const meetings = [
    {
      id: 1,
      title: "Annual General Meeting 2025",
      date: "April 15, 2025",
      time: "7:00 PM",
      type: "General Meeting",
      location: "Building Common Room",
      status: "Scheduled",
      attendees: 45,
    },
    {
      id: 2,
      title: "Q2 Committee Meeting",
      date: "May 2, 2025",
      time: "6:30 PM",
      type: "Committee Meeting",
      location: "Online (Zoom)",
      status: "Draft",
      attendees: 0,
    },
    {
      id: 3,
      title: "Budget Planning Session",
      date: "May 20, 2025",
      time: "7:00 PM",
      type: "Committee Meeting",
      location: "Building Common Room",
      status: "Scheduled",
      attendees: 12,
    },
  ];

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Meetings"
        text="Schedule and manage strata meetings."
      >
        <Button asChild>
          <Link href="/meetings/new">
            <Plus className="mr-2 h-4 w-4" />
            Schedule Meeting
          </Link>
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Meetings</TabsTrigger>
          <TabsTrigger value="past">Past Meetings</TabsTrigger>
          <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Meetings</CardTitle>
              <CardDescription>
                View and manage upcoming meetings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[140px] sm:w-[180px]">
                        <SelectValue placeholder="Meeting Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="general">
                          General Meetings
                        </SelectItem>
                        <SelectItem value="committee">
                          Committee Meetings
                        </SelectItem>
                        <SelectItem value="special">
                          Special Meetings
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[140px] sm:w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex w-full items-center gap-2 sm:w-auto">
                    <Input
                      placeholder="Search meetings..."
                      className="h-9 w-full sm:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-1 gap-4 p-4 font-medium md:grid-cols-6">
                    <div className="md:col-span-2">Meeting</div>
                    <div className="hidden md:block">Type</div>
                    <div className="hidden md:block">Location</div>
                    <div className="hidden md:block">Status</div>
                    <div className="hidden md:block">Actions</div>
                  </div>
                  {meetings.map((meeting) => (
                    <div
                      key={meeting.id}
                      className="grid grid-cols-1 gap-4 border-t p-4 md:grid-cols-6"
                    >
                      <div className="md:col-span-2">
                        <div className="font-medium">{meeting.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {meeting.date} at {meeting.time}
                        </div>
                        <div className="md:hidden">
                          <Badge variant="outline" className="mr-2">
                            {meeting.type}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              meeting.status === "Draft"
                                ? "bg-yellow-100 text-yellow-800"
                                : ""
                            }
                          >
                            {meeting.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground md:hidden">
                          {meeting.location}
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <Badge variant="outline">{meeting.type}</Badge>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-sm">{meeting.location}</div>
                      </div>
                      <div className="hidden md:block">
                        <Badge
                          variant="outline"
                          className={
                            meeting.status === "Draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : ""
                          }
                        >
                          {meeting.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/meetings/${meeting.id}`}>View</Link>
                        </Button>
                        <Button size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}
