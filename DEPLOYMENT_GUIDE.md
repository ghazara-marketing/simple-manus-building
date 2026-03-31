# دليل النشر على Vercel وربط النطاق - Ghazara Landing Page

## المرحلة الأولى: إعداد Vercel

### الخطوة 1: إنشاء حساب Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. انقر على **Sign Up** (التسجيل)
3. اختر طريقة التسجيل:
   - GitHub
   - GitLab
   - Bitbucket
   - أو بريد إلكتروني
4. أكمل عملية التحقق

### الخطوة 2: ربط مستودع GitHub

إذا لم تكن قد أنشأت مستودع GitHub بعد:

```bash
# في مجلد المشروع
git init
git add .
git commit -m "Initial commit: Ghazara landing page"
git branch -M main
git remote add origin https://github.com/your-username/ghazara-landing-page.git
git push -u origin main
```

---

## المرحلة الثانية: نشر المشروع على Vercel

### الخطوة 3: استيراد المشروع إلى Vercel

1. سجل الدخول إلى حسابك على Vercel
2. انقر على **Add New** → **Project**
3. اختر **Import Git Repository**
4. ابحث عن مستودع `ghazara-landing-page`
5. انقر على **Import**

### الخطوة 4: تكوين إعدادات المشروع

في صفحة التكوين، تأكد من الإعدادات التالية:

| الإعداد | القيمة |
|--------|--------|
| **Framework Preset** | Vite |
| **Build Command** | `pnpm build` أو `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `pnpm install` أو `npm install` |
| **Environment Variables** | (اترك فارغاً للآن) |

### الخطوة 5: نشر المشروع

1. انقر على **Deploy**
2. انتظر انتهاء عملية البناء والنشر
3. ستحصل على رابط مؤقت مثل: `https://ghazara-landing-page.vercel.app`

---

## المرحلة الثالثة: ربط النطاق المخصص

### الخطوة 6: إضافة النطاق في Vercel

1. في لوحة تحكم Vercel، انقر على المشروع
2. اذهب إلى **Settings** → **Domains**
3. انقر على **Add Domain**
4. أدخل اسم النطاق: `ghazara.net`
5. انقر على **Add**

### الخطوة 7: الحصول على سجلات DNS

بعد إضافة النطاق، ستظهر رسالة تطلب تحديث سجلات DNS. ستحتاج إلى:

| نوع السجل | الاسم | القيمة |
|----------|-------|--------|
| **CNAME** | `www` | `cname.vercel-dns.com` |
| **A** | `@` | `76.76.19.89` |

أو يمكنك استخدام:

| نوع السجل | الاسم | القيمة |
|----------|-------|--------|
| **CNAME** | `@` | `cname.vercel-dns.com` |

---

## المرحلة الرابعة: تحديث DNS على Hostinger

### الخطوة 8: الدخول إلى لوحة تحكم Hostinger

1. اذهب إلى [hostinger.com](https://hostinger.com)
2. سجل الدخول إلى حسابك
3. اذهب إلى **My Products** أو **My Domains**
4. ابحث عن `ghazara.net`
5. انقر على **Manage**

### الخطوة 9: تحديث سجلات DNS

#### الطريقة الأولى: استخدام Nameservers (الموصى به)

1. في لوحة تحكم Hostinger، اذهب إلى **DNS/Nameservers**
2. اختر **Custom Nameservers**
3. أدخل Nameservers الخاصة بـ Vercel:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`
4. احفظ التغييرات
5. انتظر 24-48 ساعة لانتشار التغييرات

#### الطريقة الثانية: تحديث سجلات A و CNAME

إذا فضلت عدم تغيير Nameservers:

1. في لوحة تحكم Hostinger، اذهب إلى **DNS Records**
2. ابحث عن السجلات الموجودة وحذفها أو عدّلها
3. أضف السجلات التالية:

**للنطاق الرئيسي (@):**
```
Type: A
Name: @
Value: 76.76.19.89
TTL: 3600
```

**للنطاق الفرعي (www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

4. احفظ التغييرات

### الخطوة 10: التحقق من الاتصال

بعد تحديث سجلات DNS، تحقق من الاتصال:

1. في Vercel، اذهب إلى **Settings** → **Domains**
2. ابحث عن `ghazara.net`
3. تحقق من الحالة - يجب أن تظهر **Valid Configuration**
4. قد يستغرق الأمر 24-48 ساعة للانتشار الكامل

---

## المرحلة الخامسة: التحقق والاختبار

### الخطوة 11: اختبار النطاق

```bash
# اختبر الاتصال باستخدام الأوامر التالية

# فحص سجلات DNS
nslookup ghazara.net

# أو استخدم dig
dig ghazara.net

# أو استخدم host
host ghazara.net
```

### الخطوة 12: اختبار الموقع

1. افتح المتصفح وادخل `https://ghazara.net`
2. تحقق من أن الموقع يحمل بشكل صحيح
3. اختبر جميع الروابط والمكونات
4. تحقق من شهادة SSL (يجب أن تكون آمنة)

---

## المرحلة السادسة: إعدادات متقدمة

### الخطوة 13: تفعيل HTTPS

Vercel يفعّل HTTPS تلقائياً. للتحقق:

1. في Vercel، اذهب إلى **Settings** → **Domains**
2. ابحث عن `ghazara.net`
3. تحقق من أن **SSL/TLS** مفعّل

### الخطوة 14: إعادة التوجيه (Redirect)

إذا أردت إعادة توجيه `www.ghazara.net` إلى `ghazara.net`:

1. في Vercel، اذهب إلى **Settings** → **Domains**
2. أضف `www.ghazara.net` كنطاق إضافي
3. اختر **Redirect to ghazara.net**

### الخطوة 15: متغيرات البيئة (إن وجدت)

إذا كان لديك متغيرات بيئة:

1. في Vercel، اذهب إلى **Settings** → **Environment Variables**
2. أضف المتغيرات المطلوبة
3. اختر البيئات المناسبة (Production, Preview, Development)

---

## المرحلة السابعة: المراقبة والصيانة

### الخطوة 16: إعداد التنبيهات

1. في Vercel، اذهب إلى **Settings** → **Notifications**
2. فعّل التنبيهات للأحداث المهمة:
   - فشل البناء
   - نشر جديد
   - أخطاء الأداء

### الخطوة 17: مراقبة الأداء

1. في Vercel، اذهب إلى **Analytics**
2. راقب:
   - سرعة التحميل
   - معدل الأخطاء
   - استخدام النطاق الترددي

### الخطوة 18: التحديثات المستقبلية

لتحديث الموقع في المستقبل:

```bash
# قم بالتغييرات المطلوبة محلياً
git add .
git commit -m "Update: [وصف التغييرات]"
git push origin main
```

Vercel سيعيد بناء ونشر الموقع تلقائياً عند كل push إلى الفرع الرئيسي.

---

## استكشاف الأخطاء

### المشكلة: النطاق لا يعمل بعد 24 ساعة

**الحل:**
1. تحقق من سجلات DNS باستخدام `nslookup`
2. تأكد من أن السجلات صحيحة في Hostinger
3. امسح ذاكرة التخزين المؤقت للمتصفح
4. جرب متصفح مختلف أو جهاز مختلف

### المشكلة: شهادة SSL غير صحيحة

**الحل:**
1. انتظر 24 ساعة لانتشار DNS
2. أعد تحميل الموقع في Vercel
3. اتصل بدعم Vercel إذا استمرت المشكلة

### المشكلة: الموقع بطيء جداً

**الحل:**
1. تحقق من حجم الملفات والصور
2. استخدم CDN للأصول الثابتة
3. فعّل الضغط والتخزين المؤقت
4. راجع تقرير Lighthouse في Vercel

---

## قائمة التحقق النهائية

- [ ] تم إنشاء حساب Vercel
- [ ] تم ربط مستودع GitHub
- [ ] تم نشر المشروع على Vercel
- [ ] تم إضافة النطاق `ghazara.net` في Vercel
- [ ] تم تحديث سجلات DNS في Hostinger
- [ ] تم التحقق من الاتصال
- [ ] الموقع يعمل على `https://ghazara.net`
- [ ] شهادة SSL صحيحة
- [ ] جميع الروابط تعمل بشكل صحيح
- [ ] الموقع متجاوب على جميع الأجهزة

---

## روابط مفيدة

- [توثيق Vercel](https://vercel.com/docs)
- [توثيق Hostinger DNS](https://support.hostinger.com/en/articles/4623177-how-to-change-nameservers)
- [فحص DNS](https://mxtoolbox.com/dnscheck.aspx)
- [اختبار الأداء](https://pagespeed.web.dev/)

---

**ملاحظة**: قد تستغرق تحديثات DNS من 24 إلى 48 ساعة للانتشار الكامل. كن صبوراً وتحقق من التقدم بشكل دوري.
