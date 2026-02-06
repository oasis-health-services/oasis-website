import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Phone,
    MessageCircle,
    Globe,
    Heart,
    Shield,
    Users,
    AlertTriangle,
    Clock,
    MapPin,
    ExternalLink,
    ArrowRight
} from "lucide-react"

const emergencyHotlines = [
    {
        name: "988 Suicide & Crisis Lifeline",
        description: "Free, confidential support for people in distress. Prevention and crisis resources for you or loved ones.",
        phone: "988",
        availability: "24/7",
        type: "Call or Text",
        primary: true,
    },
    {
        name: "Crisis Text Line",
        description: "Text HOME to 741741 to connect with a trained crisis counselor for free, 24/7 crisis support.",
        phone: "741741",
        availability: "24/7",
        type: "Text Only",
        primary: true,
    },
    {
        name: "National Suicide Prevention Lifeline",
        description: "Network of local crisis centers providing free emotional support to people in suicidal crisis.",
        phone: "1-800-273-8255",
        availability: "24/7",
        type: "Call",
        primary: false,
    },
    {
        name: "SAMHSA National Helpline",
        description: "Treatment referral service for individuals facing mental health or substance use disorders.",
        phone: "1-800-662-4357",
        availability: "24/7, 365 days",
        type: "Call",
        primary: false,
    },
]

const specializedResources = [
    {
        icon: Users,
        name: "Veterans Crisis Line",
        description: "Specialized support for veterans and their families dealing with crisis situations.",
        contact: "988, Press 1",
        href: "https://www.veteranscrisisline.net/",
    },
    {
        icon: Heart,
        name: "The Trevor Project",
        description: "Crisis intervention and suicide prevention for LGBTQ+ young people under 25.",
        contact: "1-866-488-7386",
        href: "https://www.thetrevorproject.org/",
    },
    {
        icon: Shield,
        name: "National Domestic Violence Hotline",
        description: "Confidential support for those experiencing domestic violence or abuse.",
        contact: "1-800-799-7233",
        href: "https://www.thehotline.org/",
    },
    {
        icon: Users,
        name: "NAMI Helpline",
        description: "Information, referrals, and support for individuals and families affected by mental illness.",
        contact: "1-800-950-6264",
        href: "https://www.nami.org/help",
    },
]

const georgiaResources = [
    {
        name: "Georgia Crisis & Access Line (GCAL)",
        description: "Georgia's single point of entry for mental health and substance use crisis services.",
        phone: "1-800-715-4225",
        availability: "24/7",
    },
    {
        name: "Behavioral Health Link",
        description: "Mobile crisis teams and crisis stabilization services throughout Georgia.",
        phone: "1-800-715-4225",
        availability: "24/7",
    },
    {
        name: "Ridgeview Institute",
        description: "Psychiatric and addiction treatment center serving metro Atlanta.",
        phone: "770-434-4567",
        availability: "24/7 Admissions",
    },
]

const warningSignsData = [
    "Talking about wanting to die or to kill oneself",
    "Looking for ways to kill oneself",
    "Talking about feeling hopeless or having no purpose",
    "Talking about feeling trapped or being in unbearable pain",
    "Talking about being a burden to others",
    "Increasing use of alcohol or drugs",
    "Acting anxious, agitated, or reckless",
    "Sleeping too little or too much",
    "Withdrawing or feeling isolated",
    "Showing rage or talking about seeking revenge",
    "Displaying extreme mood swings",
]

const supportTips = [
    {
        title: "Listen Without Judgment",
        description: "Give your full attention, let them express their feelings, and avoid minimizing their experience.",
    },
    {
        title: "Ask Directly",
        description: "It's okay to ask if they're thinking about suicide. Asking does not plant the idea.",
    },
    {
        title: "Stay With Them",
        description: "Don't leave someone alone if you believe they may be in immediate danger.",
    },
    {
        title: "Remove Means",
        description: "If possible, remove access to lethal means such as medications or weapons.",
    },
    {
        title: "Connect to Help",
        description: "Help them connect with crisis resources, a mental health provider, or emergency services.",
    },
    {
        title: "Follow Up",
        description: "After a crisis, follow up with the person. Your continued support matters.",
    },
]

export default function Crisis() {
    return (
        <>
            {/* Emergency Banner */}
            <div className="bg-destructive text-destructive-foreground">
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                        <AlertTriangle className="h-6 w-6 shrink-0" />
                        <p className="font-medium text-white">
                            If you or someone you know is in immediate danger, call 911 or go to your nearest emergency room.
                        </p>
                        <a
                            href="tel:911"
                            className="shrink-0 bg-background text-foreground px-4 py-2 rounded-lg font-semibold hover:bg-background/90 transition-colors"
                        >
                            Call 911
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">Crisis Support</Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            You Are Not Alone
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            If you&apos;re experiencing a mental health crisis, help is available right now.
                            Reach out to one of these resources for immediate support.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild className="text-lg px-8">
                                <a href="tel:988">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call 988 Now
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                                <a href="sms:741741?body=HOME">
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Text HOME to 741741
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 24/7 Hotlines */}
            <section className="py-16 lg:py-24" aria-labelledby="hotlines-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="hotlines-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            24/7 Crisis Hotlines
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Free, confidential support is available around the clock.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {emergencyHotlines.map((hotline) => (
                            <Card key={hotline.name} className={hotline.primary ? "border-primary border-2" : ""}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="font-semibold text-lg text-foreground">{hotline.name}</h3>
                                                {hotline.primary && (
                                                    <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                                                )}
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                {hotline.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 text-sm">
                                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                                    <Clock className="h-4 w-4" />
                                                    {hotline.availability}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                                    <Phone className="h-4 w-4" />
                                                    {hotline.type}
                                                </span>
                                            </div>
                                        </div>
                                        <a
                                            href={`tel:${hotline.phone.replace(/-/g, "")}`}
                                            className="shrink-0 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
                                        >
                                            {hotline.phone}
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Resources */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="specialized-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="specialized-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Specialized Support
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Resources tailored to specific communities and situations.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specializedResources.map((resource) => (
                            <Card key={resource.name} className="h-full">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <resource.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{resource.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                                        {resource.description}
                                    </p>
                                    <div className="space-y-2">
                                        <a
                                            href={`tel:${resource.contact.replace(/[^0-9]/g, "")}`}
                                            className="block font-semibold text-primary hover:underline"
                                        >
                                            {resource.contact}
                                        </a>
                                        <a
                                            href={resource.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
                                        >
                                            Visit Website
                                            <ExternalLink className="ml-1 h-3 w-3" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Georgia Local Resources */}
            <section className="py-16 lg:py-24" aria-labelledby="georgia-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-primary mb-4">
                            <MapPin className="h-5 w-5" />
                            <span className="text-sm font-medium tracking-wide uppercase">Georgia Resources</span>
                        </div>
                        <h2 id="georgia-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Local Crisis Services
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Georgia-specific mental health crisis resources and services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {georgiaResources.map((resource) => (
                            <Card key={resource.name}>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-2">{resource.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {resource.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground">{resource.availability}</span>
                                        <a
                                            href={`tel:${resource.phone.replace(/-/g, "")}`}
                                            className="font-semibold text-primary hover:underline"
                                        >
                                            {resource.phone}
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warning Signs */}
            <section className="py-16 lg:py-24 bg-secondary" aria-labelledby="warning-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <h2 id="warning-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                                Recognizing Warning Signs
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Knowing the warning signs of suicide can help you help someone in crisis.
                                If you notice these signs in yourself or others, reach out for help immediately.
                            </p>
                            <ul className="space-y-3">
                                {warningSignsData.map((sign, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="w-2 h-2 rounded-full bg-primary" />
                                        </span>
                                        <span className="text-muted-foreground">{sign}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                                How to Help Someone in Crisis
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                If someone you care about is in crisis, your support can make a difference.
                                Here&apos;s how you can help.
                            </p>
                            <div className="space-y-4">
                                {supportTips.map((tip, index) => (
                                    <div key={index} className="bg-card rounded-lg p-4">
                                        <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-primary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl mb-6">
                        Need Non-Emergency Support?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        If you&apos;re not in immediate crisis but need mental health support,
                        we&apos;re here to help. Schedule an appointment with one of our providers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="text-base px-8">
                            <a href="/patients">
                                Schedule Appointment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                            <a href="/providers">Meet Our Providers</a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}