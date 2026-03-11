import { motion } from "framer-motion";
import {
    MapPin,
    Clock,
    NotebookPen,
    CalendarDays,
    PhoneCall,
    ExternalLink,
    MessageCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { InteractiveIcon } from "./AnimatedIcons";
import BookingDialog from "./BookingDialog";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const QuickActionBar = () => {
    const { t, language } = useLanguage();

    const actions = [
        {
            id: 'location',
            icon: MapPin,
            color: '#4285F4', // Google Blue
            label: t('location'),
            content: (
                <div className={`p-4 w-64 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-primary">{t('location')}</h4>
                    </div>
                    <p className="text-sm text-foreground mb-4 leading-relaxed">{t('locationAddress')}</p>
                    <Button variant="hero" size="sm" className="w-full group" asChild>
                        <a
                            href="https://maps.app.goo.gl/yxHMrh5jc2PXDpVz9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            {t('viewOnGoogle')}
                            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </a>
                    </Button>
                </div>
            )
        },
        {
            id: 'hours',
            icon: Clock,
            color: '#FF9500', // Warning/Orange
            label: t('workingHours'),
            content: (
                <div className={`p-4 w-56 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-primary">{t('workingHours')}</h4>
                    </div>
                    <p className="text-sm text-foreground font-medium">{t('workingDaily')}</p>
                </div>
            )
        },
        {
            id: 'booking',
            icon: NotebookPen,
            color: '#5856D6', // Purple
            label: t('bookAppointment'),
            isDialog: true
        },
        {
            id: 'timetable',
            icon: CalendarDays,
            color: '#FF2D55', // Pinkish Red
            label: t('doctorsTimetable'),
            content: (
                <div className={`p-4 w-56 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="flex items-center gap-2 mb-3">
                        <CalendarDays className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-primary">{t('doctorsTimetable')}</h4>
                    </div>
                    <p className="text-sm text-foreground font-medium">Available 2:00 PM - 10:00 PM</p>
                    <p className="text-xs text-muted-foreground mt-2">Check availability via booking</p>
                </div>
            )
        },
        {
            id: 'whatsapp',
            icon: MessageCircle,
            color: '#25D366', // WhatsApp Green
            label: 'WhatsApp',
            href: 'https://wa.me/201200093366'
        },
        {
            id: 'emergency',
            icon: PhoneCall,
            color: '#34C759', // Success/Green
            label: t('emergencyCase'),
            href: 'tel:01200093366'
        }
    ];

    return (
        <>
            {/* Desktop Sidebar - Premium Floating Glass (Apple Style) */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] hidden lg:flex">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                    className="flex flex-row glass-apple rounded-full p-2.5 gap-2 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/5 items-center"
                >
                {actions.map((action) => (
                    <div key={action.id} className="relative group/item">
                        {action.isDialog ? (
                            <BookingDialog
                                trigger={
                                    <button className="relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 hover:bg-white/10 group/btn shadow-sm hover:shadow-xl hover:scale-110">
                                        <InteractiveIcon
                                            icon={action.icon}
                                            className="w-6 h-6 text-white/70 group-hover/btn:scale-110 transition-all duration-500"
                                            style={{ color: action.color }}
                                        />

                                        {/* Smart Label */}
                                        <div className={cn(
                                            "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2.5 rounded-2xl glass-apple border border-white/10 text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 translate-y-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 shadow-2xl z-[110]"
                                        )}>
                                            {action.label}
                                        </div>
                                    </button>
                                }
                            />
                        ) : action.href ? (
                            <motion.a
                                href={action.href}
                                animate={action.id === 'whatsapp' ? { scale: [1, 1.08, 1] } : {}}
                                transition={action.id === 'whatsapp' ? { duration: 3, repeat: Infinity } : {}}
                                className="relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 hover:bg-white/10 group/btn shadow-sm hover:shadow-xl hover:scale-110"
                            >
                                <InteractiveIcon
                                    icon={action.icon}
                                    className="w-6 h-6 text-white/70 group-hover/btn:scale-110 transition-all duration-500"
                                    style={{ color: action.color }}
                                />

                                {/* Smart Label */}
                                <div className={cn(
                                    "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2.5 rounded-2xl glass-apple border border-white/10 text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 translate-y-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 shadow-2xl z-[110]"
                                )}>
                                    {action.label}
                                </div>
                            </motion.a>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button className="relative w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 hover:bg-white/10 group/btn shadow-sm hover:shadow-xl hover:scale-110">
                                        <InteractiveIcon
                                            icon={action.icon}
                                            className="w-6 h-6 text-white/70 group-hover/btn:scale-110 transition-all duration-500"
                                            style={{ color: action.color }}
                                        />

                                        {/* Smart Label */}
                                        <div className={cn(
                                            "absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2.5 rounded-2xl glass-apple border border-white/10 text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 translate-y-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500 shadow-2xl z-[110]"
                                        )}>
                                            {action.label}
                                        </div>
                                    </button>
                                </PopoverTrigger>
                                 <PopoverContent side="top" className="w-auto p-0 border-white/10 glass-apple shadow-3xl mb-6 overflow-hidden rounded-3xl">
                                    {action.content}
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>

            {/* Mobile Bottom Bar - Premium Floating Pill */}
            <div className="fixed bottom-6 left-4 right-4 z-50 lg:hidden">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1 }}
                    className="glass-apple rounded-[2rem] p-2 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                >
                    {actions.map((action) => (
                        <div key={action.id} className={cn(
                            "flex-1",
                            action.id === 'timetable' && "hidden xs:block"
                        )}>
                            {action.isDialog ? (
                                <BookingDialog
                                    trigger={
                                        <button className="w-full flex flex-col items-center justify-center py-2 transition-all duration-300 hover:scale-110 active:scale-95 group">
                                            <InteractiveIcon
                                                icon={action.icon}
                                                className="w-5 h-5 mb-1.5 text-white/70 group-hover:text-primary transition-colors"
                                                style={{ color: action.color }}
                                            />
                                            <span className="text-[9px] uppercase font-black tracking-tight text-white/60 group-hover:text-white transition-colors">
                                                {action.label.split(' ')[0]}
                                            </span>
                                        </button>
                                    }
                                />
                            ) : action.href ? (
                                <motion.a
                                    href={action.href}
                                    animate={action.id === 'whatsapp' ? { scale: [1, 1.1, 1] } : {}}
                                    transition={action.id === 'whatsapp' ? { duration: 2, repeat: Infinity } : {}}
                                    className="w-full flex flex-col items-center justify-center py-2 transition-all duration-300 hover:scale-110 active:scale-95 group"
                                >
                                    <InteractiveIcon
                                        icon={action.icon}
                                        className="w-5 h-5 mb-1.5 text-white/70 group-hover:text-primary transition-colors"
                                        style={{ color: action.color }}
                                    />
                                    <span className="text-[9px] uppercase font-black tracking-tight text-white/60 group-hover:text-white transition-colors">
                                        {action.label.split(' ')[0]}
                                    </span>
                                </motion.a>
                            ) : (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button className="w-full flex flex-col items-center justify-center py-2 transition-all duration-300 hover:scale-110 active:scale-95 group">
                                            <InteractiveIcon
                                                icon={action.icon}
                                                className="w-5 h-5 mb-1.5 text-white/70 group-hover:text-primary transition-colors"
                                                style={{ color: action.color }}
                                            />
                                            <span className="text-[9px] uppercase font-black tracking-tight text-white/60 group-hover:text-white transition-colors">
                                                {action.label.split(' ')[0]}
                                            </span>
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent side="top" className="w-auto p-0 border-white/10 glass-apple shadow-3xl mb-6 overflow-hidden rounded-3xl">
                                        {action.content}
                                    </PopoverContent>
                                </Popover>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default QuickActionBar;
