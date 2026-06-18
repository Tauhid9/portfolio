'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
        setStatusMessage('Message sent successfully! I\'ll reply within 24 hours. Check your email for confirmation.')
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
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's work together</h2>
          <p className="text-lg text-foreground/60">
            I'm open to discussing new projects, opportunities, and ideas. Reach out if you'd like to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info - simple */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Email</p>
                <a
                  href="mailto:tauhidhasan2017bd@gmail.com"
                  className="text-base font-medium text-foreground hover:text-foreground/70 transition-colors"
                >
                  tauhidhasan2017bd@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Phone</p>
                <a
                  href="tel:+8801518972645"
                  className="text-base font-medium text-foreground hover:text-foreground/70 transition-colors"
                >
                  +88 01518972645
                </a>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">Location</p>
                <p className="text-base font-medium text-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-border/30">
              <p className="text-sm font-medium text-foreground/60 mb-4">Connect</p>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link href="https://github.com/Tauhid9" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link href="https://linkedin.com/in/tauhid26" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form - simplified */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-sm">
                  {statusMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-400 text-sm">
                  {statusMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
