import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CheckCircle2,
    Clock,
    Phone,
    Mail,
    Calendar,
    FileText,
    ArrowRight,
    Home,
    BookOpen,
    Users,
    Handshake,
} from "lucide-react"

const formTypes = {
    contact: {
        title: "Thank You for Reaching Out!",
        subtitle: "Your message has been received",
        description: "Our team will review your inquiry and respond within 1-2 business days. If your matter is urgent, please don't hesitate to call us directly.",
        icon: Mail,
        responseTime: "1-2 business days",
        nextSteps: [
            { text: "Check your email for a confirmation", icon: Mail },
            { text: "Our team reviews your message", icon: FileText },
            { text: "We'll respond via your preferred method", icon: Phone },
        ],
        suggestedLinks: [
            { label: "Schedule an Appointment", href: "/patients", icon: Calendar },
            { label: "Explore Our Resources", href: "/resources", icon: BookOpen },
            { label: "Learn About Our Services", href: "/services", icon: FileText },
        ],
    },
    referral: {
        title: "Referral Submitted Successfully!",
        subtitle: "Thank you for trusting us with your patient's care",
        description: "We've received your referral and will contact the patient within 24-48 business hours to schedule their appointment. You'll receive a confirmation and updates on their care.",
        icon: Users,
        responseTime: "24-48 business hours",
        nextSteps: [
            { text: "Patient contacted for scheduling", icon: Phone },
            { text: "Initial evaluation completed", icon: FileText },
            { text: "Progress report sent to you", icon: Mail },
        ],
        suggestedLinks: [
            { label: "Submit Another Referral", href: "/for-providers/referrals", icon: FileText },
            { label: "View Conditions We Treat", href: "/conditions", icon: BookOpen },
            { label: "Learn About Partnership", href: "/for-providers", icon: Handshake },
        ],
    },
    collaboration: {
        title: "Partnership Request Received!",
        subtitle: "We're excited about the opportunity to collaborate",
        description: "Our provider relations team will review your partnership request and reach out within 2-3 business days to discuss next steps and answer any questions.",
        icon: Handshake,
        responseTime: "2-3 business days",
        nextSteps: [
            { text: "Team reviews your request", icon: FileText },
            { text: "We'll schedule a brief call", icon: Phone },
            { text: "Formal agreement finalized", icon: CheckCircle2 },
        ],
        suggestedLinks: [
            { label: "Submit a Patient Referral", href: "/for-providers/referrals", icon: Users },
            { label: "Explore Our Services", href: "/services", icon: BookOpen },
            { label: "Contact Provider Services", href: "/contact", icon: Phone },
        ],
    },
}

function ThankYouContent({ formType, name, referenceId }) {
    const content = formTypes[formType] || formTypes.contact
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

                    {/* Personalized Greeting */}
                    {name && (
                        <p className="mt-4 text-xl text-primary font-medium">
                            Thank you, {name}!
                        </p>
                    )}

                    <p className="mt-2 text-lg text-muted-foreground">
                        {content.subtitle}
                    </p>

                    {/* Reference ID if provided */}
                    {referenceId && (
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                            <span className="text-sm text-muted-foreground">Reference ID:</span>
                            <span className="text-sm font-mono font-medium text-foreground">{referenceId}</span>
                        </div>
                    )}
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
                                    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4 text-primary" />
                                        <span>Expected response time: <strong className="text-foreground">{content.responseTime}</strong></span>
                                    </div>
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
                                        <a href="tel:+15093816035">
                                            <Phone className="mr-2 h-4 w-4" />
                                            (509) 381-6035
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

export default function ThankYouPage() {
    const [params, setParams] = useState({ type: "contact", name: "", ref: "" });

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setParams({
            type: searchParams.get("type") || "contact",
            name: searchParams.get("name") || "",
            ref: searchParams.get("ref") || ""
        });
    }, []);

    return (
        <main className="flex-1">
            <ThankYouContent
                formType={params.type}
                name={params.name}
                referenceId={params.ref}
            />
        </main>
    )
}