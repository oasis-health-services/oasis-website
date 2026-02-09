import React from 'react';

const SITE_URL = 'https://oasishealthservices.com';
const SITE_NAME = 'Oasis Health Services';
const DEFAULT_IMAGE = 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/80ad63f8667e4b31d0ddc190e412e19f.png';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  schema,
  noindex = false,
  siteName = SITE_NAME
}) => {
  // Ensure title is max 60 chars for optimal SEO
  const formattedTitle = title && title.length > 60 ? title.substring(0, 57) + '...' : title;
  const pageTitle = formattedTitle ? `${formattedTitle} | ${siteName}` : siteName;

  // Ensure description is max 155 chars for optimal SEO
  const formattedDescription = description && description.length > 155
    ? description.substring(0, 152) + '...'
    : description;

  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
    : DEFAULT_IMAGE;

  return null;
};

// Helper function to generate Organization schema
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
  sameAs: []
});

// Helper function to generate Service schema
export const getServiceSchema = (serviceName, serviceDescription) => ({
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

// Helper function to generate BreadcrumbList schema
export const getBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`
  }))
});

// Helper function to generate Article schema for blog posts
export const getArticleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  image: post.image || DEFAULT_IMAGE,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
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

export const getProviderSchema = (provider) => {

  const topSpecialties = provider.specialties.top.join(", ")
  const locations = provider.locations.map(l => `${l.city}, ${l.state}`).join(" & ")

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: provider.name,
    url: provider.url,
    image: provider.image,
    description: `${provider.name} is a ${provider.role} specializing in ${topSpecialties}. ${provider.yearsInPractice}+ years experience. Accepting new patients in ${locations} and via telehealth. Book your appointment today.`,
    keywords: [
      provider.name,
      provider.role,
      ...provider.specialties.top,
      ...provider.specialties.expertise.slice(0, 5),
      "mental health",
      "psychiatrist",
      "therapist",
      ...provider.locations.map(l => `${l.city} ${l.state}`),
      "telehealth",
    ].join(", "),
  }
};

export default SEO;
