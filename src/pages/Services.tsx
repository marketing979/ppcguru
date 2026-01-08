import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, MagneticCard, AnimatedButton } from '../components/ui/AnimatedComponents';
import { servicesData } from '../data/services';

export const Services: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="pt-20">
            {/* Frame 1: HERO */}
            <section className="relative py-24 bg-dark-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 to-dark-900 opacity-50" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Services Built to Generate<br />
                            <span className="text-gradient">Leads, Sales & ROI</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Full-funnel performance marketing for Indian-owned businesses across the USA & Canada.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <AnimatedButton href="/#contact" size="lg">Get a Custom Growth Plan</AnimatedButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Frame 2: SERVICE GRID */}
            <AnimatedSection className="bg-white" id="service-grid">
                <div className="text-center mb-16">
                    <AnimatedHeading>
                        Choose what you need or let us build the <br /> <span className="text-primary-500">right mix based on your goals.</span>
                    </AnimatedHeading>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {servicesData.map((service) => (
                        <motion.div key={service.id} variants={cardVariants} className="h-full">
                            <Link to={`/services/${service.slug}`} className="block h-full">
                                <MagneticCard className="p-8 h-full border border-gray-100 hover:border-primary-100 transition-colors group">
                                    <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark-800 mb-3 group-hover:text-primary-500 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.shortDescription}
                                    </p>
                                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                                        Learn More <ArrowRight size={18} className="ml-1" />
                                    </div>
                                </MagneticCard>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatedSection>

            {/* Frame 3: HOW IT WORKS (Integrated Growth) */}
            <AnimatedSection background="gray" id="how-it-works">
                <div className="text-center mb-16">
                    <AnimatedHeading>
                        We Connect the <span className="text-gradient">Full Funnel</span>
                    </AnimatedHeading>
                    <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                        Siloed tactics fail. Integrated systems scale. Here is how we connect the dots.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                        {[
                            { title: 'Awareness', desc: 'Meta video, Reels, & Display Ads to grab attention.', color: 'bg-blue-50 border-blue-100 text-blue-600' },
                            { title: 'Consideration', desc: 'Retargeting + Trust Content to educate high-intent users.', color: 'bg-purple-50 border-purple-100 text-purple-600' },
                            { title: 'Intent', desc: 'Google Search & Maps to capture ready buyers.', color: 'bg-orange-50 border-orange-100 text-orange-600' },
                            { title: 'Conversion', desc: 'High-converting Landing Pages + Precision Tracking.', color: 'bg-green-50 border-green-100 text-green-600' },
                            { title: 'Retention', desc: 'Reviews + WhatsApp/Email to drive repeat sales/LTV.', color: 'bg-pink-50 border-pink-100 text-pink-600' },
                        ].map((step, index) => (
                            <motion.div
                                key={step.title}
                                className={`bg-white p-6 rounded-xl border-2 ${step.color.replace('text-', 'border-opacity-50 ')} shadow-sm hover:shadow-md transition-shadow relative`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-current flex items-center justify-center font-bold text-sm z-20 shadow-sm" style={{ borderColor: 'inherit', color: 'inherit' }}>
                                    {index + 1}
                                </div>
                                <h4 className="text-lg font-bold text-dark-800 mb-2 mt-2 text-center">{step.title}</h4>
                                <p className="text-sm text-gray-600 text-center">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Frame 4: CTA STRIP */}
            <section className="py-20 bg-dark-900 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Want a clear plan in 30 minutes?
                    </h2>
                    <AnimatedButton href="/#contact" size="lg" variant="accent">
                        Book Strategy Call
                    </AnimatedButton>
                </div>
            </section>

        </div>
    );
};
