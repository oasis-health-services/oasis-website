import type { Provider } from "@/lib/providers-data";

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://oasishealthservices.com';
const SITE_NAME = 'Oasis Health Services';
const DEFAULT_IMAGE = import.meta.env.PUBLIC_SITE_IMAGE || '/images/home/home-banner-1.webp';

export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    image: toAbsolute(DEFAULT_IMAGE),
    description: 'Comprehensive mental health services including psychiatric assessments, therapy, medication management, and specialized treatments.',
    medicalSpecialty: 'Psychiatric',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '11285 Elkins Road Unit J-6',
        addressLocality: 'Roswell',
        addressRegion: 'GA',
        postalCode: '30076',
        addressCountry: 'US'
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 34.0553924052091,
        longitude: -84.33358617422402
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-470-802-6838',
        contactType: 'customer service',
        availableLanguage: 'English'
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:30'
        }
    ],
    sameAs: [
        'https://www.facebook.com/oasishealthserv',
        'https://www.instagram.com/oasishealthserv/',
        'https://www.linkedin.com/company/oasis-health-service',
        'https://x.com/OasisHealthSer1'
    ]
});

export const getServiceSchema = (serviceName: string, serviceDescription: string) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: serviceName,
    description: serviceDescription,
    provider: {
        '@type': 'MedicalOrganization',
        name: SITE_NAME,
        url: SITE_URL
    }
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`
    }))
});

const toAbsolute = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export const getArticleSchema = (post: {
    title: string;
    description: string;
    image?: string;
    publishedAt: string | Date;
    updatedAt?: string | Date;
    author?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: toAbsolute(post.image || DEFAULT_IMAGE),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author
        ? { '@type': 'Person', name: post.author }
        : { '@type': 'Organization', name: SITE_NAME },
    publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
            '@type': 'ImageObject',
            url: toAbsolute(DEFAULT_IMAGE)
        }
    }
});

export const getFaqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
        }
    }))
});

export const getMedicalWebPageSchema = (page: {
    name: string;
    description: string;
    url: string;
    about?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: page.name,
    description: page.description,
    url: toAbsolute(page.url),
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    publisher: {
        '@type': 'MedicalOrganization',
        name: SITE_NAME,
        url: SITE_URL
    },
    ...(page.about
        ? { about: { '@type': 'MedicalCondition', name: page.about } }
        : {})
});

export const getItemListSchema = (items: Array<{ name: string; url: string; description?: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: toAbsolute(item.url),
        ...(item.description ? { description: item.description } : {})
    }))
});

export const getCollectionPageSchema = (page: {
    name: string;
    description: string;
    url: string;
    items?: Array<{ name: string; url: string }>;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: page.name,
    description: page.description,
    url: toAbsolute(page.url),
    isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL
    },
    ...(page.items?.length
        ? {
            mainEntity: {
                '@type': 'ItemList',
                itemListElement: page.items.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: item.name,
                    url: toAbsolute(item.url)
                }))
            }
        }
        : {})
});

export const getProviderSchema = (provider: Provider) => {

    return {
        '@context': 'https://schema.org',
        '@type': 'MentalHealthProfessional',
        name: provider.name,
        url: `${SITE_URL}/about/our-team/${provider.slug}`,
        image: provider.image,
        description: `${provider.tagline}`,
        keywords: [
            provider.name,
            provider.role,
            ...provider.specialties.top,
            ...provider.specialties.expertise.slice(0, 5),
            provider.locations.map(l => `${l.city}, ${l.state}`).join(" & "),
            "mental health",
            "telehealth",
        ].join(", "),
    }
};