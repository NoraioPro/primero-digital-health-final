import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

/**
 * Standard spring transition for professional, snappy animations
 */
export const springTransition: any = {
  type: "spring",
  stiffness: 400,
  damping: 17
};

/**
 * Creative animation variants
 */
const creativeVariants: any = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, -3, 3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  float: {
    y: [-2, 2, -2],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  hecticTap: {
    scale: 0.85,
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 500,
      damping: 10
    }
  }
};

/**
 * Wrapper for any Lucide icon to make it interactive and professional
 */
export const InteractiveIcon = ({
  icon: Icon,
  className,
  style,
  hoverEffect = "creative"
}: {
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
  hoverEffect?: "lift" | "rotate" | "scale" | "creative" | "none";
}) => {
  const animations = {
    lift: { y: -5, scale: 1.05 },
    rotate: { rotate: 10, scale: 1.1 },
    scale: { scale: 1.1 },
    creative: {
      scale: 1.1,
      rotate: [0, -5, 5, -3, 3, 0],
      transition: { duration: 0.4 }
    },
    none: {}
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      whileTap="hecticTap"
      viewport={{ once: true }}
      className="inline-flex items-center justify-center pointer-events-none"
    >
      <motion.div
        variants={creativeVariants}
        className="flex items-center justify-center"
      >
        <Icon className={className} style={style} />
      </motion.div>
    </motion.div>
  );
};

export const CosmeticIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={creativeVariants}
  >
    <motion.path
      d="M12 3L14.5 8.5L21 9.5L16.5 14L17.5 21L12 18L6.5 21L7.5 14L3 9.5L9.5 8.5L12 3Z"
      animate={{
        pathLength: [0, 1],
        opacity: [0, 1],
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      animate={{ scale: [0, 1.2, 1] }}
      transition={{ delay: 0.5, duration: 0.5 }}
    />
  </motion.svg>
);

export const ImplantIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={creativeVariants}
  >
    <motion.circle
      cx="12"
      cy="8"
      r="5"
      animate={{ scale: [0.8, 1.1, 1] }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 13V21"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <path d="M9 17H15" />
    <path d="M10 21H14" />
  </motion.svg>
);

export const OrthoIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={creativeVariants}
  >
    <path d="M4 12C4 7.58 7.58 4 12 4" />
    <path d="M20 12C20 16.42 16.42 20 12 20" />
    <circle cx="12" cy="12" r="3" />
    <motion.path
      d="M12 9V6M12 18V15"
      animate={{
        opacity: [0.3, 1],
        scale: [0.9, 1]
      }}
      transition={{ duration: 1 }}
    />
  </motion.svg>
);

export const RootCanalIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={creativeVariants}
  >
    <path d="M12 4C8 4 6 8 6 11C6 14 8 16 8 19C8 20.5 9 22 12 22C15 22 16 20.5 16 19C16 16 18 14 18 11C18 8 16 4 12 4Z" />
    <motion.path
      d="M12 8V16"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1 }}
    />
    <path d="M10 18H14" />
  </motion.svg>
);

export const SurgeryIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={creativeVariants}
  >
    <path d="M14.5 4L18 7.5L7.5 18L4 21L4.5 17.5L14.5 4Z" />
    <path d="M12 6L16 10" />
    <motion.circle
      cx="19"
      cy="5"
      r="2"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 1 }}
    />
  </motion.svg>
);

export const PediatricIcon = ({ className }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    variants={creativeVariants}
  >
    <circle cx="12" cy="10" r="6" />
    <path d="M9 9C9 9 10 11 12 11C14 11 15 9 15 9" />
    <circle cx="9" cy="8" r="0.5" fill="currentColor" />
    <circle cx="15" cy="8" r="0.5" fill="currentColor" />
    <motion.path
      d="M12 16V20M8 20H16"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 1 }}
    />
  </motion.svg>
);

export const animatedIcons = {
  cosmetic: CosmeticIcon,
  implants: ImplantIcon,
  orthodontics: OrthoIcon,
  rootCanal: RootCanalIcon,
  surgery: SurgeryIcon,
  pediatric: PediatricIcon,
};

