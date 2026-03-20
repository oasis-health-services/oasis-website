import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, ArrowRight, BookOpen, CalendarClock, Clock, CreditCard, FileText, HelpCircle, Mail, MessageSquare, Phone, Pill, Shield, Upload, UserPlus, Users } from "lucide-react"
import { motion } from "framer-motion"
import { contact } from "@/lib/contact"

const helpCategories = [
    {
        title: "General Question",
        description: "Ask our team about your care, treatment options, or anything else on your mind.",
        icon: MessageSquare,
        href: "/resources/help-center/request/general",
        tag: "Most Popular",
        estimate: "1-2 business days",
    },
    {
        title: "Prescription Refill",
        description: "Request a medication refill or ask about dosage changes and side effects.",
        icon: Pill,
        href: "/resources/help-center/request/prescription",
        tag: null,
        estimate: "24-48 hours",
    },
    {
        title: "Appointment Help",
        description: "Reschedule, cancel, or request new appointment availability with your provider.",
        icon: CalendarClock,
        href: "/resources/help-center/request/appointment",
        tag: null,
        estimate: "Same day",
    },
    {
        title: "Medical Records",
        description: "Request copies of your treatment records, summaries, or documentation for other providers.",
        icon: FileText,
        href: "/resources/help-center/request/records",
        tag: null,
        estimate: "3-5 business days",
    },
    {
        title: "Secure Document Upload",
        description: "Upload documents our team has requested from you, such as prior records, forms, or insurance cards.",
        icon: Upload,
        href: "/resources/help-center/upload",
        tag: "Secure",
        estimate: "Confirmed on upload",
    },
    {
        title: "Insurance & Billing",
        description: "Questions about your coverage, statements, copays, or payment options.",
        icon: CreditCard,
        href: "/resources/help-center/request/billing",
        tag: null,
        estimate: "2-3 business days",
    },
    {
        title: "Emergency Contact",
        description: "Provide or update your emergency contact information for our records.",
        icon: UserPlus,
        href: "/resources/help-center/forms/emergency-contact",
        tag: null,
        estimate: "Confirmed on submit",
    },
    {
        title: "Guardian Information",
        description: "Submit guardian or legal representative information for a patient.",
        icon: Users,
        href: "/resources/help-center/forms/guardian-contact",
        tag: null,
        estimate: "Confirmed on submit",
    },
]

const quickLinks = [
    { label: "Verify Insurance", href: "/patients/verify-insurance", icon: Shield },
    { label: "Take a Self-Assessment", href: "/assessments", icon: BookOpen },
    { label: "Crisis Resources", href: "/resources/crisis", icon: AlertTriangle },
    { label: "FAQ", href: "/resources/faq", icon: HelpCircle },
]

function HeroSection() {
    return (
        <section className="bg-secondary py-16 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Patient Support</span>
                    </div>
                    <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl text-balance">
                        How Can We Help?
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
                        Choose a category below to submit a request, ask a question, or securely send
                        documents to our care team. We are here to support you.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

function CategoriesSection() {

    return (
        <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {helpCategories.map((category, index) => (
                        <motion.a key={category.title} href={category.href} className="group"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 * index }}
                        >
                            <Card className="h-full hover:border-primary/30 hover:shadow-lg transition-all duration-200 relative overflow-hidden">
                                {category.tag && (
                                    <div className="absolute top-4 right-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                            {category.tag}
                                        </span>
                                    </div>
                                )}
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                        <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                        {category.description}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Clock className="h-3.5 w-3.5" />
                                            {category.estimate}
                                        </span>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

function QuickLinksSection() {
    return (
        <section className="py-12 lg:py-16 bg-secondary">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                    {/* Quick Links */}
                    <div>
                        <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Quick Links</h2>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {quickLinks.map((link) => (
                                <a key={link.href} href={link.href} className="group">
                                    <Card className="hover:border-primary/30 hover:shadow-md transition-all">
                                        <CardContent className="p-4 flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                                                <link.icon className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                                            <ArrowRight className="h-3.5 w-3.5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                                        </CardContent>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="mt-8 lg:mt-0">
                        <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">Prefer to Talk?</h2>
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Our patient support team is available Monday through Friday, 8am to 5:30pm EST.
                                    For urgent clinical matters outside of business hours, please call our main line.
                                </p>
                                <div className="space-y-3">
                                    <Button variant="outline" className="w-full bg-transparent justify-start py-8" asChild>
                                        <a href={`tel:${contact.phoneUrl}`}>
                                            <Phone className="mr-3 h-4 w-4 text-primary" />
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-foreground">{contact.phone}</p>
                                                <p className="text-xs text-muted-foreground">Main Office Line</p>
                                            </div>
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full bg-transparent justify-start py-8" asChild>
                                        <a href="mailto:support@oasishealthservices.com">
                                            <Mail className="mr-3 h-4 w-4 text-primary" />
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-foreground">support@oasishealthservices.com</p>
                                                <p className="text-xs text-muted-foreground">Email Support</p>
                                            </div>
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default {
    HeroSection,
    CategoriesSection,
    QuickLinksSection,
};