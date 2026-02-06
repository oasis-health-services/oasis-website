import { Phone, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProviderCTA({ provider }) {
    return (
        <section
            id="contact"
            className="py-20 lg:py-28 bg-primary text-primary-foreground scroll-mt-20"
            aria-labelledby="cta-heading"
        >
            <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
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
            </div>
        </section>
    )
}
