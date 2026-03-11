import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram } from "lucide-react";
import { InteractiveIcon } from "./AnimatedIcons";
import primeroLogo from "@/assets/primero-logo.svg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src={primeroLogo} alt="Primero Dental Clinic" className="h-10 w-auto" />
            <div>
              <span className="text-lg font-bold text-white">Primero</span>
              <span className="text-primary font-bold ml-1">Dental</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {['home', 'services', 'technology', 'about', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item === 'about' ? 'why-choose' : item === 'contact' ? 'location' : item}`}
                whileHover={{ y: -2, color: '#14b8a6' }}
                className="text-slate-400 transition-colors font-medium"
              >
                {t(item as any)}
              </motion.a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.facebook.com/Primero.Clinic/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Facebook"
            >
              <InteractiveIcon icon={Facebook} className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/primero.clinic/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9, rotate: 15 }}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Instagram"
            >
              <InteractiveIcon icon={Instagram} className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Arabic Text via Translation */}
          <p className="text-sm text-slate-400">
            {t('primeroCenter')}
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {t('rightsReserved')}
          </p>
          <p className="text-[10px] md:text-xs text-slate-500 mt-2">
            {t('bestClinic')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
