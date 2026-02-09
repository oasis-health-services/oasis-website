import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    Globe,
    MapPin,
    Phone,
    Heart,
    Brain,
    Shield,
    MessageCircle,
    ExternalLink,
    ArrowRight,
    CheckCircle2
} from "lucide-react"

const localGroups = [
    {
        name: "NAMI Georgia",
        description: "National Alliance on Mental Illness offers peer-led support groups for individuals living with mental health conditions and their families.",
        types: ["Family Support", "Peer-to-Peer", "Connection Groups"],
        location: "Multiple Georgia Locations",
        phone: "770-234-0855",
        website: "https://namiga.org",
        meetingFormat: "In-person & Virtual",
    },
    {
        name: "Depression and Bipolar Support Alliance (DBSA)",
        description: "Peer-led support groups for individuals living with depression or bipolar disorder. Provides hope, support, and education.",
        types: ["Depression Support", "Bipolar Support", "Young Adults"],
        location: "Atlanta Metro Area",
        phone: "800-826-3632",
        website: "https://www.dbsalliance.org/",
        meetingFormat: "In-person & Virtual",
    },
    {
        name: "Alcoholics Anonymous (AA) Georgia",
        description: "Fellowship of people who share their experience, strength, and hope to solve their common problem with alcohol.",
        types: ["Open Meetings", "Closed Meetings", "Speaker Meetings"],
        location: "Statewide",
        phone: "404-525-3178",
        website: "https://aageorgia.org/",
        meetingFormat: "In-person & Virtual",
    },
    {
        name: "Narcotics Anonymous (NA) Georgia",
        description: "Community-based organization for recovering addicts. Meetings are available throughout Georgia.",
        types: ["Open Meetings", "Closed Meetings", "Step Meetings"],
        location: "Statewide",
        phone: "888-786-2462",
        website: "https://na.org/",
        meetingFormat: "In-person & Virtual",
    },
    {
        name: "GriefShare",
        description: "Faith-based grief recovery support groups helping people navigate the journey from mourning to joy.",
        types: ["Grief Recovery", "Loss of Spouse", "Loss of Child"],
        location: "Multiple Georgia Churches",
        website: "https://www.griefshare.org/",
        meetingFormat: "In-person",
    },
    {
        name: "CHADD Atlanta",
        description: "Children and Adults with ADHD local chapter providing support, education, and advocacy for individuals with ADHD.",
        types: ["Adult ADHD", "Parents of Children with ADHD", "Education"],
        location: "Atlanta Area",
        website: "https://chadd.org/",
        meetingFormat: "In-person & Virtual",
    },
]

const onlineGroups = [
    {
        name: "7 Cups",
        description: "Free online chat with trained listeners. Also offers community forums and group support rooms.",
        features: ["24/7 Availability", "Anonymous Chat", "Trained Listeners", "Free Service"],
        href: "https://www.7cups.com/",
        category: "General Support",
    },
    {
        name: "ADAA Online Support Group",
        description: "Anxiety and Depression Association of America offers moderated online peer support communities.",
        features: ["Moderated Forums", "Topic-Specific Groups", "Resource Library"],
        href: "https://adaa.org/finding-help/getting-support",
        category: "Anxiety & Depression",
    },
    {
        name: "Mental Health America Affiliates",
        description: "Network of community-based affiliates providing local support resources and virtual programs.",
        features: ["Local Resources", "Virtual Programs", "Advocacy"],
        href: "https://mhanational.org/",
        category: "General Support",
    },
    {
        name: "The Tribe Wellness Community",
        description: "Peer support app connecting people with similar mental health experiences for daily check-ins.",
        features: ["Mobile App", "Peer Matching", "Daily Check-ins"],
        href: "https://www.support.therapytribe.com/",
        category: "Peer Support",
    },
    {
        name: "Smart Recovery Online",
        description: "Science-based addiction recovery support with online meetings and resources.",
        features: ["24/7 Chat", "Online Meetings", "Science-Based"],
        href: "https://www.smartrecovery.org/",
        category: "Addiction Recovery",
    },
    {
        name: "Postpartum Support International",
        description: "Support for those experiencing perinatal mood and anxiety disorders, with online groups and resources.",
        features: ["Online Support Groups", "Helpline", "Resource Directory"],
        href: "https://www.postpartum.net/",
        category: "Perinatal Mental Health",
    },
]

const conditionSpecificGroups = [
    {
        condition: "Depression",
        icon: Heart,
        color: "bg-blue-100 text-blue-700",
        resources: [
            { name: "DBSA Online Support", href: "https://www.dbsalliance.org/support/chapters-and-support-groups/online-support-groups/" },
            { name: "Depression Forums", href: "https://www.depressionforums.org/" },
        ],
    },
    {
        condition: "Anxiety",
        icon: Shield,
        color: "bg-amber-100 text-amber-700",
        resources: [
            { name: "Anxiety Support Community", href: "https://www.anxietysupportnetwork.com/" },
            { name: "Social Anxiety Support", href: "https://socialanxietysupport.com/" },
        ],
    },
    {
        condition: "ADHD",
        icon: Brain,
        color: "bg-purple-100 text-purple-700",
        resources: [
            { name: "CHADD Support Groups", href: "https://chadd.org/affiliate-locator/" },
            { name: "ADDitude Community", href: "https://www.additudemag.com/forums/" },
        ],
    },
    {
        condition: "Addiction",
        icon: Users,
        color: "bg-green-100 text-green-700",
        resources: [
            { name: "AA Meeting Finder", href: "https://www.aa.org/find-aa" },
            { name: "NA Meeting Finder", href: "https://www.na.org/meetingsearch/" },
        ],
    },
    {
        condition: "Grief & Loss",
        icon: Heart,
        color: "bg-rose-100 text-rose-700",
        resources: [
            { name: "GriefShare Groups", href: "https://www.griefshare.org/findagroup" },
            { name: "The Dinner Party", href: "https://www.thedinnerparty.org/" },
        ],
    },
    {
        condition: "PTSD & Trauma",
        icon: Shield,
        color: "bg-indigo-100 text-indigo-700",
        resources: [
            { name: "PTSD Foundation", href: "https://ptsdusa.org/" },
            { name: "Gift From Within", href: "https://www.giftfromwithin.org/" },
        ],
    },
]

const supportGroupBenefits = [
    {
        title: "You're Not Alone",
        description: "Connect with others who truly understand what you're going through.",
    },
    {
        title: "Learn Coping Strategies",
        description: "Hear what works for others and share your own successful strategies.",
    },
    {
        title: "Reduce Isolation",
        description: "Break the cycle of isolation that often accompanies mental health challenges.",
    },
    {
        title: "Build a Support Network",
        description: "Form meaningful connections with people who can support your journey.",
    },
    {
        title: "Gain Perspective",
        description: "See your situation from new angles through others' experiences.",
    },
    {
        title: "Give & Receive Hope",
        description: "Inspire others with your progress and be inspired by theirs.",
    },
]

const choosingGroupTips = [
    "Consider whether you prefer in-person connection or the convenience of online meetings",
    "Look for groups that are facilitated or moderated for a structured experience",
    "Try a few different groups to find the right fit - it's okay to shop around",
    "Consider groups specific to your diagnosis or situation for more targeted support",
    "Check if the group is peer-led or professionally facilitated based on your preference",
    "Ensure the group maintains confidentiality and has clear guidelines",
]

export default function SupportGroups() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4 border-primary">Support Groups</Badge>
                        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground text-balance">
                            Find Your Community
                        </h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            You don&apos;t have to face mental health challenges alone. Connect with others who
                            understand through local and online support groups.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <a href="#local-groups">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    Find Local Groups
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary text-primary">
                                <a href="#online-groups">
                                    <Globe className="mr-2 h-5 w-5" />
                                    Browse Online Groups
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-24" aria-labelledby="benefits-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="benefits-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Why Join a Support Group?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Research shows that peer support can significantly improve mental health outcomes.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {supportGroupBenefits.map((benefit) => (
                            <div key={benefit.title} className="bg-muted rounded-xl p-6">
                                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Groups */}
            <section id="local-groups" className="py-16 lg:py-24 bg-muted scroll-mt-24" aria-labelledby="local-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 id="local-heading" className="font-serif text-3xl font-semibold text-foreground">
                                Georgia Support Groups
                            </h2>
                            <p className="text-muted-foreground">In-person and local community resources</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {localGroups.map((group) => (
                            <Card key={group.name} className="h-full">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <CardTitle className="text-lg">{group.name}</CardTitle>
                                        <Badge variant="secondary" className="shrink-0">{group.meetingFormat}</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{group.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {group.types.map((type) => (
                                            <Badge key={type} variant="outline" className="text-xs">{type}</Badge>
                                        ))}
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin className="h-4 w-4 shrink-0" />
                                            <span>{group.location}</span>
                                        </div>
                                        {group.phone && (
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                                                <a href={`tel:${group.phone.replace(/[^0-9]/g, "")}`} className="text-primary hover:underline">
                                                    {group.phone}
                                                </a>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2">
                                            <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
                                            <a
                                                href={group.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline inline-flex items-center gap-1"
                                            >
                                                Visit Website
                                                <ExternalLink className="h-3 w-3" />
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Online Groups */}
            <section id="online-groups" className="py-16 lg:py-24 scroll-mt-24" aria-labelledby="online-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Globe className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h2 id="online-heading" className="font-serif text-3xl font-semibold text-foreground">
                                Online Support Communities
                            </h2>
                            <p className="text-muted-foreground">Virtual support accessible from anywhere</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {onlineGroups.map((group) => (
                            <Card key={group.name} className="h-full group hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <Badge variant="secondary" className="w-fit mb-3">{group.category}</Badge>
                                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {group.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                                        {group.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {group.features.map((feature) => (
                                            <span key={feature} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={group.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                        Visit Community
                                        <ExternalLink className="ml-1 h-3 w-3" />
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Condition-Specific Groups */}
            <section className="py-16 lg:py-24 bg-muted" aria-labelledby="condition-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 id="condition-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                            Find Groups by Condition
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Connect with others who share your specific experiences.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conditionSpecificGroups.map((group) => (
                            <Card key={group.condition} className="h-full">
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl ${group.color} flex items-center justify-center mb-4`}>
                                        <group.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-4">{group.condition}</h3>
                                    <ul className="space-y-2">
                                        {group.resources.map((resource) => (
                                            <li key={resource.name}>
                                                <a
                                                    href={resource.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                                                >
                                                    {resource.name}
                                                    <ExternalLink className="h-3 w-3" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tips for Choosing */}
            <section className="py-16 lg:py-24" aria-labelledby="tips-heading">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 id="tips-heading" className="font-serif text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                                Choosing the Right Support Group
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Finding the right fit is important. Here are some tips to help you choose a support group
                                that works for you.
                            </p>
                            <ul className="space-y-4">
                                {choosingGroupTips.map((tip, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="text-xs font-medium text-primary">{index + 1}</span>
                                        </span>
                                        <span className="text-muted-foreground">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card className="bg-secondary border-0">
                            <CardContent className="p-8">
                                <MessageCircle className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                                    First Time Attending?
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    It&apos;s normal to feel nervous before your first meeting. Remember:
                                </p>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        You don&apos;t have to share until you&apos;re ready
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        Everything shared is confidential
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        You can just listen at first
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        It&apos;s okay to try multiple groups
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-primary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl mb-6">
                        Need Professional Support Too?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                        Support groups work best alongside professional treatment. Our providers can help
                        create a comprehensive care plan that includes peer support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" asChild>
                            <a href="/patients">
                                Schedule Appointment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                            <a href="/about/our-team">Meet Our Providers</a>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}