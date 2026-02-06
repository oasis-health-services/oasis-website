import { GraduationCap, Award, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProviderQualifications({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="qualifications-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Credentials</span>
                    <h2 id="qualifications-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Education & Qualifications
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        {provider.yearsInPractice}+ years of clinical experience backed by rigorous training and certifications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-lg">Education & Training</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {provider.education.map((edu, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                                        <div>
                                            <p className="font-medium text-foreground">{edu.degree}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {edu.school}
                                                {edu.year && <span className="ml-1">({edu.year})</span>}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Licenses */}
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-lg">State Licenses</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {provider.licenses.map((license) => (
                                    <Badge
                                        key={license.state}
                                        variant="secondary"
                                        className="px-3 py-2 text-sm"
                                    >
                                        <MapPin className="h-3 w-3 mr-1.5" aria-hidden="true" />
                                        {license.state}
                                        {license.number && (
                                            <span className="ml-1 text-muted-foreground font-normal">
                                                #{license.number}
                                            </span>
                                        )}
                                    </Badge>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Licensed to provide telehealth services across multiple states.
                                Contact me to confirm availability in your location.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Years in Practice Banner */}
                <div className="mt-8 bg-primary/5 rounded-2xl p-6 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <div>
                            <p className="text-4xl font-serif font-semibold text-primary">{provider.yearsInPractice}+</p>
                            <p className="text-sm text-muted-foreground">Years in Practice</p>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-border" aria-hidden="true" />
                        <div>
                            <p className="text-4xl font-serif font-semibold text-primary">{provider.licenses.length}</p>
                            <p className="text-sm text-muted-foreground">State Licenses</p>
                        </div>
                        <div className="hidden sm:block w-px h-12 bg-border" aria-hidden="true" />
                        <div>
                            <p className="text-4xl font-serif font-semibold text-primary">{provider.education.length}</p>
                            <p className="text-sm text-muted-foreground">Certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
