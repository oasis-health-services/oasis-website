
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CheckCircle2,
    Phone,
    Mail,
    Calendar,
    FileText,
    ArrowRight,
    Home,
    BookOpen,
} from "lucide-react"
import { contact } from '@/lib/contact'

const formTypes = {
    contact: {
        title: "We're Sorry!",
        subtitle: "Unfortunately, we're unable to process your request at this time",
        description: "We're experiencing technical difficulties that are preventing us from processing your request. Our team is working hard to resolve this issue as quickly as possible.",
        icon: Mail,
        nextSteps: [
            { text: `Please try again later or send us an email at support@oasishealthservices.com`, icon: Mail },
            { text: "Our team reviews your message", icon: FileText },
            { text: `Call our office at {contact.phone}`, icon: Phone },
        ],
        suggestedLinks: [
            { label: "Schedule an Appointment", href: "/patients", icon: Calendar },
            { label: "Explore Our Resources", href: "/resources", icon: BookOpen },
            { label: "Learn About Our Services", href: "/services", icon: FileText },
        ],
    },
}

function SorryContent() {

    const content = formTypes.contact
    const IconComponent = content.icon

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    {/* Success Icon */}
                    <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                        {content.title}
                    </h1>

                    <p className="mt-2 text-lg text-muted-foreground">
                        {content.subtitle}
                    </p>

                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Description Card */}
                    <Card className="mb-12">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <IconComponent className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-lg text-foreground leading-relaxed">
                                        {content.description}
                                    </p>
                                    {/* <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4 text-primary" />
                                        <span>Expected response time: <strong className="text-foreground">{content.responseTime}</strong></span>
                                    </div> */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* What Happens Next */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-foreground mb-6">What Happens Next</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {content.nextSteps.map((step, index) => (
                                <Card key={index} className="relative overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                                            {index + 1}
                                        </div>
                                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                                            <step.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <p className="text-sm text-foreground font-medium pr-8">{step.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Suggested Links */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-foreground mb-6">You Might Also Be Interested In</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {content.suggestedLinks.map((link) => (
                                <a key={link.href} href={link.href} className="group">
                                    <Card className="h-full hover:border-primary/30 hover:shadow-md transition-all">
                                        <CardContent className="p-6 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                <link.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {link.label}
                                                </span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </CardContent>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <Card className="bg-secondary border-0">
                        <CardContent className="p-8">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-foreground mb-2">Need Immediate Assistance?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Our team is available Monday through Friday, 8am to 5:30pm EST.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Button variant="outline" className="bg-transparent" asChild>
                                        <a href={contact.phoneUrl}>
                                            <Phone className="mr-2 h-4 w-4" />
                                            {contact.phone}
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="bg-transparent" asChild>
                                        <a href="mailto:support@oasishealthservices.com">
                                            <Mail className="mr-2 h-4 w-4" />
                                            support@oasishealthservices.com
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Return Home */}
                    <div className="mt-12 text-center">
                        <Button asChild>
                            <a href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Return to Homepage
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default function SorryPage() {


    return (
        <main className="flex-1">
            <SorryContent />
        </main>
    )
}