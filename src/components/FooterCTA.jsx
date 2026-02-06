import { Button } from "@/components/ui/button"
import { Phone, Calendar, MapPin, ArrowRight } from "lucide-react"

export function FooterCTA({ className = "bg-primary" } = {}) {
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
                                <a href="/start">
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
