# إعداد EmailJS للموقع

## خطوات الإعداد:

### 1. إنشاء حساب على EmailJS
- اذهب إلى [emailjs.com](https://www.emailjs.com)
- اضغط على "Sign Up" وأنشئ حساب مجاني
- تحقق من بريدك الإلكتروني

### 2. الحصول على بيانات الاتصال

#### أ) Service ID:
1. من لوحة التحكم، اذهب إلى **Email Services**
2. اضغط على **Add Service**
3. اختر **Gmail** (أو خدمة البريد التي تستخدمها)
4. اتبع التعليمات لربط بريدك
5. ستحصل على **Service ID** (مثل: `service_xxxxxxxx`)

#### ب) Template ID:
1. اذهب إلى **Email Templates**
2. اضغط على **Create New Template**
3. استخدم هذا الـ Template:

```
Template Name: ghazara_contact_form

Subject: رسالة جديدة من {{name}}

Content:
الاسم: {{name}}
البريد الإلكتروني: {{email}}
رقم الهاتف: {{phone}}
الرسالة:
{{message}}
```

4. احفظ الـ Template وستحصل على **Template ID** (مثل: `template_xxxxxxxx`)

#### ج) Public Key:
1. اذهب إلى **Account** → **API Keys**
2. انسخ **Public Key** (مثل: `xxxxxxxxxxxxxxxxxxxxxxxx`)

### 3. إضافة بيانات الاتصال إلى الموقع

أضف المتغيرات البيئية التالية إلى ملف `.env` في جذر المشروع:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. اختبار النموذج
- افتح الموقع
- املأ نموذج الاتصال
- اضغط على "إرسال"
- يجب أن تستقبل رسالة على بريدك الإلكتروني

## ملاحظات مهمة:

- استخدم بريد Gmail لتسهيل الإعداد
- تأكد من تفعيل "Less secure app access" في إعدادات Gmail إذا لزم الأمر
- الخطة المجانية من EmailJS تسمح بـ 200 رسالة شهرياً
- لا تشارك بيانات الـ API مع أحد

## الدعم:
للمزيد من المعلومات، زر: https://www.emailjs.com/docs/
