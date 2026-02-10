import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { providers } from "@/lib/providers-data"
import OptimizedImage from "../OptimizedImage"
import { motion } from 'framer-motion';

export function MeetProviders() {
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
                                            <a href={`/providers/${provider.slug}`}>
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
