export const theme = Object.freeze({
  colors: {
    /* Background */
    page: 'var(--bg-page)', // Основной фон страницы
    section: 'var(--bg-section)', // Фон секций
    card: 'var(--bg-card)', // Карточки, формы, блоки
    elevated: 'var(--bg-elevated)', // Hover, popup, выделенные элементы
    glowPrimary: 'var(--glow-primary)',

    /* Brand */
    brand: 'var(--color-brand)', // Header, Footer, Hero
    accent: 'var(--color-accent)', // Кнопки, ссылки, активные элементы
    accentLight: 'var(--color-accent-light)', // Hover, иконки, декоративные акценты

    /* Text */
    textPrimary: 'var(--text-primary)', // Основной текст
    textSecondary: 'var(--text-secondary)', // Второстепенный текст
    textMuted: 'var(--text-muted)', // Подписи, описания, placeholder
    textInverse: 'var(--text-inverse)', // Текст на темном фоне или кнопках

    /* Border */
    borderSubtle: 'var(--border-subtle)', // Разделители, неактивные границы
    borderDefault: 'var(--border-default)', // Карточки, изображения, секции
    borderStrong: 'var(--border-strong)', // Формы, focus, hover, активные элементы

    /* Status */
    success: 'var(--success)',
    successBg: 'var(--success-bg)',

    warning: 'var(--warning)',
    warningBg: 'var(--warning-bg)',

    error: 'var(--error)',
    errorBg: 'var(--error-bg)',
  },

  /* Border Radius */
  radius: {
    xs: '4px', // Badge, маленькие элементы
    sm: '8px', // Input, маленькие кнопки
    md: '12px', // Карточки, формы
    lg: '20px', // Большие блоки
    xl: '32px', // Hero, крупные контейнеры
    round: '999px', // Круглые кнопки, аватары
  },

  /* Shadows */
  shadows: {
    xs: '0 2px 8px rgba(0,0,0,.06)', // Легкая тень
    sm: '0 6px 16px rgba(0,0,0,.10)', // Карточки
    md: '0 12px 32px rgba(0,0,0,.14)', // Dropdown, формы
    lg: '0 24px 64px rgba(0,0,0,.18)', // Модальные окна

    switchTrack: 'inset 0 2px 4px rgba(0,0,0,.15)',
    switchTrackDark: 'inset 0 2px 4px rgba(0,0,0,.4)',
    switchThumb: '0 2px 4px rgba(0,0,0,.2)',
    switchThumbDark: '0 2px 4px rgba(0,0,0,.3)',
  },

  /* Glow */
  glow: {
    soft: '0 0 120px', // Фон страницы
    medium: '0 0 180px', // Hero, крупные секции
    strong: '0 0 260px', // Декоративные акценты
  },

  /* Transitions */
  transitions: {
    fast: 'all 200ms ease', // Hover
    base: 'all 300ms ease', // Большинство анимаций
    slow: 'all 500ms ease', // Появление секций, меню
  },

  /* Breakpoints */
  breakpoints: {
    mobile: '375px', // Маленькие смартфоны
    mobileLg: '450px', // Большие смартфоны
    tablet: '625px', // Небольшие планшеты
    tabletLg: '768px', // Планшеты
    desktop: '1000px', // Ноутбуки
    desktopLg: '1280px', // Стандартные десктопы
    wide: '1800px', // Широкие мониторы
  },

  /* Z-index */
  zIndex: {
    base: 0,
    header: 100, // Липкий header
    mobileMenu: 200, // Оверлей меню
    burgerButton: 300, // Кнопка поверх меню
    modalBackdrop: 1000, // Фон модалки (затемнение)
    modalContent: 1001, // Само окно модалки
    tooltip: 2000, // Всплывающие подсказки (всегда сверху)
  },
});
