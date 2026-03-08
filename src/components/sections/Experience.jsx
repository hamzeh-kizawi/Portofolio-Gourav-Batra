import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/constants/animations'
import TimelineItem from '@/components/ui/TimelineItem'
import { experience } from '@/constants/content'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-surface dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12"
        >
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
            Experience
          </p>
          <h2 className="text-navy dark:text-white text-3xl md:text-4xl font-bold">
            Career Timeline
          </h2>
          <p className="text-charcoal/60 dark:text-slate-400 mt-3 max-w-xl">
            5+ years building and scaling marketing operations across Europe and beyond
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl"
        >
          {experience.map((item, i) => (
            <TimelineItem
              key={item.role}
              {...item}
              isLast={i === experience.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
