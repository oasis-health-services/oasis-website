import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Shield,
    FileText,
    Activity,
    AlertTriangle,
    Phone,
    Mail,
    ClipboardList,
    CreditCard,
    Headphones,
    MessageSquare,
    Stethoscope,
    CalendarX,
} from "lucide-react";
import { contact } from "@/lib/contact";

const policyRights = [
    {
        icon: FileText,
        title: "Right to Inspect",
        description: "You have the right to inspect and obtain a copy of your health information, including medical and billing records."
    },
    {
        icon: Shield,
        title: "Right to Request Restriction",
        description: "You may ask us not to use or disclose any part of your protected health information for treatment, payment, or healthcare operations."
    },
    {
        icon: MessageSquare,
        title: "Confidential Communications",
        description: "You may request to receive confidential communications from us by alternative means or at an alternative location."
    },
    {
        icon: ClipboardList,
        title: "Accounting of Disclosures",
        description: "You have a right to receive an accounting of certain disclosures we have made of your protected health information."
    },
    {
        icon: FileText,
        title: "Right to Amend",
        description: "You have the right to have your provider amend your protected health information if you believe it is incorrect."
    },
    {
        icon: ClipboardList,
        title: "Paper Copy",
        description: "You have the right to obtain a paper copy of this notice from us at any time upon request."
    }
];

const telehealthPoints = [
    {
        icon: Activity,
        title: "Telehealth Delivery",
        description: "Use of electronic and communication technologies to deliver healthcare services when located at a different site than the provider."
    },
    {
        icon: AlertTriangle,
        title: "Provider-Patient Relationship",
        description: "A relationship is only established after clinical review and determination that telehealth is appropriate for your care."
    },
    {
        icon: Stethoscope,
        title: "Follow-Up Care",
        description: "Importance of adhering to the treatment plan, including medication management and therapy follow-up."
    }
];

const Policies = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-4">
                            <Shield className="w-3 h-3 mr-1" />
                            Policies & Consent
                        </Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
                            Consent, Notices & Policies
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            Detailed information regarding your rights as a patient, including HIPAA practices, telehealth consent, and office policies.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Last Updated:</strong> January 1, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* HIPAA Overview */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                HIPAA Notice of Privacy Practices
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                HIPAA (Health Insurance Portability and Accountability Act) of 1996 mandates data privacy and security for safeguarding patient’s medical information. Please review this notice carefully. It describes how medical information about you may be used and disclosed and how to get access to this information.
                            </p>
                            <p>
                                Your protected health information may be used and disclosed by your provider, our office staff, and others outside of our office that is involved in your care and treatment to provide healthcare services to you, pay your healthcare bills, support the operation of the physician’s practice, and other uses required by law.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Rights Grid */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                            Your Rights Concerning Health Information
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A statement of your rights regarding protected health information under federal and state regulations.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {policyRights.map((right) => (
                            <Card key={right.title} className="h-full">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <right.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">
                                        {right.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {right.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Telehealth Consent */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="font-serif text-3xl font-semibold text-foreground">
                                    Telehealth Informed Consent
                                </h2>
                            </div>
                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>
                                    Before using our service, it’s important to make sure you understand how Oasis Behavioral Health services work, including how Telehealth Care differs from visiting a traditional outpatient office.
                                </p>
                                <p>
                                    OBHS can store a request for psychotropic medications and/or therapy services and assign your appointment request to a licensed therapist or psychiatric nurse practitioner in your state.
                                </p>
                                <p>
                                    <strong>Non-Emergency Services:</strong> I understand that OBHS does not offer emergency or crisis visits. In an emergency, I should dial 911 or go to the nearest emergency department.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {telehealthPoints.map((point) => (
                                <Card key={point.title} className="border-l-4 border-l-primary">
                                    <CardContent className="p-4 pt-6">
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <point.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                                                <p className="text-sm text-muted-foreground">{point.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Office & Financial Policies */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Office Policies & Financial Agreement
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                It is the policy of Oasis Behavioral Health Services to collect all payments or insurance information at the time services are rendered. We accept Credit Cards (VISA/Mastercard), HSA, or Debit Cards.
                            </p>
                            <Card className="bg-card">
                                <CardContent className="p-6">
                                    <h4 className="font-semibold text-foreground mb-4">Patient Responsibilities:</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm">
                                        <li>Verify Mental Health coverage and benefits with your insurance company before your first visit.</li>
                                        <li>Provide current insurance information at the time of service.</li>
                                        <li>Payment of co-pays, co-insurance, and deductibles at the time of service.</li>
                                        <li>24-hour business day notice for all appointment cancellations.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* TCPA & Communication */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Headphones className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                TCPA Communication Consent
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p>
                                I authorize the use of my personal information, name of my provider, and appointment times to notify me of pending appointments, results, or balances due via automated telephone or text messaging.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* No Surprises Act Section */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-card p-8 rounded-2xl border border-destructive/20 shadow-sm shadow-destructive/5">
                        <div className="flex items-center gap-3 mb-6 font-bold text-destructive">
                            <AlertTriangle className="w-6 h-6" />
                            <h2 className="font-serif text-2xl lg:text-3xl">No Surprises Act Protections</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-sm md:text-base">
                            <p>
                                <strong>IMPORTANT:</strong> You aren’t required to sign this form and shouldn’t sign if you didn’t have a choice of health care provider before scheduling care.
                            </p>
                            <p>
                                Getting care from this provider or facility will likely cost you more. If your plan covers the service, federal law protects you from higher bills for emergency care or out-of-network treatment without consent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cancellation Policy */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl mx-auto">
                    <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-6">
                        <CalendarX className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                        Appointment Cancellation Policy
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        We understand unplanned events happen, but when you cancel late, it affects our clinicians' schedules significantly.
                        <strong> A fee of up to $100</strong> is charged for no-shows or cancellations with less than 24 business hours' notice.
                    </p>
                </div>
            </section>

            {/* Contact Our Privacy Officer (Standard block from HIPAA) */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                                Filing a Complaint
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    If you believe your privacy rights have been violated, you
                                    have the right to file a complaint. You will not be
                                    penalized or retaliated against for filing a complaint.
                                </p>
                                <Card>
                                    <CardContent className="p-4">
                                        <h4 className="font-semibold text-foreground mb-2">Our Privacy Officer</h4>
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
                            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">Contact Privacy Officer</h2>
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

            {/* Standard CTA (From HIPAA) */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
                        <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
                            Informed Consent Agreement
                        </h2>
                        <p className="opacity-90 max-w-2xl mx-auto mb-8">
                            By utilizing our services, you acknowledge that you have read and understood these policies. If you have any questions, please reach out to our team before your session.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild className="text-base font-semibold">
                                <a href="/patients">Download Forms</a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-white/30 hover:bg-white/10">
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Policies;
