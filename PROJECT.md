# ЮЖЛИТОГРАФМЕТАЛЛ (ULM) — сайт-визитка производителя жестяной упаковки

## О проекте

Промо-сайт (лендинг + пара страниц) для производителя металлической/жестяной
упаковки для консервации. Аудитория — B2B, украиноязычная. Цель — рассказать о
компании и продукции, дать связаться (заявка/телефон/почта).

Живой сайт: https://maershaa.github.io/ulm/ (GitHub Pages, автодеплой из
`main`).

## Технологии

- **React 19.2** + **Vite 7.3** (`@vitejs/plugin-react-swc`)
- **React Router v6.30**(`react-router-dom`) — 4 роута: `/`, `/products`,
  `/contacts`, `*` (404). Апгрейд до react-router v7/v8 сознательно отложен (там
  смена API, `RouterProvider`) — делать вместе с переходом на TS.
- Стилизация: **styled-components v6** — единственный CSS-in-JS движок в
  проекте.
- Формы: `formik` + `yup`
- Уведомления: `react-toastify`
- Адаптивность JS-логики (десктоп/мобайл меню): `react-responsive`
- Шрифты: `Manrope` (запасной вариант для лого, если вместо картинки — текст) +
  `Lora` (основной текстовый шрифт, подключены оба через Google Fonts в
  `index.html`).
- Иконки: смешанный подход —
  - `react-icons` (например, `Hero` использует `FiCompass`/`FiPlusCircle`);
  - собственный SVG-спрайт `src/assets/icons.svg`, инлайнится в DOM компонентом
    `IconSprite` (монтируется в `main.jsx`), используется как
    `<use xlinkHref="#icon-id" />` — **не** через URL на файл (иначе не
    наследуется CSS `fill`/`stroke` от родителя — так было, чинили).
  - технически можно унифицировать до одного подхода, не срочно.
- Бэкенд для формы обратной связи: отдельный `server.js` (Express + Nodemailer),
  живёт в том же репозитории, пароль — `PASSWORD` в `.env` (в `.gitignore`, не
  утекал в git). ⚠️ **Сейчас сервер нигде не задеплоен отдельно от фронтенда**,
  а `ContactUsForm` стучится на `http://localhost:5001/api/sendMail` хардкодом —
  на проде (GitHub Pages, чистая статика) этот адрес недостижим, форма обратной
  связи сейчас не работает. См. "Известные проблемы" ниже.
- Деплой: GitHub Pages, автоматически через GitHub Actions
  (`.github/workflows/deploy.yml`) при каждом пуше в `main`: `checkout` →
  `setup-node` → `npm ci` → `npm run build` → копия `index.html` в `404.html`
  (нужно для прямых ссылок/refresh на роутах SPA на статическом хостинге) →
  публикация `dist/` в ветку `gh-pages` через
  `JamesIves/github-pages-deploy-action`. `base: '/ulm'` в `vite.config.js`,
  `basename="ulm"` в `<BrowserRouter>`.
- TypeScript пока не используется, план — поэтапный переход (`allowJs`, файлы
  переименовываются по одному, начиная с `ui/*`).

## Структура

```
src/
  assets/            # картинки, иконки (icons.svg), styles/index.css (глобальные стили + CSS-переменные темы)
  constants/
    breakpoints.js    # единая точка правды по брейкпоинтам (см. ниже)
    productsData / featuresData
  context/
    theme/            # ThemeContext + ThemeProvider (светлая/тёмная тема, localStorage + prefers-color-scheme)
  components/
    ui/              # Container, Logo, Title
    common/          # Header (+ NavMenu, MobileMenu, BurgerMenuButton), Footer, ContactUsForm
    layout/          # SharedLayout — общий каркас страницы (Header + Outlet + Footer)
    FeaturesModal/
    IconSprite/       # инлайнер SVG-спрайта
  features/
    home/             # Hero, AboutUsSection, FeaturesSection
    products/         # ProductsContent
    contacts/         # ContactContent
  pages/              # композиция роутов из features + Container, без своих стилей
    HomePage/ ProductsPage/ ContactsPage/ ErrorPage/
  App.jsx / main.jsx
```

## Страницы

- **HomePage** (`/`) — Hero, AboutUsSection (#aboutUs), FeaturesSection
  (#features, с модалкой карточек)
- **ProductsPage** (`/products`) — каталог продукции
- **ContactsPage** (`/contacts`) — контакты, форма обратной связи, карта
- **ErrorPage** (`*`) — 404

## Layout: Header / Hero / Container

Единая горизонтальная сетка на всю страницу — один компонент `ui/Container`
(`max-width: 1800px`, `padding: 0 24px`), используется:

- в `main` (оборачивает весь `<Outlet/>` в `SharedLayout`);
- внутри `Header` — сам `HeaderContainer` full-bleed (фон на 100% ширины
  экрана), а лого/меню внутри обёрнуты в `Container`, чтобы совпадать по
  отступам с остальным контентом;
- внутри `Hero` — аналогично: `HeroContainer` full-bleed (приём
  `width:100vw; margin-left: calc(50% - 50vw)`), текст/форма внутри — в
  `HeroInner` с теми же `max-width/padding`, что и `Container`.

## Тема (светлая / тёмная)

Реализовано через `ThemeContext`/`ThemeProvider` (`src/context/theme/`),
`data-theme` ставится на `document.documentElement`, сохраняется в
`localStorage`, по умолчанию читает `prefers-color-scheme`.

Токены в `index.css` — обе темы заполнены одинаковым набором имён переменных:
`--primary-bg-dark-color`, `--accent-color`, `--light-accent`,
`--primary-text-color-light`, `--text-color`, `--text-color-muted`,
`--page-bg-color`, `--surface-bg-color`, `--border-color`,
`--border-color-strong`, `--glow-color`, `--shadow-color`, плюс тема-независимые
`--radius-*` и `--transition-base`.

Более удачные имена для будущего переименования (не переименовано намеренно,
чтобы не ломать текущий код разом): `--primary-bg-dark-color` → `--brand-navy`,
`--accent-color` → `--brand-accent`, `--text-color` → `--text-primary`,
`--page-bg-color` → `--bg-page`, `--surface-bg-color` → `--bg-surface`.

## Брейкпоинты

`src/constants/breakpoints.js` — единая точка правды вместо разрозненных
медиазапросов по всему проекту:

```js
export const breakpoints = {
  mobile: '375px',
  mobileLg: '450px',
  tablet: '625px',
  tabletLg: '768px',
  desktop: '1000px',
  desktopLg: '1280px',
  wide: '1800px',
};
export const media = {
  /* готовые шаблонные функции под каждый брейкпоинт */
};
```

CSS-переменные для брейкпоинтов принципиально не используются — `var()` нельзя
подставлять в условие `@media`, поэтому это обычный JS-модуль, импортируется в
`*.styled.jsx` файлы.

## Используемые библиотеки

### Frontend

- React 19
- React DOM
- React Router DOM
- Styled Components
- Formik
- Yup
- Axios
- React Responsive
- React Toastify
- React Icons
- Normalize.css
- modern-normalize

### Backend

- Express
- Nodemailer
- Body Parser
- Cors
- Dotenv

### Development

- Vite
- @vitejs/plugin-react-swc
- SWC
- ESLint
- Prettier
- Husky
- lint-staged
- vite-plugin-svgr

## Известные проблемы (актуально, по приоритету)

1. 🔴 **Форма обратной связи не работает на проде.** `ContactUsForm` шлёт `POST`
   на хардкод `http://localhost:5001/api/sendMail` — на GitHub Pages такого
   адреса не существует. Нужно: (а) задеплоить `server.js` отдельно
   (Render/Railway/Fly.io), (б) завести `VITE_API_URL` в `.env.development` /
   `.env.production`, (в) заменить хардкод на
   `` `${import.meta.env.VITE_API_URL}/api/sendMail` ``, (г) поправить CORS на
   сервере под прод-домен. Пока не сделано.
2. 🔴 **Фон мобильного меню отображается некорректно** — правка в
   `MobileMenu.jsx` пока не финальная, проблема ещё не закрыта до конца (похоже
   на конфликт `position: absolute` с контейнером/z-index, разбираемся).
3. 🟡 **Сервер (`server.js`) без рейт-лимита и защиты от спама** на роуте
   отправки формы — актуально сделать в связке с пунктом 1 (когда сервер
   переедет на отдельный хостинг).
4. 🟡 **Изображения не оптимизированы** — часть JPEG в районе 400–700 КБ
   (`obsessions`, `delivery5`, `can_drawn`), стоит перевести в WebP + добавить
   `loading="lazy"` для картинок вне первого экрана.
5. 🟢 `.gitignore` в порядке, `.env`/`PASSWORD` в историю git не попадали —
   проверено, риска утечки нет.
6. 🟢 SEO/OG-теги, `theme-color`, `description` — добавлены в `index.html`.
   `robots.txt`/`sitemap.xml` пока не заведены — низкий приоритет для B2B-сайта
   такого размера, но не забыть перед реальным продвижением.

## Roadmap / техдолг

1. Починить прод-адрес формы обратной связи (см. проблему №1) — приоритет №1.
2. Исправить отображение фона мобильного меню.
3. Обновить зависимости дальше по плану:

- react-router-dom → v7 (после перехода на RouterProvider и TypeScript);
- ESLint → v9 (Flat Config);
- SWC и сопутствующие dev-зависимости по мере выхода стабильных версий.

4. Постепенный переход на TypeScript (`.jsx → .tsx`, начиная с `ui/*`).
5. Унифицировать иконки — выбрать один подход (`react-icons` или SVG-спрайт), не
   смешивать оба.
6. Переименовать CSS-токены на более понятные имена (см. таблицу выше), когда
   дойдут руки пройтись по всем компонентам разом.
7. Оптимизация изображений (WebP, lazy-loading).
