# دليل النشر والاستضافة

## رفع المشروع على GitHub

### الخطوة 1: تحضير المشروع

```bash
# الانتقال إلى مجلد المشروع
cd majestic-dental-clinic

# تهيئة Git (إذا لم يكن مهيئاً)
git init

# إضافة جميع الملفات
git add .

# إنشاء commit أول
git commit -m "🦷 Initial commit: Majestic Dental Clinic website"
```

### الخطوة 2: إنشاء مستودع على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. سجل الدخول إلى حسابك
3. انقر على زر "+" في الأعلى واختر "New repository"
4. املأ المعلومات:
   - **Repository name**: `majestic-dental-clinic`
   - **Description**: `موقع عيادة ماجستيك لطب وجراحة الأسنان`
   - اختر **Public** أو **Private** حسب رغبتك
   - **لا تضع** علامة على "Add a README file" (لأن لديك README بالفعل)
5. انقر على "Create repository"

### الخطوة 3: ربط المشروع بـ GitHub

```bash
# ربط المستودع المحلي بـ GitHub (استبدل YOUR_USERNAME باسم المستخدم الخاص بك)
git remote add origin https://github.com/YOUR_USERNAME/majestic-dental-clinic.git

# رفع الكود
git branch -M main
git push -u origin main
```

## نشر الموقع على الإنترنت

### الخيار 1: Vercel (مستحسن)

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل الدخول باستخدام حساب GitHub
3. انقر على "New Project"
4. اختر مستودع `majestic-dental-clinic`
5. اتبع الإعدادات الافتراضية
6. انقر على "Deploy"

**المميزات:**
- نشر تلقائي عند كل تحديث
- SSL مجاني
- CDN عالمي
- دومين مجاني

### الخيار 2: Netlify

1. اذهب إلى [netlify.com](https://netlify.com)
2. سجل الدخول باستخدام حساب GitHub
3. انقر على "New site from Git"
4. اختر GitHub واختر المستودع
5. إعدادات البناء:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
6. انقر على "Deploy site"

### الخيار 3: GitHub Pages

1. في مستودع GitHub، اذهب إلى "Settings"
2. انتقل إلى قسم "Pages"
3. في "Source"، اختر "GitHub Actions"
4. أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## تحديث الموقع

بعد إجراء تعديلات على الكود:

```bash
# إضافة التغييرات
git add .

# إنشاء commit مع وصف التغيير
git commit -m "تحديث معلومات العيادة"

# رفع التحديثات
git push origin main
```

## إعداد دومين مخصص (اختياري)

### على Vercel:
1. اذهب إلى لوحة تحكم المشروع
2. انقر على "Settings" ثم "Domains"
3. أضف الدومين الخاص بك
4. اتبع التعليمات لتحديث DNS

### على Netlify:
1. اذهب إلى "Site settings" ثم "Domain management"
2. انقر على "Add custom domain"
3. أدخل الدومين واتبع التعليمات

## نصائح مهمة

### الأمان
- لا تضع معلومات حساسة في الكود
- استخدم متغيرات البيئة للمعلومات السرية
- فعّل المصادقة الثنائية على GitHub

### الأداء
- ضغط الصور قبل إضافتها
- استخدم تنسيقات حديثة مثل WebP
- فعّل التخزين المؤقت

### SEO
- أضف meta tags في `index.html`
- استخدم عناوين وصفية
- أضف sitemap.xml

## استكشاف الأخطاء

### مشاكل شائعة:

**خطأ في البناء:**
```bash
# تنظيف cache
pnpm store prune
rm -rf node_modules
pnpm install
```

**مشاكل Git:**
```bash
# إعادة تعيين remote
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/majestic-dental-clinic.git
```

**مشاكل النشر:**
- تأكد من أن `dist` folder موجود بعد البناء
- تحقق من إعدادات البناء في منصة الاستضافة
- راجع logs الخاصة بالنشر

## الدعم

إذا واجهت مشاكل:
1. راجع documentation الخاص بمنصة الاستضافة
2. تحقق من GitHub Issues للمشاكل المشابهة
3. استخدم community forums للحصول على المساعدة

