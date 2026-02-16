# 🛍️ مدونة التسوق الذكي السعودية | Smart Shopping SA

موقع تسوق ذكي احترافي باللغة العربية بتصميم مستوحى من Yahoo Shopping، مخصص للسوق السعودي.

## ✨ المميزات

- 🌐 **دعم كامل للغة العربية** مع RTL
- 💜 **تصميم Yahoo Shopping** الحيوي والجذاب
- 📱 **متجاوب تماماً** على جميع الأجهزة
- ⚡ **أداء عالي** مع Next.js 14 App Router
- 🔍 **SEO محسّن** مع Metadata API و JSON-LD
- 📊 **GraphQL + Prisma** لإدارة البيانات
- 🎨 **Tailwind CSS + shadcn/ui** للتصميم
- ✨ **Framer Motion** للحركات السلسة
- 🎪 **Swiper.js** للعروض المتحركة

## 🚀 البدء السريع

### المتطلبات
- Node.js 18+ 
- npm أو yarn

### التثبيت

```bash
# 1. Install dependencies
npm install

# 2. Setup Prisma database
npx prisma generate
npx prisma db push

# 3. Seed demo data
npm run prisma:seed

# 4. Start development server
npm run dev
```

الموقع سيعمل على: `http://localhost:3000`

## 📁 هيكل المشروع

```
smart-shopping-sa/
├── prisma/              # Database schema & seed
├── public/              # Static assets & images
├── src/
│   ├── app/            # Next.js 14 App Router pages
│   ├── components/     # React components
│   ├── lib/            # Utils, GraphQL, Prisma
│   └── types/          # TypeScript types
├── package.json
└── README.md
```

## 🎨 الصفحات

- `/` - الصفحة الرئيسية
- `/blog` - قائمة المقالات
- `/blog/[slug]` - مقال فردي
- `/deals/[category]` - صفقات حسب الفئة
- `/search` - البحث
- `/about` - من نحن

## 🔧 التقنيات المستخدمة

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Database**: Prisma + SQLite
- **API**: GraphQL (Apollo)
- **Animations**: Framer Motion
- **Carousel**: Swiper.js
- **Font**: Tajawal (Google Fonts)

## 📦 البناء للإنتاج

```bash
npm run build
npm start
```

## 🎯 SEO Features

- ✅ Metadata API
- ✅ OpenGraph tags
- ✅ Twitter cards
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap
- ✅ robots.txt
- ✅ Arabic hreflang

## 🌟 المميزات القادمة

- [ ] صفحة نتائج البحث الديناميكية
- [ ] نظام التعليقات
- [ ] مقارنة المنتجات
- [ ] تنبيهات الأسعار
- [ ] Dark mode

## 📝 ملاحظات

- الموقع مُحسّن للسوق السعودي فقط
- جميع النصوص باللغة العربية
- التصميم مستوحى من Yahoo Shopping
- الروابط التابعة لـ Amazon.sa, Noon, Extra

## 📄 الترخيص

MIT License - يمكنك استخدام هذا المشروع بحرية

---

صُنع بـ ❤️ للسوق السعودي
