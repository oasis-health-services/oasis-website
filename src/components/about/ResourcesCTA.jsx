import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, Video, HelpCircle } from "lucide-react"
import { motion } from 'framer-motion';

const resources = [
    {
        icon: BookOpen,
        title: "Mental Health Blog",
        description: "Educational articles on mental wellness, coping strategies, and treatment options.",
        href: "/blog",
    },
    {
        icon: FileText,
        title: "Condition Guides",
        description: "In-depth guides to understanding anxiety, depression, ADHD, and other conditions.",
        href: "/resources/guides",
    },
    {
        icon: Video,
        title: "Wellness Videos",
        description: "Expert-led videos on mindfulness, stress management, and mental health tips.",
        href: "/resources/videos",
    },
    {
        icon: HelpCircle,
        title: "FAQs",
        description: "Answers to common questions about our services, insurance, and what to expect.",
        href: "/resources/faq",
    },
]

export function ResourcesCTA() {
    return (
        <section className="py-20 lg:py-28 bg-primary" aria-labelledby="resources-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-medium text-primary-foreground/70 tracking-wide uppercase">Resource Center</span>
                    <h2 id="resources-heading" className="mt-3 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl text-balance">
                        Empowering You With Knowledge
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
                        Explore our resource center for educational content, helpful guides, and expert insights
                        to support your mental health journey between appointments.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource) => (
                        <a
                            key={resource.title}
                            href={resource.href}
                            className="group bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-xl p-6 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:bg-primary-foreground/30 transition-colors">
                                <resource.icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-primary-foreground">{resource.title}</h3>
                            <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">
                                {resource.description}
                            </p>
                            <span className="inline-flex items-center text-sm font-medium text-primary-foreground mt-3 group-hover:underline">
                                Explore
                                <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="secondary" size="lg" asChild>
                        <a href="/resources">
                            Visit Resource Center
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
