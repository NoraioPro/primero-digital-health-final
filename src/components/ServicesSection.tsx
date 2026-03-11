import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { clinicImages } from "@/lib/clinicImages";
import {
  CosmeticIcon,
  ImplantIcon,
  OrthoIcon,
  RootCanalIcon,
  SurgeryIcon,
  PediatricIcon,
} from "@/components/AnimatedIcons";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: CosmeticIcon,
      title: t('cosmeticDentistry'),
      description: t('cosmeticDesc'),
      features: [t('hollywoodSmile'), t('veneersLumineers'), t('digitalDesign')],
      href: "/cosmetic-dentistry"
    },
    {
      icon: ImplantIcon,
      title: t('dentalImplants'),
      description: t('implantsDesc'),
      features: [t('digitalPlanning'), t('premiumImplants'), t('bonePreservation')],
      href: "/zeraet-asnan-madinet-nasr"
    },
    {
      icon: OrthoIcon,
      title: t('orthodontics'),
      description: t('orthoDesc'),
      features: [t('traditionalBraces'), t('clearAligners'), t('biteCorrection')],
      href: "/orthodontics"
    },
    {
      icon: RootCanalIcon,
      title: t('rootCanal'),
      description: t('rootCanalDesc'),
      features: [t('painFree'), t('modernTech'), t('highSuccess')],
      href: "/root-canal-treatment"
    },
    {
      icon: SurgeryIcon,
      title: t('oralSurgery'),
      description: t('surgeryDesc'),
      features: [t('wisdomRemoval'), t('implantSurgery'), t('jawTreatment')],
      href: "/oral-surgery"
    },
    {
      icon: PediatricIcon,
      title: t('pediatricDentistry'),
      description: t('pediatricDesc'),
      features: [t('gentleCare'), t('preventionFocus'), t('growthMonitoring')],
      image: clinicImages.pediatric.enabled ? clinicImages.pediatric.url : null,
      imageAlt: clinicImages.pediatric.alt,
      href: "/asnan-atfal"
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{t('ourServices')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 md:mb-6 text-white leading-tight">
            {t('comprehensiveCare')} <span className="text-gradient">{t('dentalCare')}</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            {t('servicesDesc')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.a
                href={service.href}
                className="block h-full cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="glass rounded-2xl p-6 md:p-8 h-full border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] group relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Optional Image */}
                  {service.image && (
                    <div className="mb-6 rounded-xl overflow-hidden aspect-video border border-border/50 relative group/img">
                      <img
                        src={service.image}
                        alt={service.imageAlt || service.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/5 group-hover/img:bg-transparent transition-colors" />
                    </div>
                  )}

                  {/* Icon */}
                  {!service.image && (
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    {t('learnMore')} <span className="text-lg">→</span>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5" />
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
