export interface GalleryItem {
    id: string;
    type: "image" | "video";
    src: string;
    thumbnail?: string;
    title?: string;
    category: string;
    beforeSrc?: string;
}

export interface VideoItem {
    id: string;
    src: string;
    thumbnail: string;
    title: string;
    description: string;
    category: "clinical" | "testimonial" | "clinic-tour";
    duration?: string;
}

export const galleryCategories = {
    cases: "Clinical Cases",
    pediatric: "Pediatric Dentistry",
    reviews: "Patient Reviews",
    team: "Our Team",
    videos: "Video Showcase"
};

export const galleryItems: GalleryItem[] = [
    // Team Members (First)
    {
        id: "team-new-1",
        type: "image",
        src: "/assets/gallery-new/team/WhatsApp Image 2026-03-07 at 2.07.14 AM.jpeg",
        title: "Our Specialized Doctors",
        category: "team"
    },
    {
        id: "team-new-2",
        type: "image",
        src: "/assets/gallery-new/team/WhatsApp Image 2026-03-07 at 2.08.21 AM.jpeg",
        title: "Primero Clinical Team",
        category: "team"
    },
    {
        id: "team-new-3",
        type: "image",
        src: "/assets/gallery-new/team/WhatsApp Image 2026-03-07 at 2.08.22 AM.jpeg",
        title: "Professional Staff",
        category: "team"
    },
    {
        id: "team-new-4",
        type: "image",
        src: "/assets/gallery-new/team/WhatsApp Image 2026-03-07 at 2.08.21 AM (1).jpeg",
        title: "Dental Experts",
        category: "team"
    },

    // Pediatric (from Kids Cases)
    {
        id: "pedia-2",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-06 at 6.54.53 PM.jpeg",
        title: "Happy Little Patient",
        category: "pediatric"
    },
    {
        id: "pedia-3",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-06 at 6.54.54 PM.jpeg",
        title: "Smile Design for Kids",
        category: "pediatric"
    },
    {
        id: "pedia-4",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-06 at 6.54.55 PM.jpeg",
        title: "Gentle Dental Treatment",
        category: "pediatric"
    },
    {
        id: "pedia-5",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-06 at 6.54.56 PM.jpeg",
        title: "Modern Pediatric Care",
        category: "pediatric"
    },
    {
        id: "pedia-6",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-06 at 7.02.46 PM.jpeg",
        title: "Comfortable Environment",
        category: "pediatric"
    },
    {
        id: "pedia-7",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-06 at 7.56.18 PM.jpeg",
        title: "Kids Dental Education",
        category: "pediatric"
    },
    {
        id: "pedia-8",
        type: "image",
        src: "/assets/gallery-new/pediatric/WhatsApp Image 2026-03-07 at 2.07.14 AM (1).jpeg",
        title: "Comprehensive Pediatric Checkup",
        category: "pediatric"
    },

    // Clinical Cases (from public/images/gallery)
    {
        id: "case-smile-1",
        type: "image",
        src: "/images/gallery/smile-1.png",
        title: "Smile Design Makeover",
        category: "cases"
    },
    {
        id: "case-smile-2",
        type: "image",
        src: "/images/gallery/smile-2.png",
        title: "Aesthetic Restoration",
        category: "cases"
    },
    {
        id: "case-smile-3",
        type: "image",
        src: "/images/gallery/smile-3.png",
        title: "Digital Smile Planning",
        category: "cases"
    },
    {
        id: "case-smile-4",
        type: "image",
        src: "/images/gallery/smile-4.png",
        title: "Complete Transformation",
        category: "cases"
    },
    {
        id: "case-smile-5",
        type: "image",
        src: "/images/gallery/smile-5.png",
        title: "Porcelain Veneers",
        category: "cases"
    },
    {
        id: "case-smile-6",
        type: "image",
        src: "/images/gallery/smile-6.png",
        title: "Natural Looking Results",
        category: "cases"
    },
    {
        id: "case-smile-7",
        type: "image",
        src: "/images/gallery/smile-7.png",
        title: "Cosmetic Dentistry",
        category: "cases"
    },
    {
        id: "case-smile-8",
        type: "image",
        src: "/images/gallery/smile-8.png",
        title: "Hollywood Smile",
        category: "cases"
    },
    {
        id: "case-smile-9",
        type: "image",
        src: "/images/gallery/smile-9.png",
        title: "Perfect White Smile",
        category: "cases"
    },
    {
        id: "case-smile-10",
        type: "image",
        src: "/images/gallery/smile-10.png",
        title: "Flawless Teeth Alignment",
        category: "cases"
    },
    {
        id: "case-ortho-1",
        type: "image",
        src: "/images/gallery/before-after-ortho.png",
        title: "Orthodontic Results Before & After",
        category: "cases"
    }
];

// YouTube video IDs mapped from the original V1-V9 local files
export const videoGalleryItems: VideoItem[] = [
    {
        id: "v-new-1",
        src: "MqzgZ19v3MI",
        thumbnail: "MqzgZ19v3MI",
        title: "3D Smile Design & Planning",
        description: "Experience the precision of digital planning for your perfect smile.",
        category: "clinical"
    },
    {
        id: "v-new-2",
        src: "kp9GTWbZPpk",
        thumbnail: "kp9GTWbZPpk",
        title: "Professional Consultation",
        description: "Join our expert team for a personalized dental consultation.",
        category: "clinical"
    },
    {
        id: "v-new-3",
        src: "EUbBsNsCUR8",
        thumbnail: "EUbBsNsCUR8",
        title: "Advanced Clinical Case",
        description: "Detailed walkthrough of a complex clinical procedure.",
        category: "clinical"
    },
    {
        id: "v-new-4",
        src: "OvpGJ-WuVI8",
        thumbnail: "OvpGJ-WuVI8",
        title: "Modern Clinic Tour",
        description: "Take a virtual tour of our high-standard sterilization and patient care areas.",
        category: "clinic-tour"
    },
    {
        id: "v-new-5",
        src: "3gnUtxslFLw",
        thumbnail: "3gnUtxslFLw",
        title: "Advanced Pediatric Care",
        description: "A gentle and fun approach to children's dentistry.",
        category: "clinical"
    },
    {
        id: "v-new-6",
        src: "qG5L0xmYVeE",
        thumbnail: "qG5L0xmYVeE",
        title: "Precision Technology",
        description: "Using the latest digital tools for accurate diagnosis.",
        category: "clinical"
    },
    {
        id: "v-new-7",
        src: "JUzs4ftwb6k",
        thumbnail: "JUzs4ftwb6k",
        title: "Patient Experience",
        description: "See why our patients trust us with their dental health.",
        category: "testimonial"
    },
    {
        id: "v-new-8",
        src: "gpcksF3TTuY",
        thumbnail: "gpcksF3TTuY",
        title: "Smile Transformation",
        description: "Before and after results showcase of our smile makeovers.",
        category: "clinical"
    },
    {
        id: "v-new-9",
        src: "3gnUtxslFLw",
        thumbnail: "3gnUtxslFLw",
        title: "Sterilization Standards",
        description: "Our commitment to hygiene and patient safety.",
        category: "clinic-tour"
    }
];
