import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('location'),
            description: t('locationAddress'),
            icon: MapPin
        },
        {
            title: t('phone'),
            description: "01200093366 - Available for calls & WhatsApp",
            icon: Phone
        },
        {
            title: t('workingHours'),
            description: t('workingDaily'),
            icon: Clock
        }
    ];

    const ContactHeroIcon = ({ className }: { className?: string }) => (
        <div className={className + " flex items-center justify-center"}>
            <Mail className="w-full h-full" />
        </div>
    );

    return (
        <>
            <Helmet>
                <title>{t('contactUs')} | {t('clinicName')}</title>
                <meta name="description" content="Contact Primero Dental Clinic in Nasr City, Cairo. Book your appointment or reach out for inquiries." />
            </Helmet>

            <ServicePageLayout
                heroTitle={t('contactUs')}
                heroIntro={t('startJourney')}
                features={features}
                icon={ContactHeroIcon}
            >
                <div className="py-10">
                    <ContactSection />
                </div>
            </ServicePageLayout>
        </>
    );
};

export default ContactPage;
