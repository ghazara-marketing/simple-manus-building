import React from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function Hero() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={isRTL ? 'md:order-2' : ''}>
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-cairo">
              {t.heroSubtitle}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center gap-2 font-cairo font-semibold">
                {t.startNow}
                {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition font-cairo font-semibold">
                {t.learnMore}
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`bg-gradient-to-br from-primary to-blue-800 rounded-2xl h-96 flex items-center justify-center shadow-lg ${isRTL ? 'md:order-1' : ''}`}>
            <div className="text-white text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-lg font-poppins font-semibold">{t.companyName}</p>
              <p className="text-sm text-blue-100 font-cairo">{language === 'ar' ? 'حل تسويقي متكامل' : 'Integrated Marketing Solution'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
