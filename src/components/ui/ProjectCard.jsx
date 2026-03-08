import { motion } from 'framer-motion'
import { scaleIn } from '@/constants/animations'
import ImageCarousel from './ImageCarousel'

export default function ProjectCard({ title, subtitle, description, role, tags, screenshots }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-800/60 rounded-2xl border border-border dark:border-slate-700/50 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/60 overflow-hidden flex flex-col transition-all duration-200"
    >
      {/* Screenshot carousel */}
      <ImageCarousel screenshots={screenshots} />

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">
          {subtitle}
        </p>
        <h3 className="text-navy dark:text-white text-xl font-bold mb-2">{title}</h3>
        <span className="inline-flex items-center self-start bg-navy/5 dark:bg-white/5 text-navy dark:text-slate-200 text-xs font-medium rounded-full px-3 py-1 mb-3">
          Role: {role}
        </span>
        <p className="text-charcoal/70 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal/10 dark:bg-teal/20 text-teal text-xs font-medium rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
