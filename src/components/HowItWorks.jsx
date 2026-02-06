// import { ClipboardList, UserCheck, Video, Calendar } from "lucide-react"
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "./ui/button";

// const steps = [
//     {
//         step: "01",
//         title: "Online Assessment",
//         description: "Complete our secure online form",
//         icon: ClipboardList,
//     },
//     {
//         step: "02",
//         title: "Free Consultation",
//         description: "Speak with our care team",
//         icon: UserCheck,
//     },
//     {
//         step: "03",
//         title: "Schedule Your Visit",
//         description: "Choose a convenient time that works for you. Same-week appointments available.",
//         icon: Calendar,
//     },
//     {
//         step: "04",
//         title: "Meet Your Provider",
//         description: "Connect with your provider via secure video from the comfort of your home or in-person at our Georgia office.",
//         icon: Video,
//     },
// ]

// export function HowItWorks({ className = "py-16 sm:py-24 bg-background" } = {}) {
//     return (
//         <section id="how-it-works" className={className}>
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="mx-auto max-w-2xl text-center">
//                     <motion.div initial={{
//                         opacity: 0,
//                         y: 20
//                     }} whileInView={{
//                         opacity: 1,
//                         y: 0
//                     }} viewport={{
//                         once: true
//                     }} className="text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">
//                             How It Works
//                         </h2>
//                         <p className="mt-4 text-lg text-muted-foreground">
//                             Getting started with Oasis is simple. Begin your journey to better health in four easy steps.
//                         </p>
//                     </motion.div>
//                 </div>

//                 <div className="mt-16 relative">
//                     <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

//                     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {steps.map((step, index) => (

//                             <motion.div key={step.step} initial={{
//                                 opacity: 0,
//                                 y: 20
//                             }} whileInView={{
//                                 opacity: 1,
//                                 y: 0
//                             }} viewport={{
//                                 once: true
//                             }} transition={{
//                                 delay: index * 0.1
//                             }} className="relative text-center">
//                                 <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
//                                     <step.icon className="h-7 w-7" />
//                                 </div>

//                                 <div className="mt-6">
//                                     <span className="text-sm font-bold text-primary">{step.step}</span>
//                                     <h3 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h3>
//                                     <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="text-center mt-12">
//                     <a href="/start">
//                         <Button size="lg" className="gradient-button">
//                             <span>Get Started Today</span>
//                         </Button>
//                     </a>
//                 </div>
//             </div>
//         </section>
//     )
// }



import { Button } from "@/components/ui/button"
import { ClipboardList, Phone, Calendar, UserCheck } from "lucide-react"

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Online Assessment",
        description: "Complete our secure online form",
    },
    {
        number: "02",
        icon: Phone,
        title: "Free Consultation",
        description: "Speak with our care team",
    },
    {
        number: "03",
        icon: Calendar,
        title: "Schedule Your Visit",
        description: "Book your first appointment",
    },
    {
        number: "04",
        icon: UserCheck,
        title: "Meet Your Provider",
        description: "Begin your healing journey",
    },
]

export function HowItWorks({ className = "py-16 sm:py-24 bg-background" } = {}) {
    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                        How It Works
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                            )}

                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center">
                                        <step.icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground text-lg">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" asChild className="text-base px-8">
                        <a href="/contact">Get Started Today</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
