import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function CTA() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you can add email sending logic
    alert(language === 'ar' ? 'شكراً لتواصلك معنا!' : 'Thank you for contacting us!')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-blue-800" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="text-white">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              {t.contactTitle}
            </h2>
            <p className="text-lg mb-8 text-blue-100 font-cairo">
              {t.contactDesc}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold font-cairo">{t.email}</p>
                  <p className="text-blue-100 font-cairo">{t.companyEmail}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold font-cairo">{t.address}</p>
                  <p className="text-blue-100 font-cairo text-sm leading-relaxed">{t.companyAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <input
              type="text"
              name="name"
              placeholder={t.formName}
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 font-cairo"
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            />
            <input
              type="email"
              name="email"
              placeholder={t.formEmail}
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 font-cairo"
              required
              dir="ltr"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t.formPhone}
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 font-cairo"
              dir="ltr"
            />
            <textarea
              name="message"
              placeholder={t.formMessage}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 resize-none font-cairo"
              required
              dir={isRTL ? 'rtl' : 'ltr'}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold font-cairo"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
