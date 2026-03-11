import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingDialog from "@/components/BookingDialog";
import { InteractiveIcon } from "./AnimatedIcons";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">{t('contactUs')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
            {t('bookYour')} <span className="text-gradient">{t('consultation')}</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {t('startJourney')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 border-white/10 bg-white/5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group">
                  <InteractiveIcon icon={MapPin} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('location')}</h3>
                  <p className="text-slate-300">{t('locationAddress')}</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border-white/10 bg-white/5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group">
                  <InteractiveIcon icon={Phone} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('phone')}</h3>
                  <a href="tel:01200093366" className="text-primary hover:text-primary/80 transition-colors text-xl font-bold">
                    01200093366
                  </a>
                  <p className="text-slate-400 text-sm mt-1">{t('callOrWhatsapp')}</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border-white/10 bg-white/5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group">
                  <InteractiveIcon icon={Clock} className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{t('workingHours')}</h3>
                  <p className="text-slate-200 font-medium">{t('workingDaily')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 lg:p-12 border-primary/20 flex flex-col justify-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {t('readyForSmile')}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t('bookToday')}
            </p>

            <div className="space-y-4">
              <BookingDialog
                trigger={
                  <button className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary/25 transition-all">
                    {t('bookAppointment')}
                    <InteractiveIcon icon={ArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                }
              />

              <a
                href="tel:01200093366"
                className="flex items-center justify-center gap-2 w-full h-14 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium"
              >
                <InteractiveIcon icon={Phone} className="w-5 h-5" />
                {t('callNumber')}
              </a>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                {t('joinPatients')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
