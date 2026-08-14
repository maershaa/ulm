import emailjs from '@emailjs/browser';

export const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  limitRate: {
    // Не больше 1 письма раз в 10 секунд с одного браузера те защита от дабл-кликов
    id: 'contact_form',
    throttle: 10000,
  },
});

export default emailjs;
