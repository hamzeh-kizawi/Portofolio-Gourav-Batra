// Shared framer-motion variants — import from here, never define inline

const easeOutQuad = [0.25, 0.46, 0.45, 0.94]
const spring = { type: 'spring', stiffness: 260, damping: 22 }

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuad },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutQuad },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutQuad },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutQuad },
  },
}

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOutQuad },
  },
}

// Floating bob — for decorative elements
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
  },
}

// Shared viewport config — trigger when 20% of element is visible, only once
export const viewport = { once: true, amount: 0.15 }
