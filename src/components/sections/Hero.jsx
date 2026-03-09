import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { fadeLeft, fadeRight, staggerContainer } from '@/constants/animations'
import profilePic from '@/assets/images/me-suit-image.png'

const tags = [
  'B2B Demand Generation',
  'MarTech Architecture',
  'Performance Marketing',
  'CRM Analytics',
  'EU Research Programs',
]

export default function Hero({ theme }) {
  const isDark = theme === 'dark'
  const ringGradient = isDark
    ? 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #0f172a, #3b82f6)'
    : 'conic-gradient(from 0deg, #f97316, #fb7185, #14b8a6, #f97316)'
  const glowColor = isDark
    ? 'radial-gradient(circle, rgba(59,130,246,0.65) 0%, rgba(6,182,212,0.3) 50%, transparent 75%)'
    : 'radial-gradient(circle, rgba(249,115,22,0.55) 0%, rgba(20,184,166,0.25) 50%, transparent 75%)'
  const hoverGlow = isDark
    ? { boxShadow: '0 0 50px rgba(59,130,246,0.5), 0 0 100px rgba(6,182,212,0.25)' }
    : { boxShadow: '0 0 50px rgba(249,115,22,0.45), 0 0 100px rgba(251,113,133,0.2)' }
  const defaultGlow = isDark
    ? '0 0 30px rgba(59,130,246,0.25), 0 0 60px rgba(6,182,212,0.1)'
    : '0 0 30px rgba(249,115,22,0.2), 0 0 60px rgba(251,113,133,0.1)'

  return (
    <section className="min-h-screen bg-navy dark:bg-zinc-950 relative overflow-hidden flex items-center transition-colors duration-300">
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <motion.p
              variants={fadeLeft}
              className="text-teal text-sm font-semibold uppercase tracking-widest"
            >
              Growth Marketing & Marketing Operations
            </motion.p>

            <motion.h1
              variants={fadeLeft}
              className="text-white text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight font-display dark:font-sans"
            >
              Turning Data into{' '}
              <span className={isDark ? 'text-gradient-neon' : 'text-gradient-joy'}>Growth</span>,<br />
              Strategy into{' '}
              <span className={isDark ? 'text-gradient-neon' : 'text-gradient-joy'}>Results</span>
            </motion.h1>

            <motion.p
              variants={fadeLeft}
              className="text-white/65 text-lg leading-relaxed max-w-lg"
            >
              Bridging the gap between marketing execution and operational structure —
              combining performance campaigns, CRM automation, and analytics-driven
              optimization across international environments.
            </motion.p>

            {/* Tags */}
            <motion.div variants={fadeLeft} className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/8 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeLeft} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className={`flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'bg-gradient-to-r from-orange-400 via-rose-400 to-teal-500 hover:opacity-90'
                }`}
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-white/30 hover:bg-white/8 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Circular profile image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center order-1 lg:order-2"
          >
            {/* Hover wrapper — scales the whole group */}
            <motion.div
              className="relative w-56 h-56 md:w-64 md:h-64 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Layer 1: Ambient glow (pulsing, theme-reactive) */}
              <motion.div
                className="absolute -inset-4 rounded-full blur-2xl"
                animate={{ opacity: [0.35, 0.6, 0.35] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                style={{ background: glowColor }}
              />

              {/* Layer 2: Rotating conic-gradient ring (theme-reactive) */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: ringGradient }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              />

              {/* Layer 3: Inner clip — creates the ring border thickness */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-navy dark:bg-zinc-950">
                <img
                  src={profilePic}
                  alt="Gourav Batra"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Layer 4: Hover glow intensifier */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                initial={{ boxShadow: defaultGlow }}
                whileHover={hoverGlow}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
