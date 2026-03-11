import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
