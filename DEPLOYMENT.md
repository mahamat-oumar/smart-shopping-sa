# 🚀 دليل النشر والتشغيل

## 📋 قائمة التحقق قبل النشر

- [ ] جميع البيانات التجريبية تعمل
- [ ] الصور من Unsplash/Pravatar تعمل
- [ ] SEO metadata محدّثة
- [ ] Environment variables محددة
- [ ] Database initialized

## 🌐 النشر على Vercel (مُوصى به)

### 1. تحضير المشروع

```bash
# تأكد من أن كل شيء يعمل محلياً
npm install
npm run dev
```

### 2. رفع على GitHub

```bash
git init
git add .
git commit -m "Initial commit: Smart Shopping SA"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 3. النشر على Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. اختر "Import Project"
3. اختر repository الخاص بك
4. Vercel ستكتشف Next.js تلقائياً

### 4. Environment Variables على Vercel

أضف هذه المتغيرات في Vercel Dashboard:

```
DATABASE_URL=file:./dev.db
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=مدونة التسوق الذكي السعودية
```

### 5. Build Settings

Vercel ستستخدم هذه الإعدادات تلقائياً:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 💾 قاعدة البيانات

### SQLite (للتطوير)
المشروع يستخدم SQLite افتراضياً - مثالي للتجربة والتطوير.

### PostgreSQL (للإنتاج - مُوصى به)

إذا أردت استخدام PostgreSQL للإنتاج:

1. **احصل على database من:**
   - [Supabase](https://supabase.com) (مجاني)
   - [Railway](https://railway.app)
   - [Neon](https://neon.tech)

2. **حدّث Prisma schema:**

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

3. **حدّث DATABASE_URL:**

```
DATABASE_URL="postgresql://user:password@host:5432/database"
```

4. **Push schema:**

```bash
npx prisma db push
npm run prisma:seed
```

## 🎨 تخصيص المحتوى

### تغيير الصفقات

عدّل `prisma/seed.ts`:

```typescript
const deals = [
  {
    title: 'عنوان الصفقة',
    image: 'https://...',
    discount: 60,
    salesCount: 18500,
    category: 'electronics',
    affiliateUrl: 'https://...',
  },
  // أضف المزيد...
]
```

ثم أعد تشغيل:

```bash
npm run prisma:seed
```

### تغيير الألوان

عدّل `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: '#8B5CF6', // اللون الأساسي
  // ...
}
```

### تغيير الخط

عدّل `src/app/layout.tsx`:

```typescript
import { Cairo } from 'next/font/google'

const cairo = Cairo({
  subsets: ['arabic'],
  // ...
})
```

## 🔧 أوامر مفيدة

```bash
# تطوير
npm run dev

# بناء للإنتاج
npm run build

# تشغيل الإنتاج محلياً
npm start

# Prisma
npx prisma studio      # واجهة database
npx prisma generate    # توليد Prisma Client
npx prisma db push     # تطبيق schema
npm run prisma:seed    # إضافة بيانات تجريبية

# Linting
npm run lint
```

## 🌍 Domain مخصص

### على Vercel:

1. Settings → Domains
2. أضف domain الخاص بك
3. حدّث DNS records كما هو موضح
4. حدّث `NEXT_PUBLIC_SITE_URL`

## 📊 Analytics

### إضافة Google Analytics:

1. احصل على GA4 tracking ID
2. أضف إلى `src/app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

## 🔒 أمان

- ✅ جميع API routes محمية
- ✅ Environment variables آمنة
- ✅ لا توجد keys حساسة في الكود
- ✅ CORS محدودة

## 📈 الأداء

المشروع مُحسّن:
- ✅ Image optimization مع next/image
- ✅ Font optimization مع next/font
- ✅ Code splitting تلقائي
- ✅ Static generation للصفحات
- ✅ ISR للمحتوى الديناميكي

## 🐛 حل المشاكل

### المشكلة: الصور لا تظهر
- تأكد من أن الروابط صحيحة
- أضف domains في `next.config.js`:

```js
images: {
  domains: ['images.unsplash.com', 'i.pravatar.cc'],
}
```

### المشكلة: Database errors
- تأكد من `prisma generate`
- تأكد من `prisma db push`
- تأكد من `prisma seed`

### المشكلة: Build fails
- تأكد من جميع dependencies مثبتة
- تأكد من TypeScript errors محلولة
- راجع Vercel build logs

## 📞 الدعم

للمشاكل:
1. راجع [Next.js Docs](https://nextjs.org/docs)
2. راجع [Prisma Docs](https://www.prisma.io/docs)
3. ابحث في Issues على GitHub

---

بالتوفيق! 🎉
