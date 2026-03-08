import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { staggerFast, viewport } from '@/constants/animations'
import { dashboardScreenshots } from '@/constants/content'

export default function DashboardMasonry() {
  const [selected, setSelected] = useState(null)
  const [large, ...rest] = dashboardScreenshots

  useEffect(() => {
    if (!selected) return
    const handler = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected])

  return (
    <>
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
          onClick={() => setSelected(large)}
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
            onClick={() => setSelected(screenshot)}
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

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close lightbox"
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selected.image}
                alt={selected.caption}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/70 text-sm text-center mt-3">{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
