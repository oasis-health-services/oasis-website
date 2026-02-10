import { Heart, Lightbulb, Shield, Users } from "lucide-react"
import { motion } from 'framer-motion';

const values = [
    {
        icon: Heart,
        title: "Compassion",
        description: "Every interaction is guided by empathy and understanding",
    },
    {
        icon: Shield,
        title: "Evidence-Based",
        description: "Treatments rooted in the latest clinical research",
    },
    {
        icon: Users,
        title: "Integrative",
        description: "Combining psychiatric and primary care for whole-person healing",
    },
    {
        icon: Lightbulb,
        title: "Accessible",
        description: "Telehealth services making care available wherever you are",
    },
]

export function MissionVision() {
    return (
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="mission-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Mission</span>
                        <h2 id="mission-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            A Trusted Oasis of Healing
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                            To be a trusted oasis of healing where individuals and families find balance, resilience,
                            and hope through compassionate, integrative care. We are committed to providing a safe space
                            where every person is heard, respected, and supported on their path to wellness.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-medium text-accent tracking-wide uppercase">Our Vision</span>
                        <h3 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Empowering Every Person to Thrive
                        </h3>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                            We empower every person to thrive in mind and body through holistic, evidence-based mental health
                            and medical services. With compassion and respect, we create safe spaces—both virtual and in-person—where
                            healing begins and lasting change takes root.
                        </p>
                    </motion.div>
                </div>

                {/* Core values */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <h3 className="text-center font-serif text-2xl font-semibold text-foreground mb-12">What Guides Our Care</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <value.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground">{value.title}</h4>
                                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
