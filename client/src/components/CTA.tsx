import React, { useState } from 'react'
import { Mail, Phone, MapPin, Loader } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '')

export default function CTA() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing')
      }

      const response = await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })

      if (response.status === 200) {
        setSubmitStatus('success')
        setStatusMessage(language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage(
        language === 'ar'
          ? 'حدث خطأ في إرسال الرسالة. تأكد من إعدادات EmailJS.'
          : 'Error sending message. Please check EmailJS configuration.'
      )
      console.error('EmailJS error:', error)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsLoading(false)
    }
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
            <input
              type="tel"
              name="phone"
              placeholder={t.formPhone}
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 font-cairo"
              dir="ltr"
              disabled={isLoading}
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
              disabled={isLoading}
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold font-cairo disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <Loader size={20} className="animate-spin" />}
              {t.send}
            </button>
            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg font-cairo text-center">
                {statusMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg font-cairo text-center">
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
