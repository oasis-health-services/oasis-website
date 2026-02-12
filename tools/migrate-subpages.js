#!/usr/bin/env node

/**
 * Migration script to create Astro pages for all service and condition sub-pages
 * This script reads the existing React components and creates corresponding Astro pages
 */

const fs = require('fs');
const path = require('path');

// Service pages mapping: React component name -> URL path
const servicePages = {
    'ComprehensiveAssessment': 'comprehensive-psychiatric-assessment',
    'GeneticTesting': 'genetic-testing',
    'AdhdTesting': 'adhd-testing-and-management',
    'AutismAssessment': 'autism-assessment-and-management',
    'TherapyCounseling': 'therapy-and-counseling',
    'MedicationManagement': 'medication-management',
    'SudTreatment': 'substance-use-disorder-treatment',
    'Spravato': 'spravato',
    'Rpm': 'remote-patient-monitoring',
    'Telehealth': 'telehealth',
};

// Condition pages mapping: React component name -> URL path
const conditionPages = {
    'AnxietyDisorders': 'anxiety-disorders',
    'MoodDisorders': 'mood-disorders',
    'NeurodevelopmentalDisorders': 'neurodevelopmental-disorders',
    'PersonalityDisorders': 'personality-disorders',
    'PsychoticDisorders': 'psychotic-disorders',
    'OcdRelatedDisorders': 'ocd-related-disorders',
    'SubstanceRelatedDisorders': 'substance-related-disorders',
    'TraumaStressDisorders': 'trauma-stress-disorders',
};

// Title mappings for better SEO
const serviceTitles = {
    'ComprehensiveAssessment': 'Comprehensive Psychiatric Assessment & Diagnosis',
    'GeneticTesting': 'Genetic Testing',
    'AddhTesting': 'ADHD Testing & Management',
    'AutismAssessment': 'Autism Assessment & Management',
    'TherapyCounseling': 'Therapy & Counseling',
    'MedicationManagement': 'Medication Management',
    'SudTreatment': 'Substance Use Disorder Treatment',
    'Spravato': 'Spravato® (esketamine) Therapy',
    'Rpm': 'Remote Patient Monitoring (RPM)',
    'Telehealth': 'Telehealth & Digital Care',
};

const conditionTitles = {
    'AnxietyDisorders': 'Anxiety Disorders',
    'MoodDisorders': 'Mood Disorders',
    'NeurodevelopmentalDisorders': 'Neurodevelopmental Disorders',
    'PersonalityDisorders': 'Personality Disorders',
    'PsychoticDisorders': 'Psychotic Disorders',
    'OcdRelatedDisorders': 'Obsessive-Compulsive and Related Disorders',
    'SubstanceRelatedDisorders': 'Substance-Related and Addictive Disorders',
    'TraumaStressDisorders': 'Trauma and Stress-Related Disorders',
};

function createAstroPage(componentName, urlPath, type, title) {
    const typeFolder = type === 'service' ? 'services' : 'conditions';
    const astroContent = `---
import Layout from '../../layouts/Layout.astro';
import ${componentName}Page from '@/pages/${typeFolder}/${componentName}';
---

<Layout 
  title="${title} - Oasis Health Services"
  description="Expert ${type === 'service' ? 'mental health services' : 'treatment'} for ${title.toLowerCase()}."
>
  <${componentName}Page client:load /> 
</Layout>
`;

    const outputPath = path.join(__dirname, '..', 'src', 'pages', typeFolder, `${urlPath}.astro`);

    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, astroContent);
    console.log(`✓ Created ${typeFolder}/${urlPath}.astro`);
}

function main() {
    console.log('Starting Astro page migration...\n');

    console.log('Creating service pages:');
    Object.entries(servicePages).forEach(([componentName, urlPath]) => {
        const title = serviceTitles[componentName] || componentName;
        createAstroPage(componentName, urlPath, 'service', title);
    });

    console.log('\nCreating condition pages:');
    Object.entries(conditionPages).forEach(([componentName, urlPath]) => {
        const title = conditionTitles[componentName] || componentName;
        createAstroPage(componentName, urlPath, 'condition', title);
    });

    console.log('\n✅ Migration complete!');
    console.log(`Created ${Object.keys(servicePages).length} service pages`);
    console.log(`Created ${Object.keys(conditionPages).length} condition pages`);
}

main();
