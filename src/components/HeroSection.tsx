import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { clinicImages } from "@/lib/clinicImages";
import BookingDialog from "@/components/BookingDialog";
import { InteractiveIcon } from "./AnimatedIcons";

const HeroSection = () => {
  const { t, language } = useLanguage();
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

    {/* Animated Grid */}
    <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]" />

    {/* Glow Effects */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{
      animationDelay: "1.5s"
    }} />

    {/* Floating Particles */}
    {[...Array(12)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-primary/40 rounded-full" style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }} animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.8, 0.2]
    }} transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2
    }} />)}

    <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-32 pb-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 mb-6 group">
            <InteractiveIcon icon={Shield} className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{t('yearsExcellence')}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{t('advanced')}</span>
            <br />
            <span className="text-gradient glow-text">
              {t('smart')} {t('dentistry')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t('experienceFuture')} {t('precisionDiagnosis')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
            <BookingDialog
              trigger={
                <Button variant="hero" size="xl" className="group">
                  {t('bookConsultation')}
                  <InteractiveIcon icon={ArrowRight} className={`w-5 h-5 transition-transform ${language === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Button>
              }
            />
            <Button variant="glass" size="xl" asChild>
              <a href="#services">
                {t('exploreServices')}
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
              </div>
              <span className="text-muted-foreground text-sm">{t('rating')}</span>
            </div>
            <div className="flex items-center gap-2 group">
              <InteractiveIcon icon={Award} className="w-5 h-5 text-primary" />
              <span className="text-slate-200 text-sm font-medium">{t('certifiedSpecialists')}</span>
            </div>
            <div className="flex items-center gap-2 group">
              <InteractiveIcon icon={Shield} className="w-5 h-5 text-primary" />
              <span className="text-slate-200 text-sm font-medium">{t('sterilization')}</span>
            </div>
          </motion.div>
        </div>

        {/* New Live Clinic Video Showcase */}
        {clinicImages.hero.enabled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <div className="relative z-10">
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white/10 shadow-2xl backdrop-blur-sm aspect-[9/16] sm:aspect-[3/4] md:aspect-[4/5] flex items-center justify-center bg-black/40">
                {/* YouTube embed: autoplay + muted + loop + no related videos */}
                <iframe
                  src="https://www.youtube.com/embed/MqzgZ19v3MI?autoplay=1&mute=1&loop=1&playlist=MqzgZ19v3MI&rel=0&controls=0&modestbranding=1&playsinline=1"
                  title="Primero Dental Clinic"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full border-0 object-cover scale-110"
                  style={{ pointerEvents: 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 glass p-4 md:p-6 rounded-2xl border-primary/20 shadow-xl z-20"
              >
                <p className="text-xs md:text-sm font-semibold text-primary mb-1">Primero Digital</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Cairo's Leading Dental Center</p>
              </motion.div>
            </div>

            {/* Background glow for video */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl -z-10 animate-scan" />
          </motion.div>
        )}
      </div>
    </div>

    {/* Scroll Indicator */}
    <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.6
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
        <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>;
};
export default HeroSection;