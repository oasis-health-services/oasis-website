import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Scale,
    Building2,
    Calendar,
    Lock,
    ShieldAlert,
    Gavel,
    ShieldCheck,
    Phone,
    Mail
} from "lucide-react";
import { contact } from "@/lib/contact";

const TermsAndConditions = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-4">
                            <Scale className="w-3 h-3 mr-1" />
                            Legal Terms
                        </Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
                            Terms and Conditions
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            Please review our terms of service carefully to understand your rights and responsibilities when using our services.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Last Updated:</strong> January 1, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Office Operations */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Office Operations
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                The physical office location of Oasis Health Services is open by appointment only. If you do not have an appointment and show up to the office, you will not be seen. No walk-ins are permitted under any circumstances.
                            </p>
                            <p>
                                You can call or email the office anytime, and an office staff member will return your telephone call or email within 48 business hours unless circumstances beyond Oasis’s control make it impossible or impracticable to do so. In that event, a staff member will get back to you as soon as possible and practicable.
                            </p>
                            <Card className="bg-muted/50 border-none">
                                <CardContent className="p-6">
                                    <p className="text-sm italic">
                                        A clinician or staff may contact you via telephone, email, or SMS and leave a message containing appointment or medical information if you are unavailable.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appointments */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Appointments
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                Appointments are available by video conference (telehealth) and each appointment is generally allotted up to 45-60 minutes for initial psychiatric evaluations, and 60 minutes for therapy consultations.
                            </p>
                            <p>
                                Follow-up visits for psychiatric consultations are 25-30 minutes and 60 minutes for therapy consultations. You acknowledge such limitations and knowingly and voluntarily accept the additional risks accompanying video visits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Confidentiality and Intellectual Property */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Lock className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Confidentiality and Intellectual Property
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                            <div className="bg-card p-6 rounded-xl border">
                                <h4 className="font-semibold text-foreground mb-3">Oasis Confidential Information</h4>
                                <p className="text-sm">
                                    Includes all information, whether written or oral, that is prepared, uniquely known and/or provided by Oasis or any Oasis Party, of commercial value that is not readily available to the public, plus any Oasis Intellectual Property.
                                </p>
                            </div>
                            <p>
                                All Oasis Intellectual Property in any way related to any Oasis Proprietary Items or Oasis Confidential Information provided by Oasis to any patient, is hereby acknowledged to remain in the exclusive possession of Oasis.
                            </p>
                            <p>
                                The Patient shall, and shall cause each Patient Party to, hold Oasis Confidential Information in strict confidence and shall refrain from providing, copying, disclosing, divulging or otherwise making available Oasis Confidential Information to any other person or entity without the prior written consent of Oasis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Non-Disparagement */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-6">
                            <ShieldAlert className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                            Non-Disparagement
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                The Patient shall not at any time, directly or indirectly through third parties, actively or passively, disparage, question, criticize or otherwise make reference to any services performed by or through Oasis, if the effect of such action(s) reasonably could be anticipated to result in any harm to or adverse impact upon the reputation or business of Oasis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited Warranties */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Limited Warranties and Disclaimers
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                Oasis warrants that all services performed and provided by and through Oasis shall conform to current guidelines and modalities for psychiatric treatment.
                            </p>
                            <div className="bg-muted p-6 rounded-xl border-l-4 border-primary">
                                <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">Disclaimer</p>
                                <p className="text-sm">
                                    THE SERVICES, THE RELATED SITES, PORTALS, NETWORKS, PLATFORMS, TOOLS AND APPLICATIONS, AND ALL OTHER PRODUCTS, PROGRAMS, FEATURES AND DATA PROVIDED BY OR THROUGH OASIS ARE OTHERWISE DONE SO TO THE PATIENT STRICTLY ON AN “AS IS, WHERE IS” BASIS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limitation of Liability */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                                <Gavel className="w-6 h-6 text-destructive" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Limitation of Liability
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p className="font-medium text-foreground">
                                IN NO EVENT SHALL OASIS BE LIABLE TO THE PATIENT OR ANY OTHER PARTY FOR LOST PROFITS, LOST BUSINESS, LOST DATA, OR ANY OTHER INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES.
                            </p>
                            <p>
                                The total aggregate liability of Oasis Health Services under or in relation to these agreements shall in no event exceed the total amounts actually paid to date by the patient.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                                Questions or Concerns
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    If you have any questions regarding these terms, please contact our office. We are committed to transparency and clarity in our patient relationships.
                                </p>
                                <Card>
                                    <CardContent className="p-4">
                                        <h4 className="font-semibold text-foreground mb-2">Our Office</h4>
                                        <p className="text-sm">
                                            Oasis Health Services<br />
                                            11285 Elkins Road, Unit J-6, Roswell, GA 30076<br />
                                            Phone: {contact.phone}<br />
                                            Email: info@oasishealthservices.com
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">Contact Us</h2>
                            <Card className="bg-card">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Phone</p>
                                            <a href={`tel:${contact.phone}`} className="font-medium hover:text-primary">{contact.phone}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a href="mailto:info@oasishealthservices.com" className="font-medium hover:text-primary">info@oasishealthservices.com</a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
                        <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
                            Ready to Begin?
                        </h2>
                        <p className="opacity-90 max-w-2xl mx-auto mb-8">
                            Your journey towards better mental health is just a few steps away. Our team is here to support you every step of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild className="text-base font-semibold">
                                <a href="/appointment">Schedule Appointment</a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-white/30 hover:bg-white/10">
                                <a href="/contact">Ask a Question</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsAndConditions;
