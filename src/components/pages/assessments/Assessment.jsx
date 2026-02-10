import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowRight,
    ClipboardCheck,
    Clock,
    Shield,
    Brain,
    CloudRain,
    AlertTriangle,
    Zap,
    Heart,
    Info,
} from "lucide-react"
import { screenersList } from "@/lib/assessments"

const conditionIcons = {
    mood: CloudRain,
    anxiety: AlertTriangle,
    trauma: Heart,
    adhd: Zap,
}

const featuredAssessments = [
    {
        id: "phq-9",
        condition: "Depression",
        description: "The most widely used depression screening tool in clinical settings",
        icon: CloudRain,
        color: "bg-blue-100 text-blue-700",
        href: "/assessments/depression/phq-9",
    },
    {
        id: "gad-7",
        condition: "Anxiety",
        description: "A validated tool to assess generalized anxiety severity",
        icon: AlertTriangle,
        color: "bg-amber-100 text-amber-700",
        href: "/assessments/anxiety/gad-7",
    },
    {
        id: "pc-ptsd-5",
        condition: "PTSD",
        description: "Screen for post-traumatic stress disorder symptoms",
        icon: Heart,
        color: "bg-rose-100 text-rose-700",
        href: "/assessments/ptsd/pc-ptsd-5",
    },
    {
        id: "asrs",
        condition: "ADHD",
        description: "WHO-developed screener for adult attention-deficit/hyperactivity disorder",
        icon: Zap,
        color: "bg-purple-100 text-purple-700",
        href: "/assessments/adhd/asrs",
    },
]

export default function AssessmentsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <Badge variant="outline" className="mb-4">
                            <ClipboardCheck className="h-3 w-3 mr-1" />
                            Free & Confidential
                        </Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            Mental Health Self-Assessments
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Take clinically validated screening tools to better understand your mental health. Your responses are
                            private, never stored, and can help guide conversations with your healthcare provider.
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Shield className="w-4 h-4 text-primary" />
                            </div>
                            <span>100% Private</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <ClipboardCheck className="w-4 h-4 text-primary" />
                            </div>
                            <span>Clinically Validated</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Clock className="w-4 h-4 text-primary" />
                            </div>
                            <span>2-5 Minutes Each</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="bg-amber-50 border-b border-amber-200 py-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                            <strong>Important:</strong> These screening tools are for educational purposes only and are not a
                            substitute for professional diagnosis. A mental health condition can only be diagnosed by a qualified
                            healthcare provider through a comprehensive evaluation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Assessments */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground">Choose an Assessment</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Select a screening tool based on the symptoms you want to explore
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {featuredAssessments.map((assessment) => {
                            const screener = screenersList.find((s) => s.id === assessment.id)
                            return (
                                <Card key={assessment.id} className="group hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div
                                            className={`w-12 h-12 rounded-lg ${assessment.color} flex items-center justify-center mb-4`}
                                        >
                                            <assessment.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-lg">{assessment.condition}</CardTitle>
                                        <CardDescription>{assessment.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {screener && (
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                                <span>{screener.name}</span>
                                                <span className="text-border">|</span>
                                                <span>{screener.questionCount} questions</span>
                                            </div>
                                        )}
                                        <Button asChild className="w-full group-hover:bg-primary/90">
                                            <a href={assessment.href}>
                                                Start Assessment
                                                <ArrowRight className="h-4 w-4 ml-2" />
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* All Assessments */}
            <section className="py-16 lg:py-20 bg-muted/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground">All Available Screeners</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Detailed information about each validated screening tool
                        </p>
                    </div>

                    <div className="space-y-4">
                        {screenersList.map((screener) => {
                            const Icon = conditionIcons[screener.relatedCondition] || Brain
                            return (
                                <Card key={screener.id} className="overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-48 bg-secondary p-6 flex items-center justify-center">
                                            <div className="text-center">
                                                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                                                <p className="font-semibold text-foreground">{screener.name}</p>
                                                <p className="text-xs text-muted-foreground">{screener.questionCount} questions</p>
                                            </div>
                                        </div>
                                        <CardContent className="flex-1 p-6">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-lg text-foreground mb-1">{screener.fullName}</h3>
                                                    <p className="text-muted-foreground text-sm mb-3">{screener.description}</p>
                                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                                        <Badge variant="secondary">
                                                            <Clock className="h-3 w-3 mr-1" />
                                                            {screener.timeEstimate}
                                                        </Badge>
                                                        <Badge variant="outline">Public Domain</Badge>
                                                    </div>
                                                </div>
                                                <Button asChild className="shrink-0">
                                                    <a href={`/assessments/${screener.slug}`}>
                                                        Take Assessment
                                                        <ArrowRight className="h-4 w-4 ml-2" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Other Assessments */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground">Additional Resources</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Explore other self-assessment and support tools
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Grief Support Screener</CardTitle>
                                <CardDescription>
                                    Assess your grief experience and find appropriate support resources
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" asChild className="w-full bg-transparent">
                                    <a href="/resources/grief-support">
                                        Start Screener
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Self-Care Toolkit</CardTitle>
                                <CardDescription>
                                    Breathing exercises, grounding techniques, and daily wellness habits
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" asChild className="w-full bg-transparent">
                                    <a href="/resources/self-care">
                                        Explore Toolkit
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Crisis Resources</CardTitle>
                                <CardDescription>
                                    24/7 hotlines and emergency support for immediate help
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" asChild className="w-full bg-transparent">
                                    <a href="/resources/crisis">
                                        Get Help Now
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl font-semibold mb-4">Ready to Take the Next Step?</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                        Whether your results suggest concerns or you simply want professional guidance, our compassionate
                        providers are here to help. Schedule a consultation to discuss your mental health goals.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" variant="secondary" asChild>
                            <a href="/contact">
                                Schedule an Appointment
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            asChild
                            className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
                        >
                            <a href="/providers">Meet Our Providers</a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}