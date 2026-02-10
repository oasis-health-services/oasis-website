interface Step {
    number: string;
    title: string;
    description: string;
}

interface HowItWorksProps {
    title?: string;
    subtitle?: string;
    steps: Step[];
    image?: string;
    imageAlt?: string;
}

export function HowItWorks({ title = "How It Works", subtitle, steps, image, imageAlt = "Virtual care from home" }: HowItWorksProps) {
    return (
        <section className="bg-[var(--color-background-alt)] py-16 md:py-24">
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

                <div className={`flex flex-col gap-12 ${image ? 'lg:flex-row lg:items-center lg:gap-16' : ''}`}>
                    {/* Steps */}
                    <div className={`${image ? 'lg:flex-1' : ''}`}>
                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                                        {step.number}
                                    </div>
                                    <div className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5">
                                        <h3 className="mb-1 font-semibold text-[var(--color-foreground)]">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-foreground-muted)]">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    {image && (
                        <div className="lg:flex-1">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-[var(--color-primary)]/5" />
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={imageAlt}
                                    className="relative w-full rounded-2xl object-cover shadow-xl"
                                    style={{ aspectRatio: '4/3' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
