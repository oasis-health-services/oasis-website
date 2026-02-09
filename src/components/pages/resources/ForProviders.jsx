import {
    ArrowRight,
    Handshake,
    FileText,
    Phone,
    Mail,
    CheckCircle2,
    Clock,
    Shield,
    Users,
    MessageSquare,
    ClipboardList,
    Building2,
    Stethoscope,
    Brain,
    HeartPulse,
    Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CollaborationSchema } from "@/lib/schema"
import { submitPartnershipForm } from "@/api"
import FormError from "@/components/FormError"
import FieldError from "@/components/FieldError"

const partnershipBenefits = [
    {
        icon: MessageSquare,
        title: "Seamless Communication",
        description: "Direct access to our providers for care coordination. Regular updates on shared patients' progress and treatment plans."
    },
    {
        icon: Clock,
        title: "Expedited Referrals",
        description: "Priority scheduling for referred patients. Most referrals are seen within 5-7 business days."
    },
    {
        icon: FileText,
        title: "Comprehensive Reports",
        description: "Detailed evaluation summaries and treatment recommendations sent directly to referring providers."
    },
    {
        icon: Shield,
        title: "HIPAA Compliant",
        description: "Secure, compliant communication channels for all patient information exchanges."
    },
    {
        icon: Users,
        title: "Collaborative Care",
        description: "Integrated approach addressing both mental and physical health needs for better patient outcomes."
    },
    {
        icon: ClipboardList,
        title: "Easy Documentation",
        description: "Streamlined referral forms and electronic submission options to minimize administrative burden."
    },
]

const referralConditions = [
    { name: "Anxiety Disorders", icon: Brain },
    { name: "Depression & Mood Disorders", icon: HeartPulse },
    { name: "ADHD (Children & Adults)", icon: Brain },
    { name: "Trauma & PTSD", icon: Shield },
    { name: "OCD & Related Disorders", icon: Brain },
    { name: "Substance Use Disorders", icon: HeartPulse },
    { name: "Personality Disorders", icon: Users },
    { name: "Autism Spectrum Evaluation", icon: Brain },
]

const referralSteps = [
    {
        step: 1,
        title: "Submit Referral",
        description: "Complete our online referral form or fax patient information to our office."
    },
    {
        step: 2,
        title: "Intake Coordination",
        description: "Our team contacts the patient to schedule an appointment and gather initial information."
    },
    {
        step: 3,
        title: "Evaluation & Treatment",
        description: "Patient receives comprehensive evaluation and begins personalized treatment plan."
    },
    {
        step: 4,
        title: "Progress Updates",
        description: "You receive regular updates on your patient's progress and treatment recommendations."
    },
]

const specialties = [
    { value: "primary-care", label: "Primary Care / Family Medicine" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "internal-medicine", label: "Internal Medicine" },
    { value: "ob-gyn", label: "OB/GYN" },
    { value: "neurology", label: "Neurology" },
    { value: "cardiology", label: "Cardiology" },
    { value: "other", label: "Other Specialty" },
]

const partnershipInterests = [
    "Co-management of patients",
    "Referral partnership",
    "Collaborative care agreement",
    "Consultation services",
    "Educational collaboration",
]

function ForProviders() {

    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit: formSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CollaborationSchema),
        defaultValues: {
            name: "",
            credentials: "",
            practiceName: "",
            email: "",
            phone: "",
            specialty: "",
            partnershipInterests: [],
            estimatedReferrals: "",
            message: "",
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
            <section className="bg-secondary py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="secondary" className="mb-4">
                                <Handshake className="h-3 w-3 mr-1.5" />
                                Provider Partnership
                            </Badge>
                            <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl text-balance">
                                Partner With Oasis Health Services
                            </h1>
                            <p className="mt-6 text-xl text-muted-foreground text-pretty">
                                We work with physicians, specialists, and healthcare providers to coordinate care
                                and improve outcomes for shared patients. Our collaborative approach ensures seamless
                                communication and comprehensive treatment plans.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild>
                                    <a href="/providers/referrals">
                                        Submit a Referral
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent border-primary text-primary" asChild>
                                    <a href="#contact">
                                        Request Collaboration Agreement
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Quick Contact Card */}
                        <div className="lg:justify-self-end w-full max-w-md">
                            <Card className="bg-card border-border shadow-lg">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <Building2 className="h-5 w-5 text-primary" />
                                        Provider Services
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium text-foreground">Referral Line</p>
                                            <a href="tel:+15093816035" className="text-primary hover:underline">
                                                (509) 381-6035
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium text-foreground">Referral Email</p>
                                            <a href="mailto:coordinator@oasishealthservices.com" className="text-primary hover:underline">
                                                coordinator@oasishealthservices.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FileText className="h-5 w-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="font-medium text-foreground">Fax</p>
                                            <p className="text-muted-foreground">(209) 290-3019</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-sm text-muted-foreground">
                                            <Clock className="h-4 w-4 inline mr-1.5" />
                                            Response within 24-48 business hours
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Why Partner With Us
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our commitment to collaborative care means better outcomes for your patients
                            and a streamlined experience for your practice.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {partnershipBenefits.map((benefit) => (
                            <Card key={benefit.title} className="bg-card border-border">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <benefit.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Referral Process */}
            <section className="py-16 lg:py-20 bg-secondary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            How the Referral Process Works
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our streamlined process makes it easy to refer patients and stay informed about their care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {referralSteps.map((step, index) => (
                            <div key={step.step} className="relative">
                                <Card className="bg-card border-border h-full">
                                    <CardContent className="pt-6">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                    </CardContent>
                                </Card>
                                {index < referralSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 -right-3 w-6 text-primary" aria-hidden="true">
                                        <ArrowRight className="h-6 w-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" asChild>
                            <a href="/for-providers/referrals">
                                Start a Referral
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Conditions We Accept Referrals For */}
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                                Conditions We Accept Referrals For
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Our providers specialize in treating a wide range of mental health conditions
                                for patients of all ages. We offer comprehensive psychiatric evaluations,
                                medication management, and therapy services.
                            </p>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Adults, adolescents, and children (6+)</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>In-person and telehealth appointments</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span>Most major insurances accepted</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button variant="outline" className="bg-transparent border-primary text-primary" asChild>
                                    <a href="/conditions">
                                        View All Conditions We Treat
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {referralConditions.map((condition) => (
                                <Card key={condition.name} className="bg-card border-border">
                                    <CardContent className="p-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <condition.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{condition.name}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services for Referred Patients */}
            <section className="py-16 lg:py-20 bg-muted">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Services for Referred Patients
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Comprehensive mental health services to support your patients' treatment needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <Stethoscope className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Psychiatric Evaluation</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Comprehensive diagnostic assessments with detailed reports sent to referring providers.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <ClipboardList className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Medication Management</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Expert psychopharmacology services with coordination of care for patients on multiple medications.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <Brain className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Pharmacogenomic Testing</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Genetic testing to optimize medication selection and reduce trial-and-error prescribing.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <Users className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Therapy Services</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Evidence-based psychotherapy including CBT, DBT, and trauma-focused approaches.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <HeartPulse className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Spravato Treatment</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    FDA-approved esketamine treatment for treatment-resistant depression.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border">
                            <CardContent className="pt-6">
                                <Shield className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">Autism Evaluation</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Comprehensive autism spectrum assessments for children and adults.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-12 text-center">
                        <Button variant="outline" className="bg-transparent border-primary text-primary" asChild>
                            <a href="/services">
                                View All Services
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                                Questions About Partnering?
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Contact us to learn more about how we can work together to provide exceptional
                                care for your patients. We are happy to discuss our services, referral process,
                                or establish a formal collaboration agreement.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Call Us</p>
                                        <a href="tel:+15093816035" className="text-lg font-semibold text-foreground hover:text-primary">
                                            (509) 381-6035
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email Us</p>
                                        <a href="mailto:coordinator@oasishealthservices.com" className="text-lg font-semibold text-foreground hover:text-primary">
                                            coordinator@oasishealthservices.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <FileText className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Fax Referrals</p>
                                        <p className="text-lg font-semibold text-foreground">(209) 290-3019</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collaboration Request Form */}
                        <Card className="bg-card border-border">
                            <CardHeader>
                                <CardTitle>Request Collaboration Agreement</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4" onSubmit={formSubmit(onSubmit)}>

                                    <FormError error={error} />

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="provider-name" className="block text-sm font-medium text-foreground mb-1.5">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                {...register("name")}
                                                id="name"
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                placeholder="Dr. Jane Smith"
                                            />
                                            <FieldError error={errors.name} />
                                        </div>
                                        <div>
                                            <label htmlFor="credentials" className="block text-sm font-medium text-foreground mb-1.5">
                                                Credentials
                                            </label>
                                            <input
                                                type="text"
                                                {...register("credentials")}
                                                id="credentials"
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                placeholder="MD, DO, NP, PA"
                                            />
                                            <FieldError error={errors.credentials} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="practice-name" className="block text-sm font-medium text-foreground mb-1.5">
                                            Practice Name
                                        </label>
                                        <input
                                            type="text"
                                            {...register("practiceName")}
                                            id="practice-name"
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            placeholder="Your practice or organization"
                                        />
                                        <FieldError error={errors.practiceName} />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="provider-email" className="block text-sm font-medium text-foreground mb-1.5">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                {...register("email")}
                                                id="email"
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                placeholder="you@practice.com"
                                            />
                                            <FieldError error={errors.email} />
                                        </div>
                                        <div>
                                            <label htmlFor="provider-phone" className="block text-sm font-medium text-foreground mb-1.5">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                {...register("phone")}
                                                id="phone"
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                                placeholder="(555) 123-4567"
                                            />
                                            <FieldError error={errors.phone} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="specialty" className="block text-sm font-medium text-foreground mb-1.5">
                                            Your Specialty
                                        </label>
                                        <select
                                            id="specialty"
                                            {...register("specialty")}
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="">Select your specialty</option>
                                            <option>Primary Care / Family Medicine</option>
                                            <option>Pediatrics</option>
                                            <option>Internal Medicine</option>
                                            <option>OB/GYN</option>
                                            <option>Neurology</option>
                                            <option>Cardiology</option>
                                            <option>Other Specialty</option>
                                        </select>
                                        <FieldError error={errors.specialty} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Partnership Interests</label>
                                        <FieldError error={errors.partnershipInterests} />
                                        <div className="space-y-2">
                                            {partnershipInterests.map((interest) => (
                                                <label key={interest} className="flex items-center gap-2 text-sm">
                                                    <input
                                                        type="checkbox"
                                                        value={interest}
                                                        {...register("partnershipInterests")}
                                                        className="rounded border-input text-primary focus:ring-primary"
                                                    />
                                                    <span className="text-muted-foreground">{interest}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="estimated-referrals" className="block text-sm font-medium text-foreground mb-1.5">
                                            Estimated Monthly Referrals
                                        </label>
                                        <select
                                            id="estimated-referrals"
                                            {...register("estimatedReferrals")}
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="">Select estimated volume</option>
                                            <option>1-5 patients/month</option>
                                            <option>6-10 patients/month</option>
                                            <option>11-20 patients/month</option>
                                            <option>20+ patients/month</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            {...register("message")}
                                            rows={3}
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                            placeholder="Tell us about your practice and how you'd like to collaborate"
                                        />
                                        <FieldError error={errors.message} />
                                    </div>

                                    {/* <div className="flex items-start gap-2 bg-muted p-4 rounded-lg">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            {...register("consent")}
                                            className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                                        />
                                        <label htmlFor="consent" className="text-sm text-muted-foreground font-normal">
                                            I consent to Oasis Health Services contacting me regarding my inquiry.
                                            I understand my information is protected under{" "}
                                            <a href="/hipaa" className="text-primary hover:underline">HIPAA guidelines</a>.
                                        </label>
                                    </div>
                                    <FieldError error={errors.consent} /> */}

                                    <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting Request...
                                            </>
                                        ) : (
                                            "Request Collaboration Agreement"
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ForProviders;