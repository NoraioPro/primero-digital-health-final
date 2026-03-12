import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import BookingDialog from "@/components/BookingDialog";
import { InteractiveIcon } from "./AnimatedIcons";
import primeroLogo from "@/assets/primero-logo.svg";

const Navbar = () => {

  const { t, language } = useLanguage();

  const navLinks = [
    { name: t('home'), href: "/#home" },
    { name: t('services'), href: "/#services" },
    { name: t('technology'), href: "/#technology" },
    { name: t('about'), href: "/#why-choose" },
    { name: t('contact'), href: "/#location" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={primeroLogo} alt="Primero Dental Clinic" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-white">Primero</span>
            <span className={`text-primary font-bold ${language === 'ar' ? 'mr-1' : 'ml-1'}`}>Dental</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
              className="text-slate-300 hover:text-primary transition-colors duration-300 text-sm font-bold relative group"
            >
              {link.name}
              <span className={`absolute -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${language === 'ar' ? 'right-0' : 'left-0'}`} />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <a href="tel:01200093366" className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors group">
            <InteractiveIcon icon={Phone} className="w-4 h-4" />
            <span className="text-sm font-medium">01200093366</span>
          </a>
          <BookingDialog
            trigger={
              <Button variant="glow" size="default">
                {t('bookAppointment')}
              </Button>
            }
          />
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="scale-90 origin-right mr-1">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] lg:hidden"
            />

            {/* Centered Floating Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.9, y: -20, x: "-50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[60] lg:hidden overflow-hidden"
            >
              <div className="glass-apple rounded-[2.5rem] p-8 flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                <div className="w-12 h-1 bg-white/20 rounded-full mb-2" />

                <nav className="flex flex-col items-center gap-6 w-full">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 hover:text-primary transition-all duration-300 text-xl font-bold tracking-tight"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="h-px w-full bg-white/5 my-2" />

                <div className="flex flex-col items-center gap-6 w-full">
                  <LanguageSwitcher />

                  <BookingDialog
                    trigger={
                      <Button variant="glow" size="lg" className="w-full rounded-2xl py-6 text-lg font-bold">
                        {t('bookAppointment')}
                      </Button>
                    }
                  />

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest mt-2"
                  >
                    {language === 'ar' ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
