
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, FileText, ArrowRight, Handshake, MapPin, Video } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { providers } from "@/lib/providers-data"
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

const Providers = () => {
    return <>

        {/* Hero */}
        <section className="bg-secondary py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <span className="text-sm font-medium text-primary tracking-wide uppercase">Our Team</span>
                <h1 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl text-balance">
                    Meet Our Providers
                </h1>
                <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                    Our experienced, compassionate providers bring together decades of expertise to deliver
                    personalized mental health care. Each provider is dedicated to helping you achieve
                    lasting wellness.
                </p>

                {/* For Providers Link */}
                <div className="mt-8">
                    <a
                        href="/for-providers"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                    >
                        <Handshake className="h-4 w-4" aria-hidden="true" />
                        Are you a healthcare provider? Partner with us
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>

        {/* Providers Grid */}
        <section className="py-16 lg:py-20" aria-labelledby="providers-list">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 id="providers-list" className="sr-only">All Providers</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {providers.map((provider) => (
                        <Card
                            key={provider.slug}
                            className="overflow-hidden bg-card border-border group hover:shadow-lg transition-shadow"
                        >
                            <CardContent className="p-0">
                                <div className="lg:flex">
                                    {/* Provider Image */}
                                    <div className="lg:w-64 shrink-0 relative">
                                        <div className="h-64 lg:h-full bg-primary/10 relative overflow-hidden">
                                            <OptimizedImage
                                                src={provider.image || "/placeholder.svg"}
                                                alt={`${provider.name} - ${provider.role}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 1024px) 100vw, 256px"
                                            />
                                        </div>
                                        {provider.availableOnline && (
                                            <div className="absolute bottom-3 left-3 right-3 lg:right-auto">
                                                <Badge className="bg-card/90 text-foreground border-0 shadow-sm">
                                                    <Video className="h-3 w-3 mr-1.5" aria-hidden="true" />
                                                    In-Person & Online
                                                </Badge>
                                            </div>
                                        )}
                                    </div>

                                    {/* Provider Info */}
                                    <div className="p-6 flex flex-col flex-1">
                                        {provider.acceptingNewPatients && (
                                            <Badge variant="outline" className="w-fit mb-3 text-xs border-primary/30 text-primary">
                                                Accepting New Patients
                                            </Badge>
                                        )}

                                        <h3 className="text-2xl font-semibold text-foreground">
                                            {provider.name}
                                            {provider.credentials && (
                                                <span className="text-muted-foreground font-normal text-lg">, {provider.credentials}</span>
                                            )}
                                        </h3>
                                        <p className="text-primary font-medium mt-1">{provider.role}</p>

                                        <p className="mt-4 text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {provider.tagline}
                                        </p>

                                        {/* Specialties */}
                                        <div className="mt-4">
                                            <div className="flex flex-wrap gap-1.5">
                                                {provider.specialties.top.map((specialty) => (
                                                    <Badge key={specialty} variant="secondary" className="text-xs">
                                                        {specialty}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="mt-4 flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-1.5 text-primary" aria-hidden="true" />
                                            {provider.locations.map(l => `${l.city}, ${l.state}`).join(" & ")}
                                        </div>

                                        {/* Fees */}
                                        <div className="mt-4 text-sm">
                                            <span className="text-muted-foreground">From </span>
                                            <span className="font-semibold text-foreground">${provider.fees.standardVisit}</span>
                                            <span className="text-muted-foreground"> / session</span>
                                            <span className="mx-2 text-border">|</span>
                                            <span className="text-primary font-medium">Insurance accepted</span>
                                        </div>

                                        {/* CTA */}
                                        <div className="mt-6 pt-4 border-t border-border">
                                            <Button className="w-full" asChild>
                                                <a href={`/providers/${provider.slug}`}>
                                                    View Full Profile
                                                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-balance">
                    Not Sure Which Provider Is Right for You?
                </h2>
                <p className="mt-4 text-xl text-primary-foreground/80 text-pretty">
                    Schedule a free consultation call and we will help match you with the provider
                    who best fits your needs and goals.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        asChild
                    >
                        <a href="/contact">
                            Book Free Consultation
                        </a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                        asChild
                    >
                        <a href="/about">
                            Learn More About Us
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        {/* <section className="relative bg-gradient-to-br from-[#6D519D] to-[#2D6762] text-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} transition={{
                    duration: 0.8
                }} className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        For Providers
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90">
                        Partner with us to deliver exceptional patient care
                    </p>
                </motion.div>
            </div>
        </section> */}

        {/* <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div initial={{
                        opacity: 0,
                        x: -20
                    }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{
                        once: true
                    }}>
                        <div className="flex items-center gap-4 mb-6">
                            <Users className="h-12 w-12 text-[#6D519D]" />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762]">Partner With Oasis</h2>
                        </div>
                        <p className="text-lg text-[#4A5455] mb-4 leading-relaxed">
                            We work with physicians and specialists to coordinate care and improve outcomes for shared patients.
                        </p>
                        <p className="text-lg text-[#4A5455] leading-relaxed">
                            Our collaborative approach ensures seamless communication and comprehensive treatment plans that address both mental and physical health needs.
                        </p>
                    </motion.div>

                    <motion.div initial={{
                        opacity: 0,
                        x: 20
                    }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{
                        once: true
                    }}>
                        <OptimizedImage alt="Healthcare providers collaborating on patient care" src="https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/img_5295-OC9dF.jpeg" loading="lazy" />
                    </motion.div>
                </div>
            </div>
        </section> */}

        {/* <section className="py-20 bg-gradient-to-br from-[#6D519D]/10 to-[#2D6762]/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }} className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <FileText className="h-12 w-12 text-[#6D519D]" />
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762]">Referrals</h2>
                        </div>
                        <p className="text-lg text-[#4A5455] mb-6 leading-relaxed">
                            Submit a patient referral through our online form or call our office. We'll collaborate closely and keep you informed about your patient's care.
                        </p>
                        <p className="text-lg text-[#4A5455] mb-8 leading-relaxed">
                            Our team is committed to maintaining open lines of communication, providing regular updates, and ensuring coordinated treatment that benefits your patients.
                        </p>
                        <a href="/providers/referrals">
                            <Button size="lg" className="bg-[#6D519D] hover:bg-[#6D519D]/90 text-white">
                                Submit a Referral
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section> */}

        {/* <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">Questions About Partnering?</h2>
                    <p className="text-lg text-[#4A5455] mb-8 max-w-2xl mx-auto">
                        Contact us to learn more about how we can work together to provide exceptional care for your patients.
                    </p>
                    <a href="/contact">
                        <Button size="lg" className="bg-[#2D6762] hover:bg-[#2D6762]/90 text-white">
                            Contact Us
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section> */}
    </>;
};
export default Providers;
