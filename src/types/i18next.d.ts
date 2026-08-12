import { defaultNS } from '../i18n';
import contacts from '../../public/locales/en/contacts.json';
import home from '../../public/locales/en/home.json';
import legal from '../../public/locales/en/legal.json';
import main from '../../public/locales/en/main.json';
import products from '../../public/locales/en/products.json';

// Собираем все неймспейсы в один объект — именно его форма станет "эталоном" для проверки всех вызовов t() в проекте
const resources = {
  main,
  home,
  products,
  contacts,
  legal,
} as const; // as const обязателен — без него ключи объекта "расширятся" до string, и строгая проверка ключей перестанет работать

// module augmentation: "дополняем" типы самой библиотеки i18next своими собственными resources и defaultNS
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
