import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Brain, Heart, Pill, Stethoscope, Moon, Sparkles, Users, Activity, ShieldAlert, HeartPulse, Zap, Puzzle, ShieldPlus, LifeBuoy, RefreshCcw } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion';

const conditions = [
    {
        id: 1, name: 'Anxiety Disorders', description: "Ongoing worry, panic, or tension that interferes with daily life.",
        href: '/conditions/anxiety-disorders', icon: ShieldAlert, category: "Anxiety & Stress", tags: ["anxiety", "panic", "social-anxiety", "phobias", "worry", "stress", "GAD"]
    },
    {
        id: 2, name: 'Mood Disorders', description: "Depression or mood swings that impact sleep, energy, and motivation.",
        href: '/conditions/mood-disorders', icon: HeartPulse, category: "Mood"
    },
    {
        id: 3, name: 'ADHD', description: "Challenges with focus, organization, or impulsivity at work, school, or home.",
        href: '/conditions/neurodevelopmental-disorders', icon: Zap, category: "Neurodevelopmental"
    },
    {
        id: 4, name: 'Autism Spectrum Disorder', description: "Differences in communication, sensory processing, and social interaction.",
        href: '/conditions/neurodevelopmental-disorders', icon: Puzzle, category: "Neurodevelopmental"
    },
    {
        id: 5, name: 'Substance-Related Disorders', description: "Difficulty reducing alcohol or drug use despite negative impacts.",
        href: '/conditions/substance-related-disorders', icon: ShieldPlus, category: "Substance Use & Recovery"
    },
    {
        id: 6, name: 'Trauma & Stress-Related', description: "Symptoms after stressful or traumatic events, like hypervigilance or avoidance.",
        href: '/conditions/trauma-stress-disorders', icon: LifeBuoy, category: "Trauma & Recovery"
    },
    {
        id: 7, name: 'Personality Disorders', description: "Persistent patterns in emotions and relationships that cause distress.",
        href: '/conditions/personality-disorders', icon: Users, category: "Personality & Relationships"
    },
    {
        id: 8, name: 'OCD & Related Disorders', description: "Intrusive thoughts and repetitive behaviors you feel driven to do.",
        href: '/conditions/ocd-related-disorders', icon: RefreshCcw, category: "Anxiety & Related"
    },
    {
        id: 9, name: 'Psychotic Disorders', description: "Changes in perception or thinking, such as hallucinations or delusions.",
        href: '/conditions/psychotic-disorders', icon: Brain, category: "Thought & Perception"
    },
];

const categories = [
    'All',
    'Anxiety & Stress',
    'Mood',
    'Neurodevelopmental',
    'Substance Use & Recovery',
    'Trauma & Recovery',
    'Personality & Relationships',
    'Anxiety & Related',
    'Thought & Perception',
];

export function ConditionsWeTreat({ className = "py-16 sm:py-24 bg-card" } = {}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredServices = useMemo(() => {
        return conditions.filter((service) => {
            const matchesCategory = selectedCategory === "All" || service.category === selectedCategory
            const matchesSearch =
                searchQuery === "" ||
                service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                service.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            return matchesCategory && matchesSearch
        })
    }, [searchQuery, selectedCategory])

    return (
        <section id="conditions" className={className}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} className="mx-auto max-w-2xl text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D6762] mb-6">
                        Conditions We Treat
                    </h2>
                    {/* <p className="mt-4 text-lg text-muted-foreground">
                        Search our comprehensive services to find the care you need
                    </p> */}
                </motion.div>
                <div className="mt-10 mx-auto max-w-xl">
                    {/* <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search conditions, services, or symptoms..."
                            className="pl-10 h-12 text-base"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search services"
                        />
                    </div> */}

                    {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {categories.map((category, index) => (


                            <Badge
                                key={category}
                                variant={selectedCategory === category ? "default" : "secondary"}
                                className="cursor-pointer px-4 py-1.5 text-sm transition-colors"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div> */}
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (

                            <motion.div key={service.id} initial={{
                                opacity: 0,
                                y: 10
                            }} whileInView={{
                                opacity: 1,
                                y: 0
                            }} viewport={{
                                once: true,
                                margin: "-50px"
                            }} transition={{
                                duration: 0.4,
                                delay: index * 0.03,
                                ease: "easeOut"
                            }}>
                                <Card
                                    key={service.id}
                                    className="h-full group cursor-pointer transition-all hover:shadow-lg hover:border-primary/30"
                                    onClick={() => window.location.href = service.href}
                                >
                                    <CardContent className="p-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#2D6762] group-hover:text-[#6D519D] transition-colors">{service.name}</h3>
                                        <p className="mt-1 text-xs text-primary font-medium">{service.category}</p>
                                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center">
                            <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
                            <h3 className="mt-4 text-lg font-semibold text-foreground">No results found</h3>
                            <p className="mt-2 text-muted-foreground">
                                Try adjusting your search or filter to find what you are looking for.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}