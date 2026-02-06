import type { ScreenerConfig } from "./types"

export const PCPTSD5: ScreenerConfig = {
    id: "pc-ptsd-5",
    category: "ptsd",
    slug: "ptsd/pc-ptsd-5",
    name: "PC-PTSD-5",
    fullName: "Primary Care PTSD Screen for DSM-5",
    description: "A 5-question screening tool designed to identify individuals who may have PTSD following exposure to a traumatic event.",
    purpose: "This brief screener helps identify potential PTSD symptoms. A positive screen indicates that a more comprehensive evaluation by a mental health professional may be warranted.",
    timeEstimate: "1-2 minutes",
    questionCount: 5,
    citation: "Developed by the VA National Center for PTSD. Public domain for clinical use.",
    citationUrl: "https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp",
    disclaimer: "This screening tool is not a diagnostic instrument. A diagnosis of PTSD can only be made by a qualified healthcare provider through a comprehensive evaluation. The PC-PTSD-5 begins with an exposure question to determine if the symptom questions should be asked.",
    standardOptions: [
        { value: 0, label: "No" },
        { value: 1, label: "Yes" },
    ],
    questions: [
        {
            id: 0,
            question: "Have you ever experienced or witnessed a traumatic event, such as combat, a serious accident, physical or sexual assault, a natural disaster, or the sudden death of a loved one?",
            options: [
                { value: 0, label: "No" },
                { value: 1, label: "Yes" },
            ],
        },
        {
            id: 1,
            question: "In the past month, have you had nightmares about the event(s) or thought about the event(s) when you did not want to?",
        },
        {
            id: 2,
            question: "In the past month, have you tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
        },
        {
            id: 3,
            question: "In the past month, have you been constantly on guard, watchful, or easily startled?",
        },
        {
            id: 4,
            question: "In the past month, have you felt numb or detached from people, activities, or your surroundings?",
        },
        {
            id: 5,
            question: "In the past month, have you felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
        },
    ],
    scoring: {
        min: 0,
        max: 5,
        thresholds: [
            { min: 0, max: 2, level: "negative" },
            { min: 3, max: 5, level: "positive" },
        ],
    },
    resultLevels: {
        noTrauma: {
            level: "noTrauma",
            title: "No Trauma Exposure Reported",
            description: "You indicated that you have not experienced or witnessed a traumatic event. The PTSD symptom questions do not apply in this case.",
            color: "text-green-700",
            bgColor: "bg-green-50 border-green-200",
            iconColor: "bg-green-100",
            recommendations: [
                "Continue to maintain your mental wellness",
                "If you later experience a traumatic event, resources are available",
                "Practice healthy coping strategies for life stressors",
                "Stay connected with supportive relationships",
            ],
            resources: [
                { title: "Self-Care Toolkit", href: "/resources/self-care", description: "Tools for ongoing wellness" },
                { title: "Resource Center", href: "/resources", description: "Explore mental health resources" },
            ],
        },
        negative: {
            level: "negative",
            title: "Negative Screen for PTSD",
            description: "Based on your responses, you do not currently meet the screening threshold for PTSD. However, if you experienced trauma and are struggling, you may still benefit from speaking with a provider.",
            color: "text-green-700",
            bgColor: "bg-green-50 border-green-200",
            iconColor: "bg-green-100",
            recommendations: [
                "Trauma responses can develop or change over time - stay aware of your symptoms",
                "Practice healthy coping strategies",
                "Reach out for support if symptoms develop or worsen",
                "Consider speaking with a provider if the trauma is affecting you even without full PTSD symptoms",
                "Know that some reactions to trauma are normal and may resolve naturally",
            ],
            resources: [
                { title: "Self-Care Toolkit", href: "/resources/self-care", description: "Coping strategies and grounding techniques" },
                { title: "About Trauma & PTSD", href: "/conditions/trauma", description: "Learn about trauma responses" },
                { title: "Support Groups", href: "/resources/support-groups", description: "Connect with others" },
            ],
        },
        positive: {
            level: "positive",
            title: "Positive Screen for PTSD",
            description: "Your responses suggest you may be experiencing symptoms consistent with PTSD. A positive screen does not mean you have PTSD, but it indicates that a comprehensive evaluation by a mental health professional is recommended.",
            color: "text-orange-700",
            bgColor: "bg-orange-50 border-orange-200",
            iconColor: "bg-orange-100",
            recommendations: [
                "Schedule an appointment with a mental health provider for a full evaluation",
                "PTSD is highly treatable - effective therapies like EMDR and CPT are available",
                "You don't have to face this alone - support is available",
                "Avoid using alcohol or drugs to cope with symptoms",
                "Practice grounding techniques when experiencing flashbacks or distress",
                "Be patient with yourself - healing from trauma takes time",
            ],
            resources: [
                { title: "Schedule an Appointment", href: "/contact", description: "Get a comprehensive evaluation" },
                { title: "About Trauma & PTSD", href: "/conditions/trauma", description: "Learn about treatment options" },
                { title: "Crisis Resources", href: "/resources/crisis", description: "24/7 support if needed" },
                { title: "Meet Our Providers", href: "/providers", description: "Find a trauma-informed provider" },
            ],
        },
    },
    relatedCondition: "trauma",
    relatedAssessments: ["phq-9", "gad-7"],
}