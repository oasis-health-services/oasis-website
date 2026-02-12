import type { LucideIcon } from 'lucide-react';

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeaturesProps {
    title: string;
    subtitle?: string;
    features: Feature[];
}

export function Features({ title, subtitle, features }: FeaturesProps) {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-[var(--color-foreground)] md:text-4xl text-balance">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-[var(--color-foreground-muted)] text-pretty">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-background-muted)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[var(--color-foreground)]">
                                {feature.title}
                            </h3>
                            <p className="leading-relaxed text-[var(--color-foreground-muted)]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
