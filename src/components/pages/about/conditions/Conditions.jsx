import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from 'framer-motion'
import {
    AlertTriangle,
    CloudRain,
    Zap,
    User,
    Eye,
    Repeat,
    Wine,
    Brain,
    ArrowRight,
    Phone,
    Calendar
} from "lucide-react"
import { conditions } from "@/lib/conditions-data"

const iconMap = {
    AlertTriangle,
    CloudRain,
    Zap,
    User,
    Eye,
    Repeat,
    Wine,
    Brain,
}

export default function Conditions() {

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-secondary py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div className="max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">
                            Conditions We Treat
                        </span>
                        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                            Comprehensive Care
                            <br />
                            <span className="text-primary">for Your Mental Health</span>
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            We provide compassionate, evidence-based treatment for a wide range of mental health
                            conditions. Our experienced providers work with you to develop personalized care plans
                            that address your unique needs and goals.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <a href="/patients">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Schedule Evaluation
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary text-primary">
                                <a href="tel:+5093816035">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Us Today
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conditions Grid */}
            <section className="py-20 lg:py-28 bg-background" aria-labelledby="conditions-grid">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-16">
                        <h2 id="conditions-grid" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Find the Care You Need
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Click on any condition below to learn more about symptoms, causes, and our treatment approaches.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {conditions.map((condition, index) => {
                            const Icon = iconMap[condition.icon] || Brain
                            return (
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }}>
                                    <a key={condition.slug} href={`/about/conditions/${condition.slug}`}>
                                        <Card className="h-full group hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer">
                                            <CardHeader>
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {condition.title}
                                                </CardTitle>
                                                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                                                    {condition.shortDescription}
                                                </CardDescription>
                                                <span className="inline-flex items-center text-sm font-medium text-primary mt-3 group-hover:underline">
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

            {/* Assessment CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
                                Not Sure What You're Experiencing?
                            </h2>
                            <p className="mt-3 text-primary-foreground/80 text-lg">
                                Mental health conditions often overlap, and it's normal to be unsure about what you're
                                going through. Our comprehensive psychiatric evaluation can help identify what's happening
                                and create a clear path forward.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <a href="/services/comprehensive-psychiatric-assessment">
                                    Learn About Evaluations
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-20 lg:py-28 bg-card">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="text-sm font-medium text-primary tracking-wide uppercase">
                                Our Approach
                            </span>
                            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                                Treating the Whole Person
                            </h2>
                            <p className="mt-6 text-muted-foreground leading-relaxed">
                                At Oasis Health Services, we believe in treating the whole person, not just symptoms.
                                Our integrated approach combines psychiatric care with an understanding of how mental
                                health connects to physical health, relationships, and life circumstances.
                            </p>
                            <div className="mt-8 space-y-4">
                                {[
                                    {
                                        title: "Evidence-Based Treatment",
                                        description: "We use proven therapies and medications backed by scientific research."
                                    },
                                    {
                                        title: "Personalized Care Plans",
                                        description: "Your treatment is tailored to your unique needs, goals, and preferences."
                                    },
                                    {
                                        title: "Collaborative Approach",
                                        description: "You're an active partner in your care, with shared decision-making at every step."
                                    },
                                    {
                                        title: "Integrated Services",
                                        description: "From medication to therapy to innovative treatments, we offer comprehensive care."
                                    }
                                ].map((item) => (
                                    <div key={item.title} className="flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12 lg:mt-0">
                            <Card className="p-8 bg-secondary border-0">
                                <h3 className="font-serif text-2xl font-semibold text-foreground">
                                    Ready to Get Started?
                                </h3>
                                <p className="mt-4 text-muted-foreground">
                                    Taking the first step toward better mental health can feel overwhelming, but you
                                    don't have to do it alone. Our team is here to guide you through the process.
                                </p>
                                <div className="mt-6 space-y-3">
                                    <Button className="w-full" asChild>
                                        <a href="/patients">Schedule an Appointment</a>
                                    </Button>
                                    <Button variant="outline" className="w-full bg-transparent border-primary text-primary" asChild>
                                        <a href="/about/our-team">Meet Our Providers</a>
                                    </Button>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    <strong>Free 15-minute consultation</strong> available for new patients to discuss
                                    your needs and answer questions.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Crisis Notice */}
            {/* <section className="py-6 bg-destructive/10 border-y border-destructive/20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                        <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
                        <p className="text-sm text-foreground">
                            <strong>If you are experiencing a medical or psychiatric emergency,</strong>{" "}
                            call 911 or go to your nearest emergency room. You can also call or text{" "}
                            <a href="tel:988" className="font-semibold text-destructive hover:underline">988</a>{" "}
                            for the Suicide & Crisis Lifeline.
                        </p>
                    </div>
                </div>
            </section> */}
        </>
    )
}