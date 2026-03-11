import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    MessageCircle,
    MapPin,
    Clock,
    ChevronDown,
    CheckCircle2,
    Star,
    Shield,
    Heart,
    Baby,
    Smile,
    Users,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ───────────────────────────────────────────────
// Data
// ───────────────────────────────────────────────
const WHATSAPP_NUMBER = "201200093366";
const PHONE_NUMBER = "01200093366";
const MAPS_LINK = "https://maps.app.goo.gl/yxHMrh5jc2PXDpVz9";

const whatsappMsg = encodeURIComponent("أهلاً، أريد حجز موعد لأسنان طفلي في مركز بريميرو");

const heroVideos = [
    { id: "rlcCBe8uaKU", title: "مغامرة طفلك في بريميرو" },
    { id: "OPAkve5hprE", title: "رحلة علاج طفلك بدون خوف" },
];

const moreVideos = [
    { id: "5oA_RawPR8M", title: "أسنان أطفال بدون ألم" },
    { id: "hku8K1wz5Ys", title: "ابتسامة طفلك صحية" },
    { id: "Hkosr5ytyq0", title: "تقنيات وقاية متقدمة" },
    { id: "lMHZdpMaZfE", title: "فريق متخصص لأطفالك" },
];

const whyPoints = [
    {
        icon: Heart,
        color: "text-rose-400",
        bg: "bg-rose-400/10 border-rose-400/20",
        title: "كسر حاجز الخوف",
        desc: "نعتمد أساليب نفسية متطورة تجعل الطفل يشعر بالأمان، مما يقضي على \"فوبيا الأسنان\" تماماً.",
    },
    {
        icon: Smile,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10 border-yellow-400/20",
        title: "بيئة صديقة ومرحة",
        desc: "عيادتنا مصممة لتكون مكاناً يحبه الأطفال، مما يسهل عملية العلاج ويجعل الطفل متجاوباً.",
    },
    {
        icon: Shield,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10 border-cyan-400/20",
        title: "علاج وقائي متكامل",
        desc: "نركز على جلسات الفلورايد وسد شقوق الأسنان لحماية أسنان طفلك من التسوس قبل حدوثه.",
    },
    {
        icon: Users,
        color: "text-violet-400",
        bg: "bg-violet-400/10 border-violet-400/20",
        title: "إدارة سلوك احترافية",
        desc: "أطباؤنا مدربون على التعامل مع كافة فئات الأطفال، بما فيها الحالات التي تعاني من قلق شديد.",
    },
];

const reasons = [
    "أخصائيون في طب أسنان الأطفال — خبرة في الأسنان اللبنية والدائمة",
    "تقنيات علاجية متطورة مصممة خصيصاً لفم الأطفال",
    "تعقيم على أعلى المعايير العالمية لسلامة طفلك الكاملة",
    "توعية ومتابعة دورية بأسلوب ممتع ومحبب للأطفال",
];

const faqs = [
    {
        q: "متى يجب أن تكون أول زيارة لطفلي لدكتور الأسنان؟",
        a: 'توصي جمعية طب أسنان الأطفال بأن تكون أول زيارة عند ظهور السن الأولى أو قبل عمر السنة. هذا يضمن الكشف المبكر عن أي مشاكل وبناء علاقة إيجابية بين طفلك والطبيب.',
    },
    {
        q: "كيف تتعاملون مع خوف الطفل من الطبيب؟",
        a: "نستخدم تقنية Tell-Show-Do النفسية التي تشرح للطفل كل خطوة قبل تنفيذها، إضافةً إلى بيئة مرحة وفريق طبي متخصص في التعامل مع الأطفال لإزالة الخوف تدريجياً.",
    },
    {
        q: "لماذا يجب علاج الأسنان اللبنية وهي ستتبدل لاحقاً؟",
        a: "الأسنان اللبنية مهمة جداً لحجز المسافة للأسنان الدائمة، وتأثر سلبي على النطق والمضغ. إهمالها يسبب التهابات تضر العظام والأسنان الدائمة من تحتها.",
    },
    {
        q: "ما هي الخدمات الوقائية المتوفرة للأطفال بمدينة نصر؟",
        a: "نوفر جلسات الفلورايد، سد الشقوق (Fissure Sealant)، صورة بانورامية للمتابعة، وجلسات التثقيف الصحي لتعليم طفلك طريقة تنظيف الأسنان الصحيحة.",
    },
    {
        q: "هل حشو أسنان الأطفال متوفر بدون ألم؟",
        a: "نعم! نستخدم تخدير موضعي بتقنية حديثة دون ألم، وفي حالات معينة تقنية الليزر التي لا تحتاج حقنة على الإطلاق.",
    },
];

const reviews = [
    {
        name: "amal Eldahma",
        date: "منذ شهرين",
        text: "ما شاء الله تبارك الله المكان تحفه كنظافه واستقبال. دكتور محمد شاكر اتعامل مع بنتي بمنتهى الهدوء واللطف لدرجة ان بنتي ما حسيتش ولا عرفت انها اخدت حقنه اصلا 🤣 تجربه ممتازه من حيث النظافه والتعامل والشغل كله 5 نجوم.",
        stars: 5,
    },
    {
        name: "Dina Hassan",
        date: "منذ 3 أشهر",
        text: "عياده متميزه من اول الدكتور لكل الفريق اللى معاه، شكرا لذوقكم وحسن المعامله.",
        stars: 5,
    },
    {
        name: "Zeina Khaled",
        date: "منذ 3 أشهر",
        text: "دكتور محمد شاكر من أشطر دكاترة الاسنان وعنده ضمير جدا جدا. خلع ضرسي بسهوله وقالي رحله العلاج كامله. والـ staff كله ذووق جدا وهelpful. Highly recommend 👌",
        stars: 5,
    },
    {
        name: "Fatma Ibrahim",
        date: "منذ 3 أشهر",
        text: "حقيقي ماشاء الله دكتور محمد شاكر شاطر جدا والتيم بتاعه زوق جدا والدكتور عنده ضمير ومحسيتش بأي ألم ف الجلسه نهائي.",
        stars: 5,
    },
    {
        name: "Ahmed Abdullah",
        date: "منذ 5 أشهر",
        text: "دكتور إيهاب والدكتور شاكر تعاملوا مع الحالة باحترافية عالية واهتمام كبير بالتفاصيل. من أفضل دكاترة الأسنان اللي اتعاملت معاهم. 🌟🦷💯",
        stars: 5,
    },
    {
        name: "Ali Mohamed",
        date: "منذ 5 أشهر",
        text: "I had a great experience at Primero Clinics with Dr. Mohamed Shaker. He is very professional and makes you feel comfortable during the treatment.",
        stars: 5,
    },
];

// ───────────────────────────────────────────────
// Sub-components
// ───────────────────────────────────────────────
const ShortsEmbed = ({ id, title }: { id: string; title: string }) => (
    <div className="flex flex-col items-center gap-3">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            style={{ width: "min(280px, 100%)", aspectRatio: "9/16" }}>
            <iframe
                src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                loading="lazy"
            />
        </div>
        <p className="text-sm text-slate-400 text-center font-medium">{title}</p>
    </div>
);

const FAQItem = ({ q, a, idx }: { q: string; a: string; idx: number }) => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            className="border border-white/10 rounded-2xl overflow-hidden glass"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-right text-white font-semibold hover:bg-white/5 transition-colors"
            >
                <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 ml-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                <span className="flex-1">{q}</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-5 text-slate-400 leading-relaxed text-right">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ReviewCard = ({ review, idx }: { review: typeof reviews[0]; idx: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.08 }}
        className="glass rounded-3xl p-6 border border-white/10 flex flex-col gap-3 h-full"
    >
        <div className="flex gap-1 justify-end">
            {Array.from({ length: review.stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
        </div>
        <p className="text-slate-300 leading-relaxed text-right text-sm flex-1">"{review.text}"</p>
        <div className="flex items-center justify-between mt-2 border-t border-white/10 pt-3">
            <span className="text-xs text-slate-500">{review.date}</span>
            <span className="font-bold text-white text-sm">{review.name}</span>
        </div>
    </motion.div>
);

// ───────────────────────────────────────────────
// FLOATING CTA
// ───────────────────────────────────────────────
const FloatingCTA = () => (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3 px-2">
        <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe58] text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 text-sm"
        >
            <MessageCircle className="w-4 h-4" />
            واتس اب
        </a>
        <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 text-sm"
        >
            <Phone className="w-4 h-4" />
            اتصل بنا
        </a>
    </div>
);

// ───────────────────────────────────────────────
// MAIN PAGE
// ───────────────────────────────────────────────
const PediatricLandingPage = () => {
    return (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30" dir="rtl" lang="ar">
            <Helmet>
                <html lang="ar" dir="rtl" />
                <title>دكتور أسنان أطفال بمدينة نصر | علاج متقدم بلا ألم – بريميرو</title>
                <meta
                    name="description"
                    content="أفضل طبيب أسنان أطفال في مدينة نصر. علاج الأسنان اللبنية، فلورايد، سد شقوق، بيئة مرحة بدون خوف. احجز الآن في مركز بريميرو – 01200093366."
                />
                <meta name="keywords" content="دكتور أسنان أطفال مدينة نصر, أسنان أطفال بلا ألم, طب أسنان أطفال, حشو أسنان أطفال, فلورايد أطفال, عيادة أسنان أطفال القاهرة, بريميرو" />
                <link rel="canonical" href="https://primerodentalclinic.com/asnan-atfal/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://primerodentalclinic.com/asnan-atfal/" />
                <meta property="og:title" content="دكتور أسنان أطفال بمدينة نصر | بريميرو" />
                <meta property="og:description" content="علاج أسنان الأطفال بأحدث التقنيات في بيئة مرحة خالية من الخوف. احجز الآن!" />
                <meta property="og:locale" content="ar_EG" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="دكتور أسنان أطفال بمدينة نصر | بريميرو" />
                <meta name="twitter:description" content="علاج أسنان الأطفال في بيئة مرحة بلا خوف – احجز الآن!" />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MedicalClinic",
                    name: "مركز بريميرو لطب الأسنان",
                    alternateName: "Primero Dental Clinic",
                    url: "https://primerodentalclinic.com",
                    telephone: "+201200093366",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "50 شارع النزهة",
                        addressLocality: "مدينة نصر",
                        addressRegion: "القاهرة",
                        addressCountry: "EG",
                    },
                    geo: { "@type": "GeoCoordinates", latitude: 30.0733141, longitude: 31.3387106 },
                    openingHours: "Mo-Su 14:00-22:00",
                    medicalSpecialty: "Dentistry",
                    hasOfferCatalog: {
                        "@type": "OfferCatalog",
                        name: "خدمات أسنان الأطفال",
                        itemListElement: [
                            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "علاج أسنان الأطفال" } },
                            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "فلورايد وسد شقوق الأسنان" } },
                            { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "حشو أسنان الأطفال بدون ألم" } },
                        ],
                    },
                    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "28" },
                })}</script>
            </Helmet>

            <FloatingCTA />

            {/* ── TOP BAR ── */}
            <div className="bg-primary/10 border-b border-white/5 py-2 px-4">
                <div className="container mx-auto flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" />50 شارع النزهة، مدينة نصر، القاهرة.</span>
                        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-primary" />{PHONE_NUMBER}</span>
                    </div>
                    <span className="text-xs text-primary font-semibold hidden sm:block">مركز بريميرو لطب الأسنان – مدينة نصر</span>
                </div>
            </div>

            {/* ── HERO ── */}
            <section className="relative pt-20 pb-16 md:pt-32 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/15 via-primary/10 to-transparent blur-[100px] pointer-events-none rounded-full" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold mb-8"
                        >
                            <Baby className="w-4 h-4" />
                            عيادة أسنان الأطفال – مدينة نصر
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
                        >
                            دكتور أسنان أطفال بمدينة نصر
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-primary">
                                علاج متقدم.. مرح.. وبدون ألم
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            احجز مكان طفلك في "لوحة الشرف" داخل أرقى عيادة أسنان أطفال بمدينة نصر.. أحدث تقنيات العلاج الوقائي والجمالي في بيئة ترفيهية تجعل طفلك يشعر أنه في مغامرة وليس عيادة.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 rounded-full text-lg shadow-glow transition-all hover:scale-105 active:scale-95"
                            >
                                <Phone className="w-5 h-5" />
                                اتصل بنا الآن
                            </a>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe58] text-white font-black px-8 py-4 rounded-full text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
                            >
                                <MessageCircle className="w-5 h-5" />
                                واتس اب
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── HERO VIDEOS (2 shorts) ── */}
            <section className="py-16 container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8">
                    {heroVideos.map((v) => (
                        <ShortsEmbed key={v.id} id={v.id} title={v.title} />
                    ))}
                </div>
            </section>

            {/* ── WHY PEDIATRIC SPECIALIST ── */}
            <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">التخصص يصنع الفرق</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            لماذا يعتبر تخصص أسنان الأطفال
                            <span className="text-primary"> هو الحل الأمثل لطفلك؟</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            صحة أسنان طفلك تبدأ من اختيار الطبيب الذي يفهم احتياجاته النفسية قبل الطبية. في مركز بريميرو، نؤمن أن زيارة طبيب الأسنان يجب أن تكون تجربة سعيدة خالية من الخوف.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {whyPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`glass rounded-3xl p-6 border ${point.bg} flex gap-4 items-start text-right`}
                            >
                                <div className={`w-12 h-12 rounded-2xl ${point.bg} border flex items-center justify-center flex-shrink-0`}>
                                    <point.icon className={`w-6 h-6 ${point.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY PRIMERO ── */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">لماذا بريميرو؟</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                                لماذا تختار مركز "بريميرو"
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-primary">
                                    لأسنان الأطفال في مدينة نصر؟
                                </span>
                            </h2>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                نجمع بين الرفق في التعامل والدقة في العلاج، لنقدم لطفلك أفضل رعاية طبية في قلب مدينة نصر.
                            </p>
                            <ul className="space-y-4">
                                {reasons.map((r, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3 text-right"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300 flex-1">{r}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass rounded-[2.5rem] p-8 border border-primary/20 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/5" />
                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                                    <Sparkles className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3">افضل فريق طبي</h3>
                                <p className="text-primary font-bold text-lg mb-4">أسنان في مدينة نصر</p>
                                <div className="flex gap-4 justify-center">
                                    <a
                                        href={`tel:${PHONE_NUMBER}`}
                                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-5 py-3 rounded-full text-sm transition-all hover:scale-105"
                                    >
                                        <Phone className="w-4 h-4" />
                                        اتصل بنا
                                    </a>
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe58] text-white font-bold px-5 py-3 rounded-full text-sm transition-all hover:scale-105"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        واتس اب
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── MORE VIDEOS (4 shorts) ── */}
            <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">شاهد بنفسك</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            قصص نجاح من عيادتنا
                        </h2>
                        <p className="text-slate-400 max-w-xl mx-auto">
                            شاهد كيف تجعل بريميرو من زيارة طبيب الأسنان تجربة محببة للأطفال والأهالي
                        </p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {moreVideos.map((v) => (
                            <ShortsEmbed key={v.id} id={v.id} title={v.title} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-20 container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">كل ما تحتاج معرفته</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            الأسئلة الشائعة
                            <span className="text-primary"> حول أسنان الأطفال</span>
                        </h2>
                    </motion.div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.q} a={faq.a} idx={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── REVIEWS ── */}
            <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">آراء مرضانا</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            قصصكم هي نجاحنا
                        </h2>
                        <div className="flex items-center justify-center gap-2 mt-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-white font-bold text-lg mr-2">5.0</span>
                            <span className="text-slate-400 text-sm">مبني على 28+ تقييم Google</span>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {reviews.map((r, i) => (
                            <ReviewCard key={i} review={r} idx={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" className="py-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-[3rem] p-8 md:p-14 border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-cyan-500/10" />
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">تواصل معنا الآن</h2>
                            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                                إذا كان لديك أي استفسارات أو تحتاج إلى المزيد من المعلومات حول خدماتنا، لا تتردد في الاتصال بنا. فريقنا جاهز للرد على جميع استفساراتك.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-black px-8 py-4 rounded-full text-lg shadow-glow transition-all hover:scale-105 active:scale-95"
                                >
                                    <Phone className="w-5 h-5" />
                                    اتصل بنا — {PHONE_NUMBER}
                                </a>
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe58] text-white font-black px-8 py-4 rounded-full text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    واتس اب
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
                                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-colors group">
                                    <MapPin className="w-6 h-6 text-primary mb-3 mr-auto ml-0 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white font-bold mb-1">العنوان</h4>
                                    <p className="text-slate-400 text-sm">50 شارع النزهة، مدينة نصر، القاهرة</p>
                                </a>
                                <div className="glass rounded-2xl p-5 border border-white/10">
                                    <Phone className="w-6 h-6 text-primary mb-3 mr-auto ml-0" />
                                    <h4 className="text-white font-bold mb-1">اتصل بنا</h4>
                                    <p className="text-slate-400 text-sm">{PHONE_NUMBER}</p>
                                </div>
                                <div className="glass rounded-2xl p-5 border border-white/10">
                                    <Clock className="w-6 h-6 text-primary mb-3 mr-auto ml-0" />
                                    <h4 className="text-white font-bold mb-1">أوقات العمل</h4>
                                    <p className="text-slate-400 text-sm">يومياً 02:00 PM – 10:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="py-8 border-t border-white/10 text-center text-slate-500 text-sm">
                <p>جميع الحقوق محفوظة © مركز بريميرو لطب الأسنان {new Date().getFullYear()}</p>
                <p className="mt-1">50 شارع النزهة، مدينة نصر، القاهرة | {PHONE_NUMBER}</p>
            </footer>

            {/* Spacer for floating CTA */}
            <div className="h-20" />
        </div>
    );
};

export default PediatricLandingPage;
