import React from 'react'
import { Zap, TrendingUp, Briefcase, ShoppingCart } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function Services() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: Zap,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
    },
    {
      icon: Briefcase,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
    },
    {
      icon: ShoppingCart,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
            {t.servicesTitle}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const title = t[service.titleKey as keyof typeof t]
            const desc = t[service.descKey as keyof typeof t]

            return (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition hover:bg-white duration-300 border border-gray-100"
              >
                <div className="bg-primary text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-cairo">{title}</h3>
                <p className="text-gray-600 font-cairo leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
