export function InsuranceLogos() {
    const insurers = [
        "Aetna",
        "BlueCross BlueShield",
        "Cigna",
        "UnitedHealthcare",
        "Optum",
        "UMR",
        "OSCAR",
    ];

    return (
        <section className="border-y border-[var(--color-border)] bg-[var(--color-background)] py-10">
            <div className="mx-auto max-w-6xl px-4">
                <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-[var(--color-foreground-muted)]">
                    Trusted by Major Insurance Providers
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {insurers.map((insurer) => (
                        <div
                            key={insurer}
                            className="flex h-12 items-center justify-center rounded-lg bg-[var(--color-background-alt)] px-6 text-sm font-semibold text-[var(--color-foreground-muted)]"
                        >
                            {insurer}
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Don't see your insurance? <a href="/contact" className="text-primary hover:underline">Contact us</a> to verify your benefits or discuss self-pay rates.
                </p>

            </div>
        </section>
    );
}
