import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Globe, Laptop } from "lucide-react"

export default function PatientPortal({
    className,
    variant = "default",
    size = "lg"
}: {
    className?: string
    variant?: "default" | "secondary" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg" | "icon"
}) {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size={size} className={className} variant={variant}>
                        <Laptop className="h-4 w-4 mr-2" aria-hidden="true" />                        
                        Access Patient Portal
                        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-2">
                    <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Select a Platform
                    </DropdownMenuLabel>

                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a 
                            href="https://accounts.charmtracker.com/signin?hide_signup=true&hide_secure=true&hide_gsignup=true&servicename=charmphr&serviceurl=https%3A%2F%2Fphr2.charmtracker.com%2Fmain.do" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between w-full py-2 px-3 hover:bg-accent rounded-md transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-primary" />
                                <span className="font-medium">CHARM EHR</span>
                            </div>
                            <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a 
                            href="https://secure.helloalma.com/client-portal/login/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between w-full py-2 px-3 hover:bg-accent rounded-md transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-primary" />
                                <span className="font-medium">ALMA</span>
                            </div>
                            <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="cursor-pointer">
                        <a 
                            href="https://headway.co/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between w-full py-2 px-3 hover:bg-accent rounded-md transition-colors"
                        >
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-primary" />
                                <span className="font-medium">Headway</span>
                            </div>
                            <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                    </DropdownMenuItem>                    
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}