import { Plus, Filter, Download, Share2 } from "lucide-react";
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

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: "Strata By-Laws",
      category: "Legal",
      uploadedBy: "Admin",
      uploadDate: "2024-01-15",
      fileSize: "2.4 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Annual Financial Report 2024",
      category: "Financial",
      uploadedBy: "Treasurer",
      uploadDate: "2024-02-28",
      fileSize: "1.8 MB",
      type: "PDF",
    },
    {
      id: 3,
      title: "Building Insurance Certificate",
      category: "Insurance",
      uploadedBy: "Secretary",
      uploadDate: "2024-03-01",
      fileSize: "956 KB",
      type: "PDF",
    },
    {
      id: 4,
      title: "Maintenance Schedule 2024",
      category: "Maintenance",
      uploadedBy: "Building Manager",
      uploadDate: "2024-01-10",
      fileSize: "1.2 MB",
      type: "XLSX",
    },
  ];

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Documents"
        text="Access and manage strata scheme documents."
      >
        <Button asChild>
          <Link href="/documents/upload">
            <Plus className="mr-2 h-4 w-4" />
            Upload Document
          </Link>
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Library</CardTitle>
              <CardDescription>
                Access and manage all strata scheme documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                  <div className="flex w-full items-center gap-2 sm:w-auto">
                    <Input
                      placeholder="Search documents..."
                      className="h-9 md:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="grid grid-cols-1 gap-4 p-4 font-medium md:grid-cols-6">
                    <div className="md:col-span-2">Document</div>
                    <div className="hidden md:block">Category</div>
                    <div className="hidden md:block">Uploaded By</div>
                    <div className="hidden md:block">Date</div>
                    <div className="hidden md:block">Actions</div>
                  </div>
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="grid grid-cols-1 gap-4 border-t p-4 md:grid-cols-6"
                    >
                      <div className="md:col-span-2">
                        <div className="font-medium">{doc.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {doc.fileSize} • {doc.type}
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <Badge variant="outline">{doc.category}</Badge>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-sm">{doc.uploadedBy}</div>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-sm">{doc.uploadDate}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
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
