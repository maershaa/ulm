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
    zIndex.js         # единая шкала z-index (см. ниже) — вместо разрозненных чисел по файлам
    productsData / featuresData
  context/
    theme/            # ThemeContext + ThemeProvider (светлая/тёмная тема, localStorage + prefers-color-scheme)
  components/
    ui/              # Container, Logo, Title, Glow (переиспользуемый блик-компонент, см. ниже)
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

## Блики (Glow)

Раньше в проекте было два разных приёма для одного и того же визуального
эффекта: в `SharedLayout` — размытые `::before`/`::after` псевдоэлементы
(`filter: blur(220px)` + `var(--accent-color)`), в `MobileMenu` — три растровые
PNG-картинки (`bg222/223/224.png`).

Оставили один подход — `ui/Glow` (`Glow.styled.jsx`): один styled-компонент с
пропсами `$size`, `$opacity`, `$top`/`$left`/`$right`/`$bottom`, `$centered`.
Используется и в `SharedLayout`, и в `MobileMenu`. Причины:

- берёт цвет из `var(--accent-color)` → сам подстраивается под смену темы
  (PNG-картинки под тёмную/светлую тему пришлось бы делать по две штуки);
- 0 сетевых запросов вместо 3 картинок;
- не мылится ни на каком экране/DPI, это просто круг + blur;
- правки (сдвинуть/поменять прозрачность/размер) — это числа в JSX, а не
  пересборка картинки.

PNG-файлы (`assets/images/mob-menu-bg/bg222.png`, `bg223.png`, `bg224.png`)
больше не используются и удалены из ассетов.

Родительский контейнер, где рендерится `<Glow />`, обязан иметь
`isolation: isolate` — иначе `z-index: -1` у блика может провалиться ниже фона
своего родителя, а не просто встать позади контента внутри него (`LayoutWrapper`
и `MobMenuContainer` это учитывают).

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

⚠️ Важно: `Header.jsx` переключает десктопное меню/бургер по
`useMediaQuery({ minWidth: 1280 })` — это тот же порог, что и
`breakpoints.desktopLg`. Все компоненты внутри `Header`/`NavMenu`/`MobileMenu`,
у которых разное поведение на мобильном и десктопе (сама навигация, подсветка
активной ссылки, `ThemeSwitcher`), должны переключаться **строго по
`breakpoints.desktopLg`**, а не по любому другому брейкпоину — иначе в
промежутке между двумя разными порогами получаются "гибридные", визуально
сломанные состояния (так было с `ThemeSwitcher`, использовавшим
`breakpoints.desktop` — исправлено).

## Z-index

`src/constants/zIndex.js` — единая шкала вместо разрозненных чисел (раньше было
`1000`, `2000`, `2001` в разных файлах без общей логики). Шаг 100, чтобы можно
было вставить новый слой между существующими:

```js
export const zIndex = {
  header: 100, // Шапка сайта (sticky)
  mobileMenu: 200, // Оверлей мобильного меню
  burgerButton: 300, // Кнопка бургер/крестик — всегда поверх мобильного меню
};
```

## Навигация: активная ссылка vs hover

В `NavMenu.styled.jsx` `StyledLink` теперь явно различает два состояния, раньше
визуально неотличимых (у обоих было одно и то же подчёркивание):

- **мобильное меню** — активная ссылка получает постоянную заливку-"таблетку"
  (`background-color: var(--light-accent)`), видно без наведения (на тач-
  устройствах hover не работает физически);
- **десктоп** (`min-width: breakpoints.desktopLg`) — заливка у активной ссылки
  снимается, вместо неё подчёркивание (`::after`, `scaleX(1)`) только у активной
  ссылки; при этом `hover`/`focus-visible` у любой ссылки меняет только цвет
  текста, без подчёркивания — так пользователь не путает "навёл мышкой" с "я
  сейчас на этой странице".

## Мобильное меню

- `MobMenuContainer` — `position: fixed` (не `absolute`). Раньше меню было
  `position: absolute` внутри `HeaderContainer`, у которого `position: sticky` —
  из-за этого оверлей меню считал свои размеры/координаты не от вьюпорта, а от
  родителя, который к тому же уже ограничен по ширине `Container`
  (`max-width`/`padding`). На части экранов/состояний скролла меню могло не
  перекрывать экран целиком. `fixed` всегда привязан к вьюпорту — это устраняет
  проблему в основе.
- `MenuBody` (раньше называлось `BackgroundsColores`) — просто flex-обёртка
  контента (лого, разделитель, навигация). Название унаследовано от старой
  версии, где этот элемент действительно держал фоновые PNG-картинки; сейчас фон
  — это `<Glow />`, рендерится сиблингом на уровне `MobMenuContainer`.
- Разделитель под лого — раньше отдельный `div` (`LineMobile`) с
  `background-color`, случайно совпадающей с фоном контейнера (линия была
  физически невидима). Заменён на `border-bottom` у обёртки `LogoWrapper` вокруг
  `<Logo />`, с той же переменной границы, что у `Header`
  (`var(--light-accent)`).

## Футер

`Footer.styled.jsx`: три похожих компонента (`Wrapper`, `Address`, `Phone`),
отличавшихся только цифрами `order`/`max-width`, объединены в один `Column` с
пропсами `$order`, `$orderDesktop`, `$maxWidth`, `$maxWidthDesktop`;
семантический тег (`<address>`) сохраняется через `as="address"` при
использовании. Также убран дублированный медиа-запрос
`font-size: 1rem → 1.1rem`, повторявшийся в трёх местах (`ContactInfo`,
`ContactLink`, `StyledLink`) — задан один раз на `FooterWrapper`, остальные
элементы наследуют `font-size`. `StyledLink` переименован в `CreditLink` (это
ссылка на автора в копирайте, имя совпадало по смыслу со `StyledLink` из
`NavMenu.styled.jsx`).

Не тронуто намеренно (низкий приоритет, чисто визуальные вопросы): у телефона
есть SVG-иконка, у факса — нет; цвет `#00baff` в `CreditLink` захардкожен, а не
вынесен в CSS-переменную.

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
2. 🟢 **Фон мобильного меню отображался некорректно — исправлено.** Причина:
   `position: absolute` внутри `position: sticky`-родителя (см. раздел
   "Мобильное меню" выше) плюс разрозненные z-index без общей шкалы. Заменили на
   `position: fixed` + `zIndex.js`, а PNG-фоны — на `<Glow />`. Нужна финальная
   визуальная проверка на реальных устройствах перед закрытием пункта
   окончательно.
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
2. Проверить на реальных устройствах исправление фона мобильного меню (проблема
   №2) и закрыть пункт.
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
8. Мелкое: унифицировать оформление телефона/факса в футере (иконка есть только
   у телефона); вынести `#00baff` в `CreditLink` в CSS-переменную.
