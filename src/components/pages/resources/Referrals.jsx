import { ArrowRight, FileText, Phone, Mail, Fan as Fax, Upload, CheckCircle2, Clock, AlertCircle, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReferralSchema } from "@/lib/schema"
import { submitReferralForm } from "@/api"
import FormError from "@/components/FormError"
import FieldError from "@/components/FieldError"

const urgencyLevels = [
    { value: "routine", label: "Routine", description: "Non-urgent, standard scheduling (5-7 business days)" },
    { value: "urgent", label: "Urgent", description: "Priority scheduling needed (2-3 business days)" },
    { value: "expedited", label: "Expedited", description: "Time-sensitive situation (within 1-2 days)" },
]

const referralReasons = [
    "Anxiety/Panic Disorders",
    "Depression/Mood Disorders",
    "ADHD Evaluation",
    "ADHD Medication Management",
    "Bipolar Disorder",
    "OCD",
    "PTSD/Trauma",
    "Substance Use",
    "Autism Evaluation",
    "Medication Review",
    "Therapy Services",
    "Other",
]

export default function Referrals() {

    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit: formSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(ReferralSchema),
        defaultValues: {
            provider: {
                name: "",
                npi: "",
                practiceName: "",
                phone: "",
                email: "",
                fax: "",
            },
            patient: {
                firstName: "",
                lastName: "",
                dob: "",
                phone: "",
                email: "",
                insurance: "",
                address: ""
            },
            referralReason: [],
            urgency: "",
            appointmentPreference: "",
            clinicalNotes: "",
            currentMedications: ""
        },
    });

    const onSubmit = async (formData) => {
        try {
            setIsSubmitting(true);

            const { consent, ...collaborator } = formData;
            const response = await submitPartnershipForm(collaborator);
            if (!response.success) {
                setError("We were unable to process your request at this time. Please try again later or contact us at support@oasishealthservices.com");
                setIsSubmitting(false);
                return;
            }

            const params = new URLSearchParams({
                type: "collaboration",
                name: collaborator.name
            });

            setIsSubmitting(false);
            //            setIsSubmitted(true);
            window.location.href = `/thank-you?${params.toString()}`;
        } catch (error) {
            console.error("failed to submit collaboration", error);
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="bg-secondary py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <a href="/for-providers" className="hover:text-primary">For Providers</a>
                        <span>/</span>
                        <span className="text-foreground">Submit a Referral</span>
                    </div>
                    <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl text-balance">
                        Submit a Patient Referral
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
                        Help your patients access expert mental health care. Complete the form below or use
                        one of our alternative submission methods.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Badge variant="secondary" className="text-sm py-1.5 px-3">
                            <Clock className="h-3.5 w-3.5 mr-1.5" />
                            Most patients seen within 5-7 days
                        </Badge>
                        <Badge variant="secondary" className="text-sm py-1.5 px-3">
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
                            Confirmation within 24-48 hours
                        </Badge>
                    </div>
                </div>
            </section>

            {/* Submission Options */}
            <section className="py-8 border-b border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Card className="bg-primary text-primary-foreground border-0">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                                    <Upload className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Online Form</p>
                                    <p className="text-sm text-primary-foreground/80">Fastest option - submit below</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Fax className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Fax Referral</p>
                                    <p className="text-sm text-muted-foreground">(209) 290-3019</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Call Us</p>
                                    <a href="tel:+15093816035" className="text-sm text-primary hover:underline">(509) 381-6035</a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Referral Form */}
                        <div className="lg:col-span-2">
                            <Card className="bg-card border-border">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary" />
                                        Online Referral Form
                                    </CardTitle>
                                    <CardDescription>
                                        All fields marked with * are required. We will contact the patient within 24-48 business hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-8" onSubmit={formSubmit(onSubmit)}>
                                        {/* Referring Provider Section */}
                                        <div>
                                            <FormError error={error} />
                                            <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                                                Referring Provider Information
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="provider-name" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Provider Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="provider-name"
                                                        {...register("provider.name")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="Dr. Jane Smith"
                                                    />
                                                    <FieldError error={errors.provider?.name} />
                                                </div>
                                                <div>
                                                    <label htmlFor="provider-npi" className="block text-sm font-medium text-foreground mb-1.5">
                                                        NPI Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="provider-npi"
                                                        {...register("provider.npi")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="1234567890"
                                                    />
                                                    <FieldError error={errors.provider?.npi} />
                                                </div>
                                                <div>
                                                    <label htmlFor="practice-name" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Practice Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="practice-name"
                                                        {...register("provider.practiceName")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="Primary Care Associates"
                                                    />
                                                    <FieldError error={errors.provider?.practiceName} />
                                                </div>
                                                <div>
                                                    <label htmlFor="practice-phone" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Practice Phone *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="practice-phone"
                                                        {...register("provider.phone")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="(555) 123-4567"
                                                    />
                                                    <FieldError error={errors.provider?.phone} />
                                                </div>
                                                <div>
                                                    <label htmlFor="practice-fax" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Practice Fax
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="practice-fax"
                                                        {...register("provider.fax")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="(555) 123-4568"
                                                    />
                                                    <FieldError error={errors.provider?.fax} />
                                                </div>
                                                <div>
                                                    <label htmlFor="practice-email" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="practice-email"
                                                        {...register("provider.email")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="provider@practice.com"
                                                    />
                                                    <FieldError error={errors.provider?.email} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Patient Section */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                                                Patient Information
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="patient-first" className="block text-sm font-medium text-foreground mb-1.5">
                                                        First Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="patient-first"
                                                        {...register("patient.firstName")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                    />
                                                    <FieldError error={errors.patient?.firstName} />
                                                </div>
                                                <div>
                                                    <label htmlFor="patient-last" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Last Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="patient-last"
                                                        {...register("patient.lastName")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                    />
                                                    <FieldError error={errors.patient?.lastName} />
                                                </div>
                                                <div>
                                                    <label htmlFor="patient-dob" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Date of Birth *
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="patient-dob"
                                                        {...register("patient.dob")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                    />
                                                    <FieldError error={errors.patient?.dob} />
                                                </div>
                                                <div>
                                                    <label htmlFor="patient-phone" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Patient Phone *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="patient-phone"
                                                        {...register("patient.phone")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="(555) 123-4567"
                                                    />
                                                    <FieldError error={errors.patient?.phone} />
                                                </div>
                                                <div>
                                                    <label htmlFor="patient-email" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Patient Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="patient-email"
                                                        {...register("patient.email")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="patient@email.com"
                                                    />
                                                    <FieldError error={errors.patient?.email} />
                                                </div>
                                                <div>
                                                    <label htmlFor="patient-insurance" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Insurance Provider
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="patient-insurance"
                                                        {...register("patient.insurance")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                        placeholder="Blue Cross, Aetna, etc."
                                                    />
                                                    <FieldError error={errors.patient?.insurance} />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="patient-address" className="block text-sm font-medium text-foreground mb-1.5">
                                                    Patient Address
                                                </label>
                                                <input
                                                    type="text"
                                                    id="patient-address"
                                                    {...register("patient.address")}
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                    placeholder="Street, City, State, ZIP"
                                                />
                                                <FieldError error={errors.patient?.address} />
                                            </div>
                                        </div>

                                        {/* Referral Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                                                Referral Details
                                            </h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-foreground mb-2">
                                                        Reason for Referral *
                                                    </label>
                                                    <FieldError error={errors.referralReason} />
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                        {referralReasons.map((reason) => (
                                                            <label key={reason} className="flex items-center gap-2 text-sm">
                                                                <input
                                                                    type="checkbox"
                                                                    {...register("referralReason")}
                                                                    value={reason.toLowerCase().replace(/\s+/g, '-')}
                                                                    className="rounded border-input text-primary focus:ring-primary"
                                                                />
                                                                <span className="text-muted-foreground">{reason}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-foreground mb-2">
                                                        Urgency Level *
                                                    </label>
                                                    <FieldError error={errors.urgency} />
                                                    <div className="space-y-2">
                                                        {urgencyLevels.map((level) => (
                                                            <label key={level.value} className="flex items-start gap-3 p-3 rounded-lg border border-input hover:border-primary/50 cursor-pointer transition-colors">
                                                                <input
                                                                    type="radio"
                                                                    {...register("urgency")}
                                                                    value={level.value}
                                                                    className="mt-0.5 border-input text-primary focus:ring-primary"
                                                                />
                                                                <div>
                                                                    <span className="font-medium text-foreground">{level.label}</span>
                                                                    <p className="text-sm text-muted-foreground">{level.description}</p>
                                                                </div>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="appointment-preference" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Appointment Preference
                                                    </label>
                                                    <FieldError error={errors.appointmentPreference} />
                                                    <select
                                                        id="appointment-preference"
                                                        {...register("appointmentPreference")}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                    >
                                                        <option value="">No preference</option>
                                                        <option value="in-person">In-Person (Roswell Office)</option>
                                                        <option value="telehealth">Telehealth/Virtual</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label htmlFor="clinical-notes" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Clinical Notes / Reason for Referral *
                                                    </label>
                                                    <textarea
                                                        id="clinical-notes"
                                                        {...register("clinicalNotes")}
                                                        rows={4}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                                        placeholder="Please include relevant clinical history, current symptoms, medications, and any specific concerns or requests..."
                                                    />
                                                    <FieldError error={errors.clinicalNotes} />
                                                </div>

                                                <div>
                                                    <label htmlFor="current-medications" className="block text-sm font-medium text-foreground mb-1.5">
                                                        Current Medications
                                                    </label>
                                                    <textarea
                                                        id="current-medications"
                                                        {...register("currentMedications")}
                                                        rows={2}
                                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                                        placeholder="List current psychiatric and relevant medications with dosages"
                                                    />
                                                    <FieldError error={errors.currentMedications} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Consent */}
                                        <div className="bg-muted p-4 rounded-lg">
                                            <label className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    {...register("consent")}
                                                    className="mt-0.5 rounded border-input text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-muted-foreground">
                                                    I confirm that I have obtained the patient&apos;s consent to share their information
                                                    with Oasis Health Services for the purpose of this referral and care coordination. *
                                                </span>
                                            </label>
                                            <FieldError error={errors.consent} />
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button type="submit" size="lg" className="flex-1 cursor-pointer" disabled={isSubmitting}>

                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Submitting Request...
                                                    </>
                                                ) : (
                                                    "Submit Referral"
                                                )}


                                            </Button>
                                            <Button type="reset" variant="outline" size="lg" className="bg-transparent cursor-pointer">
                                                Clear Form
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Download Forms */}
                            <Card className="bg-card border-border">
                                <CardHeader>
                                    <CardTitle className="text-lg">Printable Referral Form</CardTitle>
                                    <CardDescription>
                                        Prefer to fax? Download our referral form.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                                        <a href="/forms/referral-form.pdf" download>
                                            <Download className="h-4 w-4 mr-2" />
                                            Download PDF Form
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                                        <a href="/forms/referral-form.pdf" target="_blank">
                                            <Printer className="h-4 w-4 mr-2" />
                                            Print Form
                                        </a>
                                    </Button>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-sm text-muted-foreground">
                                            <strong>Fax to:</strong> (209) 290-3019
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Info */}
                            <Card className="bg-card border-border">
                                <CardHeader>
                                    <CardTitle className="text-lg">Need Help?</CardTitle>
                                    <CardDescription>
                                        Our team is here to assist with referrals.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Call</p>
                                            <a href="tel:+15093816035" className="font-medium text-foreground hover:text-primary">
                                                (509) 381-6035
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a href="mailto:coordinator@oasishealthservices.com" className="font-medium text-foreground hover:text-primary text-sm">
                                                coordinator@oasishealthservices.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground">
                                            Mon - Fri: 8:00 AM - 5:30 PM EST<br />
                                            Response within 24-48 business hours
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Important Notes */}
                            <Card className="bg-accent/10 border-accent/20">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3">
                                        <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">Important Notes</h4>
                                            <ul className="text-sm text-muted-foreground space-y-2">
                                                <li>We accept patients ages 11 and older</li>
                                                <li>We do not provide court-ordered evaluations</li>
                                                <li>Emergency/crisis referrals should call 988 or 911</li>
                                                <li>Patient must reside in Georgia for telehealth</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Back to For Providers */}
                            <Button variant="ghost" className="w-full" asChild>
                                <a href="/for-providers">
                                    <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                                    Back to Provider Information
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}