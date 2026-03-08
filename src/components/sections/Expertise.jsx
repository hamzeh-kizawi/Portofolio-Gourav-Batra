import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/constants/animations'
import ExpertiseCard from '@/components/ui/ExpertiseCard'
import { expertise } from '@/constants/content'

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
            Expertise
          </p>
          <h2 className="text-navy dark:text-white text-3xl md:text-4xl font-bold">
            Primary Focus Areas
          </h2>
          <p className="text-charcoal/60 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            Where I create the most impact — from growth strategy to operational infrastructure
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
