import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerFast, scaleIn, viewport } from '@/constants/animations'
import { skills } from '@/constants/content'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-amber-50 dark:bg-zinc-900 transition-colors duration-300">
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
            Skills
          </p>
          <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
            Tools & Expertise
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
            A full-stack marketing toolkit — from growth strategy and CRM automation to analytics, AI tools, and multi-language communication.
          </p>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={scaleIn}
              className="bg-white dark:bg-white/[0.03] border border-orange-100 dark:border-white/10 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-slate-800 dark:text-white font-bold text-sm uppercase tracking-wide mb-4">
                {group.category}
              </h3>
              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={fadeUp}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-orange-50 dark:bg-white/5 border border-orange-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-teal dark:hover:border-cyan-400 hover:text-teal dark:hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
