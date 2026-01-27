'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    items: FAQItem[];
}

export function FAQ({ title = "Frequently Asked Questions", items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-4">
                <h2 className="mb-12 text-center font-serif text-3xl font-bold text-[var(--color-foreground)] md:text-4xl">
                    {title}
                </h2>
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-[var(--color-background-alt)]"
                            >
                                <span className="font-semibold text-[var(--color-foreground)]">
                                    {item.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 flex-shrink-0 text-[var(--color-foreground-muted)] transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="border-t border-[var(--color-border)] px-6 py-4">
                                    <p className="leading-relaxed text-[var(--color-foreground-muted)]">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
