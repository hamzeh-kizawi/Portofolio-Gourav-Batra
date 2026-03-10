import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { fadeUp, staggerContainer, scaleIn, viewport } from '@/constants/animations'
import { education } from '@/constants/content'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-zinc-950 transition-colors duration-300">
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
            Education
          </p>
          <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
            Academic Background
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
            International education across Germany, Spain, and India — combining business theory, marketing strategy, and cross-cultural practice.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border transition-shadow ${
                edu.highlight
                  ? 'bg-orange-50 dark:bg-white/5 border-orange-200 dark:border-cyan-500/30 shadow-md shadow-orange-100/60 dark:shadow-cyan-500/10'
                  : 'bg-white dark:bg-white/[0.03] border-orange-100 dark:border-white/10 shadow-sm'
              }`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                edu.highlight
                  ? 'bg-orange-100 dark:bg-cyan-500/20'
                  : 'bg-slate-100 dark:bg-white/10'
              }`}>
                <GraduationCap className={`w-5 h-5 ${
                  edu.highlight ? 'text-orange-500 dark:text-cyan-400' : 'text-slate-500 dark:text-zinc-400'
                }`} />
              </div>

              {/* Period badge */}
              <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-zinc-400">
                {edu.period}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-slate-800 dark:text-white font-bold text-base leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-teal dark:text-cyan-400 text-sm font-semibold">{edu.institution}</p>
                <p className="text-slate-400 dark:text-zinc-500 text-xs mt-0.5">{edu.location}</p>
              </div>

              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                {edu.description}
              </p>

              {/* Thesis callout */}
              {edu.thesis && (
                <div className="flex items-start gap-2 mt-auto pt-3 border-t border-orange-200 dark:border-cyan-500/20">
                  <Award className="w-4 h-4 text-orange-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                  <p className="text-slate-700 dark:text-zinc-300 text-xs font-semibold">
                    {edu.thesisLabel ?? 'Thesis'}: {edu.thesis}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
