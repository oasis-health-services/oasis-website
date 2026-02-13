import { ArrowRight, Shield, Clock, Video } from 'lucide-react';

interface HeroProps {
    badge?: string;
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
    image?: string;
    imageAlt?: string;
}

export function Hero({
    badge,
    title,
    subtitle,
    ctaText = "Get Started Today",
    ctaHref = "/start",
    image,
    imageAlt = "Healthcare professional"
}: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-[var(--color-background-alt)] py-12 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.08),transparent_50%)]" />
            <div className="relative mx-auto max-w-6xl px-4">
                <div className={`flex flex-col items-center gap-10 ${image ? 'lg:flex-row lg:gap-16' : ''}`}>
                    {/* Content */}
                    <div className={`flex-1 ${image ? 'text-left' : 'mx-auto max-w-3xl text-center'}`}>
                        {badge && (
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-background-muted)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
                                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                                {badge}
                            </span>
                        )}
                        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-[var(--color-foreground)] md:text-5xl lg:text-[3.25rem] text-balance">
                            {title}
                        </h1>
                        <p className="mb-8 text-lg leading-relaxed text-[var(--color-foreground-muted)] md:text-xl text-pretty">
                            {subtitle}
                        </p>
                        <a
                            href={ctaHref}
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:bg-[var(--color-primary-dark)] hover:shadow-xl hover:shadow-[var(--color-primary)]/30"
                        >
                            {ctaText}
                            <ArrowRight className="h-5 w-5" />
                        </a>

                        <div className={`mt-10 flex flex-wrap items-center gap-6 text-sm text-[var(--color-foreground-muted)] ${image ? 'justify-start' : 'justify-center'}`}>
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-[var(--color-primary)]" />
                                <span>Insurance Accepted</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Video className="h-5 w-5 text-[var(--color-primary)]" />
                                <span>Virtual Visits</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-[var(--color-primary)]" />
                                <span>Same-Week Appointments</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    {image && (
                        <div className="flex-1 lg:flex-[1.1]">
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-3xl bg-[var(--color-primary)]/10 blur-2xl" />
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={imageAlt}
                                    className="relative w-full rounded-2xl object-cover shadow-2xl shadow-[var(--color-primary)]/20"
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
