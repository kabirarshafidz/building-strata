"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building, FileText, Home, Menu, MessageSquare, Settings, Users, Wallet } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserNav } from "@/components/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/finances",
      label: "Finances",
      icon: Wallet,
      active: pathname === "/finances" || pathname.startsWith("/finances/"),
    },
    {
      href: "/maintenance",
      label: "Maintenance",
      icon: Building,
      active: pathname === "/maintenance" || pathname.startsWith("/maintenance/"),
    },
    {
      href: "/meetings",
      label: "Meetings",
      icon: MessageSquare,
      active: pathname === "/meetings" || pathname.startsWith("/meetings/"),
    },
    {
      href: "/documents",
      label: "Documents",
      icon: FileText,
      active: pathname === "/documents" || pathname.startsWith("/documents/"),
    },
    {
      href: "/directory",
      label: "Directory",
      icon: Users,
      active: pathname === "/directory" || pathname.startsWith("/directory/"),
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings" || pathname.startsWith("/settings/"),
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="px-7">
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  <Building className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold">Strata Portal</span>
              </Link>
            </div>
            <nav className="mt-8 flex flex-col gap-4 px-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  )}
                >
                  <route.icon className="h-4 w-4" />
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-8 hidden items-center md:flex">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Building className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold">Strata Management Portal</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors",
                route.active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}

