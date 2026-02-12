import { Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Phone, Calendar, ArrowRight, Mail, Video, MapPin, CheckCircle2, Building2, GraduationCap, Award, Sparkles, Star, CreditCard, ShieldCheck, DollarSign } from "lucide-react"
import OptimizedImage from "../../OptimizedImage"

export default function Provider({ provider }) {
    return (
        <>
            <ProviderHero provider={provider} />
            <ProviderBio provider={provider} />
            <ProviderSpecialties provider={provider} />
            <ProviderApproach provider={provider} />
            <ProviderInsurances provider={provider} />
            <ProviderQualifications provider={provider} />
            <ProviderLocations provider={provider} />
            <ProviderFAQ provider={provider} />
            <ProviderCTA provider={provider} />
        </>
    )
}

function ProviderHero({ provider }) {
    return (
        <section className="bg-secondary py-12 lg:py-16">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
                    <a href="/about" className="hover:text-primary">About Oasis</a>
                    <span>/</span>
                    <a href="/about/our-team" className="hover:text-primary">Our Team</a>

                </div>


                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Provider Image */}
                    <motion.div className="lg:w-80 shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative aspect-[4/5] w-full max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg border-primary border">

                            <OptimizedImage
                                src={provider.image || "/placeholder.svg"}
                                alt={`${provider.name} - ${provider.role}`}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 80vw, 320px"
                                loading="lazy"
                            />
                        </div>
                        {provider.availableOnline && (
                            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-primary font-medium">
                                <Video className="h-4 w-4" aria-hidden="true" />
                                <span>Available in-person and online</span>
                            </div>
                        )}
                    </motion.div>

                    {/* Provider Info */}
                    <motion.div className="flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            {provider.acceptingNewPatients && (
                                <Badge className="bg-primary/10 text-primary border-0">
                                    <CheckCircle2 className="h-3 w-3 mr-1" aria-hidden="true" />
                                    Accepting New Patients
                                </Badge>
                            )}
                            {provider.consultationOffer && (
                                <Badge variant="outline" className="border-accent text-accent">
                                    {provider.consultationOffer}
                                </Badge>
                            )}
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
                            {provider.name}
                            {provider.credentials && (
                                <span className="text-muted-foreground font-normal text-2xl sm:text-3xl lg:text-4xl">
                                    , {provider.credentials}
                                </span>
                            )}
                        </h1>

                        <p className="mt-2 text-xl text-primary font-medium">{provider.role}</p>

                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                            {provider.tagline}
                        </p>

                        {/* Top Specialties */}
                        <div className="mt-6">
                            <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                                I specialize in
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {provider.specialties.top.map((specialty) => (
                                    <Badge key={specialty} variant="secondary" className="text-sm px-3 py-1">
                                        {specialty}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Locations</p>
                                    <p className="text-sm text-muted-foreground">
                                        {provider.locations.map(l => `${l.city}, ${l.state}`).join(" & ")}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Contact</p>
                                    <a
                                        href={`tel:${provider.phone.replace(/[^0-9]/g, "")}`}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        {provider.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <a href="#contact">
                                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Book Appointment
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary text-primary">
                                <a href={`tel:${provider.phone.replace(/[^0-9]/g, "")}`}>
                                    <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                                    Free Consultation
                                </a>
                            </Button>
                        </div>

                        {/* Fees Summary */}
                        <div className="mt-6 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Initial Session</span> ${provider.fees.initialSession}
                            <span className="mx-2">|</span>
                            <span className="font-medium text-foreground">Standard Visit</span> ${provider.fees.standardVisit}
                            <span className="mx-2">|</span>
                            <span className="text-primary font-medium">I accept insurance</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


function ProviderBio({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="bio-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Bio */}
                    <motion.div className="lg:col-span-2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 id="bio-heading" className="sr-only">About {provider.name}</h2>
                        <div className="prose prose-lg max-w-none">
                            {provider.bio.map((paragraph, index) => (
                                <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Practice Statement & Endorsement */}
                    <div className="space-y-6">
                        {/* Practice Statement */}
                        <motion.div className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-primary/5 border-primary/20">
                                <CardContent className="p-6">
                                    <Quote className="h-8 w-8 text-primary/40 mb-4" aria-hidden="true" />
                                    <p className="text-foreground leading-relaxed italic text-pretty">
                                        {provider.practiceStatement}
                                    </p>
                                    <p className="mt-4 text-sm font-semibold text-primary">
                                        — {provider.name}, {provider.credentials}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Endorsement */}
                        {provider.endorsement && (
                            <motion.div className="space-y-6"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="border-border">
                                    <CardContent className="p-6">
                                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                                            Peer Endorsement
                                        </p>
                                        <p className="text-muted-foreground leading-relaxed italic text-sm text-pretty">
                                            &ldquo;{provider.endorsement.text}&rdquo;
                                        </p>
                                        <p className="mt-4 text-sm font-medium text-foreground">
                                            — {provider.endorsement.name}
                                            <span className="text-muted-foreground font-normal">, {provider.endorsement.credentials}</span>
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}

                        {/* Quick Stats */}
                        <motion.div initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 rounded-xl bg-secondary">
                                <p className="text-3xl font-serif font-semibold text-primary">{provider.yearsInPractice}+</p>
                                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                            </div>
                            {/* <div className="text-center p-4 rounded-xl bg-secondary">
                                <p className="text-3xl font-serif font-semibold text-primary">{provider.licenses.length}</p>
                                <p className="text-sm text-muted-foreground mt-1">State Licenses</p>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function ProviderCTA({ provider }) {
    return (
        <section
            id="contact"
            className="py-20 lg:py-28 bg-primary text-primary-foreground scroll-mt-20"
            aria-labelledby="cta-heading"
        >
            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
                    {provider.acceptingNewPatients ? "Now Accepting New Patients" : "Limited Availability"}
                </span>

                <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
                    Ready to Take the First Step?
                </h2>

                <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
                    {provider.consultationOffer
                        ? `Schedule your ${provider.consultationOffer.toLowerCase()} today. Let's work together to get you back to living your life.`
                        : "Schedule your appointment today and start your journey toward better mental health."
                    }
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        asChild
                    >
                        <a href="https://oasishealthservices.com" target="_blank">
                            <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
                            Book Online Now
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                        asChild
                    >
                        <a href={`tel:${provider.phone.replace(/[^0-9]/g, "")}`}>
                            <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                            Call {provider.phone}
                        </a>
                    </Button>
                </div>

                {/* Quick Info */}
                <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                        <p className="text-3xl font-serif font-semibold">${provider.fees.initialSession}</p>
                        <p className="text-sm text-primary-foreground/70 mt-1">Initial Session</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-serif font-semibold">${provider.fees.standardVisit}</p>
                        <p className="text-sm text-primary-foreground/70 mt-1">Follow-Up Visit</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-serif font-semibold">{provider.insurance.length}+</p>
                        <p className="text-sm text-primary-foreground/70 mt-1">Insurance Plans</p>
                    </div>
                </div>

                {/* Back to Providers */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                    <a
                        href="/about#providers"
                        className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                        <ArrowRight className="h-4 w-4 mr-2 rotate-180" aria-hidden="true" />
                        View All Providers
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

function ProviderFAQ({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="faq-heading">
            <motion.div initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Questions & Answers</span>
                    <h2 id="faq-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        Common questions about working with {provider.name.split(" ")[0]}
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {provider.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border">
                            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Link to Resource Center */}
                <div className="mt-12 text-center p-6 bg-secondary rounded-xl">
                    <p className="text-foreground font-medium mb-2">Have more questions?</p>
                    <p className="text-sm text-muted-foreground mb-4">
                        Explore our Resource Center for articles, guides, and helpful information about mental health.
                    </p>
                    <a
                        href="/resources"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Visit Resource Center
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}


function ProviderInsurances({ provider }) {
    return (
        <section className="py-16 lg:py-20 bg-secondary" aria-labelledby="insurance-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Finances & Insurance</span>
                    <h2 id="insurance-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Investment in Your Mental Health
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        I accept many major insurance plans and offer flexible payment options.
                        I handle all claim filing for you so you can focus on your healing.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Fees Card */}

                    <motion.div initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <Card className="bg-card border-border">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <DollarSign className="h-5 w-5 text-primary" aria-hidden="true" />
                                    </div>
                                    <CardTitle className="text-lg">Session Fees</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-border">
                                    <span className="text-muted-foreground">Initial Session</span>
                                    <span className="text-xl font-semibold text-foreground">${provider.fees.initialSession}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-border">
                                    <span className="text-muted-foreground">Standard Visit</span>
                                    <span className="text-xl font-semibold text-foreground">${provider.fees.standardVisit}</span>
                                </div>
                                {provider.fees.slidingScale && (
                                    <p className="text-sm text-primary font-medium">
                                        Sliding scale available for those who qualify
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Insurance Card */}
                    <motion.div initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }} className="lg:col-span-2">
                        <Card className="bg-card border-border">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                                    </div>
                                    <CardTitle className="text-lg">Accepted Insurance</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {provider.insurance.map((ins) => (
                                        <Badge
                                            key={ins}
                                            variant="outline"
                                            className="px-3 py-1.5 text-sm bg-background"
                                        >
                                            {ins}
                                        </Badge>
                                    ))}
                                    <Badge
                                        variant="outline"
                                        className="px-3 py-1.5 text-sm bg-background border-dashed"
                                    >
                                        Out of Network
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="px-3 py-1.5 text-sm bg-background border-dashed"
                                    >
                                        Self-Pay
                                    </Badge>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Not sure if your plan is covered? Contact me to verify your coverage before your first appointment.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Payment Methods */}
                <div className="mt-8">
                    <Card className="bg-card border-border">
                        <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
                                    </div>
                                    <span className="font-medium text-foreground">Payment Methods</span>
                                </div>
                                <div className="flex flex-wrap gap-2 sm:ml-auto">
                                    {provider.paymentMethods.map((method) => (
                                        <span
                                            key={method}
                                            className="text-sm text-muted-foreground"
                                        >
                                            {method}
                                            {method !== provider.paymentMethods[provider.paymentMethods.length - 1] && (
                                                <span className="ml-2 text-border">|</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function ProviderLocations({ provider }) {
    return (
        <section className="py-16 lg:py-20 bg-secondary" aria-labelledby="locations-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Locations</span>
                    <h2 id="locations-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Where to Find Me
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        {provider.availableOnline
                            ? "Available both in-person and through secure telehealth appointments from the comfort of your home."
                            : "Visit me at one of my office locations for in-person care."
                        }
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {provider.locations.map((location, index) => (
                        <Card
                            key={index}
                            className={`bg-card border-border ${location.isVirtual ? "border-primary/30" : ""}`}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${location.isVirtual ? "bg-primary/10" : "bg-secondary"}`}>
                                        {location.isVirtual ? (
                                            <Video className="h-6 w-6 text-primary" aria-hidden="true" />
                                        ) : (
                                            <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-semibold text-foreground">{location.name}</h3>
                                            {location.isVirtual && (
                                                <Badge variant="secondary" className="text-xs">Telehealth</Badge>
                                            )}
                                        </div>
                                        <address className="not-italic text-muted-foreground text-sm leading-relaxed">
                                            <p>{location.address}</p>
                                            <p>{location.city}, {location.state} {location.zip}</p>
                                        </address>
                                        {!location.isVirtual && (
                                            <a
                                                href={`https://maps.google.com/?q=${encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zip}`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center mt-3 text-sm text-primary hover:underline"
                                            >
                                                <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                                                Get Directions
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Telehealth States */}
                {provider.licenses.length > 1 && (
                    <div className="mt-12 text-center">
                        <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                            Telehealth Available In
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {provider.licenses.map((license) => (
                                <span
                                    key={license.state}
                                    className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
                                >
                                    {license.state}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

function ProviderQualifications({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="qualifications-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Credentials</span>
                    <h2 id="qualifications-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Education & Qualifications
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        {provider.yearsInPractice}+ years of clinical experience backed by rigorous training and certifications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-lg">Education & Training</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {provider.education.map((edu, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                                        <div>
                                            <p className="font-medium text-foreground">{edu.degree}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {edu.school}
                                                {edu.year && <span className="ml-1">({edu.year})</span>}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Licenses */}
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-lg">State Licenses</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {provider.licenses.map((license) => (
                                    <Badge
                                        key={license.state}
                                        variant="secondary"
                                        className="px-3 py-2 text-sm"
                                    >
                                        <MapPin className="h-3 w-3 mr-1.5" aria-hidden="true" />
                                        {license.state}
                                        {license.number && (
                                            <span className="ml-1 text-muted-foreground font-normal">
                                                #{license.number}
                                            </span>
                                        )}
                                    </Badge>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Licensed to provide telehealth services across multiple states.
                                Contact me to confirm availability in your location.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Years in Practice Banner */}
                <div className="mt-8 bg-primary/5 rounded-2xl p-6 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <div>
                            <p className="text-4xl font-serif font-semibold text-primary">{provider.yearsInPractice}+</p>
                            <p className="text-sm text-muted-foreground">Years in Practice</p>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-border" aria-hidden="true" />
                        <div>
                            <p className="text-4xl font-serif font-semibold text-primary">{provider.licenses.length}</p>
                            <p className="text-sm text-muted-foreground">State Licenses</p>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-border" aria-hidden="true" />
                        <div>
                            <p className="text-4xl font-serif font-semibold text-primary">{provider.education.length}</p>
                            <p className="text-sm text-muted-foreground">Certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function ProviderApproach({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="approach-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Treatment Approaches */}
                    <div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Treatment Approach</span>
                        <h2 id="approach-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            How I Can Help
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
                            I utilize an integrative blend of evidence-based therapeutic techniques tailored to your
                            unique needs. You can expect a warm, non-judgmental environment where your physical and
                            mental health are treated as one. We will move at your pace to create a clear,
                            sustainable path toward balance.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                                Treatment Modalities
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {provider.treatmentApproaches.map((approach) => (
                                    <Badge
                                        key={approach}
                                        variant="secondary"
                                        className="text-sm px-3 py-2"
                                    >
                                        {approach}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Session Types & What to Expect */}
                    <div className="bg-secondary rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">What to Expect</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-foreground mb-2">Session Types</h4>
                                <ul className="space-y-2">
                                    {provider.sessionTypes.map((type) => (
                                        <li key={type} className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 rounded-full bg-primary mr-3" aria-hidden="true" />
                                            {type}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-border pt-6">
                                <h4 className="font-medium text-foreground mb-3">Your First Visit</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Your initial session is a comprehensive evaluation where we discuss your history,
                                    current symptoms, and goals. Together, we create a personalized treatment plan
                                    that may include medication management, therapy techniques, or both.
                                </p>
                            </div>

                            <div className="border-t border-border pt-6">
                                <h4 className="font-medium text-foreground mb-3">Ongoing Care</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Follow-up sessions focus on monitoring progress, adjusting treatment as needed,
                                    and providing ongoing support. I believe in collaborative care where you are
                                    an active partner in your healing journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


function ProviderSpecialties({ provider }) {
    return (
        <section className="py-16 lg:py-20 bg-secondary" aria-labelledby="specialties-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Specialties & Expertise</span>
                    <h2 id="specialties-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Conditions I Treat
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        I specialize in helping individuals overcome a wide range of mental health challenges
                        through personalized, evidence-based treatment.
                    </p>
                </div>

                {/* Top Specialties */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {provider.specialties.top.map((specialty, index) => (
                        <Card key={specialty} className="bg-card border-border hover:border-primary/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <Star className="h-6 w-6 text-primary" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{specialty}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {index === 0 && "Comprehensive evaluation and treatment including medication management for focus, impulsivity, and executive function challenges."}
                                    {index === 1 && "Evidence-based approaches to lift mood, restore energy, and help you rediscover joy in daily life."}
                                    {index === 2 && "Personalized strategies to manage worry, reduce physical symptoms, and regain a sense of calm."}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Full Expertise Grid */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Additional Areas of Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {provider.specialties.expertise.map((item) => (
                            <Badge
                                key={item}
                                variant="outline"
                                className="text-sm px-4 py-2 bg-card hover:bg-primary/5 transition-colors"
                            >
                                {item}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Age Groups */}
                <div className="mt-12 text-center">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                        Who I Work With
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {provider.ageGroups.map((group) => (
                            <span
                                key={group}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                            >
                                {group}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Link to Resources */}
                <div className="mt-12 text-center">
                    <a
                        href="/resources"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Learn more about these conditions in our Resource Center
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
