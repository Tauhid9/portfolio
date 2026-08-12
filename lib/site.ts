export const siteConfig = {
  name: 'Tauhid Hasan Chowdhury',
  shortName: 'Tauhid Hasan',
  role: 'Full-Stack Product Developer',
  tagline: "I build digital products that don't just launch — they perform.",
  siteUrl: 'https://tauhidportfolio.vercel.app',
  location: 'Dhaka, Bangladesh',
  responseTime: 'Usually responds within 24 hours',
  availability: 'Available for product work',

  /**
   * Transparent cutout for the WebGL hero — trimmed and downscaled from the
   * 3024px original to 900px. Rendered unmasked; the alpha channel is the shape.
   */
  heroImage: '/profile/towhid-vai.webp',
  /** Square headshot, used only for OG/Twitter cards and schema.org. */
  profileImage: '/profile/tauhid-hasan-chowdhury.jpg',
  cv: '/Tauhid_Hasan_Chowdhury_CV.pdf',

  icon32: '/profile/tauhid-icon-32.png',
  icon64: '/profile/tauhid-icon-64.png',
  icon180: '/profile/tauhid-icon-180.png',
  icon512: '/profile/tauhid-icon-512.png',
} as const

export const contact = {
  email: 'tauhidhasan2017bd@gmail.com',
  phone: '+8801518972645',
  phoneDisplay: '+88 015 1897 2645',
  whatsapp: '8801518972645',
  github: 'https://github.com/Tauhid9',
  linkedin: 'https://linkedin.com/in/tauhid26',
} as const

/** Prefilled WhatsApp deep link. `intent` becomes the first message. */
export function whatsappUrl(intent = "Hi Tauhid — I'd like to discuss a product.") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(intent)}`
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
] as const

export const heroStack = ['Next.js', 'React', 'Node.js', 'Python'] as const
