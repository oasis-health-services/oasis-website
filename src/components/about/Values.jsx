import { Check } from "lucide-react"
import { motion } from 'framer-motion';


const whyChooseUs = [
    {
        title: "Commitment to Holistic Health",
        description: "We treat the whole person, not just symptoms, addressing mental, emotional, and physical wellness together.",
    },
    {
        title: "Personalized, Integrative Treatment Plans",
        description: "Every care plan is tailored to your unique needs, combining the best therapeutic approaches for your situation.",
    },
    {
        title: "Telehealth Convenience & Accessibility",
        description: "Access quality mental health care from anywhere in Georgia through our secure, easy-to-use virtual platform.",
    },
    {
        title: "Evidence-Based Therapy & Safe Medication Management",
        description: "Our treatments are grounded in the latest clinical research, ensuring you receive proven, effective care.",
    },
    {
        title: "Dual-Certified Providers",
        description: "Our lead provider is certified in both psychiatric mental health and family practice, offering unique integrated care.",
    },
    {
        title: "Culturally Sensitive Care",
        description: "We honor and respect diverse backgrounds, ensuring every patient feels seen, heard, and understood.",
    },
]

export function Values() {
    return (
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="values-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left column */}
                    <div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Why Choose Oasis</span>
                        <h2 id="values-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            What Sets Us Apart
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            At Oasis Health Services, we go beyond traditional mental health care to provide a truly
                            personalized, compassionate experience that addresses your unique needs.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-3 gap-8 py-8 border-y border-border">
                            <div>
                                <p className="text-3xl font-serif font-semibold text-primary">20+</p>
                                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-serif font-semibold text-primary">1000+</p>
                                <p className="text-sm text-muted-foreground mt-1">Patients Served</p>
                            </div>
                            <div>
                                <p className="text-3xl font-serif font-semibold text-primary">4.9</p>
                                <p className="text-sm text-muted-foreground mt-1">Patient Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column - checklist */}
                    <div className="mt-12 lg:mt-0">
                        <div className="space-y-6">
                            {whyChooseUs.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
