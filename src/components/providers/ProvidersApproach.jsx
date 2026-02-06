import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ProviderApproach({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="approach-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Treatment Approaches */}
                    <div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">Treatment Approach</span>
                        <h2 id="approach-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            How I Can Help
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
                            I utilize an integrative blend of evidence-based therapeutic techniques tailored to your
                            unique needs. You can expect a warm, non-judgmental environment where your physical and
                            mental health are treated as one. We will move at your pace to create a clear,
                            sustainable path toward balance.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                                Treatment Modalities
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {provider.treatmentApproaches.map((approach) => (
                                    <Badge
                                        key={approach}
                                        variant="secondary"
                                        className="text-sm px-3 py-2"
                                    >
                                        {approach}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Session Types & What to Expect */}
                    <div className="bg-secondary rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">What to Expect</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-foreground mb-2">Session Types</h4>
                                <ul className="space-y-2">
                                    {provider.sessionTypes.map((type) => (
                                        <li key={type} className="flex items-center text-muted-foreground">
                                            <div className="w-2 h-2 rounded-full bg-primary mr-3" aria-hidden="true" />
                                            {type}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-border pt-6">
                                <h4 className="font-medium text-foreground mb-3">Your First Visit</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Your initial session is a comprehensive evaluation where we discuss your history,
                                    current symptoms, and goals. Together, we create a personalized treatment plan
                                    that may include medication management, therapy techniques, or both.
                                </p>
                            </div>

                            <div className="border-t border-border pt-6">
                                <h4 className="font-medium text-foreground mb-3">Ongoing Care</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Follow-up sessions focus on monitoring progress, adjusting treatment as needed,
                                    and providing ongoing support. I believe in collaborative care where you are
                                    an active partner in your healing journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
