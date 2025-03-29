import {
  ArrowUpDown,
  Download,
  Filter,
  FileText,
  Wallet,
  Building,
  CreditCard,
} from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function FinancesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Finances"
        text="Manage your strata scheme's financial accounts."
      >
        <div className="flex items-center gap-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </DashboardHeader>

      <Tabs defaultValue="admin-fund" className="space-y-4">
        <TabsList>
          <TabsTrigger value="admin-fund">Administration Fund</TabsTrigger>
          <TabsTrigger value="capital-works">Capital Works Fund</TabsTrigger>
          <TabsTrigger value="levies">Levy Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="admin-fund" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Administration Fund Summary</CardTitle>
              <CardDescription>
                Current balance and recent transactions for day-to-day expenses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Current Balance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$24,231.89</div>
                  </CardContent>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Income (YTD)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$48,500.00</div>
                  </CardContent>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Expenses (YTD)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$32,768.11</div>
                  </CardContent>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Budget Remaining</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$15,731.89</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-medium">Recent Transactions</h3>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Input
                      placeholder="Search transactions..."
                      className="h-9 w-full sm:w-[200px]"
                    />
                  </div>
                </div>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div className="flex items-center gap-2">
                      Date
                      <ArrowUpDown className="h-4 w-4 cursor-pointer opacity-50 hover:opacity-100" />
                    </div>
                    <div className="flex items-center gap-2">
                      Description
                      <ArrowUpDown className="h-4 w-4 cursor-pointer opacity-50 hover:opacity-100" />
                    </div>
                    <div className="flex items-center gap-2">
                      Category
                      <ArrowUpDown className="h-4 w-4 cursor-pointer opacity-50 hover:opacity-100" />
                    </div>
                    <div className="flex items-center gap-2">
                      Amount
                      <ArrowUpDown className="h-4 w-4 cursor-pointer opacity-50 hover:opacity-100" />
                    </div>
                    <div>Receipt</div>
                  </div>
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="grid grid-cols-5 gap-4 border-t p-4 transition-colors hover:bg-muted/50"
                    >
                      <div>{transaction.date}</div>
                      <div>{transaction.description}</div>
                      <div>
                        <Badge variant="outline" className="bg-muted">
                          {transaction.category}
                        </Badge>
                      </div>
                      <div
                        className={
                          transaction.amount.startsWith("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {transaction.amount}
                      </div>
                      <div>
                        {transaction.receipt && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" />
                            View
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="capital-works" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Capital Works Fund Summary</CardTitle>
              <CardDescription>
                Current balance and planned expenditures for major repairs and
                improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Current Balance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$142,857.00</div>
                  </CardContent>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Annual Contribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$36,000.00</div>
                  </CardContent>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>Planned Expenditure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$85,000.00</div>
                  </CardContent>
                </Card>
                <Card className="stat-card">
                  <CardHeader className="pb-2">
                    <CardDescription>10-Year Forecast</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$320,000.00</div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">Planned Capital Works</h3>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>Project</div>
                    <div>Estimated Cost</div>
                    <div>Planned Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {capitalProjects.map((project) => (
                    <div
                      key={project.id}
                      className="grid grid-cols-5 gap-4 border-t p-4 transition-colors hover:bg-muted/50"
                    >
                      <div>{project.name}</div>
                      <div>{project.cost}</div>
                      <div>{project.date}</div>
                      <div>
                        <Badge
                          variant="outline"
                          className={
                            project.status === "Approved"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : project.status === "Under Review"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="levies" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Levy Payments</CardTitle>
              <CardDescription>
                Track levy payments from all unit owners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-medium">Payment Status</h3>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Input
                      placeholder="Search by unit..."
                      className="h-9 w-full sm:w-[200px]"
                    />
                  </div>
                </div>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                    <div>Unit</div>
                    <div>Owner</div>
                    <div>Amount Due</div>
                    <div>Due Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {levyPayments.map((payment) => (
                    <div
                      key={payment.id}
                      className="grid grid-cols-6 gap-4 border-t p-4 transition-colors hover:bg-muted/50"
                    >
                      <div>{payment.unit}</div>
                      <div>{payment.owner}</div>
                      <div>{payment.amount}</div>
                      <div>{payment.dueDate}</div>
                      <div>
                        <Badge
                          className={
                            payment.status === "Paid"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : payment.status === "Overdue"
                              ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </div>
                      <div>
                        <Button variant="outline" size="sm">
                          Send Reminder
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

const transactions = [
  {
    id: 1,
    date: "2025-03-25",
    description: "Cleaning Services",
    category: "Maintenance",
    amount: "-$450.00",
    receipt: true,
  },
  {
    id: 2,
    date: "2025-03-20",
    description: "Levy Payment - Unit 8",
    category: "Income",
    amount: "+$750.00",
    receipt: false,
  },
  {
    id: 3,
    date: "2025-03-15",
    description: "Gardening Services",
    category: "Maintenance",
    amount: "-$320.00",
    receipt: true,
  },
  {
    id: 4,
    date: "2025-03-10",
    description: "Electricity Bill",
    category: "Utilities",
    amount: "-$285.75",
    receipt: true,
  },
  {
    id: 5,
    date: "2025-03-05",
    description: "Levy Payment - Unit 12",
    category: "Income",
    amount: "+$750.00",
    receipt: false,
  },
];

const capitalProjects = [
  {
    id: 1,
    name: "Roof Replacement",
    cost: "$45,000.00",
    date: "Q3 2025",
    status: "Approved",
  },
  {
    id: 2,
    name: "Exterior Painting",
    cost: "$28,000.00",
    date: "Q1 2026",
    status: "Planned",
  },
  {
    id: 3,
    name: "Elevator Modernization",
    cost: "$65,000.00",
    date: "Q4 2026",
    status: "Under Review",
  },
  {
    id: 4,
    name: "Pool Resurfacing",
    cost: "$12,000.00",
    date: "Q2 2025",
    status: "Approved",
  },
];

const levyPayments = [
  {
    id: 1,
    unit: "Unit 1",
    owner: "John Smith",
    amount: "$750.00",
    dueDate: "March 31, 2025",
    status: "Paid",
  },
  {
    id: 2,
    unit: "Unit 2",
    owner: "Sarah Johnson",
    amount: "$750.00",
    dueDate: "March 31, 2025",
    status: "Pending",
  },
  {
    id: 3,
    unit: "Unit 3",
    owner: "Michael Wong",
    amount: "$750.00",
    dueDate: "March 31, 2025",
    status: "Paid",
  },
  {
    id: 4,
    unit: "Unit 4",
    owner: "Emma Wilson",
    amount: "$750.00",
    dueDate: "March 31, 2025",
    status: "Overdue",
  },
  {
    id: 5,
    unit: "Unit 5",
    owner: "David Nguyen",
    amount: "$750.00",
    dueDate: "March 31, 2025",
    status: "Paid",
  },
];
