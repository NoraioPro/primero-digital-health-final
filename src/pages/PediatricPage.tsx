import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { PediatricIcon } from "@/components/AnimatedIcons";
import { ShieldCheck, Sparkles, HeartPulse, Baby } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const PediatricPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('kidsFirstVisit'),
            description: "A gentle introduction to dentistry, ensuring your child's first memory is happy.",
            icon: Baby
        },
        {
            title: t('painlessLaser'),
            description: "No-drill, no-shot laser filling technology perfect for young teeth.",
            icon: Sparkles
        },
        {
            title: t('behavioralTherapy'),
            description: "Child-centered psychological techniques to remove fear and build trust.",
            icon: HeartPulse
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t('pediatricDentistry')} | {t('clinicName')}</title>
                <meta name="description" content={t('pediatricIntro')} />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('pediatricDentistry')}
                heroIntro={t('pediatricIntro')}
                features={features}
                icon={PediatricIcon}
            >
                {/* Specialized Approach Section */}
                <motion.section
                    id="how-to-kids"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="container mx-auto px-4 py-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6 underline decoration-primary decoration-4 underline-offset-8">
                                {t('pediatricApproachTitle')}
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                {t('pediatricApproachDesc')}
                            </p>
                        </div>
                        <div className="glass rounded-[2rem] p-8 border border-white/10 text-center">
                            <PediatricIcon className="w-32 h-32 text-primary mx-auto mb-6" />
                            <p className="text-primary font-bold text-xl italic">"Friendly, Safe, and Fun!"</p>
                        </div>
                    </div>
                </motion.section>

                {/* Sterilization Section */}
                <motion.section
                    id="sterilization"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="container mx-auto px-4 py-16"
                >
                    <div className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors" />
                        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-10 h-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">{t('pediatricSterilizationTitle')}</h2>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                                    {t('pediatricSterilizationDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <div id="contact-us">
                    <ContactSection />
                </div>
            </ServicePageLayout>
        </>
    );
};

export default PediatricPage;
