import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/constants/animations'

export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {children}
      </motion.div>
    </section>
  )
}
