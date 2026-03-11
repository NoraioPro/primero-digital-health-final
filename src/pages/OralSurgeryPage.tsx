import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { SurgeryIcon } from "@/components/AnimatedIcons";
import { Activity, ShieldAlert, Scissors, ShieldCheck } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const OralSurgeryPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('wisdomRemoval'),
            description: "Gentle and precise removal of impacted or problematic wisdom teeth.",
            icon: Scissors
        },
        {
            title: t('implantSurgery'),
            description: "Surgical preparation and placement of high-quality dental implants with 3D guide.",
            icon: Activity
        },
        {
            title: t('jawTreatment'),
            description: "Specialized treatment for jaw pain, structural issues, and surgical prep.",
            icon: ShieldAlert
        }
    ];

    return (
        <>
            <Helmet>
                <title>{t('surgeryTitle')} | {t('clinicName')}</title>
                <meta name="description" content={t('surgeryIntro')} />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('surgeryTitle')}
                heroIntro={t('surgeryIntro')}
                features={features}
                icon={SurgeryIcon}
            >
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="container mx-auto px-4 py-20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-12 border-b border-white/5 pb-20">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-bold text-white">Surgical Precision & Safety</h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                {t('surgeryBenefits')} Our surgical team is trained in the latest minimally invasive techniques to ensure faster healing and minimal postoperative discomfort.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "Sterile surgical environment",
                                    "Advanced local anaesthesia",
                                    "Post-op care kits",
                                    "Sedation options"
                                ].map((text, i) => (
                                    <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 aspect-video glass rounded-3xl border border-white/10 flex items-center justify-center">
                            <SurgeryIcon className="w-1/2 h-1/2 text-primary" />
                        </div>
                    </div>
                </motion.section>

                <ContactSection />
            </ServicePageLayout>
        </>
    );
};

export default OralSurgeryPage;
