import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickActionBar from "@/components/QuickActionBar";
import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface ServicePageLayoutProps {
    heroTitle: string;
    heroIntro: string;
    features: Feature[];
    children?: React.ReactNode;
    icon: React.ComponentType<{ className?: string }>;
}

const ServicePageLayout = ({
    heroTitle,
    heroIntro,
    features,
    children,
    icon: Icon
}: ServicePageLayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16 md:py-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {heroTitle}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                                {heroIntro}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 relative flex justify-center"
                        >
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
                                <div className="relative w-full h-full glass rounded-[2.5rem] flex items-center justify-center p-12 border border-white/10 shadow-2xl">
                                    <Icon className="w-full h-full text-primary" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="container mx-auto px-4 py-16 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-primary/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {children}
            </main>

            <Footer />
            <QuickActionBar />
        </div>
    );
};

export default ServicePageLayout;
