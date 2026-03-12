import { motion } from "framer-motion";
import { Scan, Smile, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { InteractiveIcon } from "./AnimatedIcons";

const TechnologySection = () => {
  const { t } = useLanguage();

  const technologies = [
    {
      icon: Scan,
      title: t('scannerTitle'),
      description: t('scannerDesc'),
      benefits: [
        t('scannerBenefit1'),
        t('scannerBenefit2'),
        t('scannerBenefit3'),
        t('scannerBenefit4'),
      ],
    },
    {
      icon: Smile,
      title: t('smileDesignTitle'),
      description: t('smileDesignDesc'),
      benefits: [
        t('smileBenefit1'),
        t('smileBenefit2'),
        t('smileBenefit3'),
        t('smileBenefit4'),
      ],
    },
  ];

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{t('technologyTitle')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
            {t('advancedDigital')} <span className="text-gradient">{t('digitalDentistry')}</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {t('techDesc')}
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 h-full border-border/50 hover:border-primary/30 transition-all duration-500">
                {/* Animated Scanner Line */}
                <div className="absolute top-0 left-0 right-0 h-full overflow-hidden rounded-3xl pointer-events-none">
                  <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <InteractiveIcon icon={tech.icon} className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">{tech.description}</p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {tech.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <InteractiveIcon icon={CheckCircle2} className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-slate-100 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: "20+", label: t('yearsExpLabel') },
            { value: "10K+", label: t('happyPatientsLabel') },
            { value: "100%", label: t('sterilizationLabel') },
            { value: "6", label: t('specialtiesLabel') },
          ].map((stat) => (
            <motion.div 
              key={stat.label} 
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center glass rounded-2xl p-6 border-border/30 transition-all hover:border-primary/30"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;
