import { Button } from "@/components/ui/button"
import {
    Home,
    Users,
    Stethoscope,
    BookOpen,
    Phone,
    FileText,
    ArrowRight,
    Search
} from "lucide-react"

const quickLinks = [
    {
        icon: Home,
        title: "Home",
        description: "Return to our homepage",
        href: "/",
    },
    {
        icon: Stethoscope,
        title: "Conditions We Treat",
        description: "Learn about anxiety, depression, ADHD, and more",
        href: "/about/conditions",
    },
    {
        icon: Users,
        title: "Meet Our Providers",
        description: "View our team of mental health professionals",
        href: "/about/our-team",
    },
    {
        icon: FileText,
        title: "Patient Resources",
        description: "Forms, guides, and helpful information",
        href: "/patients",
    },
    {
        icon: BookOpen,
        title: "Resource Center",
        description: "Articles, videos, and self-care tools",
        href: "/resources",
    },
    {
        icon: Phone,
        title: "Contact Us",
        description: "Get in touch with our team",
        href: "/contact",
    },
]

const popularPages = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Telehealth Guide", href: "/resources/telehealth" },
    { name: "FAQ", href: "/resources/faq" },
    { name: "Crisis Resources", href: "/resources/crisis" },
    { name: "For Providers", href: "/for-providers" },
]

export default function NotFound() {
    return (

        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* 404 Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Search className="h-4 w-4" aria-hidden="true" />
                            Page Not Found
                        </div>

                        {/* Large 404 */}
                        <h1 className="font-serif text-8xl sm:text-9xl font-bold text-primary/20 leading-none">
                            404
                        </h1>

                        <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
                            We couldn&apos;t find that page
                        </h2>

                        <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
                            The page you&apos;re looking for may have been moved, deleted, or never existed.
                            Let us help you find what you need.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" asChild>
                                <a href="/">
                                    <Home className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Back to Home
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent">
                                <a href="/contact">
                                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Contact Support
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Grid */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                            Where would you like to go?
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Here are some helpful sections to explore
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <link.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                        {link.title}
                                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {link.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Pages */}
            <section className="py-12 bg-muted/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <span className="text-sm font-medium text-muted-foreground">Popular pages:</span>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {popularPages.map((page) => (
                                <a
                                    key={page.name}
                                    href={page.href}
                                    className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                                >
                                    {page.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Banner */}
            <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                        <div>
                            <h2 className="font-serif text-2xl font-semibold">
                                Need help finding something specific?
                            </h2>
                            <p className="mt-2 opacity-90">
                                Our team is here to assist you with any questions or concerns.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="secondary" size="lg" asChild>
                                <a href="tel:+15093816035">
                                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                                    (509) 381-6035
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                            >
                                <a href="/resources/faq">
                                    View FAQ
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
