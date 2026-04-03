import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
  py?: string
}

export function Container({ 
  children, 
  className = "",
  py = "py-20 md:py-32"
}: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6", py, className)}>
      {children}
    </div>
  )
}