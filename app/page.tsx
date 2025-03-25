import Link from "next/link"
import {
  Building,
  Calendar,
  FileText,
  MessageSquare,
  Users,
  Wallet,
  ArrowRight,
  Bell,
  BarChart3,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingMeetings } from "@/components/upcoming-meetings"
import { MaintenanceRequests } from "@/components/maintenance-requests"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <>
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text="Welcome to your strata management portal.">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <Badge className="ml-2 rounded-full px-1" variant="secondary">
                3
              </Badge>
            </Button>
            <Button size="sm">
              <BarChart3 className="mr-2 h-4 w-4" />
              Reports
            </Button>
          </div>
        </DashboardHeader>

        <div className="dashboard-grid">
          <Card className="stat-card card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
              <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                <Wallet className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,231.89</div>
              <div className="flex items-center pt-1">
                <span className="text-xs font-medium text-green-600 dark:text-green-400">+2.5%</span>
                <span className="ml-1 text-xs text-muted-foreground">from last quarter</span>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-xs" asChild>
                <Link href="/finances/admin-fund" className="flex items-center">
                  View details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="stat-card card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
              <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                <Building className="h-4 w-4 text-purple-600 dark:text-purple-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$142,857.00</div>
              <div className="flex items-center pt-1">
                <span className="text-xs font-medium text-green-600 dark:text-green-400">+18.2%</span>
                <span className="ml-1 text-xs text-muted-foreground">from last year</span>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-xs" asChild>
                <Link href="/finances/capital-works" className="flex items-center">
                  View details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="stat-card card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
              <div className="rounded-full bg-amber-100 p-2 dark:bg-amber-900">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-300" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Badge
                  variant="outline"
                  className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-900/30 dark:text-yellow-400"
                >
                  3 pending
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-900/30 dark:text-blue-400"
                >
                  4 in progress
                </Badge>
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-xs" asChild>
                <Link href="/maintenance" className="flex items-center">
                  View all
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 card-hover">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your strata scheme</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link href="/activity">View all activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="col-span-3 card-hover">
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>Scheduled committee and general meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingMeetings />
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link href="/meetings">View all meetings</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 card-hover">
            <CardHeader>
              <CardTitle>Maintenance Requests</CardTitle>
              <CardDescription>Recent maintenance issues reported by owners</CardDescription>
            </CardHeader>
            <CardContent>
              <MaintenanceRequests />
            </CardContent>
            <CardFooter className="border-t bg-muted/50 px-6 py-3">
              <Button variant="ghost" size="sm" className="ml-auto" asChild>
                <Link href="/maintenance">View all requests</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="col-span-3 card-hover">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks for committee members</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Button className="w-full justify-start" asChild>
                <Link href="/meetings/new">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Meeting
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/notices/new">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Notice
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/directory">
                  <Users className="mr-2 h-4 w-4" />
                  Owner Directory
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link href="/documents">
                  <FileText className="mr-2 h-4 w-4" />
                  View Documents
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </DashboardShell>
    </>
  )
}

