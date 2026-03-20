import { GuardianContactForm } from "@/components/forms/GuardianContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, Info, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"

function HeroSection() {

    return (
        <section className="bg-secondary py-12 lg:py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-7xl px-6 lg:px-8"
            >
                <a href="/resources/help-center" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Help Center
                </a>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h1 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                            Guardian Information
                        </h1>
                        <p className="mt-2 text-muted-foreground text-pretty leading-relaxed">
                            Submit legal guardian or authorized representative information for a patient.
                            You can add one or more guardians.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

function MainSection() {
    return (
        <section className="py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2"
                    >
                        <GuardianContactForm />
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 lg:mt-0 space-y-6"
                    >
                        {/* Who should complete */}
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                                    <Info className="h-4 w-4 text-primary" />
                                    Who Should Complete This Form?
                                </h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Parents/guardians of patients under 18
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Legal guardians of adult patients
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Healthcare power of attorney holders
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                        Court-appointed representatives
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Documentation */}
                        <Card className="bg-amber-50 border-amber-200">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-amber-800 flex items-center gap-2 mb-3">
                                    <FileText className="h-4 w-4 text-amber-600" />
                                    Documentation May Be Required
                                </h3>
                                <p className="text-sm text-amber-700 leading-relaxed">
                                    For legal guardianship (non-parent), we may request supporting
                                    documentation such as court orders, power of attorney documents,
                                    or guardianship papers. Our team will follow up if needed.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Privacy */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-3">
                                    <Shield className="h-4 w-4 text-primary" />
                                    HIPAA & Privacy
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Guardian information is protected under HIPAA. Authorized guardians
                                    may receive information about the patient&apos;s care and make treatment
                                    decisions as permitted by law and the scope of their authority.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Multiple guardians */}
                        <Card className="bg-card border-border">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-3">Multiple Guardians</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    You can add multiple guardians using the form. This is helpful for
                                    patients with divorced parents sharing custody, or situations with
                                    multiple authorized decision-makers.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default {
    HeroSection,
    MainSection
}