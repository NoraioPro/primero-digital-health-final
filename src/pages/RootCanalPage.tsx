import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { RootCanalIcon } from "@/components/AnimatedIcons";
import { Zap, Microscope, Heart, ShieldCheck } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const RootCanalPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('painFree'),
            description: "Advanced local anaesthesia and gentle techniques to ensure zero discomfort during work.",
            icon: Heart
        },
        {
            title: t('modernTech'),
            description: "We use high-precision rotary instruments for thorough and efficient canal cleaning.",
            icon: Zap
        },
        {
            title: t('highSuccess'),
            description: "Our specialist endodontic techniques offer exceptional success rates for tooth saving.",
            icon: Microscope
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t('rootCanalTitle')} | {t('clinicName')}</title>
                <meta name="description" content={t('rootCanalIntro')} />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('rootCanalTitle')}
                heroIntro={t('rootCanalIntro')}
                features={features}
                icon={RootCanalIcon}
            >
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="container mx-auto px-4 py-20"
                >
                    <div className="p-8 md:p-12 glass rounded-3xl border border-white/10 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">Saving Your Natural Teeth</h2>
                        <p className="text-lg text-slate-400 mb-10">
                            {t('rootCanalBenefits')} A root canal is often the best way to preserve your natural smile. Our clinics use microscopic precision to ensure every treatment is performed to the highest standard.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { count: "100%", label: "Bio-Safety" },
                                { count: "Painless", label: "Experience" },
                                { count: "Expert", label: "Care" },
                                { count: "OneVisit", label: "Options" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-2xl font-bold text-primary">{stat.count}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <ContactSection />
            </ServicePageLayout>
        </>
    );
};

export default RootCanalPage;
