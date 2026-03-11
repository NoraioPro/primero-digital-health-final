import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { OrthoIcon } from "@/components/AnimatedIcons";
import { MoveRight, Smile, UserCheck, ShieldCheck } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import { CheckCircle2 } from "lucide-react";

const OrthodonticsPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('clearAligners'),
            description: "Virtually invisible orthodontic treatment using custom-made transparent aligners.",
            icon: UserCheck
        },
        {
            title: t('traditionalBraces'),
            description: "Time-tested metal and ceramic braces for complex structural corrections.",
            icon: ShieldCheck
        },
        {
            title: t('biteCorrection'),
            description: "Advanced solutions for overbites, underbites, and crossbites for all ages.",
            icon: Smile
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t('orthoTitle')} | {t('clinicName')}</title>
                <meta name="description" content={t('orthoIntro')} />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('orthoTitle')}
                heroIntro={t('orthoIntro')}
                features={features}
                icon={OrthoIcon}
            >
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="container mx-auto px-4 py-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">The Path to Alignment</h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                {t('orthoBenefits')} Whether you're considering braces for your child or looking for discreet clear aligners for yourself, we provide personalized treatment plans that fit your lifestyle.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Complimentary initial consultation",
                                    "State-of-the-art 3D imaging",
                                    "Flexible payment plans",
                                    "Shorter treatment duration"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-300">
                                        <MoveRight className="w-5 h-5 text-primary" />
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square glass rounded-3xl border border-white/10 flex items-center justify-center p-12 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                                <OrthoIcon className="w-full h-full text-primary relative z-10" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="py-24 bg-slate-900/30"
                >
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Clinical Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Patient Transformations</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Real results from our orthodontic department. Experience the precision of digital planning.</p>
                        </div>

                        <Gallery
                            showFilters
                            items={[]}
                        />
                    </div>
                </motion.section>

                <ContactSection />
            </ServicePageLayout>
        </>
    );
};

export default OrthodonticsPage;
