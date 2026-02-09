import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from 'framer-motion';

export function WellnessPath({ className = "py-20 bg-primary text-primary-foreground" } = {}) {
    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8">

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-balance">
                            Your Path to Mental Wellness
                        </h2>
                    </motion.div>

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <p className="text-lg text-primary-foreground/90 leading-relaxed">
                            Achieving mental wellness is a journey, not a sprint. At Oasis Health Services,
                            we walk alongside you with personalized care and guidance, supporting lasting
                            well-being at your own pace.
                        </p>
                    </motion.div>

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <div className="pt-4">
                            <Button
                                size="lg"
                                variant="secondary"
                                asChild
                                className="text-base px-8"
                            >
                                <a href="/contact" className="inline-flex items-center gap-2">
                                    Start Now
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
