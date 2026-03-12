import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickActionBar from "@/components/QuickActionBar";
import VideoShowcase from "@/components/VideoShowcase";
import GallerySection from "@/components/GallerySection";
import SocialFeeds from "@/components/SocialFeeds";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import { galleryItems, videoGalleryItems } from "@/lib/galleryData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Best Dental Clinic in Nasr City Cairo | Primero Dental Clinic</title>
        <meta
          name="description"
          content="Primero Dental Clinic: The #1 choice for advanced digital dentistry in Nasr City, Cairo. Specializing in Hollywood Smile, Dental Implants, Orthodontics, and painless root canals with 20+ years of excellence."
        />
        <meta
          name="keywords"
          content="dental clinic nasr city, best dental clinic cairo, dentist nasr city, cosmetic dentistry egypt, dental implants cairo, hollywood smile cairo, orthodontics nasr city, laser dentistry egypt, dental clinic near me cairo"
        />
        <link rel="canonical" href="https://primerodental.com/" />

        {/* AI & Search Engine Bots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Primero Dental Clinic - #1 Advanced Digital Dentistry in Cairo" />
        <meta
          property="og:description"
          content="Experience world-class dental care in Nasr City, Cairo. Precision diagnosis, Hollywood Smile, and Dental Implants with advanced 3D technology."
        />
        <meta property="og:url" content="https://primerodental.com" />
        <meta property="og:site_name" content="Primero Dental Clinic" />
        <meta property="og:image" content="https://primerodental.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Primero Dental Clinic | Best Dentist in Nasr City" />
        <meta name="twitter:description" content="20+ years of excellence in Cairo. Book your consultation for Hollywood Smile & Implants." />
        <meta name="twitter:image" content="https://primerodental.com/twitter-image.jpg" />

        {/* Geo Tags */}
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0733141;31.3387106" />
        <meta name="ICBM" content="30.0733141, 31.3387106" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
              "@id": "https://primerodental.com/#clinic",
              name: "Primero Dental Clinic",
              alternateName: "مركز بريميرو لطب الأسنان",
              description: "The leading advanced digital dentistry clinic in Nasr City, Cairo, specializing in implants, cosmetic dentistry, and comprehensive dental care.",
              url: "https://primerodental.com",
              telephone: "+201200093366",
              priceRange: "$$",
              image: "https://primerodental.com/clinic-logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "50 El Nozha Street",
                addressLocality: "Nasr City",
                addressRegion: "Cairo",
                postalCode: "11765",
                addressCountry: "EG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.0733141,
                longitude: 31.3387106
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "14:00",
                  closes: "22:00",
                }
              ],
              sameAs: [
                "https://www.facebook.com/Primero.Clinic/",
                "https://www.instagram.com/primero.clinic/"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "154"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dental Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hollywood Smile & Veneers"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dental Implants"
                    }
                  }
                ]
              },
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://primerodental.com/#location",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                },
                result: {
                  "@type": "Reservation",
                  name: "Book Dental Appointment"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://primerodental.com/#website",
              url: "https://primerodental.com",
              name: "Primero Dental Clinic",
              description: "Advanced Digital Dentistry in Nasr City, Cairo",
              publisher: { "@id": "https://primerodental.com/#clinic" },
              inLanguage: ["en-US", "ar-EG"]
            }
          ])}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <TechnologySection />
        <div id="why-choose">
          <WhyChooseUs />
        </div>
        <section id="gallery" className="py-24 bg-background px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-16 px-4 md:px-0">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-3">Life at Primero</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Where Smiles Begin</h2>
              <p className="text-slate-400 text-lg">Experience the warm atmosphere and professional excellence that makes Primero the top choice for families in Cairo.</p>
            </div>
            <Gallery
              items={galleryItems}
              showFilters={true}
            />
          </div>
        </section>

        <div id="video-review">
          <VideoGallery
            videos={videoGalleryItems}
          />
        </div>

        <div id="reviews">
          <ReviewsSection />
        </div>
        <SocialFeeds />
        <div id="location">
          <ContactSection />
        </div>
        <Footer />
        <QuickActionBar />
      </main>
    </>
  );
};

export default Index;
