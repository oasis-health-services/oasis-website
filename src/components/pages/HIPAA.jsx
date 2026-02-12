import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Shield,
    FileText,
    Eye,
    Lock,
    Users,
    AlertTriangle,
    Phone,
    Mail,
    Scale,
    ClipboardList,
    HeartPulse,
    Building2,
} from "lucide-react"

const patientRights = [
    {
        icon: Eye,
        title: "Right to Inspect and Copy",
        description:
            "You have the right to inspect and obtain a copy of your health information, including medical and billing records. We may charge a reasonable fee for copies.",
    },
    {
        icon: FileText,
        title: "Right to Amend",
        description:
            "If you believe your health information is incorrect or incomplete, you may request an amendment. We may deny your request in certain circumstances, but will provide a written explanation.",
    },
    {
        icon: ClipboardList,
        title: "Right to an Accounting of Disclosures",
        description:
            "You have the right to request a list of certain disclosures we have made of your health information, excluding disclosures for treatment, payment, and healthcare operations.",
    },
    {
        icon: Lock,
        title: "Right to Request Restrictions",
        description:
            "You may request restrictions on how we use or disclose your health information for treatment, payment, or healthcare operations. We are not required to agree to all requests.",
    },
    {
        icon: Mail,
        title: "Right to Confidential Communications",
        description:
            "You may request that we communicate with you about health matters in a certain way or at a certain location. We will accommodate reasonable requests.",
    },
    {
        icon: FileText,
        title: "Right to a Paper Copy",
        description:
            "You have the right to obtain a paper copy of this Notice of Privacy Practices at any time, even if you previously agreed to receive it electronically.",
    },
]

const permittedUses = [
    {
        icon: HeartPulse,
        title: "Treatment",
        description:
            "We may use and disclose your health information to provide, coordinate, or manage your healthcare and related services. This includes consultations between providers, referrals, and prescription management.",
    },
    {
        icon: Building2,
        title: "Payment",
        description:
            "We may use and disclose your health information to obtain payment for healthcare services, including billing and collections, eligibility verification, and coordination of benefits.",
    },
    {
        icon: ClipboardList,
        title: "Healthcare Operations",
        description:
            "We may use and disclose your health information for healthcare operations, including quality assessment, training, licensing, accreditation, and business management activities.",
    },
    {
        icon: Users,
        title: "Family and Friends",
        description:
            "With your permission or in emergency situations, we may disclose relevant health information to family members, friends, or others involved in your care or payment for care.",
    },
    {
        icon: AlertTriangle,
        title: "Public Health and Safety",
        description:
            "We may disclose your health information when required by law, including for public health activities, abuse or neglect reporting, FDA oversight, and to prevent serious threats to health or safety.",
    },
    {
        icon: Scale,
        title: "Legal Proceedings",
        description:
            "We may disclose health information in response to court orders, subpoenas, or other lawful processes, and for law enforcement purposes as permitted or required by law.",
    },
]

export default function HIPAACompliance() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-4">
                            <Shield className="w-3 h-3 mr-1" />
                            Privacy Practices
                        </Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
                            Notice of Privacy Practices
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            This notice describes how medical information about you may be
                            used and disclosed and how you can get access to this
                            information. Please review it carefully.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Effective Date:</strong> January 1, 2024 |{" "}
                            <strong>Last Updated:</strong> January 1, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Our Commitment to Your Privacy
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                At Oasis Health Services, we understand that your health
                                information is personal and private. We are committed to
                                protecting your protected health information (PHI) in
                                accordance with the Health Insurance Portability and
                                Accountability Act of 1996 (HIPAA) and all applicable federal
                                and state laws.
                            </p>
                            <p>
                                We are required by law to maintain the privacy of your PHI,
                                provide you with this Notice of our legal duties and privacy
                                practices, notify you following a breach of unsecured PHI, and
                                follow the terms of this Notice currently in effect.
                            </p>
                            <p>
                                We reserve the right to change the terms of this Notice at any
                                time. Any changes will apply to all information we have about
                                you. The new Notice will be available upon request, in our
                                office, and on our website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Your Rights */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                            Your Rights Regarding Your Health Information
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            You have the following rights regarding the health information
                            we maintain about you.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {patientRights.map((right) => (
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

            {/* How We Use Your Information */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                            How We May Use and Disclose Your Information
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The following describes the ways we may use and disclose your
                            protected health information.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {permittedUses.map((use) => (
                            <Card key={use.title} className="h-full border-l-4 border-l-primary">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                        <use.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">
                                        {use.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {use.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authorization Requirements */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                            Uses and Disclosures Requiring Your Authorization
                        </h2>
                        <div className="space-y-6 text-muted-foreground">
                            <p>
                                We will obtain your written authorization before using or
                                disclosing your health information for purposes other than
                                those described above, including:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>
                                        <strong className="text-foreground">
                                            Marketing purposes:
                                        </strong>{" "}
                                        We will not use or disclose your health information for
                                        marketing purposes without your written authorization.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>
                                        <strong className="text-foreground">
                                            Sale of health information:
                                        </strong>{" "}
                                        We will not sell your health information without your
                                        written authorization.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>
                                        <strong className="text-foreground">
                                            Psychotherapy notes:
                                        </strong>{" "}
                                        We will not disclose psychotherapy notes without your
                                        written authorization, except as permitted by law.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>
                                        <strong className="text-foreground">
                                            Other uses and disclosures:
                                        </strong>{" "}
                                        Any other uses and disclosures not described in this
                                        Notice will be made only with your written authorization.
                                    </span>
                                </li>
                            </ul>
                            <p>
                                You may revoke an authorization at any time by submitting a
                                written request to our Privacy Officer. However, your
                                revocation will not affect any uses or disclosures permitted
                                by your authorization while it was in effect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Protections for Mental Health */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Lock className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground">
                                Special Protections for Mental Health Information
                            </h2>
                        </div>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                As a mental health provider, we are subject to additional
                                federal and state laws that provide special protections for
                                mental health and substance abuse treatment records. These
                                laws may restrict the use and disclosure of your information
                                beyond what is described in this Notice.
                            </p>
                            <p>
                                In general, we will not disclose mental health or substance
                                abuse treatment information without your specific written
                                consent, except in limited circumstances such as medical
                                emergencies or when required by law.
                            </p>
                            <p>
                                Georgia law provides additional protections for mental health
                                records. We comply with all applicable state laws regarding
                                the confidentiality of mental health information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complaints and Contact */}
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
                                <p>You may file a complaint with:</p>
                                <div className="space-y-4">
                                    <Card>
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                Our Privacy Officer
                                            </h4>
                                            <p className="text-sm">
                                                Oasis Health Services
                                                <br />
                                                11285 Elkins Road, Unit J-6
                                                <br />
                                                Roswell, GA 30076
                                                <br />
                                                Phone: (509) 381-6035
                                                <br />
                                                Email: info@oasishealthservices.com
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                U.S. Department of Health and Human Services
                                            </h4>
                                            <p className="text-sm">
                                                Office for Civil Rights
                                                <br />
                                                200 Independence Avenue, S.W.
                                                <br />
                                                Washington, D.C. 20201
                                                <br />
                                                Phone: 1-877-696-6775
                                                <br />
                                                Website: www.hhs.gov/ocr/privacy/hipaa/complaints
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                                Contact Our Privacy Officer
                            </h2>
                            <div className="space-y-4 text-muted-foreground mb-6">
                                <p>
                                    If you have any questions about this Notice, our privacy
                                    practices, or if you would like to exercise any of your
                                    rights described above, please contact our Privacy Officer:
                                </p>
                            </div>
                            <Card className="bg-card">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Phone</p>
                                            <a
                                                href="tel:+15093816035"
                                                className="font-medium text-foreground hover:text-primary"
                                            >
                                                (509) 381-6035
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a
                                                href="mailto:info@oasishealthservices.com"
                                                className="font-medium text-foreground hover:text-primary"
                                            >
                                                info@oasishealthservices.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Building2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Address</p>
                                            <address className="not-italic font-medium text-foreground">
                                                11285 Elkins Road
                                                <br />
                                                Unit J-6, Roswell, GA 30076
                                            </address>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acknowledgment CTA */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
                        <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-primary-foreground mb-4">
                            Acknowledgment of Receipt
                        </h2>
                        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                            As a patient of Oasis Health Services, you will be asked to sign
                            an acknowledgment that you have received this Notice of Privacy
                            Practices. If you have any questions before signing, please ask
                            our staff or contact our Privacy Officer.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                size="lg"
                                variant="secondary"
                                asChild
                                className="text-base"
                            >
                                <a href="/patients">Download Forms</a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                            >
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}