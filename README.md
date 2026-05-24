# Aboodyali7 App

تطبيق موبايل بني بـ **Vite** و **Capacitor** و **TypeScript**

## المميزات
- ⚡ Vite للتطوير السريع
- 📱 Capacitor لنشر التطبيق على أندرويد و iOS
- 🧑‍💻 TypeScript للأمان والموثوقية
- 🎨 تصميم حديث وجميل

## المتطلبات
- Node.js 16+ 
- npm أو yarn
- Android Studio (لبناء APK)

## التثبيت

```bash
# تثبيت الاعتماديات
npm install

# أو باستخدام yarn
yarn install
```

## التطوير المحلي

```bash
# تشغيل خادم Vite
npm run dev

# سيظهر التطبيق على: http://localhost:5173
```

## البناء للإنتاج

```bash
# بناء التطبيق
npm run build

# معاينة البناء
npm run preview
```

## إعداد أندرويد

### 1. إضافة منصة أندرويد
```bash
npm run cap:add
```

### 2. مزامنة الملفات
```bash
npm run cap:sync
```

### 3. فتح في Android Studio
```bash
npm run cap:open
```

### 4. بناء APK
- في Android Studio، اذهب إلى: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
- سيتم حفظ APK في: `android/app/build/outputs/apk/debug/app-debug.apk`

### 5. تشغيل على جهاز
```bash
npm run cap:run
```

## هيكل المشروع

```
aboodyali7/
├── src/
│   ├── main.ts       # نقطة الدخول الرئيسية
│   └── style.css     # الأنماط العامة
├── android/          # مشروع أندرويد (ينشأ بعد cap add)
├── dist/             # بناء الإنتاج
├── index.html        # ملف HTML الرئيسي
├── vite.config.ts    # إعدادات Vite
├── capacitor.config.ts # إعدادات Capacitor
├── tsconfig.json     # إعدادات TypeScript
├── package.json      # الاعتماديات والسكريبتات
└── README.md         # هذا الملف
```

## البيئات

انسخ `.env.example` إلى `.env` وعدّل القيم:

```bash
PORT=5173
BASE_PATH=/
VITE_APP_TITLE=Aboodyali7 App
```

## الأوامر المتاحة

| الأمر | الوصف |
|-------|-------|
| `npm run dev` | تشغيل خادم التطوير |
| `npm run build` | بناء للإنتاج |
| `npm run preview` | معاينة البناء |
| `npm run cap:add` | إضافة منصة أندرويد |
| `npm run cap:sync` | مزامنة مع Capacitor |
| `npm run cap:open` | فتح في Android Studio |
| `npm run cap:run` | تشغيل على جهاز |
| `npm run android:build` | مزامنة وفتح أندرويد ستوديو |

## خطوات تشغيل الكامل

### الخطوة 1: تشغيل Vite محليًا
```bash
npm install
npm run dev
```
أفتح المتصفح على `http://localhost:5173`

### الخطوة 2: بناء للإنتاج
```bash
npm run build
```

### الخطوة 3: إعداد Capacitor
```bash
npm run cap:add
npm run cap:sync
```

### الخطوة 4: فتح في Android Studio
```bash
npm run cap:open
```
اتركه يقوم بـ Gradle Sync كاملًا.

### الخطوة 5: بناء APK
1. في Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
2. انتظر حتى ينتهي البناء
3. ستجد الـ APK في: `android/app/build/outputs/apk/debug/app-debug.apk`

### الخطوة 6: تثبيت على جهاز
```bash
# إذا كان الجهاز متصلاً
npm run cap:run

# أو انسخ الـ APK يدويًا وثبته
```

## الدعم والمساهمة

إذا واجهت مشاكل، تأكد من:
1. تثبيت جميع الاعتماديات: `npm install`
2. وجود `.env` مع المتغيرات المطلوبة
3. تحديث Android Studio والـ SDK
4. تفعيل "USB Debugging" على الجهاز

---

**تم الإنشاء بواسطة**: alabades2000-arch  
**التاريخ**: 2026-05-24
