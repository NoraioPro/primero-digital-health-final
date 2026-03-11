import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { CosmeticIcon } from "@/components/AnimatedIcons";
import { Sparkles, Camera, Palette, ShieldCheck } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const CosmeticPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('hollywoodSmile'),
            description: "Advanced porcelain veneers designed to transform your smile into a masterpiece.",
            icon: Sparkles
        },
        {
            title: t('digitalDesign'),
            description: "Preview your new smile with 3D digital simulation before we begin any treatment.",
            icon: Camera
        },
        {
            title: t('veneersLumineers'),
            description: "Ultra-thin, durable shells that correct chips, gaps, and permanent discoloration.",
            icon: Palette
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t('cosmeticTitle')} | {t('clinicName')}</title>
                <meta name="description" content={t('cosmeticIntro')} />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('cosmeticTitle')}
                heroIntro={t('cosmeticIntro')}
                features={features}
                icon={CosmeticIcon}
            >
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="container mx-auto px-4 py-20"
                >
                    <div className="glass rounded-[2rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-white mb-6">Aesthetic Excellence</h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                {t('cosmeticBenefits')} Our team combines artistic vision with medical precision to create smiles that are not just beautiful, but also functionally perfect and durable.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Natural-looking results",
                                    "Stain-resistant materials",
                                    "Minimally invasive techniques",
                                    "Lifelong durability"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-slate-300 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <ContactSection />
            </ServicePageLayout>
        </>
    );
};

export default CosmeticPage;
