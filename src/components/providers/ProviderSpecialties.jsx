import { ArrowRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function ProviderSpecialties({ provider }) {
    return (
        <section className="py-16 lg:py-20 bg-secondary" aria-labelledby="specialties-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Specialties & Expertise</span>
                    <h2 id="specialties-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Conditions I Treat
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        I specialize in helping individuals overcome a wide range of mental health challenges
                        through personalized, evidence-based treatment.
                    </p>
                </div>

                {/* Top Specialties */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {provider.specialties.top.map((specialty, index) => (
                        <Card key={specialty} className="bg-card border-border hover:border-primary/50 transition-colors">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <Star className="h-6 w-6 text-primary" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">{specialty}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {index === 0 && "Comprehensive evaluation and treatment including medication management for focus, impulsivity, and executive function challenges."}
                                    {index === 1 && "Evidence-based approaches to lift mood, restore energy, and help you rediscover joy in daily life."}
                                    {index === 2 && "Personalized strategies to manage worry, reduce physical symptoms, and regain a sense of calm."}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Full Expertise Grid */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Additional Areas of Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {provider.specialties.expertise.map((item) => (
                            <Badge
                                key={item}
                                variant="outline"
                                className="text-sm px-4 py-2 bg-card hover:bg-primary/5 transition-colors"
                            >
                                {item}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Age Groups */}
                <div className="mt-12 text-center">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                        Who I Work With
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {provider.ageGroups.map((group) => (
                            <span
                                key={group}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                            >
                                {group}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Link to Resources */}
                <div className="mt-12 text-center">
                    <a
                        href="/resources"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Learn more about these conditions in our Resource Center
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
