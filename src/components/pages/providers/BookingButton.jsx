import { Button } from "@/components/ui/button"
import { Calendar, ChevronDown, ExternalLink, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Zocdoc } from "../../common/Zocdoc"

export default function BookingButton({ provider, className, variant = "default", size = "lg" }) {
  const hasPlatforms = provider.platforms && Object.keys(provider.platforms).length > 0

  if (!hasPlatforms) {
    return (
      <Button size={size} asChild className={className} variant={variant}>
        <a href="/contact">
          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
          Book Appointment
        </a>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={size} className={className} variant={variant}>
          <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
          Book Appointment
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2">
        <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          Select a Platform
        </DropdownMenuLabel>
        
        {provider.platforms?.zocdoc && (
          <div className="mb-2 p-1">
             <Zocdoc 
               provider_id={provider.platforms.zocdoc.provider_id} 
               practice_id={provider.platforms.zocdoc.practice_id}
               showScript={true}
             />
          </div>
        )}

        {provider.platforms?.alma && (
          <DropdownMenuItem asChild className="cursor-pointer">
            <a 
              href={provider.platforms.alma} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between w-full py-2 px-3 hover:bg-accent rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="font-medium">Book via ALMA</span>
              </div>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </DropdownMenuItem>
        )}

        {provider.platforms?.headway && (
          <DropdownMenuItem asChild className="cursor-pointer">
            <a 
              href={provider.platforms.headway} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between w-full py-2 px-3 hover:bg-accent rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span className="font-medium">Book via Headway</span>
              </div>
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <a href="/contact" className="flex items-center gap-2 w-full py-2 px-3">
             <Calendar className="h-4 w-4" />
             <span>General Inquiry</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
