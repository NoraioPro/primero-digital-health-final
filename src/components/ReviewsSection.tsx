import { motion } from "framer-motion";
import { Star, Quote, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { clinicImages } from "@/lib/clinicImages";
import { InteractiveIcon } from "./AnimatedIcons";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Gallery from "./Gallery";

const reviews = [
    {
        name: "Amany Farid",
        rating: 5,
        text: "I recently visited the clinic for a check-up and some minor dental work. I was extremely impressed with the clean and modern environment. The staff was incredibly welcoming and professional. Dr. Ahmed Al-Aidi and his team were patient and answered all my questions clearly. I felt completely at ease throughout the entire process. Highly recommend for anyone looking for high-quality dental care!",
        textAr: "قمت مؤخراً بزيارة العيادة لإجراء فحص طبي وبعض أعمال الأسنان البسيطة. لقد انبهرت كثيراً بالبيئة النظيفة والحديثة. كان طاقم العمل مرحباً ومحترفاً للغاية. كان دكتور أحمد العيدي وفريقه صبورين وأجابوا على جميع أسئلتي بوضوح. شعرت براحة تامة طوال العملية برمتها. أوصي بشدة لأي شخص يبحث عن رعاية أسنان عالية الجودة!",
        date: "a week ago",
    },
    {
        name: "Hesham Maged",
        rating: 5,
        text: "Wonderful experience, clean clinic, advanced equipment and a team of professional doctors who handle deal with customers with honesty, speed and mastery. Thank you.",
        textAr: "تجربة رائعة وعيادة نظيفة وأجهزة متطورة وفريق أطباء محترف يتعامل مع العملاء بصدق وسرعة وإتقان.. شكرا لكم",
        date: "2 months ago",
    },
    {
        name: "Abdelaziz Ahmed",
        rating: 5,
        text: "The best dental center in Cairo. Dr. Ahmed and his team are very professional and talented. They fixed my smile in record time. Excellent service and very friendly staff.",
        textAr: "أفضل مركز أسنان في القاهرة. دكتور أحمد وفريقه محترفون وموهوبون للغاية. لقد أصلحوا ابتسامتي في وقت قياسي. خدمة ممتازة وطاقم عمل ودود للغاية.",
        date: "1 month ago",
    },
    {
        name: "Mona Ghandour",
        rating: 5,
        text: "Finally found a dentist I can trust! The digital scanning was so cool and the results are perfect. The place is super hygienic and the technology is top-notch.",
        textAr: "أخيرًا وجدت طبيب أسنان يمكنني الوثوق به! كان المسح الرقمي رائعًا للغاية والنتائج مثالية. المكان صحي للغاية والتكنولوجيا من الدرجة الأولى.",
        date: "3 weeks ago",
    },
];

const ReviewsSection = () => {
    const { t, language } = useLanguage();

    return (
        <section id="reviews" className="py-24 relative overflow-hidden bg-background">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Right: Reviews Carousel (Moved up for mobile) */}
                    <div className="order-1 lg:order-2 flex flex-col w-full">
                        <div className="mb-8 md:mb-10 text-center lg:text-left">
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">{t('reviews')}</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                                {t('patientStories')}
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                                {t('realPatients')}
                            </p>
                        </div>

                        {/* Stats Summary - Simplified for mobile */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-slate-900/50 border border-white/5 shadow-2xl mb-10 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="flex flex-col">
                                    <div className="flex -space-x-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-2xl text-white">5.0</span>
                                        <span className="text-[10px] uppercase tracking-widest text-primary font-black">{t('excellent')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px w-full sm:h-12 sm:w-px bg-white/10 relative z-10" />

                            <div className="flex flex-col items-center sm:items-start relative z-10">
                                <p className="text-sm font-bold text-white mb-1">{t('googleReviews')}</p>
                                <p className="text-xs text-slate-500">{t('basedOn')} 150+ {t('reviewsOnGoogle')}</p>
                            </div>

                            <Button className="w-full sm:w-auto sm:ml-auto bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 relative z-10 font-bold" size="lg" asChild>
                                <a
                                    href="https://maps.app.goo.gl/yxHMrh5jc2PXDpVz9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('writeReview')}
                                </a>
                            </Button>
                        </div>

                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {reviews.map((review, index) => (
                                    <CarouselItem key={index} className="basis-full">
                                        <motion.div
                                            className="relative p-6 md:p-10 rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl mx-1 h-full flex flex-col"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="absolute top-8 right-10 flex items-center gap-2">
                                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path fill="#EA4335" d="M5.26620003,9.76451613 C6.19875149,6.93860322 8.85444605,4.90322581 12,4.90322581 C13.6022727,4.90322581 15.0670455,5.45451613 16.2238636,6.34774194 L19.7823864,2.78921871 C17.6204545,0.771935484 14.91,0 12,0 C7.35227273,0 3.32159091,2.69354839 1.34318182,6.62129032 L5.26620003,9.76451613 Z" />
                                                    <path fill="#34A853" d="M16.0409091,17.6525806 C14.9221591,18.4212903 13.5221591,18.8709677 12,18.8709677 C8.85444605,18.8709677 6.19875149,16.8355903 5.26620003,14.0096774 L1.34318182,17.15340 C3.32159091,21.0805161 7.35227273,23.7741935 12,23.7741935 C14.91,23.7741935 17.5131818,22.8122581 19.4678409,21.1612903 L15.7193182,18.0041935 C15.8247727,17.8841935 15.9338636,17.7687097 16.0409091,17.6525806 Z" />
                                                    <path fill="#4285F4" d="M23.5042045,12.0006452 C23.5042045,11.1274194 23.4242045,10.2858065 23.2753409,9.47935484 L12,9.47935484 L12,14.2883871 L18.4486364,14.2883871 C18.1704545,15.786129 17.3196591,17.0625806 16.0409091,18.1006452 L19.4678409,21.1612903 C21.4925,19.2903226 22.6590909,16.5335484 22.6590909,13.2903226 C22.6590909,12.8570968 22.6288636,12.4241935 23.5042045,12.0006452 Z" />
                                                    <path fill="#FBBC05" d="M5.26620003,9.76451613 C5.03063068,10.4632258 4.90340909,11.2177419 4.90340909,12 C4.90340909,12.7822581 5.03063068,13.5367742 5.26620003,14.2354839 L1.34318182,17.15340 C0.4875,15.656129 0,13.9141935 0,12 C0,10.0858065 0.4875,8.34387097 1.34318182,6.8466 C1.34318182,6.8466 5.26620003,9.76451613 5.26620003,9.76451613 Z" />
                                                </svg>
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Google Review</span>
                                            </div>
                                            <Quote className="absolute top-8 right-10 w-16 h-16 text-primary/5 -z-10" />

                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                                                    {review.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white">{review.name}</h4>
                                                    <div className="flex items-center gap-1.5">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                                                        ))}
                                                        <span className="text-xs text-slate-500 ml-2">{review.date}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed flex-grow">
                                                "{language === 'ar' ? review.textAr : review.text}"
                                            </p>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex items-center justify-center lg:justify-end gap-3 mt-8">
                                <CarouselPrevious className="static translate-y-0 h-12 w-12 border-white/10 hover:bg-primary/10 hover:border-primary/50 transition-all" />
                                <CarouselNext className="static translate-y-0 h-12 w-12 border-white/10 hover:bg-primary/10 hover:border-primary/50 transition-all" />
                            </div>
                        </Carousel>

                        {/* Friendly Care - Redesigned for Mobile integrated look */}
                        {clinicImages.doctorKid.enabled && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <div className="space-y-6 group">
                                    <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-white/10 shadow-3xl">
                                        <img
                                            src={clinicImages.doctorKid.url}
                                            alt={clinicImages.doctorKid.alt}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <div className="glass p-6 md:p-10 rounded-[2.5rem] border-white/10 backdrop-blur-xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-[1.01]">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                                                <Star className="w-6 h-6 text-primary fill-primary" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-primary font-black text-2xl md:text-4xl italic uppercase tracking-[0.2em] leading-none mb-2">Friendly Care</p>
                                                <div className="h-1 w-16 bg-primary rounded-full" />
                                            </div>
                                        </div>
                                        <p className="text-base md:text-xl text-slate-100 leading-relaxed font-semibold">
                                            Expert doctors specialized in making dental visits gentle, fun, and fear-free for the whole family.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                    </div>

                    {/* Left: Google Maps Embed (Moved down for mobile) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative w-full"
                    >
                        <div className="aspect-[0.8/1] sm:aspect-[1.2/1] lg:aspect-[4/5] w-full rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white/5 relative group/map">
                            <a
                                href="https://www.google.com/maps/place/Primero+Dental+Clinic/@30.0733141,31.3387106,17z/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20 cursor-pointer"
                                aria-label="Open Primero Dental Clinic on Google Maps"
                            ></a>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.880922830!2d31.33613567623!3d30.07331871746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f38bdaca229%3A0x3f3e9f109cf1ea70!2sPrimero%20Dental%20Clinic!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Primero Dental Clinic Location"
                                className="transition-all duration-1000"
                            ></iframe>

                            {/* Map Floating Card - Visible everywhere now, styled properly */}
                            <div className={`absolute bottom-6 left-6 right-6 md:left-auto md:w-72 glass p-6 rounded-3xl border-white/10 shadow-3xl backdrop-blur-2xl z-30`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base">Nasr City, Cairo</h4>
                                        <p className="text-xs text-slate-400">50 El Nozha Street</p>
                                    </div>
                                </div>
                                <Button variant="secondary" size="sm" className="w-full text-xs font-bold gap-2 rounded-xl" asChild>
                                    <a
                                        href="https://maps.app.goo.gl/yxHMrh5jc2PXDpVz9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t('viewOnGoogle')}
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
