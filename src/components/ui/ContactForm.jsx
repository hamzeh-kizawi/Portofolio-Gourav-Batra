import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async send (wire to Formspree/EmailJS in production)
    setTimeout(() => setStatus('sent'), 1200)
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle className="w-12 h-12 text-teal" />
        <h4 className="text-white text-xl font-bold">Message sent!</h4>
        <p className="text-white/60 text-sm">Thanks for reaching out — I'll be in touch soon.</p>
        <button
          onClick={() => { setStatus('idle'); setFields({ name: '', email: '', message: '' }) }}
          className="text-teal text-sm hover:underline mt-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all text-sm'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white/70 text-sm font-medium mb-1.5">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={fields.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-white/70 text-sm font-medium mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          value={fields.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-white/70 text-sm font-medium mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        {status === 'sending' ? (
          <span className="animate-pulse">Sending…</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
