import { ArrowRight, Pill, MessageCircle, Video, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';

const services = [
    {
        icon: Pill,
        title: "Medication Management",
        href: "/services/medication-management",
        description: "Expert psychiatric evaluation and ongoing medication management with careful monitoring to optimize your treatment plan and minimize side effects.",
        features: ["Comprehensive psychiatric evaluation", "Personalized medication plans", "Ongoing monitoring & adjustments"],
    },
    {
        icon: MessageCircle,
        title: "Therapy & Counseling",
        href: "/services/therapy-counseling",
        description: "One-on-one counseling sessions using evidence-based approaches like CBT, DBT, and trauma-focused therapies to help you work through challenges.",
        features: ["Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)", "Trauma-informed approaches"],
    },
    {
        icon: Video,
        title: "Telehealth Services",
        href: "/services/telehealth",
        description: "Convenient virtual appointments from the comfort of your home, providing the same quality care with added flexibility and accessibility.",
        features: ["Secure video consultations", "Flexible scheduling", "No commute required"],
    },
    {
        icon: ClipboardCheck,
        title: "Comprehensive Assessment",
        href: "/services/comprehensive-psychiatric-assessment",
        description: "Thorough diagnostic evaluations to understand your symptoms and develop an accurate diagnosis and effective treatment plan.",
        features: ["Comprehensive evaluations", "Accurate diagnosis", "Treatment recommendations"],
    }
]

export function Services() {
    return (
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="services-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                    {/* Left column - sticky header */}


                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0"
                    >
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Services</span>
                        <h2 id="services-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Comprehensive Mental Health Services
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            From therapy and medication management to integrated primary care, we offer a full spectrum
                            of services to support your mental wellness journey.
                        </p>
                        <div className="mt-8">
                            <Button asChild>
                                <a href="/services">
                                    Explore All Services
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right column - services grid */}
                    <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            {services.map((service, index) => (

                                <motion.div key={service.title} initial={{
                                    opacity: 0,
                                    y: 30
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
                                    <div key={service.title} className="group">
                                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                                            <service.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <a href={service.href}><h3 className="text-lg font-semibold text-foreground">{service.title}</h3></a>
                                        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
