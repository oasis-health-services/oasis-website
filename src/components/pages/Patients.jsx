
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ArrowRight, CheckCircle, HelpCircle, CalendarCheck, Phone,
    FileText, UserCheck, Calendar, Stethoscope, Download, ExternalLink,
    MessageSquare, CreditCard, FileCheck, BookOpen, Heart, Shield,
    Send, Loader2
} from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import OptimizedImage from '@/components/OptimizedImage';
import { useForm } from 'react-hook-form';
import { ContactSchema } from '@/lib/schema';
import FormError from '../FormError';
import FieldError from '../FieldError';
import { submitContactForm } from '@/api';

const Patients = () => {
    const steps = [
        {
            number: '01',
            title: 'Complete a Secure Online Assessment',
            description: 'Fill out our confidential intake form to help us understand your needs.',
        },
        {
            number: '02',
            title: 'Receive a Free Consultation',
            description: 'Our team will review your responses and schedule a consultation if needed.',
        },
        {
            number: '03',
            title: 'Schedule Easily',
            description: 'Book your appointment through our secure online portal.',
        },
        {
            number: '04',
            title: 'Attend Your Session',
            description: 'Meet with your provider virtually or in person.',
        },
    ];

    const insurancePartners = [
        { name: 'Aetna', alt: 'Aetna logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/a1da4b7ea507773a15fc0f9d0afda54e.webp' },
        { name: 'BlueCross BlueShield', alt: 'BlueCross BlueShield logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b4915d726b2da1904d14ac200e95ba27.webp' },
        { name: 'Cigna', alt: 'Cigna logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/f778db83833b190c40c7e1eb8598b165.webp' },
        { name: 'Optum', alt: 'Optum logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/cc8d5c1f30422780fab79fe1bfe8d7bb.webp' },
        { name: 'UnitedHealthcare', alt: 'UnitedHealthcare logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/35b8e2b9fb67ed7f4f91564249adc06b.webp' },
        { name: 'UMR', alt: 'UMR logo', logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/1e3cc13010bffe27f18829d2a50f5e4c.webp' },
    ];

    const allInsuranceProviders = [
        'Aetna', 'Anthem', 'Beacon', 'Blue Cross Blue Shield', 'CareSource',
        'Cigna Health Plans', 'Compsych', 'Coordinated Care', 'Humana',
        'Magellan Health', 'Meritain Health', 'Optum', 'Oscar', 'Premera',
        'Regence', 'TriCare', 'UMR', 'United Healthcare'
    ];

    return (
        <>

            <PatientsHero />

            <IntakeProcess />

            <PatientForms />

            <ReturningPatients />

            <PatientResources />

            <ContactSection />

            {/* <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            For Patients
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Your journey to better mental health starts here
                        </p>
                    </motion.div>
                </div>
            </section> */}

            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Getting Started</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white text-2xl font-bold mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-[#2D6762] mb-2">{step.title}</h3>
                                <p className="text-[#4A5455]">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="/start">
                            <Button size="lg" className="bg-[#2D6762] hover:bg-[#2D6762]/90 text-white">
                                Get Started Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section> */}

            {/* <section className="py-20 bg-gradient-to-br from-[#90AB98]/20 to-[#69A08B]/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-4">Insurance Partners</h2>
                        <p className="text-lg text-[#4A5455]">We work with major insurers to make care accessible</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {insurancePartners.map((partner, index) => (
                            <motion.div key={partner.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24 grayscale hover:grayscale-0 transition-all">
                                <OptimizedImage alt={partner.alt} className="max-h-12 object-contain" src={partner.logo} loading="lazy" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="inline-flex items-center text-[#2D6762] text-lg hover:text-[#6D519D] transition-colors duration-300 group">
                                    <span className="animated-underline">More insurance providers</span>
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white flex flex-col">
                                <SheetHeader className="flex-shrink-0">
                                    <SheetTitle className="text-2xl font-bold text-[#2D6762]">Insurance Providers We Work With</SheetTitle>
                                </SheetHeader>
                                <div className="flex-1 overflow-y-auto py-4 -mr-6 pr-6">
                                    <ul className="space-y-3 text-lg text-[#4A5455]">
                                        {allInsuranceProviders.map((provider) => (
                                            <li key={provider} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 text-[#2D6762] mr-3 flex-shrink-0" />
                                                {provider}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </section> */}

            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-block p-4 bg-gradient-to-br from-[#2D6762] to-[#69A08B] rounded-full mb-6">
                            <HelpCircle className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Have Questions?</h2>
                        <p className="text-lg text-[#4A5455] mb-8">
                            We've compiled a list of frequently asked questions to help you get the information you need. Visit our FAQ page for answers about our services, insurance, and what to expect.
                        </p>
                        <a href="/patients/faqs">
                            <Button size="lg" className="bg-[#6D519D] hover:bg-[#6D519D]/90 text-white">
                                View All FAQs
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section> */}
        </>
    );
};

export default Patients;


function PatientsHero() {
    return (
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/5" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    <div>
                        <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                            Patient Resources
                        </span>
                        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl text-balance">
                            Interested in Becoming a New Patient?
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                            We are happy to hear it! Getting started with Oasis Health Services is simple and straightforward.
                            Our intake team will guide you through every step to ensure a smooth onboarding experience.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <a href="#become-client">
                                    Become a Patient
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="outline" className="bg-transparent border-primary text-primary" size="lg" asChild>
                                <a href="tel:+15093816035">
                                    <Phone className="mr-2 h-4 w-4" />
                                    (509) 381-6035
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Quick Info Cards */}
                    <div className="mt-12 lg:mt-0 grid gap-4">
                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <CalendarCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Quick Scheduling</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Most new patients are seen within 1-2 weeks. We offer both telehealth and in-person appointments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Insurance Accepted</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        We accept most major insurance plans. Our team verifies your benefits before your first visit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-xl p-6 border border-border">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Confidential & Secure</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Your privacy matters. All information is protected under HIPAA guidelines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function IntakeProcess() {

    const steps = [
        {
            number: "01",
            icon: FileText,
            title: "Complete Intake Form",
            description: "Click on \"Become a Patient\" below and complete the online intake form. This helps us understand your needs and match you with the right provider.",
        },
        {
            number: "02",
            icon: UserCheck,
            title: "We'll Reach Out",
            description: "Once submitted, a member of our intake team will contact you within 1-2 business days. For minors under 18, we'll contact the designated parent or guardian.",
        },
        {
            number: "03",
            icon: Calendar,
            title: "Verify Insurance & Schedule",
            description: "Our team will verify your insurance benefits, explain any costs, find the right provider for your needs, and schedule your initial appointment.",
        },
        {
            number: "04",
            icon: Stethoscope,
            title: "Begin Your Care",
            description: "Attend your first appointment via telehealth or in-person. Your provider will create a personalized treatment plan together with you.",
        },
    ]
    return (
        <section id="become-client" className="py-20 lg:py-28" aria-labelledby="intake-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Getting Started</span>
                    <h2 id="intake-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        How to Become a Patient
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        Scheduling an intake is easy. We just need a little information from you first,
                        and our team will handle the rest.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" aria-hidden="true" />
                            )}

                            <div className="relative bg-card rounded-xl p-6 border border-border h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                                        <step.icon className="h-5 w-5 text-primary-foreground" />
                                    </div>
                                    <span className="text-4xl font-serif font-semibold text-primary/20">{step.number}</span>
                                </div>
                                <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <a href="/start">
                                Become a Patient
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href="/resources/grief-support">
                                Grief Support Group Screener
                            </a>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                        Questions? Email us at{" "}
                        <a href="mailto:support@oasishealthservices.com" className="text-primary hover:underline">
                            support@oasishealthservices.com
                        </a>{" "}
                        or call{" "}
                        <a href="tel:+15093816035" className="text-primary hover:underline">
                            (509) 381-6035
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

function PatientForms() {

    const forms = [
        {
            title: "New Patient Intake Form",
            description: "Required for all new patients. Complete this form to begin the intake process.",
            type: "online",
            href: "/start",
            primary: true,
        },
        {
            title: "Release of Information (ROI)",
            description: "Authorize the release of your medical records to or from another provider.",
            type: "download",
            href: "/forms/release-of-information.pdf",
        },
        {
            title: "Guardian Authorization Form",
            description: "Required for parents or guardians of patients under 18 years of age.",
            type: "download",
            href: "/forms/guardian-authorization.pdf",
        },
        {
            title: "Medication Refill Request",
            description: "Request a refill of your current medications. Allow 48-72 hours for processing.",
            type: "online",
            href: "/medication-refill",
        },
        {
            title: "Insurance Information Form",
            description: "Update your insurance information or submit new coverage details.",
            type: "download",
            href: "/forms/insurance-info.pdf",
        },
        {
            title: "HIPAA Privacy Notice",
            description: "Review our privacy practices and how we protect your health information.",
            type: "download",
            href: "/forms/hipaa-notice.pdf",
        },
    ]

    return (
        <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="forms-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-16">
                    {/* Header */}
                    <div className="lg:col-span-1">
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Forms & Documents</span>
                        <h2 id="forms-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Patient Forms
                        </h2>
                        <p className="mt-4 text-muted-foreground text-pretty">
                            Access and download the forms you need. Online forms can be completed directly on our secure portal.
                            PDF forms can be downloaded, filled out, and brought to your appointment or emailed to us.
                        </p>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Need help with a form? Contact us at{" "}
                            <a href="mailto:support@oasishealthservices.com" className="text-primary hover:underline">
                                support@oasishealthservices.com
                            </a>
                        </p>
                    </div>

                    {/* Forms Grid */}
                    <div className="mt-10 lg:mt-0 lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {forms.map((form) => (
                                <div
                                    key={form.title}
                                    className={`bg-card rounded-xl p-5 border transition-colors ${form.primary
                                        ? "border-primary shadow-sm"
                                        : "border-border hover:border-primary/50"
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${form.primary ? "bg-primary" : "bg-primary/10"
                                            }`}>
                                            <FileText className={`h-5 w-5 ${form.primary ? "text-primary-foreground" : "text-primary"}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-foreground text-sm">{form.title}</h3>
                                            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                                                {form.description}
                                            </p>
                                            <Button
                                                variant={form.primary ? "default" : "outline"}
                                                size="sm"
                                                className="mt-3"
                                                asChild
                                            >
                                                <a
                                                    href={form.href}
                                                    target={form.type === "download" ? "_blank" : undefined}
                                                    rel={form.type === "download" ? "noopener noreferrer" : undefined}
                                                >
                                                    {form.type === "download" ? (
                                                        <>
                                                            <Download className="mr-1.5 h-3.5 w-3.5" />
                                                            Download PDF
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                                                            Open Form
                                                        </>
                                                    )}
                                                </a>
                                            </Button>
                                        </div>
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

export function ReturningPatients() {

    const portalFeatures = [
        {
            icon: Calendar,
            title: "Schedule & Manage Appointments",
            description: "Book, reschedule, or cancel appointments at your convenience.",
        },
        {
            icon: MessageSquare,
            title: "Secure Messaging",
            description: "Send confidential messages directly to your care team.",
        },
        {
            icon: CreditCard,
            title: "Pay Bills Online",
            description: "View statements and make payments securely.",
        },
        {
            icon: FileCheck,
            title: "Access Records",
            description: "View visit summaries, lab results, and treatment plans.",
        },
    ]
    return (
        <section className="py-20 lg:py-28" aria-labelledby="returning-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Content */}
                    <div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Returning Patients</span>
                        <h2 id="returning-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Welcome Back!
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            If you have seen us in the last year, you can easily manage your care through our patient portal.
                            Schedule appointments, message your provider, pay bills, and more.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <a href="https://portal.oasishealthservices.com" target="_blank" rel="noopener noreferrer">
                                    Access Patient Portal
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="outline" size="lg" className="border-primary text-primary" asChild>
                                <a href="tel:+15093816035">
                                    Call Front Desk
                                </a>
                            </Button>
                        </div>

                        <div className="mt-6 p-4 bg-secondary rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Been away for more than a year?</strong><br />
                                Please complete a new intake form to ensure we have your most current information.{" "}
                                <a href="#become-client" className="text-primary hover:underline">
                                    Start new intake
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Portal Features */}
                    <div className="mt-12 lg:mt-0">
                        <div className="bg-card rounded-2xl border border-border p-8">
                            <h3 className="font-semibold text-foreground mb-6">Patient Portal Features</h3>
                            <div className="space-y-5">
                                {portalFeatures.map((feature) => (
                                    <div key={feature.title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <feature.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-border">
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">Need portal help?</strong> Email{" "}
                                    <a href="mailto:support@oasishealthservices.com" className="text-primary hover:underline">
                                        support@oasishealthservices.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function PatientResources() {

    const resources = [
        {
            icon: BookOpen,
            title: "Mental Health Blog",
            description: "Educational articles on mental wellness, treatment options, and coping strategies.",
            href: "/resources/blog",
        },
        {
            icon: Heart,
            title: "Self-Care Toolkit",
            description: "Practical exercises, worksheets, and tips to support your wellbeing between visits.",
            href: "/resources/self-care",
        },
        {
            icon: Shield,
            title: "Crisis Resources",
            description: "Important contacts and resources for mental health emergencies.",
            href: "/resources/crisis",
        },
        {
            icon: Phone,
            title: "Telehealth Guide",
            description: "How to prepare for and get the most out of your virtual appointments.",
            href: "/resources/telehealth",
        },
    ]

    const quickLinks = [
        { label: "Condition Guides", href: "/conditions" },
        { label: "Insurance FAQs", href: "/resources/faq#insurance" },
        { label: "Medication Information", href: "/resources/medications" },
        { label: "Therapy Types Explained", href: "/resources/therapy-types" },
        { label: "What to Expect at First Visit", href: "/resources/first-visit" },
        { label: "Community Support Groups", href: "/resources/support-groups" },
    ]

    return (
        <section className="py-20 lg:py-28 bg-primary" aria-labelledby="resources-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-sm font-medium text-primary-foreground/70 tracking-wide uppercase">
                        Patient Resources
                    </span>
                    <h2 id="resources-heading" className="mt-3 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl text-balance">
                        Support Your Mental Health Journey
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
                        Access educational materials, tools, and resources to help you understand your treatment
                        and support your wellbeing between appointments.
                    </p>
                </div>

                {/* Resource Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {resources.map((resource) => (
                        <a
                            key={resource.title}
                            href={resource.href}
                            className="group bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-6 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/30 transition-colors">
                                <resource.icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-primary-foreground">{resource.title}</h3>
                            <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">
                                {resource.description}
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-primary-foreground mt-4 group-hover:underline">
                                Learn More
                                <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </a>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="bg-primary-foreground/10 rounded-2xl p-8">
                    <h3 className="font-semibold text-primary-foreground text-center mb-6">Quick Links</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {quickLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full text-sm text-primary-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <a
                            href="/resources"
                            className="inline-flex items-center text-sm font-medium text-primary-foreground hover:underline"
                        >
                            Visit Full Resource Center
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactSection() {
    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { register, handleSubmit: formSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            inquiryType: "Other",
            message: "",
        },
    });

    const onSubmit = async (formData) => {
        try {
            setIsSubmitting(true);
            console.log("submitting contact data:", formData);

            const { consent, ...contact } = formData;
            const response = await submitContactForm(contact);
            if (!response.success) {
                setError("We were unable to process your request at this time. Please try again later or contact us at support@oasishealthservices.com");
                setIsSubmitting(false);
                return;
            }

            const params = new URLSearchParams({
                type: "contact",
                name: formData.firstName
            });

            setIsSubmitting(false);
            window.location.href = `/thank-you?${params.toString()}`;
        } catch (error) {
            console.error("failed to submit contact", error);
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <section className="py-20 lg:py-28" aria-labelledby="contact-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Get in Touch</span>
                        <h2 id="contact-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Do You Have a Question for Us?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            Please fill out the contact form or reach out directly. Our team typically responds
                            within 1-2 business days.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:support@oasishealthservices.com" className="text-foreground hover:text-primary font-medium">
                                        support@oasishealthservices.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <a href="tel:+15093816035" className="text-foreground hover:text-primary font-medium">
                                        (509) 381-6035
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Hours</p>
                                    <p className="text-foreground font-medium">Mon - Fri: 8am - 5:30pm EST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mt-12 lg:mt-0">
                        <div className="bg-card rounded-2xl border border-border p-8">
                            <h3 className="font-semibold text-foreground mb-6">Send Us a Message</h3>

                            {isSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-foreground text-lg">Message Sent!</h4>
                                    <p className="mt-2 text-muted-foreground">
                                        Thank you for reaching out. We'll get back to you within 1-2 business days.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-4 bg-transparent"
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={formSubmit(onSubmit)} className="space-y-5">
                                    <FormError error={error} />
                                    <Input type="hidden" {...register("inquiryType")} value="Other" />

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input
                                                id="firstName"
                                                {...register("firstName")}
                                                placeholder="John"
                                            />
                                            <FieldError error={errors.firstName} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input
                                                id="lastName"
                                                {...register("lastName")}
                                                placeholder="Doe"
                                            />
                                            <FieldError error={errors.lastName} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            {...register("email")}
                                            type="email"
                                            placeholder="john.doe@example.com"
                                        />
                                        <FieldError error={errors.email} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone (Optional)</Label>
                                        <Input
                                            id="phone"
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="1234567890"
                                        />
                                        <FieldError error={errors.phone} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            {...register("message")}
                                            placeholder="How can we help you?"
                                            rows={4}
                                        />
                                        <FieldError error={errors.message} />
                                    </div>

                                    <div className="flex items-start gap-2 bg-muted p-4 rounded-lg">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            {...register("consent")}
                                            className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                                        />
                                        <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal">
                                            I consent to Oasis Health Services contacting me regarding my inquiry.
                                            I understand my information is protected under{" "}
                                            <a href="/hipaa" className="text-primary hover:underline">HIPAA guidelines</a>.
                                        </Label>
                                    </div>
                                    <FieldError error={errors.consent} />


                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-muted-foreground text-center">
                                        By submitting, you agree to our{" "}
                                        <a href="/policies" className="text-primary hover:underline">Privacy Policy</a>.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
