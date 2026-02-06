import { Phone, Mail, Video, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import type { Provider } from "@/lib/providers-data"
import OptimizedImage from "../OptimizedImage"

// interface ProviderHeroProps {
//   provider: Provider
// }

export function ProviderHero({ provider }) {
  return (
    <section className="bg-secondary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Provider Image */}
          <div className="lg:w-80 shrink-0">
            <div className="relative aspect-[4/5] w-full max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">

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
          </div>

          {/* Provider Info */}
          <div className="flex-1">
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
              <Button size="lg" variant="outline" asChild>
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
          </div>
        </div>
      </div>
    </section>
  )
}
