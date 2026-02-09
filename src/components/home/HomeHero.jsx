import { Button } from "@/components/ui/button"
import { Shield, Video, Clock, MapPin } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import OptimizedImage from "../OptimizedImage";


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

export function HomeHero() {

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
                                <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent">
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
