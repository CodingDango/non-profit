import { Card, CardContent } from "@/components/ui/card"

interface ImpactCardProps {
  value: string
  label: string
  description: string
  imageAlt: string
}

export function ImpactCard({ value, label, description, imageAlt }: ImpactCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-background shadow-md">
      <CardContent className="flex gap-4 p-0">
        {/* Image placeholder */}
        <div 
          className="flex h-32 w-32 shrink-0 items-center justify-center bg-muted sm:h-36 sm:w-36"
          role="img"
          aria-label={imageAlt}
        >
          <span className="text-xs text-muted-foreground">Image</span>
        </div>
        
        {/* Content */}
        <div className="flex flex-col justify-center gap-1 py-4 pr-4">
          <span className="text-3xl font-bold text-primary sm:text-4xl">
            {value}
          </span>
          <span className="text-base font-semibold text-foreground">
            {label}
          </span>
          <span className="text-sm text-muted-foreground">
            {description}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
