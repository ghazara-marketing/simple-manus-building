import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ar' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')
  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

// Translation object
export const translations = {
  ar: {
    // Header
    home: 'الرئيسية',
    about: 'عن الشركة',
    services: 'الخدمات',
    contact: 'اتصل بنا',
    startNow: 'ابدأ الآن',

    // Hero
    heroTitle: 'حل تسويقي متكامل لعملك',
    heroSubtitle: 'نحن نقدم خدمات تسويق رقمي واستشارات تجارية متخصصة لنمو عملك بشكل مستدام',
    learnMore: 'اعرف المزيد',

    // About
    aboutTitle: 'عن Ghazara',
    aboutDesc: 'شركة متخصصة في التجارة والتسويق الرقمي، نقدم حلولاً متكاملة لتطوير الأعمال والعلامات التجارية.',

    // Services
    servicesTitle: 'خدماتنا',
    service1Title: 'التسويق الرقمي',
    service1Desc: 'استراتيجيات تسويقية فعالة عبر وسائل التواصل والإنترنت',
    service2Title: 'الاستشارات التجارية',
    service2Desc: 'استشارات متخصصة لتطوير وتوسع عملك التجاري',
    service3Title: 'إدارة المشاريع',
    service3Desc: 'إدارة احترافية للمشاريع من البداية إلى النهاية',
    service4Title: 'التجارة الإلكترونية',
    service4Desc: 'حلول متكاملة لإنشاء وإدارة متاجر إلكترونية ناجحة',

    // Contact
    contactTitle: 'تواصل معنا',
    contactDesc: 'نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    address: 'العنوان',
    fullName: 'الاسم الكامل',
    message: 'الرسالة',
    send: 'إرسال',
    formName: 'اسمك',
    formEmail: 'بريدك الإلكتروني',
    formPhone: 'رقم الهاتف',
    formMessage: 'رسالتك',

    // Footer
    rights: 'جميع الحقوق محفوظة',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    followUs: 'تابعنا',

    // Company Info
    companyName: 'Ghazara',
    companyEmail: 'info@ghazara.net',
    companyAddress: 'شارع الجزائر - عمارة باطاهر - الدور الثاني - سيئون - حضرموت - اليمن',
  },
  en: {
    // Header
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    startNow: 'Start Now',

    // Hero
    heroTitle: 'Integrated Marketing Solution for Your Business',
    heroSubtitle: 'We provide specialized digital marketing and business consulting services for sustainable business growth',
    learnMore: 'Learn More',

    // About
    aboutTitle: 'About Ghazara',
    aboutDesc: 'A specialized company in trading and digital marketing, offering integrated solutions for business and brand development.',

    // Services
    servicesTitle: 'Our Services',
    service1Title: 'Digital Marketing',
    service1Desc: 'Effective marketing strategies through social media and the internet',
    service2Title: 'Business Consulting',
    service2Desc: 'Specialized consulting for business development and expansion',
    service3Title: 'Project Management',
    service3Desc: 'Professional project management from start to finish',
    service4Title: 'E-Commerce',
    service4Desc: 'Integrated solutions for creating and managing successful online stores',

    // Contact
    contactTitle: 'Get In Touch',
    contactDesc: 'We are here to help you. Contact us for a free consultation',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    fullName: 'Full Name',
    message: 'Message',
    send: 'Send',
    formName: 'Your Name',
    formEmail: 'Your Email',
    formPhone: 'Phone Number',
    formMessage: 'Your Message',

    // Footer
    rights: 'All Rights Reserved',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    followUs: 'Follow Us',

    // Company Info
    companyName: 'Ghazara',
    companyEmail: 'info@ghazara.net',
    companyAddress: 'Al-Jazira Street - Batahir Building - 2nd Floor - Seiyun - Hadramawt - Yemen',
  },
}

export function t(key: keyof typeof translations.ar, lang: Language = 'ar') {
  return translations[lang][key] || translations.ar[key]
}
