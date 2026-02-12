import type { Provider } from "@/lib/providers-data";

const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://oasishealthservices.com';
const SITE_NAME = 'Oasis Health Services';
const DEFAULT_IMAGE = import.meta.env.PUBLIC_SITE_IMAGE || '/images/home/home-banner-1.webp';

export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_IMAGE,
    description: 'Comprehensive mental health services including psychiatric assessments, therapy, medication management, and specialized treatments.',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '11285 Elkins Road Unit J-6',
        addressLocality: 'Roswell',
        addressRegion: 'GA',
        postalCode: '30076',
        addressCountry: 'US'
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-509-381-6035',
        contactType: 'customer service',
        availableLanguage: 'English'
    },
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

export const getArticleSchema = (post: {
    title: string;
    description: string;
    image?: string;
    publishedAt: string | Date;
    updatedAt?: string | Date;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image || DEFAULT_IMAGE,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
        '@type': 'Organization',
        name: SITE_NAME
    },
    publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
            '@type': 'ImageObject',
            url: DEFAULT_IMAGE
        }
    }
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