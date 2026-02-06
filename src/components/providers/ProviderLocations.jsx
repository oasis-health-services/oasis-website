import { MapPin, Video, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProviderLocations({ provider }) {
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
