import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight, Minus, Plus, ChevronDown } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedButton, AnimatedBadge, AnimatedCounter } from '../components/ui/AnimatedComponents';
import { servicesData } from '../data/services';

export const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = servicesData.find(s => s.slug === slug);
    const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

    // Scroll to top on slug change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const fadeInMoveUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    return (
        <div className="pt-20 font-sans tracking-wide">

            {/* Frame 1: HERO - Minimalist & Bold */}
            <section className="relative min-h-[85vh] flex items-center justify-center bg-dark-900 overflow-hidden py-24">
                {/* Subtle, clean gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInMoveUp} className="mb-8 flex justify-center">
                            <span className="px-4 py-1.5 rounded-full border border-primary-500/30 text-primary-400 text-sm font-medium uppercase tracking-widest bg-primary-500/5 backdrop-blur-sm">
                                {service.title}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInMoveUp}
                            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
                        >
                            {service.hero.headline}
                        </motion.h1>

                        <motion.p
                            variants={fadeInMoveUp}
                            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                        >
                            {service.hero.subhead}
                        </motion.p>

                        <motion.div variants={fadeInMoveUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <AnimatedButton href="/#contact" size="lg" className="min-w-[200px] shadow-lg shadow-primary-500/20">
                                Book Strategy Call
                            </AnimatedButton>
                            <a href="#proof" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider border-b border-transparent hover:border-gray-400 pb-0.5">
                                See Results
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Minimal Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
                >
                    <ChevronDown size={24} className="animate-bounce" />
                </motion.div>
            </section>

            {/* Frame 2: ONE BIG PROMISE (Who This Is For) - Clean Layout */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-dark-900 mb-8 leading-tight">
                                Built for businesses that demand <span className="text-primary-500">performance</span>, not just clicks.
                            </h2>
                            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-light">
                                We don't do "generic". This service is engineered specifically for Indian-owned businesses in North America looking to dominate their local or national market.
                            </p>
                            <div className="space-y-6">
                                {service.whoIsThisFor.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-6 h-6 rounded-full bg-primary-50 border border-primary-100 text-primary-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-lg text-dark-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-[3rem] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-gray-50" />
                                <service.icon size={180} strokeWidth={0.5} className="text-dark-200 relative z-10" />

                                {/* Floating Metric Card - Minimal */}
                                <motion.div
                                    className="absolute bottom-12 left-12 right-12 bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 z-20"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-gray-500 uppercase tracking-wider text-xs font-semibold mb-2">Target Outcome</div>
                                    <div className="text-3xl font-bold text-dark-900">High-Intent Leads</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Frame 3: THE PROBLEM - High Contrast Grid */}
            <section className="py-32 bg-gray-50 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-dark-900 mb-6">Stop wasting budget.</h2>
                        <p className="text-xl text-gray-500 font-light">
                            Most campaigns fail because of these common blind spots. We fix them.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {service.painPoints.slice(0, 3).map((pain, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 mb-8 flex items-center justify-center">
                                    <Minus size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-dark-900 mb-4">{pain}</h4>
                                <p className="text-gray-500 leading-relaxed font-light">
                                    We replace this inefficiency with precision targeting and automated optimization.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frame 4: FRAMEWORK - Clean Timeline */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold text-dark-900">Our Methodology</h2>
                    </div>

                    <div className="space-y-0 relative border-l border-gray-100 ml-4 md:ml-0 md:border-l-0">
                        {service.framework.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative md:flex items-center group py-12 first:pt-0 last:pb-0"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }} // Trigger slightly earlier
                            >
                                {/* Number / Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-12 md:top-1/2 md:-translate-y-1/2 w-2.5 h-2.5 bg-primary-500 rounded-full ring-4 ring-white z-20" />

                                {/* Content - Alternating */}
                                <div className={`pl-10 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:hidden'}`}>
                                    {idx % 2 === 0 && (
                                        <>
                                            <div className="text-primary-500 font-bold mb-2 uppercase tracking-widest text-xs">Step {idx + 1}</div>
                                            <h3 className="text-2xl font-bold text-dark-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-500 leading-relaxed max-w-md ml-auto">{step.description}</p>
                                        </>
                                    )}
                                </div>

                                <div className={`pl-10 md:pl-0 md:w-1/2 ${idx % 2 !== 0 ? 'md:pl-20' : 'md:hidden'}`}>
                                    {idx % 2 !== 0 && (
                                        <>
                                            <div className="text-primary-500 font-bold mb-2 uppercase tracking-widest text-xs">Step {idx + 1}</div>
                                            <h3 className="text-2xl font-bold text-dark-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-500 leading-relaxed max-w-md">{step.description}</p>
                                        </>
                                    )}
                                </div>

                                {/* Mobile view handling (stacked) */}
                                <div className="md:hidden">
                                    <div className="text-primary-500 font-bold mb-2 uppercase tracking-widest text-xs">Step {idx + 1}</div>
                                    <h3 className="text-2xl font-bold text-dark-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frame 6: PROOF - High Impact Dark Section */}
            <section id="proof" className="py-32 bg-dark-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">Results that speak louder.</h2>
                            <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-md">
                                We track everything. Revenue, Leads, ROAS. Here is what consistent execution looks like.
                            </p>
                            <AnimatedButton href="/#contact" variant="primary" size="lg">Start Your Campaign</AnimatedButton>
                        </div>
                        <div className="space-y-6">
                            {service.proof.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h4 className="text-lg font-medium text-gray-300">{item.title}</h4>
                                        <span className="text-3xl font-bold text-primary-400">{item.stat}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Frame 7: KPIS - Minimalist Grid */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <p className="uppercase tracking-widest text-sm text-gray-400 font-semibold mb-12">We Are Accountable For</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {service.kpis.map((kpi, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary-500" />
                                <span className="text-xl font-medium text-dark-900">{kpi}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frame 8: FAQs - Clean Accordion */}
            <section className="py-32 bg-gray-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-dark-900 mb-16 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {service.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-dark-900 text-lg pr-8">{faq.question}</span>
                                    <span className={`transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-primary-500' : 'text-gray-400'}`}>
                                        <ChevronDown />
                                    </span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaqIndex === idx ? 'auto' : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frame 9: FINAL CTA - Minimal */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark-900 mb-8">
                        Ready to scale?
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 font-light">
                        No sales scripts. Just a strategy chat to see if we're a fit.
                    </p>
                    <AnimatedButton href="/#contact" size="lg" className="min-w-[240px] shadow-xl shadow-primary-500/20">
                        Book Strategy Call
                    </AnimatedButton>
                </div>
            </section>

        </div>
    );
};
