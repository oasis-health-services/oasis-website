import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/OptimizedImage';
import { Card, CardContent } from "@/components/ui/card"
import {
    Heart, Brain, Users, Shield, ArrowRight,
    Video, Clock, MapPin,
    UserCheck, FlaskConical,
    Zap,
    Puzzle,
    Wine,
    AlertTriangle,
    RotateCcw,
    Eye,
    ClipboardList,
    Phone, Calendar
} from "lucide-react"

import Testimonials from '@/components/common/Testimonials';
import Insurances from '@/components/common/Insurances';

export default function Home() {
    // const heroImages = [{
    //     src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/72a4f4151125d938323fb2854f493120.jpg',
    //     alt: 'A group therapy session with a counselor offering tissues.'
    // }, {
    //     src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/c3bc08bf35fdf6c4ba923f2da2a38fe2.jpg',
    //     alt: 'Two women laughing and talking on a couch.'
    // }, {
    //     src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b1069cd7a46868103f15c08f72cb9a17.jpg',
    //     alt: 'A group of people laughing together in a support group setting.'
    // }, {
    //     src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/d86919b972fa24b155bce6b8937ba94c.jpg',
    //     alt: 'A man talking to his therapist in a one-on-one session.'
    // }];
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    //     }, 5000); // Change image every 5 seconds
    //     return () => clearInterval(interval);
    // }, [heroImages.length]);
    // const conditions = [
    //     { name: 'Anxiety Disorders', href: '/conditions/anxiety-disorders', icon: Brain },
    //     { name: 'Mood Disorders', href: '/conditions/mood-disorders', icon: Heart },
    //     { name: 'ADHD', href: '/conditions/neurodevelopmental-disorders', icon: Brain },
    //     { name: 'Autism Spectrum Disorder', href: '/conditions/neurodevelopmental-disorders', icon: Users },
    //     { name: 'Substance-Related Disorders', href: '/conditions/substance-related-disorders', icon: Shield },
    //     { name: 'Trauma & Stress-Related', href: '/conditions/trauma-stress-disorders', icon: Heart },
    //     { name: 'Personality Disorders', href: '/conditions/personality-disorders', icon: Users },
    //     { name: 'OCD & Related Disorders', href: '/conditions/ocd-related-disorders', icon: Brain },
    //     { name: 'Psychotic Disorders', href: '/conditions/psychotic-disorders', icon: Brain },
    // ];
    // const insurancePartners = [{
    //     name: 'Aetna',
    //     alt: 'Aetna logo',
    //     logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/a1da4b7ea507773a15fc0f9d0afda54e.webp'
    // }, {
    //     name: 'BlueCross BlueShield',
    //     alt: 'BlueCross BlueShield logo',
    //     logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b4915d726b2da1904d14ac200e95ba27.webp'
    // }, {
    //     name: 'Cigna',
    //     alt: 'Cigna logo',
    //     logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/f778db83833b190c40c7e1eb8598b165.webp'
    // }, {
    //     name: 'Optum',
    //     alt: 'Optum logo',
    //     logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/cc8d5c1f30422780fab79fe1bfe8d7bb.webp'
    // }, {
    //     name: 'UnitedHealthcare',
    //     alt: 'UnitedHealthcare logo',
    //     logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/35b8e2b9fb67ed7f4f91564249adc06b.webp'
    // }, {
    //     name: 'UMR',
    //     alt: 'UMR logo',
    //     logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/1e3cc13010bffe27f18829d2a50f5e4c.webp'
    // }];
    // const allInsuranceProviders = ['Aetna', 'Anthem', 'Beacon', 'Blue Cross Blue Shield', 'CareSource', 'Cigna Health Plans', 'Compsych', 'Coordinated Care', 'Humana', 'Magellan Health', 'Meritain Health', 'Optum', 'Oscar', 'Premera', 'Regence', 'TriCare', 'UMR', 'United Healthcare'];
    // const whyChoose = ['Commitment to holistic health', 'Personalized, integrative treatment plans', 'Telehealth convenience and accessibility', 'Evidence-based therapy and safe medication management'];
    // const steps = [{
    //     number: '01',
    //     title: 'Online Assessment',
    //     description: 'Complete our secure online form'
    // }, {
    //     number: '02',
    //     title: 'Free Consultation',
    //     description: 'Speak with our care team'
    // }, {
    //     number: '03',
    //     title: 'Schedule Your Visit',
    //     description: 'Book your first appointment'
    // }, {
    //     number: '04',
    //     title: 'Meet Your Provider',
    //     description: 'Begin your healing journey'
    // }];

    return <>
        <HomeHero />
        <WhyChooseUs />
        <Insurances showConsultationCTA={false} />
        <WellnessPath />
        <ConditionsGrid />
        <HowItWorks className="py-20 bg-white" />
        <Testimonials className="py-20 bg-white" />
        <FooterCTA className="py-20 bg-primary" />
    </>;
};


function HomeHero() {

    const heroImages = [{
        src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/72a4f4151125d938323fb2854f493120.jpg',
        alt: 'A group therapy session with a counselor offering tissues.'
    }, {
        src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/c3bc08bf35fdf6c4ba923f2da2a38fe2.jpg',
        alt: 'Two women laughing and talking on a couch.'
    }, {
        src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b1069cd7a46868103f15c08f72cb9a17.jpg',
        alt: 'A group of people laughing together in a support group setting.'
    }, {
        src: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/d86919b972fa24b155bce6b8937ba94c.jpg',
        alt: 'A man talking to his therapist in a one-on-one session.'
    }];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [heroImages.length]);


    return (
        <section className="relative overflow-hidden bg-secondary">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}

                    <motion.div initial={{
                        opacity: 0,
                        x: -50
                    }} animate={{
                        opacity: 1,
                        x: 0
                    }} transition={{
                        duration: 0.8
                    }}>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                                    In-Person & Virtual Mental Health Care
                                </p>
                                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
                                    Compassionate care, in-person or from home
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                                    A Fresh Perspective on Mental Health. Expert care tailored for you, combining psychiatric and primary care for whole-person healing at our Roswell, GA office or via telehealth.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="text-base px-8">
                                    <a href="/start">Get Started</a>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent border-primary text-primary">
                                    <a href="/about">Learn More</a>
                                </Button>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>Roswell, GA Office</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Video className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>Telehealth Available</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>Insurance Accepted</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-primary" />
                                    </div>
                                    <span>Free Consultation</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div className="hidden lg:block relative h-96 w-full" initial={{
                        opacity: 0,
                        scale: 0.9
                    }} animate={{
                        opacity: 1,
                        scale: 1
                    }} transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}>
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">

                                <AnimatePresence>
                                    <motion.div key={currentImageIndex} className="absolute inset-0" initial={{
                                        opacity: 0
                                    }} animate={{
                                        opacity: 1
                                    }} exit={{
                                        opacity: 0
                                    }} transition={{
                                        opacity: {
                                            duration: 2,
                                            ease: "easeInOut"
                                        }
                                    }}>
                                        <OptimizedImage
                                            className="rounded-xl shadow-2xl object-cover w-full h-full"
                                            alt={heroImages[currentImageIndex].alt}
                                            src={heroImages[currentImageIndex].src}
                                            priority={currentImageIndex === 0}
                                            loading={currentImageIndex === 0 ? "eager" : "lazy"}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl font-serif font-bold text-primary">20+</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Years Experience</p>
                                        <p className="text-sm text-muted-foreground">Combined expertise</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

function WhyChooseUs() {

    const features = [
        {
            icon: Heart,
            title: "Commitment to holistic health",
            description: "We address mind, body, and spirit together for comprehensive wellness that goes beyond symptoms.",
        },
        {
            icon: UserCheck,
            title: "Personalized, integrative treatment plans",
            description: "Every care plan is tailored to your unique needs, lifestyle, and goals for lasting results.",
        },
        {
            icon: Video,
            title: "Telehealth convenience and accessibility",
            description: "Access quality mental health care from anywhere in Georgia, on your schedule.",
        },
        {
            icon: FlaskConical,
            title: "Evidence-based therapy and safe medication management",
            description: "Our providers use proven approaches combined with careful medication oversight when needed.",
        },
    ]

    return (
        <section className="py-20 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                        Why Choose Oasis
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground text-lg leading-snug">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function WellnessPath({ className = "py-20 bg-primary text-primary-foreground" } = {}) {
    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8">

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-balance">
                            Your Path to Mental Wellness
                        </h2>
                    </motion.div>

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <p className="text-lg text-primary-foreground/90 leading-relaxed">
                            Achieving mental wellness is a journey, not a sprint. At Oasis Health Services,
                            we walk alongside you with personalized care and guidance, supporting lasting
                            well-being at your own pace.
                        </p>
                    </motion.div>

                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="text-center mb-12">
                        <div className="pt-4">
                            <Button
                                size="lg"
                                variant="secondary"
                                asChild
                                className="text-base px-8"
                            >
                                <a href="/contact" className="inline-flex items-center gap-2">
                                    Start Now
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function ConditionsGrid({ className = "py-20 bg-secondary" } = {}) {

    const conditions = [
        {
            icon: Brain,
            title: "Anxiety Disorders",
            href: "/conditions/anxiety-disorders",
        },
        {
            icon: Heart,
            title: "Mood Disorders",
            href: "/conditions/mood-disorders",
        },
        {
            icon: Zap,
            title: "ADHD",
            href: "/conditions/neurodevelopmental-disorders",
        },
        {
            icon: Puzzle,
            title: "Autism Spectrum Disorder",
            href: "/conditions/neurodevelopmental-disorders",
        },
        {
            icon: Wine,
            title: "Substance-Related Disorders",
            href: "/conditions/substance-related-disorders",
        },
        {
            icon: AlertTriangle,
            title: "Trauma & Stress-Related",
            href: "/conditions/trauma-stress-disorders",
        },
        {
            icon: Users,
            title: "Personality Disorders",
            href: "/conditions/personality-disorders",
        },
        {
            icon: RotateCcw,
            title: "OCD & Related Disorders",
            href: "/conditions/ocd-related-disorders",
        },
        {
            icon: Eye,
            title: "Psychotic Disorders",
            href: "/conditions/psychotic-disorders",
        },
    ]

    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} className="mx-auto max-w-2xl text-center">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                            Conditions We Treat
                        </h2>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                            <a key={index} href={condition.href}>
                                <Card className="h-full hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <condition.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1 flex items-center justify-between">
                                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    {condition.title}
                                                </h3>
                                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
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

function HowItWorks({ className = "py-16 sm:py-24 bg-background" } = {}) {

    const steps = [
        {
            number: "01",
            icon: ClipboardList,
            title: "Online Assessment",
            description: "Complete our secure online form",
        },
        {
            number: "02",
            icon: Phone,
            title: "Free Consultation",
            description: "Speak with our care team",
        },
        {
            number: "03",
            icon: Calendar,
            title: "Schedule Your Visit",
            description: "Book your first appointment",
        },
        {
            number: "04",
            icon: UserCheck,
            title: "Meet Your Provider",
            description: "Begin your healing journey",
        },
    ]

    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                        How It Works
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                            )}

                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center">
                                        <step.icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                        {step.number}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-semibold text-foreground text-lg">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" asChild className="text-base px-8">
                        <a href="/contact">Get Started Today</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}


function FooterCTA({ className = "bg-primary" } = {}) {
    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground leading-tight text-balance">
                            Ready to Begin Your Healing Journey?
                        </h2>
                        <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
                            Take the first step toward better mental health. Schedule your free consultation today and discover how our compassionate team can support your path to wellness.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button
                                size="lg"
                                variant="secondary"
                                asChild
                                className="text-base px-8 group"
                            >
                                <a href="/patients">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Schedule Appointment
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                            >
                                <a href="tel:+5093816035">
                                    <Phone className="mr-2 h-5 w-5" />
                                    (509) 381-6035
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Contact cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20">
                            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-primary-foreground mb-2">Visit Our Office</h3>
                            <p className="text-sm text-primary-foreground/80 leading-relaxed">
                                11285 Elkins Road<br />
                                Suite J-6<br />
                                Roswell, GA 30076
                            </p>
                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="inline-flex items-center text-sm text-primary-foreground mt-3 hover:underline"
                            >
                                Get Directions
                                <ArrowRight className="ml-1 h-3 w-3" />
                            </a>
                        </div>

                        <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20">
                            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                                <Calendar className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-primary-foreground mb-2">Office Hours</h3>
                            <div className="text-sm text-primary-foreground/80 space-y-1">
                                <p>Monday - Friday</p>
                                <p className="font-medium text-primary-foreground">8:00 AM - 5:30 PM</p>
                                <p className="pt-2">Saturday - Sunday</p>
                                <p className="font-medium text-primary-foreground">Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
