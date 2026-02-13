import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    ClipboardCheck,
    Pill,
    MessageCircle,
    Video,
    Zap,
    Puzzle,
    Heart,
    Sparkles,
    Activity,
    ArrowRight,
    CheckCircle,
    Users,
    Clock,
    Calendar,
    CreditCard,
    Phone,
    HelpCircle,
    Shield,
    UserCheck,
    Brain,
    Star,
    Repeat,
    BarChart2,
    Scale,
    HeartPulse,
    ListChecks,
    FileText,
    LetterText,
    Waves,
    Focus,
    HeartHandshake,
    BadgeCheck,
    Stethoscope,
    Wifi
} from "lucide-react"
import { getRelatedServices } from "@/lib/services-data"
import { cn } from "@/lib/utils"

const iconMap = {
    ClipboardCheck,
    Pill,
    MessageCircle,
    Video,
    Zap,
    Puzzle,
    Heart,
    Sparkles,
    Activity,
    Dna: Activity,
    Shield,
    Brain,
    UserCheck,
    Star,
    Repeat,
    Scale,
    BarChart2,
    HeartPulse,
    ListChecks,
    Users,
    FileText,
    LetterText,
    Waves,
    Focus,
    HeartHandshake,
    BadgeCheck,
    Stethoscope,
    Wifi
}

export default function ServiceDetail({ service }) {

    const Icon = iconMap[service.icon] || ClipboardCheck;
    const DetailsIcon = iconMap[service.serviceDetails?.icon];
    const relatedServices = getRelatedServices(service.relatedServices);


    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-secondary border-b border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <a href="/" className="hover:text-foreground transition-colors">Home</a>
                        <span>/</span>
                        <a href="/services" className="hover:text-foreground transition-colors">Services</a>
                        <span>/</span>
                        <span className="text-foreground font-medium">{service.title}</span>
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
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                                <Badge variant="secondary">Service</Badge>
                            </div>
                            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
                                {service.title}
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                                {service.fullDescription}
                            </p>

                            {/* Quick Info Badges */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                {service.duration && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4 text-primary" />
                                        <span>{service.duration}</span>
                                    </div>
                                )}
                                {service.frequency && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4 text-primary" />
                                        <span>{service.frequency}</span>
                                    </div>
                                )}
                                {service.insurance && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CreditCard className="h-4 w-4 text-primary" />
                                        <span>{service.insurance}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-8 lg:mt-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <Card className="border-primary/20 bg-card">
                                <CardContent className="p-6">
                                    <h2 className="font-semibold text-foreground mb-4">Schedule This Service</h2>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Ready to get started? Book your appointment online or give us a call to learn more.
                                    </p>
                                    <div className="space-y-3">
                                        <Button className="w-full" asChild>
                                            <a href="/patients">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                Book Appointment
                                            </a>
                                        </Button>
                                        <Button variant="outline" className="w-full bg-transparent border-primary text-primary" asChild>
                                            <a href="tel:+15093816035">
                                                <Phone className="mr-2 h-4 w-4" />
                                                (509) 381-6035
                                            </a>
                                        </Button>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-border">
                                        <p className="text-xs text-muted-foreground text-center">
                                            Free 15-minute consultation for new patients
                                        </p>
                                    </div>
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
                            {/* Benefits */}
                            <div id="benefits">
                                <motion.div
                                    className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        Benefits
                                    </h2>
                                </motion.div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-start gap-3 p-4 rounded-lg bg-secondary"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                                        >
                                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* What to Expect */}
                            <div id="what-to-expect">
                                <motion.div
                                    className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        What to Expect
                                    </h2>
                                </motion.div>
                                <p className="text-muted-foreground mb-6">
                                    Here's what you can expect when you schedule this service:
                                </p>
                                <div className="space-y-4">
                                    {service.whatToExpect.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <span className="text-sm font-semibold text-primary">{index + 1}</span>
                                            </div>
                                            <div className="pt-1">
                                                <span className="text-foreground">{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Who Is It For */}
                            <div id="who-is-it-for">
                                <motion.div
                                    className="flex items-center gap-3 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="font-serif text-2xl font-semibold text-foreground">
                                        Who Is This For?
                                    </h2>
                                </motion.div>
                                <Card className="bg-secondary border-0">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground mb-4">
                                            This service may be right for you if:
                                        </p>
                                        <ul className="space-y-3">
                                            {service.whoIsItFor.map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                                                    <span className="text-foreground">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            {service.serviceDetails && (
                                <div id="serviceDetails">

                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <DetailsIcon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h2 className="font-serif text-2xl font-semibold text-foreground">
                                            {service.serviceDetails.title}
                                        </h2>
                                    </div>

                                    <div>
                                        {service.serviceDetails.description && <p className="mb-6">{service.serviceDetails.description}</p>}

                                        <div className="grid md:grid-cols-2 gap-8">
                                            {service.serviceDetails.sections.map((section, index) => {

                                                const Icon = iconMap[section.icon] || CheckCircle;

                                                return (
                                                    <div key={index} className="flex flex-col items-center border p-6 rounded-lg gap-2 bg-secondary">
                                                        {Icon &&
                                                            <div className={cn("inline-flex items-center justify-center w-16 h-16 rounded-full mb-1", section.style ?? "")}>
                                                                <Icon className={cn("h-8 w-8", section.iconStyle ?? "text-primary")} />
                                                            </div>
                                                        }

                                                        <h3 className="font-serif text-center text-xl font-semibold text-foreground mb-2">{section.title}</h3>
                                                        {section.description && <p className="text-center text-muted-foreground">{section.description}</p>}
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                </div>
                            )}

                            {service.highlight && (
                                <div id="highlight">
                                    <div className={cn("mt-12 mb-12 p-8 border-l-4 rounded-r-lg", service.highlight.style ?? "")}>
                                        <div className="flex items-center">
                                            <Shield className={cn("h-8 w-8 mr-4 flex-shrink-0", service.highlight.iconStyle ?? "")} />
                                            <div>
                                                <h4 className="font-bold text-xl">{service.highlight.title}</h4>
                                                <p className="mt-1">{service.highlight.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* FAQs */}
                            <div id="faqs">
                                <motion.div
                                    className="flex items-center gap-3 mb-6"
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
                                    {service.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`faq-${index}`}>
                                            <AccordionTrigger className="text-left text-foreground hover:text-primary">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="mt-12 lg:mt-0 space-y-8">
                            {/* Quick Navigation */}
                            <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle className="text-base">On This Page</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <nav className="space-y-2">
                                        {[
                                            { id: "benefits", label: "Benefits" },
                                            { id: "what-to-expect", label: "What to Expect" },
                                            { id: "who-is-it-for", label: "Who Is This For?" },
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
                                        {/* {service.serviceDetails && (
                                            <a
                                                href="#serviceDetails"
                                                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                            >
                                                {service.serviceDetails.title}
                                            </a>
                                        )} */}
                                    </nav>
                                </CardContent>
                            </Card>

                            {/* Service Details */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Service Details</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0 space-y-4">
                                    {service.duration && (
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Duration</p>
                                            <p className="text-sm text-foreground">{service.duration}</p>
                                        </div>
                                    )}
                                    {service.frequency && (
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Frequency</p>
                                            <p className="text-sm text-foreground">{service.frequency}</p>
                                        </div>
                                    )}
                                    {service.insurance && (
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Insurance</p>
                                            <p className="text-sm text-foreground">{service.insurance}</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Related Services */}
                            {relatedServices.length > 0 && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Related Services</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0 space-y-3">
                                        {relatedServices.map((related) => {
                                            const RelatedIcon = iconMap[related.icon] || ClipboardCheck
                                            return (
                                                <a
                                                    key={related.slug}
                                                    href={`/services/${related.slug}`}
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

                            {/* Quick Links */}
                            <Card className="bg-secondary border-0">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
                                    <div className="space-y-2">
                                        <a
                                            href="/conditions"
                                            className="block text-sm text-primary hover:underline"
                                        >
                                            Conditions We Treat
                                        </a>
                                        <a
                                            href="/providers"
                                            className="block text-sm text-primary hover:underline"
                                        >
                                            Meet Our Providers
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
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold">
                            Ready to Get Started?
                        </h2>
                        <p className="mt-4 text-primary-foreground/80 text-lg">
                            Take the first step toward better mental health. Schedule your {service.title.toLowerCase()} appointment today.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild>
                                <a href="/patients">Schedule Appointment</a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
                                <a href="/services">View All Services</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Services */}
            {/* <section className="py-8 bg-secondary border-t border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <a
                        href="/services"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to All Services
                    </a>
                </div>
            </section> */}
        </>
    )
}