import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/5" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto max-w-7xl px-6 lg:px-8"
            >
                <div className="max-w-3xl">
                    <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                        About Oasis Health Services
                    </span>
                    <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                        Bringing a Fresh Perspective to Mental Health Care
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl text-pretty">
                        At Oasis Health Services, we believe mental wellness is a journey, not a destination.
                        We walk alongside you with personalized care and guidance, supporting lasting well-being at your own pace.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <a href="/start">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="bg-transparent border-primary text-primary">
                            <a href="#providers">Meet Our Providers</a>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
