import { Heart, UserCheck, Video, FlaskConical } from "lucide-react"

const features = [
    {
        icon: Heart,
        title: "Commitment to holistic health",
        description: "We address mind, body, and spirit together for comprehensive wellness that goes beyond symptoms.",
    },
    {
        icon: UserCheck,
        title: "Personalized, integrative treatment plans",
        description: "Every care plan is tailored to your unique needs, lifestyle, and goals for lasting results.",
    },
    {
        icon: Video,
        title: "Telehealth convenience and accessibility",
        description: "Access quality mental health care from anywhere in Georgia, on your schedule.",
    },
    {
        icon: FlaskConical,
        title: "Evidence-based therapy and safe medication management",
        description: "Our providers use proven approaches combined with careful medication oversight when needed.",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                        Why Choose Oasis
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground text-lg leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}