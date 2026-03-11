import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = "201200093366";

const FloatingWhatsApp = () => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

    return (
        <div className="fixed bottom-36 lg:bottom-6 right-4 lg:right-6 z-[100] flex flex-col items-end pointer-events-none">
            <div className="pointer-events-auto">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-72 overflow-hidden"
                    >
                        <div className="bg-[#075E54] p-4 text-white flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Primero Dental</h3>
                                    <p className="text-xs text-white/80">Typically replies quickly</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover relative">
                            <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90"></div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="relative bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-slate-800 dark:text-slate-200 mb-4 inline-block max-w-[85%] float-right"
                            >
                                {language === 'ar' ? 'مرحباً! كيف يمكننا مساعدتك اليوم؟ 😊' : 'Hello! How can we help you today? 😊'}
                            </motion.div>
                            <div className="clear-both"></div>
                        </div>
                        <div className="p-3 bg-white dark:bg-slate-900 flex justify-center">
                            <a 
                                href={whatsappUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white w-full py-2.5 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                {language === 'ar' ? 'بدء المحادثة' : 'Start Chat'}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: hasScrolled ? 1 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all z-[100] group relative"
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <MessageCircle className="w-8 h-8" />
                )}
                
                {/* Ping animation when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
                )}
            </motion.button>
            </div>
        </div>
    );
};

export default FloatingWhatsApp;
