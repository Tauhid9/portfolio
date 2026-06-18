'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 20px rgba(34, 197, 94, 0.3)',
            '0 0 40px rgba(34, 197, 94, 0.6)',
            '0 0 20px rgba(34, 197, 94, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Link
          href="https://wa.me/8801518972645?text=Hi%20Tauhid"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.23l-.346.202-.36-.054C4.465 7.691 3.477 7.39 2.573 7.39 1.65 7.39 1 8.04 1 9.008c0 1.017.726 1.997 2.011 2.964.195.159.38.305.54.427.238.18.434.34.596.491.352.31.685.631 1 .956 1.3 1.3 1.75 2.706 1.75 4.15 0 1.443-.606 2.67-1.616 3.534-.548.461-1.159.729-1.823.813-.32.041-.64.041-.952.02-.16-.01-.32-.035-.476-.069-.333-.065-.652-.18-.952-.337.254.87.99 1.618 1.945 2.006.45.183.931.273 1.416.273.366 0 .726-.035 1.076-.106 1.37-.227 2.532-1.054 3.302-2.483.544-.936 1.01-2.228 1.169-3.726" />
          </svg>
        </Link>
      </motion.div>

      {/* Mobile Label (shows on hover or first load) */}
      <motion.div
        className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold bg-green-500 text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 0, y: 4 }}
        transition={{ delay: 1 }}
      >
        Chat with us
      </motion.div>
    </motion.div>
  )
}
