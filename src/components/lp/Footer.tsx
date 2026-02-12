import { Phone, AlertTriangle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                        <p className="text-sm text-amber-800">
                            <strong>Crisis Support:</strong> If you are experiencing a medical or psychiatric emergency, please call or text <strong>988</strong> immediately or go to your nearest emergency room.
                        </p>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]">
                                <span className="text-lg font-bold text-white">O</span>
                            </div>
                            <span className="font-serif text-xl font-bold text-[var(--color-foreground)]">
                                Oasis Health Services
                            </span>
                        </div>
                        <p className="text-sm text-[var(--color-foreground-muted)]">
                            A fresh perspective on mental health care. Virtual services covered by insurance.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-[var(--color-foreground)]">Our Services</h4>
                        <ul className="space-y-2 text-sm text-[var(--color-foreground-muted)]">
                            <li><a href="https://oasishealthservices.com/services/medication-management" className="hover:text-[var(--color-primary)]">Medication Management</a></li>
                            <li><a href="https://oasishealthservices.com/services/adhd" className="hover:text-[var(--color-primary)]">ADHD Testing & Treatment</a></li>
                            <li><a href="https://oasishealthservices.com/services/spravato" className="hover:text-[var(--color-primary)]">Spravato Therapy</a></li>
                            <li><a href="https://oasishealthservices.com/services" className="hover:text-[var(--color-primary)]">View All Services</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-[var(--color-foreground)]">Contact</h4>
                        <a
                            href="tel:+18005551234"
                            className="mb-4 inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                        >
                            <Phone className="h-4 w-4" />
                            <span className="font-semibold">1-800-555-1234</span>
                        </a>
                        <p className="text-sm text-[var(--color-foreground-muted)]">
                            Virtual appointments available nationwide.
                        </p>
                    </div>
                </div>

                <div className="mt-8 border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-foreground-muted)]">
                    <p>&copy; {new Date().getFullYear()} Oasis Health Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
