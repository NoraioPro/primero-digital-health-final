import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { InstagramEmbed, FacebookEmbed } from "react-social-media-embed";
import { InteractiveIcon } from "./AnimatedIcons";
import { Instagram, Facebook } from "lucide-react";

const SocialFeeds = () => {
    const { t, language } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Design Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">
                        {language === 'ar' ? 'تابعونا' : 'Follow Us'}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {language === 'ar' ? 'ابق على تواصل معنا' : 'Stay Connected'}
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        {language === 'ar'
                            ? 'تابع أحدث الحالات وابتسامات مرضانا على منصات التواصل الاجتماعي الخاصة بنا'
                            : 'Follow our latest transformations and patient smiles across our social platforms'}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                    {/* Instagram Feed */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-apple rounded-[2.5rem] p-6 md:p-8 flex flex-col border-white/10 shadow-3xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-lg">
                                <Instagram className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Instagram</h3>
                                <p className="text-sm text-slate-400">@primero.clinic</p>
                            </div>
                            <motion.a
                                href="https://www.instagram.com/primero.clinic/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-auto text-sm font-bold text-primary px-4 py-2 rounded-xl bg-primary/10 border border-primary/20"
                            >
                                {language === 'ar' ? 'متابعة' : 'Follow'}
                            </motion.a>
                        </div>

                        <div className="rounded-3xl overflow-hidden bg-slate-900/50 min-h-[500px] flex items-center justify-center">
                            <InstagramEmbed url="https://www.instagram.com/primero.clinic/" width="100%" />
                        </div>
                    </motion.div>

                    {/* Facebook Feed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-apple rounded-[2.5rem] p-6 md:p-8 flex flex-col border-white/10 shadow-3xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center shadow-lg">
                                <Facebook className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Facebook</h3>
                                <p className="text-sm text-slate-400">Primero Dental Clinic</p>
                            </div>
                            <motion.a
                                href="https://www.facebook.com/Primero.Clinic/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="ml-auto text-sm font-bold text-primary px-4 py-2 rounded-xl bg-primary/10 border border-primary/20"
                            >
                                {language === 'ar' ? 'متابعة' : 'Follow'}
                            </motion.a>
                        </div>

                        <div className="rounded-3xl overflow-hidden bg-white min-h-[500px] flex items-center justify-center w-full">
                            <FacebookEmbed url="https://www.facebook.com/Primero.Clinic/" width="100%" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialFeeds;
