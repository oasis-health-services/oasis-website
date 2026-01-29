import { ClipboardList, UserCheck, Video, Calendar } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "./ui/button";

const steps = [
    {
        step: "01",
        title: "Online Assessment",
        description: "Complete our secure online form",
        icon: ClipboardList,
    },
    {
        step: "02",
        title: "Free Consultation",
        description: "Speak with our care team",
        icon: UserCheck,
    },
    {
        step: "03",
        title: "Schedule Your Visit",
        description: "Choose a convenient time that works for you. Same-week appointments available.",
        icon: Calendar,
    },
    {
        step: "04",
        title: "Meet Your Provider",
        description: "Connect with your provider via secure video from the comfort of your home or in-person at our Georgia office.",
        icon: Video,
    },
]

export function HowItWorks({ className = "py-16 sm:py-24 bg-background" } = {}) {
    return (
        <section id="how-it-works" className={className}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">
                            How It Works
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Getting started with Oasis is simple. Begin your journey to better health in four easy steps.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-16 relative">
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (

                            <motion.div key={step.step} initial={{
                                opacity: 0,
                                y: 20
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true
                            }} transition={{
                                delay: index * 0.1
                            }} className="relative text-center">
                                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                                    <step.icon className="h-7 w-7" />
                                </div>

                                <div className="mt-6">
                                    <span className="text-sm font-bold text-primary">{step.step}</span>
                                    <h3 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="/start">
                        <Button size="lg" className="gradient-button">
                            <span>Get Started Today</span>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}