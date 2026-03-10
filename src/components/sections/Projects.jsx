import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '@/constants/animations'
import ProjectCard from '@/components/ui/ProjectCard'
import WorkCard from '@/components/ui/WorkCard'
import DashboardMasonry from '@/components/ui/DashboardMasonry'
import { projects, workProjects } from '@/constants/content'

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
            A selection of platforms, campaigns, and creative work I've built, managed, and scaled — from EU-funded research infrastructure to B2B lead generation and video production.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mx-auto w-full"
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

        {/* Campaign & Creative Work */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <p className="text-orange-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-1">
              Campaign Work & Creative Projects
            </p>
            <h3 className="text-slate-800 dark:text-white text-2xl font-bold">
              More Selected Work
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {workProjects.map((project) => (
              <WorkCard key={project.id} {...project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
