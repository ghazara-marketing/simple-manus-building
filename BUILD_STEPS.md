# خطوات البناء التفصيلية - Ghazara Landing Page

## المرحلة الأولى: إعداد المشروع

### الخطوة 1: تثبيت المكتبات الإضافية

بعد تثبيت المكتبات الأساسية، ستحتاج إلى تثبيت المكتبات التالية:

```bash
# المكتبات الأساسية (إذا لم تكن مثبتة)
pnpm add react react-dom
pnpm add -D vite @vitejs/plugin-react
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D typescript @types/react @types/react-dom

# مكتبات إضافية مفيدة
pnpm add framer-motion          # للرسوم المتحركة
pnpm add react-hook-form        # لإدارة النماذج
pnpm add zod                    # للتحقق من البيانات
pnpm add axios                  # لطلبات HTTP
pnpm add lucide-react           # للأيقونات
```

### الخطوة 2: إعداد Tailwind CSS

```bash
# إنشاء ملفات التكوين
pnpm exec tailwindcss init -p
```

### الخطوة 3: إضافة Google Fonts

في ملف `client/index.html`، أضف الكود التالي في قسم `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## المرحلة الثانية: بناء المكونات الأساسية

### الخطوة 4: إنشاء مكون Header

**المسار**: `client/src/components/Header.tsx`

```typescript
import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* الشعار */}
        <div className="text-2xl font-bold text-primary">Ghazara</div>

        {/* قائمة التنقل للشاشات الكبيرة */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-700 hover:text-primary transition">الرئيسية</a>
          <a href="#services" className="text-gray-700 hover:text-primary transition">الخدمات</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition">الشهادات</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition">اتصل بنا</a>
        </nav>

        {/* زر الاتصال */}
        <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
          ابدأ الآن
        </button>

        {/* زر القائمة للشاشات الصغيرة */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">الرئيسية</a>
          <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">الخدمات</a>
          <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">الشهادات</a>
          <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">اتصل بنا</a>
        </nav>
      )}
    </header>
  )
}
```

### الخطوة 5: إنشاء مكون Hero

**المسار**: `client/src/components/Hero.tsx`

```typescript
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-dark mb-6 leading-tight">
              نحن نحول أفكارك إلى نتائج رقمية
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              خدمات تسويق رقمي متكاملة لتنمية عملك وزيادة حضورك على الإنترنت
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                ابدأ الآن <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition">
                اعرف المزيد
              </button>
            </div>
          </div>

          {/* الصورة */}
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-lg">صورة بطل الموقع</p>
              <p className="text-sm text-blue-100">Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### الخطوة 6: إنشاء مكون Services

**المسار**: `client/src/components/Services.tsx`

```typescript
import React from 'react'
import { Zap, TrendingUp, Share2, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'التسويق عبر وسائل التواصل',
    description: 'استراتيجيات فعالة لزيادة تفاعل جمهورك على جميع المنصات'
  },
  {
    icon: TrendingUp,
    title: 'تحسين محركات البحث',
    description: 'تحسين ترتيب موقعك في نتائج البحث وزيادة الزيارات العضوية'
  },
  {
    icon: Share2,
    title: 'الإعلانات الرقمية',
    description: 'حملات إعلانية مستهدفة لزيادة المبيعات والعملاء المحتملين'
  },
  {
    icon: BarChart3,
    title: 'تحليل البيانات',
    description: 'تقارير مفصلة وتحليلات عميقة لقياس أداء حملاتك'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-dark mb-4">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-600">
            حلول تسويقية شاملة لنمو عملك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

### الخطوة 7: إنشاء مكون Testimonials

**المسار**: `client/src/components/Testimonials.tsx`

```typescript
import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'أحمد محمد',
    company: 'شركة التقنية المتقدمة',
    text: 'عملنا مع Ghazara كان تجربة رائعة. زادت مبيعاتنا بنسبة 150% في أول ستة أشهر',
    rating: 5
  },
  {
    name: 'فاطمة علي',
    company: 'متجر الملابس الإلكتروني',
    text: 'الفريق محترف جداً ويفهم احتياجات السوق. أنصح بهم بشدة',
    rating: 5
  },
  {
    name: 'محمود حسن',
    company: 'وكالة العقارات',
    text: 'خدمة ممتازة وتواصل مستمر. النتائج تفوقت كل توقعاتنا',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-dark mb-4">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600">
            شهادات من عملاء حققنا لهم نتائج مميزة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### الخطوة 8: إنشاء مكون CTA (Call To Action)

**المسار**: `client/src/components/CTA.tsx`

```typescript
import React from 'react'
import { Mail, Phone } from 'lucide-react'

export default function CTA() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // هنا يمكنك إضافة منطق إرسال البيانات
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* معلومات الاتصال */}
          <div className="text-white">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              دعنا نساعدك في نمو عملك
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail size={24} />
                <div>
                  <p className="font-semibold">البريد الإلكتروني</p>
                  <p className="text-blue-100">info@ghazara.net</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} />
                <div>
                  <p className="font-semibold">الهاتف</p>
                  <p className="text-blue-100">+966 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الاتصال */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl">
            <input
              type="text"
              name="name"
              placeholder="اسمك الكامل"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="بريدك الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="رسالتك"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
```

### الخطوة 9: إنشاء مكون Footer

**المسار**: `client/src/components/Footer.tsx`

```typescript
import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* عن الشركة */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ghazara</h3>
            <p className="text-gray-400">
              وكالة تسويق رقمي متخصصة في نمو الأعمال والعلامات التجارية
            </p>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="text-lg font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">التسويق الرقمي</a></li>
              <li><a href="#" className="hover:text-white transition">تحسين محركات البحث</a></li>
              <li><a href="#" className="hover:text-white transition">الإعلانات الرقمية</a></li>
              <li><a href="#" className="hover:text-white transition">تحليل البيانات</a></li>
            </ul>
          </div>

          {/* الروابط السريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-white transition">عن الشركة</a></li>
              <li><a href="#" className="hover:text-white transition">المدونة</a></li>
              <li><a href="#" className="hover:text-white transition">اتصل بنا</a></li>
            </ul>
          </div>

          {/* وسائل التواصل */}
          <div>
            <h3 className="text-lg font-bold mb-4">تابعنا</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary p-2 rounded-lg hover:bg-blue-800 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* الفاصل */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Ghazara. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition">شروط الخدمة</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

---

## المرحلة الثالثة: تجميع الصفحة الرئيسية

### الخطوة 10: تحديث صفحة Home

**المسار**: `client/src/pages/Home.tsx`

```typescript
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
```

---

## المرحلة الرابعة: الاختبار والتحسين

### الخطوة 11: اختبار التجاوب (Responsiveness)

تأكد من أن الموقع يعمل بشكل صحيح على:

- الهواتف الذكية (320px - 480px)
- الأجهزة اللوحية (768px - 1024px)
- الشاشات الكبيرة (1920px+)

### الخطوة 12: تحسين الأداء

```bash
# فحص الأداء باستخدام Lighthouse
pnpm build
pnpm preview
```

---

## قائمة التحقق النهائية

- [ ] جميع المكونات تم بناؤها بنجاح
- [ ] الموقع يعمل بدون أخطاء في وحدة التحكم
- [ ] التصميم متجاوب على جميع الأجهزة
- [ ] جميع الروابط تعمل بشكل صحيح
- [ ] النماذج تعمل بشكل صحيح
- [ ] الصور محسّنة وتحميلها سريع
- [ ] الموقع يحقق معايير الأداء العالية

---

**الخطوة التالية**: انتقل إلى دليل النشر على Vercel وربط النطاق من Hostinger
