# ЮЖЛИТОГРАФМЕТАЛЛ — сайт-визитка производителя жестяной упаковки

## О проекте

Промо-сайт (лендинг + пара страниц) для производителя металлической/жестяной
упаковки для консервации. Аудитория — B2B, украиноязычная. Цель — рассказать о
компании и продукции, дать связаться (заявка/телефон/почта).

## Технологии

- **React 18** + **Vite** (SWC-плагин), SPA
- **React Router v6** (`react-router-dom`) — 4 роута: `/`, `/products`,
  `/contacts`, `*` (404)
- Стилизация: **styled-components** (основной подход).
- Формы: `formik` + `yup`
- Уведомления: `react-toastify`
- Адаптивность JS-логики (переключение десктоп/мобайл меню): `react-responsive`
- Иконки: один SVG-спрайт (`src/assets/icons.svg`), инлайнится в DOM компонентом
  `IconSprite` (монтируется в `main.jsx`), везде используется как
  `<use xlinkHref="#icon-id" />` — **не** через URL-ссылку на файл (иначе не
  наследуется CSS fill/stroke от родителя).
  - иконки через react-icons
- Бэкенд для формы обратной связи: отдельный `server.js` (Express + Nodemailer),
  минимальный, живёт в том же репозитории.
- Деплой: GitHub Pages, `base: '/ulm'` в vite.config.js, `basename="ulm"` в
  Router.
- TypeScript пока не используется, планируется поэтапный переход (`allowJs`,
  файлы переименовываются по одному, начиная с `ui/*`).

## Структура (актуальная, после ревизии)

```
src/
  assets/            # картинки, иконки (icons.svg), styles/index.css (глобальные стили + CSS-переменные темы)
  components/
    ui/              # переиспользуемые "кирпичики": Container, Logo, Title
    common/          # Header (+ NavMenu, MobileMenu, BurgerMenuButton), Footer, ContactUsForm
    layout/          # SharedLayout — общий каркас страницы (Header + Outlet + Footer)
    FeaturesModal/   # модалка карточки преимущества
    IconSprite/       # инлайнер SVG-спрайта (см. выше)
  features/          # блоки-секции по доменам страниц
    home/             # Hero, AboutUsSection, FeaturesSection (для HomePage)
    products/         # ProductsContent (для ProductsPage)
    contacts/         # ContactContent (для ContactsPage)
  pages/              # ТОЛЬКО композиция роутов из features + Container, без своих стилей
    HomePage/ ProductsPage/ ContactsPage/ ErrorPage/
  constants/          # статичные данные (productsData, featuresData)
  App.jsx / main.jsx
```

## Страницы

- **HomePage** (`/`) — Hero, AboutUsSection (#aboutUs), FeaturesSection
  (#features, с модалкой карточек)
- **ProductsPage** (`/products`) — каталог продукции (ProductsContent +
  productsData)
- **ContactsPage** (`/contacts`) — контакты, форма обратной связи (ContactUsForm
  → server.js → email), карта
- **ErrorPage** (`*`) — 404

## Стили и дизайн-система

:root { /_ ========================================== БАЗОВЫЕ НАСТРОЙКИ
========================================== _/

/_ Border Radius _/ --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px;
--radius-round: 50%;

/_ Transitions _/ --transition-base: all 250ms cubic-bezier(0.4, 0, 0.2, 1); }

Будет темная и светлая тема. пока для светлой такие цвета заданы:
[data-theme='light'] { /_ бренд / акценты _/ --primary-bg-dark-color: #032541;
/_ фон Header/Footer/Hero _/ --accent-color: #045174; --light-accent: #1274a2;

/_ текст _/ --primary-text-color-light: #ffffff; --text-color: #111111;
--text-color-muted: rgba(245, 243, 239, 0.72);

/_ фон страницы _/ --page-bg-color: hsl(0, 12%, 97%); --surface-bg-color:
#f6f4f1; }

## Известный техдолг / roadmap

1. Разобраться с проблемой отображения навигации для мобильного приложения.
2. Упорядочить имеющиеся цвета стилей, подобрать подходящие им названия и
   добавить `[data-theme='dark']`.
3. Обновить зависимости (React Router, Vite и т.д.) по одной, без резких скачков
   мажорных версий.
4. Постепенный переход на TypeScript (`.jsx → .tsx`, начиная с `ui/*`).
5. Перенести стили из `pages/*` в соответствующие `features/*` — в `pages/*`
   должны остаться только JSX-роуты.
