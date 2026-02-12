import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown, BookOpen, Video, HelpCircle, Heart, Smartphone, FileText, AlertTriangle, Users, Handshake, ClipboardCheck, ArrowRight } from "lucide-react"
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
    {
        name: "About",
        subMenu: [
            { name: "Who We Are", href: "/about" },
            { name: "Meet Our Team", href: "/about/our-team" },
            { name: "Conditions we Treat", href: "/about/conditions" },
            { name: "Blog", href: "/blog" }
        ]
    },
    { name: "Services", href: "/services" },
    { name: "Providers", href: "/providers" },
    { name: "Patients", href: "/patients" },
    {
        name: "Resources",
        megaMenu: {
            learn: [
                { name: "Blog", href: "/blog", icon: BookOpen, description: "Articles and insights on mental wellness" },
                //                { name: "Video Library", href: "/resources/videos", icon: Video, description: "Educational videos from our providers" },
                { name: "FAQ", href: "/resources/faq", icon: HelpCircle, description: "Answers to common questions" },
            ],
            patientTools: [
                { name: "Self-Assessments", href: "/assessments", icon: ClipboardCheck, description: "PHQ-9, GAD-7, and more screeners" },
                { name: "Self-Care Toolkit", href: "/resources/self-care", icon: Heart, description: "Exercises and coping strategies" },
                { name: "Telehealth Guide", href: "/resources/telehealth", icon: Smartphone, description: "How to prepare for virtual visits" },
            ],
            support: [
                { name: "Crisis Resources", href: "/resources/crisis", icon: AlertTriangle, description: "24/7 hotlines and emergency help", style: "hover:bg-red-50", textStyle: "text-red-700", iconStyles: ["bg-red-100", "text-red-600"] },
                { name: "Support Groups", href: "/resources/support-groups", icon: Users, description: "Local and online communities" },
                //                { name: "For Providers", href: "/providers", icon: Handshake, description: "Referrals and partnerships" },
                { name: "View All Resources", href: "/resources", icon: ArrowRight }
            ],
        },
        // viewAll: {
        //     name: "View All Rersources",
        //     mobileName: "View All",
        //     href: "/resources",
        //     icon: ArrowRight,
        //     description: "View all resources"
        // }
    },
    { name: "Shop", href: "https://shop.oasishealthservices.com", external: true },
    { name: "Contact", href: "/contact" }
];

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

const ActiveIndicator = () => (
    <motion.div
        layoutId="activeNav"
        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
);

export default function Header({ currentPath }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileSubMenuItemOpen, setMobileSubMenuItemOpen] = useState(null)
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null)

    const isActive = (href) => {
        if (!href) return false;
        if (href === '/') return currentPath === '/';
        // Handle external links or other prefixes if necessary
        if (!href.startsWith('/')) return false;
        return currentPath === href || currentPath?.startsWith(href + '/');
    };


    return (
        <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="flex items-center">
                        <OptimizedImage
                            src="/images/oasis-logo.png"
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
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            {navigation.map((item) => {
                                // Check if the current item OR any of its sub-items are active

                                const hasActiveSub = item.subMenu?.some((sub) => isActive(sub.href));
                                const hasActiveMega = item.megaMenu && Object.values(item.megaMenu).flat().some((m) => isActive(m.href));
                                const active = isActive(item.href) || hasActiveSub || hasActiveMega;

                                // --- MEGA MENU ---
                                if (item.megaMenu) {
                                    const categories = Object.entries(item.megaMenu);
                                    const columnCount = categories.length;
                                    return (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuTrigger className={cn(
                                                "bg-transparent hover:bg-transparent focus:bg-transparent focus:text-foreground px-2 text-sm font-medium transition-colors",
                                                active ? "text-primary" : "text-muted-foreground hover:text-primary"
                                            )}>
                                                {item.name}
                                                {active && <ActiveIndicator />}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div style={{ width: `${columnCount * 200}px` }} className="p-4">
                                                    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
                                                        {categories.map(([category, links]) => (
                                                            <div key={category} className="space-y-3">
                                                                <h3 className="text-xs font-semibold text-primary uppercase tracking-wider px-2">
                                                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                                                </h3>
                                                                <ul className="space-y-1">
                                                                    {links.map((link) => (
                                                                        <li key={link.name}>
                                                                            <NavigationMenuLink asChild>
                                                                                {/* NO WHITESPACE BETWEEN TAGS HERE */}

                                                                                <a href={link.href} className={cn("flex items-start gap-3 rounded-md p-2 hover:bg-secondary transition-colors", link.style || null)}>

                                                                                    <div className={cn(
                                                                                        "w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5",
                                                                                        link.iconStyles && link.iconStyles[0] || "bg-primary/10"
                                                                                    )}>

                                                                                        <link.icon className={cn("h-4 w-4 mt-0.5 shrink-0", link.iconStyles && link.iconStyles[1] || "text-primary")} />
                                                                                    </div>
                                                                                    <div>
                                                                                        <div className={cn("text-sm font-medium", link.textStyle || "text-foreground")}>{link.name}</div>
                                                                                        <p className="text-xs text-muted-foreground leading-tight">{link.description}</p>
                                                                                    </div>
                                                                                </a>
                                                                            </NavigationMenuLink>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    );
                                }

                                // --- SUB MENU (About) ---
                                if (item.subMenu) {
                                    return (
                                        <NavigationMenuItem key={item.name}>
                                            <NavigationMenuTrigger className={cn(
                                                "bg-transparent hover:bg-transparent focus:bg-transparent focus:text-foreground px-2 text-sm font-medium transition-colors",
                                                active ? "text-primary" : "text-muted-foreground hover:text-primary"
                                            )}>
                                                {item.name}
                                                {active && <ActiveIndicator />}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="w-[200px] p-2">
                                                    {item.subMenu.map((sub) => (
                                                        <li key={sub.name}>
                                                            <NavigationMenuLink asChild>
                                                                <a href={sub.href} className="block p-2 text-sm rounded-md transition-colors hover:bg-secondary hover:text-foreground">
                                                                    {sub.name}
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    );
                                }

                                // --- STANDARD LINK ---
                                return (
                                    <NavigationMenuItem key={item.name}>
                                        <NavigationMenuLink asChild>
                                            <a
                                                href={item.href}
                                                className={cn(
                                                    "bg-transparent px-2 text-sm font-medium",
                                                    active ? "text-primary" : "text-muted-foreground hover:text-white"
                                                )}
                                            >
                                                {item.name}
                                                {active && <ActiveIndicator />}
                                            </a>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );

                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 lg:items-center">
                    <a href="tel:+15093816035" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1.5">
                        <Phone className="h-4 w-4" />
                        <span>(509) 381-6035</span>
                    </a>
                    <Button asChild>
                        <a href="/start">Start Now</a>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-border">
                    <div className="space-y-1 px-6 py-4">
                        {navigation.map((item) => {

                            const hasActiveSub = item.subMenu?.some((sub) => isActive(sub.href));
                            const hasActiveMega = item.megaMenu && Object.values(item.megaMenu).flat().some((m) => isActive(m.href));
                            const active = isActive(item.href) || hasActiveSub || hasActiveMega;

                            const subMenuItems = item.megaMenu ? Object.values(item.megaMenu).flat() : item.subMenu;

                            if (subMenuItems) {
                                return (<div className="py-2">
                                    <button type="button"
                                        className={cn(
                                            "flex items-center justify-between w-full text-base font-medium transition-colors",
                                            active ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                                        )}
                                        onClick={() => { setMobileSubMenuItemOpen(item.name); setMobileSubMenuOpen(!mobileSubMenuOpen) }}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSubMenuOpen && mobileSubMenuItemOpen === item.name && "rotate-180")} />
                                    </button>
                                    {(mobileSubMenuOpen && mobileSubMenuItemOpen === item.name) &&
                                        <div className="mt-2 ml-4 space-y-1 border-l-2 border-border pl-4">

                                            {subMenuItems.map((item) => {
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

                                            {/* {item.viewAll && (
                                                <a
                                                    href={item.viewAll.href}
                                                    className={cn(
                                                        "block py-1.5 text-sm font-medium transition-colors",
                                                        isActive(item.viewAll.href) ? "text-primary" : "text-primary"
                                                    )}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.viewAll.mobileName} &rarr;
                                                </a>
                                            )} */}
                                        </div>
                                    }

                                </div>)
                            }



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