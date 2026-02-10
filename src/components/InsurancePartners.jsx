import OptimizedImage from "./OptimizedImage";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from 'framer-motion';

const insurancePartners = [{
    name: 'Aetna',
    alt: 'Aetna logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/a1da4b7ea507773a15fc0f9d0afda54e.webp'
}, {
    name: 'BlueCross BlueShield',
    alt: 'BlueCross BlueShield logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/b4915d726b2da1904d14ac200e95ba27.webp'
}, {
    name: 'Cigna',
    alt: 'Cigna logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/f778db83833b190c40c7e1eb8598b165.webp'
}, {
    name: 'Optum',
    alt: 'Optum logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/cc8d5c1f30422780fab79fe1bfe8d7bb.webp'
}, {
    name: 'UnitedHealthcare',
    alt: 'UnitedHealthcare logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/35b8e2b9fb67ed7f4f91564249adc06b.webp'
}, {
    name: 'UMR',
    alt: 'UMR logo',
    logo: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/1e3cc13010bffe27f18829d2a50f5e4c.webp'
}];
const allInsuranceProviders = ['Aetna', 'Anthem', 'Beacon', 'Blue Cross Blue Shield', 'CareSource', 'Cigna Health Plans', 'Compsych', 'Coordinated Care', 'Humana', 'Magellan Health', 'Meritain Health', 'Optum', 'Oscar', 'Premera', 'Regence', 'TriCare', 'UMR', 'United Healthcare'];

const benefits = [
    "We verify your benefits before your first appointment",
    "Transparent pricing if you're paying out-of-pocket",
    "Flexible payment plans available"
]

export function InsurancePartners() {
    return (
        <section id="insurance" className="py-16 sm:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <motion.div initial={{
                        opacity: 0,
                        y: 20
                    }} whileInView={{
                        opacity: 1,
                        y: 0
                    }} viewport={{
                        once: true
                    }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-4">Insurance made simple</h2>
                        <p className="text-lg text-[#4A5455]">
                            We accept most major insurance plans and handle all the paperwork, so you can focus on your health.
                        </p>

                        <ul className="mt-6 space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-4">
                            {/* <Button size="lg">Check My Coverage</Button> */}

                            <div className="text-center mt-4">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <button variant="outline" className="inline-flex items-center text-[#2D6762] text-lg hover:text-[#6D519D] transition-colors duration-300 group">
                                            <span className="animated-underline">View More Plans</span>
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent side="right" className="bg-white">
                                        <SheetHeader>
                                            <SheetTitle className="text-2xl font-bold text-[#2D6762]">Insurance Providers We Work With</SheetTitle>
                                        </SheetHeader>
                                        <div className="py-4">
                                            <ul className="space-y-3 text-lg text-[#4A5455]">
                                                {allInsuranceProviders.map(provider => <li key={provider} className="flex items-center">
                                                    <CheckCircle className="h-5 w-5 text-[#2D6762] mr-3" />
                                                    {provider}
                                                </li>)}
                                            </ul>
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:pl-8">
                        <div className="rounded-2xl bg-card p-8 shadow-lg ring-1 ring-border">
                            <p className="text-sm font-medium text-muted-foreground mb-6">
                                We accept these major insurance providers:
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                {insurancePartners.map((insurance, index) => (
                                    <motion.div key={insurance.name} initial={{
                                        opacity: 0,
                                        scale: 0.8
                                    }} whileInView={{
                                        opacity: 1,
                                        scale: 1
                                    }} viewport={{
                                        once: true
                                    }} transition={{
                                        delay: index * 0.1
                                    }} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg h-24 grayscale hover:grayscale-0 transition-all">
                                        <OptimizedImage
                                            alt={insurance.alt}
                                            className="max-h-12 object-contain"
                                            src={insurance.logo}
                                            loading="lazy"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            <p className="mt-6 text-center text-sm text-muted-foreground">
                                Don't see your insurance? <button className="text-primary hover:underline font-medium">Contact us</button> to check eligibility.
                            </p>
                        </div>
                    </div>


                </div>


            </div>
        </section>
    )
}