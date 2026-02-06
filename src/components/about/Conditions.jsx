import { ArrowRight, Brain, CloudRain, Zap, Puzzle, Wine, AlertTriangle, User, Repeat, Eye } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from 'framer-motion';

const conditions = [
    {
        icon: AlertTriangle,
        title: "Anxiety Disorders",
        description: "Including generalized anxiety, panic disorder, social anxiety, and phobias. We help you manage worry and regain control.",
        href: "/conditions/anxiety-disorders",
    },
    {
        icon: CloudRain,
        title: "Mood Disorders",
        description: "Comprehensive treatment for depression, bipolar disorder, and seasonal affective disorder to restore emotional balance.",
        href: "/conditions/mood-disorders",
    },
    {
        icon: Zap,
        title: "ADHD",
        description: "Specialized assessment and treatment for attention-deficit/hyperactivity disorder in children, teens, and adults.",
        href: "/conditions/neurodevelopmental-disorders",
    },
    {
        icon: Puzzle,
        title: "Autism Spectrum Disorder",
        description: "Supportive care and resources for individuals on the autism spectrum and their families.",
        href: "/conditions/neurodevelopmental-disorders",
    },
    {
        icon: Wine,
        title: "Substance-Related Disorders",
        description: "Evidence-based treatment approaches for addiction and substance use disorders with compassionate support.",
        href: "/conditions/substance-related-disorders",
    },
    {
        icon: Brain,
        title: "Trauma & PTSD",
        description: "Trauma-informed care helping you process difficult experiences and build resilience.",
        href: "/conditions#trauma-stress-disorders",
    },
    {
        icon: User,
        title: "Personality Disorders",
        description: "Personalized treatment plans addressing borderline, narcissistic, and other personality disorders.",
        href: "/conditions/personality-disorders",
    },
    {
        icon: Repeat,
        title: "OCD & Related Disorders",
        description: "Specialized therapy and medication management for obsessive-compulsive and related conditions.",
        href: "/conditions/ocd-related-disorders",
    },
    {
        icon: Eye,
        title: "Psychotic Disorders",
        description: "Comprehensive psychiatric care for schizophrenia and other psychotic spectrum conditions.",
        href: "/conditions/psychotic-disorders",
    },
]

export function Conditions() {
    return (
        <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="conditions-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Conditions We Treat</span>
                    <h2 id="conditions-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Specialized Care for a Wide Range of Mental Health Conditions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        Our experienced providers offer evidence-based treatment for various mental health conditions,
                        creating personalized care plans tailored to your unique needs.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition, index) => (

                        <motion.div key={condition.id} initial={{
                            opacity: 0,
                            y: 10
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true,
                            margin: "-50px"
                        }} transition={{
                            duration: 0.4,
                            delay: index * 0.03,
                            ease: "easeOut"
                        }}>
                            <Card key={condition.title} className="group hover:shadow-lg transition-shadow bg-card border-border">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <condition.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-foreground">{condition.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground leading-relaxed">
                                        {condition.description}
                                    </CardDescription>
                                    <a
                                        href={condition.href}
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-2"
                                    >
                                        Learn more
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </a>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="/conditions"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        View all conditions we treat
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
