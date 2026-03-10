import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Play, ChevronRight, X } from 'lucide-react'
import { scaleIn } from '@/constants/animations'

function getYouTubeId(url) {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : null
}

export default function WorkCard({
  title, subtitle, role, description,
  highlights, tools, result,
  image, video, link, featured,
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const videoId = video ? getYouTubeId(video) : null

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e) => { if (e.key === 'Escape') setLightboxOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxOpen])

  return (
    <>
      <motion.div
        variants={scaleIn}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className={`bg-white dark:bg-slate-800/60 rounded-2xl border border-border dark:border-slate-700/50 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/60 overflow-hidden transition-all duration-200 ${
          featured ? 'col-span-1 md:col-span-3 flex flex-col md:flex-row' : 'flex flex-col'
        }`}
      >
        {/* ── Media zone ── */}
        {image && (
          <div
            onClick={() => setLightboxOpen(true)}
            className={`relative overflow-hidden bg-gray-100 cursor-pointer group ${
              featured ? 'md:w-2/5' : 'aspect-video'
            }`}
          >
            <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                View full image
              </span>
            </div>
          </div>
        )}

        {video && videoId && (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-video overflow-hidden bg-gray-900 block group"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </div>
            </div>
            <span className="absolute bottom-2 right-3 text-white/70 text-xs font-medium">
              Watch on YouTube
            </span>
          </a>
        )}

        {link && !image && !video && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-video bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900 flex flex-col items-center justify-center gap-3 group block"
          >
            <ExternalLink className="w-10 h-10 text-white/40 group-hover:text-white/70 transition-colors duration-200" />
            <span className="text-white/50 group-hover:text-white/80 text-xs font-medium transition-colors duration-200">
              {link.label}
            </span>
          </a>
        )}

        {/* ── Content zone ── */}
        <div className="p-5 flex flex-col flex-1 gap-3">
          <div>
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">
              {subtitle}
            </p>
            <h3 className="text-navy dark:text-white text-base font-bold leading-snug">
              {title}
            </h3>
            <span className="inline-flex items-center mt-1.5 bg-navy/5 dark:bg-white/5 text-navy dark:text-slate-200 text-xs font-medium rounded-full px-3 py-1">
              {role}
            </span>
          </div>

          <p className="text-charcoal/70 dark:text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {highlights.length > 0 && (
            <ul className="space-y-1">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-xs">
                  <ChevronRight className="w-3 h-3 text-teal mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {tools.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tools.map((t) => (
                <span
                  key={t}
                  className="bg-teal/10 dark:bg-teal/20 text-teal text-xs font-medium rounded-full px-2.5 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {result && (
            <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
              <p className="text-xs font-semibold text-orange-600 dark:text-cyan-400">
                ✦ {result}
              </p>
            </div>
          )}

          {link && (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:text-teal/80 transition-colors mt-1"
            >
              {link.label}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </motion.div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
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
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={image}
                alt={title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <p className="text-white/70 text-sm text-center mt-3">{title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
