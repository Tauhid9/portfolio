import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A lockfile in the home directory otherwise wins root inference.
  turbopack: {
    root: projectRoot,
  },
  images: {
    // `sharp` is installed, so let Next emit AVIF/WebP and a proper srcset
    // instead of shipping the full-size source to every device.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [64, 128, 256, 384, 512],
  },
}

export default nextConfig
