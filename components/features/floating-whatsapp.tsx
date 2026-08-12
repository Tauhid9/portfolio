'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { whatsappUrl } from '@/lib/site'

export function FloatingWhatsApp() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 1.2 }}
    >
      <Link
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tauhid on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-105"
      >
        {!reduced && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
        )}

        <svg className="relative h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.03-1.378l-.36-.214-3.742.981.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.437-9.884 9.893-9.884a9.82 9.82 0 016.994 2.898 9.83 9.83 0 012.895 6.994c-.003 5.45-4.437 9.885-9.9 9.885M20.52 3.449A11.78 11.78 0 0012.05.001C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.423-8.452" />
        </svg>

        <span className="glass-strong pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-ink opacity-0 shadow-[var(--shadow-md)] transition-opacity duration-300 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </Link>
    </motion.div>
  )
}
