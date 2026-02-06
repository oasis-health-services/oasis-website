import { ArrowRight } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export function ProviderFAQ({ provider }) {
    return (
        <section className="py-16 lg:py-20" aria-labelledby="faq-heading">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-sm font-medium text-primary tracking-wide uppercase">Questions & Answers</span>
                    <h2 id="faq-heading" className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl text-balance">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        Common questions about working with {provider.name.split(" ")[0]}
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {provider.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-border">
                            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Link to Resource Center */}
                <div className="mt-12 text-center p-6 bg-secondary rounded-xl">
                    <p className="text-foreground font-medium mb-2">Have more questions?</p>
                    <p className="text-sm text-muted-foreground mb-4">
                        Explore our Resource Center for articles, guides, and helpful information about mental health.
                    </p>
                    <a
                        href="/resources"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Visit Resource Center
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}
