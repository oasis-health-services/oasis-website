export interface Service {
    slug: string
    title: string
    shortDescription: string
    fullDescription: string
    icon: string
    benefits: string[]
    whatToExpect: string[]
    whoIsItFor: string[]
    duration?: string
    frequency?: string
    insurance?: string
    faqs: { question: string; answer: string }[]
    relatedServices: string[]
    serviceDetails?: {
        title: string,
        description?: string
        icon?: string
        sections?: {
            title: string
            description?: string
            icon?: string
            iconStyle?: string
            style?: string
        }[]
    }
    highlight?: {
        title: string
        description: string
        icon?: string
        style?: string
        iconStyle?: string
    }
}

export const services: Service[] = [
    {
        slug: "comprehensive-psychiatric-assessment",
        title: "Comprehensive Psychiatric Assessment",
        shortDescription: "A thorough first appointment to understand your symptoms, history, and goals, leading to a diagnosis and initial care plan.",
        fullDescription: "A comprehensive psychiatric assessment is the foundation of effective mental health treatment. During this initial appointment, our providers conduct a thorough assessment of your mental health history, current symptoms, medical conditions, medications, and life circumstances. This allows us to develop an accurate diagnosis and create a personalized treatment plan tailored to your unique needs and goals.",
        icon: "ClipboardCheck",
        benefits: [
            "Accurate diagnosis from experienced providers",
            "Personalized treatment recommendations",
            "Understanding of how symptoms affect your life",
            "Clear path forward with actionable next steps",
            "Opportunity to ask questions and learn about your condition",
            "Coordination with other healthcare providers as needed"
        ],
        whatToExpect: [
            "Review of your mental health and medical history",
            "Discussion of current symptoms and concerns",
            "Assessment of mood, thinking, and behavior",
            "Review of medications and supplements",
            "Discussion of family mental health history",
            "Diagnostic impression and treatment recommendations",
            "Time for your questions"
        ],
        whoIsItFor: [
            "Anyone experiencing mental health symptoms for the first time",
            "Those seeking a second opinion on diagnosis",
            "Individuals whose current treatment isn't working",
            "People transitioning from another provider",
            "Anyone wanting to understand their mental health better"
        ],
        duration: "60-90 minutes for initial evaluation",
        frequency: "One-time evaluation, followed by treatment plan",
        insurance: "Covered by most insurance plans",
        faqs: [
            {
                question: "What should I bring to my evaluation?",
                answer: "Please bring your ID, insurance card, list of current medications, and any relevant medical records. It's helpful to write down your symptoms and questions beforehand."
            },
            {
                question: "Will I receive a diagnosis at the first appointment?",
                answer: "In most cases, yes. Your provider will share their diagnostic impression and discuss treatment options. Some complex cases may require additional testing or follow-up."
            },
            {
                question: "Can I bring a family member?",
                answer: "Yes, you're welcome to bring a support person. They may be asked to wait during certain portions of the evaluation for confidentiality."
            }
        ],
        relatedServices: ["medication-management", "therapy", "pharmacogenomic-testing"]
    },
    {
        slug: "pharmacogenomic-testing",
        title: "Pharmacogenomic Testing",
        shortDescription: "Utilizing validated genetic insights to inform safer and more effective medication choices for your treatment.",
        fullDescription: "Pharmacogenomic testing analyzes your genetic makeup to understand how your body metabolizes psychiatric medications. This information helps our providers select medications more likely to be effective for you while minimizing side effects. By understanding your unique genetic profile, we can make more informed prescribing decisions from the start, potentially avoiding the trial-and-error process that many patients experience.",
        icon: "Dna",
        benefits: [
            "Personalized medication selection based on your genetics",
            "Reduced risk of adverse side effects",
            "Faster path to effective treatment",
            "Avoid medications unlikely to work for you",
            "Optimal dosing recommendations",
            "Long-term resource for future prescribing decisions"
        ],
        whatToExpect: [
            "Simple cheek swab collected in office or at home",
            "Results typically available within 5-7 business days",
            "Detailed consultation to review your results",
            "Explanation of how genes affect medication response",
            "Updated treatment recommendations based on results",
            "Report becomes part of your permanent medical record"
        ],
        whoIsItFor: [
            "Patients starting psychiatric medication for the first time",
            "Those who haven't responded well to previous medications",
            "People who've experienced significant side effects",
            "Patients on multiple medications",
            "Anyone wanting a more personalized approach"
        ],
        duration: "5 minutes for sample collection",
        frequency: "One-time test (results are lifelong)",
        insurance: "Covered by many insurance plans; financial assistance available",
        faqs: [
            {
                question: "Is genetic testing accurate for medication selection?",
                answer: "Yes. The genes tested have strong scientific evidence supporting their role in medication metabolism. While genetics is one factor among many, it provides valuable guidance for treatment decisions."
            },
            {
                question: "Will my genetic information be kept private?",
                answer: "Absolutely. Your genetic information is protected under HIPAA and GINA (Genetic Information Nondiscrimination Act). Results are only shared with healthcare providers you authorize."
            },
            {
                question: "Do I need to fast or prepare for the test?",
                answer: "No special preparation is needed. Just avoid eating, drinking, or smoking for 30 minutes before the cheek swab."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "medication-management", "adhd-testing-and-management"]
    },
    {
        slug: "adhd-testing-and-management",
        title: "ADHD Testing and Management",
        shortDescription: "Specialized evaluation and treatment for attention, impulsivity, and executive function concerns in adults and adolescents.",
        fullDescription: "Our ADHD treatment program provides comprehensive care for adolescents and adults struggling with attention, focus, impulsivity, and executive function challenges. We conduct thorough evaluations using validated screening tools and clinical interviews to ensure accurate diagnosis. Treatment may include medication management, behavioral strategies, and skills coaching tailored to your specific needs and goals.",
        icon: "Zap",
        benefits: [
            "Thorough evaluation by ADHD specialists",
            "Accurate diagnosis distinguishing ADHD from other conditions",
            "Personalized medication management when appropriate",
            "Practical strategies for organization and time management",
            "Support for academic or workplace accommodations",
            "Improved focus, productivity, and quality of life"
        ],
        whatToExpect: [
            "Comprehensive clinical interview and history",
            "Validated ADHD screening assessments",
            "Review of school or work records if available",
            "Ruling out other conditions that mimic ADHD",
            "Discussion of treatment options",
            "Trial of medication if appropriate with careful monitoring",
            "Ongoing adjustments based on response"
        ],
        whoIsItFor: [
            "Adults who suspect they may have undiagnosed ADHD",
            "Teens struggling with focus and academic performance",
            "Those previously diagnosed seeking treatment optimization",
            "People whose ADHD medication isn't working well",
            "Individuals wanting non-medication strategies"
        ],
        serviceDetails: {
            title: "Treatment Options",
            icon: "Focus",
            sections: [
                {
                    title: "Medication",
                    icon: "Brain",
                    description: "Stimulant and non-stimulant options, with a clear dosing and monitoring plan.",
                    iconStyle: "text-[#EB615C]"
                },
                {
                    title: "Therapies",
                    icon: "MessageCircle",
                    description: "CBT for ADHD, skills coaching, and organizational strategies.",
                    iconStyle: "text-[#EB615C]"
                },
                {
                    title: "Care Coordination",
                    icon: "ListChecks",
                    description: "Collaboration with primary care, therapists, and schools.",
                    iconStyle: "text-[#EB615C]"
                }
            ]
        },
        highlight: {
            title: "Medication Safety & Controlled Substance Policy",
            description: "Patient safety is our top priority. Our policy includes PDMP checks, informed consent, baseline vitals with RPM, possible urine drug screens, and secure e-prescribing. We require regular follow-ups and do not replace lost prescriptions.",
            icon: "Shield",
            style: "bg-blue-50 border-blue-500 text-blue-800",
            iconStyle: "text-blue-600 "
        },
        duration: "Initial evaluation: 60-90 minutes; Follow-ups: 20-30 minutes",
        frequency: "Monthly initially, then quarterly when stable",
        insurance: "Covered by most insurance plans",
        faqs: [
            {
                question: "Can adults be diagnosed with ADHD for the first time?",
                answer: "Absolutely. Many adults, especially women and those with primarily inattentive symptoms, weren't diagnosed as children. ADHD is a lifelong condition that can be diagnosed at any age."
            },
            {
                question: "Will I need to take stimulant medications?",
                answer: "Not necessarily. While stimulants are often effective, we also offer non-stimulant options and behavioral strategies. Treatment is personalized to your needs and preferences."
            },
            {
                question: "How quickly will I notice medication effects?",
                answer: "Stimulant medications typically work within hours to days. Finding the optimal medication and dose may take several weeks of adjustment."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "pharmacogenomic-testing", "medication-management"]
    },
    {
        slug: "autism-assessment-and-management",
        title: "Autism Spectrum Evaluation",
        shortDescription: "Confirm or rule out ASD, map strengths and support needs, and create a practical plan for home, school, and work.",
        fullDescription: "Our autism spectrum evaluations provide thorough assessment for adolescents and adults who may be on the spectrum. Many individuals reach adulthood without a formal diagnosis, especially those with fewer support needs or women and girls who often present differently. Our evaluations identify strengths and challenges, provide diagnostic clarity, and create actionable recommendations for support and accommodation.",
        icon: "Puzzle",
        benefits: [
            "Clarity about whether you're on the autism spectrum",
            "Understanding of your unique strengths and challenges",
            "Validation of lifelong experiences and differences",
            "Access to appropriate accommodations and services",
            "Strategies tailored to your specific profile",
            "Connection to autism community resources"
        ],
        whatToExpect: [
            "Detailed developmental and personal history",
            "Standardized autism assessment measures",
            "Evaluation of social communication patterns",
            "Assessment of restricted interests and repetitive behaviors",
            "Sensory profile evaluation",
            "Written report with diagnosis and recommendations",
            "Feedback session to discuss results"
        ],
        whoIsItFor: [
            "Adults who suspect they may be autistic",
            "Teens with social or sensory differences",
            "Individuals seeking diagnostic clarity",
            "Those needing documentation for accommodations",
            "Parents seeking evaluation for their adolescent"
        ],
        duration: "2-4 hours across 1-2 sessions",
        frequency: "One-time evaluation",
        insurance: "Coverage varies; we provide documentation for out-of-network reimbursement",
        serviceDetails: {
            title: "Deliverables",
            icon: "BadgeCheck",
            sections: [
                {
                    title: "Written Report",
                    icon: "FileText",
                    description: "A detailed report with diagnostic rationale and a profile of strengths and needs.",
                    iconStyle: "text-white",
                    style: "bg-gradient-to-br from-blue-500 to-cyan-500"
                },
                {
                    title: "Concrete Recommendations",
                    icon: "Users",
                    description: "Actionable steps for home, school, and the workplace.",
                    iconStyle: "text-white",
                    style: "bg-gradient-to-br from-blue-500 to-cyan-500"
                },
                {
                    title: "Accomodation Letters",
                    icon: "LetterText",
                    description: "Official letters to support accommodations when clinically indicated.",
                    iconStyle: "text-white",
                    style: "bg-gradient-to-br from-blue-500 to-cyan-500"
                }
            ]
        },
        faqs: [
            {
                question: "Why would an adult seek an autism evaluation?",
                answer: "Many adults seek diagnosis for self-understanding, access to support services, workplace accommodations, or to better understand lifelong differences in how they experience the world."
            },
            {
                question: "What if I'm 'high-functioning' - can I still be autistic?",
                answer: "Yes. Autism is a spectrum, and many autistic adults have developed coping strategies that mask their traits. Lower support needs doesn't mean you're not autistic."
            },
            {
                question: "How is autism different in women?",
                answer: "Women often present differently, with better social camouflaging, different special interests, and fewer obvious behaviors. This leads to frequent missed or late diagnosis."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "therapy", "adhd-testing-and-management"]
    },
    {
        slug: "therapy-and-counseling",
        title: "Therapy and Counseling",
        shortDescription: "Evidence-based talk therapies designed to reduce symptoms, build skills, and improve daily functioning.",
        fullDescription: "Individual therapy provides a safe, confidential space to explore your thoughts, feelings, and behaviors with a trained mental health professional. Our therapists use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and trauma-focused therapies to help you develop coping skills, process difficult experiences, and make meaningful changes in your life.",
        icon: "MessageCircle",
        benefits: [
            "Safe space to process difficult emotions",
            "Learn practical coping skills",
            "Understand patterns in thinking and behavior",
            "Improve relationships and communication",
            "Work through trauma and past experiences",
            "Develop greater self-awareness and insight",
            "Build resilience for future challenges"
        ],
        whatToExpect: [
            "Initial assessment of your concerns and goals",
            "Collaborative development of treatment plan",
            "Regular sessions (typically weekly)",
            "Evidence-based techniques tailored to your needs",
            "Homework or practice between sessions",
            "Regular review of progress toward goals",
            "Gradual transition to less frequent sessions"
        ],
        whoIsItFor: [
            "Anyone struggling with mental health symptoms",
            "Those working through life transitions or stress",
            "Individuals processing trauma or grief",
            "People wanting to improve relationships",
            "Anyone seeking personal growth and insight"
        ],
        duration: "45-60 minute sessions",
        frequency: "Weekly initially, then as needed",
        insurance: "Covered by most insurance plans",
        serviceDetails: {
            title: "Therapeutic Modalities",
            icon: "Waves",
            sections: [
                {
                    title: "Cognitive Behavioral Therapy (CBT)",
                    icon: "Brain",
                    description: "Structured, skills-based therapy linking thoughts, emotions, and behaviors. Targets depression, anxiety, panic, and more."
                },
                {
                    title: "Motivational Interviewing",
                    icon: "UserCheck",
                    description: "Client-centered method to resolve ambivalence and strengthen motivation for change. Ideal for substance use and medication adherence."
                },
                {
                    title: "Solution-Focused Therapy",
                    icon: "Star",
                    description: "Future-oriented therapy that amplifies strengths and finds exceptions to problems. Great for acute stress and relationship challenges."
                },
                {
                    title: "Trauma-Focused Care",
                    icon: "Heart",
                    description: "Utilizes PTSD frameworks, grounding techniques, and paced exposure to process trauma safely."
                },
                {
                    title: "Acceptance & Commitment Therapy (ACT)",
                    icon: "Repeat",
                    description: "Focuses on values-based action, cognitive defusion, and mindfulness to increase psychological flexibility."
                },
                {
                    title: "Parent Coaching/Family Sessions",
                    icon: "Users",
                    description: "Provides tools for behavior plans, communication, and school collaboration for child and teen care."
                }
            ]
        },
        highlight: {
            title: "Psychoeducation: The Foundation of Care",
            description: "A key part of all our therapy is providing clear, practical information about your condition, triggers, and treatment options. This empowers you to make informed decisions and actively participate in your healing journey.",
            style: "bg-green-50 border-green-500 text-green-800"
        },

        faqs: [
            {
                question: "How long will I need to be in therapy?",
                answer: "Treatment length varies based on your goals and concerns. Some issues resolve in 8-12 sessions, while others benefit from longer-term work. You're always in control of your treatment."
            },
            {
                question: "What's the difference between therapy and medication?",
                answer: "Therapy helps you develop skills and process experiences, while medication addresses brain chemistry. Many people benefit from both together, but either can be used alone."
            },
            {
                question: "How do I know if therapy is working?",
                answer: "You should notice gradual improvements in symptoms, coping ability, and quality of life. Your therapist will regularly assess progress and adjust the approach as needed."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "medication-management", "telehealth"]
    },
    {
        slug: "medication-management",
        title: "Medication Management",
        shortDescription: "Personalized psychiatric medication plans for depression, anxiety, ADHD, and mood disorders with regular follow-up.",
        fullDescription: "Medication management involves the careful prescribing, monitoring, and adjustment of psychiatric medications to treat mental health conditions. Our providers work closely with you to find the right medications at the optimal doses while minimizing side effects. We believe in shared decision-making, ensuring you understand your medications and feel comfortable with your treatment plan.",
        icon: "Pill",
        benefits: [
            "Expert psychiatric prescribing",
            "Careful monitoring for effectiveness and side effects",
            "Adjustments based on your response",
            "Education about your medications",
            "Coordination with therapists and other providers",
            "Access to newer treatment options",
            "Support for medication questions between appointments"
        ],
        whatToExpect: [
            "Thorough review of symptoms and medication history",
            "Discussion of medication options, benefits, and risks",
            "Shared decision-making about treatment",
            "Clear instructions for taking medications",
            "Regular follow-up appointments for monitoring",
            "Easy communication for questions or concerns",
            "Gradual dose adjustments as needed"
        ],
        whoIsItFor: [
            "Anyone whose symptoms would benefit from medication",
            "Those whose current medications aren't working well",
            "People experiencing medication side effects",
            "Individuals wanting to reduce or discontinue medications safely",
            "Patients needing specialized psychiatric prescribing"
        ],
        duration: "Initial: 45-60 minutes; Follow-ups: 15-30 minutes",
        frequency: "Monthly initially, then every 2-3 months when stable",
        insurance: "Covered by most insurance plans",
        serviceDetails: {
            title: "When We Recommend for Specialized Care",
            description: "For certain conditions, we may recommend one of our other specialized services.",
            icon: "Stethoscope",
            sections: [
                {
                    title: "ADHD Treatment",
                    icon: "Brain"
                },
                {
                    title: "Spravato® Treatment",
                    icon: "Brain"
                },
                {
                    title: "Remote Patient Monitoring",
                    icon: "Activity"
                }
            ]
        },
        highlight: {
            title: "Controlled Medication Policy",
            description: "Controlled substances are prescribed only when clinically indicated after a full assessment. We strictly follow all state and federal rules and require ongoing monitoring for all patients receiving these medications.",
            icon: "Shield",
            style: "bg-blue-50 border-blue-500 text-blue-800",
            iconStyle: "text-blue-600 "
        },
        faqs: [
            {
                question: "Will I need to take medication forever?",
                answer: "Not necessarily. Some conditions benefit from short-term medication, while others may require long-term treatment. Your provider will discuss expectations for your specific situation."
            },
            {
                question: "What about side effects?",
                answer: "All medications can have side effects. We start low and go slow, monitor carefully, and adjust as needed. Many side effects improve over time or can be managed."
            },
            {
                question: "Can I take psychiatric medication while pregnant?",
                answer: "This requires careful consideration of risks and benefits. Some medications are safer than others during pregnancy. We work with you and your OB to make informed decisions."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "pharmacogenomic-testing", "telehealth", "spravato", "adhd-testing-and-management", "remote-patient-monitoring"]
    },
    {
        slug: "substance-use-disorder-treatment",
        title: "Substance Use Disorder Treatment",
        shortDescription: "Integrated, harm-reduction oriented care with therapy, medication, and recovery supports for addiction.",
        fullDescription: "Our addiction treatment program provides compassionate, evidence-based care for substance use disorders. We take a harm-reduction approach, meeting you where you are in your recovery journey. Treatment may include medication-assisted treatment (MAT), individual therapy, and connection to support resources. We treat addiction as the medical condition it is, without judgment or stigma.",
        icon: "Heart",
        benefits: [
            "Non-judgmental, compassionate care",
            "Medication-assisted treatment (MAT) when appropriate",
            "Therapy addressing underlying issues",
            "Reduced cravings and withdrawal symptoms",
            "Coordination with recovery support services",
            "Treatment of co-occurring mental health conditions",
            "Support for family members"
        ],
        whatToExpect: [
            "Thorough assessment of substance use and mental health",
            "Discussion of your recovery goals",
            "Education about addiction and treatment options",
            "Initiation of MAT if appropriate (Suboxone, naltrexone)",
            "Regular monitoring and support",
            "Connection to therapy and support groups",
            "Ongoing adjustment of treatment plan"
        ],
        whoIsItFor: [
            "Individuals struggling with alcohol or drug use",
            "Those in recovery wanting psychiatric support",
            "People who've relapsed and want to restart treatment",
            "Individuals with co-occurring mental health conditions",
            "Anyone wanting to reduce harm from substance use"
        ],
        duration: "Initial: 60-90 minutes; Follow-ups: 20-30 minutes",
        frequency: "Weekly initially, then as stability allows",
        insurance: "Covered by most insurance plans including Medicaid",
        serviceDetails: {
            title: "Treatment for Specific Disorders",
            icon: "HeartHandshake",
            sections: [
                {
                    title: "Alcohol Use Disorder (AUD)",
                    description: "Medications like Naltrexone and Acamprosate, combined with relapse-prevention skills and lab monitoring"
                },
                {
                    title: "Nicotine Dependence",
                    description: "Medications like Varenicline and Bupropion, combined with relapse-prevention skills and lab monitoring"
                },
                {
                    title: "Opioid Dependency (Buprenorphine/Naloxone)",
                    description: "Office-based induction and maintenance for eligible patients, including overdose education and counseling."
                },
                {
                    title: "Stimulant Use Disorder",
                    description: "Focus on evidence-based behavioral strategies like contingency management, addressing sleep, mood, and co-occurring ADHD."
                },
                {
                    title: "Dual Diagnosis",
                    description: "Integrated plans for SUD plus co-occurring depression, anxiety, PTSD, or other disorders, prioritizing safety and stabilization."

                }
            ]
        },
        highlight: {
            title: "Safety, Monitoring, and Policies",
            description: "Our policy requires informed consent, treatment agreements, and may include urine drug screens or pill counts. We use secure e-prescribing and do not replace lost or stolen prescriptions. This is not an emergency service; for imminent risk, call 911 or 988.",
            icon: "Shield",
            style: "bg-blue-50 border-blue-500 text-blue-800",
            iconStyle: "text-blue-600 "
        },
        faqs: [
            {
                question: "What is a dual diagnosis?",
                answer: "A dual diagnosis (or co-occurring disorder) is when someone experiences a mental health disorder and a substance use disorder at the same time. We offer integrated treatment that addresses both conditions simultaneously, as they often influence each other."
            },
            {
                question: "Do I have to be completely sober to start treatment?",
                answer: "No. We meet you where you are. Our harm-reduction approach supports any positive change, whether that's abstinence, reduced use, or safer use."
            },
            {
                question: "Do you require abstinence?",
                answer: "Our approach is harm-reduction oriented, meaning we meet you where you are. While abstinence is often the goal, we focus on any positive change, whether it's reducing use, using more safely, or entering a formal recovery program. We support your goals."
            },
            {
                question: "What is medication-assisted treatment (MAT)?",
                answer: "MAT uses FDA-approved medications like buprenorphine (Suboxone) or naltrexone to reduce cravings and withdrawal symptoms. Combined with therapy, it's the gold standard for opioid addiction treatment."
            },
            {
                question: "Is MAT just trading one addiction for another?",
                answer: "No. MAT medications are not addictive in the same way as drugs of abuse. They stabilize brain chemistry, allowing you to function normally and engage in recovery work."
            },
            {
                question: "What happens if I need a higher level of care, like detox?",
                answer: "Our services are for outpatient care. If our assessment determines that you require a higher level of care, such as medical detoxification or residential treatment, we will provide you with a referral and help coordinate that transition to ensure you get the appropriate level of support."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "therapy", "medication-management"]
    },
    {
        slug: "spravato",
        title: "Spravato Treatment",
        shortDescription: "An FDA-approved nasal spray treatment for adults with treatment-resistant depression, administered in-office.",
        fullDescription: "Spravato (esketamine) is an FDA-approved nasal spray for adults with treatment-resistant depression or major depressive disorder with suicidal ideation. Unlike traditional antidepressants that take weeks to work, Spravato can provide rapid relief, often within hours to days. Because of its dissociative effects, Spravato must be administered in our office under medical supervision.",
        icon: "Sparkles",
        benefits: [
            "Rapid relief from depression symptoms",
            "Effective when other medications haven't worked",
            "FDA-approved for treatment-resistant depression",
            "Can reduce suicidal thoughts quickly",
            "Administered in a safe, supervised setting",
            "Works differently than traditional antidepressants"
        ],
        whatToExpect: [
            "Evaluation to determine if Spravato is appropriate",
            "Self-administration of nasal spray in our office",
            "2-hour monitoring period after each treatment",
            "Initial phase: twice weekly for 4 weeks",
            "Maintenance phase: weekly or every other week",
            "Continued use of oral antidepressant",
            "Arrangement for transportation (no driving day of treatment)"
        ],
        whoIsItFor: [
            "Adults with treatment-resistant depression",
            "Those who haven't responded to 2+ antidepressants",
            "Adults with depression and suicidal thoughts",
            "People seeking faster-acting treatment options"
        ],
        duration: "2-hour appointments (including observation)",
        frequency: "Twice weekly initially, then weekly/bi-weekly",
        insurance: "Covered by most insurance with prior authorization",
        faqs: [
            {
                question: "What does treatment-resistant depression mean?",
                answer: "Treatment-resistant depression means depression that hasn't adequately responded to at least two different antidepressant medications taken for adequate time and dose."
            },
            {
                question: "What are the side effects of Spravato?",
                answer: "Common side effects include dissociation (feeling disconnected), dizziness, nausea, and increased blood pressure. These typically resolve within the 2-hour monitoring period."
            },
            {
                question: "How quickly does Spravato work?",
                answer: "Some patients notice improvement within hours to days, though full effects may take several weeks. This is much faster than traditional antidepressants."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "medication-management", "therapy"]
    },
    {
        slug: "remote-patient-monitoring",
        title: "Remote Patient Monitoring",
        shortDescription: "Secure digital tools to track your blood pressure between appointments, allowing for proactive care adjustments.",
        fullDescription: "Our remote patient monitoring program uses connected devices to track vital health metrics between appointments. For patients on certain psychiatric medications, monitoring blood pressure and other vitals helps us catch potential issues early and make proactive adjustments to your treatment. This technology enables more responsive, data-driven care.",
        icon: "Activity",
        benefits: [
            "Continuous monitoring between appointments",
            "Early detection of medication side effects",
            "Data-driven treatment adjustments",
            "Reduced need for extra office visits",
            "Peace of mind with proactive monitoring",
            "Better communication with your provider"
        ],
        whatToExpect: [
            "Provision of connected monitoring devices",
            "Training on how to use the equipment",
            "Regular readings submitted automatically",
            "Review of data by clinical team",
            "Proactive outreach if readings are concerning",
            "Integration with your treatment plan"
        ],
        whoIsItFor: [
            "Patients on medications that affect blood pressure",
            "Those with cardiovascular risk factors",
            "Individuals starting new medications",
            "Anyone wanting more engaged care between visits"
        ],
        duration: "Daily readings (takes minutes)",
        frequency: "Ongoing between appointments",
        insurance: "Covered by Medicare and many commercial plans",
        serviceDetails: {
            title: "Workflow",
            sections: [
                {
                    title: "Device Provisioning",
                    icon: "Brain",
                    description: "We provide you with cellular-enabled devices (like a blood pressure cuff) and help you get set up.",
                    style: "bg-gradient-to-br from-[#90AB98] to-[#69A08B]",
                    iconStyle: "text-white"
                },
                {
                    title: "Automated Data Uploads",
                    icon: "MessageCircle",
                    description: "Your data is automatically and securely uploaded to our HIPAA-compliant platform.",
                    style: "bg-gradient-to-br from-[#90AB98] to-[#69A08B]",
                    iconStyle: "text-white"
                },
                {
                    title: "Clinical Review",
                    icon: "UserCheck",
                    description: "Our clinicians review your data, respond to alerts, and integrate a summary into your regular visits.",
                    style: "bg-gradient-to-br from-[#90AB98] to-[#69A08B]",
                    iconStyle: "text-white"
                }
            ]
        },
        highlight: {
            title: "Your Privacy is Protected",
            description: "We use a fully HIPAA-compliant platform, and only authorized clinical staff can view your data. Your privacy and security are paramount.",
            style: "bg-green-50 border-green-500 text-green-800",
        },
        faqs: [
            {
                question: "Why would my blood pressure matter for psychiatric care?",
                answer: "Some psychiatric medications can affect blood pressure. Monitoring helps us catch changes early and adjust treatment before problems develop."
            },
            {
                question: "Is my health data secure?",
                answer: "Yes. All data is transmitted and stored securely in compliance with HIPAA regulations. Only your healthcare team has access to your information."
            },
            {
                question: "What if I have an abnormal reading?",
                answer: "Our team reviews readings regularly. If something concerning appears, we'll contact you promptly to assess the situation and adjust care if needed."
            }
        ],
        relatedServices: ["medication-management", "telehealth"]
    },
    {
        slug: "telehealth",
        title: "Telehealth Services",
        shortDescription: "Secure virtual psychiatric care with continuous, data-driven follow-up, offering flexible access and faster monitoring.",
        fullDescription: "Our telehealth services provide the same high-quality psychiatric care as in-person visits, delivered through secure video technology. Virtual appointments offer flexibility for busy schedules, eliminate commute time, and allow you to receive care from the comfort of your home. All our services are available via telehealth for patients located in Georgia.",
        icon: "Video",
        benefits: [
            "Same quality care as in-person visits",
            "No commute or travel time",
            "Flexible scheduling options",
            "Comfortable, private environment",
            "Easy access from anywhere in Georgia",
            "Reduced exposure to illness",
            "Continuity of care when traveling"
        ],
        whatToExpect: [
            "Secure video platform (computer, tablet, or phone)",
            "Private space for your appointment",
            "Stable internet connection",
            "Same appointment structure as in-person",
            "Prescriptions sent electronically to your pharmacy",
            "Technical support if needed"
        ],
        whoIsItFor: [
            "Anyone seeking convenient access to care",
            "Busy professionals with limited time",
            "Those in rural areas or far from our office",
            "People with mobility or transportation challenges",
            "Patients who prefer the comfort of home"
        ],
        duration: "Same as in-person appointments",
        frequency: "Based on your treatment plan",
        insurance: "Covered the same as in-person visits",
        serviceDetails: {
            title: "Our Digital Care Services",
            icon: "Wifi",
            sections: [
                {
                    title: "Convenient Virtual Visits",
                    icon: "Video",
                    description: "Initial evaluations, follow-ups, medication management, and therapy from the comfort of your home.",
                    iconStyle: "text-white",
                    style: "bg-gradient-to-br from-indigo-500 to-purple-500"
                },
                {
                    title: "Measurement-Based Care",
                    icon: "HeartPulse",
                    description: "We use structured data from symptom scales and checklists to guide treatment decisions, acting on trends, not guesswork.",
                    iconStyle: "text-white",
                    style: "bg-gradient-to-br from-indigo-500 to-purple-500"
                },
                {
                    title: "Continuous Assessment",
                    icon: "BarChart2",
                    description: "Automated check-ins and data monitoring allow for faster interventions and proactive care adjustments.",
                    iconStyle: "text-white",
                    style: "bg-gradient-to-br from-indigo-500 to-purple-500"
                }
            ]
        },
        highlight: {
            title: "Policies & Safety",
            description: "You must be physically located in a state where your clinician is licensed at the time of service. Sessions may not be recorded. Standard missed appointment and refill policies apply. For emergencies, call 911 or 988.",
            icon: "Shield",
            style: "bg-blue-50 border-blue-500 text-blue-800",
            iconStyle: "text-blue-600 "
        },
        faqs: [
            {
                question: "Is telehealth as effective as in-person care?",
                answer: "Research shows telehealth is equally effective for most mental health services. Many patients actually prefer it for the convenience and comfort it provides."
            },
            {
                question: "What technology do I need?",
                answer: "You need a device with a camera and microphone (smartphone, tablet, or computer) and a stable internet connection. We use a secure, HIPAA-compliant video platform."
            },
            {
                question: "Can I get prescriptions through telehealth?",
                answer: "Yes. We can prescribe most medications via telehealth, with prescriptions sent electronically to your pharmacy. Some controlled substances have specific requirements."
            }
        ],
        relatedServices: ["psychiatric-evaluation", "medication-management", "therapy"]
    }
]

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
    return services.filter((s) => slugs.includes(s.slug))
}
