import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { ImplantIcon } from "@/components/AnimatedIcons";
import { CheckCircle2, Globe, ShieldCheck, Timer } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const ImplantsPage = () => {
    const { t } = useLanguage();

    const features = [
        { title: t('germanQuality'), description: "We use premium German & Swiss implants with lifelong warranties.", icon: Globe },
        { title: t('lifetimeWarranty'), description: "Full coverage on all implant hardware for your peace of mind.", icon: ShieldCheck },
        { title: t('fixedInOneDay'), description: "Walk out with temporary fixed teeth in just 24 hours.", icon: Timer }
    ];

    return (
        <>
            <Helmet>
                <title>{t('dentalImplants')} | {t('clinicName')}</title>
                <meta name="description" content={t('implantsIntro')} />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('dentalImplants')}
                heroIntro={t('implantsIntro')}
                features={features}
                icon={ImplantIcon}
            >
                <motion.section
                    id="why-us"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="container mx-auto px-4 py-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-white/5">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">{t('implantsTechTitle')}</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {t('implantsTechDesc')}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    '3D CBCT Scanning with Micro-Precision',
                                    'Guided Surgery Templates (No Human Error)',
                                    'High-grade Grade 5 Titanium Implants',
                                    'Computer-milled Zirconia Crowns'
                                ].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div id="process" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col justify-center text-center">
                                <span className="text-4xl font-bold text-primary mb-2">100%</span>
                                <span className="text-sm text-slate-400 font-medium whitespace-nowrap">Digital Planning</span>
                            </div>
                            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col justify-center text-center">
                                <span className="text-4xl font-bold text-primary mb-2">99.8%</span>
                                <span className="text-sm text-slate-400 font-medium">Success Rate</span>
                            </div>
                            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col justify-center text-center sm:col-span-2">
                                <span className="text-4xl font-bold text-primary mb-2">Fast Recovery</span>
                                <span className="text-sm text-slate-400 font-medium">Minimally Invasive Guided Systems</span>
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

export default ImplantsPage;
