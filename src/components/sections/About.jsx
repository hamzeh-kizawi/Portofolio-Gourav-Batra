import { motion } from 'framer-motion'
import { fadeLeft, fadeRight, staggerContainer, viewport } from '@/constants/animations'
import StatCounter from '@/components/ui/StatCounter'
import { stats } from '@/constants/content'
import presentationPhoto from '@/assets/images/Presentation-Photo.png'
import budapestPhoto from '@/assets/images/Budapest-img.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-amber-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeLeft}>
              <p className="text-orange-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
              <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold leading-tight font-display dark:font-sans">
                Marketing strategist with a{' '}
                <span className="text-teal dark:text-cyan-400">builder's mindset</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeLeft} className="space-y-4 text-slate-700 dark:text-zinc-300 leading-relaxed">
              <p>
                I'm a Growth Marketing and Marketing Operations professional with over five years of
                experience working across international environments in Austria, Germany, Spain, and India.
              </p>
              <p>
                I help organizations grow through measurable marketing execution — combining
                performance campaigns, CRM workflows, and analytics-driven optimization to improve
                lead generation, conversion funnels, and marketing visibility.
              </p>
              <p>
                Most recently, I worked as the business-side Product Owner for{' '}
                <span className="font-semibold text-teal dark:text-cyan-400">EUThink</span>, an EU-funded research
                management platform supporting collaboration across multiple projects and partner
                organizations. In this role, I helped define KPI dashboards, reporting structures,
                and workflow requirements while coordinating with developers to align the platform
                with operational and stakeholder needs.
              </p>
              <p>
                Beyond the dashboards, I'm passionate about combining marketing strategy, analytics,
                and project coordination to support innovation-driven initiatives across Europe's
                research and technology ecosystem.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeLeft}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-orange-200 dark:border-zinc-700"
            >
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Photos with Budapest overlap */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            {/* Main presentation photo */}
            <div className="rounded-2xl overflow-hidden border-4 border-orange-200/60 dark:border-zinc-700 shadow-xl shadow-orange-100/50 dark:shadow-zinc-900/60">
              <img
                src={presentationPhoto}
                alt="Gourav Batra presenting at an event"
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="bg-orange-50/80 dark:bg-zinc-800 px-4 py-2 border-t border-orange-100 dark:border-zinc-700">
                <p className="text-slate-500 dark:text-zinc-400 text-xs italic text-center">
                  Presenting at a growth marketing panel event
                </p>
              </div>
            </div>

            {/* Budapest accent photo — overlapping bottom-right corner */}
            <div className="absolute -bottom-4 -right-4 w-36 h-36 rounded-xl overflow-hidden rotate-[-3deg] shadow-xl border-2 border-white dark:border-zinc-800 z-10">
              <img
                src={budapestPhoto}
                alt="Budapest — international work experience"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
