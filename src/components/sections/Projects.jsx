import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/constants/animations'
import ProjectCard from '@/components/ui/ProjectCard'
import DashboardMasonry from '@/components/ui/DashboardMasonry'
import { projects } from '@/constants/content'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-zinc-950 transition-colors duration-300">
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
            Projects
          </p>
          <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
            Featured Work & Dashboards
          </h2>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
            A selection of platforms and systems I've built, managed, and scaled — from
            EU-funded research infrastructure to financial operations pipelines.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {/* Dashboard masonry — all 5 screenshots */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16"
        >
          <div className="text-center mb-6">
            <p className="text-orange-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-1">
              Live Platform Screenshots
            </p>
            <h3 className="text-slate-800 dark:text-white text-xl font-bold">
              EUThink Dashboard Gallery
            </h3>
          </div>
          <DashboardMasonry />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center text-slate-400 dark:text-zinc-600 text-xs mt-8 italic"
        >
          All dashboards from EUThink v1.0.0 Beta — live platform managed by Gourav Batra
        </motion.p>
      </div>
    </section>
  )
}
