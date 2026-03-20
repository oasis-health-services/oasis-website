import { HelpdeskRequestForm, type HelpCategoryConfig } from "@/components/forms/HelpdeskRequestForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Phone } from "lucide-react";
import { contact } from "@/lib/contact";
import { DynamicIcon } from "@/components/DynamicIcon";
import { motion } from "framer-motion"

export function HeroSection({ config }: { config: HelpCategoryConfig }) {

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
                        <DynamicIcon name={config.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            {config.title}
                        </h1>
                        <p className="mt-2 text-muted-foreground text-pretty leading-relaxed">
                            {config.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export function MainSection({ config }: { config: HelpCategoryConfig }) {
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
                        <HelpdeskRequestForm config={config} />
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 lg:mt-0 space-y-6"
                    >
                        {/* Expected Response */}
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                                    <Clock className="h-4 w-4 text-primary" />
                                    Expected Response Time
                                </h3>
                                <p className="text-2xl font-semibold text-primary mb-2">{config.response.time}</p>
                                <p className="text-sm text-muted-foreground">{config.response.note}</p>
                            </CardContent>
                        </Card>

                        {/* Contact */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-6 text-center">
                                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                                <h3 className="font-semibold text-foreground mb-1">Need Faster Help?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Call us directly for time-sensitive matters.
                                </p>
                                <Button variant="outline" className="bg-transparent w-full" asChild>
                                    <a href={contact.phoneUrl}>
                                        <Phone className="mr-2 h-4 w-4" />
                                        {contact.phone}
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Crisis Warning */}
                        {/* <Card className="bg-red-50 border-red-200">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold text-red-800 text-sm mb-1">Not for Emergencies</h3>
                                        <p className="text-xs text-red-700 leading-relaxed">
                                            If you or someone you know is in crisis, call 911 or the 988 Suicide & Crisis Lifeline. Do not use this form for emergencies.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card> */}
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