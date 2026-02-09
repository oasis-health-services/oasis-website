import { Card, CardContent } from "@/components/ui/card"
import {
    Brain,
    Heart,
    Zap,
    Puzzle,
    Wine,
    AlertTriangle,
    Users,
    RotateCcw,
    Eye,
    ArrowRight
} from "lucide-react"
import { motion } from 'framer-motion';

const conditions = [
    {
        icon: Brain,
        title: "Anxiety Disorders",
        href: "/conditions/anxiety-disorders",
    },
    {
        icon: Heart,
        title: "Mood Disorders",
        href: "/conditions/mood-disorders",
    },
    {
        icon: Zap,
        title: "ADHD",
        href: "/conditions/neurodevelopmental-disorders",
    },
    {
        icon: Puzzle,
        title: "Autism Spectrum Disorder",
        href: "/conditions/neurodevelopmental-disorders",
    },
    {
        icon: Wine,
        title: "Substance-Related Disorders",
        href: "/conditions/substance-related-disorders",
    },
    {
        icon: AlertTriangle,
        title: "Trauma & Stress-Related",
        href: "/conditions/trauma-stress-disorders",
    },
    {
        icon: Users,
        title: "Personality Disorders",
        href: "/conditions/personality-disorders",
    },
    {
        icon: RotateCcw,
        title: "OCD & Related Disorders",
        href: "/conditions/ocd-related-disorders",
    },
    {
        icon: Eye,
        title: "Psychotic Disorders",
        href: "/conditions/psychotic-disorders",
    },
]

export function ConditionsGrid({ className = "py-20 bg-secondary" } = {}) {
    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} className="mx-auto max-w-2xl text-center">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                            Conditions We Treat
                        </h2>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                            <a key={index} href={condition.href}>
                                <Card className="h-full hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <condition.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1 flex items-center justify-between">
                                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {condition.title}
                                                </h3>
                                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
