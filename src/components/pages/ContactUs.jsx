import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Loader2,
    Calendar,
    CheckCircle2,
    AlertTriangle,
    ExternalLink,
} from "lucide-react"
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/api"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { ContactSchema, INQUIRY_OPTIONS } from "@/lib/schema"
import FieldError from "../FieldError"

export default function ContactUs() {

    return (
        <>
            <ContactHero />
            <QuickContactCards />
            <ContactFormSection />
            <LocationSection />
            <InsuranceSection />
            <ContactFAQ />
        </>
    )
}

function ContactHero() {
    return (
        <section className="bg-secondary py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }} className="max-w-3xl">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">
                        Contact Us
                    </span>
                    <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight text-balance">
                        Get in Touch with Oasis Health Services
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground leading-relaxed text-pretty">
                        Whether you're ready to schedule your first appointment or have questions about our services,
                        we're here to help. Reach out to our caring team in Roswell, Georgia.
                    </p>

                    {/* Response Time Notice */}
                    <div className="mt-8 flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Typical Response Time</p>
                            <p className="text-sm text-muted-foreground">We respond to all inquiries within 1-2 business days</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function QuickContactCards() {
    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            value: "(509) 381-6035",
            href: "tel:+15093816035",
            description: "Mon-Fri, 8am-5:30pm EST",
            action: "Call Now",
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "support@oasishealthservices.com",
            href: "mailto:support@oasishealthservices.com",
            description: "We'll respond within 1-2 business days",
            action: "Send Email",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "11285 Elkins Road Unit J-6",
            href: "https://maps.google.com/?q=11285+Elkins+Road+Unit+J-6+Roswell+GA+30076",
            description: "Roswell, GA 30076",
            action: "Get Directions",
        },
        {
            icon: Calendar,
            title: "Book Online",
            value: "Schedule Appointment",
            href: "/patients",
            description: "New & returning patients",
            action: "Schedule Now",
        },
    ]

    return (
        <section className="py-12 lg:py-16 -mt-8 relative z-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contactMethods.map((method, index) => (
                        <motion.div initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <a
                                key={method.title}
                                href={method.href}
                                target={method.href.startsWith("http") ? "_blank" : undefined}
                                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="group"
                            >
                                <Card className="h-full hover:border-primary/30 hover:shadow-lg transition-all">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <method.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                                        <p className="text-sm font-medium text-primary mt-1">{method.value}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                                        <span className="inline-flex items-center text-sm text-primary font-medium mt-3 group-hover:underline">
                                            {method.action}
                                            {method.href.startsWith("http") && (
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            )}
                                        </span>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ContactFormSection() {
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
            inquiryType: "",
            message: "",
        },
    });

    const onSubmit = async (formData) => {
        try {
            setIsSubmitting(true);

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
            //            setIsSubmitted(true);
            window.location.href = `/thank-you?${params.toString()}`;
        } catch (error) {
            console.error("failed to submit contact", error);
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 lg:py-24" aria-labelledby="contact-form-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-5 lg:gap-16">
                    {/* Form Info */}
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} className="lg:col-span-2">
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">
                            Send a Message
                        </span>
                        <h2 id="contact-form-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            How Can We Help You?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            Fill out the form and our team will get back to you within 1-2 business days.
                            For urgent matters, please call us directly.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-foreground">New Patient Inquiries</p>
                                    <p className="text-sm text-muted-foreground">Learn about our services and how to get started</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-foreground">Insurance Questions</p>
                                    <p className="text-sm text-muted-foreground">Verify coverage and understand costs</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-medium text-foreground">General Feedback</p>
                                    <p className="text-sm text-muted-foreground">Share your experience or suggestions</p>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Note */}
                        <div className="mt-8 p-4 bg-secondary rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Your privacy matters.</strong> All information
                                shared through this form is confidential and protected under HIPAA guidelines.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} className="mt-12 lg:mt-0 lg:col-span-3">
                        <Card>
                            <CardContent className="p-8">
                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-foreground text-xl">Message Sent Successfully!</h3>
                                        <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                                            Thank you for reaching out. Our team will review your message and respond
                                            within 1-2 business days.
                                        </p>
                                        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                                            <Button variant="outline" className="bg-transparent" onClick={() => setIsSubmitted(false)}>
                                                Send Another Message
                                            </Button>
                                            <Button asChild>
                                                <a href="/patients">Schedule Appointment</a>
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <form onSubmit={formSubmit(onSubmit)} className="space-y-6">
                                        {error && (
                                            <Alert variant="destructive">
                                                <AlertTriangle className="h-4 w-4" />
                                                <AlertTitle>Error</AlertTitle>
                                                <AlertDescription>{error}</AlertDescription>
                                            </Alert>
                                        )}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name *</Label>
                                                <Input
                                                    id="firstName"
                                                    {...register("firstName")}
                                                    placeholder="John"
                                                />
                                                {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name *</Label>
                                                <Input
                                                    id="lastName"
                                                    {...register("lastName")}
                                                    placeholder="Doe"
                                                />
                                                {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    {...register("email")}
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    {...register("phone")}
                                                    placeholder="1234567890"
                                                />
                                                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="inquiryType">What can we help you with? *</Label>
                                            <Controller
                                                name="inquiryType"
                                                control={control}
                                                render={({ field }) => (
                                                    <Select onValueChange={field.onChange} defaultValue="" value={field.value}>
                                                        <SelectTrigger id="inquiryType">
                                                            <SelectValue placeholder="Select inquiry type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {INQUIRY_OPTIONS.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                            {errors.inquiryType && <p className="text-xs text-destructive">{errors.inquiryType.message}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Your Message *</Label>
                                            <Textarea
                                                id="message"
                                                {...register("message")}
                                                placeholder="Please share the details of your inquiry..."
                                                rows={5}
                                            />
                                            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
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

                                        <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending Message...
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
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function LocationSection() {
    return (
        <section className="py-16 lg:py-24" aria-labelledby="location-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Map Embed */}
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                        <iframe
                            src="https://www.google.com/maps?q=11285%20Elkins%20Rd%20Unit%20J6%2C%20Roswell%2C%20GA%2030076&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Oasis Health Services Location"
                        />
                    </div>

                    {/* Location Details */}
                    <div className="mt-12 lg:mt-0">
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">
                            Our Location
                        </span>
                        <h2 id="location-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Visit Our Roswell Office
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Conveniently located near GA-400 with easy access from Sandy Springs, Dunwoody,
                            Alpharetta, and surrounding North Metro Atlanta communities.
                        </p>

                        <div className="mt-8 space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Address</h3>
                                    <address className="not-italic text-muted-foreground mt-1">
                                        11285 Elkins Road<br />
                                        Suite J6<br />
                                        Roswell, GA 30076
                                    </address>
                                    <a
                                        href="https://maps.google.com/?q=11285+Elkins+Road+Suite+J6+Roswell+GA+30076"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-primary font-medium mt-2 hover:underline"
                                    >
                                        Get Directions
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                                    <div className="mt-2 space-y-1 text-muted-foreground">
                                        <div className="flex justify-between gap-8">
                                            <span>Monday - Friday</span>
                                            <span className="font-medium text-foreground">8:00 AM - 5:30 PM EST</span>
                                        </div>
                                        <div className="flex justify-between gap-8">
                                            <span>Saturday</span>
                                            <span>By Appointment</span>
                                        </div>
                                        <div className="flex justify-between gap-8">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Parking */}
                            <div className="p-4 bg-secondary rounded-lg">
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">Parking:</strong> Free parking available in the building lot.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild>
                                <a href="/patients">Schedule Appointment</a>
                            </Button>
                            <Button variant="outline" className="bg-transparent border-primary text-primary" asChild>
                                <a href="/resources/telehealth">Learn About Telehealth</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function InsuranceSection() {
    const insuranceProviders = [
        "Aetna",
        "Anthem Blue Cross",
        "Blue Cross Blue Shield",
        "Cigna",
        "Humana",
        "Medicaid",
        "Medicare",
        "Tricare",
        "United Healthcare",
        "Self-Pay",
    ]

    return (
        <section className="py-16 lg:py-24 bg-secondary" aria-labelledby="insurance-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">
                        Insurance & Payment
                    </span>
                    <h2 id="insurance-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        We Accept Most Major Insurance Plans
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Contact our billing team to verify your specific coverage. Self-pay options with flexible payment plans are also available.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {insuranceProviders.map((provider) => (
                        <div
                            key={provider}
                            className="px-6 py-3 bg-card rounded-full border border-border text-sm font-medium text-foreground"
                        >
                            {provider}
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-muted-foreground">
                        Don't see your insurance?{" "}
                        <a href="tel:+15093816035" className="text-primary font-medium hover:underline">
                            Call us
                        </a>{" "}
                        to verify coverage or learn about our self-pay rates.
                    </p>
                    <a
                        href="/resources/faq#insurance"
                        className="inline-flex items-center text-primary font-medium mt-2 hover:underline"
                    >
                        View Insurance FAQ
                        <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                </div>
            </div>
        </section>
    )
}

function ContactFAQ() {
    const faqs = [
        {
            question: "How quickly will I hear back after submitting a contact form?",
            answer: "Our team typically responds to all inquiries within 1-2 business days. For urgent matters, we recommend calling our office directly at (509) 381-6035.",
        },
        {
            question: "Do I need a referral to schedule an appointment?",
            answer: "No referral is needed for most of our services. You can contact us directly to schedule an initial evaluation. Some insurance plans may require a referral for coverage purposes - our team can help verify this.",
        },
        {
            question: "What should I bring to my first appointment?",
            answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records. If you've completed intake forms online, we'll have those on file.",
        },
        {
            question: "Do you offer telehealth appointments?",
            answer: "Yes! We offer secure video telehealth appointments for patients throughout Georgia. This option provides the same quality care from the comfort of your home. Learn more on our Telehealth Guide page.",
        },
        {
            question: "What are your cancellation and no-show policies?",
            answer: "We request at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee. We understand emergencies happen - please contact us as soon as possible if you need to reschedule.",
        },
    ]

    return (
        <section className="py-16 lg:py-24" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">
                        Common Questions
                    </span>
                    <h2 id="faq-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Contact FAQ
                    </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`faq-${index}`}
                            className="bg-card border border-border rounded-lg px-6"
                        >
                            <AccordionTrigger className="text-left hover:no-underline py-4">
                                <span className="font-medium text-foreground">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-8 text-center">
                    <p className="text-muted-foreground">
                        Have more questions?{" "}
                        <a href="/resources/faq" className="text-primary font-medium hover:underline">
                            Visit our full FAQ page
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

