# ЮЖЛИТОГРАФМЕТАЛЛ (ULM) — Корпоративный сайт производителя металлической упаковки

## О проекте

B2B-сайт компании **ТОВ «Южлитографметалл» (ULM)** — производителя металлической
упаковки. Презентует продукцию и направления деятельности компании, помогает
получать заявки от корпоративных клиентов.

**Целевая аудитория:** производители консервной продукции, пищевые предприятия,
корпоративные и оптовые заказчики.

**Задачи сайта:** презентация компании, демонстрация продукции, приём заявок
через форму обратной связи, повышение доверия клиентов, мультиязычность (UA/EN).

## Стиль оформления

**Industrial Modern** — современный промышленный минимализм. Визуальные
ассоциации: металл, надёжность, производство, точность, европейский B2B.

- Шрифт: **Lora**
- Иконки: `react-icons`
- Подход к вёрстке: mobile-first

Breakpoints:

```js
mobile: 375;
mobileLg: 450;
tablet: 625;
tabletLg: 768;
desktop: 1000;
desktopLg: 1280;
wide: 1800;
```

## Технологии

**Frontend**

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — сборка и dev-сервер
- [React Router v6](https://reactrouter.com/) — маршрутизация
- [Styled Components](https://styled-components.com/) — стилизация (отдельные
  `.styled.ts` файлы на компонент)
- [i18next](https://www.i18next.com/) / react-i18next — интернационализация
  (UA/EN), переводы в `public/locales`
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) — формы
  и валидация
- [React Toastify](https://fkhadra.github.io/react-toastify/) — уведомления
- [React Responsive](https://github.com/yocontra/react-responsive) — адаптивная
  логика
- [EmailJS](https://www.emailjs.com/) — отправка писем с формы обратной связи
  напрямую из браузера, без собственного backend

**Инструменты качества кода**

- ESLint + Prettier
- Husky + lint-staged — проверки перед коммитом

**Принципы кода**

- Функциональные компоненты и hooks, lazy loading
- Alias `@` для импортов
- Каждый компонент отвечает за одну задачу
- Экспорт компонентов через `index.ts`
- Accessibility: `aria-label`, семантический HTML, поддержка навигации с
  клавиатуры

## Структура проекта

```
src/
├── api/                   # Работа с внешними сервисами
├── assets/                # Изображения, глобальные стили
├── components/
│   ├── common/             # Составные блоки (форма, шапка, подвал)
│   ├── layout/              # SharedLayout
│   └── ui/                  # Атомарные UI-компоненты
├── constants/             # Константы проекта
├── context/               # React Context (тема оформления)
├── features/              # Функциональные блоки по разделам
│   ├── contacts/
│   ├── home/
│   └── products/
├── hooks/                 # Кастомные хуки
├── pages/                 # Страницы (роуты)
├── types/                 # Общие TypeScript-типы
├── App.tsx
├── i18n.ts
└── main.tsx
```

## Страницы

| Страница          | Роут              | Содержание                                                                              |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------- |
| HomePage          | `/`               | Hero, AboutUsSection, FeaturesSection (с модалкой карточек), Industries, продукция, CTA |
| ProductsPage      | `/products`       | Каталог продукции                                                                       |
| ContactsPage      | `/contacts`       | Контакты, форма обратной связи, карта                                                   |
| PrivacyPolicyPage | `/privacy-policy` | Политика конфиденциальности (текст из `legal.json`)                                     |
| ErrorPage         | `*`               | Страница 404                                                                            |

## Реализованный функционал

- Мультиязычный интерфейс (UA/EN) через i18next
- Переключение темы оформления (светлая/тёмная) —
  `ThemeContext`/`ThemeProvider`, `data-theme` на `<html>`, сохранение в
  `localStorage`, по умолчанию читает `prefers-color-scheme`
- Форма обратной связи с валидацией (Yup), honeypot-защитой от спам-ботов и
  отправкой писем через EmailJS напрямую из браузера — без собственного
  backend-сервера
- Полностью адаптивная вёрстка (mobile-first)
- Страница политики конфиденциальности

## Запуск проекта

### Установка зависимостей

```bash
npm install
```

### Переменные окружения

Скопируйте `.env.example` в `.env` и заполните реальными значениями:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Ключи берутся в личном кабинете [emailjs.com](https://www.emailjs.com/) → Email
Services / Email Templates / Account → General.

⚠️ Значения `VITE_*` "запекаются" в сборку на этапе `npm run build` — перед
продакшен-сборкой убедитесь, что в `.env` стоят актуальные боевые ключи.

### Команды

```bash
npm run dev       # разработка
npm run build     # продакшен-сборка → dist/
npm run preview   # локальный просмотр сборки
npm run lint       # линтинг
npm run format    # форматирование
```

## Деплой

Сайт собирается в статические файлы (`dist/`) — подходит для любого хостинга без
Node.js, включая обычный shared-хостинг с cPanel.

На данный момент: автодеплой на GitHub Pages из ветки `main`. Планируется
перенос на собственный домен `ulm.com.ua` (хостинг cPanel/ProHosting, DNS уже
доступен заказчику).

Корпоративная почта (`info@ulm.com.ua`) работает через cPanel и подключена как
SMTP-сервис в EmailJS для приёма заявок с формы.

## Юридическая информация

Текст политики конфиденциальности хранится в переводах (`legal.json`, UA/EN) и
выводится на `/privacy-policy`. Актуальность текста стоит перепроверять при
каждом изменении стека или добавлении новых сторонних сервисов на сайт.
