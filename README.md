# ULM (Yuzhlitografmetall)

## 1. О проекте

**Название компании**

ООО «Южлитографметалл» (ULM — Yuzhlitografmetall)

**Тип проекта**

Корпоративный B2B сайт производителя металлической упаковки.

**Целевая аудитория**

- производители консервной продукции
- пищевые предприятия
- корпоративные клиенты
- оптовые заказчики

**Основные задачи сайта**

- презентация компании
- демонстрация продукции
- получение заявок
- повышение доверия
- мультиязычность

---

# 2. Стек

## Frontend

- React 19
- Vite
- React Router v6
- Styled Components
- i18next
- Formik
- Yup
- React Toastify
- React Icons
- Axios

## Backend

Отдельный Express сервер.

Используется только для формы обратной связи.

Nodemailer.

---

# 3. Деплой

Frontend

GitHub Pages

Автодеплой из ветки

```
main
```

Живой сайт

```
https://maershaa.github.io/ulm/
```

Backend

Пока НЕ задеплоен.

Поэтому форма обратной связи на production сейчас не работает.

---

# 4. Архитектура

```
App
 └── SharedLayout
      ├── Header
      ├── Outlet
      └── Footer
```

---

# 5. Роуты

```
/
```

Главная

```
/products
```

Продукция

```
/contacts
```

Контакты

```
*
```

404

---

# 6. Главные страницы

## Home

Содержит

- Hero
- About Us
- Advantages
- CTA

---

## Products

Каталог продукции.

---

## Contacts

Контактная информация

Карта

Форма обратной связи

---

# 7. Интернационализация

Используется

```
react-i18next
```

Языки

- 🇺🇦 украинский
- 🇬🇧 английский

Все переводы лежат

```
public/locales
```

Каждая страница имеет собственный namespace.

Например

```
home.json
products.json
contacts.json
main.json
```

---

# 8. Темизация

Есть две темы

- light
- dark

Используется

```
ThemeProvider
ThemeContext
```

Переключение хранится через

```
data-theme
```

---

# 9. Дизайн

## Стиль

Industrial Modern

Современный промышленный минимализм.

Ассоциации

- металл
- надежность
- производство
- точность
- европейский B2B

Избегать

- кислотных цветов
- слишком ярких градиентов
- стекломорфизма
- перегруженного UI

---

# 10. Цвета

## Светлая

```
Primary
#032541

Accent
#045174

Light Accent
#1274A2

Background
#F8F6F6

Surface
#F6F4F1
```

---

## Темная

```
Background
#0B1620

Surface
#426791

Accent
#4EA8D8
```

---

# 11. Типографика

Основной шрифт

```
Lora
```

---

# 12. Breakpoints

```js
mobile: 375;

mobileLg: 450;

tablet: 625;

tabletLg: 768;

desktop: 1000;

desktopLg: 1280;

wide: 1800;
```

Используется собственный helper

```
media()
```

---

# 13. z-index

```
Header

100

Mobile Menu

200

Burger Button

300
```

---

# 14. Иконки

Используются два подхода

react-icons

и

SVG Sprite

```
IconSprite
```

который монтируется в

```
main.jsx
```

---

# 15. Стиль кода

Используется

- функциональные компоненты
- hooks
- lazy loading
- alias `@`
- mobile first
- styled-components
- отдельные styled файлы
- экспорт компонентов через index.js

---

# 16. Принципы проекта

При разработке придерживаемся следующих правил.

### Компоненты

Каждый компонент отвечает только за одну задачу.

---

### Простота

Сначала простое рабочее решение.

Без преждевременного усложнения архитектуры.

---

### Стили

Используем существующие дизайн-токены проекта.

Не создавать новые цвета без необходимости.

Использовать

- radius variables
- media helper
- theme variables

---

### Responsive

Mobile First.

---

### Accessibility

Использовать

- aria-label
- semantic html
- keyboard navigation

---

# 17. Структура проекта

```text
ULM/
├── .vscode/
├── dist/
├── node_modules/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   │   ├── contacts.json
│   │   │   ├── home.json
│   │   │   ├── main.json
│   │   │   └── products.json
│   │   └── uk/
│   │       ├── contacts.json
│   │       ├── home.json
│   │       ├── main.json
│   │       └── products.json
│   ├── favicon.svg
│   └── logo_metall.png
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   └── ContactUsForm/
│   │   │       ├── ContactUsForm.jsx
│   │   │       └── ContactUsForm.styled.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.styled.jsx
│   │   ├── Header/
│   │   │   ├── BurgerMenuButton/
│   │   │   │   ├── BurgerMenuButton.jsx
│   │   │   │   └── BurgerMenuButton.styled.jsx
│   │   │   ├── MobileMenu/
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   └── MobileMenu.styled.jsx
│   │   │   ├── NavMenu/
│   │   │   │   ├── NavMenu.jsx
│   │   │   │   └── NavMenu.styled.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Header.styled.jsx
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── SharedLayout/
│   │   │   │   ├── SharedLayout.jsx
│   │   │   │   └── SharedLayout.styled.jsx
│   │   │   └── index.js
│   │   ├── ui/
│   │   │   ├── Container/
│   │   │   │   ├── Container.jsx
│   │   │   │   └── Container.styled.jsx
│   │   │   ├── LanguageSwitcher/
│   │   │   │   ├── LanguageSwitcher.jsx
│   │   │   │   └── LanguageSwitcher.styled.jsx
│   │   │   ├── Logo/
│   │   │   │   ├── logo_metall.png
│   │   │   │   ├── Logo.jsx
│   │   │   │   └── Logo.styled.jsx
│   │   │   ├── ThemeSwitcher/
│   │   │   │   ├── ThemeSwitcher.jsx
│   │   │   │   └── ThemeSwitcher.styled.jsx
│   │   │   └── Title/
│   │   │       └── index.js
│   │   └── index.js
│   ├── constants/
│   │   ├── featuresData.js
│   │   ├── index.js
│   │   └── productsData.js
│   ├── context/
│   │   └── theme/
│   │       ├── ThemeContext.jsx
│   │       └── ThemeProvider.jsx
│   ├── features/
│   │   ├── contacts/
│   │   │   ├── ContactContent/
│   │   │   └── index.js
│   │   ├── home/
│   │   │   ├── AboutUsSection/
│   │   │   ├── FeaturesModal/
│   │   │   │   ├── FeaturesModal.jsx
│   │   │   │   └── FeaturesModal.styled.jsx
│   │   │   ├── FeaturesSection/
│   │   │   ├── Hero/
│   │   │   └── index.js
│   │   └── products/
│   │       └── index.js
│   ├── hooks/
│   ├── pages/
│   │   ├── ContactsPage/
│   │   │   ├── ContactsPage.jsx
│   │   │   ├── ContactsPage.styled.jsx
│   │   │   └── Map.jsx
│   │   ├── ErrorPage/
│   │   │   ├── ErrorPage.jsx
│   │   │   └── ErrorPage.styled.jsx
│   │   ├── HomePage/
│   │   │   └── HomePage.jsx
│   │   └── ProductsPage/
│   │       ├── ProductsPage.jsx
│   │       └── ProductsPage.styled.jsx
│   ├── styles/
│   │   ├── breakpoints.js
│   │   ├── Glow.styled.jsx
│   │   ├── index.css
│   │   ├── zIndex.js
│   │   ├── icons.svg
│   │   └── IconSprite.jsx
│   ├── App.jsx
│   ├── App.styled.jsx
│   ├── i18n.js
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierrc.json
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── PROJECT.md
├── README.md
├── server.js
└── vite.config.js

```

---

# 18. Известные проблемы

- backend не задеплоен
- форма контактов не работает на GitHub Pages
- необходимо развернуть сервер отдельно

---

# 19. Планы

## Ближайшие

- закончить Products
- закончить Contacts
- подключить backend
- SEO
- favicon
- Open Graph
- robots.txt
- sitemap.xml

---

## После релиза

- оптимизация Lighthouse
- lazy images
- аналитика
- улучшение SEO

---
