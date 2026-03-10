import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { fadeUp, staggerContainer, scaleIn, viewport } from '@/constants/animations'
import { certifications, recognition } from '@/constants/content'

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const handler = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected])

  return (
    <>
      <section id="certifications" className="py-20 md:py-28 bg-slate-50 dark:bg-zinc-800 transition-colors duration-300">
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
              Certifications
            </p>
            <h2 className="text-slate-800 dark:text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
              Professional Certifications
            </h2>
            <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
              Continuous learning is an important part of my professional development. I have completed certifications across marketing, analytics, and process improvement to strengthen my skills in digital marketing and operational efficiency.
            </p>
          </motion.div>

          {/* Cert cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => setSelected(cert)}
                className="cursor-pointer bg-white dark:bg-white/[0.03] rounded-2xl border border-orange-100 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:shadow-zinc-900/60 overflow-hidden transition-all duration-200 group"
              >
                {/* Certificate image */}
                <div className="aspect-video bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Label */}
                <div className="px-4 py-3 border-t border-orange-100 dark:border-white/10">
                  <p className="text-slate-800 dark:text-white text-sm font-semibold leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-teal dark:text-cyan-400 text-xs font-medium mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Appreciation subsection */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-16"
          >
            <p className="text-orange-500 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6 text-center">
              Appreciation
            </p>
            <div
              onClick={() => setSelected(recognition)}
              className="cursor-pointer group flex flex-col md:flex-row gap-6 bg-white dark:bg-white/[0.03] rounded-2xl border border-orange-100 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:shadow-zinc-900/60 overflow-hidden transition-all duration-200 max-w-3xl mx-auto"
            >
              {/* Image */}
              <div className="relative md:w-64 shrink-0 bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src={recognition.image}
                  alt={recognition.title}
                  className="w-full h-full object-contain p-4 max-h-56 md:max-h-full"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    View full image
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center p-6 md:pl-2">
                <p className="text-slate-800 dark:text-white text-base font-bold leading-snug mb-2">
                  {recognition.title}
                </p>
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {recognition.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              className="relative max-w-3xl w-full"
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
                alt={selected.name ?? selected.title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl bg-white p-4"
                loading="lazy"
                decoding="async"
              />
              <p className="text-white/70 text-sm text-center mt-3">
                {selected.name
                  ? `${selected.name} — ${selected.issuer}`
                  : selected.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
