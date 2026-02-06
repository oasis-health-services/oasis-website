import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Search,
    Calendar,
    CreditCard,
    Shield,
    Video,
    Pill,
    Clock,
    FileText,
    Phone,
    HelpCircle,
    MessageCircle,
    ArrowRight,
} from "lucide-react"

const faqCategories = [
    { id: "appointments", label: "Appointments", icon: Calendar, color: "bg-blue-100 text-blue-700" },
    { id: "insurance", label: "Insurance & Billing", icon: CreditCard, color: "bg-green-100 text-green-700" },
    { id: "telehealth", label: "Telehealth", icon: Video, color: "bg-purple-100 text-purple-700" },
    { id: "medication", label: "Medications", icon: Pill, color: "bg-rose-100 text-rose-700" },
    { id: "services", label: "Services", icon: Shield, color: "bg-amber-100 text-amber-700" },
    { id: "general", label: "General", icon: HelpCircle, color: "bg-teal-100 text-teal-700" },
]

const faqData = {
    appointments: [
        {
            question: "How do I schedule my first appointment?",
            answer: "You can schedule your first appointment by calling our office at (509) 381-6035, using our online scheduling system through the Patient Portal, or submitting a request through our website's contact form. Our team will reach out to confirm your appointment and send you intake paperwork to complete before your visit."
        },
        {
            question: "What should I bring to my first appointment?",
            answer: "Please bring a valid photo ID, your insurance card, a list of current medications (including dosages), any relevant medical records or previous psychiatric evaluations, and a list of questions or concerns you'd like to discuss. If you have completed your intake forms online, you don't need to print them."
        },
        {
            question: "How long is the initial psychiatric evaluation?",
            answer: "Initial psychiatric evaluations typically last 60-90 minutes. This comprehensive assessment allows your provider to understand your history, symptoms, and treatment goals. Follow-up appointments are usually 20-30 minutes for medication management and 45-60 minutes for therapy sessions."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We require at least 24 hours notice for appointment cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee of $75-150 depending on the appointment type. We understand emergencies happen, so please contact us as soon as possible if you need to cancel."
        },
        {
            question: "Do you offer same-day or urgent appointments?",
            answer: "We reserve time slots for urgent psychiatric needs when possible. If you are experiencing a mental health crisis that requires immediate attention, please call our office. For true emergencies, please call 988, 911, or go to your nearest emergency room."
        },
        {
            question: "Can I request a specific provider?",
            answer: "Yes, you can request a specific provider when scheduling. We will do our best to accommodate your preference, though availability may vary. If your preferred provider is unavailable, we can place you on a waitlist or suggest an alternative."
        },
    ],
    insurance: [
        {
            question: "What insurance plans do you accept?",
            answer: "We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, Humana, and Medicare. We also accept some Medicaid plans. Please contact our office to verify your specific plan's coverage before your appointment."
        },
        {
            question: "How do I verify my insurance coverage?",
            answer: "Contact your insurance company directly to verify mental health benefits, or call our office and our billing team can help verify your coverage. You'll want to confirm your copay amount, deductible status, and whether prior authorization is required."
        },
        {
            question: "Do you offer out-of-network benefits?",
            answer: "If we are out-of-network with your insurance, we can provide a superbill (detailed receipt) that you can submit to your insurance for potential reimbursement. Out-of-network coverage varies by plan, so check with your insurance about your out-of-network mental health benefits."
        },
        {
            question: "What are your self-pay rates?",
            answer: "For patients without insurance or who prefer self-pay, our rates are: Initial Psychiatric Evaluation: $250-350, Follow-up Medication Management: $125-175, Individual Therapy (50 min): $150-200. We offer sliding scale fees based on financial need. Payment plans may be available."
        },
        {
            question: "When is payment due?",
            answer: "Copays and self-pay fees are due at the time of service. We accept cash, check, and all major credit cards. For insurance patients, you will receive a statement for any balance after your insurance processes the claim."
        },
        {
            question: "What happens if my insurance claim is denied?",
            answer: "If your claim is denied, our billing team will work with you to understand why and may assist with appeals when appropriate. You will be responsible for any balances not covered by insurance. We recommend verifying coverage before your appointment to avoid surprises."
        },
    ],
    telehealth: [
        {
            question: "How does telehealth work?",
            answer: "Telehealth appointments are conducted via secure video conferencing. Before your appointment, you'll receive a link to join the video call. You can connect from any device with a camera and microphone—computer, tablet, or smartphone. All you need is a private space and stable internet connection."
        },
        {
            question: "Is telehealth as effective as in-person visits?",
            answer: "Research shows that telehealth psychiatric care is equally effective as in-person care for most conditions. Many patients find telehealth more convenient and comfortable, which can improve engagement with treatment. Some situations may still require in-person evaluation."
        },
        {
            question: "What if I have technical difficulties during my appointment?",
            answer: "If you experience technical issues, first try refreshing your browser or rejoining the call. If problems persist, call our office immediately at (509) 381-6035 and we can troubleshoot or switch to a phone call if needed. We won't count technical difficulties against your appointment time."
        },
        {
            question: "Do I need to download special software for telehealth?",
            answer: "No special software download is required. Our telehealth platform works directly in your web browser. We recommend using Chrome or Safari for the best experience. You'll receive a link via email before your appointment that you simply click to join."
        },
        {
            question: "Can I get prescriptions through telehealth?",
            answer: "Yes, most psychiatric medications can be prescribed via telehealth. Your provider will send prescriptions electronically to your preferred pharmacy. Note that some controlled substances have specific regulations that may require periodic in-person visits depending on your state's laws."
        },
        {
            question: "What states can you provide telehealth services in?",
            answer: "Our providers are licensed to practice in Georgia and can provide telehealth services to patients physically located in Georgia during the appointment. If you travel out of state, please let us know as it may affect your ability to have telehealth appointments."
        },
    ],
    medication: [
        {
            question: "How do I request a medication refill?",
            answer: "Request refills through the Patient Portal, by calling our office at least 5-7 business days before you run out, or by having your pharmacy send a refill request. Please do not wait until you are completely out of medication, as processing takes time."
        },
        {
            question: "What if I'm experiencing side effects from my medication?",
            answer: "Contact our office to report any side effects. For mild side effects, we can often discuss them at your next appointment. For severe or concerning side effects, call us immediately. Never stop a psychiatric medication abruptly without consulting your provider, as this can cause withdrawal effects."
        },
        {
            question: "How long does it take for psychiatric medications to work?",
            answer: "This varies by medication type. Antidepressants typically take 4-6 weeks to reach full effectiveness. Anti-anxiety medications may work faster. Stimulants for ADHD usually work the same day. Your provider will discuss expected timelines and what to watch for."
        },
        {
            question: "Can I take my psychiatric medication with other medications?",
            answer: "It's crucial to tell your provider about ALL medications, supplements, and herbal products you take. Some combinations can cause dangerous interactions. Your provider and pharmacist will check for interactions, but always inform them of any changes to your medication regimen."
        },
        {
            question: "What if my pharmacy says prior authorization is needed?",
            answer: "Some insurance plans require prior authorization for certain medications. Our office will submit the prior authorization request, which typically takes 2-5 business days. In the meantime, your provider may prescribe an alternative or a short-term supply."
        },
        {
            question: "Do you prescribe controlled substances?",
            answer: "Yes, we prescribe controlled substances when clinically appropriate. These medications require more frequent monitoring and may have specific requirements like in-person appointments, drug screening, or controlled substance agreements. We follow all state and federal regulations."
        },
    ],
    services: [
        {
            question: "What conditions do you treat?",
            answer: "We treat a wide range of mental health conditions including anxiety disorders, depression, bipolar disorder, ADHD, PTSD, OCD, insomnia, and more. We provide care for adolescents (13+) and adults. If you're unsure whether we can help with your specific concern, please contact us to discuss."
        },
        {
            question: "Do you provide therapy or just medication management?",
            answer: "We offer both medication management and therapy services. Some patients benefit from medication alone, some from therapy alone, and many find the combination most effective. Your provider will recommend the best approach for your needs."
        },
        {
            question: "Do you treat children?",
            answer: "We currently see patients ages 13 and older. For younger children, we can provide referrals to trusted child psychiatry colleagues in the area who specialize in pediatric mental health care."
        },
        {
            question: "What types of therapy do you offer?",
            answer: "Our therapists are trained in multiple evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), EMDR for trauma, motivational interviewing, and supportive psychotherapy. Treatment is tailored to your specific needs and goals."
        },
        {
            question: "Do you offer psychological testing or evaluations?",
            answer: "We offer psychiatric diagnostic evaluations. For comprehensive psychological testing (IQ testing, neuropsychological evaluations, disability evaluations), we can provide referrals to psychologists who specialize in testing services."
        },
        {
            question: "Can you provide documentation for disability, FMLA, or accommodations?",
            answer: "Yes, we can provide documentation for established patients after appropriate evaluation. This may include letters for workplace accommodations, FMLA paperwork, or disability documentation. There may be additional fees for complex documentation requests."
        },
    ],
    general: [
        {
            question: "Where are you located?",
            answer: "Our office is located at 11285 Elkins Road, Unit J6, Roswell, GA 30076. We also offer telehealth appointments for patients throughout Georgia. The office is easily accessible from Roswell, Alpharetta, and surrounding North Metro Atlanta areas."
        },
        {
            question: "What are your office hours?",
            answer: "Our office is open Monday through Friday, 8:00 AM to 5:30 PM. We offer some early morning and evening telehealth appointments to accommodate work schedules. We are closed on weekends and major holidays."
        },
        {
            question: "How do I access the Patient Portal?",
            answer: "You'll receive a Patient Portal invitation email after scheduling your first appointment. The portal allows you to complete intake forms, view appointments, request refills, message your provider, and access health records. If you need help accessing the portal, contact our office."
        },
        {
            question: "Is my information kept confidential?",
            answer: "Absolutely. We follow all HIPAA regulations to protect your privacy. Your health information is never shared without your written consent, except in limited circumstances required by law (such as immediate safety concerns). You can review our full Notice of Privacy Practices on our website."
        },
        {
            question: "What if I have a concern or complaint?",
            answer: "We value your feedback and want to address any concerns. Please contact our office manager directly to discuss any issues. We take all complaints seriously and work to resolve them promptly. You also have the right to file complaints with appropriate regulatory bodies."
        },
        {
            question: "Do you offer any community resources or support groups?",
            answer: "While we don't run support groups directly, we maintain a list of local and online support resources including NAMI Georgia, local therapy groups, and condition-specific support communities. Ask your provider or check our Resources page for recommendations."
        },
    ],
}

const quickAnswers = [
    { question: "Phone Number", answer: "(509) 381-6035", icon: Phone },
    { question: "Office Hours", answer: "Mon-Fri, 8AM-5:30PM", icon: Clock },
    { question: "Fax Number", answer: "(209) 290-3019", icon: FileText },
    { question: "New Patient Wait", answer: "Usually 1-2 weeks", icon: Calendar },
]

export default function FAQ() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">FAQ</Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            Frequently Asked Questions
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Find answers to common questions about our services, appointments, insurance,
                            telehealth, and more. Can't find what you're looking for? Contact us directly.
                        </p>
                    </div>

                    {/* Search */}
                    <div className="mt-10 max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search for answers..."
                                className="pl-12 pr-4 h-12 text-base bg-card"
                            />
                        </div>
                    </div>

                    {/* Quick Answers */}
                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {quickAnswers.map((item) => (
                            <div key={item.question} className="bg-card rounded-lg p-4 text-center">
                                <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                                <p className="text-xs text-muted-foreground">{item.question}</p>
                                <p className="font-semibold text-foreground">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="py-8 border-b border-border sticky top-0 bg-background z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {faqCategories.map((category) => (
                            <Button
                                key={category.id}
                                variant="outline"
                                size="sm"
                                asChild
                                className="bg-transparent"
                            >
                                <a href={`#${category.id}`}>
                                    <category.icon className="h-4 w-4 mr-2" />
                                    {category.label}
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <div className="py-16 lg:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-16">
                    {faqCategories.map((category) => (
                        <section key={category.id} id={category.id} className="scroll-mt-24">
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                                    <category.icon className="h-5 w-5" />
                                </div>
                                <h2 className="font-serif text-2xl font-semibold text-foreground">
                                    {category.label}
                                </h2>
                            </div>

                            <Accordion type="single" collapsible className="space-y-3">
                                {faqData[category.id].map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`${category.id}-${index}`}
                                        className="bg-card rounded-lg border px-6"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-4">
                                            <span className="font-medium text-foreground pr-4">{faq.question}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    ))}
                </div>
            </div>

            {/* Still Have Questions */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="contact-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 id="contact-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                                Still Have Questions?
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                Our team is here to help. If you couldn't find the answer you were looking for,
                                don't hesitate to reach out. We're happy to assist with any questions about our
                                services, scheduling, or your care.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild>
                                    <a href="/contact">
                                        <MessageCircle className="h-5 w-5 mr-2" />
                                        Contact Us
                                    </a>
                                </Button>
                                <Button size="lg" variant="outline" asChild className="bg-transparent">
                                    <a href="tel:+15093816035">
                                        <Phone className="h-5 w-5 mr-2" />
                                        Call (509) 381-6035
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Card>
                                <CardHeader>
                                    <Calendar className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle className="text-lg">Schedule a Visit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Ready to start your mental health journey? Book your first appointment.
                                    </p>
                                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                        <a href="/patients">
                                            Book Appointment
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Video className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle className="text-lg">Telehealth Guide</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        New to virtual appointments? Learn how to prepare for telehealth.
                                    </p>
                                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                        <a href="/resources/telehealth">
                                            View Guide
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Shield className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle className="text-lg">Insurance Help</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Need help verifying your insurance benefits? We can assist.
                                    </p>
                                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                        <a href="tel:+15093816035">
                                            Call for Help
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <FileText className="h-8 w-8 text-primary mb-2" />
                                    <CardTitle className="text-lg">Patient Forms</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Access and complete intake forms before your first visit.
                                    </p>
                                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                                        <a href="/patients#forms">
                                            View Forms
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}