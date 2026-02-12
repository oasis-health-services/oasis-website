import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Clock,
    AlertTriangle,
    CheckCircle2,
    Info,
    ArrowRight,
    Brain,
    Heart,
    Zap,
    Moon,
    Shield,
    Stethoscope,
    FileQuestion,
    Phone
} from "lucide-react"

const medicationCategories = [
    {
        name: "Antidepressants",
        icon: Heart,
        color: "bg-rose-100 text-rose-700",
        description: "Medications that help relieve symptoms of depression, anxiety, and other conditions.",
        types: [
            {
                name: "SSRIs",
                fullName: "Selective Serotonin Reuptake Inhibitors",
                examples: "Prozac (fluoxetine), Zoloft (sertraline), Lexapro (escitalopram), Celexa (citalopram)",
                howItWorks: "Increases serotonin levels in the brain by blocking its reabsorption.",
                commonUses: ["Depression", "Anxiety disorders", "OCD", "PTSD", "Panic disorder"],
                timeToWork: "2-6 weeks for full effect",
                commonSideEffects: ["Nausea", "Headache", "Sleep changes", "Sexual side effects"],
            },
            {
                name: "SNRIs",
                fullName: "Serotonin-Norepinephrine Reuptake Inhibitors",
                examples: "Effexor (venlafaxine), Cymbalta (duloxetine), Pristiq (desvenlafaxine)",
                howItWorks: "Increases both serotonin and norepinephrine levels in the brain.",
                commonUses: ["Depression", "Anxiety", "Chronic pain", "Fibromyalgia"],
                timeToWork: "2-6 weeks for full effect",
                commonSideEffects: ["Nausea", "Dizziness", "Sweating", "Dry mouth", "Constipation"],
            },
            {
                name: "Atypical Antidepressants",
                fullName: "Other Antidepressant Classes",
                examples: "Wellbutrin (bupropion), Remeron (mirtazapine), Trintellix (vortioxetine)",
                howItWorks: "Work through various mechanisms different from SSRIs/SNRIs.",
                commonUses: ["Depression", "Smoking cessation (Wellbutrin)", "Anxiety"],
                timeToWork: "2-6 weeks for full effect",
                commonSideEffects: "Varies by medication - discuss with your provider",
            },
        ],
    },
    {
        name: "Anti-Anxiety Medications",
        icon: Shield,
        color: "bg-blue-100 text-blue-700",
        description: "Medications that help reduce anxiety symptoms and promote calm.",
        types: [
            {
                name: "Benzodiazepines",
                fullName: "Fast-Acting Anti-Anxiety Medications",
                examples: "Xanax (alprazolam), Ativan (lorazepam), Klonopin (clonazepam), Valium (diazepam)",
                howItWorks: "Enhances the effect of GABA, a calming neurotransmitter.",
                commonUses: ["Acute anxiety", "Panic attacks", "Insomnia", "Seizures"],
                timeToWork: "15-60 minutes",
                commonSideEffects: ["Drowsiness", "Dizziness", "Coordination problems", "Dependency risk"],
                importantNote: "Typically prescribed short-term due to dependency risk.",
            },
            {
                name: "Buspirone",
                fullName: "Non-Benzodiazepine Anxiolytic",
                examples: "BuSpar (buspirone)",
                howItWorks: "Affects serotonin and dopamine receptors.",
                commonUses: ["Generalized anxiety disorder"],
                timeToWork: "2-4 weeks for full effect",
                commonSideEffects: ["Dizziness", "Nausea", "Headache", "Nervousness"],
                importantNote: "Does not cause dependency; often preferred for long-term use.",
            },
            {
                name: "Hydroxyzine",
                fullName: "Antihistamine with Anxiolytic Properties",
                examples: "Vistaril, Atarax (hydroxyzine)",
                howItWorks: "Blocks histamine receptors, producing sedative and anxiolytic effects.",
                commonUses: ["Anxiety", "Insomnia", "Allergies", "Pre-operative sedation"],
                timeToWork: "15-30 minutes",
                commonSideEffects: ["Drowsiness", "Dry mouth", "Headache"],
                importantNote: "Non-habit forming alternative for anxiety relief.",
            },
        ],
    },
    {
        name: "Mood Stabilizers",
        icon: Zap,
        color: "bg-amber-100 text-amber-700",
        description: "Medications that help control mood swings in bipolar disorder and other conditions.",
        types: [
            {
                name: "Lithium",
                fullName: "Classic Mood Stabilizer",
                examples: "Lithobid, Eskalith (lithium carbonate)",
                howItWorks: "Exact mechanism unknown; affects multiple neurotransmitter systems.",
                commonUses: ["Bipolar disorder", "Treatment-resistant depression", "Suicide prevention"],
                timeToWork: "1-3 weeks",
                commonSideEffects: ["Thirst", "Frequent urination", "Tremor", "Weight gain"],
                importantNote: "Requires regular blood level monitoring.",
            },
            {
                name: "Anticonvulsants",
                fullName: "Mood-Stabilizing Anticonvulsants",
                examples: "Depakote (valproate), Lamictal (lamotrigine), Tegretol (carbamazepine)",
                howItWorks: "Stabilize electrical activity in the brain.",
                commonUses: ["Bipolar disorder", "Seizures", "Mood episodes"],
                timeToWork: "1-4 weeks",
                commonSideEffects: "Varies by medication - discuss with your provider",
                importantNote: "Some require regular blood monitoring.",
            },
            {
                name: "Atypical Antipsychotics",
                fullName: "Second-Generation Antipsychotics (as Mood Stabilizers)",
                examples: "Abilify (aripiprazole), Seroquel (quetiapine), Latuda (lurasidone)",
                howItWorks: "Affects dopamine and serotonin receptors.",
                commonUses: ["Bipolar disorder", "Schizophrenia", "Treatment-resistant depression"],
                timeToWork: "1-2 weeks for mood effects",
                commonSideEffects: ["Weight gain", "Drowsiness", "Metabolic changes"],
                importantNote: "Often used in combination with other mood stabilizers.",
            },
        ],
    },
    {
        name: "ADHD Medications",
        icon: Brain,
        color: "bg-purple-100 text-purple-700",
        description: "Medications that help improve focus, attention, and impulse control.",
        types: [
            {
                name: "Stimulants",
                fullName: "First-Line ADHD Medications",
                examples: "Adderall (amphetamine), Ritalin/Concerta (methylphenidate), Vyvanse (lisdexamfetamine)",
                howItWorks: "Increases dopamine and norepinephrine in the brain.",
                commonUses: ["ADHD", "Narcolepsy"],
                timeToWork: "30-60 minutes; noticeable improvement same day",
                commonSideEffects: ["Decreased appetite", "Sleep difficulties", "Increased heart rate", "Irritability"],
                importantNote: "Controlled substances; require regular follow-up.",
            },
            {
                name: "Non-Stimulants",
                fullName: "Alternative ADHD Medications",
                examples: "Strattera (atomoxetine), Intuniv (guanfacine), Kapvay (clonidine)",
                howItWorks: "Various mechanisms affecting norepinephrine and other systems.",
                commonUses: ["ADHD (especially when stimulants aren't suitable)"],
                timeToWork: "2-6 weeks for full effect",
                commonSideEffects: "Varies by medication - discuss with your provider",
                importantNote: "Good option for those who can't tolerate stimulants.",
            },
        ],
    },
    {
        name: "Sleep Medications",
        icon: Moon,
        color: "bg-indigo-100 text-indigo-700",
        description: "Medications that help with insomnia and sleep disorders.",
        types: [
            {
                name: "Non-Benzodiazepine Hypnotics",
                fullName: "Z-Drugs",
                examples: "Ambien (zolpidem), Lunesta (eszopiclone), Sonata (zaleplon)",
                howItWorks: "Enhances GABA activity to promote sleep.",
                commonUses: ["Insomnia"],
                timeToWork: "15-30 minutes",
                commonSideEffects: ["Next-day drowsiness", "Dizziness", "Complex sleep behaviors"],
                importantNote: "Typically prescribed short-term; can cause dependence.",
            },
            {
                name: "Melatonin Receptor Agonists",
                fullName: "Melatonin-Based Sleep Aids",
                examples: "Rozerem (ramelteon)",
                howItWorks: "Activates melatonin receptors to regulate sleep-wake cycle.",
                commonUses: ["Insomnia", "Circadian rhythm disorders"],
                timeToWork: "30 minutes",
                commonSideEffects: ["Dizziness", "Fatigue", "Nausea"],
                importantNote: "Non-habit forming; good for sleep onset problems.",
            },
            {
                name: "Orexin Receptor Antagonists",
                fullName: "Newer Sleep Medications",
                examples: "Belsomra (suvorexant), Dayvigo (lemborexant)",
                howItWorks: "Blocks orexin, a neurotransmitter that promotes wakefulness.",
                commonUses: ["Insomnia"],
                timeToWork: "30 minutes",
                commonSideEffects: ["Next-day drowsiness", "Sleep paralysis", "Abnormal dreams"],
                importantNote: "Works differently than older sleep medications.",
            },
        ],
    },
]

const medicationTips = [
    {
        title: "Take as Prescribed",
        description: "Follow your provider's instructions exactly. Don't change doses or stop without consulting them first.",
        icon: CheckCircle2,
    },
    {
        title: "Be Patient",
        description: "Many psychiatric medications take weeks to reach full effectiveness. Give them time to work.",
        icon: Clock,
    },
    {
        title: "Report Side Effects",
        description: "Tell your provider about any side effects, even if they seem minor. There may be ways to manage them.",
        icon: Stethoscope,
    },
    {
        title: "Don't Mix Without Asking",
        description: "Always inform your provider about all medications, supplements, and substances you use.",
        icon: AlertTriangle,
    },
    {
        title: "Keep Follow-up Appointments",
        description: "Regular check-ins help your provider monitor your progress and adjust treatment as needed.",
        icon: Phone,
    },
    {
        title: "Never Share Medications",
        description: "Psychiatric medications are prescribed specifically for you based on your unique needs.",
        icon: Shield,
    },
]

const faqs = [
    {
        question: "How long will I need to take psychiatric medication?",
        answer: "Treatment duration varies by condition and individual response. Some conditions require long-term treatment, while others may need medication only temporarily. Your provider will discuss a treatment plan tailored to your needs and will regularly reassess whether medication is still necessary.",
    },
    {
        question: "What if I miss a dose?",
        answer: "If you miss a dose, take it as soon as you remember unless it's close to your next scheduled dose. Never take a double dose to make up for a missed one. If you're unsure what to do, contact your provider or pharmacist for guidance specific to your medication.",
    },
    {
        question: "Can I drink alcohol while taking psychiatric medication?",
        answer: "Most psychiatric medications interact negatively with alcohol, which can reduce effectiveness, increase side effects, or cause dangerous reactions. It's generally best to avoid alcohol or discuss safe limits with your provider.",
    },
    {
        question: "What if I want to stop taking my medication?",
        answer: "Never stop psychiatric medication abruptly without consulting your provider. Many medications require gradual tapering to avoid withdrawal symptoms or relapse. If you want to stop, work with your provider to create a safe discontinuation plan.",
    },
    {
        question: "Are psychiatric medications addictive?",
        answer: "Most psychiatric medications (antidepressants, mood stabilizers, etc.) are not addictive, though stopping abruptly can cause withdrawal symptoms. Some medications like benzodiazepines and stimulants have higher dependency potential and are prescribed with appropriate precautions.",
    },
    {
        question: "Will psychiatric medication change my personality?",
        answer: "Psychiatric medications are designed to relieve symptoms, not change who you are. Many patients report feeling 'more like themselves' when their symptoms are managed. If you feel your medication is dulling your personality, discuss this with your provider.",
    },
    {
        question: "Can I take psychiatric medication while pregnant or breastfeeding?",
        answer: "Some psychiatric medications are safer than others during pregnancy and breastfeeding. If you're pregnant, planning to become pregnant, or breastfeeding, discuss your options with your provider. Untreated mental illness also carries risks, so the decision involves weighing benefits and risks.",
    },
    {
        question: "Why do I need blood tests for some medications?",
        answer: "Some medications (like lithium, certain anticonvulsants) require regular blood monitoring to ensure they're at safe and effective levels. These tests help your provider adjust dosing and catch any potential issues early.",
    },
]

export default function Medications() {

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4 border-primary">Medication Information</Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            Understanding Your Medications
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Educational information about psychiatric medications to help you understand your
                            treatment options and what to expect.
                        </p>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="border-b border-border">
                <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                    <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm text-amber-800">
                                <strong>Important:</strong> This information is for educational purposes only and is not a
                                substitute for professional medical advice. Always consult your healthcare provider before
                                starting, stopping, or changing any medication. Individual responses to medications vary.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Medication Categories */}
            <section className="py-16 lg:py-24" aria-labelledby="categories-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 id="categories-heading" className="sr-only">Medication Categories</h2>

                    <div className="space-y-16">
                        {medicationCategories.map((category) => (
                            <div key={category.name} id={category.name.toLowerCase().replace(/\s+/g, "-")}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center`}>
                                        <category.icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-semibold text-foreground">{category.name}</h3>
                                        <p className="text-muted-foreground">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-1 gap-6">
                                    {category.types.map((type) => (
                                        <Card key={type.name}>
                                            <CardHeader>
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <CardTitle className="text-lg">{type.name}</CardTitle>
                                                        <p className="text-sm text-muted-foreground">{type.fullName}</p>
                                                    </div>
                                                    <Badge variant="secondary" className="shrink-0">
                                                        <Clock className="h-3 w-3 mr-1" />
                                                        {type.timeToWork}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-medium text-foreground mb-1">Common Examples</h4>
                                                            <p className="text-sm text-muted-foreground">{type.examples}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-medium text-foreground mb-1">How It Works</h4>
                                                            <p className="text-sm text-muted-foreground">{type.howItWorks}</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-medium text-foreground mb-2">Common Uses</h4>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {type.commonUses.map((use) => (
                                                                    <Badge key={use} variant="outline" className="text-xs">{use}</Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-medium text-foreground mb-1">Possible Side Effects</h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                {Array.isArray(type.commonSideEffects)
                                                                    ? type.commonSideEffects.join(", ")
                                                                    : type.commonSideEffects
                                                                }
                                                            </p>
                                                        </div>
                                                        {type.importantNote && (
                                                            <div className="bg-muted rounded-lg p-3">
                                                                <div className="flex items-start gap-2">
                                                                    <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                                    <p className="text-sm text-muted-foreground">{type.importantNote}</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medication Tips */}
            <section className="py-16 lg:py-24 bg-primary" aria-labelledby="tips-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="tips-heading" className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
                            Tips for Medication Success
                        </h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Get the most out of your treatment with these best practices.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {medicationTips.map((tip) => (
                            <div key={tip.title} className="bg-primary-foreground/10 rounded-xl p-6">
                                <tip.icon className="h-8 w-8 text-primary-foreground/80 mb-4" />
                                <h3 className="font-semibold text-primary-foreground mb-2">{tip.title}</h3>
                                <p className="text-sm text-primary-foreground/70 leading-relaxed">{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 lg:py-24" aria-labelledby="faq-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div>
                            <h2 id="faq-heading" className="font-serif text-3xl font-semibold text-foreground mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Common questions about psychiatric medications and treatment.
                            </p>
                            <div className="bg-muted rounded-xl p-6">
                                <FileQuestion className="h-8 w-8 text-primary mb-3" />
                                <h3 className="font-semibold text-foreground mb-2">Have More Questions?</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Your provider is your best resource for medication questions specific to your treatment.
                                </p>
                                <Button variant="outline" asChild className="w-full bg-transparent border-primary text-primary">
                                    <a href="/contact">Contact Us</a>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`faq-${index}`}>
                                        <AccordionTrigger className="text-left text-foreground hover:text-primary">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pharmacogenomics CTA */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="pgx-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Card className="overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                                <Badge className="w-fit mb-4">Advanced Treatment</Badge>
                                <h2 id="pgx-heading" className="font-serif text-3xl font-semibold text-foreground mb-4">
                                    Pharmacogenomic Testing
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Not sure which medication is right for you? Pharmacogenomic testing analyzes how your
                                    genes affect your response to medications, helping your provider choose the most
                                    effective treatment with fewer side effects.
                                </p>
                                <Button asChild className="w-fit">
                                    <a href="/services/pharmacogenomic-testing">
                                        Learn About PGx Testing
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                            <div className="bg-secondary p-8 lg:p-12 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Brain className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">Personalized Medicine</h3>
                                    <p className="text-sm text-muted-foreground max-w-xs">
                                        Find the right medication faster with genetic insights tailored to your unique biology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                        Ready to Discuss Your Treatment Options?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Our experienced providers can help you understand which medications might be right
                        for you and answer all your questions about treatment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <a href="/patients">
                                Schedule Appointment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent border-primary text-primary">
                            <a href="/about/our-team">Meet Our Providers</a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}