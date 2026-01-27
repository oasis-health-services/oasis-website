import { Phone } from 'lucide-react';

export function Header() {
    return (

        <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <a href="https://oasishealthservices.com" className="flex items-center gap-3 text-white">
                    <span className="font-serif text-xl font-bold text-[var(--color-foreground)]">
                        Oasis Health Services
                    </span>
                </a>
                <a
                    href="tel:+5093816035"
                    className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                    <Phone className="h-4 w-4" />
                    <span className="hidden sm:inline">Call Now</span>
                </a>
            </div>
        </header>
    );
}
