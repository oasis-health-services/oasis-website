import { CreditCard, ShieldCheck, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProviderInsurances({ provider }) {
    return (
        <section className="py-16 lg:py-20 bg-secondary" aria-labelledby="insurance-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Finances & Insurance</span>
                    <h2 id="insurance-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Investment in Your Mental Health
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        I accept many major insurance plans and offer flexible payment options.
                        I handle all claim filing for you so you can focus on your healing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Fees Card */}
                    <Card className="bg-card border-border">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <DollarSign className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-lg">Session Fees</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-border">
                                <span className="text-muted-foreground">Initial Session</span>
                                <span className="text-xl font-semibold text-foreground">${provider.fees.initialSession}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-border">
                                <span className="text-muted-foreground">Standard Visit</span>
                                <span className="text-xl font-semibold text-foreground">${provider.fees.standardVisit}</span>
                            </div>
                            {provider.fees.slidingScale && (
                                <p className="text-sm text-primary font-medium">
                                    Sliding scale available for those who qualify
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Insurance Card */}
                    <Card className="bg-card border-border lg:col-span-2">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>
                                <CardTitle className="text-lg">Accepted Insurance</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {provider.insurance.map((ins) => (
                                    <Badge
                                        key={ins}
                                        variant="outline"
                                        className="px-3 py-1.5 text-sm bg-background"
                                    >
                                        {ins}
                                    </Badge>
                                ))}
                                <Badge
                                    variant="outline"
                                    className="px-3 py-1.5 text-sm bg-background border-dashed"
                                >
                                    Out of Network
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="px-3 py-1.5 text-sm bg-background border-dashed"
                                >
                                    Self-Pay
                                </Badge>
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Not sure if your plan is covered? Contact me to verify your coverage before your first appointment.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Payment Methods */}
                <div className="mt-8">
                    <Card className="bg-card border-border">
                        <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
                                    </div>
                                    <span className="font-medium text-foreground">Payment Methods</span>
                                </div>
                                <div className="flex flex-wrap gap-2 sm:ml-auto">
                                    {provider.paymentMethods.map((method) => (
                                        <span
                                            key={method}
                                            className="text-sm text-muted-foreground"
                                        >
                                            {method}
                                            {method !== provider.paymentMethods[provider.paymentMethods.length - 1] && (
                                                <span className="ml-2 text-border">|</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
