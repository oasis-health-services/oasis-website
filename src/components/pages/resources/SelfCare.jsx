import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Heart,
    Brain,
    Moon,
    Sun,
    Dumbbell,
    Utensils,
    Users,
    Pencil,
    Music,
    Leaf,
    Clock,
    CheckCircle2,
    Download,
    ArrowRight,
    Sparkles,
    Wind,
    Timer,
    Target
} from "lucide-react"

const selfCareCategories = [
    {
        icon: Brain,
        title: "Mind",
        description: "Exercises for mental clarity and emotional regulation",
        color: "bg-blue-100 text-blue-700",
    },
    {
        icon: Heart,
        title: "Body",
        description: "Physical wellness practices that support mental health",
        color: "bg-rose-100 text-rose-700",
    },
    {
        icon: Users,
        title: "Connection",
        description: "Building and maintaining supportive relationships",
        color: "bg-amber-100 text-amber-700",
    },
    {
        icon: Sparkles,
        title: "Spirit",
        description: "Finding meaning, purpose, and joy in daily life",
        color: "bg-purple-100 text-purple-700",
    },
]

const breathingExercises = [
    {
        name: "4-7-8 Breathing",
        description: "A calming technique that activates your parasympathetic nervous system.",
        steps: [
            "Breathe in quietly through your nose for 4 seconds",
            "Hold your breath for 7 seconds",
            "Exhale completely through your mouth for 8 seconds",
            "Repeat the cycle 3-4 times",
        ],
        duration: "2-3 minutes",
        bestFor: "Anxiety, insomnia, stress",
    },
    {
        name: "Box Breathing",
        description: "Used by Navy SEALs to stay calm and focused under pressure.",
        steps: [
            "Inhale for 4 seconds",
            "Hold for 4 seconds",
            "Exhale for 4 seconds",
            "Hold for 4 seconds",
        ],
        duration: "4-5 minutes",
        bestFor: "Focus, panic attacks, stress",
    },
    {
        name: "Diaphragmatic Breathing",
        description: "Deep belly breathing that promotes full oxygen exchange.",
        steps: [
            "Place one hand on your chest, one on your belly",
            "Breathe in slowly through your nose, letting your belly rise",
            "Exhale slowly through pursed lips",
            "Focus on moving only your belly, not your chest",
        ],
        duration: "5-10 minutes",
        bestFor: "General relaxation, COPD, anxiety",
    },
]

const groundingTechniques = [
    {
        name: "5-4-3-2-1 Technique",
        description: "A sensory awareness exercise that brings you back to the present moment.",
        steps: [
            "Name 5 things you can SEE",
            "Name 4 things you can TOUCH",
            "Name 3 things you can HEAR",
            "Name 2 things you can SMELL",
            "Name 1 thing you can TASTE",
        ],
    },
    {
        name: "Body Scan",
        description: "Progressive attention to each part of your body to release tension.",
        steps: [
            "Find a comfortable position and close your eyes",
            "Start at the top of your head",
            "Slowly move attention down through each body part",
            "Notice sensations without judgment",
            "Release tension as you exhale",
        ],
    },
    {
        name: "Object Focus",
        description: "Use a physical object to anchor your attention to the present.",
        steps: [
            "Hold a small object (stone, pen, ice cube)",
            "Notice its temperature, texture, weight",
            "Describe it in detail in your mind",
            "Focus only on the object for 1-2 minutes",
        ],
    },
]

const journalPrompts = [
    {
        category: "Gratitude",
        prompts: [
            "What are three things that went well today?",
            "Who made a positive impact on my life recently?",
            "What simple pleasure am I grateful for?",
        ],
    },
    {
        category: "Self-Reflection",
        prompts: [
            "What emotion am I feeling right now, and where do I feel it in my body?",
            "What would I tell my best friend if they were in my situation?",
            "What is one thing I did today that I'm proud of?",
        ],
    },
    {
        category: "Growth",
        prompts: [
            "What challenge taught me something valuable recently?",
            "What is one small step I can take toward my goal tomorrow?",
            "How have I grown in the past year?",
        ],
    },
    {
        category: "Stress Release",
        prompts: [
            "What is worrying me right now? What can I control about it?",
            "What do I need to let go of?",
            "What would help me feel more at peace today?",
        ],
    },
]

const sleepHygiene = [
    {
        icon: Clock,
        title: "Consistent Schedule",
        description: "Go to bed and wake up at the same time every day, even on weekends.",
    },
    {
        icon: Moon,
        title: "Create a Sleep Sanctuary",
        description: "Keep your bedroom cool, dark, and quiet. Use it only for sleep and intimacy.",
    },
    {
        icon: Sun,
        title: "Limit Screen Time",
        description: "Avoid phones, tablets, and TVs for at least 1 hour before bed.",
    },
    {
        icon: Utensils,
        title: "Watch What You Consume",
        description: "Avoid caffeine after 2pm, heavy meals before bed, and limit alcohol.",
    },
    {
        icon: Dumbbell,
        title: "Exercise Regularly",
        description: "Physical activity promotes better sleep, but avoid intense workouts near bedtime.",
    },
    {
        icon: Wind,
        title: "Wind Down Routine",
        description: "Create a relaxing pre-sleep ritual: reading, gentle stretching, or warm bath.",
    },
]

const dailyWellnessHabits = [
    {
        time: "Morning",
        icon: Sun,
        habits: [
            "Wake at a consistent time",
            "Get natural light exposure",
            "Eat a nourishing breakfast",
            "Set an intention for the day",
            "Move your body for 10 minutes",
        ],
    },
    {
        time: "Afternoon",
        icon: Timer,
        habits: [
            "Take regular breaks from work",
            "Step outside for fresh air",
            "Stay hydrated",
            "Practice a brief meditation",
            "Connect with someone you care about",
        ],
    },
    {
        time: "Evening",
        icon: Moon,
        habits: [
            "Reflect on the day's wins",
            "Prepare for tomorrow",
            "Limit screen time",
            "Practice relaxation techniques",
            "Go to bed at a consistent time",
        ],
    },
]

const downloadableResources = [
    {
        title: "Daily Mood Tracker",
        description: "Track your emotions, sleep, and activities to identify patterns.",
        format: "PDF",
    },
    {
        title: "Thought Record Worksheet",
        description: "Challenge negative thinking patterns with this CBT-based tool.",
        format: "PDF",
    },
    {
        title: "Weekly Self-Care Planner",
        description: "Plan self-care activities across mind, body, and spirit.",
        format: "PDF",
    },
    {
        title: "Gratitude Journal Template",
        description: "30-day gratitude practice with daily prompts.",
        format: "PDF",
    },
    {
        title: "Coping Skills Reference Card",
        description: "Quick-reference card with grounding and coping techniques.",
        format: "PDF",
    },
    {
        title: "Sleep Diary",
        description: "Track sleep patterns to improve your sleep hygiene.",
        format: "PDF",
    },
]

export default function SelfCare() {
    return (
        <>

            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4">Self-Care Toolkit</Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            Tools for Your Wellness Journey
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Practical exercises, worksheets, and strategies to support your mental health
                            between appointments. Start building your personalized self-care practice today.
                        </p>
                    </div>

                    {/* Category Cards */}
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {selfCareCategories.map((category) => (
                            <Card key={category.title} className="text-center">
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-3`}>
                                        <category.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Breathing Exercises */}
            <section className="py-16 lg:py-24" aria-labelledby="breathing-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Wind className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 id="breathing-heading" className="font-serif text-3xl font-semibold text-foreground">
                                Breathing Exercises
                            </h2>
                            <p className="text-muted-foreground">Calm your nervous system in minutes</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {breathingExercises.map((exercise) => (
                            <Card key={exercise.name} className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-lg">{exercise.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{exercise.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ol className="space-y-2 mb-4">
                                        {exercise.steps.map((step, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                                                    {index + 1}
                                                </span>
                                                <span className="text-muted-foreground">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                                        <Badge variant="secondary" className="text-xs">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {exercise.duration}
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">
                                            {exercise.bestFor}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grounding Techniques */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="grounding-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Leaf className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 id="grounding-heading" className="font-serif text-3xl font-semibold text-foreground">
                                Grounding Techniques
                            </h2>
                            <p className="text-muted-foreground">Anchor yourself in the present moment</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {groundingTechniques.map((technique) => (
                            <Card key={technique.name} className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-lg">{technique.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{technique.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {technique.steps.map((step, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journal Prompts */}
            <section className="py-16 lg:py-24" aria-labelledby="journal-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Pencil className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 id="journal-heading" className="font-serif text-3xl font-semibold text-foreground">
                                Journaling Prompts
                            </h2>
                            <p className="text-muted-foreground">Explore your thoughts and feelings through writing</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {journalPrompts.map((category) => (
                            <Card key={category.category} className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-lg">{category.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {category.prompts.map((prompt, index) => (
                                            <li key={index} className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                                                &ldquo;{prompt}&rdquo;
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sleep Hygiene */}
            <section className="py-16 lg:py-24 bg-primary" aria-labelledby="sleep-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <Moon className="h-10 w-10 text-primary-foreground/80 mx-auto mb-4" />
                        <h2 id="sleep-heading" className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
                            Sleep Hygiene Tips
                        </h2>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Quality sleep is foundational to mental health. Build better sleep habits.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sleepHygiene.map((tip) => (
                            <div key={tip.title} className="bg-primary-foreground/10 rounded-xl p-6">
                                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                                    <tip.icon className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <h3 className="font-semibold text-primary-foreground mb-2">{tip.title}</h3>
                                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Wellness Habits */}
            <section className="py-16 lg:py-24" aria-labelledby="habits-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="habits-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Daily Wellness Habits
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Small, consistent habits that add up to significant improvements in your mental health.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {dailyWellnessHabits.map((timeBlock) => (
                            <Card key={timeBlock.time} className="h-full">
                                <CardHeader className="text-center">
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                                        <timeBlock.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <CardTitle>{timeBlock.time}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {timeBlock.habits.map((habit, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-primary/30" />
                                                </div>
                                                <span className="text-sm text-muted-foreground">{habit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Downloadable Resources */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="downloads-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="downloads-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Downloadable Worksheets
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Free resources to support your mental health practice at home.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {downloadableResources.map((resource) => (
                            <Card key={resource.title} className="group hover:shadow-md transition-shadow">
                                <CardContent className="p-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {resource.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                                        </div>
                                        <Button variant="ghost" size="icon" className="shrink-0">
                                            <Download className="h-4 w-4" />
                                            <span className="sr-only">Download {resource.title}</span>
                                        </Button>
                                    </div>
                                    <Badge variant="secondary" className="mt-3 text-xs">
                                        {resource.format}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-8">
                        Worksheets are provided for educational purposes. For personalized guidance,
                        please discuss with your provider.
                    </p>
                </div>
            </section>

            {/* Quick Reference Card */}
            <section className="py-16 lg:py-24" aria-labelledby="quick-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="bg-secondary rounded-2xl p-8 lg:p-12">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <Badge variant="outline" className="mb-4">Quick Reference</Badge>
                                <h2 id="quick-heading" className="font-serif text-3xl font-semibold text-foreground mb-4">
                                    In-The-Moment Coping Card
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    When you&apos;re feeling overwhelmed, try one of these quick strategies:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Target className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground">5-4-3-2-1 Grounding</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Wind className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground">Box Breathing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Music className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground">Listen to Music</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Dumbbell className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground">Move Your Body</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-right">
                                <p className="text-lg font-serif text-foreground italic mb-6">
                                    &ldquo;Self-care is not selfish. You cannot serve from an empty vessel.&rdquo;
                                </p>
                                <p className="text-muted-foreground">— Eleanor Brown</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-primary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl mb-6">
                        Need More Support?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        Self-care tools are most effective when combined with professional support.
                        Our providers can help you build a personalized wellness plan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild className="text-base px-8">
                            <a href="/patients">
                                Schedule Appointment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                            <a href="/resources/crisis">Crisis Resources</a>
                        </Button>
                    </div>
                </div>
            </section>

        </>
    )
}