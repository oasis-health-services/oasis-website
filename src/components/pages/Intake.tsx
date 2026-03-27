import { ArrowRight, CheckCircle2, Clock, CreditCard, FileText, HelpCircle, Phone, Shield } from "lucide-react"
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/contact";
import { StartNowForm } from "../forms/StartNowForm";


const acceptedInsurance = [
    "Aetna",
    "Ambetter",
    "Amerigroup",
    "Anthem",
    "Beacon",
    "BCBS",
    "Caresource",
    "Cigna",
    "ComPsych",
    "Humana",
    "OSCAR",
    "Medicaid",
    "Medicare",
    "Meritain Health",
    "OPTUM",
    "Premera",
    "Regence",
    "Surest",
    "Tricare",
    "United Health Care",
    "UMR",
]

const processSteps = [
    {
        step: 1,
        title: "Submit Your Info",
        description: "Complete the form with your information",
    },
    {
        step: 2,
        title: "Review Information",
        description: "We review your information to determine how we can best serve you",
    },
    {
        step: 3,
        title: "We Verify Benefits",
        description: "We contact your carrier to verify your coverage within 2-3 business days",
    },
    {
        step: 4,
        title: "Review Results",
        description: "We contact you with your coverage details and any costs",
    },
    {
        step: 5,
        title: "Schedule Appointment",
        description: "We schedule your appointment with full clarity on costs",
    },
]

const faqs = [
    {
        question: "How long does verification take?",
        answer: "We typically verify benefits within 2-3 business days. We will contact you by phone or email with the results, including your copay, deductible status, and any prior authorization requirements.",
    },
    {
        question: "What if my insurance is not on the accepted list?",
        answer: "We may still be able to work with your plan. Submit your information and our team will check with your carrier. If we are out-of-network, we can provide superbills for out-of-network reimbursement.",
    },
    {
        question: "Do I need to verify insurance before my first visit?",
        answer: `While not required, we strongly recommend it. Verifying beforehand helps you understand your financial responsibility and avoids surprises. You can also verify by calling us directly at ${contact.phone}.`,
    },
    {
        question: "What if I don't have insurance?",
        answer: "We offer competitive self-pay rates and can discuss payment plans. Contact our office to learn more about self-pay options and sliding scale fees based on financial need.",
    },
    {
        question: "Does insurance cover mental health services?",
        answer: "Most insurance plans are required to cover mental health services under the Mental Health Parity Act. However, coverage levels, copays, and deductible requirements vary by plan. That is why verification is important.",
    },
    {
        question: "What information do I need to complete this form?",
        answer: "You will need your insurance card (front and back), your member/subscriber ID, group number, and basic personal information. If someone else is the primary subscriber (such as a spouse or parent), you will need their name and date of birth as well.",
    },
]

function HeroSection() {
    return (
        <section className="bg-secondary py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">For Patients</span>
                    </div>
                    <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl text-balance">
                        Your first step toward wellness
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty leading-relaxed">
                        Begin your journey to better mental health today.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {processSteps.map((item) => (
                        <motion.div key={item.step}
                            initial={{ opacity: 0, x: -300 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: item.step * 0.25 }}
                            className="flex items-start gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shrink-0">
                                {item.step}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function MainSection() {
    return (
        <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className="lg:col-span-2">
                        <StartNowForm />
                    </motion.div>

                    <div className="mt-8 lg:mt-0 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, }}>
                            <Card className="bg-card border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                                        <CreditCard className="h-4 w-4 text-primary" />
                                        Accepted Insurance
                                    </h3>
                                    <ul className="space-y-2">
                                        {acceptedInsurance.map((carrier) => (
                                            <li key={carrier} className="flex items-center gap-2 text-sm text-foreground">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                                                {carrier}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-xs text-muted-foreground">
                                        Additional carriers may be accepted. Contact us to check your specific plan.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, }}>
                            <Card className="bg-card border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                                        <Clock className="h-4 w-4 text-primary" />
                                        What to Expect
                                    </h3>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <FileText className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>Form takes approximately 5 minutes to complete</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>Verification completed within 2-3 business days</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            <span>We will call or email you with the results</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, }}>
                            <Card className="bg-primary/5 border-primary/20">
                                <CardContent className="p-6 text-center">
                                    <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                                    <h3 className="font-semibold text-foreground mb-1">Need Help?</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Prefer to verify by phone? Our billing team is happy to assist.
                                    </p>
                                    <Button className="bg-transparent border-primary border text-primary hover:text-white w-full" asChild>
                                        <a href={`tel:${contact.phone}`}>
                                            <Phone className="mr-2 h-4 w-4" />
                                            {contact.phone}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, }}>
                            <Card className="bg-card border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-2">Self-Pay Options</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        No insurance? We offer competitive self-pay rates and flexible payment plans.
                                    </p>
                                    <Button variant="ghost" className="p-0 h-auto text-sm" asChild>
                                        <a href="/contact">
                                            Contact us for rates
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FAQSection() {
    return (
        <section className="py-12 lg:py-16 bg-secondary">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Common Questions</span>
                    </div>
                    <h2 className="font-serif text-3xl font-semibold text-foreground">
                        Insurance Verification FAQ
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.25 }}
                        >
                            <Card className="bg-card border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default {
    HeroSection,
    MainSection,
    FAQSection,
};