import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion';
import {
    ArrowRight, Brain, CloudRain, Zap, Puzzle, Wine, AlertTriangle, User, Repeat, Eye,
    Heart, Lightbulb, Shield, Users, Pill, MessageCircle, Video, ClipboardCheck, Check,
    BookOpen, FileText, HelpCircle
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { providers } from "@/lib/providers-data"
import OptimizedImage from "@/components/OptimizedImage"


import Insurances from '@/components/common/Insurances';

export default function About() {

    return (
        <>
            <AboutHero />

            <AboutMissionVision />

            <AboutConditions />

            <AboutServices />

            <AboutMeetProviders />

            <AboutValues />

            <AboutResourcesCTA />

            <Insurances showConsultationCTA={true} />

        </>
    );
};

function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5" />
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/5" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative mx-auto max-w-7xl px-6 lg:px-8"
            >
                <div className="max-w-3xl">
                    <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                        About Oasis Health Services
                    </span>
                    <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                        Bringing a Fresh Perspective to Mental Health Care
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl text-pretty">
                        At Oasis Health Services, we believe mental wellness is a journey, not a destination.
                        We walk alongside you with personalized care and guidance, supporting lasting well-being at your own pace.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <a href="/start">
                                Start Your Journey
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="bg-transparent border-primary text-primary">
                            <a href="#providers">Meet Our Providers</a>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

function AboutMissionVision() {

    const values = [
        {
            icon: Heart,
            title: "Compassion",
            description: "Every interaction is guided by empathy and understanding",
        },
        {
            icon: Shield,
            title: "Evidence-Based",
            description: "Treatments rooted in the latest clinical research",
        },
        {
            icon: Users,
            title: "Integrative",
            description: "Combining psychiatric and primary care for whole-person healing",
        },
        {
            icon: Lightbulb,
            title: "Accessible",
            description: "Telehealth services making care available wherever you are",
        },
    ]


    return (
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="mission-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Mission</span>
                        <h2 id="mission-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            A Trusted Oasis of Healing
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                            To be a trusted oasis of healing where individuals and families find balance, resilience,
                            and hope through compassionate, integrative care. We are committed to providing a safe space
                            where every person is heard, respected, and supported on their path to wellness.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-medium text-accent tracking-wide uppercase">Our Vision</span>
                        <h3 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Empowering Every Person to Thrive
                        </h3>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                            We empower every person to thrive in mind and body through holistic, evidence-based mental health
                            and medical services. With compassion and respect, we create safe spaces—both virtual and in-person—where
                            healing begins and lasting change takes root.
                        </p>
                    </motion.div>
                </div>

                {/* Core values */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <h3 className="text-center font-serif text-2xl font-semibold text-foreground mb-12">What Guides Our Care</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <value.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground">{value.title}</h4>
                                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


export function AboutConditions() {

    const conditions = [
        {
            icon: AlertTriangle,
            title: "Anxiety Disorders",
            description: "Including generalized anxiety, panic disorder, social anxiety, and phobias. We help you manage worry and regain control.",
            href: "/conditions/anxiety-disorders",
        },
        {
            icon: CloudRain,
            title: "Mood Disorders",
            description: "Comprehensive treatment for depression, bipolar disorder, and seasonal affective disorder to restore emotional balance.",
            href: "/conditions/mood-disorders",
        },
        {
            icon: Zap,
            title: "ADHD",
            description: "Specialized assessment and treatment for attention-deficit/hyperactivity disorder in children, teens, and adults.",
            href: "/conditions/neurodevelopmental-disorders",
        },
        {
            icon: Puzzle,
            title: "Autism Spectrum Disorder",
            description: "Supportive care and resources for individuals on the autism spectrum and their families.",
            href: "/conditions/neurodevelopmental-disorders",
        },
        {
            icon: Wine,
            title: "Substance-Related Disorders",
            description: "Evidence-based treatment approaches for addiction and substance use disorders with compassionate support.",
            href: "/conditions/substance-related-disorders",
        },
        {
            icon: Brain,
            title: "Trauma & PTSD",
            description: "Trauma-informed care helping you process difficult experiences and build resilience.",
            href: "/conditions#trauma-stress-disorders",
        },
        {
            icon: User,
            title: "Personality Disorders",
            description: "Personalized treatment plans addressing borderline, narcissistic, and other personality disorders.",
            href: "/conditions/personality-disorders",
        },
        {
            icon: Repeat,
            title: "OCD & Related Disorders",
            description: "Specialized therapy and medication management for obsessive-compulsive and related conditions.",
            href: "/conditions/ocd-related-disorders",
        },
        {
            icon: Eye,
            title: "Psychotic Disorders",
            description: "Comprehensive psychiatric care for schizophrenia and other psychotic spectrum conditions.",
            href: "/conditions/psychotic-disorders",
        },
    ]


    return (
        <section id="conditions" className="py-20 lg:py-28 bg-secondary" aria-labelledby="conditions-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Conditions We Treat</span>
                    <h2 id="conditions-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Specialized Care for a Wide Range of Mental Health Conditions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        Our experienced providers offer evidence-based treatment for various mental health conditions,
                        creating personalized care plans tailored to your unique needs.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition, index) => (

                        <motion.div key={condition.id} initial={{
                            opacity: 0,
                            y: 10
                        }} whileInView={{
                            opacity: 1,
                            y: 0
                        }} viewport={{
                            once: true,
                            margin: "-50px"
                        }} transition={{
                            duration: 0.4,
                            delay: index * 0.03,
                            ease: "easeOut"
                        }}>
                            <Card key={condition.title} className="group hover:shadow-lg transition-shadow bg-card border-border">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <condition.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-foreground">{condition.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground leading-relaxed">
                                        {condition.description}
                                    </CardDescription>
                                    <a
                                        href={condition.href}
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-2"
                                    >
                                        Learn more
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </a>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="/about/conditions"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        View all conditions we treat
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

function AboutServices() {

    const services = [
        {
            icon: Pill,
            title: "Medication Management",
            href: "/services/medication-management",
            description: "Expert psychiatric evaluation and ongoing medication management with careful monitoring to optimize your treatment plan and minimize side effects.",
            features: ["Comprehensive psychiatric evaluation", "Personalized medication plans", "Ongoing monitoring & adjustments"],
        },
        {
            icon: MessageCircle,
            title: "Therapy & Counseling",
            href: "/services/therapy-and-counseling",
            description: "One-on-one counseling sessions using evidence-based approaches like CBT, DBT, and trauma-focused therapies to help you work through challenges.",
            features: ["Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)", "Trauma-informed approaches"],
        },
        {
            icon: Video,
            title: "Telehealth Services",
            href: "/services/telehealth",
            description: "Convenient virtual appointments from the comfort of your home, providing the same quality care with added flexibility and accessibility.",
            features: ["Secure video consultations", "Flexible scheduling", "No commute required"],
        },
        {
            icon: ClipboardCheck,
            title: "Comprehensive Assessment",
            href: "/services/comprehensive-psychiatric-assessment",
            description: "Thorough diagnostic evaluations to understand your symptoms and develop an accurate diagnosis and effective treatment plan.",
            features: ["Comprehensive evaluations", "Accurate diagnosis", "Treatment recommendations"],
        }
    ]

    return (
        <section id="services" className="py-20 lg:py-28 bg-card" aria-labelledby="services-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                    {/* Left column - sticky header */}


                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0"
                    >
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Services</span>
                        <h2 id="services-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Comprehensive Mental Health Services
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            From therapy and medication management to integrated primary care, we offer a full spectrum
                            of services to support your mental wellness journey.
                        </p>
                        <div className="mt-8">
                            <Button asChild>
                                <a href="/services">
                                    Explore All Services
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right column - services grid */}
                    <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            {services.map((service, index) => (

                                <motion.div key={service.title} initial={{
                                    opacity: 0,
                                    y: 30
                                }} whileInView={{
                                    opacity: 1,
                                    y: 0
                                }} viewport={{
                                    once: true,
                                    margin: "-50px"
                                }} transition={{
                                    duration: 0.4,
                                    delay: index * 0.03,
                                    ease: "easeOut"
                                }}>
                                    <div key={service.title} className="group">
                                        <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                                            <service.icon className="h-6 w-6 text-accent" />
                                        </div>
                                        <a href={service.href}><h3 className="text-lg font-semibold text-foreground">{service.title}</h3></a>
                                        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function AboutMeetProviders() {
    return (
        <section id="providers" className="py-20 lg:py-28 bg-secondary scroll-mt-20" aria-labelledby="providers-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Providers</span>
                    <h2 id="providers-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Meet Your Care Team
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        Our experienced, compassionate providers are dedicated to helping you achieve your mental health goals
                        through personalized, evidence-based care.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {providers.map((provider) => (
                        <Card key={provider.slug} className="overflow-hidden bg-card border-border group hover:border-primary/30 transition-colors">
                            <CardContent className="p-0">
                                <div className="md:flex">
                                    {/* Provider image */}
                                    <div className="md:w-48 md:shrink-0 relative">
                                        <div className="h-48 md:h-full bg-primary/10 relative overflow-hidden">

                                            <OptimizedImage
                                                className="rounded-lg object-cover w-full h-full"
                                                alt={`${provider.name} - ${provider.role}`}
                                                src={provider.image || "/placeholder.svg"}
                                                loading="lazy"
                                            />

                                        </div>
                                    </div>

                                    {/* Provider info */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="mb-3">
                                            <h3 className="text-xl font-semibold text-foreground">
                                                {provider.name}
                                                {provider.credentials && (
                                                    <span className="text-muted-foreground font-normal">, {provider.credentials}</span>
                                                )}
                                            </h3>
                                            <p className="text-primary font-medium">{provider.role}</p>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                            {provider.tagline}
                                        </p>

                                        <div className="mb-4">
                                            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Specialties</p>
                                            <div className="flex flex-wrap gap-2">
                                                {provider.specialties.top.map((specialty) => (
                                                    <Badge key={specialty} variant="secondary" className="text-xs">
                                                        {specialty}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-4 flex-1">
                                            <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Credentials</p>
                                            <ul className="space-y-1">
                                                {provider.education.slice(0, 2).map((edu) => (
                                                    <li key={edu.degree} className="text-xs text-muted-foreground flex items-center">
                                                        <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                                                        {edu.degree}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button variant="outline" size="sm" className="w-full mt-auto bg-transparent" asChild>
                                            <a href={`/about/our-team/${provider.slug}`}>
                                                View Full Profile
                                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

function AboutValues() {


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

function AboutResourcesCTA() {


    const resources = [
        {
            icon: BookOpen,
            title: "Mental Health Blog",
            description: "Educational articles on mental wellness, coping strategies, and treatment options.",
            href: "/blog",
        },
        {
            icon: FileText,
            title: "Condition Guides",
            description: "In-depth guides to understanding anxiety, depression, ADHD, and other conditions.",
            href: "/about/condition-guides",
        },
        // {
        //     icon: Video,
        //     title: "Wellness Videos",
        //     description: "Expert-led videos on mindfulness, stress management, and mental health tips.",
        //     href: "/resources/videos",
        // },
        {
            icon: HelpCircle,
            title: "FAQs",
            description: "Answers to common questions about our services, insurance, and what to expect.",
            href: "/resources/faq",
        },
    ]

    return (
        <section className="py-20 lg:py-28 bg-primary" aria-labelledby="resources-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-primary-foreground/70 tracking-wide uppercase">Resource Center</span>
                    <h2 id="resources-heading" className="mt-3 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl text-balance">
                        Empowering You With Knowledge
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
                        Explore our resource center for educational content, helpful guides, and expert insights
                        to support your mental health journey between appointments.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                            <span className="inline-flex items-center text-sm font-medium text-primary-foreground mt-3 group-hover:underline">
                                Explore
                                <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="secondary" size="lg" asChild>
                        <a href="/resources">
                            Visit Resource Center
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
