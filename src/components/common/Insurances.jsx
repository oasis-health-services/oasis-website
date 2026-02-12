import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"
import { motion } from 'framer-motion';
import { allInsuranceProviders, insurancePartners } from "@/lib/insurance-data";
import OptimizedImage from "../OptimizedImage";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";


export default function Insurances({ showConsultationCTA = true } = {}) {
    return (
        <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="insurance-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left column */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Insurance & Payments</span>
                        <h2 id="insurance-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Making Quality Care Accessible
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground text-pretty">
                            We work with major insurance providers to make mental health care affordable and accessible.
                            Our team will help verify your benefits and explain any out-of-pocket costs before your first appointment.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            {/* <Button asChild>
                                <a href="/contact">
                                    Verify Insurance
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button> */}

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" className="bg-transparent border-primary text-primary">
                                        <span className="animated-underline">View More Plans</span>
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="bg-white">
                                    <SheetHeader>
                                        <SheetTitle className="text-2xl font-bold text-[#2D6762]">Insurance Providers We Work With</SheetTitle>
                                    </SheetHeader>
                                    <div className="py-4">
                                        <ul className="space-y-3 text-lg text-[#4A5455]">
                                            {allInsuranceProviders.map(insurance => <li key={insurance} className="flex items-center">
                                                <CheckCircle className="h-5 w-5 text-[#2D6762] mr-3" />
                                                {insurance}
                                            </li>)}
                                        </ul>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </motion.div>

                    {/* Right column - insurance logos */}
                    <motion.div className="mt-12 lg:mt-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <p className="text-sm font-medium text-muted-foreground mb-6">Accepted Insurance Partners</p>
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
                                }} className="bg-card rounded-lg p-4 flex items-center justify-center h-20 border border-border">

                                    {insurance.name}
                                    {/* <OptimizedImage
                                        alt={insurance.alt}
                                        className="max-h-12 object-contain"
                                        src={insurance.logo}
                                        loading="lazy"
                                    /> */}
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground">
                            Don't see your insurance? <a href="/contact" className="text-primary hover:underline">Contact us</a> to discuss payment options and self-pay rates.
                        </p>
                    </motion.div>
                </div>

                {showConsultationCTA && (
                    <div className="mt-20 bg-card rounded-2xl p-8 lg:p-12 border border-border">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div>
                                <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl text-balance">
                                    Ready to Start Your Healing Journey?
                                </h3>
                                <p className="mt-2 text-muted-foreground text-pretty">
                                    Take the first step toward better mental health. Schedule your free consultation today.
                                </p>
                            </div>
                            <div className="mt-6 lg:mt-0 lg:shrink-0">
                                <Button size="lg" asChild>
                                    <a href="/patients">
                                        Book Free Consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </section>
    )
}
