export interface Provider {
  slug: string
  name: string
  credentials: string
  role: string
  image: string
  imageAlt: string
  tagline: string
  bio: string[]
  practiceStatement: string
  specialties: {
    top: string[]
    expertise: string[]
  }
  treatmentApproaches: string[]
  ageGroups: string[]
  sessionTypes: string[]
  fees: {
    initialSession: number
    standardVisit: number
    slidingScale: boolean
  }
  insurance: string[]
  paymentMethods: string[]
  education: {
    degree: string
    school: string
    year?: string
  }[]
  licenses: {
    state: string
    number?: string
  }[]
  yearsInPractice: number
  endorsement?: {
    name: string
    credentials: string
    text: string
  }
  locations: {
    name: string
    address: string
    city: string
    state: string
    zip: string
    isVirtual?: boolean
  }[]
  phone: string
  email?: string
  availableOnline: boolean
  acceptingNewPatients: boolean
  consultationOffer?: string
  faqs: {
    question: string
    answer: string
  }[]
}

export const providers: Provider[] = [
  {
    slug: "olajumoke-akinyele",
    name: "Olajumoke Akinyele",
    credentials: "DNP, PMHNP-BC, FNP-C",
    role: "Board-Certified Psychiatric & Family Nurse Practitioner",
    image: "/images/providers/dr-ola-akinyele-profile.jpeg",
    imageAlt: "Olajumoke Akinyele",
    tagline: "Helping you feel balanced, supported, and in control of your mental health through compassionate, evidence-based psychiatric care.",
    bio: [
      "Are you struggling to find a medication regimen that actually works, without the heavy side effects? You might have tried therapy but still feel chemically off-balance, or perhaps you are tired of waiting months just to see a psychiatrist. Whether you are dealing with resistant depression, ADHD focus issues, or anxiety that won't lift, you just want to feel like yourself again.",
      "You need a provider who looks at the whole picture—sleep, stress, and biology—to find the right balance for your body, rather than just handing you a prescription and rushing you out the door.",
      "I specialize in helping children, teens, and adults who feel \"stuck\" in their treatment. As a Board-Certified Psychiatric Nurse Practitioner with over 20 years of experience, I offer precision medication management combined with supportive therapy. I help you navigate complex options to find a plan that restores your clarity, energy, and emotional stability.",
      "You do not have to wait weeks for relief. I accept most major insurance plans and often have appointments available within days. Let's work together to get you back to living your life."
    ],
    practiceStatement: "As a dual board-certified PMHNP and FNP with a Doctorate in Nursing Practice, I bring over 20 years of clinical expertise. My unique dual-certification allows me to manage complex psychiatric needs while understanding the medical underlying causes, ensuring you receive safe, expert, holistic care.",
    specialties: {
      top: ["ADHD", "Depression", "Anxiety"],
      expertise: [
        "Medication Management",
        "Bipolar Disorder",
        "PTSD & Trauma",
        "OCD",
        "Sleep/Insomnia",
        "Mood Disorders",
        "Grief",
        "Stress Management",
        "Anger Management",
        "Behavioral Issues",
        "Dual Diagnosis",
        "Borderline Personality",
        "Psychosis",
        "PMDD",
        "Spravato/Esketamine",
        "Veterans Care",
        "Geriatric & Seniors"
      ]
    },
    treatmentApproaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Medication Management",
      "Integrative Therapy",
      "Motivational Interviewing",
      "Solution Focused Brief Therapy (SFBT)",
      "Person-Centered Therapy",
      "Compassion Focused Therapy",
      "Culturally Sensitive Care",
      "Emotionally Focused Therapy"
    ],
    ageGroups: ["Children (6-10)", "Preteens", "Teens", "Adults", "Seniors (65+)"],
    sessionTypes: ["Individual Therapy", "Medication Management", "Psychiatric Evaluation"],
    fees: {
      initialSession: 300,
      standardVisit: 150,
      slidingScale: true
    },
    insurance: [
      "Aetna",
      "Anthem",
      "BlueCross BlueShield",
      "Cigna & Evernorth",
      "Humana",
      "Magellan",
      "Optum",
      "Oscar Health",
      "Oxford",
      "Premera Blue Cross",
      "TRICARE",
      "UnitedHealthcare (UHC)"
    ],
    paymentMethods: ["Visa", "Mastercard", "American Express", "Discover", "HSA", "ACH Bank Transfer"],
    education: [
      {
        degree: "Doctor of Nursing Practice (DNP)",
        school: "UMass Global",
        year: "2019"
      },
      {
        degree: "Board Certified - PMHNP-BC",
        school: "American Nurses Credentialing Center"
      },
      {
        degree: "Board Certified - FNP-C",
        school: "American Academy of Nurse Practitioners"
      }
    ],
    licenses: [
      { state: "Georgia" },
      { state: "Florida" },
      { state: "Washington" },
      { state: "Massachusetts" },
      { state: "Maryland" },
      { state: "New York" },
      { state: "New Jersey" }
    ],
    yearsInPractice: 20,
    // endorsement: {
    //   name: "Oyeronke Ajiboye-Lala",
    //   credentials: "DNP, PMHNP, FNP",
    //   text: "Ola Akinyele, PMHNP-BC, is a warm, compassionate, and highly skilled clinician. Known for her professionalism and thoughtful care, patients consistently praise her as deeply supportive. She blends evidence-based practice with holistic insight and empathy."
    // },
    locations: [
      {
        name: "Oasis Health Services LLC",
        address: "11285 Elkins Road, STE J6",
        city: "Roswell",
        state: "GA",
        zip: "30076"
      }
    ],
    phone: "(509) 381-6035",
    availableOnline: true,
    acceptingNewPatients: true,
    consultationOffer: "Free 15-minute consultation to discuss your goals",
    faqs: [
      {
        question: "What should I expect during my first appointment?",
        answer: "Your initial session is a comprehensive psychiatric evaluation where we'll discuss your mental health history, current symptoms, lifestyle factors, and treatment goals. I take a holistic approach, looking at sleep, stress, diet, and medical history to understand the full picture. Together, we'll create a personalized treatment plan that may include medication management and therapeutic strategies."
      },
      {
        question: "How quickly can I get an appointment?",
        answer: "Unlike many psychiatric practices with months-long wait times, I often have appointments available within days. You can view my real-time calendar online and book your intake instantly. I understand that when you're struggling, you need help now—not in three months."
      },
      {
        question: "Do you prescribe controlled substances for ADHD?",
        answer: "Yes, I am licensed to prescribe all psychiatric medications, including controlled substances for ADHD when clinically appropriate. I conduct thorough evaluations to ensure accurate diagnosis and monitor treatment closely to optimize effectiveness while minimizing side effects."
      },
      {
        question: "What makes your approach different from other providers?",
        answer: "My dual board certification in both Family Practice (FNP) and Psychiatric Mental Health (PMHNP) allows me to understand how physical health impacts mental health. I don't just treat symptoms—I look for underlying medical causes and consider the whole person. I also combine medication management with supportive therapy techniques for comprehensive care."
      },
      {
        question: "Do you offer telehealth appointments?",
        answer: "Yes! I offer both in-person appointments at my Roswell, GA office and virtual telehealth visits. Telehealth is available for patients in Georgia, Florida, Washington, Massachusetts, Maryland, New York, and New Jersey. Virtual appointments provide the same quality care with added convenience."
      },
      {
        question: "What insurance do you accept?",
        answer: "I accept most major insurance plans including Aetna, Cigna, UnitedHealthcare, Anthem BCBS, and many others. I handle all claim filing for you. For those without insurance or with out-of-network plans, I offer competitive private pay rates and flexible payment options. Contact me to verify your specific coverage."
      }
    ]
  },
  {
    slug: "ann-marie-taylor",
    name: "Ann-Marie Taylor",
    credentials: "LPC",
    role: "Licensed Professional Counselor",
    image: "/images/providers/anne-marie-taylor-profile.png",
    imageAlt: "Ann-Marie Taylor",
    tagline: "Equipping you with practical tools and strategies to reach your fullest potential through compassionate, goal-oriented therapy.",
    bio: [
      "Life's challenges can sometimes feel overwhelming. Whether you're battling persistent anxiety, navigating depression, processing trauma, or facing a major life transition, you don't have to face it alone. Therapy provides a safe space to explore your thoughts and feelings while developing practical coping strategies.",
      "I believe that every person has the inherent strength to overcome challenges and grow. My role is to help you discover and harness that strength. Through our work together, we'll identify patterns that may be holding you back and develop new ways of thinking and responding that serve you better.",
      "I specialize in helping adults navigate anxiety, depression, trauma, and life transitions. Using evidence-based approaches, I create a warm, non-judgmental environment where you can explore difficult emotions and experiences at your own pace.",
      "Online therapy makes it easier than ever to prioritize your mental health. From the comfort of your home, you can access quality care that fits your schedule."
    ],
    practiceStatement: "I combine evidence-based therapeutic techniques with a warm, person-centered approach. My goal is to help you not just manage symptoms, but truly thrive. Together, we'll build resilience and develop skills that last a lifetime.",
    specialties: {
      top: ["Anxiety", "Depression", "Trauma"],
      expertise: [
        "Life Transitions",
        "Stress Management",
        "Self-Esteem",
        "Relationship Issues",
        "Grief & Loss",
        "Work-Life Balance",
        "Personal Growth",
        "Coping Skills",
        "Women's Issues"
      ]
    },
    treatmentApproaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Trauma-Informed Care",
      "Solution Focused Brief Therapy",
      "Person-Centered Therapy",
      "Mindfulness-Based Approaches",
      "Strength-Based Therapy"
    ],
    ageGroups: ["Adults (18+)"],
    sessionTypes: ["Individual Therapy", "Online Therapy"],
    fees: {
      initialSession: 150,
      standardVisit: 150,
      slidingScale: true
    },
    insurance: [
      "Aetna",
      "BlueCross BlueShield",
      "Cigna",
      "UnitedHealthcare"
    ],
    paymentMethods: ["Visa", "Mastercard", "American Express", "HSA"],
    education: [
      {
        degree: "Master of Arts in Clinical Mental Health Counseling",
        school: "Mercer University"
      },
      {
        degree: "Licensed Professional Counselor (LPC)",
        school: "Georgia Composite Board"
      },
      {
        degree: "Trauma-Informed Care Certification",
        school: "National Council for Behavioral Health"
      }
    ],
    licenses: [
      { state: "Georgia" }
    ],
    yearsInPractice: 8,
    locations: [
      {
        name: "Oasis Health Services LLC",
        address: "Virtual Office",
        city: "Atlanta",
        state: "GA",
        zip: "30301",
        isVirtual: true
      }
    ],
    phone: "(509) 381-6035",
    availableOnline: true,
    acceptingNewPatients: true,
    consultationOffer: "Free 15-minute phone consultation",
    faqs: [
      {
        question: "What is online therapy like?",
        answer: "Online therapy sessions are conducted via secure video conferencing from the comfort of your home or private space. You'll receive the same quality care as in-person sessions, with the added convenience of no commute. All you need is a private space, stable internet, and a device with a camera."
      },
      {
        question: "How long does therapy take to work?",
        answer: "Everyone's journey is different. Some people notice improvements within a few sessions, while others benefit from longer-term work. We'll regularly assess your progress and adjust our approach as needed. My goal is to give you tools you can use for life, not to keep you in therapy indefinitely."
      },
      {
        question: "What should I talk about in therapy?",
        answer: "You can talk about whatever feels most pressing to you. There's no wrong topic. Many clients come with specific concerns like anxiety or relationship issues, while others need space to process emotions they can't quite name. I'll help guide our conversations while always letting you set the pace."
      },
      {
        question: "Do you prescribe medication?",
        answer: "As a Licensed Professional Counselor, I do not prescribe medication. However, I work closely with Dr. Akinyele and other psychiatric providers at Oasis Health Services. If medication might benefit you, I can coordinate care to ensure you receive comprehensive treatment."
      }
    ]
  }
]

export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find(p => p.slug === slug)
}

export function getAllProviderSlugs(): string[] {
  return providers.map(p => p.slug)
}
