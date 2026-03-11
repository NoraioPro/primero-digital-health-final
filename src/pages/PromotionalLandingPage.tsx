import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Star, Shield, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { clinicImages } from "@/lib/clinicImages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InteractiveIcon } from "@/components/AnimatedIcons";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import { galleryItems, videoGalleryItems } from "@/lib/galleryData";

const PromotionalLandingPage = () => {
    const { t } = useLanguage();
    const whatsappNumbers = ["201200093366", "201111113628"];
    const message = "Hello! I'm interested in your special dental offer.";
    const encodedMessage = encodeURIComponent(message);

    const handleWhatsAppClick = () => {
        whatsappNumbers.forEach(num => {
            window.open(`https://wa.me/${num}?text=${encodedMessage}`, "_blank");
        });
    };

    const benefits = [
        { title: "Advanced Technology", description: "3D Digital scanning and precise diagnosis for best results." },
        { title: "Expert Specialists", description: "Highly qualified doctors dedicated to your smile transformation." },
        { title: "Pain-Free Care", description: "Modern techniques designed for your total comfort." },
        { title: "Sterilization Excellence", description: "Highest international standards of hygiene and safety." }
    ];

    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30">
            <Helmet>
                <title>Special Offer | Primero Digital Health Clinic</title>
                <meta name="description" content="Exclusive dental care offers at Primero Digital Health. Book your consultation now via WhatsApp." />
            </Helmet>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-sm font-medium text-primary">Limited Time Offer</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
                            >
                                Transform Your Smile with <br />
                                <span className="text-gradient glow-text">Digital Perfection</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                            >
                                Experience the future of dentistry at Cairo's leading digital clinic. Get a personalized treatment plan and start your journey to a confident smile today.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <Button
                                    size="xl"
                                    className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 group"
                                    onClick={handleWhatsAppClick}
                                >
                                    <MessageCircle className="w-6 h-6 fill-white" />
                                    Book via WhatsApp
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="w-full sm:w-auto rounded-full border-white/10 hover:bg-white/5 gap-3"
                                    asChild
                                >
                                    <a href={`tel:+201200093366`}>
                                        <Phone className="w-5 h-5" />
                                        Call: 01200093366
                                    </a>
                                </Button>
                            </motion.div>

                            {/* Trust Badge */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                            >
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-primary fill-primary" />
                                    <span className="font-bold text-lg">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-lg">ISO Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-lg">Award Winning</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
                </section>

                {/* Benefits Grid */}
                <section className="py-24 bg-card/30 border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-8 rounded-3xl glass border border-white/5 hover:border-primary/20 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Showcase */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative"
                            >
                                <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-video">
                                    <iframe
                                        src="https://www.youtube.com/embed/MqzgZ19v3MI?autoplay=1&mute=1&loop=1&playlist=MqzgZ19v3MI&rel=0&controls=0&modestbranding=1&playsinline=1"
                                        title="Primero Digital Smile Design"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        className="w-full h-full border-0"
                                        style={{ pointerEvents: 'none' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-primary/20 shadow-2xl animate-bounce-slow">
                                    <p className="text-primary font-bold text-xl">Digital Smile Design</p>
                                    <p className="text-xs text-slate-400">See your results before starting</p>
                                </div>
                            </motion.div>

                            <div className="flex-1">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Precision at every stage of your <span className="text-primary text-gradient">journey</span>.
                                </h2>
                                <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                    We use advanced digital scanning to create a 3D model of your teeth. This allows us to plan your treatment with millimeter precision and show you the final result before we even begin.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "No messy traditional impressions",
                                        "Faster treatment times",
                                        "Predictable, beautiful results",
                                        "Personalized for your facial features"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-200">
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    size="lg"
                                    className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                                    onClick={handleWhatsAppClick}
                                >
                                    Claim This Offer Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Gallery Section */}
                <section id="gallery" className="py-24 bg-background px-4">
                    <div className="container mx-auto">
                        <div className="max-w-3xl mb-16 px-4 md:px-0 mx-auto text-center">
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Life at Primero</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Where Smiles Begin</h2>
                            <p className="text-slate-400 text-lg">Experience the warm atmosphere and professional excellence that makes Primero the top choice for families in Cairo.</p>
                        </div>
                        <Gallery
                            items={galleryItems}
                            showFilters={true}
                        />
                    </div>
                </section>

                {/* Video Gallery Section */}
                <VideoGallery
                    videos={videoGalleryItems}
                />

                {/* CTA Banner */}
                <section className="py-20 mb-20 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[4rem] overflow-hidden p-12 md:p-20 text-center glass border border-primary/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready for your new smile?</h2>
                            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
                                Click below to chat with our specialist and get your exclusive offer price today. Our team is ready to assist you.
                            </p>
                            <Button
                                size="xl"
                                className="rounded-full bg-primary hover:bg-primary/90 text-white gap-3 px-12 relative z-10 group shadow-2xl shadow-primary/40"
                                onClick={handleWhatsAppClick}
                            >
                                <MessageCircle className="w-6 h-6 fill-white" />
                                Start WhatsApp Chat
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Floating WhatsApp for conversion */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:bg-[#20ba59] transition-colors duration-300 border-4 border-white/20"
                onClick={handleWhatsAppClick}
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-8 h-8 text-white fill-white" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-white text-[10px] font-bold text-[#25D366] items-center justify-center shadow-sm">1</span>
                </span>
            </motion.button>
        </div>
    );
};

export default PromotionalLandingPage;
