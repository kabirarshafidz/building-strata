import { Bell, Building, Lock, Mail, Shield, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage your account settings and preferences."
      />

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            Security
          </TabsTrigger>
          <TabsTrigger value="building" className="flex items-center gap-2">
            Building
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and contact details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="emailNotifs"
                    className="flex flex-col space-y-1"
                  >
                    <span>Email Notifications</span>
                    <span className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </span>
                  </Label>
                  <Switch id="emailNotifs" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="smsNotifs"
                    className="flex flex-col space-y-1"
                  >
                    <span>SMS Notifications</span>
                    <span className="text-sm text-muted-foreground">
                      Receive notifications via SMS
                    </span>
                  </Label>
                  <Switch id="smsNotifs" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="maintenanceNotifs"
                    className="flex flex-col space-y-1"
                  >
                    <span>Maintenance Updates</span>
                    <span className="text-sm text-muted-foreground">
                      Updates about maintenance requests
                    </span>
                  </Label>
                  <Switch id="maintenanceNotifs" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <Label
                    htmlFor="meetingNotifs"
                    className="flex flex-col space-y-1"
                  >
                    <span>Meeting Reminders</span>
                    <span className="text-sm text-muted-foreground">
                      Reminders for upcoming meetings
                    </span>
                  </Label>
                  <Switch id="meetingNotifs" />
                </div>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and authentication settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="Enter current password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>
                <Button>Update Password</Button>
              </div>
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="2fa" className="flex flex-col space-y-1">
                    <span>Two-Factor Authentication</span>
                    <span className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </span>
                  </Label>
                  <Switch id="2fa" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="building" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Building Settings</CardTitle>
              <CardDescription>
                Configure building-specific settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="buildingName">Building Name</Label>
                  <Input id="buildingName" placeholder="Enter building name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buildingAddress">Building Address</Label>
                  <Input
                    id="buildingAddress"
                    placeholder="Enter building address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buildingContact">Building Contact</Label>
                  <Input
                    id="buildingContact"
                    placeholder="Enter building contact"
                  />
                </div>
                <Button>Save Building Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}
