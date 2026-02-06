import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        location: "Atlanta, GA",
        rating: 5,
        condition: "Anxiety & Depression",
        quote: "Oasis Health Services changed my life. After struggling for years, I finally found a provider who truly listens. The virtual appointments fit perfectly into my busy schedule, and I've made more progress in 6 months than I did in years of trying to manage on my own.",
        highlight: "Made more progress in 6 months than years on my own",
    },
    {
        id: 2,
        name: "Michael T.",
        location: "Marietta, GA",
        rating: 5,
        condition: "ADHD",
        quote: "Getting an ADHD diagnosis as an adult was overwhelming, but my provider at Oasis made the process comfortable and thorough. The medication management has been excellent, and I finally feel like I can focus and be productive at work.",
        highlight: "Finally feel like I can focus and be productive",
    },
    {
        id: 3,
        name: "Jennifer L.",
        location: "Roswell, GA",
        rating: 5,
        condition: "Postpartum Depression",
        quote: "As a new mom, I was hesitant to seek help for my postpartum depression. The team at Oasis was incredibly compassionate and non-judgmental. Being able to do telehealth appointments while my baby napped was a game-changer.",
        highlight: "Compassionate, non-judgmental care for new moms",
    },
    {
        id: 4,
        name: "David R.",
        location: "Johns Creek, GA",
        rating: 5,
        condition: "Bipolar Disorder",
        quote: "Managing bipolar disorder requires consistent care and communication. My provider at Oasis is always available when I need adjustments and takes the time to explain everything. I've never felt more stable.",
        highlight: "Never felt more stable in my mental health journey",
    },
    {
        id: 5,
        name: "Amanda K.",
        location: "Alpharetta, GA",
        rating: 5,
        condition: "Anxiety & Insomnia",
        quote: "The holistic approach at Oasis addressed both my anxiety and sleep issues together. They don't just prescribe medication - they actually care about finding the root cause and building long-term wellness strategies.",
        highlight: "Holistic approach addressing root causes",
    },
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-primary font-medium mb-2">Patient Stories</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                        Hear From Our Patients
                    </h2>
                    <p className="text-muted-foreground">
                        Real experiences from real people on their mental health journey with Oasis Health Services
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <Card className="border-0 shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                                {/* Quote Side */}
                                <div className="flex-1 p-8 md:p-12 bg-card">
                                    <Quote className="w-10 h-10 text-primary/20 mb-6" />

                                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                                        {currentTestimonial.quote}
                                    </blockquote>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                        ))}
                                    </div>

                                    {/* Attribution */}
                                    <div>
                                        <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
                                    </div>
                                </div>

                                {/* Highlight Side */}
                                <div className="md:w-72 bg-primary p-8 md:p-12 flex flex-col justify-center">
                                    <p className="text-primary-foreground/80 text-sm font-medium mb-2">
                                        Treatment for
                                    </p>
                                    <p className="text-primary-foreground font-semibold mb-6">
                                        {currentTestimonial.condition}
                                    </p>

                                    <div className="border-t border-primary-foreground/20 pt-6">
                                        <p className="text-primary-foreground/80 text-sm font-medium mb-2">
                                            Key Takeaway
                                        </p>
                                        <p className="text-primary-foreground font-serif text-lg italic">
                                            &ldquo;{currentTestimonial.highlight}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="rounded-full bg-transparent"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "bg-primary w-6"
                                            : "bg-primary/30 hover:bg-primary/50"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="rounded-full bg-transparent"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-border">
                        <div className="text-center">
                            <p className="text-3xl font-serif font-semibold text-primary">4.9</p>
                            <p className="text-sm text-muted-foreground">Average Rating</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-serif font-semibold text-primary">1,000+</p>
                            <p className="text-sm text-muted-foreground">Patients Served</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-serif font-semibold text-primary">98%</p>
                            <p className="text-sm text-muted-foreground">Would Recommend</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}