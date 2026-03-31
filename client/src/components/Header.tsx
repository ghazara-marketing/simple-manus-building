import React, { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage, translations } from '@/contexts/LanguageContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, isRTL } = useLanguage()
  const t = translations[language]

  const navItems = [
    { key: 'home', label: t.home },
    { key: 'about', label: t.about },
    { key: 'services', label: t.services },
    { key: 'contact', label: t.contact },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition">
          <img src="/logo.webp" alt="Ghazara Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-gray-700 hover:text-primary transition font-cairo"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side - Language switcher and CTA */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              {language === 'ar' ? 'EN' : 'AR'}
            </span>
          </button>

          {/* CTA Button - Desktop */}
          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-cairo font-semibold">
            {t.startNow}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200" dir={isRTL ? 'rtl' : 'ltr'}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition font-cairo border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full m-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-cairo font-semibold">
            {t.startNow}
          </button>
        </nav>
      )}
    </header>
  )
}
