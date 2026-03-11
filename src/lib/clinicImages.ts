/**
 * Centralized configuration for clinic-specific images.
 * This allows for easy switching or removal of images across the site.
 * Set 'enabled' to false to revert to the default placeholders/icons.
 */

export const clinicImages = {
    hero: {
        enabled: true,
        url: "/images/2025-10-15.webp",
        alt: "Professional Dental Tools",
    },
    team: {
        enabled: true,
        url: "/images/2025-08-30.webp",
        alt: "Primero Clinic Staff Team",
    },
    pediatric: {
        enabled: true,
        url: "/images/2025-09-18.webp",
        alt: "Happy Pediatric Patient",
    },
    doctorPatient: {
        enabled: true,
        url: "/images/2026-01-29.webp",
        alt: "Doctor with Patient",
    },
    doctorKid: {
        enabled: true,
        url: "/images/2025-05-14.webp",
        alt: "Doctor with Kid",
    }
};

export type ClinicImageKey = keyof typeof clinicImages;
