import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { CurrentlyBuilding } from '@/components/sections/currently-building'
import { Problem } from '@/components/sections/problem'
import { WhyMe } from '@/components/sections/why-me'
import { WhatIBuild } from '@/components/sections/what-i-build'
import { Work } from '@/components/sections/work'
import { Beyond } from '@/components/sections/beyond'
import { Services } from '@/components/sections/services'
import { Stack } from '@/components/sections/stack'
import { Philosophy } from '@/components/sections/philosophy'
import { Process } from '@/components/sections/process'
import { About } from '@/components/sections/about'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { CursorGlow } from '@/components/motion/cursor-glow'
import { ScrollProgressBar } from '@/components/features/scroll-progress-bar'
import { ScrollToTop } from '@/components/features/scroll-to-top'
import { FloatingWhatsApp } from '@/components/features/floating-whatsapp'
import { SmoothScroll } from '@/components/features/smooth-scroll'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <ScrollProgressBar />
      <Navigation />

      <main id="main" tabIndex={-1}>
        <Hero />
        <CurrentlyBuilding />
        <Problem />
        <Work />
        <WhyMe />
        <WhatIBuild />
        <Beyond />
        <Services />
        <Stack />
        <Philosophy />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  )
}
