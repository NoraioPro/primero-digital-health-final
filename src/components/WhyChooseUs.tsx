import { motion } from "framer-motion";
import { Shield, Award, Users, Microscope, Clock, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { clinicImages } from "@/lib/clinicImages";
import { InteractiveIcon } from "./AnimatedIcons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Microscope,
      title: t('advancedTech'),
      description: t('advancedTechDesc'),
    },
    {
      icon: Award,
      title: t('certifiedExperts'),
      description: t('certifiedExpertsDesc'),
    },
    {
      icon: Users,
      title: t('allSpecialties'),
      description: t('allSpecialtiesDesc'),
    },
    {
      icon: Shield,
      title: t('sterilization100'),
      description: t('sterilizationDesc'),
    },
    {
      icon: Clock,
      title: t('experience20'),
      description: t('experienceDesc'),
    },
    {
      icon: Heart,
      title: t('patientCentered'),
      description: t('patientCenteredDesc'),
    },
  ];

  return (
    <section id="why-choose" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{t('whyChooseUs')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
            {t('excellencein')} <span className="text-gradient">{t('dentalCare')}</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {t('builtOnTrust')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 shadow-xl hover:bg-white/[0.08] hover:border-primary/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <InteractiveIcon
                    icon={reason.icon}
                    className="w-6 h-6 text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clinic Team Image */}
        {clinicImages.team.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative group max-w-4xl w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="space-y-6">
                <div className="relative rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
                  <img
                    src={clinicImages.team.url}
                    alt={clinicImages.team.alt}
                    className="w-full h-auto max-h-[350px] md:max-h-[500px] object-cover md:object-contain transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-white/10 backdrop-blur-lg shadow-2xl w-full transform transition-all duration-500 hover:translate-y-[-5px]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white text-lg md:text-2xl font-bold tracking-tight leading-none mb-1">{t('ourProfessionalTeam')}</p>
                      <div className="h-0.5 w-12 bg-primary rounded-full" />
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium uppercase tracking-[0.2em] border-t border-white/5 pt-3 mt-1">
                    {t('teamCommitment')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">{t('internationalStandards')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
