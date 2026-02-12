import { AlertTriangle, Phone } from "lucide-react"

function CrisisNotice() {
    return (
        <>
            <section className="py-6 bg-destructive/5 border-t border-b border-destructive/20" aria-labelledby="crisis-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                                <AlertTriangle className="h-5 w-5 text-destructive" />
                            </div>
                            <div>
                                <h2 id="crisis-heading" className="font-semibold text-foreground text-medium">
                                    Experiencing a Mental Health Crisis?
                                </h2>
                                <p className="mt-1 text-muted-foreground max-w-2xl text-sm">
                                    If you or someone you know is in immediate danger, please call 911 or go to your nearest emergency room.
                                    For crisis support, call or text the 988 Suicide & Crisis Lifeline.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row gap-3 lg:shrink-0">
                            <a
                                href="tel:988"
                                className="inline-flex items-center justify-center px-6 py-2 bg-destructive text-white font-medium text-sm rounded-lg hover:bg-destructive/90 transition-colors"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                Call 988
                            </a>
                            <a
                                href="/resources/crisis"
                                className="inline-flex items-center justify-center px-6 py-2 bg-card border border-border font-medium text-sm rounded-lg hover:bg-secondary transition-colors"
                            >
                                Crisis Resources
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CrisisNotice;
