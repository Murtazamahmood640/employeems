/**
 * Animation and scroll effect utilities for module detail pages
 */

export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  },
  staggerItem: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const easing = {
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  bouncy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
};

/**
 * Get CSS variables for scroll-based animations
 */
export const getScrollAnimationStyle = (scrollProgress: number) => {
  return {
    opacity: Math.max(0, 1 - Math.max(0, scrollProgress)),
    transform: `translateY(${Math.max(0, scrollProgress * 20)}px)`
  };
};

/**
 * Counter animation for number badges
 */
export const countUp = (end: number, duration: number = 1000) => {
  return {
    from: 0,
    to: end,
    duration,
    ease: "easeOut"
  };
};
