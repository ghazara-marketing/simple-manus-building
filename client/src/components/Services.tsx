import React from 'react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function Services() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const services = [
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663056479406/itk3sBecz3URf43TyzDVAM/service-digital-marketing-HAbi9gy7oELV6gN3QfSQNm.webp',
      titleKey: 'service1Title',
      descKey: 'service1Desc',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663056479406/itk3sBecz3URf43TyzDVAM/service-business-consulting-nWGtZ7jyazFkzEDBsA8Svy.webp',
      titleKey: 'service2Title',
      descKey: 'service2Desc',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663056479406/itk3sBecz3URf43TyzDVAM/service-project-management-Y9MAaaikFsBQLoRoJZtppE.webp',
      titleKey: 'service3Title',
      descKey: 'service3Desc',
    },
    {
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663056479406/itk3sBecz3URf43TyzDVAM/service-ecommerce-3wkvUCmxKrFM8NkSbf8UyS.webp',
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
            const title = t[service.titleKey as keyof typeof t]
            const desc = t[service.descKey as keyof typeof t]

            return (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition hover:bg-white duration-300 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-4 flex-shrink-0">
                  <img src={service.image} alt={title} className="w-full h-full object-contain" />
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
