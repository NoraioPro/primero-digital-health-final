import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, User, Phone, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { InteractiveIcon } from "./AnimatedIcons";

const timeSlots = [
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

interface BookingDialogProps {
  trigger?: React.ReactNode;
}

const BookingDialog = ({ trigger }: BookingDialogProps) => {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [service, setService] = useState<string>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const services = [
    { value: "cosmetic", label: t('cosmeticDentistry') },
    { value: "implants", label: t('dentalImplants') },
    { value: "orthodontics", label: t('orthodontics') },
    { value: "root-canal", label: t('rootCanal') },
    { value: "oral-surgery", label: t('oralSurgery') },
    { value: "pediatric", label: t('pediatricDentistry') },
    { value: "general", label: t('generalCheckup') },
  ];

  const resetForm = () => {
    setStep(1);
    setDate(undefined);
    setTime(undefined);
    setService(undefined);
    setName("");
    setPhone("");
  };

  const handleSubmit = () => {
    const serviceLabel = services.find((s) => s.value === service)?.label || service;
    const formattedDate = date ? format(date, "EEEE, MMMM d, yyyy") : "";

    const isArabic = language === 'ar';
    const message = isArabic
      ? `*طلب حجز موعد جديد*
-------------------
*الاسم:* ${name}
*رقم الهاتف:* ${phone}
*الخدمة:* ${serviceLabel}
*التاريخ:* ${formattedDate}
*الوقت:* ${time}

تم الإرسال من خلال الموقع الإلكتروني.`
      : `*New Appointment Request*
-------------------
*Name:* ${name}
*Phone:* ${phone}
*Service:* ${serviceLabel}
*Date:* ${formattedDate}
*Time:* ${time}

Sent from website booking form.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumbers = ["201200093366", "201111113628"];

    whatsappNumbers.forEach(num => {
      window.open(`https://wa.me/${num}?text=${encodedMessage}`, '_blank');
    });

    toast({
      title: t('requestSent'),
      description: t('confirmationMessage'),
    });
    setOpen(false);
    resetForm();
  };

  const canProceedStep1 = date && time;
  const canProceedStep2 = service;
  const canSubmit = name.trim() && phone.trim();

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) resetForm();
    }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="hero" size="xl" className="group">
            {t('bookAppointment')}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border/50 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {t('bookYourAppointment')}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 transition-colors",
                    step > s ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <Label className="text-foreground flex items-center gap-2 group">
                  <InteractiveIcon icon={CalendarIcon} className="w-4 h-4 text-primary" hoverEffect="lift" />
                  {t('selectDate')}
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-12 bg-background border-border/50",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : t('pickDate')}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-3">
                <Label className="text-foreground flex items-center gap-2 group">
                  <InteractiveIcon icon={Clock} className="w-4 h-4 text-primary" hoverEffect="rotate" />
                  {t('selectTime')}
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={time === slot ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTime(slot)}
                      className={cn(
                        "text-xs",
                        time === slot
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border-border/50 hover:border-primary/50"
                      )}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
                className="w-full"
                variant="hero"
              >
                {t('continue')}
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <Label className="text-foreground flex items-center gap-2 group">
                  <InteractiveIcon icon={Stethoscope} className="w-4 h-4 text-primary" hoverEffect="lift" />
                  {t('selectService')}
                </Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="h-12 bg-background border-border/50">
                    <SelectValue placeholder={t('chooseService')} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="glass rounded-xl p-4 border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">{t('yourSelection')}</p>
                <p className="text-foreground font-medium">
                  {date && format(date, "EEEE, MMMM d, yyyy")}
                </p>
                <p className="text-primary">{time}</p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  {t('back')}
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                  className="flex-1"
                  variant="hero"
                >
                  {t('continue')}
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2 group">
                  <InteractiveIcon icon={User} className="w-4 h-4 text-primary" hoverEffect="lift" />
                  {t('yourName')}
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('enterName')}
                  className="h-12 bg-background border-border/50"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2 group">
                  <InteractiveIcon icon={Phone} className="w-4 h-4 text-primary" hoverEffect="rotate" />
                  {t('phoneNumber')}
                </Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('enterPhone')}
                  className="h-12 bg-background border-border/50"
                />
              </div>

              <div className="glass rounded-xl p-4 border-primary/20 space-y-2">
                <p className="text-sm text-muted-foreground">{t('appointmentSummary')}</p>
                <p className="text-foreground font-medium">
                  {date && format(date, "EEEE, MMMM d, yyyy")} at {time}
                </p>
                <p className="text-primary">
                  {services.find((s) => s.value === service)?.label}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                  className="flex-1"
                >
                  {t('back')}
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="flex-1"
                  variant="hero"
                >
                  {t('confirmBooking')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
