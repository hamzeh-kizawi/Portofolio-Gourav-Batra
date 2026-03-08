import { motion } from 'framer-motion'
import { staggerFast, viewport } from '@/constants/animations'
import { dashboardScreenshots } from '@/constants/content'

export default function DashboardMasonry() {
  const [large, ...rest] = dashboardScreenshots

  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8"
    >
      {/* Large tile: dashboard_overview — spans 2 cols × 2 rows on md+ */}
      <motion.div
        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl border border-orange-100 dark:border-white/10 shadow-md cursor-pointer"
      >
        <img
          src={large.image}
          alt={large.caption}
          className="w-full h-full object-cover aspect-video"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm font-medium">{large.caption}</p>
        </div>
      </motion.div>

      {/* Remaining 4 tiles */}
      {rest.map((screenshot) => (
        <motion.div
          key={screenshot.caption}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="relative group overflow-hidden rounded-xl border border-orange-100 dark:border-white/10 shadow-sm cursor-pointer"
        >
          <img
            src={screenshot.image}
            alt={screenshot.caption}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <p className="text-white text-xs font-medium leading-snug">{screenshot.caption}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
