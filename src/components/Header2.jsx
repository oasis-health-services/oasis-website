import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown, BookOpen, Video, HelpCircle, Heart, Smartphone, FileText, AlertTriangle, Users, Handshake, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import OptimizedImage from "./OptimizedImage"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Conditions", href: "/conditions" },
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/providers" },
    { name: "Patients", href: "/patients" },
    { name: "Shop", href: "https://shop.oasishealthservices.com", external: true },
    { name: "Contact", href: "/contact" }
]

const resourcesMenu = {
    learn: [
        { name: "Blog", href: "/resources/blog", icon: BookOpen, description: "Articles and insights on mental wellness" },
        { name: "Video Library", href: "/resources/videos", icon: Video, description: "Educational videos from our providers" },
        { name: "FAQ", href: "/resources/faq", icon: HelpCircle, description: "Answers to common questions" },
    ],
    patientTools: [
        { name: "Self-Assessments", href: "/assessments", icon: ClipboardCheck, description: "PHQ-9, GAD-7, and more screeners" },
        { name: "Self-Care Toolkit", href: "/resources/self-care", icon: Heart, description: "Exercises and coping strategies" },
        { name: "Telehealth Guide", href: "/resources/telehealth", icon: Smartphone, description: "How to prepare for virtual visits" },
    ],
    support: [
        { name: "Crisis Resources", href: "/resources/crisis", icon: AlertTriangle, description: "24/7 hotlines and emergency help" },
        { name: "Support Groups", href: "/resources/support-groups", icon: Users, description: "Local and online communities" },
        { name: "For Providers", href: "/for-providers", icon: Handshake, description: "Referrals and partnerships" },
    ],
}

const mobileResources = [
    { name: "Self-Assessments", href: "/assessments" },
    { name: "Blog", href: "/resources/blog" },
    { name: "Video Library", href: "/resources/videos" },
    { name: "FAQ", href: "/resources/faq" },
    { name: "Self-Care Toolkit", href: "/resources/self-care" },
    { name: "Telehealth Guide", href: "/resources/telehealth" },
    { name: "Crisis Resources", href: "/resources/crisis" },
    { name: "For Providers", href: "/for-providers" },
]

export default function Header({ currentPath }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [resourcesOpen, setResourcesOpen] = useState(false)

    const isActive = (href) => {
        if (href === '/') return currentPath === '/';
        // Handle external links or other prefixes if necessary
        if (!href.startsWith('/')) return false;
        return currentPath === href || currentPath.startsWith(href + '/');
    };

    // Check if any resource sub-item is active
    const isResourceActive = Object.values(resourcesMenu).flat().some(item => isActive(item.href)) || isActive('/resources');

    return (
        <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex lg:flex-1">
                    {/* <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-serif font-bold text-lg">O</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg font-semibold text-foreground leading-tight">Oasis</span>
                            <span className="text-xs text-muted-foreground leading-tight">Health Services</span>
                        </div>
                    </a> */}

                    <a href="/" className="flex items-center">
                        <OptimizedImage
                            src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/2245c4f857f206a62cf1e8d030229d5c.png"
                            alt="Oasis Health Services Logo"
                            className="h-12 w-auto"
                            priority={true}
                            loading="eager"
                        />
                    </a>

                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:gap-x-1">
                    {navigation.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium transition-colors relative",
                                    active ? "text-primary" : "text-muted-foreground hover:text-primary"
                                )}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                            >
                                {item.name}
                                {active && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}

                    {/* Resources Mega Menu */}
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={cn(
                                    "!bg-transparent hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:focus:!bg-transparent transition-colors relative px-3",
                                    isResourceActive ? "text-primary" : "text-muted-foreground hover:text-primary font-medium",
                                    "data-[state=open]:text-primary"
                                )}>
                                    Resources
                                    {isResourceActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[600px] p-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            {/* Learn Column */}
                                            <div className="space-y-3">
                                                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider px-2">Learn</h3>
                                                <ul className="space-y-1">
                                                    {resourcesMenu.learn.map((item) => (
                                                        <li key={item.name}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={item.href}
                                                                    className="flex items-start gap-3 rounded-md p-2 hover:bg-secondary transition-colors"
                                                                >
                                                                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                                        <item.icon className="h-4 w-4 text-primary" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-sm font-medium text-foreground">{item.name}</div>
                                                                        <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Patient Tools Column */}
                                            <div className="space-y-3">
                                                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider px-2">Patient Tools</h3>
                                                <ul className="space-y-1">
                                                    {resourcesMenu.patientTools.map((item) => (
                                                        <li key={item.name}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={item.href}
                                                                    className="flex items-start gap-3 rounded-md p-2 hover:bg-secondary transition-colors"
                                                                >
                                                                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                                        <item.icon className="h-4 w-4 text-primary" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-sm font-medium text-foreground">{item.name}</div>
                                                                        <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Support Column */}
                                            <div className="space-y-3">
                                                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider px-2">Support</h3>
                                                <ul className="space-y-1">
                                                    {resourcesMenu.support.map((item) => (
                                                        <li key={item.name}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={item.href}
                                                                    className={cn(
                                                                        "flex items-start gap-3 rounded-md p-2 hover:bg-secondary transition-colors",
                                                                        item.name === "Crisis Resources" && "hover:bg-red-50"
                                                                    )}
                                                                >
                                                                    <div className={cn(
                                                                        "w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5",
                                                                        item.name === "Crisis Resources" ? "bg-red-100" : "bg-primary/10"
                                                                    )}>
                                                                        <item.icon className={cn(
                                                                            "h-4 w-4",
                                                                            item.name === "Crisis Resources" ? "text-red-600" : "text-primary"
                                                                        )} />
                                                                    </div>
                                                                    <div>
                                                                        <div className={cn(
                                                                            "text-sm font-medium",
                                                                            item.name === "Crisis Resources" ? "text-red-700" : "text-foreground"
                                                                        )}>{item.name}</div>
                                                                        <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* View All Resources Link */}
                                                <div className="pt-2 px-2">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            href="/resources"
                                                            className="text-xs font-medium text-primary hover:underline"
                                                        >
                                                            View All Resources &rarr;
                                                        </a>
                                                    </NavigationMenuLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 lg:items-center">
                    <a href="tel:+15093816035" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1.5">
                        <Phone className="h-4 w-4" />
                        <span>(509) 381-6035</span>
                    </a>
                    <Button asChild>
                        <a href="/start">Get Started</a>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-border">
                    <div className="space-y-1 px-6 py-4">
                        {navigation.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "block py-2 text-base font-medium transition-colors",
                                        active ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                >
                                    {item.name}
                                </a>
                            );
                        })}

                        {/* Mobile Resources Accordion */}
                        <div className="py-2">
                            <button
                                type="button"
                                className={cn(
                                    "flex items-center justify-between w-full text-base font-medium transition-colors",
                                    isResourceActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                                )}
                                onClick={() => setResourcesOpen(!resourcesOpen)}
                            >
                                <span>Resources</span>
                                <ChevronDown className={cn("h-4 w-4 transition-transform", resourcesOpen && "rotate-180")} />
                            </button>
                            {resourcesOpen && (
                                <div className="mt-2 ml-4 space-y-1 border-l-2 border-border pl-4">
                                    {mobileResources.map((item) => {
                                        const active = isActive(item.href);
                                        return (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={cn(
                                                    "block py-1.5 text-sm transition-colors",
                                                    active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </a>
                                        );
                                    })}
                                    <a
                                        href="/resources"
                                        className={cn(
                                            "block py-1.5 text-sm font-medium transition-colors",
                                            isActive('/resources') ? "text-primary" : "text-primary"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        View All &rarr;
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 border-t border-border mt-4">
                            <a href="tel:+14049991234" className="flex items-center gap-2 py-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>(404) 999-1234</span>
                            </a>
                            <Button className="w-full mt-3" asChild>
                                <a href="/patients">Book Appointment</a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}