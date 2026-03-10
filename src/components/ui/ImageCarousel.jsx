import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ImageCarousel({ screenshots }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-2 p-3 bg-navy/5 dark:bg-slate-900 border-b border-border dark:border-slate-700">
        {screenshots.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              active === i
                ? 'bg-teal text-white shadow-sm'
                : 'bg-white dark:bg-slate-700 border border-border dark:border-slate-600 text-charcoal dark:text-slate-300 hover:border-teal/40 hover:text-teal dark:hover:text-teal'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={screenshots[active].image}
            alt={screenshots[active].label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </AnimatePresence>
      </div>

      {/* Caption */}
      <p className="text-xs text-charcoal/60 dark:text-slate-400 text-center italic px-4 py-2 bg-navy/5 dark:bg-slate-900 border-t border-border dark:border-slate-700">
        {screenshots[active].caption}
      </p>
    </div>
  )
}
