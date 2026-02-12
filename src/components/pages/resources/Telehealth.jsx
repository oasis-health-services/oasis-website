import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Video,
    Wifi,
    Lock,
    Monitor,
    Smartphone,
    Headphones,
    CheckCircle2,
    Clock,
    MapPin,
    Settings,
    MessageCircle,
    ArrowRight,
    Shield,
    Lightbulb,
    AlertCircle
} from "lucide-react"

const benefits = [
    {
        icon: MapPin,
        title: "No Commute",
        description: "Attend appointments from anywhere in Georgia without travel time or expenses.",
    },
    {
        icon: Clock,
        title: "Flexible Scheduling",
        description: "More appointment times available, including early morning and evening slots.",
    },
    {
        icon: Lock,
        title: "Enhanced Privacy",
        description: "Receive care from a private, comfortable space of your choosing.",
    },
    {
        icon: Shield,
        title: "Same Quality Care",
        description: "Evidence shows telehealth is equally effective as in-person mental health care.",
    },
]

const technicalRequirements = [
    {
        icon: Wifi,
        title: "Stable Internet Connection",
        description: "High-speed internet with at least 10 Mbps download speed for smooth video.",
        tip: "Use a wired connection or sit close to your WiFi router for best results.",
    },
    {
        icon: Monitor,
        title: "Computer, Tablet, or Smartphone",
        description: "A device with a camera and microphone. Laptops and tablets work best.",
        tip: "Desktop users may need an external webcam and microphone.",
    },
    {
        icon: Headphones,
        title: "Headphones (Recommended)",
        description: "Earbuds or headphones improve audio quality and privacy.",
        tip: "Test your audio before the appointment starts.",
    },
    {
        icon: Settings,
        title: "Updated Browser",
        description: "Use the latest version of Chrome, Safari, Firefox, or Edge.",
        tip: "Clear your cache if you experience connection issues.",
    },
]

const preparationSteps = [
    {
        step: 1,
        title: "Test Your Technology",
        description: "Check your camera, microphone, and internet connection 15 minutes before your appointment.",
        items: [
            "Run a speed test at speedtest.net",
            "Test your camera in your device settings",
            "Ensure your microphone is working",
            "Close unnecessary programs and browser tabs",
        ],
    },
    {
        step: 2,
        title: "Create a Private Space",
        description: "Find a quiet, private location where you won't be interrupted.",
        items: [
            "Choose a room with a door you can close",
            "Let others know you need privacy",
            "Turn off TVs and minimize background noise",
            "Have tissues and water nearby",
        ],
    },
    {
        step: 3,
        title: "Prepare Your Environment",
        description: "Set up your space for a comfortable, productive session.",
        items: [
            "Ensure good lighting on your face",
            "Position camera at eye level",
            "Use a neutral, non-distracting background",
            "Have a comfortable seating arrangement",
        ],
    },
    {
        step: 4,
        title: "Gather Your Materials",
        description: "Have everything you need within reach before starting.",
        items: [
            "List of current medications",
            "Notes or questions for your provider",
            "Insurance card (for first appointments)",
            "Pen and paper for taking notes",
        ],
    },
]

const duringSession = [
    {
        icon: Video,
        title: "Keep Camera On",
        description: "Maintaining visual contact helps your provider assess your wellbeing and builds rapport.",
    },
    {
        icon: MessageCircle,
        title: "Communicate Openly",
        description: "Be honest about your symptoms, concerns, and how you're feeling. This helps us provide the best care.",
    },
    {
        icon: Lightbulb,
        title: "Take Notes",
        description: "Write down important points, recommendations, or action items to remember after the session.",
    },
    {
        icon: AlertCircle,
        title: "Speak Up About Issues",
        description: "If you're having technical difficulties, let your provider know right away so we can help.",
    },
]

const troubleshooting = [
    {
        problem: "Video is freezing or choppy",
        solutions: [
            "Turn off your video temporarily while keeping audio on",
            "Close other programs using internet bandwidth",
            "Move closer to your WiFi router",
            "Try switching to a mobile data connection",
        ],
    },
    {
        problem: "Audio isn't working",
        solutions: [
            "Check that your microphone is unmuted in the app",
            "Ensure the correct microphone is selected in settings",
            "Try using headphones with a built-in microphone",
            "Restart your browser and rejoin the session",
        ],
    },
    {
        problem: "Can't connect to the appointment",
        solutions: [
            "Check that you're using the correct link from your confirmation email",
            "Try a different browser (Chrome recommended)",
            "Clear your browser cache and cookies",
            "Contact our office for assistance",
        ],
    },
]

const faqs = [
    {
        question: "Is telehealth as effective as in-person therapy?",
        answer: "Yes! Research consistently shows that telehealth mental health services are as effective as in-person care for most conditions. Many patients even prefer the convenience and comfort of virtual visits.",
    },
    {
        question: "Is my telehealth session private and secure?",
        answer: "Absolutely. We use HIPAA-compliant, encrypted video platforms to ensure your sessions are completely private and secure. Your health information is protected just as it would be during an in-person visit.",
    },
    {
        question: "What if I have a poor internet connection?",
        answer: "If video quality becomes an issue, we can switch to audio-only or reschedule. For chronic connection issues, we recommend moving closer to your router, using a wired connection, or considering an in-person appointment at our Roswell office.",
    },
    {
        question: "Can I get prescriptions through telehealth?",
        answer: "Yes, our psychiatric providers can prescribe medications during telehealth appointments. Prescriptions are sent electronically to your preferred pharmacy.",
    },
    {
        question: "What states can you see telehealth patients in?",
        answer: "Our providers are licensed to see telehealth patients in Georgia, Alabama, and Florida. You must be physically located in one of these states during your appointment.",
    },
]

export default function Telehealth() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="outline" className="mb-4">Telehealth Guide</Badge>
                            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                                Your Guide to Virtual Mental Health Care
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                                Get the most out of your telehealth appointments with our comprehensive guide.
                                We&apos;ll help you prepare for a successful, comfortable virtual visit.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="text-base px-8">
                                    <a href="/patients">Schedule Telehealth Visit</a>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent border-primary text-primary">
                                    <a href="#preparation">View Preparation Steps</a>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-card rounded-2xl p-8 shadow-lg">
                                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <Video className="h-8 w-8 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground">Your virtual session will appear here</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Video className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Headphones className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <MessageCircle className="h-5 w-5 text-primary" />
                                        </div>
                                    </div>
                                    <Badge className="bg-green-100 text-green-800">Connected</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 lg:py-24" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="benefits-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Benefits of Telehealth
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Virtual appointments offer unique advantages for your mental health care journey.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="text-center">
                                <CardContent className="p-6">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <benefit.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Requirements */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="tech-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="tech-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Technical Requirements
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Make sure you have everything you need for a smooth virtual visit.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {technicalRequirements.map((req) => (
                            <Card key={req.title}>
                                <CardContent className="p-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <req.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">{req.title}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{req.description}</p>
                                            <div className="flex items-start gap-2 text-xs text-primary bg-primary/5 rounded-lg p-2">
                                                <Lightbulb className="h-4 w-4 shrink-0 mt-0.5" />
                                                <span>{req.tip}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation Steps */}
            <section id="preparation" className="py-16 lg:py-24 scroll-mt-24" aria-labelledby="prep-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="prep-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            How to Prepare
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Follow these steps to ensure a successful telehealth appointment.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {preparationSteps.map((step) => (
                            <div key={step.step} className="flex gap-6">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                                        {step.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-xl text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mb-4">{step.description}</p>
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {step.items.map((item, index) => (
                                            <div key={index} className="flex items-center gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* During Your Session */}
            <section className="py-16 lg:py-24 bg-primary" aria-labelledby="during-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="during-heading" className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
                            During Your Session
                        </h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Tips for getting the most out of your virtual appointment.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {duringSession.map((tip) => (
                            <div
                                key={tip.title}
                                className="bg-primary-foreground/10 rounded-xl p-6"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                                    <tip.icon className="h-6 w-6 text-primary-foreground" />
                                </div>
                                <h3 className="font-semibold text-primary-foreground mb-2">{tip.title}</h3>
                                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section className="py-16 lg:py-24" aria-labelledby="trouble-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="trouble-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Troubleshooting
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Quick solutions for common technical issues.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {troubleshooting.map((issue) => (
                            <Card key={issue.problem}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertCircle className="h-5 w-5 text-destructive" />
                                        <h3 className="font-semibold text-foreground">{issue.problem}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {issue.solutions.map((solution, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{solution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-muted-foreground mb-4">
                            Still having trouble? Contact our support team for immediate assistance.
                        </p>
                        <Button variant="outline" asChild className="bg-transparent">
                            <a href="tel:+15093816035">Call (509) 381-6035</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="faq-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="faq-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-secondary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                        Ready for Your Virtual Visit?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Schedule your telehealth appointment today and experience convenient,
                        high-quality mental health care from the comfort of your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="text-base px-8">
                            <a href="/patients">
                                Schedule Telehealth Appointment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent border-primary text-primary">
                            <a href="/about#services">Prefer In-Person? Visit Our Office</a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}