import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/constants/animations'
import WorkCard from '@/components/ui/WorkCard'
import { conceptProjects } from '@/constants/content'

export default function ConceptWork() {
  return (
    <section id="concept-work" className="py-20 md:py-28 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <p className="text-orange-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Concept Work
          </p>
          <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
            Concept & Interview Projects
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
            The following projects were developed as interview assignments or concept exercises demonstrating strategy, creative thinking, and marketing execution.
          </p>
        </motion.div>

        {/* Cards — 2×2 grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {conceptProjects.map((project) => (
            <WorkCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
