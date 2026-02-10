import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    Heart,
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    AlertTriangle,
    Phone,
    Calendar,
    Users,
    BookOpen,
    RotateCcw,
    Info
} from "lucide-react"

const questions = [
    {
        id: 1,
        question: "How long ago did you experience your loss?",
        options: [
            { value: 1, label: "Within the past month" },
            { value: 2, label: "1-6 months ago" },
            { value: 3, label: "6-12 months ago" },
            { value: 4, label: "More than 1 year ago" },
        ],
    },
    {
        id: 2,
        question: "How often do you find yourself thinking about your loved one in ways that feel intrusive or distressing?",
        options: [
            { value: 4, label: "Almost constantly - it's hard to focus on anything else" },
            { value: 3, label: "Very often - multiple times every day" },
            { value: 2, label: "Sometimes - a few times a week" },
            { value: 1, label: "Occasionally - when something reminds me of them" },
        ],
    },
    {
        id: 3,
        question: "How difficult is it for you to accept that your loved one is gone?",
        options: [
            { value: 4, label: "Extremely difficult - I can't believe it's real" },
            { value: 3, label: "Very difficult - I struggle with it daily" },
            { value: 2, label: "Somewhat difficult - I'm working through it" },
            { value: 1, label: "I've come to accept it, though it still hurts" },
        ],
    },
    {
        id: 4,
        question: "How much has your grief affected your ability to carry out daily responsibilities (work, school, household tasks)?",
        options: [
            { value: 4, label: "Severely - I can barely function" },
            { value: 3, label: "Significantly - I struggle most days" },
            { value: 2, label: "Moderately - Some tasks are harder than others" },
            { value: 1, label: "Minimally - I manage most responsibilities" },
        ],
    },
    {
        id: 5,
        question: "Do you feel emotionally numb or disconnected from others since your loss?",
        options: [
            { value: 4, label: "Yes, almost all the time" },
            { value: 3, label: "Often - more than I'd like" },
            { value: 2, label: "Sometimes - it comes and goes" },
            { value: 1, label: "Rarely - I still feel connected" },
        ],
    },
    {
        id: 6,
        question: "Have you been avoiding people, places, or activities that remind you of your loved one?",
        options: [
            { value: 4, label: "Yes, I avoid almost everything connected to them" },
            { value: 3, label: "Yes, I avoid many reminders" },
            { value: 2, label: "Sometimes, when it feels too painful" },
            { value: 1, label: "No, I try to embrace memories" },
        ],
    },
    {
        id: 7,
        question: "Do you feel like life has no meaning or purpose without your loved one?",
        options: [
            { value: 4, label: "Yes, I feel life is meaningless" },
            { value: 3, label: "Often - I struggle to find purpose" },
            { value: 2, label: "Sometimes - but I'm working on it" },
            { value: 1, label: "No, I'm finding new meaning" },
        ],
    },
    {
        id: 8,
        question: "How often do you experience intense longing or yearning for your loved one?",
        options: [
            { value: 4, label: "Constantly - it's overwhelming" },
            { value: 3, label: "Very often - daily" },
            { value: 2, label: "Sometimes - weekly" },
            { value: 1, label: "Occasionally - it comes in waves" },
        ],
    },
    {
        id: 9,
        question: "Have you had thoughts of wanting to die or join your loved one?",
        options: [
            { value: 4, label: "Yes, frequently" },
            { value: 3, label: "Yes, sometimes" },
            { value: 2, label: "Once or twice, but they passed" },
            { value: 1, label: "No" },
        ],
        isCritical: true,
    },
    {
        id: 10,
        question: "Do you have a support system (friends, family, community) that you can rely on?",
        options: [
            { value: 4, label: "No, I feel completely alone" },
            { value: 3, label: "Very little support available" },
            { value: 2, label: "Some support, but I wish I had more" },
            { value: 1, label: "Yes, I have people I can count on" },
        ],
    },
]

// interface ResultLevel {
//     level: "mild" | "moderate" | "significant" | "severe"
//     title: string
//     description: string
//     color: string
//     bgColor: string
//     recommendations: string[]
//     resources: { title: string; href: string; description: string }[]
// }

const resultLevels = {
    mild: {
        level: "mild",
        title: "Normal Grief Response",
        description: "Your responses suggest you are experiencing a normal grief response. While grief is never easy, you appear to be coping in healthy ways. The pain you feel is a natural part of the healing process.",
        color: "text-green-700",
        bgColor: "bg-green-50 border-green-200",
        recommendations: [
            "Continue reaching out to your support network",
            "Allow yourself to feel and express your emotions",
            "Maintain healthy routines including sleep, nutrition, and exercise",
            "Consider joining a grief support group for additional community",
            "Be patient with yourself - healing takes time",
        ],
        resources: [
            { title: "GriefShare Support Groups", href: "/resources/support-groups#local-groups", description: "Find local grief support communities" },
            { title: "Self-Care Toolkit", href: "/resources/self-care", description: "Tools for emotional wellness" },
            { title: "Crisis Resources", href: "/resources/crisis", description: "24/7 support when you need it" },
        ],
    },
    moderate: {
        level: "moderate",
        title: "Moderate Grief Symptoms",
        description: "Your responses indicate you may be experiencing some challenges with your grief. While this is not uncommon, you might benefit from additional support to help you process your loss.",
        color: "text-amber-700",
        bgColor: "bg-amber-50 border-amber-200",
        recommendations: [
            "Consider speaking with a grief counselor or therapist",
            "Join a structured grief support group like GriefShare",
            "Practice self-compassion and avoid isolating yourself",
            "Set small, achievable goals for each day",
            "Express your grief through writing, art, or talking",
        ],
        resources: [
            { title: "Schedule a Consultation", href: "/contact", description: "Speak with one of our providers" },
            { title: "Grief Support Groups", href: "/resources/support-groups", description: "Connect with others who understand" },
            { title: "Our Therapy Services", href: "/services/therapy", description: "Professional grief counseling" },
        ],
    },
    significant: {
        level: "significant",
        title: "Significant Grief Impact",
        description: "Your responses suggest that grief is significantly affecting your daily life and wellbeing. This may indicate complicated grief, which is treatable with proper support. We strongly encourage you to seek professional help.",
        color: "text-orange-700",
        bgColor: "bg-orange-50 border-orange-200",
        recommendations: [
            "Schedule an appointment with a mental health professional soon",
            "Consider grief-focused therapy (e.g., Complicated Grief Treatment)",
            "Don't try to go through this alone - reach out for help",
            "If you're struggling with daily tasks, ask for help from others",
            "Prioritize basic self-care even when it feels difficult",
        ],
        resources: [
            { title: "Schedule Now", href: "/contact", description: "Book an appointment with our team" },
            { title: "Meet Our Providers", href: "/providers", description: "Find a provider who specializes in grief" },
            { title: "Crisis Resources", href: "/resources/crisis", description: "Immediate support available 24/7" },
        ],
    },
    severe: {
        level: "severe",
        title: "Urgent Support Recommended",
        description: "Your responses indicate you may be experiencing severe grief symptoms that require immediate professional attention. Your wellbeing is important, and effective treatments are available. Please reach out for help today.",
        color: "text-red-700",
        bgColor: "bg-red-50 border-red-200",
        recommendations: [
            "Contact a mental health professional or crisis line immediately",
            "If you're having thoughts of self-harm, call 988 (Suicide & Crisis Lifeline)",
            "Reach out to a trusted person and let them know how you're feeling",
            "Consider an urgent care mental health appointment",
            "Remember: asking for help is a sign of strength, not weakness",
        ],
        resources: [
            { title: "Call 988", href: "tel:988", description: "Suicide & Crisis Lifeline - Available 24/7" },
            { title: "Contact Us Now", href: "/contact", description: "Our team can help you get urgent care" },
            { title: "Crisis Resources", href: "/resources/crisis", description: "Emergency mental health support" },
        ],
    },
}

function getResultLevel(score, hasCriticalFlag) {
    if (hasCriticalFlag) return resultLevels.severe
    if (score <= 15) return resultLevels.mild
    if (score <= 25) return resultLevels.moderate
    if (score <= 32) return resultLevels.significant
    return resultLevels.severe
}

export default function GriefScreener() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [hasCriticalFlag, setHasCriticalFlag] = useState(false)

    const progress = ((currentQuestion + 1) / questions.length) * 100
    const currentQ = questions[currentQuestion]
    const isAnswered = answers[currentQ.id] !== undefined

    const handleAnswer = (value) => {
        setAnswers((prev) => ({ ...prev, [currentQ.id]: value }))

        // Check for critical flag (question 9 about thoughts of death)
        if (currentQ.isCritical && value >= 3) {
            setHasCriticalFlag(true)
        }
    }

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        } else {
            setShowResults(true)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1)
        }
    }

    const handleRestart = () => {
        setCurrentQuestion(0)
        setAnswers({})
        setShowResults(false)
        setHasCriticalFlag(false)
    }

    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const result = getResultLevel(totalScore, hasCriticalFlag)

    return (
        <>

            {/* Hero Section */}
            <section className="bg-secondary py-12 lg:py-16">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
                    <Badge variant="outline" className="mb-4">Self-Assessment Tool</Badge>
                    <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
                        Grief Support Screener
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        This brief assessment can help you understand your grief experience and find appropriate resources.
                        Your answers are private and not stored.
                    </p>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-amber-50 border-b border-amber-200 py-4">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800">
                            <strong>Important:</strong> This screener is not a diagnostic tool and does not replace professional evaluation.
                            It is designed to help you reflect on your experience and guide you toward appropriate support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    {!showResults ? (
                        <Card className="shadow-lg">
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="secondary">
                                        Question {currentQuestion + 1} of {questions.length}
                                    </Badge>
                                    {currentQ.isCritical && (
                                        <Badge variant="outline" className="text-amber-600 border-amber-300">
                                            <AlertTriangle className="h-3 w-3 mr-1" />
                                            Sensitive
                                        </Badge>
                                    )}
                                </div>
                                <Progress value={progress} className="h-2 mb-6" />
                                <CardTitle className="text-xl leading-relaxed">
                                    {currentQ.question}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {currentQ.options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleAnswer(option.value)}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${answers[currentQ.id] === option.value
                                                ? "border-primary bg-primary/5"
                                                : "border-border hover:border-primary/50 hover:bg-muted/50"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[currentQ.id] === option.value
                                                        ? "border-primary bg-primary"
                                                        : "border-muted-foreground"
                                                    }`}
                                            >
                                                {answers[currentQ.id] === option.value && (
                                                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                                                )}
                                            </div>
                                            <span className="text-foreground">{option.label}</span>
                                        </div>
                                    </button>
                                ))}

                                <div className="flex items-center justify-between pt-6 border-t mt-6">
                                    <Button
                                        variant="ghost"
                                        onClick={handlePrevious}
                                        disabled={currentQuestion === 0}
                                    >
                                        <ArrowLeft className="h-4 w-4 mr-2" />
                                        Previous
                                    </Button>
                                    <Button onClick={handleNext} disabled={!isAnswered}>
                                        {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                                        <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-8">
                            {/* Crisis Alert */}
                            {(result.level === "severe" || hasCriticalFlag) && (
                                <Card className="bg-red-50 border-red-200">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                                <Phone className="h-6 w-6 text-red-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-red-800 mb-2">
                                                    If you are in crisis, please reach out now
                                                </h3>
                                                <p className="text-red-700 text-sm mb-4">
                                                    If you are having thoughts of harming yourself, please call or text 988 immediately
                                                    to speak with a trained crisis counselor.
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    <Button asChild className="bg-red-600 hover:bg-red-700">
                                                        <a href="tel:988">
                                                            <Phone className="h-4 w-4 mr-2" />
                                                            Call 988 Now
                                                        </a>
                                                    </Button>
                                                    <Button variant="outline" asChild className="border-red-300 text-red-700 hover:bg-red-100 bg-transparent">
                                                        <a href="sms:988">Text 988</a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Results Card */}
                            <Card className={`border-2 ${result.bgColor}`}>
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-10 h-10 rounded-full ${result.level === "mild" ? "bg-green-100" : result.level === "moderate" ? "bg-amber-100" : result.level === "significant" ? "bg-orange-100" : "bg-red-100"} flex items-center justify-center`}>
                                            <Heart className={`h-5 w-5 ${result.color}`} />
                                        </div>
                                        <CardTitle className={result.color}>{result.title}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base text-foreground/80">
                                        {result.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Recommendations */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3">Recommendations</h4>
                                        <ul className="space-y-2">
                                            {result.recommendations.map((rec, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{rec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Resources */}
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-3">Helpful Resources</h4>
                                        <div className="grid gap-3">
                                            {result.resources.map((resource) => (
                                                <a
                                                    key={resource.title}
                                                    href={resource.href}
                                                    className="flex items-center justify-between p-4 rounded-lg bg-background border hover:border-primary transition-colors group"
                                                >
                                                    <div>
                                                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                                            {resource.title}
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                                                    </div>
                                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Next Steps */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">What Would You Like to Do Next?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid sm:grid-cols-3 gap-4">
                                        <Button asChild className="h-auto py-4 flex-col gap-2">
                                            <a href="/contact">
                                                <Calendar className="h-5 w-5" />
                                                <span>Schedule Appointment</span>
                                            </a>
                                        </Button>
                                        <Button variant="outline" asChild className="h-auto py-4 flex-col gap-2 bg-transparent">
                                            <a href="/resources/support-groups">
                                                <Users className="h-5 w-5" />
                                                <span>Find Support Groups</span>
                                            </a>
                                        </Button>
                                        <Button variant="outline" asChild className="h-auto py-4 flex-col gap-2 bg-transparent">
                                            <a href="/resources/self-care">
                                                <BookOpen className="h-5 w-5" />
                                                <span>Self-Care Tools</span>
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="mt-6 pt-6 border-t text-center">
                                        <Button variant="ghost" onClick={handleRestart}>
                                            <RotateCcw className="h-4 w-4 mr-2" />
                                            Take Screener Again
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Disclaimer */}
                            <div className="text-center text-sm text-muted-foreground bg-muted rounded-lg p-4">
                                <p>
                                    This screener is for informational purposes only and is not a substitute for professional
                                    diagnosis or treatment. If you are concerned about your mental health, please consult with
                                    a qualified healthcare provider.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}