import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Play } from "lucide-react";

const VideoShowcase = () => {
    const { t } = useLanguage();

    const videos = [
        { id: "5oA_RawPR8M", title: "Clinical Case 1" },
        { id: "hku8K1wz5Ys", title: "Clinical Case 2" },
        { id: "Hkosr5ytyq0", title: "Clinical Case 3" },
        { id: "lMHZdpMaZfE", title: "Clinical Case 4" },
    ];

    return (
        <section id="video-review" className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">{t('videoShowcase')}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
                        {t('clinicalHighlights')}
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        {t('watchLatestCases')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[9/16] sm:aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group-hover:border-primary/30 transition-all duration-500">
                                {/* YouTube Embed */}
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autohide=1`}
                                    title={video.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />

                                {/* Overlay for premium feel (shows only when not playing) - Note: Iframes block pointer events so this is mostly decoration */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute bottom-6 left-6 flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                                            <Play className="w-4 h-4 text-primary fill-primary" />
                                        </div>
                                        <span className="text-white font-bold text-sm tracking-wide">Case Highlight</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
