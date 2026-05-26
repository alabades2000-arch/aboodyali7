import { categories } from './categories';
import './app.css';

interface AppState {
  selectedCategory: string | null;
}

const state: AppState = {
  selectedCategory: null,
};

export function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="app">
      <div class="header">
        <h1>الأقسام</h1>
      </div>
      <div class="grid" id="categories-grid">
        ${renderCategories()}
      </div>
    </div>
  `;

  attachEventListeners();
}

function renderCategories(): string {
  return categories
    .map(
      (item, index) => `
    <button class="card" data-index="${index}">
      <div class="icon">${item.icon}</div>
      <p class="card-text">${item.title}</p>
    </button>
  `
    )
    .join('');
}

function attachEventListeners() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const index = target.getAttribute('data-index');
      if (index !== null) {
        handleCategoryClick(parseInt(index));
      }
    });
  });
}

function handleCategoryClick(index: number) {
  const category = categories[index];
  state.selectedCategory = category.title;
  console.log('Selected category:', category.title);

  // تحديث الـ UI
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // يمكنك هنا الانتقال إلى صفحة أخرى أو عرض منتجات القسم
  showCategoryDetails(category.title);
}

function showCategoryDetails(categoryTitle: string) {
  // مثال على عرض التفاصيل
  console.log(`عرض منتجات: ${categoryTitle}`);
  // يمكنك هنا إضافة منطق للانتقال إلى صفحة المنتجات
}

// تهيئة التطبيق عند تحميل DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
