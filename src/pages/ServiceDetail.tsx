import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, BarChart as BarChartIcon, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatedSection, AnimatedHeading, AnimatedBadge, AnimatedButton, MagneticCard, StaggeredList, AnimatedCounter } from '../components/ui/AnimatedComponents';
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="pt-20">

            {/* Frame 1: HERO */}
            <section className="relative py-24 bg-dark-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900 via-dark-900 to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <AnimatedBadge variant="accent" className="mb-6">{service.title}</AnimatedBadge>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {service.hero.headline}
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            {service.hero.subhead}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <AnimatedButton href="/#contact" size="lg">Book Strategy Call</AnimatedButton>
                            <AnimatedButton href="#proof" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">View Case Studies</AnimatedButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Frame 2: WHO THIS IS FOR */}
            <AnimatedSection className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <AnimatedHeading className="mb-6">Who This Is For</AnimatedHeading>
                        <p className="text-lg text-gray-600 mb-8">
                            We prefer to partner with businesses where we can make the biggest impact. This service is ideal if you are:
                        </p>
                        <StaggeredList className="space-y-4">
                            {service.whoIsThisFor.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="text-primary-500 shrink-0 mt-1" size={20} />
                                    <span className="text-dark-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </StaggeredList>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center min-h-[400px]">
                        {/* Abstract visual or icon for "Ideal Client" */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse" />
                            <service.icon size={120} className="text-primary-500 relative z-10" strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Frame 3: PROBLEMS WE SOLVE */}
            <AnimatedSection background="gray">
                <div className="text-center mb-16">
                    <AnimatedHeading>Problems We Solve</AnimatedHeading>
                    <p className="text-gray-600 mt-4">Stop letting these roadblocks hold back your growth.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.painPoints.map((pain, idx) => (
                        <MagneticCard key={idx} className="p-8 border-l-4 border-l-primary-500">
                            <div className="text-5xl font-bold text-gray-100 mb-4 absolute top-4 right-4 -z-0 select-none">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <h4 className="text-xl font-bold text-dark-800 mb-2 relative z-10">{pain}</h4>
                            <p className="text-gray-600 relative z-10">We eliminate this bottleneck so you can focus on scaling.</p>
                        </MagneticCard>
                    ))}
                </div>
            </AnimatedSection>

            {/* Frame 4: OUR FRAMEWORK */}
            <AnimatedSection>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="order-2 lg:order-1">
                        <AnimatedHeading className="mb-8">Our Proven Framework</AnimatedHeading>
                        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-200">
                            {service.framework.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative flex gap-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center shrink-0 z-10 text-primary-600 font-bold text-sm shadow-sm relative">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-dark-800 mb-2">{step.title}</h4>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 bg-dark-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-2xl font-bold mb-6 relative z-10">Why this works</h3>
                        <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                            Most agencies throw random tactics at the wall. We use a linear, scientific approach that eliminates guessing. By following these exact steps, we remove risk and ensure predictable outcomes.
                        </p>
                        <div className="relative z-10 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <BarChartIcon className="text-primary-400" />
                                <span className="font-bold">Data-Driven Decisions</span>
                            </div>
                            <p className="text-sm text-gray-400">Every move is backed by real-time analytics.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Frame 5: TOOLS & PLATFORMS */}
            <section className="py-12 border-y border-gray-100 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-400 font-semibold uppercase tracking-wider text-sm mb-8">
                        Powering your growth with the best tools
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {service.tools.map((tool, idx) => (
                            <span key={idx} className="text-xl md:text-2xl font-bold text-dark-400 hover:text-primary-600 transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frame 6: PROOF (Mini case studies) */}
            <AnimatedSection id="proof" background="dark">
                <div className="text-center mb-16">
                    <AnimatedHeading className="text-white">Proof it Works</AnimatedHeading>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {service.proof.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-dark-800 p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4">
                                {item.stat}
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-400">{item.description}</p>

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center text-sm text-primary-400 font-medium group-hover:gap-2 transition-all">
                                Read full story <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Frame 7: KPIs & REPORTING */}
            <AnimatedSection>
                <div className="bg-primary-50 rounded-3xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-900 mb-6">Metrics that actually matter.</h2>
                            <p className="text-gray-700 mb-8 text-lg">
                                We don't hide behind vanity metrics like "impressions" or "reach" (unless that's the goal). We report on numbers that put money in your bank account.
                            </p>
                            <h4 className="font-bold text-dark-800 mb-4 uppercase tracking-wide text-sm">Our Primary KPIs:</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {service.kpis.map((kpi, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm font-semibold text-dark-700 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                                        {kpi}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            {/* Abstract Representation of a Dashboard */}
                            <div className="bg-white rounded-xl shadow-2xl p-6 relative z-10">
                                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase">Total Conversions</div>
                                        <div className="text-2xl font-bold text-dark-900">142</div>
                                    </div>
                                    <div className="text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded">+24%</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary-500 w-[75%]" />
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary-400 w-[45%]" />
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-dark-700 w-[60%]" />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between text-sm text-gray-500">
                                    <span>Cost / Conv.</span>
                                    <span className="font-mono text-dark-900 font-bold">$12.45</span>
                                </div>
                            </div>

                            {/* Decorative elements behind */}
                            <div className="absolute -top-6 -right-6 w-full h-full bg-dark-800 rounded-xl -z-0 opacity-10 rotate-6" />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Frame 8: FAQs */}
            <AnimatedSection background="gray">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <AnimatedHeading>Frequently Asked Questions</AnimatedHeading>
                    </div>
                    <div className="space-y-4">
                        {service.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-dark-800 text-lg pr-4">{faq.question}</span>
                                    {openFaqIndex === idx ? <ChevronUp className="text-primary-500 shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaqIndex === idx ? 'auto' : 0, opacity: openFaqIndex === idx ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Frame 9: CTA */}
            <section className="py-24 bg-dark-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-radial from-primary-900/40 to-dark-900/90 z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to scale your <span className="text-gradient leading-relaxed">{service.title}</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Stop guessing. Start growing. Book your free strategy session today.
                    </p>

                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto mb-10 text-left">
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <HelpCircle size={20} className="text-primary-400" />
                            What happens on the call?
                        </h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary-400 mt-1 shrink-0" /> We analyze your current setup and identify "low hanging fruit".</li>
                            <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary-400 mt-1 shrink-0" /> We share a forecasted growth plan based on your budget.</li>
                            <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary-400 mt-1 shrink-0" /> No high-pressure sales. If we aren't a fit, we'll tell you.</li>
                        </ul>
                    </div>

                    <AnimatedButton href="/#contact" size="lg" variant="accent" className="w-full md:w-auto min-w-[250px]">
                        Book Strategy Call
                    </AnimatedButton>
                    <p className="text-gray-500 text-sm mt-4">No pressure. No fake promises.</p>
                </div>
            </section>

        </div>
    );
};
