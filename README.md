# عيادة ماجستيك لطب وجراحة الأسنان

موقع ويب احترافي لعيادة ماجستيك لطب وجراحة الأسنان، مبني باستخدام React.js و Tailwind CSS مع دعم كامل للغة العربية.

## معلومات العيادة

- **اسم العيادة**: عيادة ماجستيك لطب وجراحة الأسنان
- **الطبيب المسؤول**: الدكتور محمد عبدالوهاب الجوبي
- **التخصص**: ماجستير جراحة الفم والوجه والفكين
- **الفريق الطبي**: يضم طبيبة أسنان مؤهلة
- **أرقام التواصل**: 774484736 / 101056957
- **البريد الإلكتروني**: majesticdentalclinic1@gmail.com
- **العنوان**: صنعاء، جدر، سوق جدر، خلف سوبر الشارقة

## التقنيات المستخدمة

- **React.js** - مكتبة JavaScript لبناء واجهات المستخدم
- **Tailwind CSS** - إطار عمل CSS للتصميم السريع
- **shadcn/ui** - مكونات UI جاهزة ومتقدمة
- **Lucide React** - أيقونات حديثة وجميلة
- **Vite** - أداة بناء سريعة للتطوير
- **pnpm** - مدير الحزم السريع

## متطلبات التشغيل

- Node.js (الإصدار 18 أو أحدث)
- pnpm أو npm أو yarn
- VS Code (مستحسن)

## تعليمات التشغيل

### 1. تشغيل الموقع محلياً

```bash
# الانتقال إلى مجلد المشروع
cd majestic-dental-clinic

# تثبيت التبعيات
pnpm install

# تشغيل الخادم المحلي
pnpm run dev
```

الموقع سيكون متاحاً على: `http://localhost:5173`

### 2. بناء الموقع للإنتاج

```bash
# بناء الموقع
pnpm run build

# معاينة البناء
pnpm run preview
```

## تعديل المحتوى

### تعديل المعلومات الأساسية

لتعديل معلومات العيادة، افتح الملف `src/App.jsx` وابحث عن الأقسام التالية:

#### معلومات الاتصال
```javascript
// في قسم Contact Section
<p className="mb-2">774484736</p>
<p>101056957</p>
<p className="break-all">majesticdentalclinic1@gmail.com</p>
```

#### معلومات الطبيب
```javascript
// في قسم About Section
<h4 className="text-xl font-semibold text-blue-600 mb-3">الدكتور محمد عبدالوهاب الجوبي</h4>
<p className="text-gray-700">
  ماجستير جراحة الفم والوجه والفكين، يتمتع بخبرة واسعة في مجال طب الأسنان والجراحة التخصصية
</p>
```

#### العنوان
```javascript
// في قسم Contact Section
<p>صنعاء، جدر، سوق جدر</p>
<p>خلف سوبر الشارقة</p>
```

### تعديل الخدمات

لإضافة أو تعديل الخدمات، ابحث عن متغير `services` في `src/App.jsx`:

```javascript
const services = [
  {
    title: "جراحة الفم والوجه والفكين",
    description: "تخصص متقدم في جراحة الفم والوجه والفكين مع أحدث التقنيات",
    icon: "🦷"
  },
  // أضف خدمات جديدة هنا
];
```

### تغيير الألوان والتصميم

الألوان الأساسية محددة في `src/App.css`. يمكنك تعديل المتغيرات التالية:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* المزيد من المتغيرات... */
}
```

## رفع المشروع على GitHub

### 1. إنشاء مستودع جديد

1. اذهب إلى [GitHub.com](https://github.com)
2. انقر على "New repository"
3. اختر اسماً للمستودع (مثل: `majestic-dental-clinic`)
4. اجعل المستودع عاماً أو خاصاً حسب رغبتك
5. انقر على "Create repository"

### 2. رفع الكود

```bash
# تهيئة Git (إذا لم يكن مهيئاً)
git init

# إضافة جميع الملفات
git add .

# إنشاء commit أول
git commit -m "Initial commit: Majestic Dental Clinic website"

# ربط المستودع المحلي بـ GitHub
git remote add origin https://github.com/YOUR_USERNAME/majestic-dental-clinic.git

# رفع الكود
git push -u origin main
```

### 3. نشر الموقع (اختياري)

يمكنك نشر الموقع مجاناً باستخدام:

- **Vercel**: ربط مباشر مع GitHub
- **Netlify**: سحب وإفلات أو ربط Git
- **GitHub Pages**: نشر مباشر من المستودع

## هيكل المشروع

```
majestic-dental-clinic/
├── public/                 # الملفات العامة
├── src/
│   ├── assets/            # الصور والملفات الثابتة
│   │   ├── clinic-interior.jpg
│   │   ├── modern-clinic.jpg
│   │   └── clinic-design.jpg
│   ├── components/
│   │   └── ui/            # مكونات shadcn/ui
│   ├── App.jsx            # المكون الرئيسي
│   ├── App.css            # الأنماط المخصصة
│   ├── index.css          # الأنماط العامة
│   └── main.jsx           # نقطة الدخول
├── index.html             # ملف HTML الرئيسي
├── package.json           # تبعيات المشروع
├── tailwind.config.js     # إعدادات Tailwind
├── vite.config.js         # إعدادات Vite
└── README.md              # هذا الملف
```

## الدعم والمساعدة

إذا واجهت أي مشاكل:

1. تأكد من تثبيت Node.js بشكل صحيح
2. تأكد من تشغيل `pnpm install` قبل `pnpm run dev`
3. تحقق من أن المنفذ 5173 غير مستخدم
4. راجع رسائل الخطأ في وحدة التحكم

## الترخيص

هذا المشروع مخصص لعيادة ماجستيك لطب وجراحة الأسنان.

---

**تم إنشاء هذا الموقع بواسطة Manus AI**

