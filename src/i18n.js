import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Загружает файлы переводов (JSON) по HTTP
import Backend from 'i18next-http-backend';

// Определяет язык пользователя (localStorage, браузер и т.д.)
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Подключает загрузку переводов из файлов
  .use(Backend)

  // Автоматически определяет текущий язык пользователя
  .use(LanguageDetector)

  // Связывает i18next с React
  .use(initReactI18next)

  .init({
    // Не указываем язык явно.
    // Сначала i18next попробует взять сохранённый язык из localStorage.
    // Если его там не окажется, будет использован fallbackLng ('uk').
    // lng: 'uk',

    // Используется, если перевод для выбранного языка отсутствует
    fallbackLng: 'uk',

    // Пространства имен (отдельные JSON-файлы с переводами)
    ns: ['main', 'home', 'products', 'contacts', 'legal'],

    backend: {
      // Путь, откуда i18next загружает файлы переводов
      // Например:
      // /locales/uk/main.json
      // /locales/en/products.json
      loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`,
    },

    detection: {
      // Сначала берем язык из localStorage
      order: ['localStorage'],
      // Сохраняем выбор пользователя
      caches: ['localStorage'],
    },
  });

export default i18n;
