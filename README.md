# Ghazara Landing Page

موقع هبوط احترافي لشركة غزارة للتجارة والتسويق

## 🌐 معلومات الموقع

- **الاسم:** Ghazara for Trading and Marketing -غزارة للتجارة والتسويق 
- **النطاق:** ghazara.net
- **البريد:** info@ghazara.net
- **العنوان:** شارع الجزائر - عمارة باطاهر - الدور الثاني - سيئون - حضرموت - اليمن

## ✨ الميزات

- ✅ دعم كامل للغة العربية والإنجليزية
- ✅ تصميم حديث واحترافي
- ✅ متجاوب على جميع الأجهزة
- ✅ نموذج اتصال متكامل مع EmailJS
- ✅ شعار احترافي للشركة
- ✅ صور احترافية للخدمات
- ✅ سرعة تحميل عالية

## 🚀 البدء السريع

### المتطلبات
- Node.js 18+
- pnpm

### التثبيت
```bash
pnpm install
```

### تشغيل محلياً
```bash
pnpm dev
```

### البناء للإنتاج
```bash
pnpm build
```

## 📋 إعداد EmailJS

1. اذهب إلى [emailjs.com](https://www.emailjs.com)
2. أنشئ حساب مجاني
3. احصل على Service ID و Template ID و Public Key
4. أضفها إلى ملف `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

للمزيد من التفاصيل، اقرأ `EMAILJS_SETUP.md`

## 🌐 النشر على Vercel

1. أنشئ حساب على [vercel.com](https://vercel.com)
2. ربط المشروع
3. أضف متغيرات البيئة
4. انشر الموقع

للمزيد من التفاصيل، اقرأ `DEPLOYMENT_GUIDE.md`

## 📁 هيكل المشروع

```
client/
├── src/
│   ├── components/     # مكونات React
│   ├── contexts/       # إدارة الحالة
│   ├── pages/          # الصفحات
│   ├── App.tsx         # التطبيق الرئيسي
│   └── index.css       # الأنماط
├── public/             # الملفات الثابتة
└── index.html          # HTML الرئيسي
```

## 🎨 التصميم

- **الألوان الأساسية:** أزرق (#0052CC) وبرتقالي (#FF6B35)
- **الخطوط:** Poppins و Cairo
- **التخطيط:** Modern Minimalist with Bold Accents

## 📚 الملفات المهمة

- `PROJECT_SUMMARY.md` - ملخص شامل للمشروع
- `EMAILJS_SETUP.md` - دليل إعداد EmailJS
- `DEPLOYMENT_GUIDE.md` - دليل النشر على Vercel
- `README_AR.md` - ملف التعريف بالعربية

## 🔧 المكتبات المستخدمة

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- shadcn/ui
- EmailJS
- Lucide React

## 📞 الدعم

للمزيد من المعلومات والدعم:
- البريد: info@ghazara.net
- البريد التقني: tech@ghazara.net

## 📄 الترخيص

جميع الحقوق محفوظة لشركة Ghazara

---

تم إنشاء هذا المشروع بواسطة TomyBarq
