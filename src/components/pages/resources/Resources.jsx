import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
    Heart,
    Shield,
    Video,
    ArrowRight,
    FileText,
    Users,
    Brain,
    Pill,
    HelpCircle
} from "lucide-react"

const mainResources = [
    {
        icon: Shield,
        title: "Crisis Resources",
        description: "Immediate help for mental health emergencies. 24/7 hotlines, local services, and warning signs to watch for.",
        href: "/resources/crisis",
        color: "bg-red-100 text-red-700",
        badge: "24/7 Support",
    },
    {
        icon: Video,
        title: "Telehealth Guide",
        description: "Everything you need for a successful virtual appointment. Technical requirements, preparation tips, and FAQs.",
        href: "/resources/telehealth",
        color: "bg-blue-100 text-blue-700",
        badge: "Getting Started",
    },
    {
        icon: Heart,
        title: "Self-Care Toolkit",
        description: "Practical exercises and tools for daily wellness. Breathing techniques, grounding exercises, and downloadable worksheets.",
        href: "/resources/self-care",
        color: "bg-rose-100 text-rose-700",
        badge: "Tools & Exercises",
    },
]

const additionalResources = [
    {
        icon: Video,
        title: "Video Library",
        description: "Watch educational videos from our providers on mental health topics and treatments.",
        href: "/resources/videos",
    },
    {
        icon: HelpCircle,
        title: "Frequently Asked Questions",
        description: "Answers to common questions about appointments, insurance, telehealth, and more.",
        href: "/resources/faq",
    },
    {
        icon: Brain,
        title: "Condition Guides",
        description: "In-depth information about the conditions we treat, symptoms, and treatment approaches.",
        href: "/conditions",
    },
    {
        icon: FileText,
        title: "Patient Forms",
        description: "Download and complete intake forms, consent documents, and other paperwork.",
        href: "/patients#forms",
    },
    {
        icon: Users,
        title: "Support Groups",
        description: "Find local and online support groups for various mental health conditions.",
        href: "/resources/support-groups",
    },
    {
        icon: Pill,
        title: "Medication Information",
        description: "Educational resources about psychiatric medications and what to expect.",
        href: "/resources/medications",
    },
]

const quickLinks = [
    { label: "988 Suicide & Crisis Lifeline", href: "tel:988", external: true },
    { label: "Schedule Appointment", href: "/patients" },
    { label: "Patient Portal", href: "https://portal.oasishealthservices.com", external: true },
    { label: "Contact Us", href: "/contact" },
]

export default function Resources() {
    return (
        <>

            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">Resource Center</Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            Tools & Resources for Your Mental Health Journey
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Access educational materials, self-help tools, crisis support, and practical guides
                            to support your mental wellness between appointments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Resources */}
            <section className="py-16 lg:py-24" aria-labelledby="main-resources-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 id="main-resources-heading" className="sr-only">Main Resources</h2>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {mainResources.map((resource) => (
                            <Card key={resource.title} className="group hover:shadow-lg transition-shadow h-full">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-14 h-14 rounded-xl ${resource.color} flex items-center justify-center`}>
                                            <resource.icon className="h-7 w-7" />
                                        </div>
                                        <Badge variant="secondary">{resource.badge}</Badge>
                                    </div>
                                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                                        {resource.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                                        {resource.description}
                                    </p>
                                    <Button asChild className="w-full group-hover:bg-primary/90">
                                        <a href={resource.href}>
                                            Explore Resource
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="additional-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="additional-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            More Resources
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Additional tools and information to support your care.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalResources.map((resource) => (
                            <a
                                key={resource.title}
                                href={resource.href}
                                className="group bg-card rounded-xl p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <resource.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                                            {resource.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links Bar */}
            <section className="py-12 bg-primary" aria-labelledby="quick-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <h2 id="quick-heading" className="font-semibold text-primary-foreground text-lg">
                            Quick Links
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {quickLinks.map((link) => (
                                <Button
                                    key={link.label}
                                    variant="secondary"
                                    size="sm"
                                    asChild
                                >
                                    {link.external ? (
                                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                                            {link.label}
                                        </a>
                                    ) : (
                                        <a href={link.href}>{link.label}</a>
                                    )}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter / Updates */}
            <section className="py-16 lg:py-24" aria-labelledby="updates-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-secondary rounded-2xl p-8 lg:p-12 text-center">
                        <h2 id="updates-heading" className="font-serif text-3xl font-semibold text-foreground mb-4">
                            Stay Informed
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            We regularly update our resources with new tools, articles, and educational materials.
                            Check back often or follow us on social media for updates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild>
                                <a href="/patients">Schedule Appointment</a>
                            </Button>
                            <Button variant="outline" asChild className="bg-transparent">
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-8 border-t border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
                        <strong>Disclaimer:</strong> The resources provided on this page are for educational and informational purposes only.
                        They are not intended to replace professional medical advice, diagnosis, or treatment. If you are experiencing
                        a mental health emergency, please call 988, 911, or go to your nearest emergency room.
                    </p>
                </div>
            </section>

        </>
    )
}