import { ArrowRight, Phone } from 'lucide-react';

interface CTAProps {
    title: string;
    subtitle?: string;
    primaryText?: string;
    primaryHref?: string;
    secondaryText?: string;
    secondaryHref?: string;
}

export function CTA({
    title,
    subtitle,
    primaryText = "Book an Appointment",
    primaryHref = "https://oasishealthservices.com/start",
    secondaryText = "Call Us",
    secondaryHref = "tel:+5093816035"
}: CTAProps) {
    return (
        <section className="bg-[var(--color-primary)] py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mb-8 text-lg text-white/90 text-pretty">
                        {subtitle}
                    </p>
                )}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href={primaryHref}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[var(--color-primary)] shadow-lg transition-all hover:bg-[var(--color-background-alt)] hover:shadow-xl"
                    >
                        {primaryText}
                        <ArrowRight className="h-5 w-5" />
                    </a>
                    <a
                        href={secondaryHref}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                    >
                        <Phone className="h-5 w-5" />
                        {secondaryText}
                    </a>
                </div>
            </div>
        </section>
    );
}
