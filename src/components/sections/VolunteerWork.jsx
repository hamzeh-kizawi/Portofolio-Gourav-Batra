import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewport } from '@/constants/animations'
import { volunteer } from '@/constants/content'

export default function VolunteerWork() {
  return (
    <section id="volunteer" className="py-20 md:py-28 bg-amber-50 dark:bg-zinc-900 transition-colors duration-300">
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
            Volunteer Work
          </p>
          <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
            Community & Leadership
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
            Beyond the office — driving impact through community organizing, cultural programming, and student leadership at an international university.
          </p>
        </motion.div>

        {/* Volunteer cards — staggered layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {volunteer.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={item.title}
                variants={isLeft ? fadeLeft : fadeRight}
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden border shadow-md transition-shadow hover:shadow-xl bg-white dark:bg-white/[0.03] border-orange-100 dark:border-white/10 shadow-orange-100/50 dark:shadow-zinc-900/60"
              >
                {/* Photo */}
                <div className="relative overflow-hidden h-56 shrink-0">
                  <img
                    src={item.photo}
                    alt={item.photoAlt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Year badge */}
                  <span className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-900/90 text-slate-700 dark:text-zinc-300 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-4 h-4 text-orange-500 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-slate-800 dark:text-white font-bold text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-teal dark:text-cyan-400 text-sm font-medium mt-0.5">
                        {item.organization}
                      </p>
                      <p className="text-slate-400 dark:text-zinc-500 text-xs mt-0.5">{item.location}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
