import type React from "react"

import { cn } from "@/lib/utils"

interface DashboardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children, className, ...props }: DashboardHeaderProps) {
  return (
    <div
      className={cn("mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className)}
      {...props}
    >
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h1>
        {text && <p className="text-sm text-muted-foreground sm:text-base">{text}</p>}
      </div>
      {children}
    </div>
  )
}

