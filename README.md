# ULM — Корпоративный сайт производителя металлической упаковки

B2B-сайт компании ULM: презентация продукции, направлений деятельности и
контакты для клиентов. Многоязычный (UA/EN), адаптивный, с формой обратной
связи.

## Технологии

**Frontend**

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — сборка и dev-сервер
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v6](https://reactrouter.com/) — маршрутизация
- [Styled Components](https://styled-components.com/) — стилизация
- [i18next](https://www.i18next.com/) / react-i18next — интернационализация
  (UA/EN)
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup) — формы
  и валидация
- [React Toastify](https://fkhadra.github.io/react-toastify/) — уведомления
- [React Icons](https://react-icons.github.io/react-icons/) — иконки
- [React Responsive](https://github.com/yocontra/react-responsive) — адаптивная
  логика
- [EmailJS](https://www.emailjs.com/) — отправка писем с формы обратной связи
  напрямую из браузера, без собственного backend

**Инструменты качества кода**

- ESLint + Prettier
- Husky + lint-staged — проверки перед коммитом

## Реализованный функционал

- Главная страница: hero-секция, "О компании", преимущества, направления
  деятельности (Industries), продукция, CTA-секция
- Каталог продукции с карточками товаров
- Страница контактов с формой обратной связи (валидация, honeypot-защита от
  спам-ботов, отправка через EmailJS)
- Страница политики конфиденциальности
- Кастомная страница 404
- Переключение языка интерфейса (UA / EN)
- Переключение темы оформления (светлая/тёмная)
- Полностью адаптивная вёрстка

## Структура проекта

```
src/
├── api/                  # Работа с внешними сервисами
├── assets/               # Изображения, глобальные стили
├── components/
│   ├── common/            # Переиспользуемые составные блоки (форма, шапка, подвал)
│   ├── layout/             # Обёртки layout'а (SharedLayout)
│   └── ui/                 # Атомарные UI-компоненты (кнопки, логотип, переключатели)
├── constants/            # Константы проекта
├── context/              # React Context (тема оформления)
├── features/             # Функциональные блоки по страницам/разделам
│   ├── contacts/
│   ├── home/
│   └── products/
├── hooks/                # Кастомные хуки
├── pages/                # Страницы (роуты)
├── types/                # Общие TypeScript-типы
├── App.tsx
├── i18n.ts
└── main.tsx
```

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

### Разработка

```bash
npm run dev
```

### Продакшен-сборка

```bash
npm run build
```

Результат — статические файлы в папке `dist/`, готовые к загрузке на любой
хостинг (Node.js на сервере не требуется).

### Локальный просмотр сборки

```bash
npm run preview
```

### Линтинг и форматирование

```bash
npm run lint
npm run format
```

## Отправка формы обратной связи

Форма отправляет письма напрямую из браузера через EmailJS — отдельный
backend-сервер для этого не требуется и не задеплоен (собственный
Express-сервер, ранее использовавшийся через Nodemailer, удалён как избыточный
после перехода на EmailJS).

## Деплой

Сайт разворачивается как статические файлы (папка `dist/`) — подходит для любого
хостинга без Node.js, включая обычный shared-хостинг с cPanel.
