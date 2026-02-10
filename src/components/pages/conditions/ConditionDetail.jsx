import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    AlertTriangle,
    CloudRain,
    Zap,
    User,
    Eye,
    Repeat,
    Wine,
    Brain,
    ArrowRight,
    CheckCircle,
    AlertCircle,
    Stethoscope,
    Calendar,
    Phone,
    HelpCircle
} from "lucide-react"
import { getRelatedConditions } from "@/lib/conditions-data"

const iconMap = {
    AlertTriangle,
    CloudRain,
    Zap,
    User,
    Eye,
    Repeat,
    Wine,
    Brain,
}

export default function ConditionDetail({ condition }) {

    const Icon = iconMap[condition.icon] || Brain
    const relatedConditions = getRelatedConditions(condition.relatedConditions)

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-secondary border-b border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <a href="/" className="hover:text-foreground transition-colors">Home</a>
                        <span>/</span>
                        <a href="/conditions" className="hover:text-foreground transition-colors">Conditions</a>
                        <span>/</span>
                        <span className="text-foreground font-medium">{condition.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <Badge variant="secondary" className="mb-2">Conditions We Treat</Badge>
                                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
                                        {condition.title}
                                    </h1>
                                </div>
                            </div>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {condition.fullDescription}
                            </p>
                        </motion.div>
                        <motion.div className="mt-8 lg:mt-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Card className="border-primary/20 bg-card">
                                <CardContent className="p-6">
                                    <h2 className="font-semibold text-foreground mb-4">Get Help Today</h2>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Our experienced providers specialize in treating {condition.title.toLowerCase()}.
                                        Schedule an evaluation to start your journey to better mental health.
                                    </p>
                                    <div className="space-y-3">
                                        <Button className="w-full" asChild>
                                            <a href="/patients">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                Schedule Appointment
                                            </a>
                                        </Button>
                                        <Button variant="outline" className="w-full bg-transparent" asChild>
                                            <a href="tel:+5093816035">
                                                <Phone className="mr-2 h-4 w-4" />
                                                (509) 381-6035
                                            </a>
                                        </Button>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-4 text-center">
                                        Free 15-minute consultation available
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Symptoms */}
                            <div id="symptoms">

                                <motion.div className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <AlertCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        Signs & Symptoms
                                    </h2>
                                </motion.div>
                                <motion.p className="text-muted-foreground mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Recognizing the symptoms is the first step toward getting help. Common signs of {condition.title.toLowerCase()} include:
                                </motion.p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {condition.symptoms.map((symptom, index) => (
                                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">{symptom}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Causes */}
                            <div id="causes">
                                <motion.div className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        Causes & Risk Factors
                                    </h2>
                                </motion.div>
                                <motion.p className="font-serif text-muted-foreground mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Understanding what contributes to {condition.title.toLowerCase()} can help in treatment and prevention:
                                </motion.p>
                                <ul className="space-y-3 font-serif">
                                    {condition.causes.map((cause, index) => (
                                        <motion.li key={index} className="flex items-start gap-3"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-muted-foreground">{cause}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Treatments */}
                            <div id="treatment">
                                <motion.div className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Stethoscope className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        Treatment Options
                                    </h2>
                                </motion.div>
                                <motion.p className="text-muted-foreground mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    Effective treatment is available. At Oasis Health Services, we may use one or more of
                                    these evidence-based approaches:
                                </motion.p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {condition.treatments.map((treatment, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}>
                                            <Card key={index} className="bg-card border-border">
                                                <CardContent className="p-4 flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                        <span className="text-sm font-semibold text-primary">{index + 1}</span>
                                                    </div>
                                                    <span className="text-sm font-medium text-foreground">{treatment}</span>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* When to Seek Help */}
                            <motion.div id="when-to-seek-help"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="font-serif bg-red-50 border-red-500 text-red-800 border-0 border-l-4">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 text-red-800">
                                            <AlertTriangle className="h-5 w-5 text-red-600" />
                                            <h4 className="font-bold text-xl">When to Seek Urgent Help</h4>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">
                                            Consider reaching out to a mental health professional if you experience:
                                        </p>
                                        <ul className="space-y-2">
                                            {condition.whenToSeekHelp.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                                                    <span className="text-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>


                            {/* FAQs */}
                            <div id="faqs">
                                <motion.div className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <HelpCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        Frequently Asked Questions
                                    </h2>
                                </motion.div>
                                <Accordion type="single" collapsible className="w-full">
                                    {condition.faqs.map((faq, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <AccordionItem key={index} value={`faq-${index}`}>
                                                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </motion.div>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <motion.div className="mt-12 lg:mt-0 space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Quick Navigation */}
                            <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle className="text-base">On This Page</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <nav className="space-y-2">
                                        {[
                                            { id: "symptoms", label: "Signs & Symptoms" },
                                            { id: "causes", label: "Causes & Risk Factors" },
                                            { id: "treatment", label: "Treatment Options" },
                                            { id: "when-to-seek-help", label: "When to Seek Help" },
                                            { id: "faqs", label: "FAQs" },
                                        ].map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </nav>
                                </CardContent>
                            </Card>

                            {/* Related Conditions */}
                            {relatedConditions.length > 0 && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Related Conditions</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0 space-y-3">
                                        {relatedConditions.map((related) => {
                                            const RelatedIcon = iconMap[related.icon] || Brain
                                            return (
                                                <a
                                                    key={related.slug}
                                                    href={`/conditions/${related.slug}`}
                                                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                        <RelatedIcon className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                        {related.title}
                                                    </span>
                                                </a>
                                            )
                                        })}
                                    </CardContent>
                                </Card>
                            )}

                            {/* Resources Card */}
                            <Card className="bg-secondary border-0">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-3">Helpful Resources</h3>
                                    <div className="space-y-2">
                                        <a
                                            href="/resources/self-care"
                                            className="block text-sm text-primary hover:underline"
                                        >
                                            Self-Care Toolkit
                                        </a>
                                        <a
                                            href="/resources/crisis"
                                            className="block text-sm text-primary hover:underline"
                                        >
                                            Crisis Resources
                                        </a>
                                        <a
                                            href="/resources/faq"
                                            className="block text-sm text-primary hover:underline"
                                        >
                                            General FAQs
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <motion.div className="mx-auto max-w-7xl px-6 lg:px-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
                            Take the First Step Toward Healing
                        </h2>
                        <p className="mt-4 text-primary-foreground/80 text-lg">
                            You don't have to face {condition.title.toLowerCase()} alone. Our compassionate team is
                            here to help you find relief and build a path to better mental health.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <a href="/patients">Schedule Your Appointment</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
                                <a href="/providers">Meet Our Providers</a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Back to Conditions */}
            {/* <section className="py-8 bg-secondary border-t border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <a
                        href="/conditions"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to All Conditions
                    </a>
                </div>
            </section> */}
        </>
    )
}