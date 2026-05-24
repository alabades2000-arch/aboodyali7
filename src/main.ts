import { Capacitor } from '@capacitor/core';

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', () => {
  console.log('تطبيق Aboodyali7 يعمل');
  console.log('Platform:', Capacitor.getPlatform());
});

// إضافة عنصر بسيط للاختبار
const app = document.getElementById('app');
if (app) {
  app.innerHTML = `
    <div style="padding: 20px; font-family: Arial; text-align: center;">
      <h1>مرحبا بك في Aboodyali7</h1>
      <p>تطبيق Vite + Capacitor</p>
      <p id="platform"></p>
    </div>
  `;
  const platformEl = document.getElementById('platform');
  if (platformEl) {
    platformEl.textContent = 'المنصة: ' + Capacitor.getPlatform();
  }
}
