import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import {
    ClipboardCheck,
    Pill,
    MessageCircle,
    Video,
    Zap,
    Puzzle,
    Heart,
    Sparkles,
    Activity,
    ArrowRight,
    Phone,
    Calendar,
    CheckCircle,
    MapPin
} from "lucide-react"
import { services } from "@/lib/services-data"
import Insurances from "@/components/common/Insurances"

const iconMap = {
    ClipboardCheck,
    Pill,
    MessageCircle,
    Video,
    Zap,
    Puzzle,
    Heart,
    Sparkles,
    Activity,
    Dna: Activity,
}

const featuredServices = [
    "psychiatric-evaluation",
    "medication-management",
    "therapy",
    "telehealth"
]

export default function Services() {

    const featured = services.filter(s => featuredServices.includes(s.slug))
    const additional = services.filter(s => !featuredServices.includes(s.slug))


    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-secondary py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-medium text-primary tracking-wide uppercase">
                                Our Services
                            </span>
                            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                                Comprehensive <br />
                                <span className="text-primary">Mental Health Care</span>
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                                At Oasis, we treat the whole person with coordinated, evidence-based services designed
                                for your unique needs. From evaluation to ongoing care, we're here for every step of
                                your mental health journey.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild>
                                    <a href="/patients">
                                        <Calendar className="mr-2 h-5 w-5" />
                                        Schedule Appointment
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="bg-transparent border-primary text-primary">
                                    <a href="tel:+15093816035">
                                        <Phone className="mr-2 h-5 w-5" />
                                        (509) 381-6035
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div className="mt-12 lg:mt-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Card className="bg-card">
                                <CardContent className="p-8">
                                    <h2 className="font-semibold text-lg text-foreground mb-4">
                                        Why Choose Oasis?
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            { icon: MapPin, text: "In-person care at our Roswell, GA office" },
                                            { icon: Video, text: "Telehealth available throughout Georgia" },
                                            { icon: CheckCircle, text: "Most major insurance plans accepted" },
                                            { icon: Calendar, text: "Same-week appointments often available" },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                    <item.icon className="h-4 w-4 text-primary" />
                                                </div>
                                                <span className="text-muted-foreground">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-20 lg:py-28 bg-background" aria-labelledby="featured-services">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
                        <Badge variant="secondary" className="mb-4">Core Services</Badge>
                        <h2 id="featured-services" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Our Most Requested Services
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            These foundational services form the core of our mental health care offerings.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featured.map((service, index) => {
                            const Icon = iconMap[service.icon] || ClipboardCheck
                            return (

                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                >
                                    <a key={service.slug} href={`/services/${service.slug}`}>
                                        <Card className="h-full group hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer">
                                            <CardHeader>
                                                <div className="flex items-start justify-between">
                                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                        <Icon className="h-7 w-7 text-primary" />
                                                    </div>
                                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                                </div>
                                                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mt-4">
                                                    {service.title}
                                                </CardTitle>
                                                <CardDescription className="text-muted-foreground leading-relaxed">
                                                    {service.shortDescription}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.benefits.slice(0, 3).map((benefit, index) => (
                                                        <Badge key={index} variant="secondary" className="text-xs">
                                                            {benefit.length > 30 ? benefit.slice(0, 30) + "..." : benefit}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                {service.duration && (
                                                    <p className="text-sm text-muted-foreground mt-4">
                                                        <span className="font-medium">Duration:</span> {service.duration}
                                                    </p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </a>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section className="py-20 lg:py-28 bg-card" aria-labelledby="specialized-services">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
                        <Badge variant="secondary" className="mb-4">Specialized Care</Badge>
                        <h2 id="specialized-services" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Specialized Treatment Options
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Advanced and specialized services for specific conditions and needs.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additional.map((service, index) => {
                            const Icon = iconMap[service.icon] || ClipboardCheck
                            return (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                >
                                    <a key={service.slug} href={`/services/${service.slug}`}>
                                        <Card className="h-full group hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
                                            <CardHeader>
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {service.title}
                                                </CardTitle>
                                                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                                    {service.shortDescription}
                                                </CardDescription>
                                                <span className="inline-flex items-center text-sm font-medium text-primary mt-2 group-hover:underline">
                                                    Learn more
                                                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </CardHeader>
                                        </Card>
                                    </a>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 lg:py-28 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Your Path to Better Mental Health
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Getting started is simple. Here's what to expect when you choose Oasis Health Services.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Schedule",
                                description: "Book your initial appointment online or by phone. We offer same-week availability."
                            },
                            {
                                step: "2",
                                title: "Evaluate",
                                description: "Meet with your provider for a comprehensive psychiatric evaluation and diagnosis."
                            },
                            {
                                step: "3",
                                title: "Plan",
                                description: "Work together to create a personalized treatment plan tailored to your needs."
                            },
                            {
                                step: "4",
                                title: "Heal",
                                description: "Begin your treatment with ongoing support, monitoring, and care adjustments."
                            }
                        ].map((item, index) => (
                            <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance Section */}
            <Insurances showConsultationCTA={false} />
            {/* <section className="py-16 bg-secondary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                                Insurance & Payment
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                We accept most major insurance plans. Our team will verify your coverage and explain
                                any costs before your first appointment.
                            </p>
                        </div>
                        <div className="mt-6 lg:mt-0 flex flex-wrap gap-3">
                            {["Aetna", "Blue Cross", "Cigna", "United", "Medicare"].map((insurance) => (
                                <Badge key={insurance} variant="outline" className="text-sm py-2 px-4">
                                    {insurance}
                                </Badge>
                            ))}
                            <Badge variant="secondary" className="text-sm py-2 px-4">
                                + More
                            </Badge>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="mt-4 text-primary-foreground/80 text-lg">
                            Take the first step toward better mental health. Schedule your appointment today
                            and discover the compassionate, personalized care you deserve.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <a href="/patients">Schedule Appointment</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
                                <a href="/about/our-team">Meet Our Providers</a>
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-primary-foreground/70">
                            Free 15-minute consultation available for new patients
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}