import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@/hooks/useScrolled'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  const scrolledBg = isDark
    ? 'backdrop-blur-md bg-navy/85 shadow-lg'
    : 'backdrop-blur-md bg-white/85 shadow-lg'

  const defaultBg = 'bg-transparent'

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? scrolledBg : defaultBg
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-bold text-lg tracking-tight transition-colors ${
            scrolled && !isDark ? 'text-navy' : 'text-white'
          }`}
        >
          Gourav<span className="text-teal"> Batra</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled && !isDark
                  ? 'text-slate-700 hover:text-navy'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* Sun/Moon toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-colors ${
              scrolled && !isDark
                ? 'text-slate-600 hover:text-navy hover:bg-slate-100'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="#contact"
            className="bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-navy/95 backdrop-blur-md border-t border-black/5 dark:border-white/10 px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 dark:text-white/80 hover:text-navy dark:hover:text-white text-sm font-medium transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors text-center mt-1"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
