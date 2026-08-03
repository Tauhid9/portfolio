'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage("Message sent successfully! I'll reply within 24 hours. Check your email for confirmation.")
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
        setStatusMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('[v0] Form submission error:', error)
      setSubmitStatus('error')
      setStatusMessage('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let&apos;s Work Together</h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-3xl mx-auto">
            Reach out for full-stack development work, client projects, or collaboration on production web applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Direct Contact</p>
              <h3 className="mt-3 mb-4 text-2xl font-bold text-foreground">Available for product work, dashboards, and business web applications</h3>
              <p className="max-w-xl text-sm leading-7 text-foreground/65 sm:text-base">
                If you&apos;re hiring, collaborating, or looking for help building a modern web platform, the fastest way to reach me is by email or WhatsApp.
              </p>
            </div>

            {[
              { icon: Mail, label: 'Email', value: 'tauhidhasan2017bd@gmail.com', href: 'mailto:tauhidhasan2017bd@gmail.com', color: 'from-primary/30 to-primary/10' },
              { icon: MessageCircle, label: 'WhatsApp', value: '+88 01518972645', href: 'https://wa.me/8801518972645', color: 'from-green-500/30 to-green-500/10' },
              { icon: Phone, label: 'Phone', value: '+88 01518972645', href: 'tel:+8801518972645', color: 'from-cyan-500/30 to-cyan-500/10' },
              { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: '#', color: 'from-violet-500/30 to-violet-500/10' },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="flex gap-4 group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:shadow-lg transition-all`}>
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-medium text-foreground">{item.label}</h4>
                  {item.href === '#' ? (
                    <p className="text-sm text-foreground/70">{item.value}</p>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="break-all text-sm text-foreground/70 transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="pt-6">
              <h4 className="text-base sm:text-lg font-medium text-foreground mb-4">Professional Links</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/Tauhid9' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/tauhid26' },
                ].map((social) => (
                  <motion.div key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="outline" asChild className="border-primary/30 hover:bg-primary/10">
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4 mr-2" />
                        {social.label}
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50">
              <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Response usually within 24 hours
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Send a message</h3>
              <p className="mb-6 text-sm leading-7 text-foreground/65">
                Share a project brief, role details, or collaboration idea and I&apos;ll get back to you with the next step.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ x: 2 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div whileHover={{ x: 2 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div whileHover={{ x: 2 }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div whileHover={{ x: 2 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-input text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    placeholder="Your message..."
                  />
                </motion.div>

                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {statusMessage}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {statusMessage}
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
