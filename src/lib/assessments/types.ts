export interface ScreenerOption {
    value: number
    label: string
}

export interface ScreenerQuestion {
    id: number
    question: string
    options?: ScreenerOption[]
    isCritical?: boolean
    criticalThreshold?: number
}

export interface ResultLevel {
    level: string
    title: string
    description: string
    color: string
    bgColor: string
    iconColor: string
    recommendations: string[]
    resources: { title: string; href: string; description: string }[]
}

export interface ScreenerConfig {
    id: string
    category: string
    slug: string
    name: string
    fullName: string
    description: string
    purpose: string
    timeEstimate: string
    questionCount: number
    citation: string
    citationUrl?: string
    disclaimer: string
    questions: ScreenerQuestion[]
    standardOptions?: ScreenerOption[]
    scoring: {
        min: number
        max: number
        thresholds: { min: number; max: number; level: string }[]
    }
    criticalQuestionId?: number
    criticalThreshold?: number
    resultLevels: Record<string, ResultLevel>
    relatedCondition: string
    relatedAssessments?: string[]
}
