import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { isRTL } = useLanguage()

  return (
    <div className="min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
