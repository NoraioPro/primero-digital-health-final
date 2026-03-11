import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

const GallerySection = () => {
    const { t } = useLanguage();

    const galleryImages = [
        "/images/gallery/smile-1.png",
        "/images/gallery/smile-2.png",
        "/images/gallery/smile-3.png",
        "/images/gallery/smile-4.png",
        "/images/gallery/smile-5.png",
        "/images/gallery/smile-6.png",
        "/images/gallery/smile-7.png",
        "/images/gallery/smile-8.png",
        "/images/gallery/smile-9.png",
        "/images/gallery/smile-10.png",
    ];

    return (
        <section id="gallery" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">{t('smileGallery')}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 text-white leading-tight">
                        {t('transformingLives')}
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
                        {t('seeTheDifference')}
                    </p>
                </motion.div>

                {/* Before & After Feature */}
                <div className="max-w-4xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl group mx-2 md:mx-0"
                    >
                        <img
                            src="/images/gallery/before-after-ortho.png"
                            alt="Dental Treatment Transformation"
                            className="w-full h-auto object-cover max-h-[500px]"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 bg-background/40">
                            <span className="text-primary font-bold text-xs uppercase tracking-widest">{t('beforeAfter')}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 max-w-7xl mx-auto overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className="relative aspect-square overflow-hidden group border-white/5 border lg:border-none"
                        >
                            <img
                                src={src}
                                alt={`Patient Smile ${index + 1}`}
                                className="w-full h-full object-contain bg-slate-900/20 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <CheckCircle2 className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
