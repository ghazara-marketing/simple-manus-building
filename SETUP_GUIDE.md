# دليل الإعدادات والتحضيرات - Ghazara Landing Page

## 1. المتطلبات الأساسية

قبل البدء ببناء موقع Ghazara، تأكد من توفر المتطلبات التالية:

| المتطلب | الإصدار | الوصف |
|--------|--------|-------|
| Node.js | 18.0+ | بيئة تشغيل JavaScript |
| npm أو pnpm | 10.0+ | مدير حزم Node.js |
| Git | أي إصدار | نظام التحكم بالإصدارات |
| حساب Vercel | مجاني | منصة النشر والاستضافة |
| حساب Hostinger | مفعل | موفر النطاق |
| محرر أكواد | VS Code | لتحرير الملفات |

## 2. الإعدادات الأولية

### 2.1 إعداد بيئة التطوير المحلية

قم بتثبيت المتطلبات الأساسية على جهازك:

```bash
# تحقق من إصدار Node.js
node --version

# تحقق من إصدار npm
npm --version

# أو استخدم pnpm
pnpm --version
```

### 2.2 استنساخ المشروع

قم باستنساخ مستودع المشروع أو إنشاء مشروع جديد:

```bash
# إذا كان لديك مستودع موجود
git clone https://github.com/your-username/ghazara-landing-page.git
cd ghazara-landing-page

# أو إنشاء مشروع جديد من الصفر
npx create-vite@latest ghazara-landing-page -- --template react
cd ghazara-landing-page
```

### 2.3 تثبيت المكتبات المطلوبة

```bash
# استخدام pnpm (الموصى به)
pnpm install

# أو استخدام npm
npm install
```

## 3. هيكل المشروع

يجب أن يكون هيكل المشروع كما يلي:

```
ghazara-landing-page/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 4. التكوينات المطلوبة

### 4.1 تكوين Tailwind CSS

تأكد من أن ملف `tailwind.config.js` يحتوي على:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052CC",
        secondary: "#FF6B35",
        dark: "#1a1a1a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
```

### 4.2 تكوين Vite

تأكد من أن ملف `vite.config.ts` يحتوي على:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
})
```

### 4.3 تكوين TypeScript

تأكد من أن ملف `tsconfig.json` يحتوي على:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 5. الخطوات التحضيرية للتصميم

### 5.1 إعدادات الألوان

الألوان الأساسية للمشروع:

| الاستخدام | اللون | الكود |
|----------|-------|-------|
| اللون الأساسي (الأزرار) | أزرق عميق | #0052CC |
| اللون الثانوي (التأكيد) | برتقالي دافئ | #FF6B35 |
| الخلفية الرئيسية | أبيض نقي | #FFFFFF |
| النصوص الرئيسية | رمادي عميق | #1a1a1a |
| النصوص الثانوية | رمادي فاتح | #666666 |
| الحدود والفواصل | رمادي فاتح جداً | #e5e5e5 |

### 5.2 إعدادات الطباعة

استخدم الخطوط التالية:

- **Poppins**: للعناوين الرئيسية (وزن 600-700)
- **Inter**: للنصوص والمحتوى (وزن 400-500)

أضف الخطوط في ملف `client/index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
```

### 5.3 الأصول البصرية (Assets)

الصور والعناصر البصرية المطلوبة:

| الصورة | الحجم | الاستخدام |
|--------|-------|----------|
| Hero Background | 1920x1080 | خلفية قسم البطل |
| Services Background | 1920x1080 | خلفية قسم الخدمات |
| Testimonials Background | 1920x1080 | خلفية قسم الشهادات |
| CTA Background | 1920x1080 | خلفية قسم الدعوة للعمل |
| Logo | 200x50 | شعار الشركة |
| Favicon | 32x32 | أيقونة الموقع |

## 6. خطوات البناء الأساسية

### 6.1 إنشاء المكونات الرئيسية

ستحتاج إلى إنشاء المكونات التالية:

1. **Header Component**: شريط التنقل العلوي
2. **Hero Component**: قسم البطل مع العنوان الرئيسي
3. **Services Component**: عرض خدمات الشركة
4. **Testimonials Component**: شهادات العملاء
5. **CTA Component**: دعوة للعمل (Contact Form)
6. **Footer Component**: التذييل مع المعلومات والروابط

### 6.2 إعدادات الحالة والسياق

استخدم React Context للحالة العامة:

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = React.useState(false)
  
  const toggleTheme = () => setIsDark(!isDark)
  
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
```

## 7. خطوات التطوير المحلي

### 7.1 تشغيل خادم التطوير

```bash
# استخدام pnpm
pnpm dev

# أو استخدام npm
npm run dev
```

سيتم تشغيل الموقع على `http://localhost:3000`

### 7.2 بناء المشروع للإنتاج

```bash
# استخدام pnpm
pnpm build

# أو استخدام npm
npm run build
```

### 7.3 معاينة الإنتاج محلياً

```bash
# استخدام pnpm
pnpm preview

# أو استخدام npm
npm run preview
```

## 8. قائمة التحقق قبل النشر

تأكد من إكمال جميع العناصر التالية قبل نشر الموقع:

- [ ] جميع المكونات تم بناؤها واختبارها
- [ ] الموقع يعمل بشكل صحيح على جميع الأجهزة (Mobile, Tablet, Desktop)
- [ ] جميع الصور محسّنة وتحميلها سريع
- [ ] النصوص والمحتوى صحيح وخالي من الأخطاء
- [ ] روابط التنقل تعمل بشكل صحيح
- [ ] نموذج الاتصال يعمل بشكل صحيح
- [ ] الموقع يحقق معايير الأداء (Lighthouse Score > 90)
- [ ] SEO محسّن (Meta Tags, Sitemap, etc.)
- [ ] HTTPS مفعل
- [ ] robots.txt و sitemap.xml موجودة

## 9. الخطوات التالية

بعد إكمال البناء والاختبار المحلي، انتقل إلى:

1. **دليل النشر على Vercel**: اتبع الخطوات لنشر الموقع على Vercel
2. **ربط النطاق من Hostinger**: ربط ghazara.net مع Vercel
3. **تحسين الأداء**: تحسين سرعة التحميل والأداء
4. **المراقبة والصيانة**: مراقبة الموقع وإجراء التحديثات الدورية

---

**ملاحظة**: هذا الدليل يوفر الإعدادات الأساسية. قد تحتاج إلى تعديلات إضافية حسب احتياجات مشروعك المحددة.
