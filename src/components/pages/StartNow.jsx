
import React from 'react';
// import { Helmet } from 'react-helmet'; // REMOVED
import { motion } from 'framer-motion';

const StartNow = () => {
    return (
        <>
            <section className="relative bg-gradient-to-br from-[#2D6762] to-[#69A08B] text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Your First Step Toward Wellness
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90">
                            Begin your journey to better mental health today
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-8 text-center md:hidden">
                            <p className="text-gray-600 mb-4">Having trouble loading the portal below?</p>
                            <a
                                href="https://vpm-portal.web.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-[#2D6762] text-white rounded-lg font-medium hover:bg-[#214e4a] transition-colors"
                            >
                                Open Portal in New Window
                            </a>
                        </div>
                        <div
                            className="h-[1200px]"
                        >
                            <iframe
                                src="https://vpm-portal.web.app"
                                className="w-full h-full rounded-2xl border-0"
                                title="Patient Portal"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StartNow;
