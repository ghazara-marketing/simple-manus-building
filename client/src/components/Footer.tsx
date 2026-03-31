import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">{t.companyName}</h3>
            <p className="text-gray-400 font-cairo leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-cairo">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2 text-gray-400 font-cairo">
              <li>
                <a href="#home" className="hover:text-white transition">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-cairo">
              {t.servicesTitle}
            </h3>
            <ul className="space-y-2 text-gray-400 font-cairo">
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.service1Title}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.service2Title}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.service3Title}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.service4Title}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-cairo">{t.contact}</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-400 font-cairo">
                <Mail size={18} />
                <a href={`mailto:${t.companyEmail}`} className="hover:text-white transition">
                  {t.companyEmail}
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-400 font-cairo text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>{t.companyAddress}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition"
                title="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-cairo">
            <p>
              &copy; {currentYear} {t.companyName}. {t.rights}.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                {t.privacy}
              </a>
              <a href="#" className="hover:text-white transition">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
