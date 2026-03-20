import { EmergencyContactForm } from "@/components/forms/EmergencyContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Info, Shield, UserPlus } from "lucide-react";
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="bg-secondary py-12 lg:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-7xl px-6 lg:px-8"
            >
                <a href="/resources/help-center" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Help Center
                </a>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <UserPlus className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Emergency Contact Information
                        </h1>
                        <p className="mt-2 text-muted-foreground text-pretty leading-relaxed">
                            Provide someone we can contact in case of an emergency related to your care.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

function MainSection() {
    return (
        <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <EmergencyContactForm />
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 lg:mt-0 space-y-6"
                    >
                        {/* Why we need this */}
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                                    <Info className="h-4 w-4 text-primary" />
                                    Why We Need This
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Your emergency contact is someone we can reach if we are unable to contact
                                    you directly, or in situations where we need to coordinate your care with
                                    a trusted person.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Privacy */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                                    <Shield className="h-4 w-4 text-primary" />
                                    Your Privacy
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Emergency contact information is kept confidential and only used when
                                    necessary for your safety and care. We will not contact this person
                                    for routine matters without your explicit permission.
                                </p>
                            </CardContent>
                        </Card>

                        {/* When we contact */}
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-3">When We May Reach Out</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Medical emergencies during treatment
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Safety concerns requiring immediate action
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Unable to reach you for critical matters
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Coordinating care at your request
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default {
    HeroSection,
    MainSection
}

