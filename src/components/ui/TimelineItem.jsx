import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { timelineItem } from '@/constants/animations'

export default function TimelineItem({ role, company, period, location, description, highlights, isLast }) {
  return (
    <motion.div variants={timelineItem} className="flex gap-6">
      {/* Left: dot + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-teal ring-4 ring-teal/20 z-10 relative" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-border dark:bg-slate-700 mt-2" style={{ minHeight: '2rem' }} />
        )}
      </div>

      {/* Right: content */}
      <div className={`bg-white dark:bg-slate-800/60 border border-border dark:border-slate-700/50 rounded-xl p-6 flex-1 transition-colors duration-300 ${isLast ? 'mb-0' : 'mb-8'}`}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h3 className="text-navy dark:text-white font-bold text-lg">{role}</h3>
          <span className="text-teal font-semibold text-sm bg-teal/10 px-3 py-1 rounded-full whitespace-nowrap">
            {period}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-teal font-medium text-sm">{company}</span>
          <span className="text-charcoal/40 dark:text-slate-500">·</span>
          <span className="flex items-center gap-1 text-charcoal/60 dark:text-slate-400 text-sm">
            <MapPin className="w-3 h-3" />
            {location}
          </span>
        </div>
        <p className="text-charcoal/70 dark:text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
        <ul className="space-y-1">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-charcoal dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
