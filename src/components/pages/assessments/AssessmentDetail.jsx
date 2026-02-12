import { ScreenerTool } from "./ScreenerTool"
import { Badge } from "@/components/ui/badge"
import { ClipboardCheck } from "lucide-react"

export default function AssessmentDetail({ assessment }) {

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-12 lg:py-16">
                <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
                    <Badge variant="outline" className="mb-4">
                        <ClipboardCheck className="h-3 w-3 mr-1" />
                        Self-Assessment Tool
                    </Badge>
                    <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
                        {assessment.name}: {assessment.fullName}
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{assessment.description}</p>
                </div>
            </section>

            {/* Screener Tool */}
            <section className="py-12 lg:py-16">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <ScreenerTool config={assessment} />
                </div>
            </section>
        </>
    )
}