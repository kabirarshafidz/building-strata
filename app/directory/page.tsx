"use client";

import { Plus, Filter, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
import { toast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DirectoryPage() {
  interface Resident {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    unitNumber: string;
    residentType: "Owner" | "Tenant" | "Family Member";
  }

  const [residents, setResidents] = useState<Resident[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [residentType, setResidentType] = useState("all");

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    try {
      const response = await fetch("/api/directory");
      if (!response.ok) throw new Error("Failed to fetch residents");
      const data = await response.json();
      setResidents(data);
    } catch (error) {
      console.error("Error fetching residents:", error);
      toast({
        title: "Error",
        description: "Failed to load residents. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/directory?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete resident");

      toast({
        title: "Success",
        description: "Resident deleted successfully.",
      });

      fetchResidents();
    } catch (error) {
      console.error("Error deleting resident:", error);
      toast({
        title: "Error",
        description: "Failed to delete resident. Please try again.",
        variant: "destructive",
      });
    }
  };

  const filteredResidents = residents.filter((resident: Resident) => {
    const matchesSearch =
      resident.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resident.unitNumber?.includes(searchTerm);

    const matchesType =
      residentType === "all" || resident.residentType === residentType;

    return matchesSearch && matchesType;
  });

  if (isLoading) {
    return (
      <DashboardShell>
        <DashboardHeader heading="Directory" text="Loading residents..." />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Directory"
        text="Manage owners and residents information."
      >
        <Button asChild>
          <Link href="/directory/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Resident
          </Link>
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Residents</TabsTrigger>
          <TabsTrigger value="Owner">Owners</TabsTrigger>
          <TabsTrigger value="Tenant">Tenants</TabsTrigger>
          <TabsTrigger value="Family Member">Family Members</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resident Directory</CardTitle>
              <CardDescription>
                View and manage all residents and their contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <Select defaultValue="all" onValueChange={setResidentType}>
                      <SelectTrigger className="w-[140px] sm:w-[180px]">
                        <SelectValue placeholder="Resident Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="Owner">Owners</SelectItem>
                        <SelectItem value="Tenant">Tenants</SelectItem>
                        <SelectItem value="Family Member">
                          Family Member
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex w-full items-center gap-2 sm:w-auto">
                    <Input
                      placeholder="Search directory..."
                      className="h-9 w-full sm:w-[200px] lg:w-[300px]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-1 gap-4 p-4 font-medium md:grid-cols-6">
                    <div className="md:col-span-2">Resident</div>
                    <div className="hidden md:block">Unit</div>
                    <div className="hidden md:block">Type</div>
                    <div className="hidden md:block">Contact</div>
                    <div className="hidden md:block">Actions</div>
                  </div>
                  {filteredResidents.map((resident) => (
                    <div
                      key={resident._id}
                      className="grid grid-cols-1 gap-4 border-t p-4 md:grid-cols-6"
                    >
                      <div className="md:col-span-2">
                        <div className="font-medium">
                          {resident.firstName} {resident.lastName}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {resident.email}
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-sm">
                          Unit {resident.unitNumber}
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <Badge variant="outline">{resident.residentType}</Badge>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-sm">{resident.phone}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/directory/${resident._id}`}>Edit</Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Resident
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this resident?
                                This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(resident._id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
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
