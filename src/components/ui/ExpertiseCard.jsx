import { motion } from 'framer-motion'
import { scaleIn } from '@/constants/animations'

export default function ExpertiseCard({ icon: Icon, title, description, accentFrom, accentTo }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-800/60 rounded-2xl border border-border dark:border-slate-700/50 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/60 transition-all duration-200 overflow-hidden flex flex-col"
    >
      {/* Gradient accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(to right, ${accentFrom}, ${accentTo})` }}
      />
      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-teal/10 dark:bg-teal/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-teal" />
        </div>
        <h3 className="text-navy dark:text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-charcoal/70 dark:text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </motion.div>
  )
}
