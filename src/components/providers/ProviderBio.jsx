import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"


export function ProviderBio({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="bio-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Bio */}
                    <div className="lg:col-span-2">
                        <h2 id="bio-heading" className="sr-only">About {provider.name}</h2>
                        <div className="prose prose-lg max-w-none">
                            {provider.bio.map((paragraph, index) => (
                                <p key={index} className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Practice Statement & Endorsement */}
                    <div className="space-y-6">
                        {/* Practice Statement */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-6">
                                <Quote className="h-8 w-8 text-primary/40 mb-4" aria-hidden="true" />
                                <p className="text-foreground leading-relaxed italic text-pretty">
                                    {provider.practiceStatement}
                                </p>
                                <p className="mt-4 text-sm font-semibold text-primary">
                                    — {provider.name}, {provider.credentials}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Endorsement */}
                        {provider.endorsement && (
                            <Card className="border-border">
                                <CardContent className="p-6">
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                                        Peer Endorsement
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed italic text-sm text-pretty">
                                        &ldquo;{provider.endorsement.text}&rdquo;
                                    </p>
                                    <p className="mt-4 text-sm font-medium text-foreground">
                                        — {provider.endorsement.name}
                                        <span className="text-muted-foreground font-normal">, {provider.endorsement.credentials}</span>
                                    </p>
                                </CardContent>
                            </Card>
                        )}

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 rounded-xl bg-secondary">
                                <p className="text-3xl font-serif font-semibold text-primary">{provider.yearsInPractice}+</p>
                                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-secondary">
                                <p className="text-3xl font-serif font-semibold text-primary">{provider.licenses.length}</p>
                                <p className="text-sm text-muted-foreground mt-1">State Licenses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
