
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart, Target, Users, ArrowRight } from 'lucide-react';
// import OptimizedImage from '@/components/OptimizedImage';
import { AboutHero } from '../about/AboutHero';
import { MissionVision } from '../about/MissionVision';
import { Conditions } from '../about/Conditions';
import { Values } from '../about/Values';
import { Services } from '../about/Services';
import { MeetProviders } from '../about/MeetProviders';
import { ResourcesCTA } from '../about/ResourcesCTA';
import Insurances from '@/components/common/Insurances';

export default function About() {
    // const providers = [
    //     {
    //         name: 'Olajumoke Akinyele, DNP, PMHNP-BC, FNP-C',
    //         title: 'Board-Certified Nurse Practitioner',
    //         bio: 'Board-certified nurse practitioner with 20+ years of experience, dually certified in family practice and psychiatric mental health. Specializes in integrated care for children and adults.',
    //         img: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/80ad63f8667e4b31d0ddc190e412e19f.png',
    //     },
    //     {
    //         name: 'Ann-Marie Taylor',
    //         title: 'Clinical Counselor',
    //         bio: 'Clinical counselor offering online therapy for anxiety, depression, trauma, and life transitions. Focuses on equipping clients with tools to reach their fullest potential. This provider only offers online therapy for patients in Georgia.',
    //         img: 'https://horizons-cdn.hostinger.com/0bf89f29-e8e8-4300-9c8a-627c22f53622/7de41d1a354e2c40d55bfdb7b2bd7de0.png',
    //     },
    // ];

    return (
        <>
            <AboutHero />

            <MissionVision />

            <Conditions />

            <Services />

            <MeetProviders />
            <Values />

            <ResourcesCTA />

            <Insurances showConsultationCTA={true} />

        </>
    );
};
