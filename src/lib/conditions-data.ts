export interface Condition {
    slug: string
    title: string
    shortDescription: string
    fullDescription: string
    icon: string
    symptoms: string[]
    causes: string[]
    treatments: string[]
    whenToSeekHelp: string[]
    relatedConditions: string[]
    highlight?: {
        title: string
        description: string
        icon?: string
        style?: string
        iconStyle?: string
    }
    faqs: { question: string; answer: string }[]
}

export const conditions: Condition[] = [
    {
        slug: "anxiety-disorders",
        title: "Anxiety Disorders",
        shortDescription: "Excessive fear or worry that disrupts work, school or relationships; includes GAD, social anxiety, panic, and specific phobias.",
        fullDescription: "Anxiety disorders are among the most common mental health conditions, affecting millions of adults each year. While occasional anxiety is a normal part of life, anxiety disorders involve more than temporary worry or fear. For people with anxiety disorders, the anxiety does not go away and can get worse over time, interfering with daily activities such as job performance, schoolwork, and relationships.",
        icon: "AlertTriangle",
        symptoms: [
            "Persistent, excessive worry about everyday matters",
            "Feeling restless, wound-up, or on-edge",
            "Being easily fatigued",
            "Difficulty concentrating or mind going blank",
            "Irritability",
            "Muscle tension",
            "Sleep problems (difficulty falling or staying asleep)",
            "Panic attacks with heart palpitations, sweating, trembling",
            "Avoiding situations that trigger anxiety"
        ],
        causes: [
            "Genetics and family history of anxiety",
            "Brain chemistry imbalances",
            "Traumatic or stressful life events",
            "Medical conditions (thyroid problems, heart conditions)",
            "Substance use or withdrawal",
            "Personality factors (shyness in childhood)",
            "Other mental health disorders"
        ],
        treatments: [
            "Cognitive Behavioral Therapy (CBT)",
            "Exposure therapy for specific phobias",
            "Anti-anxiety medications (SSRIs, SNRIs, benzodiazepines)",
            "Mindfulness and relaxation techniques",
            "Lifestyle modifications (exercise, sleep hygiene)",
            "Support groups and peer support"
        ],
        whenToSeekHelp: [
            "Anxiety interferes with work, relationships, or daily activities",
            "You feel depressed, use alcohol or drugs, or have other mental health concerns",
            "You have thoughts of suicide or self-harm",
            "Physical symptoms that don't have a medical cause",
            "Anxiety that doesn't improve with self-help strategies"
        ],
        relatedConditions: ["mood", "trauma", "ocd"],
        faqs: [
            {
                question: "What's the difference between normal worry and an anxiety disorder?",
                answer: "Normal worry is temporary and doesn't significantly impact daily life. An anxiety disorder involves persistent, excessive worry that interferes with work, relationships, and daily activities for six months or more."
            },
            {
                question: "Can anxiety disorders be cured?",
                answer: "While there's no 'cure,' anxiety disorders are highly treatable. With proper treatment, most people experience significant improvement and can manage their symptoms effectively long-term."
            },
            {
                question: "How long does treatment typically take?",
                answer: "Treatment duration varies by individual and severity. Many people see improvement within 8-12 weeks of starting therapy, though some may benefit from longer-term treatment."
            }
        ]
    },
    {
        slug: "mood-disorders",
        title: "Mood Disorders",
        shortDescription: "Persistent low mood or mood swings that impair function; includes major depression, bipolar disorders, and dysthymia.",
        fullDescription: "Mood disorders, also called affective disorders, are a category of mental health conditions that primarily affect your emotional state. They can cause persistent feelings of sadness or periods of feeling overly happy, or fluctuations from extreme happiness to extreme sadness. The most common mood disorders are depression, bipolar disorder, and cyclothymic disorder.",
        icon: "CloudRain",
        symptoms: [
            "Persistent sad, anxious, or empty mood",
            "Feelings of hopelessness or pessimism",
            "Irritability or frustration",
            "Loss of interest in hobbies and activities",
            "Decreased energy or fatigue",
            "Difficulty concentrating or making decisions",
            "Sleep disturbances (insomnia or oversleeping)",
            "Appetite or weight changes",
            "Thoughts of death or suicide",
            "Elevated mood or euphoria (in bipolar)",
            "Racing thoughts and rapid speech (in bipolar)"
        ],
        causes: [
            "Brain chemistry and neurotransmitter imbalances",
            "Genetic predisposition",
            "Hormonal changes",
            "Traumatic life events or chronic stress",
            "Medical conditions",
            "Substance abuse",
            "Seasonal changes (SAD)"
        ],
        treatments: [
            "Antidepressant medications (SSRIs, SNRIs, tricyclics)",
            "Mood stabilizers (for bipolar disorder)",
            "Psychotherapy (CBT, interpersonal therapy)",
            "Electroconvulsive therapy (ECT) for severe cases",
            "Spravato (esketamine) for treatment-resistant depression",
            "Light therapy for seasonal depression",
            "Lifestyle changes and self-care"
        ],
        whenToSeekHelp: [
            "Symptoms persist for more than two weeks",
            "Difficulty functioning at work, school, or home",
            "Relationship problems due to mood changes",
            "Turning to alcohol or drugs to cope",
            "Thoughts of suicide or self-harm"
        ],
        relatedConditions: ["anxiety", "trauma", "substance"],
        faqs: [
            {
                question: "What's the difference between sadness and depression?",
                answer: "Sadness is a normal emotion that passes with time. Depression is persistent (lasting weeks or longer), affects multiple areas of life, and often includes physical symptoms like sleep and appetite changes."
            },
            {
                question: "Can depression come back after treatment?",
                answer: "Yes, depression can recur. However, ongoing treatment, therapy skills, and lifestyle management can significantly reduce the risk of relapse and help manage symptoms if they return."
            },
            {
                question: "Do I need medication for depression?",
                answer: "Not everyone needs medication. Mild to moderate depression often responds well to therapy alone. Your provider will work with you to determine the best treatment approach for your situation."
            }
        ]
    },
    {
        slug: "neurodevelopmental-disorders",
        title: "ADHD & Neurodevelopmental Disorders",
        shortDescription: "Lifelong patterns affecting attention, learning, and social communication; includes ADHD and autism spectrum disorder.",
        fullDescription: "Attention-Deficit/Hyperactivity Disorder (ADHD) and other neurodevelopmental disorders are conditions that affect brain development and function. ADHD is characterized by persistent patterns of inattention, hyperactivity, and impulsivity that interfere with functioning and development. These conditions often begin in childhood but can continue into adulthood and significantly impact daily life.",
        icon: "Zap",
        symptoms: [
            "Difficulty sustaining attention in tasks",
            "Easily distracted by unrelated thoughts or stimuli",
            "Forgetfulness in daily activities",
            "Difficulty organizing tasks and activities",
            "Avoiding tasks requiring sustained mental effort",
            "Frequently losing necessary items",
            "Fidgeting or squirming",
            "Difficulty remaining seated when expected",
            "Talking excessively",
            "Interrupting or intruding on others",
            "Difficulty waiting turn"
        ],
        causes: [
            "Genetics (ADHD runs in families)",
            "Brain structure and function differences",
            "Prenatal factors (maternal smoking, alcohol use)",
            "Premature birth or low birth weight",
            "Environmental toxin exposure",
            "Brain injuries"
        ],
        treatments: [
            "Stimulant medications (methylphenidate, amphetamines)",
            "Non-stimulant medications (atomoxetine, guanfacine)",
            "Behavioral therapy and skills training",
            "Cognitive behavioral therapy (CBT)",
            "Executive function coaching",
            "Educational accommodations",
            "Parent training and family therapy",
            "Pharmacogenomic testing for medication optimization"
        ],
        whenToSeekHelp: [
            "Symptoms significantly impact work or school performance",
            "Relationship difficulties due to ADHD behaviors",
            "Chronic disorganization affecting daily life",
            "Low self-esteem related to ADHD challenges",
            "Co-occurring anxiety or depression"
        ],
        relatedConditions: ["anxiety", "mood", "autism"],
        faqs: [
            {
                question: "Can adults have ADHD even if they weren't diagnosed as children?",
                answer: "Yes. Many adults with ADHD were never diagnosed as children, especially women and those with primarily inattentive symptoms. ADHD is a lifelong condition that can be diagnosed at any age."
            },
            {
                question: "Will I need medication forever?",
                answer: "Treatment needs vary by individual. Some people benefit from long-term medication, while others may use it situationally or eventually manage symptoms with behavioral strategies alone."
            },
            {
                question: "Is ADHD overdiagnosed?",
                answer: "When properly evaluated, ADHD diagnoses are generally accurate. A thorough assessment by a qualified provider ensures accurate diagnosis and appropriate treatment."
            }
        ]
    },
    {
        slug: "personality-disorders",
        title: "Personality Disorders",
        shortDescription: "Rigid patterns in thinking and relating that cause distress and instability; includes borderline, obsessive-compulsive personality, and antisocial.",
        fullDescription: "Personality disorders are long-term patterns of behavior and inner experiences that differ significantly from what is expected. These patterns develop in adolescence or early adulthood and cause distress or problems in functioning. The most commonly treated include borderline personality disorder (BPD), characterized by unstable relationships and emotions, and others affecting how people perceive themselves and relate to others.",
        icon: "User",
        symptoms: [
            "Unstable or fragile sense of self",
            "Intense, unstable relationships",
            "Fear of abandonment (real or imagined)",
            "Impulsive, risky behaviors",
            "Chronic feelings of emptiness",
            "Intense anger or difficulty controlling anger",
            "Paranoid thoughts under stress",
            "Self-harm or suicidal behaviors",
            "Rapid mood swings",
            "Difficulty trusting others"
        ],
        causes: [
            "Childhood trauma or abuse",
            "Neglect or unstable early attachments",
            "Genetic predisposition",
            "Brain structure and function differences",
            "Environmental factors during development"
        ],
        treatments: [
            "Dialectical Behavior Therapy (DBT)",
            "Mentalization-Based Therapy (MBT)",
            "Schema-Focused Therapy",
            "Transference-Focused Psychotherapy",
            "Medications for specific symptoms",
            "Group therapy skills training",
            "Family therapy and education"
        ],
        whenToSeekHelp: [
            "Relationship patterns causing significant problems",
            "Chronic feelings of emptiness or identity confusion",
            "Self-destructive behaviors or self-harm",
            "Intense emotional reactions affecting daily life",
            "Difficulty maintaining employment or housing"
        ],
        relatedConditions: ["mood", "trauma", "substance"],
        faqs: [
            {
                question: "Can personality disorders be treated?",
                answer: "Yes. While personality disorders were once considered untreatable, specialized therapies like DBT have shown excellent results. Many people experience significant improvement with consistent treatment."
            },
            {
                question: "How long does treatment take?",
                answer: "Treatment typically takes longer than for other conditions-often 1-3 years of consistent therapy. However, many people see meaningful improvements within the first several months."
            },
            {
                question: "Is medication helpful for personality disorders?",
                answer: "Medication doesn't treat the personality disorder itself but can help manage specific symptoms like depression, anxiety, or mood instability that often co-occur."
            }
        ]
    },
    {
        slug: "psychotic-disorders",
        title: "Psychotic Disorders",
        shortDescription: "Breaks from reality with hallucinations or delusions; includes schizophrenia, schizoaffective disorder, and brief psychosis.",
        fullDescription: "Psychotic disorders are severe mental disorders that cause abnormal thinking and perceptions. People with these disorders lose touch with reality, experiencing hallucinations (seeing or hearing things that aren't there) and/or delusions (firmly held false beliefs). Schizophrenia is the most well-known psychotic disorder, but the category also includes schizoaffective disorder, brief psychotic disorder, and others.",
        icon: "Eye",
        symptoms: [
            "Hallucinations (hearing, seeing, or feeling things others don't)",
            "Delusions (false beliefs not based in reality)",
            "Disorganized thinking and speech",
            "Disorganized or abnormal motor behavior",
            "Negative symptoms (reduced emotional expression, lack of motivation)",
            "Social withdrawal",
            "Difficulty with concentration and memory",
            "Decline in self-care",
            "Unusual or inappropriate emotions",
            "Suspiciousness or paranoia"
        ],
        causes: [
            "Genetics and family history",
            "Brain chemistry imbalances (dopamine, glutamate)",
            "Brain structure differences",
            "Prenatal exposure to viruses or malnutrition",
            "Substance use (especially cannabis in adolescence)",
            "Severe stress or trauma"
        ],
        treatments: [
            "Antipsychotic medications (first and second generation)",
            "Long-acting injectable medications for adherence",
            "Cognitive behavioral therapy for psychosis (CBTp)",
            "Social skills training",
            "Supported employment and education",
            "Family therapy and psychoeducation",
            "Coordinated specialty care programs",
            "Hospitalization when needed for safety"
        ],
        whenToSeekHelp: [
            "Hearing voices or seeing things others don't",
            "Strongly held beliefs that others find strange",
            "Confused or disorganized thinking",
            "Significant decline in functioning",
            "Social withdrawal or isolation",
            "Any thoughts of harming self or others"
        ],
        relatedConditions: ["mood", "substance"],
        faqs: [
            {
                question: "Can people with schizophrenia lead normal lives?",
                answer: "Yes. With proper treatment and support, many people with schizophrenia work, have relationships, and live independently. Early intervention significantly improves outcomes."
            },
            {
                question: "Is schizophrenia the same as multiple personality disorder?",
                answer: "No. This is a common misconception. Schizophrenia involves disconnection from reality, not multiple personalities. Multiple personality disorder (now called dissociative identity disorder) is a separate condition."
            },
            {
                question: "Will symptoms ever go away completely?",
                answer: "Symptoms can be well-managed with treatment. Some people experience full remission, while others have ongoing symptoms that are controlled with medication and therapy."
            }
        ]
    },
    {
        slug: "ocd-related-disorders",
        title: "OCD & Related Disorders",
        shortDescription: "Intrusive thoughts or repetitive behaviors and related body-image or saving problems; includes OCD, BDD, and hoarding.",
        fullDescription: "Obsessive-Compulsive Disorder (OCD) and related disorders are characterized by obsessive thoughts and/or compulsive behaviors that significantly interfere with daily life. OCD involves unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety. Related disorders include body dysmorphic disorder, hoarding disorder, trichotillomania, and excoriation disorder.",
        icon: "Repeat",
        symptoms: [
            "Unwanted, intrusive thoughts or images",
            "Fear of contamination or germs",
            "Need for symmetry or exactness",
            "Aggressive or horrific thoughts",
            "Unwanted forbidden or taboo thoughts",
            "Excessive cleaning or handwashing",
            "Ordering and arranging compulsions",
            "Repeatedly checking (locks, appliances)",
            "Counting or repeating words silently",
            "Difficulty discarding possessions (hoarding)",
            "Preoccupation with perceived flaws in appearance (BDD)"
        ],
        causes: [
            "Genetics and family history",
            "Brain structure and function differences",
            "Learned behaviors",
            "Childhood trauma or abuse",
            "Infections (PANDAS in children)",
            "Stressful life events"
        ],
        treatments: [
            "Exposure and Response Prevention (ERP)",
            "Cognitive Behavioral Therapy (CBT)",
            "SSRI medications (often at higher doses)",
            "Combination therapy and medication",
            "Deep brain stimulation (severe cases)",
            "Intensive outpatient programs",
            "Support groups"
        ],
        whenToSeekHelp: [
            "Obsessions or compulsions take more than an hour daily",
            "Symptoms cause significant distress",
            "Rituals interfere with work, relationships, or daily activities",
            "Avoiding situations due to OCD fears",
            "Quality of life significantly impacted"
        ],
        relatedConditions: ["anxiety", "mood", "personality"],
        faqs: [
            {
                question: "Is OCD just about being clean and organized?",
                answer: "No. While contamination fears are common, OCD takes many forms including intrusive thoughts about harm, religious obsessions, relationship doubts, and more. It's much more distressing than being tidy."
            },
            {
                question: "Why can't people with OCD just stop their rituals?",
                answer: "OCD creates intense anxiety that compulsions temporarily relieve. Without treatment, stopping feels impossible. ERP therapy helps people learn to tolerate anxiety without performing rituals."
            },
            {
                question: "Can OCD be cured?",
                answer: "While there's no cure, OCD is highly treatable. Most people experience significant improvement with ERP therapy and/or medication, often achieving minimal symptoms."
            }
        ]
    },
    {
        slug: "substance-related-disorders",
        title: "Substance Use Disorders",
        shortDescription: "Problem use of alcohol, drugs, or gambling that harms health and life roles.",
        fullDescription: "Substance use disorders occur when the recurrent use of alcohol and/or drugs causes clinically significant impairment, including health problems, disability, and failure to meet responsibilities at work, school, or home. These conditions range from mild to severe and are characterized by impaired control, social impairment, risky use, and physical dependence (tolerance and withdrawal).",
        icon: "Wine",
        symptoms: [
            "Taking larger amounts or for longer than intended",
            "Wanting to cut down but unable to",
            "Spending significant time obtaining, using, or recovering",
            "Cravings or strong urges to use",
            "Failing to fulfill major obligations",
            "Continued use despite relationship problems",
            "Giving up important activities",
            "Using in physically hazardous situations",
            "Continued use despite knowing it causes problems",
            "Tolerance (needing more to achieve effects)",
            "Withdrawal symptoms when stopping"
        ],
        causes: [
            "Genetics and family history",
            "Mental health disorders (self-medication)",
            "Peer pressure and social environment",
            "Early use during adolescence",
            "Trauma and adverse childhood experiences",
            "Chronic stress",
            "Easy access to substances"
        ],
        treatments: [
            "Medically supervised detoxification",
            "Medication-assisted treatment (MAT)",
            "Individual and group therapy",
            "Cognitive Behavioral Therapy (CBT)",
            "Motivational Enhancement Therapy",
            "12-step and mutual support programs",
            "Contingency management",
            "Family therapy",
            "Intensive outpatient programs",
            "Residential treatment when needed"
        ],
        whenToSeekHelp: [
            "Unable to control use despite wanting to",
            "Use is affecting work, relationships, or health",
            "Experiencing withdrawal symptoms",
            "Legal or financial problems related to use",
            "Loved ones expressing concern",
            "Using to cope with emotions or stress"
        ],
        relatedConditions: ["mood", "anxiety", "trauma", "personality"],
        faqs: [
            {
                question: "Is addiction a choice or a disease?",
                answer: "Addiction is recognized as a chronic brain disease. While the initial decision to use substances is voluntary, repeated use changes brain structure and function, making quitting extremely difficult without treatment."
            },
            {
                question: "What is medication-assisted treatment (MAT)?",
                answer: "MAT uses FDA-approved medications (like buprenorphine or naltrexone) combined with counseling to treat substance use disorders. It's highly effective and considered the gold standard for opioid use disorder."
            },
            {
                question: "Can someone recover from addiction?",
                answer: "Absolutely. Millions of people are in recovery from addiction. With proper treatment and support, people can and do recover to lead fulfilling, productive lives."
            }
        ]
    },
    {
        slug: "trauma-stress-disorders",
        title: "Trauma & Stress-Related Disorders",
        shortDescription: "Distress after trauma or major stressors; includes acute stress, adjustment disorders, and PTSD.",
        fullDescription: "Trauma and stress-related disorders develop following exposure to a traumatic or stressful event. Post-Traumatic Stress Disorder (PTSD) is the most well-known, occurring after experiencing or witnessing a terrifying event. These disorders also include acute stress disorder, adjustment disorders, and complex PTSD from prolonged trauma. Symptoms can significantly impact daily functioning and quality of life.",
        icon: "Brain",
        symptoms: [
            "Intrusive memories or flashbacks",
            "Nightmares about the traumatic event",
            "Severe emotional distress when reminded",
            "Physical reactions to reminders",
            "Avoiding thoughts or feelings about the trauma",
            "Avoiding places, activities, or people that trigger memories",
            "Negative changes in thinking and mood",
            "Memory problems about the event",
            "Feeling detached from others",
            "Being easily startled",
            "Difficulty sleeping and concentrating",
            "Irritability or angry outbursts"
        ],
        causes: [
            "Combat or military exposure",
            "Sexual assault or abuse",
            "Physical assault or violence",
            "Serious accidents",
            "Natural disasters",
            "Childhood abuse or neglect",
            "Domestic violence",
            "Sudden death of a loved one",
            "Medical trauma"
        ],
        treatments: [
            "Trauma-focused CBT",
            "EMDR (Eye Movement Desensitization and Reprocessing)",
            "Prolonged Exposure Therapy",
            "Cognitive Processing Therapy",
            "SSRI and SNRI medications",
            "Prazosin for nightmares",
            "Group therapy with other survivors",
            "Mindfulness-based treatments"
        ],
        whenToSeekHelp: [
            "Symptoms persist more than a month after trauma",
            "Symptoms interfere with work or relationships",
            "Using alcohol or drugs to cope",
            "Feeling emotionally numb or disconnected",
            "Thoughts of suicide or self-harm",
            "Difficulty functioning in daily life"
        ],
        relatedConditions: ["anxiety", "mood", "substance", "personality"],
        faqs: [
            {
                question: "How soon after trauma can PTSD develop?",
                answer: "PTSD can develop immediately or may not appear until months or even years later. Acute stress disorder occurs within the first month; if symptoms persist beyond a month, it may be diagnosed as PTSD."
            },
            {
                question: "Does everyone who experiences trauma develop PTSD?",
                answer: "No. Most people who experience trauma do not develop PTSD. Risk factors include trauma severity, lack of support, history of mental health issues, and additional life stressors."
            },
            {
                question: "Can PTSD be treated effectively?",
                answer: "Yes. Trauma-focused therapies like EMDR and CPT are highly effective. Most people experience significant symptom reduction with proper treatment."
            }
        ]
    }
]

export function getConditionBySlug(slug: string): Condition | undefined {
    return conditions.find((c) => c.slug === slug)
}

export function getRelatedConditions(slugs: string[]): Condition[] {
    return conditions.filter((c) => slugs.includes(c.slug))
}
