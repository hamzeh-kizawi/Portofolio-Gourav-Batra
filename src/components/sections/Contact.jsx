import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react'
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewport } from '@/constants/animations'
import ContactForm from '@/components/ui/ContactForm'
import sittingPhoto from '@/assets/images/Sitting-on-Steps.jpg'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-navy dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <p className="text-orange-400 dark:text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 font-display dark:font-sans">
            Let's Connect
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            Have a project, opportunity, or just want to chat about growth? Drop me a message.
          </p>
        </motion.div>

        {/* Two-column: form left, info right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <ContactForm />
          </motion.div>

          {/* RIGHT: Photo card + links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6 justify-center"
          >
            {/* Small photo identity card */}
            <motion.div
              variants={fadeRight}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <img
                src={sittingPhoto}
                alt="Gourav Batra sitting on steps"
                className="w-20 h-20 rounded-xl object-cover object-center shrink-0"
              />
              <div>
                <p className="text-white font-bold text-base">Gourav Batra</p>
                <p className="text-white/50 text-sm mt-0.5">Growth Marketing & MarOps</p>
                <p className="text-orange-400 dark:text-cyan-400 text-xs font-semibold mt-1 uppercase tracking-wide">
                  Open to EU roles
                </p>
              </div>
            </motion.div>

            {/* Contact links */}
            <motion.div variants={fadeRight} className="space-y-4">
              <a
                href="mailto:gouravbatra@email.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 dark:group-hover:bg-cyan-400/20 transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-orange-400 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 dark:group-hover:text-cyan-400 transition-colors">
                    gouravbatra@email.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/gouravbatra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-orange-500/20 dark:group-hover:bg-cyan-400/20 transition-colors shrink-0">
                  <Linkedin className="w-5 h-5 text-orange-400 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide">LinkedIn</p>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                    linkedin.com/in/gouravbatra
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-orange-400 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide">Location</p>
                  <p className="text-white text-sm font-medium">Vienna, Austria · Open to EU roles</p>
                </div>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={fadeRight}>
              <div className="inline-flex items-center gap-2 bg-orange-500/15 dark:bg-cyan-400/15 border border-orange-400/30 dark:border-cyan-400/30 text-orange-400 dark:text-cyan-400 text-sm font-semibold px-4 py-2.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-orange-400 dark:bg-cyan-400 animate-pulse" />
                Open to Growth Marketing & MarOps roles
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/30 text-sm">
            © 2025 Gourav Batra · Growth Marketing & Operations · Built with React + Vite
          </p>
        </motion.div>
      </div>
    </section>
  )
}
